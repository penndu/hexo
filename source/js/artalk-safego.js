// Artalk 评论链接安全跳转（与 hexo-safego 插件配套，处理评论区动态渲染的链接）
(function () {
  'use strict';

  // 与 _config.yml 中 hexo_safego 保持一致
  var WHITELIST = ['dusays.com', '7bu.top'];
  var GO_PAGE = '/go.html';
  var PARAM = 'u';

  // 与 hexo-safego 一致的 Base64 URL-safe 编码
  function encodeSafeUrl(str) {
    var base64 = btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (_, p1) {
        return String.fromCharCode('0x' + p1);
      })
    );
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  // 安全白名单匹配（带点号边界，避免 evildusays.com 绕过）
  function inWhitelist(href) {
    if (!/^https?:\/\//i.test(href)) return true;
    var host;
    try {
      host = new URL(href).hostname;
    } catch (e) {
      return true;
    }
    return WHITELIST.some(function (d) {
      return host === d || host.endsWith('.' + d);
    });
  }

  function processLink(a) {
    var href = a.getAttribute('href');
    if (!href) return;
    if (a.getAttribute('data-safego') === '1') return;
    if (!/^https?:\/\//i.test(href)) return;
    // 排除 Artalk 版权链接、管理员操作元素
    if (a.closest('.atk-copyright, [atk-only-admin-show]')) return;
    if (inWhitelist(href)) return;

    a.setAttribute('href', GO_PAGE + '?' + PARAM + '=' + encodeSafeUrl(href));
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer nofollow');
    a.setAttribute('data-safego', '1');
  }

  function processAll() {
    var c = document.querySelector('#artalk_container');
    if (!c) return;
    Array.from(c.querySelectorAll('a')).forEach(processLink);
  }

  function observeContainer(container) {
    var timer = null;
    var obs = new MutationObserver(function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(processAll, 120);
    });
    obs.observe(container, { childList: true, subtree: true });
  }

  function start() {
    var container = document.querySelector('#artalk_container');
    if (container) {
      processAll();
      observeContainer(container);
    } else {
      // 评论容器尚未插入，等待出现
      var wait = setInterval(function () {
        var c = document.querySelector('#artalk_container');
        if (c) {
          clearInterval(wait);
          processAll();
          observeContainer(c);
        }
      }, 300);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
