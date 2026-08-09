(function () {
  const els = document.getElementsByClassName('ds-friends');
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
          // 安全修复：来自外部 API 的字段需 HTML / 属性转义，避免 XSS。
          const url = util.escapeAttr(item.html_url || item.url || '#');
          const avatar = util.escapeAttr(item.avatar_url || item.avatar || item.icon || default_avatar);
          const safeAvatarDefault = util.escapeAttr(default_avatar);
          const name = util.escapeHtml(item.title || item.login || '');
          let label = '';
          if (item.labels && item.labels.length > 0) {
            label = item.labels[0];
          }
          const labelColor = label ? util.escapeAttr(label.color || '') : '';
          const labelName = label ? util.escapeHtml(label.name || '') : '';
          var cell = `<div class="grid-cell user-card">`;
          cell += `<a class="card-link" target="_blank" rel="external nofollow noopener noreferrer" href="${url}">`;
          cell += `<img src="${avatar}" onerror="javascript:this.removeAttribute(&#39;data-src&#39;);this.src=&#39;${safeAvatarDefault}&#39;;"/>`;
          cell += `<div class="name image-meta">`;
          cell += `<span class="image-caption">${name}</span>`;
          cell += `</div>`;
          if (label) {
            cell += `<div class="label" style="background:#${labelColor};">${labelName}</div>`;
          }
          cell += `</a>`;
          cell += `</div>`;
          utils.dom(el).find('.grid-box').append(cell);
        }
        window.wrapLazyloadImages(el);
      });
    }
})();
