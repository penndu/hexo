(function () {
  const els = Array.from(document.getElementsByClassName('ds-memos'));

  els.forEach(el => {
    const api = el.dataset.api;
    if (!api) return;

    const default_avatar = el.getAttribute('avatar') || def.avatar;
    const limit = el.getAttribute('limit');
    const host = api.match(/https:\/\/(.*?)\/(.*)/i)[1];

    utils.request(el, api, async resp => {
      const data = await resp.json();
      let memos = versionHandlers.identify(data);
      if (memos.version === "feature" )return;

      const users = el.getAttribute('user')?.split(",") || [];
      const hide = el.getAttribute('hide')?.split(",") || [];

      await Promise.all(memos.data.slice(0, limit || memos.data.length).map(item =>
          createMemoCell(item, memos, users, hide, default_avatar, host).then(cell => utils.dom(el).append(cell))
      ));
    });

    async function createMemoCell(item, memos, users, hide, default_avatar, host) {
      const versionHandler = versionHandlers[memos.version] || versionHandlers["feature"];
      return `<div class="timenode">
                      <div class="header">${!users.length && !hide.includes('user') ? await versionHandler.buildUser(item, memos, default_avatar) : ''}
                      <span>${versionHandler.buildDate(item).toLocaleString()}</span></div>
                      <div class="body">${sanitize_user_html(marked.parse(item.content || ''))}
                      <p>${versionHandler.buildImages(item, host).join('')}</p>
                      </div></div>`;
    }

    // Memos版本管理
    const versionHandlers = {
      "22-": {
        buildUser: async (item, memos, default_avatar) => {
          const safeAvatar = util.escapeAttr(default_avatar || '');
          const safeName = util.escapeHtml(item.creatorName || '');
          return `<div class="user-info">${default_avatar ? `<img src="${safeAvatar}">` : ''}<span>${safeName}</span></div>`;
        },
        buildDate: item => new Date(item.createdTs * 1000),
        buildImages: (item, host) => (item.resourceList || []).filter(res => res.type?.includes('image/')).map(res => {
          const safeSrc = util.escapeAttr(res.externalLink || `https://${host}/o/r/${res.id}`);
          return `<p><img src="${safeSrc}"></p>`;
        })
      },
      "22+": {
        buildUser: async (item, memos, default_avatar) => {
          const creatorId = item?.creator.split('/')[1];
          let user = memos.users.find(user => user.id === parseInt(creatorId));
          if (!user) {
            if (!memos.requests[creatorId]) {
              memos.requests[creatorId] = fetch(`${memos.site}/api/v1/users/${creatorId}`)
                  .then(response => response.json())
                  .then(data => {
                    if (data.username) {
                      user = data;
                      memos.users.push(data);
                    } else {
                      user = null;
                    }
                  })
                  .finally(() => delete memos.requests[creatorId]);
            }
            await memos.requests[creatorId];
            user = memos.users.find(user => user.id === parseInt(creatorId));
          }
          const name = user ? user.nickname || user.username : 'memos';
          const avatarUrl = user?.avatarUrl ? `${memos.site}${user.avatarUrl}` : default_avatar || '';
          const safeAvatar = util.escapeAttr(avatarUrl);
          const safeName = util.escapeHtml(name);
          return `<div class="user-info">${avatarUrl ? `<img src="${safeAvatar}">` : ''}<span>${safeName}</span></div>`;
        },
        buildDate: item => new Date(item.createTime),
        buildImages: (item) => (item.resources || []).filter(res => res.type?.includes('image/')).map(res => {
          const safeSrc = util.escapeAttr(res.externalLink || `https://${host}/o/r/${res.id}`);
          return `<p><img src="${safeSrc}"></p>`;
        })
      },
      "25+": {
        buildUser: async (item, memos, default_avatar) => {
          const creatorId = item?.creator.split('/')[1];
          let user = memos.users.find(user => user.name.split('/')[1] === creatorId);
          if (!user) {
            if (!memos.requests[creatorId]) {
              memos.requests[creatorId] = fetch(`${memos.site}/api/v1/users/${creatorId}`)
                  .then(response => response.json())
                  .then(data => {
                    if (data.username) {
                      user = data;
                      memos.users.push(data);
                    } else {
                      user = null;
                    }
                  })
                  .finally(() => delete memos.requests[creatorId]);
            }
            await memos.requests[creatorId];
            user = memos.users.find(user => user.name.split('/')[1] === creatorId);
          }
          const name = user ? user.displayName || user.username : 'memos';
          const avatarUrl = user?.avatarUrl ? `${memos.site}${user.avatarUrl}` : default_avatar || '';
          const safeAvatar = util.escapeAttr(avatarUrl);
          const safeName = util.escapeHtml(name);
          return `<div class="user-info">${avatarUrl ? `<img src="${safeAvatar}">` : ''}<span>${safeName}</span></div>`;
        },
        buildDate: item => new Date(item.createTime),
        buildImages: (item) => (item.attachments || []).filter(res => res.type?.includes('image/')).map(res => {
          const safeSrc = util.escapeAttr(res.externalLink || `https://${host}/file/${res.name}/${res.filename}`);
          return `<div class="image-bg"><img src="${safeSrc}"></div>`;
        })
      },
      "feature": {
        buildUser: async () => "memos",
        buildDate: () => new Date(),
        buildImages: () => []
      },
      identify: (data) => {
        let memos = { version: "feature", users: [], site: api.split('/api/v1')[0], requests: {}, data: [] }
        if (Array.isArray(data)) {
          memos.version = "22-";
          memos.data = data;
          console.log("当前Memos版本为22-");
        } else if (data.memos && !data.memos[0].attachments) {
          memos.version = "22+";
          memos.data = data.memos;
          console.log("当前Memos版本为22+");
        } else if (data.memos && data.memos[0].attachments) {
          memos.version = "25+";
          memos.data = data.memos;
          console.log("当前Memos版本为25+");
        } else {
          memos.version = "feature";
          console.log("当前Memos版本过高，请到Stellar社区反馈");
        }
        return memos
      }
    };
  });
<<<<<<< HEAD

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
});
=======
})();
>>>>>>> 5b2b963070a80bccf10f5cea848b8f2316a67ff2
