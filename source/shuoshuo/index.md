---
layout: page
top_meta: false
bottom_meta: false
sidebar: []
comments: false
title: 说说广场
---

<link rel="stylesheet" href="https://memobbs.app/cdn/APlayer.min.css">
<link rel="stylesheet" href="https://memobbs.app/cdn/animate.min.css">
<link rel="stylesheet" href="https://memobbs.app/cdn/ArtalkLite.css">
<link rel="stylesheet" href="https://memobbs.app/grid.css">
<link rel="stylesheet" href="https://memobbs.app/memos.css">

<style>
  html, body {
    touch-action: manipulation;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: var(--light-background);
    color: #222;
    color: var(--light-color);
    font-weight: 400;
    font-size: 1.1rem;
    font-family: "HarmonyOS_Regular","PingFangSC-Regular", "PingFang SC", "Microsoft YaHei", Arial, Helvetica, "WenQuanYi Micro Hei", "tohoma,sans-serif";
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    -webkit-overflow-scrolling: touch;
    -webkit-text-size-adjust: 100%;
  }
  body.dark-theme {
    background-color: var(--dark-background);
    color: #a9a9b3;
    color: var(--dark-color);
  }
  h1 {font-size: 1.5rem;}
  a {
    outline: none;
    background-color: transparent;
    color: var(--light-color);
    text-decoration: none;
    cursor: pointer;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
    -webkit-text-decoration-skip: objects;
  }
  .dark-theme a {
    color: var(--dark-color);
  }
</style>
<body class="">
  <div class="container pt-4">
    <div id="memos"></div>
    <div id="memo-list"></div>
  </div>
</body>

<script type="text/javascript">
// [Safari only] gesturestart event: multi finger gestures touching 
document.addEventListener('gesturestart', function(event) {
  event.preventDefault();
});
</script>

<script type="text/javascript">
  var memosJson = {
    url : "/memos.json"
  }
  var memosMyList = [
    {
      "creatorName" : "TeacherDu",
      "website" : "https://dusays.com",
      "link" : "https://s.dusays.com",
      "creatorId" : "1",
      "avatar" : "https://cdn.sep.cc/avatar/28b57baa4e8f13fe4292ccb2de267e30"
    }
  ]
</script>

<script src="https://memobbs.app/cdn/twikoo.min.js"></script>
<script src="https://memobbs.app/cdn/ArtalkLite.js"></script>
<script src="https://memobbs.app/cdn/marked.min.js"></script>
<script src="https://memobbs.app/cdn/APlayer.min.js"></script>
<script>
var meting_api='https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r';
</script>
<script src="https://memobbs.app/cdn/Meting.min.js"></script>
<script src="https://memobbs.app/cdn/lozad.min.js"></script>
<script src="https://memobbs.app/memos.js"></script>