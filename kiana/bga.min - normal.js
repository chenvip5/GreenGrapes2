for(function(a,b){function c(a){a=a||{},this.a=this.type=null,this.d="/usr/themes/GreenGrapes2/kiana/src/",this.A={kiana:{s:{stand:{h:0,src:this.d+"img/kiana-1.png"},move:{h:0,src:this.d+"img/kiana-2.png"},hover:{h:1100,src:this.d+"img/kiana-3.gif"},click:{h:0,src:this.d+"img/kiana-4.png"}},j:{click:"快看快看，我抽到了什么~;去死去死去死去死！;主人，人家钱包都空了;变态！;Kiana，变身！;嗯，miHoYo什么的，最讨厌了~;千万别小看我哟~;要加油哦！;我就知道主人最疼人家啦~;锵锵~;烦死啦，走开走开啦！".split(";"),drag:["呀~~"]},e:{},random:[]}},this.r=this.p=this.v=this.m=null,this.f=0,this.i=1,this.bound=this.t=!1,this.k={mobile:{mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},pc:{mousedown:"mousedown",mousemove:"mousemove",mouseup:"mouseup"}},this.u=a.u||!1,this.w=a.w||!0,this.B=a.B||!0,this.g="pc",/AppleWebKit.*Mobile.*/i.test(navigator.userAgent)&&(this.g="mobile"),b('<style type="text/css">.bhxy-click{transform-origin: 50% 100%;animation: bhxy-click 0.5s linear;-webkit-transform-origin: 50% 100%;-webkit-animation: bhxy-click 0.5s linear;}@keyframes bhxy-click{0%{transform:scale(1,1);}10%{transform:scale(1.1,0.95);}30%{transform:scale(1,1);}}@-webkit-keyframes bhxy-click{0%{-webkit-transform:scale(1,1);}10%{-webkit-transform:scale(1.1,0.9);}30%{-webkit-transform:scale(1,1);}}@media screen and (max-width: 768px)/*设置浏览器宽度小于多少数值隐藏挂件*/ {.bhxykiana{display: none}}</style>').appendTo("head")}c.prototype={constructor:c,I:function(c,d){var f,e=this;return c&&this.A[c]?(this.a={b:b("<div class='bhxykiana'>").css({position:"fixed",width:115,height:170,bottom:10,right:70,cursor:"pointer",zIndex:10050}),C:b("<img />").css({display:"block",width:"100%",height:"100%"}),c:null,e:null},void 0!==d&&this.a.b.css(d),this.a.b.append(this.a.C).appendTo("body"),this.a.b.on("click",function(){"undefined"!=typeof _czc&&_czc.push(["_trackEvent","hxzj_ads_click","click",e.type]),e.f<=e.i&&(e.stop(),e.change("click"),e.j("click"),e.start(3e3)),e.f=0}),f=this.a.b,this.a.b.on(this.k[this.g].mousedown+".bhxy",function(c){c.preventDefault();var d=e.n(c).x-b(this).offset().left,g=e.n(c).y-b(this).offset().top;b(document).on(e.k[e.g].mousemove+".bhxy",function(c){e.f>e.i&&(e.change("move"),e.f==e.i+1&&e.j("drag","drag")),e.f++,c.preventDefault();var h=e.n(c).G-d;c=e.n(c).H-g,c>=b(a).height()-f.height()-5&&e.bound?c=b(a).height()-f.height()-5:0>=c&&e.bound&&(c=0),h>=b(a).width()-f.width()-5&&e.bound?h=b(a).width()-f.width()-5:0>=h&&e.bound&&(h=0),f.css({right:"auto",bottom:"auto",left:h,top:c})}),b(document).on(e.k[e.g].mouseup+".bhxy",function(){e.f>e.i&&(e.a.b.removeClass("bhxy-click"),setTimeout(function(){e.a.b.addClass("bhxy-click")},0),e.l(),e.o(!1)),b(document).off(e.k[e.g].mousemove+".bhxy"),b(document).off(e.k[e.g].mouseup+".bhxy")})}),"pc"==this.g&&(this.a.b.on("mouseenter.bhxy",function(){e.t=!0,e.f<=e.i&&"click"!=e.m&&e.change("hover"),e.q.show()}),this.a.b.on("mouseleave.bhxy",function(){e.t=!1,e.f<=e.i&&"click"!=e.m&&e.change("stand"),e.q.hide()})),this.B&&(this.q=b("<div>").addClass("close-btn-wrp").css({position:"absolute",top:-10,right:0,width:"100%",height:20}).hide().appendTo(this.a.b),b("<div>").addClass("close-btn").text("×").css({position:"absolute",top:0,right:0,width:18,height:18,lineHeight:"15px",fontSize:20,textAlign:"center",cursor:"pointer",backgroundColor:"#ddd",borderRadius:"4px"}).appendTo(this.q).on("click",function(a){a.stopPropagation(),e.disable()})),this.F(c),this.start(),this.a):void 0},start:function(a){this.u||a?this.o(a):this.o(!1),this.u&&this.random()},stop:function(){clearTimeout(this.p),clearTimeout(this.v)},o:function(a){var b=this;clearTimeout(this.p),!1===a?a=0:0!=a&&(a=a||3e3),this.p=setTimeout(function(){b.t?b.change("hover"):b.change("stand")},a)},random:function(){var a=this,b=1e3*Math.round(5*Math.random()+5);clearTimeout(this.v),this.v=setTimeout(function(){clearTimeout(a.p);var b=a.a.c.random;b.length&&(b=b[Math.round(Math.random()*(b.length-1))],a.change(b),a.o(3e3),a.random())},b)},change:function(a){this.a.c.s[a]&&(this.m=a,this.a.C.attr("src",this.a.c.s[a].src))},F:function(a){this.stop(),this.type=a,this.a.c=this.A[a||"22"],this.change("stand"),this.start()},j:function(a,c){var g,d=this,e=this.a.c.j[a]||a,f=a;clearTimeout(this.r),this.l(0),b.isArray(e)&&(f=Math.floor(Math.random()*e.length),e=e[f]),g=b("<div>").html(e).attr({style:"transition:0.3s",dialog:"true"}).css({position:"absolute",top:-20,left:-100,visibility:"hidden",opacity:0,backgroundColor:"#213C7F",color:"#fff",padding:"5px 10px",fontSize:"13px",width:130,wordWrap:"break-word",zIndex:10050,borderRadius:4}).appendTo(this.a.b),this.w&&this.J(a,c||f),setTimeout(function(){g.css({visibility:"visible",opacity:.75}),d.r=setTimeout(function(){d.l()},2e3)},0)},J:function(a,c){var f,e,g,d=this;if(this.D&&this.D[0].pause(),this.a.c.e[a]||(this.a.c.e[a]={}),e="number"==typeof c?c+1:c,this.a.c.e[a]["v-"+e])f=this.a.c.e[a]["v-"+e][0],f.currentTime=0,f.play();else{if(g=b("<audio>").appendTo(this.a.b).hide(),f=g[0],!f||!f.play||!f.canPlayType("audio/mpeg"))return this.w=!1,g.remove(),void 0;f.addEventListener("ended",function(){"move"!=d.m&&d.start(),d.l()}),g.attr("src",this.d+"voice/"+this.type+"_"+e+".mp3"),f.volume=.2,f.play(),this.a.c.e[a]["v-"+e]=g}this.stop(),this.D=this.a.c.e[a]["v-"+e]},l:function(a){clearTimeout(this.r),this.a.b.find("[dialog]").stop(!0,!0).fadeOut("undefined"==typeof a?400:a,function(){b(this).remove()})},n:function(a){a=a.originalEvent;var b=[];return b.y="undefined"!=typeof a.pageY&&(a.pageY||a.pageX)?a.pageY:a.touches[0].pageY,b.x="undefined"!=typeof a.pageX&&(a.pageY||a.pageX)?a.pageX:a.touches[0].pageX,b.H="undefined"!=typeof a.clientY&&(a.clientY||a.clientX)?a.clientY:a.touches[0].clientY,b.G="undefined"!=typeof a.clientX&&(a.clientY||a.clientX)?a.clientX:a.touches[0].clientX,b},disable:function(){this.a.b.hide()}},b(function(){if("undefined"==typeof a.K){var b=a.bhxyG=new c;b.setModel=b.F,b.I("kiana")}})}(window,jQuery),preloadList="/usr/themes/GreenGrapes2/kiana/src/img/kiana-1.png /usr/themes/GreenGrapes2/kiana/src/img/kiana-2.png /usr/themes/GreenGrapes2/kiana/src/img/kiana-3.gif /usr/themes/GreenGrapes2/kiana/src/img/kiana-4.png".split(" "),i=0;i<preloadList.length;i++)img=new Image,img.src=preloadList[i];for(preloadListaud="/usr/themes/GreenGrapes2/kiana/src/voice/kiana_1.mp3 /usr/themes/GreenGrapes2/kiana/src/voice/kiana_2.mp3 /usr/themes/GreenGrapes2/kiana/src/voice/kiana_3.mp3 /usr/themes/GreenGrapes2/kiana/src/voice/kiana_4.mp3 /usr/themes/GreenGrapes2/kiana/src/voice/kiana_5.mp3 /usr/themes/GreenGrapes2/kiana/src/voice/kiana_6.mp3 /usr/themes/GreenGrapes2/kiana/src/voice/kiana_7.mp3 /usr/themes/GreenGrapes2/kiana/src/voice/kiana_8.mp3 /usr/themes/GreenGrapes2/kiana/src/voice/kiana_9.mp3 /usr/themes/GreenGrapes2/kiana/src/voice/kiana_10.mp3 /usr/themes/GreenGrapes2/kiana/src/voice/kiana_11.mp3 /usr/themes/GreenGrapes2/kiana/src/voice/kiana_drag.mp3".split(" "),i=0;i<preloadListaud.length;i++)aud=new Audio,aud.src=preloadListaud[i];