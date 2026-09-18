---
title: 友链文章
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

<!-- ============================================
     友链朋友圈 v2（CSS + JS 全部内联，部署只需这一个文件）
     Powered by hexo-circle-of-friends
     设计：现代卡片网格 + 骨架屏 + 暗色模式
     ============================================ -->

<style>
/* ============================================
 * fcircle.css - 友链朋友圈 v2 样式
 * 设计：现代卡片网格 + 骨架屏 + 暗色模式
 * 兼容：butterfly 主题（跟随 data-theme）
 * ============================================ */

/* ===== 主题变量（亮） ===== */
:root,
[data-theme="light"] {
    --fc-bg: transparent;
    --fc-card-bg: #ffffff;
    --fc-text: #303133;
    --fc-text-secondary: #606266;
    --fc-text-tertiary: #909399;
    --fc-border: #ebeef5;
    --fc-border-light: #f2f6fc;
    --fc-primary: #49b1f5;
    --fc-primary-hover: #3a8dca;
    --fc-primary-bg: rgba(73, 177, 245, 0.08);
    --fc-success: #67c23a;
    --fc-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.04);
    --fc-shadow-hover: 0 4px 12px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.08);
    --fc-radius: 12px;
    --fc-skeleton: #f2f3f5;
    --fc-skeleton-shine: #e6e8eb;
}

/* ===== 主题变量（暗） ===== */
[data-theme="dark"] {
    --fc-bg: transparent;
    --fc-card-bg: #1d1e22;
    --fc-text: #e4e6eb;
    --fc-text-secondary: #b0b3b8;
    --fc-text-tertiary: #8a8d92;
    --fc-border: #2e3036;
    --fc-border-light: #26282d;
    --fc-primary: #58a6ff;
    --fc-primary-hover: #79b8ff;
    --fc-primary-bg: rgba(88, 166, 255, 0.12);
    --fc-success: #7ee787;
    --fc-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2);
    --fc-shadow-hover: 0 4px 12px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.4);
    --fc-skeleton: #2a2c31;
    --fc-skeleton-shine: #35373d;
}

/* ===== 容器 ===== */
#fcircle-app {
    margin: 1rem 0;
    font-family: inherit;
    color: var(--fc-text);
    line-height: 1.6;
}

/* ===== 初始 loading ===== */
.fcircle-initial {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 60px 20px;
    color: var(--fc-text-tertiary);
    font-size: 14px;
}

.fcircle-spinner {
    width: 18px;
    height: 18px;
    border: 2px solid var(--fc-border);
    border-top-color: var(--fc-primary);
    border-radius: 50%;
    animation: fc-spin 0.8s linear infinite;
}

@keyframes fc-spin {
    to { transform: rotate(360deg); }
}

/* ===== 统计卡片 ===== */
.fcircle-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
    margin-bottom: 20px;
    padding: 18px;
    background: var(--fc-card-bg);
    border-radius: var(--fc-radius);
    border: 1px solid var(--fc-border);
    box-shadow: var(--fc-shadow);
}

.fcircle-stat {
    text-align: center;
    padding: 8px 4px;
}

.fcircle-stat-num {
    font-size: 26px;
    font-weight: 700;
    color: var(--fc-primary);
    line-height: 1.2;
    font-feature-settings: "tnum";
}

.fcircle-stat-label {
    font-size: 12px;
    color: var(--fc-text-tertiary);
    margin-top: 4px;
    letter-spacing: 0.5px;
}

/* ===== 文章网格 ===== */
.fcircle-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 14px;
}

/* ===== 文章卡片 ===== */
.fcircle-card {
    position: relative;
    display: flex;
    flex-direction: column;
    background: var(--fc-card-bg);
    border: 1px solid var(--fc-border);
    border-radius: var(--fc-radius);
    padding: 16px;
    box-shadow: var(--fc-shadow);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    cursor: pointer;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
}

.fcircle-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--fc-primary), var(--fc-success));
    opacity: 0;
    transition: opacity 0.3s ease;
}

.fcircle-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--fc-shadow-hover);
    border-color: var(--fc-primary);
}

.fcircle-card:hover::before {
    opacity: 1;
}

/* 卡片头部 */
.fcircle-card-head {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
}

.fcircle-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    border: 2px solid var(--fc-border-light);
    background: var(--fc-border-light);
    transition: transform 0.25s ease, border-color 0.25s ease;
}

.fcircle-card:hover .fcircle-avatar {
    transform: scale(1.05);
    border-color: var(--fc-primary);
}

.fcircle-author {
    flex: 1;
    min-width: 0;
}

.fcircle-author-name {
    font-size: 14px;
    font-weight: 600;
    color: var(--fc-text);
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.fcircle-site {
    font-size: 12px;
    color: var(--fc-text-tertiary);
    margin-top: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* 卡片标题 */
.fcircle-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--fc-text);
    line-height: 1.5;
    margin: 0 0 8px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-word;
}

/* 卡片摘要 */
.fcircle-excerpt {
    font-size: 13px;
    color: var(--fc-text-secondary);
    line-height: 1.6;
    margin: 0 0 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
}

/* 卡片底部 */
.fcircle-foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: var(--fc-text-tertiary);
    padding-top: 10px;
    border-top: 1px dashed var(--fc-border);
}

.fcircle-time {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-feature-settings: "tnum";
}

.fcircle-time::before {
    content: "⏱";
    font-size: 11px;
    opacity: 0.7;
}

.fcircle-go {
    color: var(--fc-primary);
    font-weight: 500;
    transition: transform 0.2s ease;
}

.fcircle-card:hover .fcircle-go {
    transform: translateX(2px);
}

/* ===== 骨架屏 ===== */
.fcircle-skeleton-card {
    background: var(--fc-card-bg);
    border: 1px solid var(--fc-border);
    border-radius: var(--fc-radius);
    padding: 16px;
    box-shadow: var(--fc-shadow);
}

.fcircle-skeleton-line,
.fcircle-skeleton-avatar,
.fcircle-skeleton-block {
    background: linear-gradient(90deg,
        var(--fc-skeleton) 0%,
        var(--fc-skeleton-shine) 50%,
        var(--fc-skeleton) 100%);
    background-size: 200% 100%;
    animation: fc-shimmer 1.4s ease-in-out infinite;
    border-radius: 4px;
}

@keyframes fc-shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

.fcircle-skeleton-head {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
}

.fcircle-skeleton-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex-shrink: 0;
}

.fcircle-skeleton-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
}

.fcircle-skeleton-line {
    height: 12px;
}

.fcircle-skeleton-block {
    height: 16px;
    margin-bottom: 8px;
}

/* ===== 加载更多按钮 ===== */
.fcircle-loadmore-wrap {
    display: flex;
    justify-content: center;
    margin: 24px 0 8px;
}

.fcircle-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    min-width: 140px;
    padding: 10px 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--fc-primary);
    background: var(--fc-primary-bg);
    border: 1px solid transparent;
    border-radius: 22px;
    cursor: pointer;
    transition: all 0.25s ease;
    user-select: none;
}

.fcircle-btn:hover {
    background: var(--fc-primary);
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--fc-primary-bg);
}

.fcircle-btn:active {
    transform: translateY(0);
}

.fcircle-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

.fcircle-btn .fcircle-spinner {
    width: 14px;
    height: 14px;
}

/* ===== 错误/空状态 ===== */
.fcircle-state {
    text-align: center;
    padding: 60px 20px;
    color: var(--fc-text-tertiary);
}

.fcircle-state-icon {
    font-size: 48px;
    margin-bottom: 12px;
    opacity: 0.6;
}

.fcircle-state-text {
    font-size: 14px;
    margin-bottom: 16px;
}

/* ===== 底部信息 ===== */
.fcircle-footer {
    text-align: center;
    margin-top: 20px;
    font-size: 12px;
    color: var(--fc-text-tertiary);
}

.fcircle-footer a {
    color: var(--fc-primary);
    text-decoration: none;
    transition: opacity 0.2s;
}

.fcircle-footer a:hover {
    opacity: 0.8;
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
    .fcircle-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .fcircle-stats {
        grid-template-columns: repeat(3, 1fr);
        padding: 14px;
    }

    .fcircle-stat-num {
        font-size: 22px;
    }
}

@media (max-width: 480px) {
    .fcircle-card {
        padding: 14px;
    }

    .fcircle-title {
        font-size: 14px;
    }

    .fcircle-avatar {
        width: 36px;
        height: 36px;
    }
}
</style>

<div id="fcircle-app">
    <div class="fcircle-initial">
        <span class="fcircle-spinner"></span>
        <span>与主机通讯中……</span>
    </div>
</div>

<script>
/* ============================================
 * fcircle.js - 友链朋友圈 v2 自定义脚本
 * 兼容 hexo-circle-of-friends 后端 API
 * 特性：暗色模式同步、骨架屏、错误处理、加载更多
 * ============================================ */

(function () {
    'use strict';

    /* ===== 配置 ===== */
    var CONFIG = {
        containerId: 'fcircle-app',
        apiBase: 'https://f.dusays.com/',
        pageSize: 12,
        errorAvatar: 'https://cdn.jsdmirror.com/gh/Rock-Candy-Tea/Friend-Circle-Frontend/logo.png',
    };

    /* ===== 状态 ===== */
    var state = {
        page: 1,
        loading: false,
        finished: false,
        init: false,
    };

    /* ===== 工具函数 ===== */
    function $(sel, parent) {
        return (parent || document).querySelector(sel);
    }

    function escapeHtml(str) {
        if (str == null) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function escapeAttr(str) {
        return escapeHtml(str);
    }

    function formatDate(timestamp) {
        var ts = Number(timestamp);
        if (!ts || isNaN(ts)) return '';

        if (ts < 1e12) ts = ts * 1000;

        var date = new Date(ts);
        if (isNaN(date.getTime())) return '';

        var now = Date.now();
        var diff = Math.floor((now - date.getTime()) / 1000);

        if (diff < 0) return formatDateString(date);
        if (diff < 60) return '刚刚';
        if (diff < 3600) return Math.floor(diff / 60) + ' 分钟前';
        if (diff < 86400) return Math.floor(diff / 3600) + ' 小时前';
        if (diff < 604800) return Math.floor(diff / 86400) + ' 天前';

        return formatDateString(date);
    }

    function formatDateString(date) {
        var y = date.getFullYear();
        var m = String(date.getMonth() + 1).padStart(2, '0');
        var d = String(date.getDate()).padStart(2, '0');
        return y + '-' + m + '-' + d;
    }

    function stripHtml(html) {
        if (!html) return '';
        var div = document.createElement('div');
        div.innerHTML = html;
        return (div.textContent || div.innerText || '').trim();
    }

    function normalizeUrl(url) {
        if (!url) return '';
        if (url.startsWith('//')) return 'https:' + url;
        return url;
    }

    /* ===== 暗色模式同步 ===== */
    function getTheme() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    }

    function applyTheme() {
        var app = $('#' + CONFIG.containerId);
        if (app) app.setAttribute('data-fc-theme', getTheme());
    }

    function watchTheme() {
        var observer = new MutationObserver(applyTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });
    }

    /* ===== 渲染函数 ===== */
    function renderInitial() {
        return '<div class="fcircle-initial">' +
            '<span class="fcircle-spinner"></span>' +
            '<span>与主机通讯中……</span>' +
        '</div>';
    }

    function renderSkeleton(count) {
        var html = '';
        for (var i = 0; i < count; i++) {
            html += '<div class="fcircle-skeleton-card">' +
                '<div class="fcircle-skeleton-head">' +
                    '<div class="fcircle-skeleton-avatar"></div>' +
                    '<div class="fcircle-skeleton-info">' +
                        '<div class="fcircle-skeleton-line" style="width:50%"></div>' +
                        '<div class="fcircle-skeleton-line" style="width:35%"></div>' +
                    '</div>' +
                '</div>' +
                '<div class="fcircle-skeleton-block" style="width:90%"></div>' +
                '<div class="fcircle-skeleton-block" style="width:70%"></div>' +
            '</div>';
        }
        return html;
    }

    function renderStats(stats) {
        if (!stats) return '';
        var friends = stats.friends_num != null ? stats.friends_num : '—';
        var articles = stats.article_num != null ? stats.article_num : '—';
        var updated = stats.last_updated || '—';

        return '<div class="fcircle-stats">' +
            '<div class="fcircle-stat">' +
                '<div class="fcircle-stat-num">' + escapeHtml(friends) + '</div>' +
                '<div class="fcircle-stat-label">友链站点</div>' +
            '</div>' +
            '<div class="fcircle-stat">' +
                '<div class="fcircle-stat-num">' + escapeHtml(articles) + '</div>' +
                '<div class="fcircle-stat-label">汇总文章</div>' +
            '</div>' +
            '<div class="fcircle-stat">' +
                '<div class="fcircle-stat-num" style="font-size:18px">' + escapeHtml(updated) + '</div>' +
                '<div class="fcircle-stat-label">最后更新</div>' +
            '</div>' +
        '</div>';
    }

    function renderCard(article) {
        var author = article.author || article.name || '匿名';
        var title = article.title || '无标题';
        var link = normalizeUrl(article.link || article.url || '#');
        var avatar = normalizeUrl(article.avatar || article.img);
        var site = article.site_name || '';
        var created = article.created || article.createdAt || article.date || 0;
        var content = stripHtml(article.content || article.description || article.summary || '');

        var avatarHtml = avatar
            ? '<img class="fcircle-avatar" src="' + escapeAttr(avatar) +
                '" alt="' + escapeAttr(author) + '" ' +
                'onerror="if(!this.dataset.err){this.dataset.err=1;this.src=\'' + CONFIG.errorAvatar + '\';}">'
            : '<span class="fcircle-avatar"></span>';

        return '<a class="fcircle-card" href="' + escapeAttr(link) + '" target="_blank" rel="noopener noreferrer">' +
            '<div class="fcircle-card-head">' +
                avatarHtml +
                '<div class="fcircle-author">' +
                    '<div class="fcircle-author-name">' + escapeHtml(author) + '</div>' +
                    (site ? '<div class="fcircle-site">' + escapeHtml(site) + '</div>' : '') +
                '</div>' +
            '</div>' +
            '<h3 class="fcircle-title">' + escapeHtml(title) + '</h3>' +
            (content ? '<p class="fcircle-excerpt">' + escapeHtml(content) + '</p>' : '') +
            '<div class="fcircle-foot">' +
                '<span class="fcircle-time">' + escapeHtml(formatDate(created)) + '</span>' +
                '<span class="fcircle-go">阅读全文 →</span>' +
            '</div>' +
        '</a>';
    }

    function renderEmpty() {
        return '<div class="fcircle-state">' +
            '<div class="fcircle-state-icon">📭</div>' +
            '<div class="fcircle-state-text">暂时还没爬到文章哦～</div>' +
        '</div>';
    }

    function renderError(msg) {
        return '<div class="fcircle-state">' +
            '<div class="fcircle-state-icon">⚠️</div>' +
            '<div class="fcircle-state-text">加载失败：' + escapeHtml(msg || '网络异常') + '</div>' +
            '<button class="fcircle-btn" onclick="window.__fcircleRetry()">重新加载</button>' +
        '</div>';
    }

    function renderLoadmore(loading) {
        return '<div class="fcircle-loadmore-wrap">' +
            '<button class="fcircle-btn" id="fcircle-loadmore" onclick="window.__fcircleLoadMore()"' +
                (loading ? ' disabled' : '') + '>' +
                (loading ? '<span class="fcircle-spinner"></span>加载中…' : '加载更多') +
            '</button>' +
        '</div>';
    }

    function renderFooter() {
        return '<div class="fcircle-footer">' +
            'Powered by <a href="https://github.com/Rock-Candy-Tea/hexo-circle-of-friends" target="_blank" rel="noopener noreferrer">hexo-circle-of-friends</a>' +
            ' · 数据由 ' + escapeHtml(CONFIG.apiBase) + ' 提供' +
        '</div>';
    }

    /* ===== 数据获取 ===== */
    function fetchApi(path) {
        return fetch(CONFIG.apiBase + path, {
            method: 'GET',
            credentials: 'omit',
            headers: { 'Accept': 'application/json' },
        }).then(function (res) {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        });
    }

    function loadPage(append) {
        if (state.loading) return;
        if (state.finished && append) return;

        state.loading = true;
        var app = $('#' + CONFIG.containerId);
        if (!app) return;

        if (!append) {
            app.setAttribute('data-fc-theme', getTheme());
            app.innerHTML = renderSkeleton(CONFIG.pageSize);
        } else {
            var btn = $('#fcircle-loadmore');
            if (btn) {
                btn.disabled = true;
                btn.innerHTML = '<span class="fcircle-spinner"></span>加载中…';
            }
        }

        fetchApi('api/v1/article?page=' + state.page + '&num=' + CONFIG.pageSize)
            .then(function (data) {
                handleResponse(data, append);
            })
            .catch(function (err) {
                if (!append) {
                    app.innerHTML = renderError(err.message);
                } else {
                    var btn = $('#fcircle-loadmore');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '加载更多';
                    }
                    console.error('[fcircle] 加载更多失败:', err);
                }
            })
            .then(function () {
                state.loading = false;
            });
    }

    function handleResponse(data, append) {
        var app = $('#' + CONFIG.containerId);
        if (!app) return;

        var stats = data.statistical_data || data.statistics || null;
        var articles = data.article_data || data.articles || data.data || [];

        if (!append) {
            app.innerHTML = '';
            app.setAttribute('data-fc-theme', getTheme());

            if (stats) {
                app.insertAdjacentHTML('beforeend', renderStats(stats));
            }
            app.insertAdjacentHTML('beforeend', '<div class="fcircle-grid" id="fcircle-grid"></div>');
        }

        var grid = $('#fcircle-grid');
        if (!grid) return;

        if (articles.length === 0) {
            state.finished = true;
            if (!append) {
                app.innerHTML = renderEmpty();
            }
            var oldMore = $('#fcircle-loadmore-wrap');
            if (oldMore) oldMore.remove();
            return;
        }

        var html = articles.map(renderCard).join('');
        grid.insertAdjacentHTML('beforeend', html);

        if (articles.length < CONFIG.pageSize) {
            state.finished = true;
        } else {
            var oldMore = $('.fcircle-loadmore-wrap');
            if (oldMore) oldMore.remove();
            app.insertAdjacentHTML('beforeend', renderLoadmore(false));
        }

        if (!append && !state.init) {
            state.init = true;
            app.insertAdjacentHTML('beforeend', renderFooter());
        }

        state.page++;
    }

    /* ===== 全局函数 ===== */
    window.__fcircleLoadMore = function () {
        loadPage(true);
    };

    window.__fcircleRetry = function () {
        state.page = 1;
        state.finished = false;
        loadPage(false);
    };

    /* ===== 初始化 ===== */
    function init() {
        watchTheme();
        loadPage(false);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
</script>
