// 本插件由CardLink定制而成，原项目源码: https://github.com/Lete114/CardLink
function setCardLink(nodes) {
  // If the `nodes` do not contain a `forEach` method, then the default `a[cardlink]` is used
  nodes = 'forEach' in (nodes || {}) ? nodes : document.querySelectorAll('a[cardlink]')
  nodes.forEach((el) => {
    // If it is not a tag element then it is not processed
    if (el.nodeType !== 1) return;
    el.removeAttribute('cardlink');
    const api = el.dataset.api;
    if (api == null) return;
<<<<<<< HEAD
    fetch(api).then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    }).then(function(data) {
      var autofill = [];
      const autofillStr = el.getAttribute('autofill');
      if (autofillStr) {
        autofill = autofillStr.split(',');
      }
      // 安全修复：来自外部 API 字段需 HTML / 属性转义，避免 XSS。
      if (data.title && data.title.length > 0 && autofill.includes('title')) {
        const title = util.escapeHtml(data.title);
        const titleEl = el.querySelector('.title');
        if (titleEl) {
          titleEl.textContent = data.title;
        }
        el.title = data.title;
      }
      if (data.icon && data.icon.length > 0 && autofill.includes('icon')) {
        // 阻止 javascript: / data: 等危险协议被注入到 background-image 中。
        const safeIcon = (typeof data.icon === 'string' && !/^\s*(javascript|data|vbscript):/i.test(data.icon.trim()))
          ? data.icon
          : '';
        const imgEl = el.querySelector('.img');
        if (imgEl) {
          if (safeIcon) {
            imgEl.style.backgroundImage = 'url("' + safeIcon.replace(/"/g, '%22') + '")';
            imgEl.setAttribute('data-bg', safeIcon);
          }
        }
      }
      let desc = el.querySelector('.desc');
      if (desc && data.desc && data.desc.length > 0 && autofill.includes('desc')) {
        desc.textContent = data.desc;
      }
    }).catch(function(error) {
      console.error(error);
    });
=======
    // 走统一请求入口，动态数据缓存对 siteinfo 同样生效
    utils.request(null, api, function(response) {
      return response.json().then(function(data) {
        var autofill = [];
        const autofillStr = el.getAttribute('autofill');
        if (autofillStr) {
          autofill = autofillStr.split(',');
        }
        if (data.title && data.title.length > 0 && autofill.includes('title')) {
          el.querySelector('.title').innerHTML = data.title;
          el.title = data.title;
        }
        if (data.icon && data.icon.length > 0 && autofill.includes('icon')) {
          el.querySelector('.img').style = 'background-image: url("' + data.icon + '");';
          el.querySelector('.img').setAttribute('data-bg', data.icon);
        }
        let desc = el.querySelector('.desc');
        if (desc && data.desc && data.desc.length > 0 && autofill.includes('desc')) {
          desc.innerHTML = data.desc;
        }
      }).catch(function(error) {
        console.error(error);
      });
    }, undefined, { service: 'siteinfo' });
>>>>>>> 5b2b963070a80bccf10f5cea848b8f2316a67ff2
  })
}
