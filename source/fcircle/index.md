---
title: 友链文章
top_meta: false
sidebar: []
comments: false
---

<!-- 挂载友链朋友圈的容器 -->
<div class="post-content">
<div id="cf-container">与主机通讯中……</div>
</div>
<!-- 加样式和功能代码 -->
<!-- 将apiurl改成你后端生成的api地址 -->
<script type="text/javascript">
  var fdataUser = {
    apiurl: 'https://f.dusays.com/'
  }
</script>
<link rel="stylesheet" href="https://cdn.dusays.com/fcircle-beta.css">
<script type="text/javascript" src="https://cdn.dusays.com/fcircle-beta.js"></script>

<div id="app"></div>
<script>
    let UserConfig = {
        // 填写你的api地址
        private_api_url: 'https://f.dusays.com/',
        // 点击加载更多时，一次最多加载几篇文章，默认10
        page_turning_number: 10,
        // 头像加载失败时，默认头像地址
        error_img: 'https://cravatar.cn/avatar/28b57baa4e8f13fe4292ccb2de267e30',
        // 进入页面时第一次的排序规则
        sort_rule: 'created'
    }
</script>
<script type="text/javascript" src="https://cdn.dusays.com/bundle.js"></script>
<script type="text/javascript" src="https://cdn.dusays.com/app.min.js"></script>