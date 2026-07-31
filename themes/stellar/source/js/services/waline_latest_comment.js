utils.jq(() => {
    $(function () {
      const els = document.getElementsByClassName('ds-waline');
      for (var i = 0; i < els.length; i++) {
        const el = els[i];
        const limit = parseInt(el.getAttribute('limit')) || 10;
        const apiBase = el.dataset.api;
        if (apiBase == null) {
          continue;
        }
        const api = apiBase + '/comment?type=recent&count=' + limit;
        const default_avatar = def.avatar;
        utils.request(el, api, async resp => {
          const data = await resp.json();
          const safeAvatarDefault = util.escapeAttr(default_avatar);
          data.forEach((item, i) => {
            if (!item) return;
            // 安全修复：来自外部 API 字段需 HTML / 属性转义，避免 XSS。
            const safeIndex = util.escapeAttr(String(i));
            const safeAvatar = util.escapeAttr(item.avatar || default_avatar);
            const safeNick = util.escapeHtml(item.nick || '');
            const safeTime = util.escapeHtml(new Date(item.time).toLocaleString());
            const safeUrl = util.escapeAttr(item.url || '#');
            const safeObjectId = util.escapeAttr(item.objectId || '');
            // 评论内容来自外部 API，原样拼接到 innerHTML 是 XSS 风险源，
            // 此处仅展示纯文本（去除 <a> 标签内容），不做 HTML 还原。
            let commentText = String(item.comment || '');
            commentText = commentText.replace(/<a\b[^>]*>(.*?)<\/a>/g, '$1');
            const safeComment = util.escapeHtml(commentText);
            var cell = '<div class="timenode" index="' + safeIndex + '">';
            cell += '<div class="header">';
            cell += '<div class="user-info">';
            cell += '<img src="' + safeAvatar + '" onerror="javascript:this.src=\'' + safeAvatarDefault + '\';">';
            cell += '<span>' + safeNick + '</span>';
            cell += '</div>';
            cell += '<span>' + safeTime + '</span>';
            cell += '</div>';
            cell += '<a class="body" href="' + safeUrl + '#' + safeObjectId + '" target="_blank" rel="external nofollow noopener noreferrer">';
            cell += safeComment;
            cell += '</a>';
            cell += '</div>';
            $(el).append(cell);
          });
        });
      }
    });
  });