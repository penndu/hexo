if(typeof Lately==='undefined'){const script=document.createElement('script');script.src='https://fastly.jsdelivr.net/gh/Tokinx/Lately/lately.min.js';script.onload=()=>{Lately.init({target:'.bbs-date'});};document.head.appendChild(script);}else{Lately.init({target:'.bbs-date'});}
const urls = [
    {host:"https://s.dusays.com/",creatorId:"1",imgsrc:"https://cravatar.cn/avatar/28b57baa4e8f13fe4292ccb2de267e30"},
    {host:"https://s.dusays.com/",creatorId:"2",imgsrc:"https://cravatar.cn/avatar/0d0462a44b088c433b8191135979efd4"},
    {host:"https://s.dusays.com/",creatorId:"3",imgsrc:"https://cravatar.cn/avatar/cf83c746b212c3f222b1c0a41bbf5b86"},
    {host:"https://s.dusays.com/",creatorId:"4",imgsrc:"https://cravatar.cn/avatar/099440206041f0b1af6a386f9e8c036a"},
    {host:"https://s.dusays.com/",creatorId:"5",imgsrc:"https://cravatar.cn/avatar/5c17cfbf21ae1d45d403b7ead8bf0415"},
    {host:"https://s.dusays.com/",creatorId:"6",imgsrc:"https://cravatar.cn/avatar/6e1a1cc742be99a90de39a0096516fac"},
    {host:"https://s.dusays.com/",creatorId:"7",imgsrc:"https://cravatar.cn/avatar/e53fa73039fa60c5862480ae2192d215"},
    {host:"https://s.dusays.com/",creatorId:"8",imgsrc:"https://bu.dusays.com/2023/03/01/63ff34ec52ff1.jpg"},
    {host:"https://s.dusays.com/",creatorId:"9",imgsrc:"https://cravatar.cn/avatar/c1b204bab687a23c8b6d7c8de11c7c59"},
    {host:"https://s.dusays.com/",creatorId:"10",imgsrc:"https://cravatar.cn/avatar/ba2379bacf88f17ea461137906bd127d"},
    {host:"https://s.dusays.com/",creatorId:"11",imgsrc:"https://cravatar.cn/avatar/565ada82edc2f01e7cf2bd95b31f19fd"},
    {host:"https://s.dusays.com/",creatorId:"12",imgsrc:"https://cravatar.cn/avatar/b633193c913ae39a350311efd950ad83"},
    {host:"https://s.dusays.com/",creatorId:"13",imgsrc:"https://cravatar.cn/avatar/3a78942c4ddcda86242f20abdacee082"},
    {host:"https://s.dusays.com/",creatorId:"14",imgsrc:"https://bu.dusays.com/2023/03/03/6401d82b7ecc9.png"},
    {host:"https://s.dusays.com/",creatorId:"15",imgsrc:"https://cravatar.cn/avatar/1be842e0e85b11a35b697506f06e81f5"},
    {host:"https://s.dusays.com/",creatorId:"16",imgsrc:"https://cravatar.cn/avatar/03ce846eef46a1b21c1bc5a4f03c2de1"},
    {host:"https://s.dusays.com/",creatorId:"17",imgsrc:"https://cravatar.cn/avatar/49ef34286a337f7f152c5e61013c0e69"},
    {host:"https://s.dusays.com/",creatorId:"18",imgsrc:"https://cravatar.cn/avatar/23db27f22d754c4fed9e1cb60a794d81"},
    {host:"https://s.dusays.com/",creatorId:"19",imgsrc:"https://bu.dusays.com/2023/03/08/640864d11ccaf.png"},
    {host:"https://s.dusays.com/",creatorId:"20",imgsrc:"https://cravatar.cn/avatar/d5165cf04fe36d73bc24567a2332f9db"},
    {host:"https://s.dusays.com/",creatorId:"21",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3a886d5.png"},
    {host:"https://s.dusays.com/",creatorId:"22",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3a84ebb.png"},
    {host:"https://s.dusays.com/",creatorId:"23",imgsrc:"https://cravatar.cn/avatar/04bfc914bd50b42eb507bf66aad0cc31"},
    {host:"https://s.dusays.com/",creatorId:"24",imgsrc:"https://cravatar.cn/avatar/e011329178b200bcb5d94f0d0ff7544a"},
    {host:"https://s.dusays.com/",creatorId:"25",imgsrc:"https://cravatar.cn/avatar/c1b204bab687a23c8b6d7c8de11c7c59"},
    {host:"https://s.dusays.com/",creatorId:"26",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3a84114.png"},
    {host:"https://s.dusays.com/",creatorId:"27",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3a8a6d2.png"},
    {host:"https://s.dusays.com/",creatorId:"28",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3a93fae.png"},
    {host:"https://s.dusays.com/",creatorId:"29",imgsrc:"https://cravatar.cn/avatar/c21871045e26ba29b5f8263bcc5921cb"},
    {host:"https://s.dusays.com/",creatorId:"30",imgsrc:"https://static.wndbac.cn/avatar.jpg"},
    {host:"https://s.dusays.com/",creatorId:"31",imgsrc:"https://pic.imgdb.cn/item/63e8ebf64757feff33827ab7.jpg"},
    {host:"https://s.dusays.com/",creatorId:"32",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3b6539b.png"},
    {host:"https://s.dusays.com/",creatorId:"33",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3b8c6b5.png"},
    {host:"https://s.dusays.com/",creatorId:"34",imgsrc:"https://bu.dusays.com/2023/03/10/640b2d3bbaa65.png"}
  ]
var bbDom=document.querySelector('#bbs');var load='<div id="load" onclick="nextFetch()" ><button class="load-btn button-load">加载更多</button></div>'
var loading='<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
var bbsDatas=[],bbsData={},nextDatas=[],nextData={},limit=2
var page=1,offset=0,nextLength=0,nextDom='',bbUrlNow='',imgsrcNow='',hostNow='',creIdNow=''
bbDom.innerHTML=loading
allUrls()
function allUrls(){var myHtml=''
for(var i=0;i<urls.length;i++){myHtml+='<div class="bbs-urls " onclick="urlsNow(this)" data-host="'+urls[i].host+'" data-creatorId="'+urls[i].creatorId+'" data-imgsrc="'+urls[i].imgsrc+'" data-index="'+i+'"><img src="'+urls[i].imgsrc+'" alt=""></div>'}
myHtml+='<div class="bbs-urls urls-button" onclick="urlsNow(this)" data-type="random"><svg t="1665928089691" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2562" width="32" height="32"><path d="M913.2 672l98.8 57.1c5.3 3.1 5.3 10.8 0 13.9l-43.4 25L710.4 924c-2.7 1.5-6-0.4-6-3.5V772c0-2.2-1.8-4-4-4H544c-70.4 0-134.4-28.8-180.8-75.2-11.1-11.1-21.2-23.2-30.1-36.1-6.4-9.2-20-9.1-26.4 0.1C260.5 723.9 183.1 768 96 768h-48c-26.5 0-48-21.5-48-48s21.5-48 48-48h48c42.5 0 82.6-16.7 112.9-47.1 30.4-30.4 47.1-70.5 47.1-112.9s-16.7-82.6-47.1-112.9C178.6 368.7 138.4 352 96 352h-48c-26.5 0-48-21.5-48-48s21.5-48 48-48h48c70.4 0 134.4 28.8 180.8 75.2 11.1 11.1 21.2 23.2 30.1 36.1 6.4 9.2 20 9.1 26.4-0.1 46.3-67 123.6-111.1 210.8-111.1H700.4c2.2 0 4-1.8 4-4V103.4c0-3.1 3.3-5 6-3.5l258.2 156 43.4 25.1c5.3 3.1 5.3 10.8 0 13.9L913.2 352 710.4 476c-2.7 1.5-6-0.4-6-3.5V356c0-2.2-1.8-4-4-4H544c-42.5 0-82.6 16.7-112.9 47.1-30.4 30.4-47.1 70.5-47.1 112.9 0 42.5 16.7 82.6 47.1 112.9C461.4 655.3 501.5 672 544 672H700.4c2.2 0 4-1.8 4-4V551.4c0-3.1 3.3-5 6-3.5L913.2 672z" p-id="2563" fill="#f5f5f5"></path></svg></div>'
myHtml+='<div class="bbs-urls urls-button"><a href="https://dusays.com/says/"><svg t="1665929410343" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6308" width="32" height="32"><path d="M906.212134 565.732986 565.732986 565.732986 565.732986 906.212134C565.732986 926.013685 541.666486 959.972 511.97312 959.972 482.297674 959.972 458.213254 926.013685 458.213254 906.212134L458.213254 565.732986 117.734106 565.732986C97.950475 565.732986 63.97424 541.666486 63.97424 511.97312 63.97424 482.279754 97.950475 458.213254 117.734106 458.213254L458.213254 458.213254 458.213254 117.734106C458.213254 97.950475 482.297674 63.97424 511.97312 63.97424 541.666486 63.97424 565.732986 97.950475 565.732986 117.734106L565.732986 458.213254 906.212134 458.213254C925.995765 458.213254 959.972 482.279754 959.972 511.97312 959.972 541.666486 925.995765 565.732986 906.212134 565.732986Z" p-id="6309" fill="#f5f5f5"></path></svg></a></div>'
myHtml='<div id="bbs-urls">'+myHtml+'</div>'
bbDom.insertAdjacentHTML('beforebegin',myHtml);}
function nextFetch(){document.querySelector("button.button-load").textContent='加载中……';updateHTMl(nextDatas)
if(nextLength<10){document.querySelector("button.button-load").remove()
return}
getNextList()};function urlsNow(e){var domUrls=document.querySelectorAll('#bbs-urls .bbs-urls')
if(e.classList.contains('url-now')){domUrls[e.getAttribute("data-index")].classList.remove("url-now")
fetchBBser()}else{domUrls.forEach(function(value,index){domUrls[index].classList.remove("url-now")})
var btn=document.querySelector('button.button-load')
if(btn){btn.remove()}
page=1,offset=0
bbDom.innerHTML=loading
var type=e.getAttribute("data-type")
if(type=='random'){var num=Math.round(Math.random()*(urls.length-1))
hostNow=urls[num].host
creIdNow=urls[num].creatorId
imgsrcNow=urls[num].imgsrc
domUrls[num].classList.add("url-now")}else{domUrls[e.getAttribute("data-index")].classList.add("url-now")
hostNow=e.getAttribute("data-host")
creIdNow=e.getAttribute("data-creatorId")
imgsrcNow=e.getAttribute("data-imgsrc")}
bbUrlNow=hostNow+"api/memo?creatorId="+creIdNow+"&rowStatus=NORMAL&limit=10"
fetch(bbUrlNow).then(res=>res.json()).then(resdata=>{bbDom.innerHTML=''
bbsDatas.length=0
for(var j=0;j<resdata.data.length;j++){var resValue=resdata.data[j]
bbsData={updatedTs:resValue.updatedTs,creatorId:resValue.creatorId,creator:resValue.creatorName||resValue.creator.nickname||resValue.creator.name,imgsrc:imgsrcNow,content:resValue.content,resourceList:resValue.resourceList,url:hostNow}
bbsDatas.push(bbsData)}
updateHTMl(bbsDatas)
bbDom.insertAdjacentHTML('afterend',load);var nowLength=bbsData.length
if(nowLength<10){document.querySelector("button.button-load").remove()
return}
page++
offset=10*(page-1)
getNextList()});}}
function getNextList(){var bbUrl=bbUrlNow+"&offset="+offset;fetch(bbUrl).then(res=>res.json()).then(resdata=>{nextDom=resdata.data
nextLength=nextDom.length
page++
offset=10*(page-1)
if(nextLength<1){document.querySelector("button.button-load").remove()
return}
nextDatas.length=0
for(var j=0;j<nextDom.length;j++){var resValue=nextDom[j]
nextData={updatedTs:resValue.updatedTs,creatorId:resValue.creatorId,creator:resValue.creatorName||resValue.creator.nickname||resValue.creator.name,imgsrc:imgsrcNow,content:resValue.content,resourceList:resValue.resourceList,url:hostNow}
nextDatas.push(nextData)}})}
const withTimeout=(millis,promise)=>{const timeout=new Promise((resolve,reject)=>setTimeout(()=>reject(`Timed out after ms.`),millis));return Promise.race([promise,timeout]);};const fetchBBser=async()=>{const results=await Promise.allSettled(urls.map(url=>withTimeout(2000,fetch(url.host+"api/memo?creatorId="+url.creatorId+"&rowStatus=NORMAL&limit="+limit).then(response=>response.json()).then(resdata=>resdata.data)))).then(results=>{bbDom.innerHTML=''
for(var i=0;i<results.length;i++){var status=results[i].status
if(status=="fulfilled"){var resultsRes=results[i].value
for(var j=0;j<resultsRes.length;j++){var resValue=resultsRes[j]
bbsData={updatedTs:resValue.updatedTs,creatorId:resValue.creatorId,creator:resValue.creatorName||resValue.creator.nickname||resValue.creator.name,imgsrc:urls[i].imgsrc,content:resValue.content,resourceList:resValue.resourceList,url:urls[i].host}
bbsDatas.push(bbsData)}}}
bbsDatas.sort(compare("updatedTs"));updateHTMl(bbsDatas)})}
fetchBBser()
function compare(p){return function(m,n){var a=m[p];var b=n[p];return b-a;}}
function uniqueFunc(arr){const res=new Map();return arr.filter((item)=>!res.has(item.creator)&&res.set(item.creator,1));}
function updateHTMl(data){var result="",resultAll="";const TAG_REG=/#([^\s#]+?) /g,BILIBILI_REG=/<a.*?href="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?".*?>.*<\/a>/g,NETEASE_MUSIC_REG=/<a.*?href="https:\/\/music\.163\.com\/.*id=([0-9]+)".*?>.*<\/a>/g,QQMUSIC_REG=/<a.*?href="https\:\/\/y\.qq\.com\/.*(\/[0-9a-zA-Z]+)(\.html)?".*?>.*?<\/a>/g,QQVIDEO_REG=/<a.*?href="https:\/\/v\.qq\.com\/.*\/([a-z|A-Z|0-9]+)\.html".*?>.*<\/a>/g,YOUKU_REG=/<a.*?href="https:\/\/v\.youku\.com\/.*\/id_([a-z|A-Z|0-9|==]+)\.html".*?>.*<\/a>/g,YOUTUBE_REG=/<a.*?href="https:\/\/www\.youtube\.com\/watch\?v\=([a-z|A-Z|0-9]{11})\".*?>.*<\/a>/g;marked.setOptions({breaks:true,smartypants:true,langPrefix:'language-'});for(var i=0;i<data.length;i++){var memos=data[i].url
var bbContREG=data[i].content.replace(TAG_REG,"<span class='tag-span'>#$1</span> ")
bbContREG=marked.parse(bbContREG).replace(BILIBILI_REG,"<div class='video-wrapper'><iframe src='//player.bilibili.com/player.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe></div>").replace(NETEASE_MUSIC_REG,"<meting-js auto='https://music.163.com/#/song?id=$1'></meting-js>").replace(QQMUSIC_REG,"<meting-js auto='https://y.qq.com/n/yqq/song$1.html'></meting-js>").replace(QQVIDEO_REG,"<div class='video-wrapper'><iframe src='//v.qq.com/iframe/player.html?vid=$1' allowFullScreen='true' frameborder='no'></iframe></div>").replace(YOUKU_REG,"<div class='video-wrapper'><iframe src='https://player.youku.com/embed/$1' frameborder=0 'allowfullscreen'></iframe></div>").replace(YOUTUBE_REG,"<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>")
if(data[i].resourceList&&data[i].resourceList.length>0){var resourceList=data[i].resourceList;var imgUrl='',resUrl='',resImgLength=0;for(var j=0;j<resourceList.length;j++){var restype=resourceList[j].type.slice(0,5);var resexlink=resourceList[j].externalLink
var resLink='',fileId=''
if(resexlink){resLink=resexlink}else{fileId=resourceList[j].publicId||resourceList[j].filename
resLink=memos+'o/r/'+resourceList[j].id+'/'+fileId}
if(restype=='image'){imgUrl+='<figure class="gallery-thumbnail"><img class="img thumbnail-image" src="'+resLink+'"/></figure>'
resImgLength=resImgLength+1}
if(restype!=='image'){resUrl+='<a target="_blank" rel="noreferrer" href="'+resLink+'">'+resourceList[j].filename+'</a>'}}
if(imgUrl){var resImgGrid=""
if(resImgLength!==1){var resImgGrid="grid grid-"+resImgLength}
bbContREG+='<div class="resimg '+resImgGrid+'">'+imgUrl+'</div></div>'}
if(resUrl){bbContREG+='<div class="resour">'+resUrl+'</div>'}}
result+='<li class=""><div class="bbs-avatar"><img src="'+data[i].imgsrc+'" alt=""><a href="'+data[i].url+'u/'+data[i].creatorId+'" target="_blank" rel="noopener noreferrer" class="bbs-creator">'+data[i].creator+'</a><span class="bbs-dot">·</span><span class="bbs-date">'+new Date(data[i].updatedTs*1000).toLocaleString()+'</span></div><div class="bbs-content"><div class="bbs-text">'+bbContREG+'</div></div></li>'}
var bbBefore="<section class='bbs-timeline'><ul class='list'>"
var bbAfter="</ul></section>"
resultAll=bbBefore+result+bbAfter
bbDom.insertAdjacentHTML('beforeend',resultAll);var btn=document.querySelector('button.button-load')
if(btn){btn.textContent='加载更多';}
window.ViewImage&&ViewImage.init('.bbs-content img')
window.Lately&&Lately.init({target:'.bbs-date'});}