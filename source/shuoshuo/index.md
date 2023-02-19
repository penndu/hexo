---
layout: page
top_meta: false
bottom_meta: false
sidebar: []
comments: false
title: 说说
---

<div id="memos" class=""></div>

<div class="container">
    <h2 class="title">Memos</h2>
    <p>共嘀咕了 <span id="memosCount">0</span> 条 Memos 🎉</p>
    <div id="memos">
        <!-- 嘀咕加载在这里 -->
    </div>
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

<script type="text/javascript">
    var memos = {
        host: "https://dusays-memos.itisn.cyou/", //修改为自己部署 Memos 的网址，末尾有 / 斜杠
        limit: "10", //默认每次显示 10条
        creatorId: "1", //默认为 101用户 https://demo.usememos.com/u/101
        domId: "#memos", //默认为 #memos
    };
</script>

<!-- 注意替换 JS 资源文件的路径 -->
<script type="text/javascript" src="https://npm.elemecdn.com/marked/marked.min.js"></script>
<script type="text/javascript" src="https://npm.elemecdn.com/pangu/dist/browser/pangu.min.js"></script>
<script type="text/javascript" src="https://npm.elemecdn.com/moment/min/moment.min.js"></script>
<script type="text/javascript" src="https://cdn.dusays.com/moment.twitter.min.js"></script>
<script type="text/javascript" src="/shuoshuo/memos.js"></script>