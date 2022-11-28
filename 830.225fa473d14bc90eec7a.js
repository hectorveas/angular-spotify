"use strict";(self.webpackChunkspotify=self.webpackChunkspotify||[]).push([[830],{5830:($,g,o)=>{o.r(g),o.d(g,{TracksModule:()=>Y});var d=o(8583);function m(e,r,n,a,c,p,i){try{var l=e[p](i),s=l.value}catch(L){return void n(L)}l.done?r(s):Promise.resolve(s).then(a,c)}var t=o(639),v=o(5917),C=o(8002),h=o(9773),k=o(5304),_=o(2340),T=o(1841);let b=(()=>{class e{constructor(n){this.http=n,this.URL=_.N.api}skipById(n,a){return new Promise((c,p)=>{c(n.filter(l=>l._id!==a))})}getAllTracks$(){return this.http.get(`${this.URL}/tracks`).pipe((0,C.U)(({data:n})=>n))}getAllRandom$(){return this.http.get(`${this.URL}/tracks`).pipe((0,h.zg)(({data:n})=>this.skipById(n,2)),(0,k.K)(n=>(0,v.of)([])))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(T.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var P=o(2172),Z=o(5562);const u=function(){return{"uil-play":!0}};function x(e,r){1&e&&(t.TgZ(0,"button",7),t._UZ(1,"i",8),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngClass",t.DdM(1,u)))}function M(e,r){1&e&&(t.TgZ(0,"button",7),t._UZ(1,"i",9),t.qZA())}function O(e,r){if(1&e&&(t.TgZ(0,"div",2),t._UZ(1,"img",3),t.TgZ(2,"div",4),t._uU(3),t.qZA(),t.TgZ(4,"div",5),t.YNc(5,x,2,2,"button",6),t.YNc(6,M,2,0,"button",6),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("src",n.track.cover,t.LSH)("alt",n.track.name),t.xp6(2),t.hij(" ",n.track.name," "),t.xp6(2),t.Q6J("ngIf",!0),t.xp6(1),t.Q6J("ngIf",!1)}}function A(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(n);const c=t.oxw(2);return c.sendPlay(c.track)}),t._UZ(1,"i",8),t.qZA()}2&e&&(t.xp6(1),t.Q6J("ngClass",t.DdM(1,u)))}function I(e,r){1&e&&(t.TgZ(0,"button",7),t._UZ(1,"i",9),t.qZA())}function J(e,r){if(1&e&&(t.TgZ(0,"div",10),t._UZ(1,"img",11),t.TgZ(2,"div",4),t.TgZ(3,"div",12),t._uU(4),t.qZA(),t.TgZ(5,"div",13),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",5),t.YNc(8,A,2,2,"button",14),t.YNc(9,I,2,0,"button",6),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("customImg","https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png")("src",n.track.cover,t.LSH),t.xp6(3),t.Oqu(n.track.name),t.xp6(2),t.Oqu(n.track.name),t.xp6(2),t.Q6J("ngIf",!0),t.xp6(1),t.Q6J("ngIf",!1)}}let S=(()=>{class e{constructor(n){this.multimediaService=n,this.mode="small",this.track={_id:0,name:"",album:"",url:"",cover:""}}ngOnInit(){}sendPlay(n){this.multimediaService.trackInfo$.next(n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(P.V))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card-player"]],inputs:{mode:"mode",track:"track"},decls:2,vars:2,consts:[["class","card-player player-small",4,"ngIf"],["class","card-player player-big",4,"ngIf"],[1,"card-player","player-small"],[1,"cover",3,"src","alt"],[1,"content-player"],[1,"buttons-player"],["class","play-btn",4,"ngIf"],[1,"play-btn"],[1,"uil",3,"ngClass"],[1,"uil","uil-play"],[1,"card-player","player-big"],["appImgBroken","","alt","",1,"cover",3,"customImg","src"],[1,"title-track"],[1,"sub-title-track"],["class","play-btn",3,"click",4,"ngIf"],[1,"play-btn",3,"click"]],template:function(n,a){1&n&&(t.YNc(0,O,7,5,"div",0),t.YNc(1,J,10,6,"div",1)),2&n&&(t.Q6J("ngIf","small"===a.mode),t.xp6(1),t.Q6J("ngIf","big"===a.mode))},directives:[d.O5,d.mk,Z.d],styles:[".card-player[_ngcontent-%COMP%]{background-color:var(--color-2);height:5rem;border-radius:var(--border-radius-1);display:flex;cursor:pointer;transition:all ease var(--animation-1);justify-content:space-between}.card-player[_ngcontent-%COMP%]:hover{background-color:#4d4d4d}.card-player[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{width:5rem;height:100%;object-fit:cover;border-top-left-radius:var(--border-radius-1);border-bottom-left-radius:var(--border-radius-1)}.card-player[_ngcontent-%COMP%]   .content-player[_ngcontent-%COMP%]{font-weight:500;display:flex;align-items:center;align-content:center;padding:0 0 0 .75rem}.card-player[_ngcontent-%COMP%]   .buttons-player[_ngcontent-%COMP%]{opacity:0;width:5rem;display:flex;justify-content:center;align-content:center;align-items:center;transition:all ease var(--animation-1)}.card-player[_ngcontent-%COMP%]:hover   .buttons-player[_ngcontent-%COMP%]{opacity:1}.card-player[_ngcontent-%COMP%]   .buttons-player[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]{color:var(--color-4);border:0;font-size:1.15rem;border-radius:2rem;background-color:var(--color-1);width:45px;height:45px}.card-player.player-big[_ngcontent-%COMP%]{position:relative;flex-direction:column;height:18rem;padding:1rem}.card-player.player-big[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{width:100%;height:200px;border-radius:var(--border-radius-1)}.card-player.player-big[_ngcontent-%COMP%]   .content-player[_ngcontent-%COMP%]{padding:.5rem 0;flex-direction:column;align-self:flex-start;align-items:flex-start}.card-player.player-big[_ngcontent-%COMP%]   .content-player[_ngcontent-%COMP%]   .sub-title-track[_ngcontent-%COMP%]{font-size:80%;opacity:.7}.card-player.player-big[_ngcontent-%COMP%]   .buttons-player[_ngcontent-%COMP%]{position:absolute;right:0;top:13rem}"]}),e})();function U(e,r){if(1&e&&(t.TgZ(0,"li"),t._UZ(1,"app-card-player",5),t.qZA()),2&e){const n=r.$implicit,a=t.oxw();t.xp6(1),t.Q6J("track",n)("mode",a.mode)}}const Q=function(e,r){return{"card-small":e,"card-big":r}};let R=(()=>{class e{constructor(){this.title="",this.mode="big",this.dataTracks=[]}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-section-generic"]],inputs:{title:"title",mode:"mode",dataTracks:"dataTracks"},decls:6,vars:6,consts:[[1,"section--generic"],[1,"section--generic__title"],[1,"section--generic__player--zone"],[1,"player--list",3,"ngClass"],[4,"ngFor","ngForOf"],[3,"track","mode"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"h1",1),t._uU(2),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"ul",3),t.YNc(5,U,2,2,"li",4),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Oqu(a.title),t.xp6(2),t.Q6J("ngClass",t.WLB(3,Q,"small"===a.mode,"big"===a.mode)),t.xp6(1),t.Q6J("ngForOf",a.dataTracks))},directives:[d.mk,d.sg,S],styles:[".section--generic[_ngcontent-%COMP%]{margin-bottom:2rem}.section--generic__player--zone[_ngcontent-%COMP%]   .player--list[_ngcontent-%COMP%]{display:grid;list-style:none;margin:0;padding:0;grid-gap:1.15rem;gap:1.15rem}.section--generic__player--zone[_ngcontent-%COMP%]   .player--list.card-small[_ngcontent-%COMP%]{grid-template-columns:repeat(5,1fr)}.section--generic__player--zone[_ngcontent-%COMP%]   .player--list.card-big[_ngcontent-%COMP%]{grid-template-columns:repeat(6,minmax(100px,1fr))}"]}),e})(),F=(()=>{class e{constructor(n){this.trackService=n,this.tracksTrending=[],this.tracksRandom=[],this.listObservers$=[]}ngOnInit(){this.loadDataAll(),this.loadDataRandom()}loadDataAll(){var n=this;return function(e){return function(){var r=this,n=arguments;return new Promise(function(a,c){var p=e.apply(r,n);function i(s){m(p,a,c,i,l,"next",s)}function l(s){m(p,a,c,i,l,"throw",s)}i(void 0)})}}(function*(){n.tracksTrending=yield n.trackService.getAllTracks$().toPromise()})()}loadDataRandom(){this.trackService.getAllRandom$().subscribe(n=>{this.tracksRandom=n})}ngOnDestroy(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(b))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tracks-page"]],decls:3,vars:6,consts:[[1,"tracks-page"],[3,"dataTracks","mode","title"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-section-generic",1),t._UZ(2,"app-section-generic",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("dataTracks",a.tracksTrending)("mode","small")("title","\xa1La mejor m\xfasica del mundo!"),t.xp6(1),t.Q6J("dataTracks",a.tracksRandom)("mode","big")("title","Lo mejor de Electronica"))},directives:[R],styles:[".tracks-page[_ngcontent-%COMP%]{padding:1rem}"]}),e})();var y=o(6653);const w=[{path:"",component:F}];let z=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[y.Bz.forChild(w)],y.Bz]}),e})();var N=o(4466);let Y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.ez,z,N.m]]}),e})()}}]);