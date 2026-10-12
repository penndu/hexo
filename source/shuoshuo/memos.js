/* ============================================================
 * Memos 说说广场 —— 适配 Memos v0.31.0 API
 * 独立外部文件，避免 Markdown 渲染对内联脚本的转义。
 *
 * 相比 v0.29.x 的主要变更：
 *  1. 列表接口移除 parent 参数，改用 CEL filter：
 *       GET /api/v1/memos?filter=creator == "users/penn"
 *  2. Memo.resources 更名为 Memo.attachments；
 *       附件资源名 attachments/{uid}，文件地址
 *       /file/attachments/{uid}/{filename}
 *  3. 头像地址由 /api/v1/users/{id}/avatar 改为
 *       /file/users/{username}/avatar
 *  4. 标签过滤可通过 filter 的 tags 字段实现。
 * 注意：实例必须为「公开访问」模式，匿名才能读取。
 * ============================================================ */

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
};

var limit = parseInt(memo.limit, 10);
if (isNaN(limit) || limit < 1) { limit = 10; }
var base = memo.host.replace(/\/+$/, '');
var creatorName = 'users/' + memo.creatorId;
var memoDom = null;
var page = 1,
    nextDom = null,
    nextLength = 0,
    nextPageToken = '',
    btnRemove = 0,
    tag = '';
var loadBtnHtml = '<button class="load-btn button-load">努力加载中……</button>';

// 构造列表 URL（v0.31：filter 替代 parent）
function buildListUrl(pageToken, tagName) {
    var filter = 'creator == "' + creatorName + '"';
    if (tagName) {
        filter += ' && tags.exists(t, t == "' + tagName + '")';
    }
    var url = base + '/api/v1/memos?filter=' + encodeURIComponent(filter) + '&pageSize=' + limit;
    if (pageToken) { url += '&pageToken=' + encodeURIComponent(pageToken); }
    return url;
}

function removeLoadBtn() {
    var b = document.querySelector('button.button-load');
    if (b) { b.remove(); }
    btnRemove = 1;
}

function bindLoadBtn() {
    var btn = document.querySelector('button.button-load');
    if (!btn) { return; }
    btn.addEventListener('click', function () {
        btn.textContent = '努力加载中……';
        if (nextDom) { renderMemos(nextDom); }
        if (nextLength < limit || !nextPageToken) {
            removeLoadBtn();
            return;
        }
        preloadNext();
    });
}

// 加载第一页
function loadFirst() {
    fetch(buildListUrl('', tag))
        .then(function (res) { return res.json(); })
        .then(function (data) {
            if (data.code) {
                console.error('Memos API error:', data);
                setBtnError();
                return;
            }
            renderMemos(data);
            nextPageToken = data.nextPageToken || '';
            var nowLength = (data.memos || []).length;
            if (nowLength < limit || !nextPageToken) {
                removeLoadBtn();
                return;
            }
            page++;
            preloadNext();
        })
        .catch(function (err) {
            console.error('fetch memos failed:', err);
            setBtnError();
        });
}

// 预加载下一页
function preloadNext() {
    fetch(buildListUrl(nextPageToken, tag))
        .then(function (res) { return res.json(); })
        .then(function (data) {
            if (data.code) {
                console.error('Memos API error:', data);
                return;
            }
            nextPageToken = data.nextPageToken || '';
            nextDom = data;
            nextLength = (data.memos || []).length;
            page++;
            if (nextLength < 1 || !nextPageToken) {
                removeLoadBtn();
            }
        })
        .catch(function (err) {
            console.error('fetch next memos failed:', err);
        });
}

function setBtnError() {
    var b = document.querySelector('button.button-load');
    if (b) { b.textContent = '加载失败，请稍后重试'; }
}

// 标签选择（v0.31 通过 filter tags 实现）
document.addEventListener('click', function (event) {
    var target = event.target;
    if (target.tagName.toLowerCase() === 'a' && (target.getAttribute('href') || '').indexOf('#') === 0) {
        event.preventDefault();
        tag = target.getAttribute('href').substring(1);
        page = 1;
        nextDom = null;
        nextLength = 0;
        nextPageToken = '';
        memoDom.innerHTML = '';
        if (btnRemove) {
            btnRemove = 0;
            memoDom.insertAdjacentHTML('afterend', loadBtnHtml);
            bindLoadBtn();
        }
        loadFirst();
        var filterElem = document.getElementById('tag-filter');
        if (filterElem) { filterElem.style.display = 'block'; }
        var tags = document.getElementById('tags');
        if (tags) {
            tags.innerHTML = "Filter: <span class='tag-span'><a rel='noopener noreferrer' href='#'>#" + tag + "</a></span>";
        }
        scrollTo(0, 0);
    }
});

// 附件 HTML（v0.31：attachments 字段 + /file/attachments 路由）
function attachmentsHtml(attachments) {
    if (!attachments || attachments.length === 0) { return ''; }
    var imgBlock = '<div class="resource-wrapper"><div class="images-wrapper" style="display: flex; flex-wrap: wrap; gap: 10px;">';
    var resUrl = '';
    var hasImg = false;
    for (var j = 0; j < attachments.length; j++) {
        var a = attachments[j];
        var uid = (a.name || '').replace(/^attachments\//, '');
        var mime = a.type || '';
        var filename = a.filename || '';
        var link = a.externalLink || (base + '/file/attachments/' + uid + '/' + encodeURIComponent(filename));
        if (mime.indexOf('image') === 0) {
            hasImg = true;
            imgBlock += '<div class="resimg" style="flex: 1 1 calc(33.33% - 10px); overflow: hidden; position: relative; height: 200px;">' +
                '<img loading="lazy" src="' + link + '" style="width: 100%; height: 100%; object-fit: contain; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" />' +
                '</div>';
        } else {
            resUrl += '<a target="_blank" rel="noreferrer" href="' + link + '">' + filename + '</a>';
        }
    }
    imgBlock += '</div></div>';
    var out = '';
    if (hasImg) { out += imgBlock; }
    if (resUrl) { out += '<div class="resource-wrapper"><p class="datasource">' + resUrl + '</p></div>'; }
    return out;
}

// 插入 HTML
function renderMemos(data) {
    var memoResult = '';
    var TAG_REG = /#([^\s#]+?) /g;
    var BILIBILI_REG = /<a\shref="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?">.*<\/a>/g;
    var NETEASE_MUSIC_REG = /<a\shref="https:\/\/music\.163\.com\/.*id=([0-9]+)".*?>.*<\/a>/g;
    var QQMUSIC_REG = /<a\shref="https\:\/\/y\.qq\.com\/.*(\/[0-9a-zA-Z]+)(\.html)?".*?>.*?<\/a>/g;
    var QQVIDEO_REG = /<a\shref="https:\/\/v\.qq\.com\/.*\/([a-z|A-Z|0-9]+)\.html".*?>.*<\/a>/g;
    var SPOTIFY_REG = /<a\shref="https:\/\/open\.spotify\.com\/(track|album)\/([\s\S]+)".*?>.*<\/a>/g;
    var YOUKU_REG = /<a\shref="https:\/\/v\.youku\.com\/.*\/id_([a-z|A-Z|0-9|==]+)\.html".*?>.*?<\/a>/g;
    var YOUTUBE_REG = /<a\shref="https:\/\/www\.youtube\.com\/watch\?v\=([a-z|A-Z|0-9]{11})\".*?>.*?<\/a>/g;

    var list = data.memos || [];
    var avatarurl = base + '/file/users/' + memo.creatorId + '/avatar';
    for (var i = 0; i < list.length; i++) {
        var uId = list[i].name;
        var memoContREG = (list[i].content || '')
            .replace(TAG_REG, "<span class='tag-span'><a rel='noopener noreferrer' href='#$1'>#$1</a></span>");
        memoContREG = marked.parse(memoContREG)
            .replace(BILIBILI_REG, "<div class='video-wrapper'><iframe src='//www.bilibili.com/blackboard/html5mobileplayer.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true' style='position:absolute;height:100%;width:100%;'></iframe></div>")
            .replace(YOUTUBE_REG, "<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>")
            .replace(NETEASE_MUSIC_REG, "<meting-js auto='https://music.163.com/#/song?id=$1'></meting-js>")
            .replace(QQMUSIC_REG, "<meting-js auto='https://y.qq.com/n/yqq/song$1.html'></meting-js>")
            .replace(QQVIDEO_REG, "<div class='video-wrapper'><iframe src='//v.qq.com/iframe/player.html?vid=$1' allowFullScreen='true' frameborder='no'></iframe></div>")
            .replace(SPOTIFY_REG, "<div class='spotify-wrapper'><iframe style='border-radius:12px' src='https://open.spotify.com/embed/$1/$2?utm_source=generator&theme=0' width='100%' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe></div>")
            .replace(YOUKU_REG, "<div class='video-wrapper'><iframe src='https://player.youku.com/embed/$1' frameborder=0 'allowfullscreen'></iframe></div>")
            .replace(YOUTUBE_REG, "<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>");
        memoContREG += attachmentsHtml(list[i].attachments);
        var relativeTime = getRelativeTime(new Date(list[i].createTime));
        memoResult += '<li class="timeline"><div class="memos__content" style="--avatar-url:url(' + avatarurl + ')"><div class="memos__text"><div class="memos__userinfo"><div>' + memo.name + '</div><div><svg viewBox="0 0 24 24" aria-label="认证账号" class="memos__verify"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.5 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145-.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg></div><div class="memos__id">@' + memo.username + '</div></div><p>' + memoContREG + '</p></div><div class="memos__meta"><small class="memos__date">' + relativeTime + ' • From「<a href="' + memo.host + uId + '" target="_blank">Memos</a>」</small></div></div></li>';
    }
    memoDom.insertAdjacentHTML('beforeend', '<ul class="">' + memoResult + '</ul>');
    if (memo.doubanAPI) { fetchDB(); }
    var b = document.querySelector('button.button-load');
    if (b) { b.textContent = '加载更多'; }
}

// 解析豆瓣 Start
function fetchDB() {
    var dbAPI = memo.doubanAPI;
    var dbA = document.querySelectorAll(".timeline a[href*='douban.com/subject/']:not([rel='noreferrer'])") || '';
    if (dbA) {
        for (var i = 0; i < dbA.length; i++) {
            _this = dbA[i];
            var dbHref = _this.href;
            var db_reg = /^https\:\/\/(movie|book)\.douban\.com\/subject\/([0-9]+)\/?/;
            var db_type = dbHref.replace(db_reg, "$1");
            var db_id = dbHref.replace(db_reg, "$2").toString();
            if (db_type == 'movie') {
                var this_item = 'movie' + db_id;
                var url = dbAPI + "movies/" + db_id;
                if (localStorage.getItem(this_item) == null || localStorage.getItem(this_item) == 'undefined') {
                    fetch(url).then(function (res) { return res.json(); }).then(function (data) {
                        var fetch_item = 'movies' + data.sid;
                        var fetch_href = "https://movie.douban.com/subject/" + data.sid + "/";
                        localStorage.setItem(fetch_item, JSON.stringify(data));
                        movieShow(fetch_href, fetch_item);
                    });
                } else {
                    movieShow(dbHref, this_item);
                }
            } else if (db_type == 'book') {
                var this_item = 'book' + db_id;
                var url = dbAPI + "v2/book/id/" + db_id;
                if (localStorage.getItem(this_item) == null || localStorage.getItem(this_item) == 'undefined') {
                    fetch(url).then(function (res) { return res.json(); }).then(function (data) {
                        var fetch_item = 'book' + data.id;
                        var fetch_href = "https://book.douban.com/subject/" + data.id + "/";
                        localStorage.setItem(fetch_item, JSON.stringify(data));
                        bookShow(fetch_href, fetch_item);
                    });
                } else {
                    bookShow(dbHref, this_item);
                }
            }
        }
    }
}
function movieShow(fetch_href, fetch_item) {
    var data = JSON.parse(localStorage.getItem(fetch_item));
    var db_star = Math.ceil(data.rating);
    var db_html = "<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' rel='noreferrer' href='" + fetch_href + "'>《" + data.name + "》</a></h4><div class='rating'><div class='rating-star allstar" + db_star + "'></div><div class='rating-average'>" + data.rating + "</div></div><time class='post-preview--date'>导演：" + data.director + " / 类型：" + data.genre + " / " + data.year + "</time><section class='post-preview--excerpt'>" + data.intro.replace(/\s*/g, "") + "</section></div></div><img referrer-policy='no-referrer' loading='lazy' class='post-preview--image' src=" + data.img + "></div>";
    var db_div = document.createElement("div");
    var qs_dom = document.querySelector(".timeline a[href='" + fetch_href + "']");
    if (qs_dom) { qs_dom.parentNode.replaceChild(db_div, qs_dom); db_div.innerHTML = db_html; }
}
function bookShow(fetch_href, fetch_item) {
    var data = JSON.parse(localStorage.getItem(fetch_item));
    var db_star = Math.ceil(data.rating.average);
    var db_html = "<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' rel='noreferrer' href='" + fetch_href + "'>《" + data.title + "》</a></h4><div class='rating'><div class='rating-star allstar" + db_star + "'></div><div class='rating-average'>" + data.rating.average + "</div></div><time class='post-preview--date'>作者：" + data.author + " </time><section class='post-preview--excerpt'>" + data.summary.replace(/\s*/g, "") + "</section></div></div><img referrer-policy='no-referrer' loading='lazy' class='post-preview--image' src=" + data.images.medium + "></div>";
    var db_div = document.createElement("div");
    var qs_dom = document.querySelector(".timeline a[href='" + fetch_href + "']");
    if (qs_dom) { qs_dom.parentNode.replaceChild(db_div, qs_dom); db_div.innerHTML = db_html; }
}
// 解析豆瓣 End

// 总条数（v0.31：getStats 仍返回 totalMemoCount）
function getTotal() {
    var pageUrl = base + '/api/v1/users/' + memo.creatorId + ':getStats';
    fetch(pageUrl)
        .then(function (res) { return res.json(); })
        .then(function (resdata) {
            if (resdata && resdata.totalMemoCount !== undefined) {
                var memosCount = document.getElementById('total');
                if (memosCount) { memosCount.innerHTML = resdata.totalMemoCount; }
            } else {
                throw new Error('No valid totalMemoCount found');
            }
        })
        .catch(function (err) { console.error('Error fetching memos:', err); });
}

// 相对时间
function getRelativeTime(date) {
    var rtf = new Intl.RelativeTimeFormat(memo.language, { numeric: "auto", style: 'short' });
    var now = new Date();
    var diff = now - date;
    var seconds = Math.floor(diff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var months = Math.floor(days / 30);
    var years = Math.floor(days / 365);
    if (years > 0) {
        return rtf.format(-years, 'year');
    } else if (months > 0) {
        return rtf.format(-months, 'month');
    } else if (days > 0) {
        return rtf.format(-days, 'day');
    } else if (hours > 0) {
        return rtf.format(-hours, 'hour');
    } else if (minutes > 0) {
        return rtf.format(-minutes, 'minute');
    } else {
        return rtf.format(-seconds, 'second');
    }
}

// 初始化
function setup() {
    memoDom = document.querySelector(memo.domId);
    if (!memoDom) { return; }
    memoDom.insertAdjacentHTML('afterend', loadBtnHtml);
    bindLoadBtn();
    loadFirst();
    if (memo.total === true) {
        getTotal();
    } else {
        var totalDiv = document.querySelector('div.total');
        if (totalDiv) { totalDiv.remove(); }
    }
    window.ViewImage && ViewImage.init('.container img');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
} else {
    setup();
}
