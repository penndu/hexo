(function () {
  const els = document.getElementsByClassName('ds-fcircle');
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
        const arr = data.article_data || [];
        const limit = el.getAttribute('limit');
        // 安全修复：来自外部 API 字段需 HTML / 属性转义，避免 XSS。
        const safeAvatarDefault = util.escapeAttr(default_avatar);
        arr.forEach((item, i) => {
          if (limit && i >= limit) {
            return;
          }
          const safeIndex = util.escapeAttr(i);
          const safeAvatar = util.escapeAttr(item.avatar || default_avatar);
          const safeAuthor = util.escapeHtml(item.author || '');
          const safeCreated = util.escapeHtml(item.created || '');
          const safeLink = util.escapeAttr(item.link || '#');
          const safeTitle = util.escapeHtml(item.title || '');
          var cell = '<div class="timenode" index="' + safeIndex + '">';
          cell += '<div class="header">';
          cell += '<div class="user-info">';
          cell += '<img src="' + safeAvatar + '" onerror="javascript:this.src=\'' + safeAvatarDefault + '\';">';
          cell += '<span>' + safeAuthor + '</span>';
          cell += '</div>';
          cell += '<span>' + safeCreated + '</span>';
          cell += '</div>';
          cell += '<a class="body" href="' + safeLink + '" target="_blank" rel="external nofollow noopener noreferrer">';
          cell += safeTitle;
          cell += '</a>';
          cell += '</div>';
          utils.dom(el).append(cell);
        });
      });
    }
})();
