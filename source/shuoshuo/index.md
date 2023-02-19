---
layout: page
top_meta: false
bottom_meta: false
sidebar: []
comments: false
title: 说说
---

<div class="container">
  <p>共发表了 <span id="memosCount">0</span> 条 Memos 说说！</p>
</div>

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

<div id="bber"></div>
<script type="text/javascript">
  var bbMemos = {
    memos : 'https://dusays-memos.itisn.cyou/',//修改为自己部署 Memos 的网址，末尾有 / 斜杠
    limit : '',//默认每次显示 10条 
    creatorId:'1' ,//默认为 101用户 https://demo.usememos.com/u/101
    domId: '',//默认为 <div id="bber"></div>
  }
</script>
<script type="text/javascript" src="/shuoshuo/bb-lmm-mk.js"></script>
<script src="https://jsd.onmicrosoft.cn/npm/marked/marked.min.js"></script>
<script src="https://jsd.onmicrosoft.cn/gh/Tokinx/ViewImage/view-image.min.js"></script>
<script src="https://jsd.onmicrosoft.cn/gh/Tokinx/Lately/lately.min.js"></script>