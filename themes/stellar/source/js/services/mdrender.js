(function () {
  const els = document.getElementsByClassName('ds-mdrender');
  for (var i = 0; i < els.length; i++) {
    const el = els[i];
    const src = `${el.getAttribute('src')}?t=${new Date().getTime()}`;

    utils.request(el, src, async resp => {
      const data = await resp.text();
      // 安全修复：marked.parse 输出 HTML 直接注入存在 XSS 风险，
      // 即便数据源是站方准备的 markdown，也可能被人篡改或外部 API 触发。
      // 使用最小净化：过滤 <script> / on* / javascript: 链接。
      el.innerHTML = sanitize_user_html(marked.parse(data));
    });
  }
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
