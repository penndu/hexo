---
layout: page
top_meta: false
bottom_meta: false
sidebar: []
comments: false
title: 说说广场
---

<div id="bbs"></div>
<script type="text/javascript" src="https://jsd.onmicrosoft.cn/npm/marked@4.3.0/marked.min.js"></script>
<script type="text/javascript" src="https://jsd.onmicrosoft.cn/gh/Tokinx/ViewImage/view-image.min.js"></script>
<script type="text/javascript" src="https://jsd.onmicrosoft.cn/gh/Tokinx/Lately/lately.min.js"></script>
<script>
if (typeof Lately === 'undefined') {
  const script = document.createElement('script');
  script.src = 'https://jsd.onmicrosoft.cn/gh/Tokinx/Lately/lately.min.js';
  script.onload = () => {
    Lately.init({ target: '.bbs-date' });
  };
  document.head.appendChild(script);
} else {
  Lately.init({ target: '.bbs-date' });
}
const urls = [
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"1",comment:'',imgsrc:"https://cdn.sep.cc/avatar/28b57baa4e8f13fe4292ccb2de267e30"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"2",comment:'',imgsrc:"https://cdn.sep.cc/avatar/0d0462a44b088c433b8191135979efd4"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"3",comment:'',imgsrc:"https://cdn.sep.cc/avatar/cf83c746b212c3f222b1c0a41bbf5b86"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"4",comment:'',imgsrc:"https://cdn.sep.cc/avatar/099440206041f0b1af6a386f9e8c036a"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"5",comment:'',imgsrc:"https://cdn.sep.cc/avatar/5c17cfbf21ae1d45d403b7ead8bf0415"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"6",comment:'',imgsrc:"https://cdn.sep.cc/avatar/6e1a1cc742be99a90de39a0096516fac"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"7",comment:'',imgsrc:"https://cdn.sep.cc/avatar/e53fa73039fa60c5862480ae2192d215"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"8",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c15ff151f4.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"9",comment:'',imgsrc:"https://cdn.sep.cc/avatar/c1b204bab687a23c8b6d7c8de11c7c59"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"10",comment:'',imgsrc:"https://cdn.sep.cc/avatar/ba2379bacf88f17ea461137906bd127d"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"11",comment:'',imgsrc:"https://cdn.sep.cc/avatar/565ada82edc2f01e7cf2bd95b31f19fd"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"12",comment:'',imgsrc:"https://cdn.sep.cc/avatar/b633193c913ae39a350311efd950ad83"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"13",comment:'',imgsrc:"https://cdn.sep.cc/avatar/3a78942c4ddcda86242f20abdacee082"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"14",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c1669dc459.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"15",comment:'',imgsrc:"https://cdn.sep.cc/avatar/1be842e0e85b11a35b697506f06e81f5"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"16",comment:'',imgsrc:"https://cdn.sep.cc/avatar/03ce846eef46a1b21c1bc5a4f03c2de1"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"17",comment:'',imgsrc:"https://cdn.sep.cc/avatar/49ef34286a337f7f152c5e61013c0e69"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"18",comment:'',imgsrc:"https://cdn.sep.cc/avatar/23db27f22d754c4fed9e1cb60a794d81"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"19",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c1604011a3.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"20",comment:'',imgsrc:"https://cdn.sep.cc/avatar/d5165cf04fe36d73bc24567a2332f9db"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"21",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c16546df85.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"22",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c1600cad29.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"23",comment:'',imgsrc:"https://cdn.sep.cc/avatar/04bfc914bd50b42eb507bf66aad0cc31"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"24",comment:'',imgsrc:"https://cdn.sep.cc/avatar/e011329178b200bcb5d94f0d0ff7544a"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"25",comment:'',imgsrc:"https://cdn.sep.cc/avatar/c1b204bab687a23c8b6d7c8de11c7c59"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"26",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c16011c3cd.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"27",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c1600b7e2c.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"28",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c1600dcc89.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"29",comment:'',imgsrc:"https://cdn.sep.cc/avatar/c21871045e26ba29b5f8263bcc5921cb"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"30",comment:'',imgsrc:"https://bu.dusays.com/2023/08/24/64e6bde872c56.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"31",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c16043faa4.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"32",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c160164a1a.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"33",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c160143d21.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"34",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c16018d320.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"35",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c1662c12a3.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"36",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c1602e26d8.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"37",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c16022adc1.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"38",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c16028f970.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"39",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c1602c02c2.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"40",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c1602efa2d.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"41",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c165c217dd.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"42",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c160245e52.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"43",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c16667e82c.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"44",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c160279d0a.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"45",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c16586c0d0.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"46",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c160337887.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"47",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c16037e4c2.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"48",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c160353f88.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"49",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c16687fa25.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"50",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c1601a8003.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"51",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c1601daa01.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"52",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c1601f3372.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"53",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c1642c983d.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"54",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c15ff281ef.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"55",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c15ff2e0ab.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"56",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c15ff1c61f.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"57",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c15ff161da.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"58",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c15ff30324.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"59",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c16009d689.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"60",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c15ff168e5.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"61",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c15ff2124f.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"62",comment:'',imgsrc:"https://cdn.sep.cc/avatar/082dcea6f62ccf45a05244ce34bf4a96"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"63",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c164fc41fd.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"64",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c16007cd4a.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"65",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c15fff2827.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"66",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c164d9937b.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"67",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c15ffde6ba.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"68",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c164556154.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"69",comment:'',imgsrc:"https://bu.dusays.com/2023/08/24/64e6bde55bc44.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"70",comment:'',imgsrc:"https://bu.dusays.com/2023/10/16/652c15ffdceb8.jpg"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"71",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e254032.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"72",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e251b5e.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"73",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e25ec8c.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"74",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e25f3cd.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"75",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e25ec8e.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"76",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e26f627.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"77",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e3aaa2e.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"78",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e3c4676.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"79",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e3eb024.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"80",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e40e800.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"81",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e42c196.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"82",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e454017.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"83",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e4f29a8.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"84",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e51e715.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"85",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e536047.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"86",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e5579ac.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"87",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e58f57d.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"88",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e5d1a88.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"89",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e65536e.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"90",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e6890c0.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"91",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e6a3a1c.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"92",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e6bee23.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"93",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e6f18e4.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"94",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e74b059.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"95",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e7abf10.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"96",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e7e3311.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"97",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e80f3b8.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"98",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e827a23.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"99",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e847f32.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"100",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e8b9862.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"101",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e912cf2.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"102",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e963f98.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"103",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e97e784.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"104",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e992a21.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"105",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e9bb9dc.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"106",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47ea26ac7.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"107",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e8b9862.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"108",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e912cf2.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"109",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e963f98.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"110",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e97e784.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"111",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e992a21.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"112",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47e9bb9dc.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"113",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47ea26ac7.png"},
  {home:"https://s.dusays.com/",host:"https://s.dusays.com/",apiV1:'v1/',creatorId:"114",comment:'',imgsrc:"https://bu.dusays.com/2024/02/27/65dd47ea26ac7.png"}
]
var bbDom = document.querySelector('#bbs');
var load = '<div id="load" onclick="nextFetch()" ><button class="load-btn button-load">加载更多</button></div>'
var loading = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
var bbsDatas = [],bbsData = {},nextDatas = [],nextData = {},limit = 2
var page = 1,offset = 0,nextLength = 0,nextDom='',bbUrlNow = '',imgsrcNow = '',hostNow = '',creIdNow = '',commentNow = '',twiEnvNow='',artEnvNow='',artSiteNow=''
bbDom.innerHTML = loading
allUrls()
function allUrls(){
  var myHtml = ''
  for(var i=0;i < urls.length;i++){
    myHtml += '<div class="bbs-urls bbs-url" onclick="urlsNow(this)" data-hostid="'+urls[i].host+"u/"+urls[i].creatorId+'" data-host="'+urls[i].host+'" data-apiV1="'+urls[i].apiV1+'" data-creatorId="'+urls[i].creatorId+'" data-imgsrc="'+urls[i].imgsrc+'" data-comment="'+urls[i].comment+'" data-home="'+urls[i].home+'" data-twienv="'+urls[i].twiEnv+'" data-artenv="'+urls[i].artEnv+'" data-artsite="'+urls[i].artSite+'" data-index="'+i+'"><img src="'+urls[i].imgsrc+'" alt=""></div>'
  }
  myHtml += '<div class="bbs-urls urls-button" onclick="urlsNow(this)" data-type="random"><svg t="1665928089691" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2562" width="32" height="32"><path d="M913.2 672l98.8 57.1c5.3 3.1 5.3 10.8 0 13.9l-43.4 25L710.4 924c-2.7 1.5-6-0.4-6-3.5V772c0-2.2-1.8-4-4-4H544c-70.4 0-134.4-28.8-180.8-75.2-11.1-11.1-21.2-23.2-30.1-36.1-6.4-9.2-20-9.1-26.4 0.1C260.5 723.9 183.1 768 96 768h-48c-26.5 0-48-21.5-48-48s21.5-48 48-48h48c42.5 0 82.6-16.7 112.9-47.1 30.4-30.4 47.1-70.5 47.1-112.9s-16.7-82.6-47.1-112.9C178.6 368.7 138.4 352 96 352h-48c-26.5 0-48-21.5-48-48s21.5-48 48-48h48c70.4 0 134.4 28.8 180.8 75.2 11.1 11.1 21.2 23.2 30.1 36.1 6.4 9.2 20 9.1 26.4-0.1 46.3-67 123.6-111.1 210.8-111.1H700.4c2.2 0 4-1.8 4-4V103.4c0-3.1 3.3-5 6-3.5l258.2 156 43.4 25.1c5.3 3.1 5.3 10.8 0 13.9L913.2 352 710.4 476c-2.7 1.5-6-0.4-6-3.5V356c0-2.2-1.8-4-4-4H544c-42.5 0-82.6 16.7-112.9 47.1-30.4 30.4-47.1 70.5-47.1 112.9 0 42.5 16.7 82.6 47.1 112.9C461.4 655.3 501.5 672 544 672H700.4c2.2 0 4-1.8 4-4V551.4c0-3.1 3.3-5 6-3.5L913.2 672z" p-id="2563" fill="#f5f5f5"></path></svg></div>'
  myHtml += '<div class="bbs-urls urls-button"><a href="https://s.dusays.com/"><svg t="1665929410343" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6308" width="32" height="32"><path d="M906.212134 565.732986 565.732986 565.732986 565.732986 906.212134C565.732986 926.013685 541.666486 959.972 511.97312 959.972 482.297674 959.972 458.213254 926.013685 458.213254 906.212134L458.213254 565.732986 117.734106 565.732986C97.950475 565.732986 63.97424 541.666486 63.97424 511.97312 63.97424 482.279754 97.950475 458.213254 117.734106 458.213254L458.213254 458.213254 458.213254 117.734106C458.213254 97.950475 482.297674 63.97424 511.97312 63.97424 541.666486 63.97424 565.732986 97.950475 565.732986 117.734106L565.732986 458.213254 906.212134 458.213254C925.995765 458.213254 959.972 482.279754 959.972 511.97312 959.972 541.666486 925.995765 565.732986 906.212134 565.732986Z" p-id="6309" fill="#f5f5f5"></path></svg></a></div>'
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
      imgsrcNow = urls[num].imgsrc
      commentNow = urls[num].comment
      twiEnvNow = urls[num].twiEnv
      artEnvNow = urls[num].artEnv
      artSiteNow = urls[num].artSite
      homeNow = urls[num].home
      apiV1Now = urls[num].apiV1
      domUrls[num].classList.add("url-now")
    }else{
      domUrls[e.getAttribute("data-index")].classList.add("url-now")
      hostNow = e.getAttribute("data-host")
      creIdNow = e.getAttribute("data-creatorId")
      imgsrcNow = e.getAttribute("data-imgsrc")
      commentNow = e.getAttribute("data-comment")
      twiEnvNow = e.getAttribute("data-twienv")
      artEnvNow = e.getAttribute("data-artenv")
      artSiteNow = e.getAttribute("data-artsite")
      homeNow = e.getAttribute("data-home")
      apiV1Now = e.getAttribute("data-apiV1")
    }
    bbUrlNow = hostNow+"api/"+apiV1Now+"memo?creatorId="+creIdNow+"&rowStatus=NORMAL&limit=10"
    fetch(bbUrlNow).then(res => res.json()).then( resdata =>{
      var arrData = resdata || ''
      if(resdata.data){
        arrData = resdata.data
      }
      bbDom.innerHTML = ''
      bbsDatas.length = 0
      for(var j=0;j < arrData.length;j++){
            var resValue = arrData[j]
            bbsData = {
              memoId: resValue.id,
              updatedTs: resValue.updatedTs,
              creatorId:resValue.creatorId,
              creator: resValue.creatorName || resValue.creator.nickname || resValue.creator.name,
              imgsrc: imgsrcNow,
              content: resValue.content,
              resourceList: resValue.resourceList,
              url:hostNow,
              twiEnv:twiEnvNow,
              artEnv:artEnvNow,
              artSite:artSiteNow,
              home:homeNow,
              comment: commentNow
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
    var arrData = resdata || ''
    if(resdata.data){
      arrData = resdata.data
    }
    nextDom = arrData
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
        creator: resValue.creatorName || resValue.creator.nickname || resValue.creator.name,
        imgsrc: imgsrcNow,
        content: resValue.content,
        resourceList: resValue.resourceList,
        url:hostNow,
        twiEnv:twiEnvNow,
        artEnv:artEnvNow,
        artSite:artSiteNow,
        comment:commentNow,
        memoId: resValue.id,
        home:homeNow,
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
    url => withTimeout(2000,
      fetch(url.host+"api/"+url.apiV1+"memo?creatorId="+url.creatorId+"&rowStatus=NORMAL&limit="+limit).then(response => response.json()).then(resdata => {
        var qsLive = ".bbs-urls.bbs-url[data-hostid='"+url.host+"u/"+url.creatorId+"']"
        document.querySelector(qsLive).classList.add("liveon");
        var arrData = resdata || ''
        if(resdata.data){
          arrData = resdata.data
        }
        return arrData
      })
    )
  )).then(results=> {
    bbDom.innerHTML = ''
    for(var i=0;i < results.length;i++){
      var status = results[i].status
      if(status == "fulfilled"){
        var resultsRes = results[i].value
        for(var j=0;j < resultsRes.length;j++){
          var resValue = resultsRes[j]
          var dateNow = new Date()
          var dateDiff = dateNow.getTime() - (resValue.updatedTs * 1000);
          var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));
          if(dayDiff < 10 ){
            bbsData = {
              memoId: resValue.id,
              updatedTs: resValue.updatedTs,
              creatorId:resValue.creatorId,
              creator: resValue.creatorName || resValue.creator.nickname || resValue.creator.name,
              imgsrc: urls[i].imgsrc,
              content: resValue.content,
              resourceList: resValue.resourceList,
              home:urls[i].home,
              url:urls[i].host,
              comment:urls[i].comment,
              twiEnv:urls[i].twiEnv || '',
              artEnv:urls[i].artEnv || '',
              artSite:urls[i].artSite || ''
            }
            bbsDatas.push(bbsData)
          }
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
  const TAG_REG = /#([^\s#]+)/;
  const IMG_REG = /\!\[(.*?)\]\((.*?)\)/g;
  BILIBILI_REG = /<a.*?href="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?".*?>.*<\/a>/g;
  NETEASE_MUSIC_REG = /<a.*?href="https:\/\/music\.163\.com\/.*id=([0-9]+)".*?>.*<\/a>/g;
  QQMUSIC_REG = /<a.*?href="https\:\/\/y\.qq\.com\/.*(\/[0-9a-zA-Z]+)(\.html)?".*?>.*?<\/a>/g;
  QQVIDEO_REG = /<a.*?href="https:\/\/v\.qq\.com\/.*\/([a-z|A-Z|0-9]+)\.html".*?>.*<\/a>/g;
  YOUKU_REG = /<a.*?href="https:\/\/v\.youku\.com\/.*\/id_([a-z|A-Z|0-9|==]+)\.html".*?>.*<\/a>/g;
  YOUTUBE_REG = /<a.*?href="https:\/\/www\.youtube\.com\/watch\?v\=([a-z|A-Z|0-9]{11})\".*?>.*<\/a>/g;
  marked.setOptions({
    breaks: true,
    smartypants: false,
    langPrefix: 'language-'
  });
  const renderer = new marked.Renderer();
  const linkRenderer = renderer.link;
  renderer.link = (href, title, text) => {
      const localLink = href.startsWith(`${location.protocol}//${location.hostname}`);
      const html = linkRenderer.call(renderer, href, title, text);
      return localLink ? html : html.replace(/^<a /, `<a target="_blank" rel="noreferrer noopener nofollow" `);
  };
  marked.use({ renderer });
  for(var i=0;i < data.length;i++){
      var memos = data[i].url
      var memoId = data[i].memoId
      var memoUrl = memos + "m/" + memoId
      var comment = data[i].comment
      var twiEnv = data[i].twiEnv
      var artEnv = data[i].artEnv
      var artSite = data[i].artSite
      var bbContREG = data[i].content
        .replace(TAG_REG, "<span class='tag-span'>#$1</span> ")
        .replace(IMG_REG, '')
      bbContREG = marked.parse(bbContREG)
        .replace(BILIBILI_REG, "<div class='video-wrapper'><iframe src='//www.bilibili.com/blackboard/html5mobileplayer.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe></div>")
        .replace(NETEASE_MUSIC_REG, "<meting-js auto='https://music.163.com/#/song?id=$1'></meting-js>")
        .replace(QQMUSIC_REG, "<meting-js auto='https://y.qq.com/n/yqq/song$1.html'></meting-js>")
        .replace(QQVIDEO_REG, "<div class='video-wrapper'><iframe src='//v.qq.com/iframe/player.html?vid=$1' allowFullScreen='true' frameborder='no'></iframe></div>")
        .replace(YOUKU_REG, "<div class='video-wrapper'><iframe src='https://player.youku.com/embed/$1' frameborder=0 'allowfullscreen'></iframe></div>")
        .replace(YOUTUBE_REG, "<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>")
      var IMG_ARR = data[i].content.match(IMG_REG) || '',IMG_ARR_Grid='';
      if(IMG_ARR){
        var IMG_ARR_Length = IMG_ARR.length,IMG_ARR_Url = '';
        if(IMG_ARR_Length !== 1){var IMG_ARR_Grid = " grid grid-"+IMG_ARR_Length}
        IMG_ARR.forEach(item => {
            let imgSrc = item.replace(/!\[.*?\]\((.*?)\)/g,'$1')
            IMG_ARR_Url += '<figure class="gallery-thumbnail"><img class="img thumbnail-image" loading="lazy" decoding="async" src="'+imgSrc+'"/></figure>'
        });
        bbContREG += '<div class="resimg'+IMG_ARR_Grid+'">'+IMG_ARR_Url+'</div>';
      }
      var tagArr = data[i].content.match(TAG_REG);
      var bbContTag = '';
      if (tagArr) {
          bbContTag = String(tagArr[0]).replace(/[#]/g, '');
      } else {
          bbContTag = '动态';
      };
      if(data[i].resourceList && data[i].resourceList.length > 0){
        var resourceList = data[i].resourceList;
        var imgUrl='',resUrl='',resImgLength = 0;
        for(var j=0;j < resourceList.length;j++){
          var restype = resourceList[j].type.slice(0,5);
          var resexlink = resourceList[j].externalLink
          var resLink = '',fileId=''
          if(resexlink){
            resLink = resexlink
          }else{
            fileId = resourceList[j].publicId || resourceList[j].filename
            resLink = memos+'o/r/'+resourceList[j].id+'/'+fileId
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
          if(resImgLength !== 1){var resImgGrid = " grid grid-"+resImgLength}
          bbContREG += '<div class="resimg'+resImgGrid+'">'+imgUrl+'</div>'
        }
        if(resUrl){
          bbContREG += '<div class="resour">'+resUrl+'</div>'
        }
      }
      var EnvNow = ''
      if(twiEnv && twiEnv != "undefined"){
        EnvNow = twiEnv.replace(/https\:\/\/.*\.(.*)\..*/,'$1')
      }
      if(artEnv && artEnv != "undefined"){
        EnvNow = artEnv.replace(/https\:\/\/.*\.(.*)\..*/,'$1')
      }
      result += '<li class="'+EnvNow+'memo-'+memoId+'"><div class="bbs-avatar"><a href="'+data[i].home+'" target="_blank" rel="noopener noreferrer"><img src="'+data[i].imgsrc+'" alt=""></a><a href="'+memoUrl+'" target="_blank" rel="noopener noreferrer" class="bbs-creator">'+data[i].creator+'</a><span class="bbs-dot">·</span><span class="bbs-date">'+new Date(data[i].updatedTs * 1000).toLocaleString()+'</span>'
      var comSVG = '<span class="bbs-coment-svg"><svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="24"><path d="M816 808H672c-4.8 0-8 1.6-11.2 4.8l-80 80c-36.8 36.8-97.6 36.8-136 0l-80-80c-3.2-3.2-6.4-4.8-11.2-4.8h-144c-70.4 0-128-57.6-128-128V232c0-70.4 57.6-128 128-128h608c70.4 0 128 57.6 128 128v448C944 750.4 886.4 808 816 808zm0-64c35.2 0 64-28.8 64-64V232c0-35.2-28.8-64-64-64H208c-35.2 0-64 28.8-64 64v448c0 35.2 28.8 64 64 64h144c20.8 0 41.6 8 56 24l80 80c12.8 12.8 32 12.8 44.8 0l80-80c14.4-14.4 35.2-24 56-24H816zM320 408c27.2 0 48 20.8 48 48v32c0 27.2-20.8 48-48 48s-48-20.8-48-48v-32c0-27.2 20.8-48 48-48zm192 0c27.2 0 48 20.8 48 48v32c0 27.2-20.8 48-48 48s-48-20.8-48-48v-32c0-27.2 20.8-48 48-48zm192 0c27.2 0 48 20.8 48 48v32c0 27.2-20.8 48-48 48s-48-20.8-48-48v-32c0-27.2 20.8-48 48-48z" /></svg></span>'
      var outSVG = '<span class="bbs-coment-svg"><svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M864 640a32 32 0 0 1 64 0v224.096A63.936 63.936 0 0 1 864.096 928H159.904A63.936 63.936 0 0 1 96 864.096V159.904C96 124.608 124.64 96 159.904 96H384a32 32 0 0 1 0 64H192.064A31.904 31.904 0 0 0 160 192.064v639.872A31.904 31.904 0 0 0 192.064 864h639.872A31.904 31.904 0 0 0 864 831.936V640zm-485.184 52.48a31.84 31.84 0 0 1-45.12-.128 31.808 31.808 0 0 1-.128-45.12L815.04 166.048l-176.128.736a31.392 31.392 0 0 1-31.584-31.744 32.32 32.32 0 0 1 31.84-32l255.232-1.056a31.36 31.36 0 0 1 31.584 31.584L924.928 388.8a32.32 32.32 0 0 1-32 31.84 31.392 31.392 0 0 1-31.712-31.584l.736-179.392L378.816 692.48z"/></svg></span>'
      if(comment == '1'){
        if(twiEnv && twiEnv != 'undefined'){
          result += '<a data-id="'+memoId+'" data-twienv="'+twiEnv+'" data-path="'+memoUrl+'" onclick="loadTwikoo(this)" onmouseenter="insertTwikoo(this)" href="javascript:void(0)" rel="noopener noreferrer">'+comSVG+'</a></div><div class="bbs-content"><div class="bbs-text">'+bbContREG+'</div><div class="item-comment twikoo-'+memoId+' d-none"><div id="'+EnvNow+'twikoo-'+memoId+'"></div></div></div></li>'
        }else if(artEnv && artEnv != 'undefined'){
          result += '<a data-id="'+memoId+'" data-artenv="'+artEnv+'" data-artsite="'+artSite+'" data-path="'+memoUrl+'" onclick="loadArtalk(this)" href="javascript:void(0)" rel="noopener noreferrer">'+comSVG+'</a></div><div class="bbs-content"><div class="bbs-text">'+bbContREG+'</div><div class="item-comment '+EnvNow+'artalk-'+memoId+' d-none"></div></div></li>'
        }else{
          result += '<a href="'+memoUrl+'" target="_blank" rel="noopener noreferrer">'+outSVG+'</a></div><div class="bbs-content"><div class="bbs-text">'+bbContREG+'</div></div></li>'
        }
      }else{
        result += '</div><div class="bbs-content"><div class="bbs-text">'+bbContREG+'</div></div></li>'
      }
  }
  var bbBefore = "<section class='bbs-timeline'><ul class='list'>"
  var bbAfter = "</ul></section>"
  resultAll = bbBefore + result + bbAfter
  bbDom.insertAdjacentHTML('beforeend', resultAll);
  var btn = document.querySelector('button.button-load')
  if(btn){
    btn.textContent= '加载更多';
  }
  window.ViewImage && ViewImage.init('.bbs-content img')
  window.Lately && Lately.init({ target: '.bbs-date' });
}
</script>
<style>
#bbs{padding: 2rem 0;}
#bbs-urls{margin-top: 2rem;}
.bbs-urls{display:inline-block;background: #4a4b50;border-radius:10%;margin:0 .6rem 0 0;padding:4px;width:3.4rem;height:3.4rem;cursor: pointer;vertical-align: text-bottom;}
.bbs-urls img{border-radius:50%;width:100%;height:100%;}
.bbs-urls.url-now{background:#42b983;transition: 0.6s;}
.urls-button svg.icon{padding:10px;width:100%;height: 100%;}
.bbs-timeline ul {margin:0;padding: 0;}
.bbs-timeline ul li{list-style-type:none;position:relative;}
.bbs-timeline{max-width:1200px;margin:0 auto;}
.bbs-avatar{position: relative;}
.bbs-avatar img{width:24px;height:24px;border-radius:50%;margin-right:1rem;}
div.bbs-avatar > img {
  display: inline-block;
  margin: 0 10px 0 0;
}
.bbs-creator,.bbs-date,.bbs-dot{position:relative;top:-5px;}
.bbs-dot{font-weight: 800;margin:0 .5rem;}
.bbs-content {margin-bottom: 3rem;}
.bbs-text,.resour{background: var(--color-block);border-radius: 8px;font-size: 1em;padding:10px 14px;position: relative;}
.resour{font-size: 0.9rem;margin-top: 2px;padding: 5px 14px;}
.bbs-text{overflow:hidden;max-height:90vh;}
.bbs-text blockquote{font-family: KaiTi,STKaiti,STFangsong;margin:0 0 0 1rem;padding:.25rem 2rem;position: relative;border-left:0 none;}
.bbs-text blockquote::before{line-height: 2rem;content: "“";font-family: Georgia, serif;font-size: 28px;font-weight: bold;position: absolute;left: 10px;top:5px;}
.bbs-text p{margin:0;}
.bbs-text pre p{display: inline-block;}
.bbs-text pre p:empty{display: none;}
.tag-span{color: #42b983;}
#load button.load-btn{width:100%;padding:8px 0;background: var(--color-block);}
#bb-footer{letter-spacing:8px;margin:5rem auto 1rem;text-align:center;}
.dark .bbs-text,.dark .resour{background:#4a4b50;}
.dark .bbs-text p{color:#fafafa;}
.loader {position: relative;margin:3rem auto;width: 100px;}
.loader::before {content: '';display: block;padding-top: 100%;}
.circular {animation: rotate 2s linear infinite;height: 100%;transform-origin: center center;width: 100%;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;}
.path {stroke-dasharray: 1, 200;stroke-dashoffset: 0;animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;stroke-linecap: round;}
@keyframes rotate {100% {transform: rotate(360deg);}}
@keyframes dash {
  0% {stroke-dasharray: 1, 200;stroke-dashoffset: 0;}
  50% {stroke-dasharray: 89, 200;stroke-dashoffset: -35px;}
  100% {stroke-dasharray: 89, 200;stroke-dashoffset: -124px;}
}
@keyframes color {
  100%,0% {stroke: #d62d20;}40% {stroke: #0057e7;}66% {stroke: #008744;}80%,90% {stroke: #ffa700;}
}
.bbs-content p > img{cursor:pointer;border:1px solid #3b3d42;}
.bbs-content p:has(img.img){display: inline-block;}
.bbs-text p > img {display: block;}
.bbs-text p > img:first-child:nth-last-child(n+2),.bbs-text p > img:first-child:nth-last-child(n+2) ~ img {display: inline-block;}
.bbs-content p > img.square{height:180px;width:180px;object-fit:cover;}
.resimg.grid{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows:auto;
  gap: 4px;
  width: calc(100%* 2 / 3);
  box-sizing: border-box;
  margin: 4px 0 0;
}
.resimg.grid-2{
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
}
.resimg.grid-4{
  grid-template-columns: repeat(2, 1fr);
  width: calc(80% * 2 / 3);
}
.resimg.grid figure.gallery-thumbnail {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
  cursor: zoom-in;
}
.resimg figure{
  text-align: left;
  max-height:50%;
}
.resimg figure img{
  max-height:50vh;
}
.resimg.grid figure, figcaption {
  margin: 0 !important;
}
.resimg.grid figure.gallery-thumbnail > img.thumbnail-image {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}
.video-wrapper{position:relative;padding-bottom:55%;width:100%;height:0}
.video-wrapper iframe{position:absolute;height:100%;width:100%;}
</style>