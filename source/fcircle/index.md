---
title: 友链文章
comments: false
leftbar: wezh, welcome, recent
rightbar: recent_comments, sffw, qbtc, ltgc, mmtg, sjtp
---

<div id="friend-circle-container">与主机通讯中……</div>

<script>
    if (typeof UserConfig === 'undefined') {
        var UserConfig = {
            // 你的 hexo-circle-of-friends 后端地址（需部署后端 API）
            private_api_url: 'https://f.dusays.com/',

            // 每次点击“加载更多”时加载的文章数量，默认 24
            page_turning_number: 20,

            // 头像加载失败时的默认图片
            error_img: 'https://cdn.jsdmirror.com/gh/Rock-Candy-Tea/Friend-Circle-Frontend/logo.png',
        }
    }
</script>

<!-- 样式文件：以主题命名，目前默认支持 butterfly -->
<link rel="stylesheet" href="https://cdn.jsdmirror.com/gh/penndu/dusays/fcircle.css">

<!-- 脚本文件：对应主题样式功能 -->
<script src="https://cdn.jsdmirror.com/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/default.min.js"></script>