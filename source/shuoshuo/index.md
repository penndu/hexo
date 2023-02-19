---
layout: page
top_meta: false
bottom_meta: false
sidebar: []
comments: false
title: 说说
---

<div id="bber"></div>
<span id="memosCount">0</span>
<script>
  //获取 Memos 总条数
  function getTotal() {
    var totalUrl = "https://dusays-memos.itisn.cyou/api/memo/amount?creatorId=1";
    fetch(totalUrl).then(response => {
      return response.json();
    }).then(data => {
      // console.log(data.data);
      var memosCount = document.getElementById('memosCount');
      memosCount.innerHTML = data.data;
    }).catch(err => {
      // Do something for an error here
    });
  };
  window.onload = getTotal();
</script>
<script type="text/javascript">
  var bbMemos = {
    memos : 'https://dusays-memos.itisn.cyou/',//修改为自己部署 Memos 的网址，末尾有 / 斜杠
    limit : '',//默认每次显示 10条 
    creatorId:'1' ,//默认为 101用户 https://demo.usememos.com/u/101
    domId: '',//默认为 <div id="bber"></div>
  }
</script>
<script src="https://immmmm.com/bb-lmm-mk.js"></script>
<script src="https://fastly.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="https://fastly.jsdelivr.net/gh/Tokinx/ViewImage/view-image.min.js"></script>
<script src="https://fastly.jsdelivr.net/gh/Tokinx/Lately/lately.min.js"></script>