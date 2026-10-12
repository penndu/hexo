---
title: 说说广场
comments:
  enabled: false
leftbar:
  widgets:
    - wezh
    - welcome
    - recent
rightbar:
  widgets:
    - sjtp
    - recent_comments
    - sffw
    - qbtc
    - ltgc
    - mmtg
cover: https://cdn.dusays.com/shuoshuo-0.webp
---

<link href="/shuoshuo/memos-style.css" rel="stylesheet" type="text/css">
<link href="https://jsd.dusays.com/npm/penndu@20.1.0/memos/css/APlayer.min.css" rel="stylesheet" type="text/css">
<link href="https://jsd.dusays.com/npm/penndu@20.1.0/memos/css/highlight.github.min.css" rel="stylesheet" type="text/css">
<link href="https://jsd.dusays.com/npm/penndu@20.1.0/memos/css/custom.css" rel="stylesheet" type="text/css">
<section id="main" class="container">
    <div class="total">总计 <span id="total">0</span> 条说说</div>
    <div id="memos" class="memos"></div>
</section>
<script type="text/javascript">
    var memo = {
        host: 'https://s.dusays.com/',     // Memos 网址，末尾带 /
        limit: '1',                        // 每页条数，默认 10
        creatorId: 'penn',                 // Memos 用户名（v0.31 起 creator 资源名用用户名）
        domId: '#memos',
        username: 'penn',                  // 前端显示的 ID
        name: 'Teacher Du',                // 前端显示的全名
        language: 'zh-CN',
        total: true,                       // 是否显示总条数
        doubanAPI: ''                      // 豆瓣 API，不填则只显示 URL
    }
</script>
<script type="text/javascript" src="https://jsd.dusays.com/npm/penndu@20.1.0/memos/js/marked.umd.min.js?v=14.0.0"></script>
<script type="text/javascript" src="https://jsd.dusays.com/npm/penndu@20.1.0/memos/js/view-image.min.js"></script>
<script type="text/javascript" src="https://jsd.dusays.com/npm/penndu@20.1.0/memos/js/APlayer.min.js"></script>
<script type="text/javascript" src="https://jsd.dusays.com/npm/penndu@20.1.0/memos/js/Meting.min.js"></script>
<script type="text/javascript" src="https://jsd.dusays.com/npm/penndu@20.1.0/memos/js/custom.js"></script>
<script type="text/javascript" src="/shuoshuo/memos.js"></script>
