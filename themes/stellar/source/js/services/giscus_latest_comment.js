(function () {
  const els = document.getElementsByClassName('ds-giscus');
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
          const limit = el.getAttribute('limit');
          const safeAvatarDefault = util.escapeAttr(default_avatar);
          data.forEach((item, i) => {
            if (!item || !item.author) return;
            if (limit && i >= limit) {
              return;
            }
            // 安全修复：来自外部 API 的字段需 HTML / 属性转义，避免 XSS。
            const body = String(item.body || '');
            const truncatedBody = body.length > 50 ? body.substring(0, 50) + '...' : body;
            const safeIndex = util.escapeAttr(String(i));
            const safeAvatar = util.escapeAttr(item.author.avatarUrl || default_avatar);
            const safeLogin = util.escapeHtml(item.author.login || '');
            const safeTime = util.escapeHtml(new Date(item.createdAt).toLocaleString());
            const safeUrl = util.escapeAttr(item.url || '#');
            const safeComment = util.escapeHtml(truncatedBody);
            var cell = '<div class="timenode" index="' + safeIndex + '">';
            cell += '<div class="header">';
            cell += '<div class="user-info">';
            cell += '<img src="' + safeAvatar + '" onerror="javascript:this.src=\'' + safeAvatarDefault + '\';">';
            cell += '<span>' + safeLogin + '</span>';
            cell += '</div>';
            cell += '<span>' + safeTime + '</span>';
            cell += '</div>';
            cell += '<a class="body" href="' + safeUrl + '" target="_blank" rel="external nofollow noopener noreferrer">';
            cell += safeComment;
            cell += '</a>';
            cell += '</div>';
            utils.dom(el).append(cell);
          });
        });
      }
})();
