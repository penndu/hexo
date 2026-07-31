utils.jq(() => {
  $(function () {
    const els = document.getElementsByClassName('ds-sites');
    for (var i = 0; i < els.length; i++) {
      const el = els[i];
      const api = el.dataset.api;
      if (api == null) {
        continue;
      }
      const default_avatar = def.avatar;
      const default_cover = def.cover;
      // layout
      utils.request(el, api, async resp => {
        const data = await resp.json();
        const safeAvatarDefault = util.escapeAttr(default_avatar);
        const safeCoverDefault = util.escapeAttr(default_cover);
        const items = Array.isArray(data && data.content) ? data.content : [];
        for (let item of items) {
          if (!item) continue;
          // 安全修复：来自外部 API 的字段需 HTML / 属性转义，避免 XSS。
          const url = util.escapeAttr(item.url || '#');
          const cover = util.escapeAttr(item.cover || item.snapshot || item.screenshot || '');
          const icon = util.escapeAttr(item.icon || item.avatar || default_avatar);
          const title = util.escapeHtml(item.title || '');
          const desc = util.escapeHtml(item.description || item.url || '');
          var cell = `<div class="grid-cell site-card">`;
          cell += `<a class="card-link" target="_blank" rel="external nofollow noopener noreferrer" href="${url}">`;
          cell += `<img src="${cover}" onerror="javascript:this.removeAttribute(&#39;data-src&#39;);this.src=&#39;${safeCoverDefault}&#39;;"/>`;
          cell += `<div class="info">`;
          cell += `<img src="${icon}" onerror="javascript:this.removeAttribute(&#39;data-src&#39;);this.src=&#39;${safeAvatarDefault}&#39;;"/>`;
          cell += `<span class="title">${title}</span>`;
          cell += `<span class="desc">${desc}</span>`;
          cell += `</div>`;
          cell += `<div class="labels">`;
          if (Array.isArray(item.labels)) {
            for (let label of item.labels) {
              if (!label) continue;
              const color = util.escapeAttr(label.color || '');
              const labelName = util.escapeHtml(label.name || '');
              const hue = Number(label.hue);
              const saturation = Number(label.saturation);
              const lightness = Number(label.lightness);
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
          cell += `</a>`;
          cell += `</div>`;
          $(el).find('.grid-box').append(cell);
        }
        window.wrapLazyloadImages(el);
      });
    }
  });
});