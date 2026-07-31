utils.jq(() => {
  $(function () {
    const els = document.getElementsByClassName('ds-friends_and_posts');
    for (var i = 0; i < els.length; i++) {
      const el = els[i];
      const api = el.dataset.api;
      if (api == null) {
        continue;
      }
      const default_avatar = def.avatar;
      // layout
      utils.request(el, api, async resp => {
        const data = await resp.json();
        for (let item of (data.content || data)) {
          // 安全修复：来自外部 API 的字段全部进行 HTML / 属性转义，避免 XSS。
          const url = util.escapeAttr(item.html_url || item.url || '#');
          const avatar = util.escapeAttr(item.avatar_url || item.avatar || item.icon || default_avatar);
          const safeAvatarDefault = util.escapeAttr(default_avatar);
          const name = util.escapeHtml(item.title || item.login || '');
          const desc = util.escapeHtml(item.description || (item.issue_number ? '#' + item.issue_number : ''));
          const noPostText = item.feed?.length > 0 ? 'RSS 解析失败' : '未设置 RSS 链接';
          const safeNoPostText = util.escapeHtml(noPostText);
          var cell = `<div class="grid-cell user-post-card">`;
          cell += `<div class="avatar-box">`;
          cell += `<a class="card-link" target="_blank" rel="external nofollow noopener noreferrer" href="${url}">`;
          cell += `<img src="${avatar}" onerror="javascript:this.removeAttribute(&#39;data-src&#39;);this.src=&#39;${safeAvatarDefault}&#39;;"/>`;
          cell += `<span class="title">${name}</span>`;
          cell += `</a>`;
          cell += `<div class="labels">`;
          if (Array.isArray(item.labels)) {
            for (let label of item.labels) {
              if (!label) continue;
              const color = util.escapeAttr(label.color || '');
              const hue = Number(label.hue);
              const saturation = Number(label.saturation);
              const lightness = Number(label.lightness);
              const labelName = util.escapeHtml(label.name || '');
              // hue/saturation/lightness 必须经过 Number 强制转换，避免被注入 style
              const safeHue = Number.isFinite(hue) ? hue : 0;
              const safeSat = Number.isFinite(saturation) ? saturation : 0;
              const safeLight = Number.isFinite(lightness) ? lightness : 0;
              if (lightness > 75) {
                cell += `<div class="label" style="background:#${color};color:hsla(${safeHue}, ${safeSat}%, 20%, 1);">${labelName}</div>`;
              } else if (saturation > 90 && lightness > 40) {
                cell += `<div class="label" style="background:#${color};color:hsla(${safeHue}, 50%, 20%, 1);">${labelName}</div>`;
              } else {
                cell += `<div class="label" style="background:#${color};color:white">${labelName}</div>`;
              }
            }
          }
          cell += `</div>`;
          cell += `</div>`;
          cell += `<div class="previews">`;
          cell += `<div class="desc">${desc}</div>`;
          cell += `<div class="posts">`;
          if (Array.isArray(item.posts) && item.posts.length > 0) {
            for (let post of item.posts) {
              if (!post) continue;
              const postUrl = util.escapeAttr(post.link || '#');
              const postTitle = util.escapeHtml(post.title || '');
              const postDate = util.escapeHtml(post.published || '');
              cell += `<a class="post-link" target="_blank" rel="external nofollow noopener noreferrer" href="${postUrl}">`;
              cell += `<span class="title">${postTitle}</span>`;
              cell += `<span class="date">${postDate}</span>`;
              cell += `</a>`;
            }
          } else {
            cell += `<span class="no-post">${safeNoPostText}</span>`;
          }
          cell += `</div>`;
          cell += `</div>`;
          cell += `</div>`;
          $(el).find('.grid-box').append(cell);
        }
        window.wrapLazyloadImages(el);
      });
    }
  });
});