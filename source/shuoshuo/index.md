---
layout: page
top_meta: false
bottom_meta: false
sidebar: []
comments: false
title: 说说广场
---

<div class="container">
  <p>共发表了 <span id="memosCount">0</span> 条 Memos 说说！</p>
</div>
<script>
  function getTotal() {
    var totalUrl = "https://s.dusays.com/api/v1/memo/stats?creatorId=1";
    fetch(totalUrl).then(res => res.json()).then(resdata => {
      if (resdata) {
        var memosCount = document.getElementById('total');
        memosCount.innerHTML = resdata.length;
      }
    }).catch(err => {
    });
  };
  window.onload = getTotal();
</script>

<div id="bber"></div>
<script>
  var bbMemos = {
    memos : 'https://s.dusays.com/',
    limit : '10',
    creatorId:'1' ,
    domId: '#bber',
  }
</script>
<script src="https://npm.onmicrosoft.cn/penndu@4.0.9/memos.js"></script>
<script src="https://npm.onmicrosoft.cn/marked/marked.min.js"></script>
<script src="https://jsd.onmicrosoft.cn/gh/Tokinx/ViewImage/view-image.min.js"></script>
<script src="https://jsd.onmicrosoft.cn/gh/Tokinx/Lately/lately.min.js"></script>