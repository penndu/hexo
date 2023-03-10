const urls = [
  {host:"https://s.dusays.com/",creatorId:"1",imgsrc:"https://cravatar.cn/avatar/28b57baa4e8f13fe4292ccb2de267e30"},
  {host:"https://s.dusays.com/",creatorId:"2",imgsrc:"https://cravatar.cn/avatar/0d0462a44b088c433b8191135979efd4"},
  {host:"https://s.dusays.com/",creatorId:"3",imgsrc:"https://cravatar.cn/avatar/cf83c746b212c3f222b1c0a41bbf5b86"},
  {host:"https://s.dusays.com/",creatorId:"4",imgsrc:"https://cravatar.cn/avatar/099440206041f0b1af6a386f9e8c036a"},
  {host:"https://s.dusays.com/",creatorId:"5",imgsrc:"https://cravatar.cn/avatar/5c17cfbf21ae1d45d403b7ead8bf0415"},
  {host:"https://s.dusays.com/",creatorId:"6",imgsrc:"https://cravatar.cn/avatar/6e1a1cc742be99a90de39a0096516fac"},
  {host:"https://s.dusays.com/",creatorId:"7",imgsrc:"https://cravatar.cn/avatar/e53fa73039fa60c5862480ae2192d215"},
  {host:"https://s.dusays.com/",creatorId:"8",imgsrc:"https://bu.dusays.com/2023/03/03/6401d82b7e80e.png"},
  {host:"https://s.dusays.com/",creatorId:"9",imgsrc:"https://cravatar.cn/avatar/c1b204bab687a23c8b6d7c8de11c7c59"},
  {host:"https://s.dusays.com/",creatorId:"10",imgsrc:"https://cravatar.cn/avatar/ba2379bacf88f17ea461137906bd127d"},
  {host:"https://s.dusays.com/",creatorId:"11",imgsrc:"https://cravatar.cn/avatar/565ada82edc2f01e7cf2bd95b31f19fd"},
  {host:"https://s.dusays.com/",creatorId:"12",imgsrc:"https://cravatar.cn/avatar/b633193c913ae39a350311efd950ad83"},
  {host:"https://s.dusays.com/",creatorId:"13",imgsrc:"https://cravatar.cn/avatar/3a78942c4ddcda86242f20abdacee082"},
  {host:"https://s.dusays.com/",creatorId:"14",imgsrc:"https://bu.dusays.com/2023/03/03/6401d82b7ecc9.png"},
  {host:"https://s.dusays.com/",creatorId:"15",imgsrc:"https://cravatar.cn/avatar/1be842e0e85b11a35b697506f06e81f5"},
  {host:"https://s.dusays.com/",creatorId:"16",imgsrc:"https://cravatar.cn/avatar/03ce846eef46a1b21c1bc5a4f03c2de1"},
  {host:"https://s.dusays.com/",creatorId:"17",imgsrc:"https://cravatar.cn/avatar/49ef34286a337f7f152c5e61013c0e69"},
  {host:"https://s.dusays.com/",creatorId:"18",imgsrc:"https://bu.dusays.com/2023/03/07/64072a9fdc9d1.png"},
  {host:"https://s.dusays.com/",creatorId:"19",imgsrc:"https://bu.dusays.com/2023/03/08/640864d11ccaf.png"},
  {host:"https://s.dusays.com/",creatorId:"20",imgsrc:"https://bu.dusays.com/2023/03/08/6408653679f2d.png"},
  {host:"https://s.dusays.com/",creatorId:"21",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3a886d5.png"},
  {host:"https://s.dusays.com/",creatorId:"22",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3a84ebb.png"},
  {host:"https://s.dusays.com/",creatorId:"23",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3a8fb98.png"},
  {host:"https://s.dusays.com/",creatorId:"24",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3a838ee.png"},
  {host:"https://s.dusays.com/",creatorId:"25",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3a9720a.png"},
  {host:"https://s.dusays.com/",creatorId:"26",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3a84114.png"},
  {host:"https://s.dusays.com/",creatorId:"27",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3a8a6d2.png"},
  {host:"https://s.dusays.com/",creatorId:"28",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3a93fae.png"},
  {host:"https://s.dusays.com/",creatorId:"29",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3a9a6e3.png"},
  {host:"https://s.dusays.com/",creatorId:"30",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3a9e533.png"},
  {host:"https://s.dusays.com/",creatorId:"31",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3b5050f.png"},
  {host:"https://s.dusays.com/",creatorId:"32",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3b6539b.png"},
  {host:"https://s.dusays.com/",creatorId:"33",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3b8c6b5.png"},
  {host:"https://s.dusays.com/",creatorId:"34",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3bbaa65.png"},
  {host:"https://s.dusays.com/",creatorId:"35",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3bd9adc.png"},
  {host:"https://s.dusays.com/",creatorId:"36",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3c0d9a6.png"}
]
var bbDom = document.querySelector('#bbs');
var load = '<div id="load" onclick="nextFetch()" ><button class="load-btn button-load">加载更多</button></div>'
var loading = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
var bbsDatas = [],bbsData = {},nextDatas = [],nextData = {},limit = 10
var page = 1,offset = 0,nextLength = 0,nextDom='',bbUrlNow = '',imgsrcNow = '',hostNow = '',creIdNow = ''
bbDom.innerHTML = loading
allUrls()
function allUrls(){
  var myHtml = ''
  for(var i=0;i < urls.length;i++){
    myHtml += '<div class="bbs-urls " onclick="urlsNow(this)" data-host="'+urls[i].host+'" data-creatorId="'+urls[i].creatorId+'" data-imgsrc="'+urls[i].imgsrc+'" data-index="'+i+'"><img src="'+urls[i].imgsrc+'" alt=""></div>'
  }
  myHtml = '<div id="bbs-urls">'+myHtml+'</div>'
  bbDom.insertAdjacentHTML('beforebegin', myHtml);
}
function nextFetch(){
  document.querySelector("button.button-load").textContent= '加载中……';
  updateHTMl(nextDatas)
  if(nextLength < 10){
    document.querySelector("button.button-load").remove()
    return
  }
  getNextList()
};
function urlsNow(e){
  var domUrls = document.querySelectorAll('#bbs-urls .bbs-urls')
  if(e.classList.contains('url-now')){
    domUrls[e.getAttribute("data-index")].classList.remove("url-now")
    fetchBBser()
  }else{
    domUrls.forEach(function(value,index){ domUrls[index].classList.remove("url-now")})
    var btn = document.querySelector('button.button-load')
    if(btn){btn.remove()}
    page = 1,offset = 0
    bbDom.innerHTML = loading
    var type = e.getAttribute("data-type")
    if(type == 'random'){
      var num = Math.round(Math.random() * (urls.length-1))
      hostNow = urls[num].host
      creIdNow = urls[num].creatorId
      imgsrcNow =urls[num].imgsrc
      domUrls[num].classList.add("url-now")
    }else{
      domUrls[e.getAttribute("data-index")].classList.add("url-now")
      hostNow = e.getAttribute("data-host")
      creIdNow = e.getAttribute("data-creatorId")
      imgsrcNow = e.getAttribute("data-imgsrc")
    }
    bbUrlNow = hostNow+"api/memo?creatorId="+creIdNow+"&rowStatus=NORMAL&limit=10"
    fetch(bbUrlNow).then(res => res.json()).then( resdata =>{
      bbDom.innerHTML = ''
      bbsDatas.length = 0
      for(var j=0;j < resdata.data.length;j++){
            var resValue = resdata.data[j]
            bbsData = {
              updatedTs: resValue.updatedTs,
              creatorId:resValue.creatorId,
              creator: resValue.creatorName || resValue.creator.nickname || resValue.creator.name,
              imgsrc: imgsrcNow,
              content: resValue.content,
              resourceList: resValue.resourceList,
              url:hostNow
            }
            bbsDatas.push(bbsData)
      }
      updateHTMl(bbsDatas)
      bbDom.insertAdjacentHTML('afterend', load);
      var nowLength = bbsData.length
      if(nowLength < 10){
        document.querySelector("button.button-load").remove()
        return
      }
      page++
      offset = 10*(page-1)
      getNextList()
    });
  }
}
function getNextList(){
  var bbUrl = bbUrlNow+"&offset="+offset;
  fetch(bbUrl).then(res => res.json()).then( resdata =>{
    nextDom = resdata.data
    nextLength = nextDom.length
    page++
    offset = 10*(page-1)
    if(nextLength < 1){
      document.querySelector("button.button-load").remove()
      return
    }
    nextDatas.length = 0
    for(var j=0;j < nextDom.length;j++){
      var resValue = nextDom[j]
      nextData = {
        updatedTs: resValue.updatedTs,
        creatorId:resValue.creatorId,
        creator: resValue.creator.nickname || resValue.creator.name,
        imgsrc: imgsrcNow,
        content: resValue.content,
        resourceList: resValue.resourceList,
        url:hostNow
      }
      nextDatas.push(nextData)
    }
  })
}
const withTimeout = (millis, promise) => {
  const timeout = new Promise((resolve, reject) =>
      setTimeout( () => reject(`Timed out after ms.`),millis));
  return Promise.race([
      promise,
      timeout
  ]);
};
const fetchBBser = async () => {
  const results = await Promise.allSettled(urls.map(
    url => withTimeout(2000,fetch(url.host+"api/memo?creatorId="+url.creatorId+"&rowStatus=NORMAL&limit="+limit).then(response => response.json()).then(resdata => resdata.data))
  )).then(results=> {
    bbDom.innerHTML = ''
    for(var i=0;i < results.length;i++){
      var status = results[i].status
      if(status == "fulfilled"){
        var resultsRes = results[i].value
        for(var j=0;j < resultsRes.length;j++){
          var resValue = resultsRes[j]
          bbsData = {
            updatedTs: resValue.updatedTs,
            creatorId:resValue.creatorId,
            creator: resValue.creatorName || resValue.creator.nickname || resValue.creator.name,
            imgsrc: urls[i].imgsrc,
            content: resValue.content,
            resourceList: resValue.resourceList,
            url:urls[i].host
          }
          bbsDatas.push(bbsData)
        }
      }
    }
    bbsDatas.sort(compare("updatedTs"));
    updateHTMl(bbsDatas)
  })
}
fetchBBser()
function compare(p){
  return function(m,n){
      var a = m[p];
      var b = n[p];
      return b - a;
  }
}
function uniqueFunc(arr){
  const res = new Map();
  return arr.filter((item) => !res.has(item.creator) && res.set(item.creator, 1));
}
function updateHTMl(data){
  var result="",resultAll="";
  const TAG_REG = /#([^\s#]+?) /g
  , BILIBILI_REG = /<a.*?href="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?".*?>.*<\/a>/g
  , NETEASE_MUSIC_REG = /<a.*?href="https:\/\/music\.163\.com\/.*id=([0-9]+)".*?>.*<\/a>/g
  , QQMUSIC_REG = /<a.*?href="https\:\/\/y\.qq\.com\/.*(\/[0-9a-zA-Z]+)(\.html)?".*?>.*?<\/a>/g
  , QQVIDEO_REG = /<a.*?href="https:\/\/v\.qq\.com\/.*\/([a-z|A-Z|0-9]+)\.html".*?>.*<\/a>/g
  , YOUKU_REG = /<a.*?href="https:\/\/v\.youku\.com\/.*\/id_([a-z|A-Z|0-9|==]+)\.html".*?>.*<\/a>/g
  , YOUTUBE_REG = /<a.*?href="https:\/\/www\.youtube\.com\/watch\?v\=([a-z|A-Z|0-9]{11})\".*?>.*<\/a>/g;
  marked.setOptions({
    breaks: true,
    smartypants: true,
    langPrefix: 'language-'
  });
  for(var i=0;i < data.length;i++){
      var memos = data[i].url
      var bbContREG = data[i].content
        .replace(TAG_REG, "<span class='tag-span'>#$1</span> ")
      bbContREG = marked.parse(bbContREG)
        .replace(BILIBILI_REG, "<div class='video-wrapper'><iframe src='//player.bilibili.com/player.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe></div>")
        .replace(NETEASE_MUSIC_REG, "<meting-js auto='https://music.163.com/#/song?id=$1'></meting-js>")
        .replace(QQMUSIC_REG, "<meting-js auto='https://y.qq.com/n/yqq/song$1.html'></meting-js>")
        .replace(QQVIDEO_REG, "<div class='video-wrapper'><iframe src='//v.qq.com/iframe/player.html?vid=$1' allowFullScreen='true' frameborder='no'></iframe></div>")
        .replace(YOUKU_REG, "<div class='video-wrapper'><iframe src='https://player.youku.com/embed/$1' frameborder=0 'allowfullscreen'></iframe></div>")
        .replace(YOUTUBE_REG, "<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>")
      if(data[i].resourceList && data[i].resourceList.length > 0){
        var resourceList = data[i].resourceList;
        var imgUrl='',resUrl='',resImgLength = 0;
        for(var j=0;j < resourceList.length;j++){
          var restype = resourceList[j].type.slice(0,5);
          var resexlink = resourceList[j].externalLink
          var resLink = ''
          if(resexlink){
            resLink = resexlink
          }else{
            resLink = memos+'o/r/'+resourceList[j].id+'/'+resourceList[j].filename
          }
          if(restype == 'image'){
            imgUrl += '<figure class="gallery-thumbnail"><img class="img thumbnail-image" src="'+resLink+'"/></figure>'
            resImgLength = resImgLength + 1 
          }
          if(restype !== 'image'){
            resUrl += '<a target="_blank" rel="noreferrer" href="'+resLink+'">'+resourceList[j].filename+'</a>'
          }
        }
        if(imgUrl){
          var resImgGrid = ""
          if(resImgLength !== 1){var resImgGrid = "grid grid-"+resImgLength}
          bbContREG += '<div class="resimg '+resImgGrid+'">'+imgUrl+'</div></div>'
        }
        if(resUrl){
          bbContREG += '<div class="resour">'+resUrl+'</div>'
        }
      }
      result += '<li class=""><div class="bbs-avatar"><img src="'+data[i].imgsrc+'" alt=""><a href="'+data[i].url+'u/'+data[i].creatorId+'" target="_blank" rel="noopener noreferrer" class="bbs-creator">'+data[i].creator+'</a><span class="bbs-dot">·</span><span class="bbs-date">'+new Date(data[i].updatedTs * 1000).toLocaleString()+'</span></div><div class="bbs-content"><div class="bbs-text">'+bbContREG+'</div></div></li>'
  }
  var bbBefore = "<section class='bbs-timeline'><ul class='list'>"
  var bbAfter = "</ul></section>"
  resultAll = bbBefore + result + bbAfter
  bbDom.insertAdjacentHTML('beforeend', resultAll);
  fetchDB()
  var btn = document.querySelector('button.button-load')
  if(btn){
    btn.textContent= '加载更多';
  }
  window.ViewImage && ViewImage.init('.bbs-content img')
  window.Lately && Lately.init({ target: '.bbs-date' });
}
function fetchDB(){
  var dbAPI = "https://douban.edui.fun/";
  var dbA = document.querySelectorAll(".bbs-timeline a[href*='douban.com/subject/']:not([rel='noreferrer'])") || '';
  if(dbA){
    for(var i=0;i < dbA.length;i++){
      _this = dbA[i]
      var dbHref = _this.href
      var db_reg = /^https\:\/\/(movie|book)\.douban\.com\/subject\/([0-9]+)\/?/;
      var db_type = dbHref.replace(db_reg, "$1");
      var db_id = dbHref.replace(db_reg, "$2").toString();
        if (db_type == 'movie') {
          var this_item = 'movie' + db_id;
          var url = dbAPI + "movies/" + db_id ;
          if (localStorage.getItem(this_item) == null || localStorage.getItem(this_item) == 'undefined') {
            fetch(url).then(res => res.json()).then( data =>{
              let fetch_item = 'movies' + data.sid;
              let fetch_href = "https://movie.douban.com/subject/"+data.sid+"/"
              localStorage.setItem(fetch_item, JSON.stringify(data));
              movieShow(fetch_href, fetch_item)
            });
          } else {
            movieShow(dbHref, this_item)
          }
        }else if (db_type == 'book') {
          var this_item = 'book' + db_id;
          var url = dbAPI + "v2/book/id/" + db_id;
          if (localStorage.getItem(this_item) == null || localStorage.getItem(this_item) == 'undefined') {
            fetch(url).then(res => res.json()).then( data =>{
              let fetch_item = 'book' + data.id;
              let fetch_href = "https://book.douban.com/subject/"+data.id+"/"
              localStorage.setItem(fetch_item, JSON.stringify(data));
              bookShow(fetch_href, fetch_item)
            });
          } else {
            bookShow(dbHref, this_item)
          }
        }
    }
  }
}
function movieShow(fetch_href, fetch_item){
  var storage = localStorage.getItem(fetch_item);
  var data = JSON.parse(storage);
  var db_star = Math.ceil(data.rating);
  var db_html = "<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' rel='noreferrer' href='" + fetch_href + "'>《" + data.name + "》</a></h4><div class='rating'><div class='rating-star allstar" + db_star + "'></div><div class='rating-average'>" + data.rating + "</div></div><time class='post-preview--date'>导演：" + data.director + " / 类型：" + data.genre + " / " + data.year + "</time><section style='max-height:75px;overflow:hidden;' class='post-preview--excerpt'>" + data.intro.replace(/\s*/g, "") + "</section></div></div><img referrer-policy='no-referrer' loading='lazy' class='post-preview--image' src=" + data.img + "></div>"
  var db_div = document.createElement("div");
  var qs_href = ".bbs-timeline a[href='"+ fetch_href +"']"
  var qs_dom = document.querySelector(qs_href)
  qs_dom.parentNode.replaceChild(db_div, qs_dom);
  db_div.innerHTML = db_html
}
function bookShow(fetch_href, fetch_item) {
  var storage = localStorage.getItem(fetch_item);
  var data = JSON.parse(storage);
  var db_star = Math.ceil(data.rating.average);
  var db_html = "<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' rel='noreferrer' href='" + fetch_href + "'>《" + data.title + "》</a></h4><div class='rating'><div class='rating-star allstar" + db_star + "'></div><div class='rating-average'>" + data.rating.average + "</div></div><time class='post-preview--date'>作者：" + data.author + " </time><section style='max-height:75px;overflow:hidden;' class='post-preview--excerpt'>" + data.summary.replace(/\s*/g, "") + "</section></div></div><img referrer-policy='no-referrer' loading='lazy' class='post-preview--image' src=" + data.images.medium + "></div>"
  var db_div = document.createElement("div");
  var qs_href = ".bbs-timeline a[href='"+ fetch_href +"']"
  var qs_dom = document.querySelector(qs_href)
  qs_dom.parentNode.replaceChild(db_div, qs_dom);
  db_div.innerHTML = db_html
}