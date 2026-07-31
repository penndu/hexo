utils.jq(() => {
  $(function () {
    const els = document.getElementsByClassName('ds-ghinfo');
    for (var i = 0; i < els.length; i++) {
      const el = els[i];
      const api = el.dataset.api;
      if (api == null) {
        continue;
      }
      // layout
      utils.request(null, api, async resp => {
        const data = await resp.json();
        function safeUrl(url) {
          // 阻止 javascript: 等危险协议被注入到 href/src。
          if (typeof url !== 'string') return '';
          const trimmed = url.trim();
          if (/^\s*(javascript|data|vbscript):/i.test(trimmed)) {
            return '';
          }
          return trimmed;
        }
        function fill(data) {
          for (let key of Object.keys(data)) {
            $(el).find("[type=text]#" + key).text(data[key]);
            $(el).find("[type=link]#" + key).attr("href", safeUrl(data[key]));
            $(el).find("[type=img]#" + key).attr("src", safeUrl(data[key]));
          }
        }
        const idx = el.getAttribute('index');
        if (idx != undefined) {
          const arr = data.content || data;
          if (arr && arr.length > idx) {
            let obj = arr[idx];
            obj['latest-tag-name'] = obj['name'];
            fill(arr[idx]);
          }
        } else {
          fill(data);
        }
      });
    }
  });
});