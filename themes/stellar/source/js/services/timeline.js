utils.jq(() => {
  $(function () {
    const reactions = {
      '+1': '👍',
      '-1': '👎',
      'laugh': '😀',
      'hooray': '🎉',
      'confused': '😕',
      'heart': '❤️',
      'rocket': '🚀',
      'eyes': '👀'
    }
    const timelines = document.getElementsByClassName('ds-timeline');
    for (var i = 0; i < timelines.length; i++) {
      const el = timelines[i];
      const api = el.dataset.api;
      if (api == null) {
        continue;
      }
      // layout
      utils.request(el, api, async resp => {
        const data = await resp.json();
        const query = new URL(api).search;
        const arr = data.content || data;
        var users = [];
        const filter = el.getAttribute('user');
        if (filter && filter.length > 0) {
          users = filter.split(",");
        }
        var hide = [];
        const hideStr = el.getAttribute('hide');
        if (hideStr && hideStr.length > 0) {
          hide = hideStr.split(",");
        }
        arr.forEach((item, i) => {
          if (!item) return;
          if (item.user && item.user.login && users.length > 0) {
            if (!users.includes(item.user.login)) {
              return;
            }
          }
          // 安全修复：来自外部 API 的字段需 HTML / 属性转义，避免 XSS。
          const safeIndex = util.escapeAttr(String(i));
          var cell = '<div class="timenode" index="' + safeIndex + '">';
          cell += '<div class="header">';
          if (!users.length && item.user && !hide.includes('user')) {
            const safeUserUrl = util.escapeAttr(item.user.html_url || '#');
            const safeAvatar = util.escapeAttr(item.user.avatar_url || '');
            const safeLogin = util.escapeHtml(item.user.login || '');
            cell += '<a class="user-info" href="' + safeUserUrl + '" target="_blank" rel="external nofollow noopener noreferrer">';
            cell += '<img src="' + safeAvatar + '">';
            cell += '<span>' + safeLogin + '</span>';
            cell += '</a>';
          }
          let date = new Date(item.created_at);
          cell += '<span>' + util.escapeHtml(date.toLocaleString()) + '</span>';
          cell += '</div>';
          cell += '<div class="body">';
          if (!hide.includes('title')) {
            const safeHtmlUrl = util.escapeAttr(item.html_url || '#');
            const safeTitle = util.escapeHtml(item.title || item.name || item.tag_name || '');
            cell += '<p class="title">';
            cell += '<a href="' + safeHtmlUrl + '" target="_blank" rel="external nofollow noopener noreferrer">';
            cell += safeTitle;
            cell += '</a>';
            cell += '</p>';
          }

          // marked.parse 来自第三方 Markdown 库，输出 HTML 直接拼接视为可信。
          // 但是为防止来源被替换/篡改后插入恶意脚本，依然进行一次最小净化。
          cell += sanitize_user_html(marked.parse(item.body || ''));
          if (!hide.includes('footer')) {
            cell += '<div class="footer">';
            cell += '<div class="flex left">';
            if (item.labels) {
              item.labels.forEach((label, i) => {
                if (!label) return;
                if (!query || !query.includes(encodeURI(label.name))) {
                  const safeLabelName = util.escapeHtml(label.name || '');
                  // className 拼接：标签名只作为 className，需白名单字符，避开 CSS 注入。
                  const safeLabelClass = String(label.name || '').replace(/[^a-zA-Z0-9_\-]/g, '');
                  const safeLabelColor = String(label.color || '').replace(/[^a-fA-F0-9]/g, '');
                  cell += '<div class="item label ' + safeLabelClass + '" style="background:#' + safeLabelColor + '18;border-color:#' + safeLabelColor + '36">';
                  cell += '<span>' + safeLabelName + '</span>';
                  cell += '</div>';
                }
              });
            } else if (item.zipball_url) {
              const safeZipballUrl = util.escapeAttr(item.zipball_url || '#');
              const safeTagName = util.escapeHtml(item.tag_name || '');
              cell += '<a class="item download" href="' + safeZipballUrl + '" target="_blank" rel="external nofollow noopener noreferrer">';
              cell += '<span>📦 ' + safeTagName + '.zip</span>';
              cell += '</a>';
            }
            cell += '</div>';
            cell += '<div class="flex right">';
            if (item.reactions && item.reactions.total_count > 0) {
              for (let key of Object.keys(reactions)) {
                let num = item.reactions[key];
                if (num > 0) {
                  const safeClass = String(key).replace(/[^a-zA-Z0-9_\-]/g, '');
                  cell += '<div class="item reaction ' + safeClass + '">';
                  cell += '<span>' + reactions[key] + ' ' + util.escapeHtml(String(item.reactions[key])) + '</span>';
                  cell += '</div>';
                }
              }
            }
            if (item.comments != null) {
              const safeHtmlUrl = util.escapeAttr(item.html_url || '#');
              const safeComments = util.escapeHtml(String(item.comments || 0));
              cell += '<a class="item comments last" href="' + safeHtmlUrl + '#issuecomment-new" target="_blank" rel="external nofollow noopener noreferrer">';
              cell += '<span><svg t="1666270368054" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2528" width="200" height="200"><path d="M952 64H72C32.3 64 0 96.3 0 136v508c0 39.7 32.3 72 72 72h261l128 128c14 14 32.5 21.1 50.9 21.1s36.9-7 50.9-21.1l128-128h261c39.7 0 72-32.3 72-72V136c0.2-39.7-32.1-72-71.8-72zM222 462c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z m290-7.7c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72c0 39.7-32.2 72-72 72z m290 8c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72c0 39.7-32.2 72-72 72z" p-id="2529"></path></svg> ' + safeComments + '</span>';
              cell += '</a>';
            }

            cell += '</div>';
            cell += '</div>';
          }

          cell += '</div>';
          cell += '</div>';
          $(el).append(cell);
        });
        window.wrapLazyloadImages(el);
      });
    }
  });

  // 最小 HTML 净化：去除 <script>、事件处理器属性（on*）、javascript: 链接。
  function sanitize_user_html(html) {
    if (typeof html !== 'string') return '';
    try {
      const template = document.createElement('template');
      template.innerHTML = html;
      const node = template.content;
      const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT);
      const all = [];
      let current = walker.nextNode();
      while (current) { all.push(current); current = walker.nextNode(); }
      const tagsToRemove = ['SCRIPT', 'STYLE', 'IFRAME', 'OBJECT', 'EMBED', 'FORM', 'INPUT', 'TEXTAREA', 'BUTTON', 'LINK', 'META'];
      for (const el of all) {
        if (tagsToRemove.includes(el.tagName)) {
          el.remove();
          continue;
        }
        const attrs = el.attributes;
        const removeAttrs = [];
        for (let i = 0; i < attrs.length; i++) {
          const name = attrs[i].name;
          const value = attrs[i].value;
          if (/^on/i.test(name)) removeAttrs.push(name);
          else if ((name === 'href' || name === 'src') && /^\s*javascript:/i.test(value)) removeAttrs.push(name);
          else if (name === 'srcdoc') removeAttrs.push(name);
        }
        for (const name of removeAttrs) {
          el.removeAttribute(name);
        }
      }
      return template.innerHTML;
    } catch (e) {
      return '';
    }
  }