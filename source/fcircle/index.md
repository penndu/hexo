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
  var PAGE_SIZE = 20;
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
  var listBox = document.createElement('div');
  listBox.className = 'fc-list-wrap';
  var moreBox = document.createElement('div');
  moreBox.className = 'fc-more-wrap';

  box.innerHTML = '';
  box.appendChild(statsBox);
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
    }).join('') +
      '<div class="fc-stat fc-stat-wide">' +
      '<span class="fc-stat-label">最后更新</span>' +
      '<span class="fc-stat-time">' + esc(fullTime(s.last_updated_time)) + '</span>' +
      '</div>';
  }

  function renderItem(p) {
    var avatar = p.avatar
      ? '<img class="fc-avatar" src="' + esc(p.avatar) + '" alt="" loading="lazy" onerror="this.src=\'' + esc(p.avatar) + '\'">'
      : '<div class="fc-avatar fc-avatar-empty"></div>';
    // 摘要和评分都是可选项：没有就不占位，留白比空标签好看
    var summary = p.summary
      ? '<p class="fc-summary">' + esc(p.summary) + '</p>'
      : '';
    var score = (p.score !== null && p.score !== undefined)
      ? '<span class="fc-score" title="AI 推荐分">' + Number(p.score).toFixed(1) + '</span>'
      : '';
    var when = fullTime(p.created);
    return '<article class="fc-item">' +
      avatar +
      '<div class="fc-body">' +
        '<a class="fc-title" href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer" title="' + esc(p.title) + '">' +
          esc(p.title) +
        '</a>' +
        '<div class="fc-meta">' +
          '<a class="fc-author" href="#friend-circle" title="' + esc(p.author) + '">' + esc(p.author) + '</a>' +
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
        moreBox.innerHTML = '<div class="fc-end">—— 到底啦，共 ' + total + ' 篇 ——</div>';
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
.fc-root {
  --fc-gap: 0.75rem;
  --fc-pad: 1rem 1.1rem;
}

.fc-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6.5rem, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.fc-stat {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: var(--fc-pad);
  border: 1px solid var(--block-border);
  border-radius: 12px;
  background: var(--card);
}

.fc-stat-wide {
  grid-column: 1 / -1;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
}

.fc-stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text);
  font-variant-numeric: tabular-nums;
}

.fc-stat-label {
  font-size: 0.75rem;
  color: var(--text-p3);
}

.fc-stat-time {
  font-size: 0.85rem;
  color: var(--text-p2);
  font-variant-numeric: tabular-nums;
}

.fc-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.fc-item {
  display: flex;
  gap: 0.85rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--block-border);
}

.fc-item:last-child {
  border-bottom: none;
}

.fc-avatar {
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  border-radius: 10px;
  object-fit: cover;
  background: var(--block);
}

.fc-avatar-empty {
  background: var(--block);
}

.fc-body {
  flex: 1;
  min-width: 0;
}

.fc-title {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  color: var(--text);
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fc-title:hover {
  color: var(--accent);
}

.fc-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.35rem;
  font-size: 0.78rem;
  color: var(--text-p3);
}

.fc-author {
  color: var(--text-p2);
  text-decoration: none;
  max-width: 12rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fc-author:hover {
  color: var(--accent);
}

.fc-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.6;
}

.fc-time {
  font-variant-numeric: tabular-nums;
}

.fc-score {
  padding: 0.05rem 0.4rem;
  border-radius: 6px;
  background: var(--theme-a20);
  color: var(--accent);
  font-size: 0.7rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.fc-summary {
  margin: 0.5rem 0 0;
  font-size: 0.85rem;
  line-height: 1.75;
  color: var(--text-p2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fc-state {
  padding: 2.5rem 0;
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-p3);
}

.fc-error {
  color: var(--text-p2);
}

.fc-more-wrap {
  margin-top: 1.25rem;
}

.fc-more {
  display: block;
  width: 100%;
  padding: 0.6rem;
  border: 1px solid var(--block-border);
  border-radius: 10px;
  background: transparent;
  color: var(--text-p2);
  font-size: 0.85rem;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}

.fc-more:hover:not(:disabled) {
  border-color: var(--accent);
  color: var(--accent);
}

.fc-more:disabled {
  opacity: 0.6;
  cursor: default;
}

.fc-end {
  padding: 0.5rem 0;
  text-align: center;
  font-size: 0.78rem;
  color: var(--text-p3);
}

@media (max-width: 500px) {
  .fc-stat-value {
    font-size: 1.25rem;
  }
  .fc-title {
    font-size: 0.95rem;
  }
}
</style>
