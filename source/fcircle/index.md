---
title: 友链文章
description: 杜老师说博客的友链文章页，实时聚合 50 位友链博主的最新文章，含 AI 摘要与推荐分。
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
cover: https://cdn.dusays.com/fcircle-0.webp
---

<div id="friend-circle" class="fc-root">
  <div class="fc-state">正在与友链博主们取得联系……</div>
</div>

<script>
(function () {
  'use strict';

  // ---- 改这里 ----
  // API Key 在 ducircle 后台「设置 → API Key」生成，只读、只对应自己的数据
  var API_KEY = 'fc_1527b9bdbbb59e45625bd47e46cb230d';
  var API_BASE = 'https://ducircle.dusays.com';
  var PAGE_SIZE = 8;
  // ----------------

  var box = document.getElementById('friend-circle');
  if (!box) return;

  var loaded = 0;
  var total = 0;
  var busy = false;
  var rule = 'created';

  // 文章流、友链列表、统计概览三个接口并发取，统计卡和友链网格先亮起来
  var statsBox = document.createElement('div');
  statsBox.className = 'fc-stats';
  var headBox = document.createElement('div');
  headBox.className = 'fc-head';
  var updateBox = document.createElement('div');
  updateBox.className = 'fc-update';
  headBox.innerHTML = '<span class="fc-head-title">最新文章</span>';
  headBox.appendChild(updateBox);
  var listBox = document.createElement('div');
  listBox.className = 'fc-list-wrap';
  var moreBox = document.createElement('div');
  moreBox.className = 'fc-more-wrap';

  box.innerHTML = '';
  box.appendChild(statsBox);
  box.appendChild(headBox);
  box.appendChild(listBox);
  box.appendChild(moreBox);

  function esc(str) {
    var d = document.createElement('div');
    d.textContent = str == null ? '' : String(str);
    return d.innerHTML;
  }

  // 接口返回的是无时区的 ISO 串（库里存的就是本地时间），直接按本地时间解析
  function parseTime(iso) {
    if (!iso) return null;
    var t = new Date(iso);
    return isNaN(t.getTime()) ? null : t;
  }

  function timeAgo(iso) {
    var t = parseTime(iso);
    if (!t) return '';
    var diff = (Date.now() - t.getTime()) / 1000;
    if (diff < 60) return '刚刚';
    if (diff < 3600) return Math.floor(diff / 60) + ' 分钟前';
    if (diff < 86400) return Math.floor(diff / 3600) + ' 小时前';
    if (diff < 86400 * 30) return Math.floor(diff / 86400) + ' 天前';
    return t.getFullYear() + '-' + pad(t.getMonth() + 1) + '-' + pad(t.getDate());
  }

  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  function fullTime(iso) {
    var t = parseTime(iso);
    if (!t) return '';
    return t.getFullYear() + '-' + pad(t.getMonth() + 1) + '-' + pad(t.getDate()) +
      ' ' + pad(t.getHours()) + ':' + pad(t.getMinutes());
  }

  function request(path, params) {
    var url = new URL(API_BASE + path);
    Object.keys(params || {}).forEach(function (k) {
      var v = params[k];
      if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, v);
    });
    return fetch(url.toString(), {
      method: 'GET',
      headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' }
    }).then(function (res) {
      if (!res.ok) {
        var detail = '请求失败（' + res.status + '）';
        return res.json().catch(function () { return null; }).then(function (body) {
          if (body && body.detail) detail = body.detail;
          throw new Error(detail);
        });
      }
      return res.json();
    });
  }

  function renderStats(s) {
    var items = [
      { label: '友链站点', value: s.friends_num },
      { label: '正常抓取', value: s.active_num },
      { label: '收录文章', value: s.article_num },
      { label: '已生成摘要', value: s.summarized_num }
    ];
    statsBox.innerHTML = items.map(function (it) {
      return '<div class="fc-stat">' +
        '<span class="fc-stat-value">' + esc(it.value) + '</span>' +
        '<span class="fc-stat-label">' + esc(it.label) + '</span>' +
        '</div>';
    }).join('');
    // 最后更新单独一栏，但不再另起一行占满宽度
    updateBox.innerHTML = '<span class="fc-update-label">最后更新</span>' +
      '<span class="fc-update-time">' + esc(fullTime(s.last_updated_time)) + '</span>';
  }

  function renderItem(p) {
    var avatar = p.avatar
      ? '<img class="fc-avatar" src="' + esc(p.avatar) + '" alt="" loading="lazy">'
      : '<div class="fc-avatar fc-avatar-empty"></div>';
    // 摘要和评分都是可选项。摘要缺失时保留同样的行高，
    // 否则有摘要和无摘要的卡片高度参差，列表看着毛躁。
    var summary = p.summary
      ? '<p class="fc-summary">' + esc(p.summary) + '</p>'
      : '<p class="fc-summary fc-summary-empty"></p>';
    var score = (p.score !== null && p.score !== undefined)
      ? '<span class="fc-score" title="AI 推荐分">' + Number(p.score).toFixed(1) + '</span>'
      : '';
    var when = fullTime(p.created);
    return '<article class="fc-item">' +
      '<a class="fc-avatar-link" href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">' +
        avatar +
      '</a>' +
      '<div class="fc-body">' +
        '<a class="fc-title" href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer" title="' + esc(p.title) + '">' +
          esc(p.title) +
        '</a>' +
        '<div class="fc-meta">' +
          '<span class="fc-author">' + esc(p.author) + '</span>' +
          '<span class="fc-dot"></span>' +
          '<time class="fc-time" datetime="' + esc(p.created) + '" title="' + esc(when) + '">' + esc(timeAgo(p.created)) + '</time>' +
          score +
        '</div>' +
        summary +
      '</div>' +
    '</article>';
  }

  function renderEmpty() {
    listBox.innerHTML = '<div class="fc-state">暂时还没有文章，等友链博主们更新～</div>';
  }

  function load(reset) {
    if (busy) return;
    busy = true;
    if (reset) {
      loaded = 0;
      listBox.innerHTML = '<div class="fc-state">正在加载文章……</div>';
      moreBox.innerHTML = '';
    } else {
      moreBox.innerHTML = '<button class="fc-more" disabled>加载中……</button>';
    }
    request('/v1/all', {
      start: loaded,
      end: loaded + PAGE_SIZE - 1,
      rule: rule
    }).then(function (data) {
      total = data.total;
      if (!data.data.length) {
        if (reset) renderEmpty();
        moreBox.innerHTML = '';
        return;
      }
      var html = data.data.map(renderItem).join('');
      if (reset) {
        listBox.innerHTML = '<div class="fc-list">' + html + '</div>';
      } else {
        var list = listBox.querySelector('.fc-list');
        if (list) {
          list.insertAdjacentHTML('beforeend', html);
        } else {
          listBox.innerHTML = '<div class="fc-list">' + html + '</div>';
        }
      }
      loaded += data.data.length;
      var remain = total - loaded;
      if (remain > 0) {
        moreBox.innerHTML = '<button class="fc-more">加载更多（还有 ' + remain + ' 篇）</button>';
        moreBox.querySelector('.fc-more').addEventListener('click', function () { load(false); });
      } else {
        moreBox.innerHTML = '<div class="fc-end">—— 已看完全部 ' + total + ' 篇 ——</div>';
      }
    }).catch(function (err) {
      listBox.innerHTML = '<div class="fc-state fc-error">' + esc(err.message) + '</div>';
      moreBox.innerHTML = '';
      console.error('[friend-circle]', err);
    }).then(function () {
      busy = false;
    });
  }

  // 统计卡
  request('/v1/stats').then(renderStats).catch(function (err) {
    console.error('[friend-circle:stats]', err);
  });

  load(true);
})();
</script>

<style>
/* 友链文章页
   配色全部走主题变量，明暗模式自动跟随 stellar 主题切换。

   注意：本页内容位于 .md-text.content 内，主题对该容器内的 p / div 有
   字号和外边距规则（.md-text p { font-size: var(--fs-content) }、
   .md-text > div { margin: var(--gap-p) 0 }）。因此这里的字号与外边距
   一律用 .md-text 前缀提权覆盖，否则会被主题规则盖掉。 */
.md-text .fc-root {
  --fc-radius: 16px;
  --fc-radius-sm: 12px;
  --fc-gap: 0.875rem;
  --fc-summary-lh: 1.65;
}

.md-text .fc-root > div {
  margin: 0;
}

/* ---- 统计卡：固定四列均分，右侧不留白 ---- */
.md-text .fc-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.md-text .fc-stat {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.85rem 1rem;
  border: 1px solid var(--block-border);
  border-radius: var(--fc-radius-sm);
  background: var(--card);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.md-text .fc-stat:hover {
  border-color: var(--accent);
  transform: translateY(-1px);
}

.md-text .fc-stat-value {
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.15;
  color: var(--text);
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
}

.md-text .fc-stat-label {
  font-size: 0.75rem;
  color: var(--text-p3);
  white-space: nowrap;
}

/* ---- 列表头部：标题在左，最后更新在右 ---- */
.md-text .fc-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--block-border);
}

.md-text .fc-head-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.02em;
}

.md-text .fc-update {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: var(--text-p3);
  white-space: nowrap;
}

.md-text .fc-update-time {
  color: var(--text-p2);
  font-variant-numeric: tabular-nums;
}

/* ---- 文章列表 ---- */
.md-text .fc-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.md-text .fc-item {
  display: flex;
  gap: 0.9rem;
  padding: 0.9rem 1rem;
  border: 1px solid var(--block-border);
  border-radius: var(--fc-radius);
  background: var(--card);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.md-text .fc-item:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.md-text .fc-avatar-link {
  flex-shrink: 0;
  display: block;
  line-height: 0;
  border-radius: var(--fc-radius-sm);
}

.md-text .fc-avatar {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: var(--fc-radius-sm);
  object-fit: cover;
  background: var(--block);
  transition: transform 0.25s ease;
}

.md-text .fc-item:hover .fc-avatar {
  transform: scale(1.05);
}

.md-text .fc-avatar-empty {
  background: var(--block);
}

.md-text .fc-body {
  flex: 1;
  min-width: 0;
}

.md-text .fc-title {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.45;
  color: var(--text);
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.md-text .fc-title:hover {
  color: var(--accent);
}

.md-text .fc-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.3rem;
  font-size: 0.78rem;
  color: var(--text-p3);
}

.md-text .fc-author {
  max-width: 12rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--text-p2);
}

.md-text .fc-dot {
  width: 3px;
  height: 3px;
  flex-shrink: 0;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.55;
}

.md-text .fc-time {
  font-variant-numeric: tabular-nums;
  /* 主题给 .md-text 内的行内元素设了 block 布局，作为 flex 项会被拉伸，
     这里改回 inline 表现并锁定单行高度 */
  display: inline-block;
  align-self: center;
  height: auto;
  line-height: 1.6;
  white-space: nowrap;
  flex-shrink: 0;
}

.md-text .fc-score {
  padding: 0.05rem 0.4rem;
  border-radius: 6px;
  background: var(--theme-a20);
  color: var(--accent);
  font-size: 0.7rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  line-height: 1.6;
  display: inline-block;
  align-self: center;
  height: auto;
  white-space: nowrap;
}

.md-text .fc-summary {
  margin: 0.45rem 0 0;
  font-size: 0.83rem;
  line-height: var(--fc-summary-lh);
  color: var(--text-p2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* 固定两行高度：摘要长短不一时卡片仍等高，列表不参差 */
  min-height: calc(0.83rem * var(--fc-summary-lh) * 2);
}

/* 无摘要时只占位不显示 */
.md-text .fc-summary-empty {
  visibility: hidden;
}

/* ---- 状态与翻页 ---- */
.md-text .fc-state {
  padding: 2.5rem 0;
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-p3);
}

.md-text .fc-error {
  color: var(--text-p2);
}

.md-text .fc-more-wrap {
  margin-top: 1rem;
}

.md-text .fc-more {
  display: block;
  width: 100%;
  padding: 0.65rem;
  border: 1px solid var(--block-border);
  border-radius: var(--fc-radius-sm);
  background: transparent;
  color: var(--text-p2);
  font-size: 0.85rem;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
}

.fc-more:hover:not(:disabled) {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--theme-a10);
}

.fc-more:disabled {
  opacity: 0.6;
  cursor: default;
}

.md-text .fc-end {
  padding: 0.6rem 0;
  text-align: center;
  font-size: 0.78rem;
  color: var(--text-p3);
}

/* ---- 响应式 ---- */
@media (max-width: 767px) {
  .md-text .fc-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .md-text .fc-item {
    padding: 0.8rem 0.85rem;
  }
  .md-text .fc-avatar {
    width: 2.35rem;
    height: 2.35rem;
  }
  /* 窄屏下摘要放宽到三行，行数与 min-height 同步调整，保持卡片等高 */
  .md-text .fc-summary {
    -webkit-line-clamp: 3;
    line-clamp: 3;
    min-height: calc(0.83rem * var(--fc-summary-lh) * 3);
  }
  /* 元信息（作者/时间/评分）保持单行，作者名收窄并省略，
     否则窄屏下评分徽章会挤到第二行，卡片高度参差 */
  .md-text .fc-meta {
    flex-wrap: nowrap;
  }
  .md-text .fc-author {
    max-width: 7rem;
  }
}

@media (max-width: 420px) {
  .md-text .fc-stat-value {
    font-size: 1.2rem;
  }
  .md-text .fc-stat {
    padding: 0.7rem 0.8rem;
  }
  .md-text .fc-head {
    flex-wrap: wrap;
    gap: 0.25rem;
  }
  .md-text .fc-title {
    font-size: 0.92rem;
    /* 窄屏下标题允许两行并固定两行高度，长短标题都保持卡片等高 */
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    min-height: calc(0.92rem * 1.45 * 2);
  }
}
</style>
