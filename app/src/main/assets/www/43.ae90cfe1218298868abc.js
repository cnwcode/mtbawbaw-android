(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{irED:function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),e=t("Enhb"),u=t("/nUa"),i=t("ZZ/e"),r=t("lFsw"),a=function(){function n(n,l,t,o,e){this.modalController=n,this.document=l,this.router=t,this.shared=o,this.sanitizer=e,this.pdfSrc="",this.currentColor="light",this.theme=this.router.getCurrentNavigation().extras.state.theme}return n.prototype.ngOnInit=function(){},n.prototype.ionViewDidEnter=function(){var n=this;navigator.onLine?this.shared.ServiceCallVillage.ServiceCallRequestVillage().then(function(l){n.VillageMap=l,n.data=n.VillageMap.content.posts[0],"winter"==n.theme?(n.winterMap=n.data.wmpdf_files[0],console.log(n.winterMap)):(n.winterMap=n.data.smpdf_files[0],console.log(n.winterMap))},function(n){}):this.shared.displayNetworkUpdate("No Internet Connection")},n.prototype.onLoad=function(){},n.prototype.openPreview=function(){this.modalController.create({component:r.a,componentProps:{img:this.winterMap}}).then(function(n){n.present()})},n}(),b=function(){return function(){}}(),c=t("pMnS"),p=t("oBZk"),s=t("t/Na"),h=t("ZYCi"),f=t("ZYjt"),d=o.nb({encapsulation:0,styles:[[".villageMap[_ngcontent-%COMP%]{height:100%;-o-object-fit:contain;object-fit:contain}"]],data:{}});function m(n){return o.Fb(0,[(n()(),o.pb(0,0,null,null,11,"ion-header",[],null,null,null,p.Y,p.q)),o.ob(1,49152,null,0,i.C,[o.h,o.k,o.z],null,null),(n()(),o.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,p.pb,p.H)),o.ob(3,49152,null,0,i.Db,[o.h,o.k,o.z],{color:[0,"color"]},null),(n()(),o.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,p.M,p.e)),o.ob(5,49152,null,0,i.m,[o.h,o.k,o.z],null,null),(n()(),o.pb(6,0,null,0,2,"ion-back-button",[["defaulthref",""]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.zb(n,8).onClick(t)&&e),e},p.K,p.c)),o.ob(7,49152,null,0,i.h,[o.h,o.k,o.z],null,null),o.ob(8,16384,null,0,i.i,[[2,i.jb],i.Jb],null,null),(n()(),o.pb(9,0,null,0,2,"ion-title",[],null,null,null,p.ob,p.G)),o.ob(10,49152,null,0,i.Bb,[o.h,o.k,o.z],null,null),(n()(),o.Eb(-1,0,["Village Map"])),(n()(),o.pb(12,0,null,null,2,"ion-content",[],null,null,null,p.S,p.k)),o.ob(13,49152,null,0,i.v,[o.h,o.k,o.z],null,null),(n()(),o.pb(14,0,null,0,0,"iframe",[["allowfullscreen",""],["frameborder","0"],["mozallowfullscreen",""],["webkitallowfullscreen",""]],[[8,"src",5]],null,null,null,null))],function(n,l){n(l,3,0,l.component.currentColor)},function(n,l){var t=l.component;n(l,14,0,t.sanitizer.bypassSecurityTrustResourceUrl(t.winterMap))})}function g(n){return o.Fb(0,[(n()(),o.pb(0,0,null,null,2,"app-village-map",[],null,null,null,m,d)),o.Bb(512,null,e.a,e.a,[i.a,s.c,i.Ob,i.Gb]),o.ob(2,114688,null,0,a,[i.Ib,u.a,h.m,e.a,f.b],null,null)],function(n,l){n(l,2,0)},null)}var w=o.lb("app-village-map",a,g,{},{},[]),k=t("Ip0R"),M=t("gIcY");t.d(l,"VillageMapPageModuleNgFactory",function(){return v});var v=o.mb(b,[],function(n){return o.wb([o.xb(512,o.j,o.bb,[[8,[c.a,w]],[3,o.j],o.x]),o.xb(4608,k.l,k.k,[o.u,[2,k.r]]),o.xb(4608,M.m,M.m,[]),o.xb(4608,i.b,i.b,[o.z,o.g]),o.xb(4608,i.Ib,i.Ib,[i.b,o.j,o.q]),o.xb(4608,i.Mb,i.Mb,[i.b,o.j,o.q]),o.xb(1073742336,k.b,k.b,[]),o.xb(1073742336,M.k,M.k,[]),o.xb(1073742336,M.d,M.d,[]),o.xb(1073742336,i.Fb,i.Fb,[]),o.xb(1073742336,h.o,h.o,[[2,h.u],[2,h.m]]),o.xb(1073742336,b,b,[]),o.xb(1024,h.k,function(){return[[{path:"",component:a}]]},[])])})}}]);