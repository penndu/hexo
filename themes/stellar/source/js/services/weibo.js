(function () {
  const els = document.getElementsByClassName('ds-weibo');
    for (var i = 0; i < els.length; i++) {
      const el = els[i];
      const api = el.dataset.api;
      if (api == null) {
        continue;
      }
      const default_avatar = el.getAttribute('avatar') || def.avatar;
      // layout
      utils.request(el, api, async resp => {
        const data = await resp.json();
        const arr = Array.isArray(data && data.tweets) ? data.tweets : [];
        const limit = el.getAttribute('limit');
        const safeAvatarDefault = util.escapeAttr(default_avatar);
        const userInfo = data && data.user ? data.user : {};
        const safeAvatar = util.escapeAttr(userInfo.avatar_hd || default_avatar);
        const safeNick = util.escapeHtml(userInfo.nick_name || '');
        arr.forEach((item, i) => {
          if (!item) return;
          if (limit && i >= limit) {
            return;
          }
          // 安全修复：来自外部 API 的字段需 HTML / 属性转义，避免 XSS。
          const safeIndex = util.escapeAttr(String(i));
          const safeCreatedAt = util.escapeHtml(item.created_at || '');
          const safeUrl = util.escapeAttr(item.url || '#');
          const safeContent = util.escapeHtml(item.content || '');
          const repostsCount = String((item.reposts_count == null ? 0 : item.reposts_count));
          const commentsCount = String((item.comments_count == null ? 0 : item.comments_count));
          const attitudesCount = String((item.attitudes_count == null ? 0 : item.attitudes_count));
          var cell = '<div class="timenode" index="' + safeIndex + '">';
          cell += '<div class="header">';
          cell += '<div class="user-info">';
          cell += '<img src="' + safeAvatar + '" onerror="javascript:this.src=\'' + safeAvatarDefault + '\';">';
          cell += '<span>' + safeNick + '</span>';
          cell += '</div>';
          cell += '<span>' + safeCreatedAt + '</span>';
          cell += '</div>';
          cell += '<div class="body">';
          cell += '<a class="body" href="' + safeUrl + '" target="_blank" rel="external nofollow noopener noreferrer">';
          cell += safeContent;
          cell += '</a>';
          cell += '<div class="footer">';
          cell += '<div class="flex left">';
          cell += '</div>';
          cell += '<div class="flex right">';
          cell += '<div class="item reaction repost">';
          cell += '<a class="item comments last" href="' + safeUrl + '#issuecomment-new" target="_blank" rel="external nofollow noopener noreferrer">';
          cell += '<span>🔗 ' + util.escapeHtml(repostsCount) + '</span>';
          cell += '</a>';
          cell += '</div>';
          cell += '<a class="item comments last" href="' + safeUrl + '#issuecomment-new" target="_blank" rel="external nofollow noopener noreferrer">';
          cell += '<span><svg t="1666270368054" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2528" width="200" height="200"><path d="M952 64H72C32.3 64 0 96.3 0 136v508c0 39.7 32.3 72 72 72h261l128 128c14 14 32.5 21.1 50.9 21.1s36.9-7 50.9-21.1l128-128h261c39.7 0 72-32.3 72-72V136c0.2-39.7-32.1-72-71.8-72zM222 462c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z m290-7.7c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72c0 39.7-32.2 72-72 72z m290 8c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72c0 39.7-32.2 72-72 72z" p-id="2529"></path></svg> '
          + util.escapeHtml(commentsCount) + '</span>';
          cell += '</a>';
          cell += '<div class="item reaction attitudes">';
          cell += '<a class="item comments last" href="' + safeUrl + '#issuecomment-new" target="_blank" rel="external nofollow noopener noreferrer">';
          cell += '<span>👍 ' + util.escapeHtml(attitudesCount) + '</span>';
          cell += '</a>';
          cell += '</div>';

          cell += '</div>';
          cell += '</div>';
<<<<<<< HEAD
          $(el).append(cell);
=======
          // 右下角结束
          utils.dom(el).append(cell);
>>>>>>> 5b2b963070a80bccf10f5cea848b8f2316a67ff2
        });
      });
    }
})();
