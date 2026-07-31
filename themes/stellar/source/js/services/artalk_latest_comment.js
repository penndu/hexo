utils.jq(() => {
    $(function () {
      const els = document.getElementsByClassName('ds-artalk');
      for (var i = 0; i < els.length; i++) {
        const el = els[i];
        const limit = parseInt(el.getAttribute('limit')) || 10;

        const api = el.dataset.api + '&limit=' + limit;
        if (api == null) {
          continue;
        }
        utils.request(el, api, async resp => {
          var data = await resp.json();
          data = data.data || [];
          data.forEach((item, i) => {
            if (!item) return;
            // 安全修复：来自外部 API 的字段需 HTML / 属性转义，避免 XSS。
            const safeIndex = util.escapeAttr(String(i));
            const safeNick = util.escapeHtml(item.nick || '');
            const safeTime = util.escapeHtml(new Date(item.date).toLocaleString());
            const safeUrl = util.escapeAttr(item.page_url || '#');
            const safeId = util.escapeAttr(item.id || '');
            // item.content_marked 是 Artalk 渲染后的 Markdown HTML。
            // 这里必须信任其来源（仅来自站方控制的 Artalk 服务），不做转义。
            // 但为防止意外输入，强制做一次 DOM 解析，过滤危险标签和事件处理器。
            const cleanHtml = sanitize_markdown_html(item.content_marked || '');
            var cell = '<div class="timenode" index="' + safeIndex + '">';
            cell += '<div class="header">';
            cell += '<div class="user-info">';
            cell += '<span>' + safeNick + '</span>';
            cell += '</div>';
            cell += '<span>' + safeTime + '</span>';
            cell += '</div>';
            cell += '<a class="body" href="' + safeUrl + '#atk-comment-' + safeId + '" target="_blank" rel="external nofollow noopener noreferrer">';
            cell += cleanHtml;
            cell += '</a>';
            cell += '</div>';
            $(el).append(cell);
          });
        });
      }
    });
  });

  // 简单净化：去除 <script>、事件处理器属性（on*）、javascript: 链接。
  function sanitize_markdown_html(html) {
    if (typeof html !== 'string') return '';
    try {
      const template = document.createElement('template');
      template.innerHTML = html;
      const node = template.content;
      const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT);
      let current = walker.nextNode();
      const tagsToRemove = ['SCRIPT', 'STYLE', 'IFRAME', 'OBJECT', 'EMBED', 'FORM', 'INPUT', 'TEXTAREA', 'BUTTON'];
      const dangerous = [];
      while (current) {
        dangerous.push(current);
        current = walker.nextNode();
      }
      for (const el of dangerous) {
        const tagName = el.tagName;
        if (tagsToRemove.includes(tagName)) {
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
      return node.textContent ? node : template.innerHTML;
    } catch (e) {
      return '';
    }
  }