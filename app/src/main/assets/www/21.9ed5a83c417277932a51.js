(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"8qZ0":function(n,l,o){"use strict";o.r(l);var e=o("CcnG"),u=o("Enhb"),t=function(){function n(n){this.shared=n}return n.prototype.ngOnInit=function(){this.getPoints()},n.prototype.getPoints=function(){var n=localStorage.getItem("profile");this.data=JSON.parse(n),this.points=this.data.content.profile.points,this.userid=this.data.user_id},n.prototype.update=function(){var n=this;""==this.facebookCode||null==this.facebookCode?this.shared.displayNetworkUpdate("Redeem code cannot be blank"):navigator.onLine?this.shared.ServiceCallFacebook.ServiceCallRequestFacebookCode(this.userid,this.facebookCode).then(function(l){n.response=l,console.log(n.response),"error"==n.response.message?n.shared.displayNetworkUpdate(n.response.content):(localStorage.setItem("profile",JSON.stringify(n.response)),n.shared.displayNetworkUpdate("Successfully Redeem"),n.getPoints())},function(n){}):this.shared.displayNetworkUpdate("No Internet Connection")},n}(),i=function(){return function(){}}(),a=o("pMnS"),b=o("oBZk"),r=o("ZZ/e"),s=o("gIcY"),c=e.nb({encapsulation:0,styles:[[".MainDev[_ngcontent-%COMP%]{text-align:center;padding-top:70px}.PointsDev[_ngcontent-%COMP%]{color:#f58c29;font-size:19px}.inputDev[_ngcontent-%COMP%]{border:1px solid;border-radius:25px;height:53px;width:245px;text-align:center;margin-top:20px}.buttonvalue[_ngcontent-%COMP%]{color:#fff;background:#f58c29;height:45px;width:150px;margin-top:40px;border-radius:25px;font-size:15px;font-weight:600}"]],data:{}});function p(n){return e.Fb(0,[(n()(),e.pb(0,0,null,null,11,"ion-header",[],null,null,null,b.Y,b.q)),e.ob(1,49152,null,0,r.C,[e.h,e.k,e.z],null,null),(n()(),e.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,b.pb,b.H)),e.ob(3,49152,null,0,r.Db,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.M,b.e)),e.ob(5,49152,null,0,r.m,[e.h,e.k,e.z],null,null),(n()(),e.pb(6,0,null,0,2,"ion-back-button",[["defaulthref",""]],null,[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==e.zb(n,8).onClick(o)&&u),u},b.K,b.c)),e.ob(7,49152,null,0,r.h,[e.h,e.k,e.z],null,null),e.ob(8,16384,null,0,r.i,[[2,r.jb],r.Jb],null,null),(n()(),e.pb(9,0,null,0,2,"ion-title",[],null,null,null,b.ob,b.G)),e.ob(10,49152,null,0,r.Bb,[e.h,e.k,e.z],null,null),(n()(),e.Eb(-1,0,["Redeem Facebook Code"])),(n()(),e.pb(12,0,null,null,15,"ion-content",[],null,null,null,b.S,b.k)),e.ob(13,49152,null,0,r.v,[e.h,e.k,e.z],null,null),(n()(),e.pb(14,0,null,0,13,"div",[["class","MainDev"]],null,null,null,null,null)),(n()(),e.pb(15,0,null,null,3,"p",[["class","PointsDev"]],null,null,null,null,null)),(n()(),e.Eb(-1,null,["MtBawBaw pts: "])),(n()(),e.pb(17,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),e.Eb(18,null,["",""])),(n()(),e.pb(19,0,null,null,5,"input",[["class","inputDev"],["placeholder","Redeem code"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var u=!0,t=n.component;return"input"===l&&(u=!1!==e.zb(n,20)._handleInput(o.target.value)&&u),"blur"===l&&(u=!1!==e.zb(n,20).onTouched()&&u),"compositionstart"===l&&(u=!1!==e.zb(n,20)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e.zb(n,20)._compositionEnd(o.target.value)&&u),"ngModelChange"===l&&(u=!1!==(t.facebookCode=o)&&u),u},null,null)),e.ob(20,16384,null,0,s.c,[e.D,e.k,[2,s.a]],null,null),e.Bb(1024,null,s.e,function(n){return[n]},[s.c]),e.ob(22,671744,null,0,s.j,[[8,null],[8,null],[8,null],[6,s.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,s.f,null,[s.j]),e.ob(24,16384,null,0,s.g,[[4,s.f]],null,null),(n()(),e.pb(25,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.pb(26,0,null,null,1,"button",[["class","buttonvalue"]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.update()&&e),e},null,null)),(n()(),e.Eb(-1,null,[" Redeem Now "]))],function(n,l){var o=l.component;n(l,3,0,o.currentColor),n(l,22,0,o.facebookCode)},function(n,l){n(l,18,0,l.component.points),n(l,19,0,e.zb(l,24).ngClassUntouched,e.zb(l,24).ngClassTouched,e.zb(l,24).ngClassPristine,e.zb(l,24).ngClassDirty,e.zb(l,24).ngClassValid,e.zb(l,24).ngClassInvalid,e.zb(l,24).ngClassPending)})}function d(n){return e.Fb(0,[(n()(),e.pb(0,0,null,null,1,"app-facebook-redeem",[],null,null,null,p,c)),e.ob(1,114688,null,0,t,[u.a],null,null)],function(n,l){n(l,1,0)},null)}var g=e.lb("app-facebook-redeem",t,d,{},{},[]),h=o("Ip0R"),f=o("ZYCi");o.d(l,"FacebookRedeemPageModuleNgFactory",function(){return k});var k=e.mb(i,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[a.a,g]],[3,e.j],e.x]),e.xb(4608,h.l,h.k,[e.u,[2,h.r]]),e.xb(4608,s.m,s.m,[]),e.xb(4608,r.b,r.b,[e.z,e.g]),e.xb(4608,r.Ib,r.Ib,[r.b,e.j,e.q]),e.xb(4608,r.Mb,r.Mb,[r.b,e.j,e.q]),e.xb(1073742336,h.b,h.b,[]),e.xb(1073742336,s.k,s.k,[]),e.xb(1073742336,s.d,s.d,[]),e.xb(1073742336,r.Fb,r.Fb,[]),e.xb(1073742336,f.o,f.o,[[2,f.u],[2,f.m]]),e.xb(1073742336,i,i,[]),e.xb(1024,f.k,function(){return[[{path:"",component:t}]]},[])])})}}]);