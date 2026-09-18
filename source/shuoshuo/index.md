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
---

<style>
/* ===========================================================
 * 杜老师说 · 说说广场样式（dusays-memos）
 * 纯 CSS · 无任何依赖 · 暗色自适应
 * =========================================================== */

.dusays-memos {
  --memo-bg: #ffffff;
  --memo-bg-soft: #f5f7fa;
  --memo-bg-hover: #f0f3f8;
  --memo-border: #e6e8eb;
  --memo-text: #2c3e50;
  --memo-text-soft: #6b7785;
  --memo-text-muted: #9aa3ad;
  --memo-primary: #2c8af8;
  --memo-primary-soft: rgba(44, 138, 248, 0.1);
  --memo-accent: #00b894;
  --memo-warn: #f5a623;
  --memo-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.05);
  --memo-shadow-hover: 0 2px 4px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.08);
  --memo-radius: 14px;
  --memo-radius-sm: 8px;
  --memo-code-bg: #f6f8fa;
  --memo-code-color: #476582;
  --memo-link: #2c8af8;
  --memo-pin-bg: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
  --memo-pin-text: #b45309;
  --memo-axis: #e6e8eb;

  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--memo-text);
  max-width: 880px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (prefers-color-scheme: dark) {
  .dusays-memos {
    --memo-bg: #1c1f26;
    --memo-bg-soft: #16181d;
    --memo-bg-hover: #232730;
    --memo-border: #2c313a;
    --memo-text: #e5e7eb;
    --memo-text-soft: #a8b0bd;
    --memo-text-muted: #6b7280;
    --memo-primary: #5eaaff;
    --memo-primary-soft: rgba(94, 170, 255, 0.15);
    --memo-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.25);
    --memo-shadow-hover: 0 2px 4px rgba(0, 0, 0, 0.35), 0 8px 24px rgba(0, 0, 0, 0.35);
    --memo-code-bg: #0f1115;
    --memo-code-color: #c9d1d9;
    --memo-link: #5eaaff;
    --memo-pin-bg: linear-gradient(135deg, #3a2f1a 0%, #5c4520 100%);
    --memo-pin-text: #f5d27a;
    --memo-axis: #2c313a;
  }
}

/* ---------- Hero ---------- */
.dusays-memos__hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  padding: 32px 28px;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #f0f7ff 0%, #e6f4ff 50%, #f5f3ff 100%);
  border-radius: var(--memo-radius);
  position: relative;
  overflow: hidden;
}

.dusays-memos__hero::before,
.dusays-memos__hero::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.5;
  pointer-events: none;
}

.dusays-memos__hero::before {
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, #2c8af8 0%, transparent 70%);
  top: -40px;
  right: -40px;
}

.dusays-memos__hero::after {
  width: 140px;
  height: 140px;
  background: radial-gradient(circle, #a855f7 0%, transparent 70%);
  bottom: -30px;
  right: 80px;
}

.dusays-memos__hero-text {
  position: relative;
  z-index: 1;
}

.dusays-memos__title {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px;
  color: var(--memo-text);
  letter-spacing: 0.5px;
}

.dusays-memos__subtitle {
  font-size: 14px;
  color: var(--memo-text-soft);
  margin: 0;
}

.dusays-memos__stats {
  display: flex;
  gap: 16px;
  position: relative;
  z-index: 1;
}

.dusays-memos__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 18px;
  background: var(--memo-bg);
  border-radius: var(--memo-radius-sm);
  box-shadow: var(--memo-shadow);
  min-width: 76px;
}

.dusays-memos__stat-num {
  font-size: 22px;
  font-weight: 700;
  color: var(--memo-primary);
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  line-height: 1.2;
}

.dusays-memos__stat-label {
  font-size: 12px;
  color: var(--memo-text-muted);
  margin-top: 2px;
}

@media (max-width: 640px) {
  .dusays-memos__hero {
    padding: 24px 20px;
  }
  .dusays-memos__title {
    font-size: 22px;
  }
  .dusays-memos__stats {
    width: 100%;
    justify-content: space-between;
  }
  .dusays-memos__stat {
    flex: 1;
    padding: 10px 8px;
  }
  .dusays-memos__stat-num {
    font-size: 18px;
  }
}

/* ---------- Filters ---------- */
.dusays-memos__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
  padding: 6px;
  background: var(--memo-bg-soft);
  border-radius: 999px;
  width: fit-content;
}

.dusays-memos__filter {
  border: none;
  background: transparent;
  color: var(--memo-text-soft);
  font-size: 13px;
  padding: 7px 16px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.18s ease;
  font-family: inherit;
  white-space: nowrap;
}

.dusays-memos__filter:hover {
  color: var(--memo-text);
  background: var(--memo-bg-hover);
}

.dusays-memos__filter.is-active {
  background: var(--memo-primary);
  color: #ffffff;
  font-weight: 500;
  box-shadow: 0 2px 6px rgba(44, 138, 248, 0.35);
}

/* ---------- Timeline ---------- */
.dusays-memos__timeline {
  position: relative;
  padding-left: 28px;
}

.dusays-memos__timeline::before {
  content: "";
  position: absolute;
  left: 9px;
  top: 12px;
  bottom: 12px;
  width: 2px;
  background: var(--memo-axis);
  border-radius: 2px;
}

@media (max-width: 640px) {
  .dusays-memos__timeline {
    padding-left: 22px;
  }
  .dusays-memos__timeline::before {
    left: 7px;
  }
}

/* ---------- Card ---------- */
.dusays-memos__card {
  position: relative;
  background: var(--memo-bg);
  border-radius: var(--memo-radius);
  padding: 18px 20px;
  margin-bottom: 18px;
  box-shadow: var(--memo-shadow);
  border: 1px solid var(--memo-border);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.dusays-memos__card:hover {
  box-shadow: var(--memo-shadow-hover);
  transform: translateY(-1px);
}

.dusays-memos__card::before {
  content: "";
  position: absolute;
  left: -23px;
  top: 24px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--memo-bg);
  border: 3px solid var(--memo-primary);
  z-index: 1;
}

@media (max-width: 640px) {
  .dusays-memos__card::before {
    left: -18px;
    width: 10px;
    height: 10px;
  }
}

.dusays-memos__card.is-pinned {
  background: var(--memo-pin-bg);
  border-color: transparent;
}

.dusays-memos__card.is-pinned::before {
  border-color: var(--memo-pin-text);
  background: var(--memo-pin-text);
}

.dusays-memos__card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 12px;
}

.dusays-memos__meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--memo-text-muted);
}

.dusays-memos__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2c8af8, #00b894);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  flex-shrink: 0;
}

.dusays-memos__name {
  font-size: 13px;
  font-weight: 600;
  color: var(--memo-text);
}

.dusays-memos__dot {
  width: 3px;
  height: 3px;
  background: var(--memo-text-muted);
  border-radius: 50%;
  display: inline-block;
}

.dusays-memos__time {
  cursor: default;
  position: relative;
}

.dusays-memos__time:hover .dusays-memos__time-tip {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
}

.dusays-memos__time-tip {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translate(-50%, 4px);
  background: rgba(15, 23, 42, 0.9);
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.15s ease;
  pointer-events: none;
  z-index: 2;
}

.dusays-memos__pin-tag {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  background: var(--memo-pin-text);
  color: #fff;
}

/* ---------- Content ---------- */
.dusays-memos__content {
  font-size: 15px;
  line-height: 1.75;
  color: var(--memo-text);
  word-wrap: break-word;
  word-break: break-word;
}

.dusays-memos__content > *:first-child {
  margin-top: 0;
}

.dusays-memos__content > *:last-child {
  margin-bottom: 0;
}

.dusays-memos__content p {
  margin: 0 0 8px;
}

.dusays-memos__content a {
  color: var(--memo-link);
  text-decoration: none;
  border-bottom: 1px dashed var(--memo-link);
  transition: border-bottom-style 0.15s ease;
}

.dusays-memos__content a:hover {
  border-bottom-style: solid;
}

.dusays-memos__content code:not(pre code) {
  font-family: "SF Mono", Consolas, Monaco, "Liberation Mono", monospace;
  font-size: 0.88em;
  padding: 1px 6px;
  background: var(--memo-code-bg);
  color: var(--memo-code-color);
  border-radius: 4px;
  border: 1px solid var(--memo-border);
}

.dusays-memos__content pre {
  margin: 12px 0;
  padding: 14px 16px;
  background: var(--memo-code-bg);
  color: var(--memo-code-color);
  border-radius: var(--memo-radius-sm);
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.55;
  font-family: "SF Mono", Consolas, Monaco, monospace;
  border: 1px solid var(--memo-border);
}

.dusays-memos__content pre code {
  background: transparent;
  padding: 0;
  border: none;
  font-size: inherit;
}

.dusays-memos__content blockquote {
  margin: 10px 0;
  padding: 6px 14px;
  border-left: 3px solid var(--memo-primary);
  background: var(--memo-primary-soft);
  border-radius: 0 var(--memo-radius-sm) var(--memo-radius-sm) 0;
  color: var(--memo-text-soft);
}

.dusays-memos__content ul,
.dusays-memos__content ol {
  margin: 8px 0;
  padding-left: 24px;
}

.dusays-memos__content li {
  margin: 2px 0;
}

.dusays-memos__content img {
  max-width: 100%;
  height: auto;
  border-radius: var(--memo-radius-sm);
  margin: 6px 4px 6px 0;
  display: inline-block;
  cursor: zoom-in;
  background: var(--memo-bg-soft);
  min-height: 60px;
  transition: opacity 0.2s ease;
}

.dusays-memos__content img[data-loading="lazy"] {
  opacity: 0;
}

.dusays-memos__content img.is-loaded {
  opacity: 1;
}

.dusays-memos__content strong {
  color: var(--memo-text);
  font-weight: 600;
}

.dusays-memos__content .memo-tag {
  display: inline-block;
  padding: 1px 8px;
  margin: 0 4px;
  font-size: 12px;
  color: var(--memo-primary);
  background: var(--memo-primary-soft);
  border-radius: 4px;
  text-decoration: none;
  border: none;
}

.dusays-memos__content .memo-mention {
  color: var(--memo-accent);
  font-weight: 500;
}

.dusays-memos__content .memo-emoji {
  display: inline-block;
  height: 1.4em;
  width: 1.4em;
  vertical-align: -0.3em;
  margin: 0 1px;
}

/* ---------- Footer ---------- */
.dusays-memos__card-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px dashed var(--memo-border);
  font-size: 12px;
  color: var(--memo-text-muted);
}

.dusays-memos__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.dusays-memos__tag {
  font-size: 11px;
  color: var(--memo-text-soft);
  background: var(--memo-bg-soft);
  padding: 2px 8px;
  border-radius: 4px;
}

.dusays-memos__location {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

.dusays-memos__id {
  font-family: "SF Mono", Consolas, monospace;
  font-size: 11px;
  color: var(--memo-text-muted);
  opacity: 0.6;
}

.dusays-memos__id:hover {
  opacity: 1;
  color: var(--memo-primary);
}

/* ---------- Loadmore ---------- */
.dusays-memos__loadmore {
  text-align: center;
  margin: 28px 0 12px;
}

.dusays-memos__loadmore-btn {
  background: var(--memo-bg);
  color: var(--memo-text-soft);
  border: 1px solid var(--memo-border);
  padding: 10px 28px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 13px;
  font-family: inherit;
  transition: all 0.18s ease;
  box-shadow: var(--memo-shadow);
}

.dusays-memos__loadmore-btn:hover:not(:disabled) {
  color: var(--memo-primary);
  border-color: var(--memo-primary);
  transform: translateY(-1px);
  box-shadow: var(--memo-shadow-hover);
}

.dusays-memos__loadmore-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.dusays-memos__end {
  color: var(--memo-text-muted);
  font-size: 12px;
  margin: 24px 0 8px;
}

/* ---------- Error ---------- */
.dusays-memos__error {
  text-align: center;
  padding: 40px 20px;
  background: var(--memo-bg-soft);
  border-radius: var(--memo-radius);
  margin: 24px 0;
}

.dusays-memos__error p {
  margin: 0 0 16px;
  color: var(--memo-text-soft);
}

.dusays-memos__error button {
  background: var(--memo-primary);
  color: #fff;
  border: none;
  padding: 8px 24px;
  border-radius: 999px;
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
}

.dusays-memos__error button:hover {
  filter: brightness(1.1);
}

/* ---------- Skeleton ---------- */
.dusays-memos__placeholder {
  padding: 8px 0;
}

.dusays-memos__skeleton {
  background: var(--memo-bg);
  border-radius: var(--memo-radius);
  padding: 18px 20px;
  margin-bottom: 18px;
  border: 1px solid var(--memo-border);
}

.dusays-memos__skeleton::before {
  content: "";
  display: block;
  height: 12px;
  width: 40%;
  background: linear-gradient(90deg,
    var(--memo-bg-soft) 0%,
    var(--memo-bg-hover) 50%,
    var(--memo-bg-soft) 100%);
  background-size: 200% 100%;
  border-radius: 4px;
  margin-bottom: 14px;
  animation: dusays-skeleton 1.4s ease-in-out infinite;
}

.dusays-memos__skeleton::after {
  content: "";
  display: block;
  height: 80px;
  width: 100%;
  background: linear-gradient(90deg,
    var(--memo-bg-soft) 0%,
    var(--memo-bg-hover) 50%,
    var(--memo-bg-soft) 100%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: dusays-skeleton 1.4s ease-in-out infinite 0.2s;
}

@keyframes dusays-skeleton {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ---------- Empty ---------- */
.dusays-memos__empty {
  text-align: center;
  padding: 60px 20px;
  color: var(--memo-text-muted);
}

.dusays-memos__empty-icon {
  font-size: 48px;
  margin-bottom: 12px;
  opacity: 0.5;
}
</style>

<section id="memos-app" class="dusays-memos"
         data-host="https://s.dusays.com"
         data-creator="users/penn"
         data-name="Teacher Du"
         data-page-size="20">
  <header class="dusays-memos__hero">
    <div class="dusays-memos__hero-text">
      <h1 class="dusays-memos__title">说说广场</h1>
      <p class="dusays-memos__subtitle">随手记录 · 即时分享 · 由 Memos 驱动</p>
    </div>
    <div class="dusays-memos__stats">
      <div class="dusays-memos__stat">
        <span class="dusays-memos__stat-num" id="memo-stat-total">--</span>
        <span class="dusays-memos__stat-label">条说说</span>
      </div>
      <div class="dusays-memos__stat">
        <span class="dusays-memos__stat-num" id="memo-stat-today">--</span>
        <span class="dusays-memos__stat-label">今日发布</span>
      </div>
      <div class="dusays-memos__stat">
        <span class="dusays-memos__stat-num" id="memo-stat-image">--</span>
        <span class="dusays-memos__stat-label">含图说说</span>
      </div>
    </div>
  </header>

  <nav class="dusays-memos__filters" id="memo-filters" aria-label="说说筛选">
    <button type="button" class="dusays-memos__filter is-active" data-filter="all">全部</button>
    <button type="button" class="dusays-memos__filter" data-filter="pinned">置顶</button>
    <button type="button" class="dusays-memos__filter" data-filter="image">含图</button>
    <button type="button" class="dusays-memos__filter" data-filter="link">含链接</button>
    <button type="button" class="dusays-memos__filter" data-filter="code">含代码</button>
  </nav>

  <div class="dusays-memos__timeline" id="memo-list" role="feed" aria-busy="true">
    <div class="dusays-memos__placeholder" aria-hidden="true">
      <div class="dusays-memos__skeleton"></div>
      <div class="dusays-memos__skeleton"></div>
      <div class="dusays-memos__skeleton"></div>
    </div>
  </div>

  <div class="dusays-memos__loadmore">
    <button type="button" id="memo-loadmore" class="dusays-memos__loadmore-btn" hidden>
      <span class="dusays-memos__loadmore-text">加载更多</span>
    </button>
    <p class="dusays-memos__end" id="memo-end" hidden>—— 已经到底啦 ——</p>
  </div>

  <div class="dusays-memos__error" id="memo-error" hidden>
    <p>😢 说说拉取失败，请稍后再试或检查 Memos 实例状态。</p>
    <button type="button" id="memo-retry">重新加载</button>
  </div>
</section>

<script>
/* ===========================================================
 * 杜老师说 · 说说广场主逻辑（dusays-memos.js）
 * 纯原生 ES2017+，零依赖，仅可选 marked
 * =========================================================== */
(function () {
  "use strict";

  var root = document.getElementById("memos-app");
  if (!root) return;

  /* ---------- 配置 ---------- */
  var cfg = {
    host: root.dataset.host || "https://s.dusays.com",
    creator: root.dataset.creator || "users/penn",
    name: root.dataset.name || "Teacher Du",
    pageSize: parseInt(root.dataset.pageSize, 10) || 20
  };

  var els = {
    list: document.getElementById("memo-list"),
    filters: document.getElementById("memo-filters"),
    loadmore: document.getElementById("memo-loadmore"),
    end: document.getElementById("memo-end"),
    error: document.getElementById("memo-error"),
    retry: document.getElementById("memo-retry"),
    statTotal: document.getElementById("memo-stat-total"),
    statToday: document.getElementById("memo-stat-today"),
    statImage: document.getElementById("memo-stat-image")
  };

  var state = {
    memos: [],
    pageToken: "",
    loading: false,
    done: false,
    currentFilter: "all"
  };

  /* ---------- 时间格式化 ---------- */
  var SECOND = 1000, MINUTE = 60 * SECOND, HOUR = 60 * MINUTE, DAY = 24 * HOUR;
  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function formatRelative(date) {
    var diff = Date.now() - date.getTime();
    if (diff < MINUTE) return "刚刚";
    if (diff < HOUR) return Math.floor(diff / MINUTE) + " 分钟前";
    if (diff < DAY) return Math.floor(diff / HOUR) + " 小时前";
    if (diff < 7 * DAY) return Math.floor(diff / DAY) + " 天前";
    if (date.getFullYear() === new Date().getFullYear()) {
      return (date.getMonth() + 1) + " 月 " + date.getDate() + " 日";
    }
    return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate());
  }

  function formatAbsolute(date) {
    return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate())
      + " " + pad(date.getHours()) + ":" + pad(date.getMinutes());
  }

  function isSameDay(a, b) {
    return a.getFullYear() === b.getFullYear()
      && a.getMonth() === b.getMonth()
      && a.getDate() === b.getDate();
  }

  /* ---------- Markdown 解析（无依赖 fallback + 可选 marked） ---------- */
  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function inlineMd(text) {
    // 处理行内：图片 / 链接 / 粗体 / 行内代码 / @mention / #tag
    var safe = escapeHtml(text);
    // 图片 ![alt](url)
    safe = safe.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]+)&quot;)?\)/g,
      function (_, alt, url) { return '<img src="' + url + '" alt="' + alt + '" loading="lazy" decoding="async">'; });
    // 链接 [text](url)
    safe = safe.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer nofollow">$1</a>');
    // 粗体 **text**
    safe = safe.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    // 行内代码 `code`
    safe = safe.replace(/`([^`]+)`/g, "<code>$1</code>");
    // @mention
    safe = safe.replace(/(^|\s)@([\w.\-]+)/g, '$1<span class="memo-mention">@$2</span>');
    // #tag
    safe = safe.replace(/(^|\s)#([\w\u4e00-\u9fa5\-]+)/g, '$1<a class="memo-tag" href="#tag-$2">#$2</a>');
    return safe;
  }

  function miniMarkdown(content) {
    if (!content) return "";
    var lines = content.split(/\r?\n/);
    var html = [], inCode = false, codeBuf = [], inList = false, listType = null;

    function flushList() {
      if (inList) {
        html.push("</" + listType + ">");
        inList = false; listType = null;
      }
    }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/^```/.test(line)) {
        if (!inCode) {
          flushList();
          inCode = true;
          var lang = line.replace(/^```\s*/, "").trim();
          codeBuf = [];
          // 跳过到下一个 ```
          while (++i < lines.length && !/^```/.test(lines[i])) {
            codeBuf.push(lines[i]);
          }
          var code = escapeHtml(codeBuf.join("\n"));
          html.push('<pre><code' + (lang ? ' class="language-' + lang + '"' : "")
            + '>' + code + '</code></pre>');
          inCode = false;
        }
        continue;
      }
      if (inCode) continue;

      // 引用
      if (/^>\s?/.test(line)) {
        flushList();
        var q = inlineMd(line.replace(/^>\s?/, ""));
        html.push("<blockquote><p>" + q + "</p></blockquote>");
        continue;
      }

      // 无序列表
      if (/^[-*]\s+/.test(line)) {
        if (!inList || listType !== "ul") { flushList(); html.push("<ul>"); inList = true; listType = "ul"; }
        html.push("<li>" + inlineMd(line.replace(/^[-*]\s+/, "")) + "</li>");
        continue;
      }

      // 有序列表
      if (/^\d+\.\s+/.test(line)) {
        if (!inList || listType !== "ol") { flushList(); html.push("<ol>"); inList = true; listType = "ol"; }
        html.push("<li>" + inlineMd(line.replace(/^\d+\.\s+/, "")) + "</li>");
        continue;
      }

      // 空行
      if (!line.trim()) { flushList(); continue; }

      // 普通段落
      flushList();
      html.push("<p>" + inlineMd(line) + "</p>");
    }
    flushList();
    return html.join("");
  }

  var renderer = (typeof window.marked === "function" || typeof window.marked === "object")
    ? function (c) { return window.marked.parse(c || "", { breaks: true, gfm: true }); }
    : miniMarkdown;

  /* ---------- 图片懒加载 ---------- */
  var imgObserver = null;
  function lazyImage(el) {
    if (!imgObserver && "IntersectionObserver" in window) {
      imgObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var img = e.target;
            if (img.dataset.src) { img.src = img.dataset.src; img.removeAttribute("data-src"); }
            img.classList.add("is-loaded");
            imgObserver.unobserve(img);
          }
        });
      }, { rootMargin: "120px 0px" });
    }
    if (imgObserver) {
      el.setAttribute("data-loading", "lazy");
      imgObserver.observe(el);
    } else {
      el.classList.add("is-loaded");
    }
  }

  /* ---------- 图片点击放大（轻量自实现，无 view-image 依赖） ---------- */
  function bindImageZoom(scope) {
    var imgs = scope.querySelectorAll(".dusays-memos__content img");
    imgs.forEach(function (img) {
      if (img.dataset.zoomBound) return;
      img.dataset.zoomBound = "1";
      img.addEventListener("click", function (e) {
        e.preventDefault();
        openViewer(img.src, img.alt);
      });
    });
  }

  function openViewer(src, alt) {
    var overlay = document.createElement("div");
    overlay.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:9999;"
      + "display:flex;align-items:center;justify-content:center;cursor:zoom-out;padding:24px;";
    overlay.innerHTML = '<img src="' + src + '" alt="' + (alt || "") + '" '
      + 'style="max-width:96%;max-height:96%;border-radius:8px;box-shadow:0 20px 60px rgba(0,0,0,0.6);">';
    overlay.addEventListener("click", function () { document.body.removeChild(overlay); });
    document.body.appendChild(overlay);
  }

  /* ---------- 卡片渲染 ---------- */
  function getInitial(name) {
    if (!name) return "?";
    var s = name.trim();
    return s.charAt(0).toUpperCase();
  }

  function buildCard(memo) {
    var date = new Date(memo.createTime);
    var updated = new Date(memo.updateTime);
    var edited = date.getTime() !== updated.getTime();
    var card = document.createElement("article");
    card.className = "dusays-memos__card" + (memo.pinned ? " is-pinned" : "");
    card.setAttribute("data-id", memo.name);

    var pinHtml = memo.pinned
      ? '<span class="dusays-memos__pin-tag" title="置顶">📌 置顶</span>'
      : "";

    var head = document.createElement("div");
    head.className = "dusays-memos__card-head";
    head.innerHTML =
      '<div class="dusays-memos__meta">' +
        '<span class="dusays-memos__avatar">' + escapeHtml(getInitial(cfg.name)) + '</span>' +
        '<span class="dusays-memos__name">' + escapeHtml(cfg.name) + '</span>' +
        '<span class="dusays-memos__dot"></span>' +
        '<span class="dusays-memos__time" tabindex="0">' +
          formatRelative(date) +
          '<span class="dusays-memos__time-tip">' + formatAbsolute(date) + '</span>' +
        '</span>' +
        (edited ? '<span class="dusays-memos__dot"></span><span style="color:var(--memo-text-muted)">已编辑</span>' : '') +
      '</div>' + pinHtml;
    card.appendChild(head);

    var content = document.createElement("div");
    content.className = "dusays-memos__content";
    content.innerHTML = renderer(memo.content || "");
    // 图片懒加载
    content.querySelectorAll("img").forEach(lazyImage);
    card.appendChild(content);

    // 标签
    if (memo.tags && memo.tags.length) {
      var foot = document.createElement("div");
      foot.className = "dusays-memos__card-foot";
      var tagsHtml = memo.tags.map(function (t) {
        return '<span class="dusays-memos__tag">#' + escapeHtml(t) + '</span>';
      }).join("");
      foot.innerHTML =
        '<div class="dusays-memos__tags">' + tagsHtml + '</div>' +
        '<span class="dusays-memos__id" title="点击复制 memo ID">#' + memo.name.replace(/^memos\//, "") + '</span>';
      card.appendChild(foot);

      foot.querySelector(".dusays-memos__id").addEventListener("click", function () {
        var text = memo.name.replace(/^memos\//, "");
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(function () {
            foot.querySelector(".dusays-memos__id").textContent = "✓ 已复制";
            setTimeout(function () {
              foot.querySelector(".dusays-memos__id").textContent = "#" + text;
            }, 1500);
          });
        }
      });
    }

    bindImageZoom(card);
    return card;
  }

  /* ---------- 过滤 ---------- */
  function passesFilter(memo, f) {
    if (f === "all") return true;
    if (f === "pinned") return !!memo.pinned;
    var prop = memo.property || {};
    if (f === "image") {
      return /!\[[^\]]*\]\([^)]+\)/.test(memo.content || "") || (memo.attachments || []).some(function (a) { return a.type && a.type.indexOf("image/") === 0; });
    }
    if (f === "link") return !!prop.hasLink;
    if (f === "code") return !!prop.hasCode;
    return true;
  }

  function applyFilter() {
    var cards = els.list.querySelectorAll(".dusays-memos__card");
    var any = false;
    cards.forEach(function (c) {
      var memo = state.memos.find(function (m) { return m.name === c.dataset.id; });
      var show = memo ? passesFilter(memo, state.currentFilter) : false;
      c.style.display = show ? "" : "none";
      if (show) any = true;
    });
    // 全部隐藏时给提示
    var empty = els.list.querySelector(".dusays-memos__empty");
    if (!any && state.memos.length > 0) {
      if (!empty) {
        empty = document.createElement("div");
        empty.className = "dusays-memos__empty";
        empty.innerHTML = '<div class="dusays-memos__empty-icon">🔍</div><p>当前筛选条件下没有说说</p>';
        els.list.appendChild(empty);
      }
      empty.hidden = false;
    } else if (empty) {
      empty.hidden = true;
    }
  }

  /* ---------- 数据加载 ---------- */
  function buildFilterExpr() {
    // AIP-160: creator=="users/penn" && visibility=="PUBLIC" && state=="NORMAL"
    return 'creator == "' + cfg.creator + '" && visibility == "PUBLIC" && state == "NORMAL"';
  }

  function fetchPage(reset) {
    if (state.loading || state.done) return;
    state.loading = true;
    els.loadmore.disabled = true;
    els.loadmore.querySelector(".dusays-memos__loadmore-text").textContent = "加载中…";

    var url = cfg.host + "/api/v1/memos?pageSize=" + cfg.pageSize + "&filter=" + encodeURIComponent(buildFilterExpr());
    if (state.pageToken) url += "&pageToken=" + encodeURIComponent(state.pageToken);

    fetch(url, { headers: { "Accept": "application/json" } })
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (data) {
        var items = (data && data.memos) || [];
        state.memos = state.memos.concat(items);
        state.pageToken = (data && data.nextPageToken) || "";

        if (reset) {
          els.list.innerHTML = "";
          els.list.setAttribute("aria-busy", "false");
        }
        var frag = document.createDocumentFragment();
        items.forEach(function (m) { frag.appendChild(buildCard(m)); });
        els.list.appendChild(frag);

        if (state.pageToken) {
          els.loadmore.hidden = false;
          els.loadmore.disabled = false;
          els.loadmore.querySelector(".dusays-memos__loadmore-text").textContent = "加载更多";
        } else {
          els.loadmore.hidden = true;
          els.end.hidden = state.memos.length === 0;
        }
        els.error.hidden = true;

        // 统计
        renderStats();
        // 过滤应用
        applyFilter();
      })
      .catch(function (err) {
        console.error("[dusays-memos] fetch failed:", err);
        els.error.hidden = false;
        els.list.setAttribute("aria-busy", "false");
        els.list.innerHTML = "";
      })
      .then(function () {
        state.loading = false;
      });
  }

  function renderStats() {
    var today = new Date();
    var todayCount = state.memos.filter(function (m) { return isSameDay(new Date(m.createTime), today); }).length;
    var imageCount = state.memos.filter(function (m) { return passesFilter(m, "image"); }).length;
    animateNumber(els.statTotal, state.memos.length);
    animateNumber(els.statToday, todayCount);
    animateNumber(els.statImage, imageCount);
  }

  function animateNumber(el, target) {
    if (!el) return;
    var cur = parseInt(el.textContent, 10);
    if (isNaN(cur)) cur = 0;
    if (cur === target) return;
    var step = Math.max(1, Math.ceil(Math.abs(target - cur) / 12));
    var tick = function () {
      cur += (target > cur ? step : -step);
      if ((step > 0 && cur >= target) || (step < 0 && cur <= target)) cur = target;
      el.textContent = cur;
      if (cur !== target) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---------- 事件绑定 ---------- */
  els.filters.addEventListener("click", function (e) {
    var btn = e.target.closest(".dusays-memos__filter");
    if (!btn) return;
    Array.prototype.forEach.call(els.filters.children, function (b) { b.classList.remove("is-active"); });
    btn.classList.add("is-active");
    state.currentFilter = btn.dataset.filter;
    applyFilter();
    window.scrollTo({ top: els.list.offsetTop - 80, behavior: "smooth" });
  });

  els.loadmore.addEventListener("click", function () { fetchPage(false); });

  els.retry.addEventListener("click", function () {
    state.pageToken = "";
    state.memos = [];
    state.done = false;
    fetchPage(true);
  });

  /* ---------- 启动 ---------- */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { fetchPage(true); });
  } else {
    fetchPage(true);
  }
})();
</script>
