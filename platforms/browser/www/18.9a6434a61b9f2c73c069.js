(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Wdwr:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),o=u("wSJi"),t=u("kEHE"),i=function(){function l(){}return l.prototype.getBadge=function(l){return"/assets/badges/"+l+".png"},l.prototype.getTeamName=function(l,n){return l.find(function(l){return l.id===n}).name},l.prototype.createFixtureList=function(l,n){var u=this;return l.map(function(l){var e=u.getTeamName(n,l.team_h);return{home_team:e,away_team:u.getTeamName(n,l.team_a),time:l.kickoff_time_formatted,badge_home:u.getBadge(e)}})},l.ngInjectableDef=e.S({factory:function(){return new l},token:l,providedIn:"root"}),l}(),a=function(){function l(l,n,u,e){this.mainUserService=l,this.router=n,this.staticDataService=u,this.fixtureService=e,this.showSpinner=!0,this.upcomingFixtures=[]}return l.prototype.ngOnInit=function(){var l=this;Promise.all([this.staticDataService.getUpcomingFixtures(),this.staticDataService.getTeams()]).then(function(n){l.upcomingFixtures=l.fixtureService.createFixtureList(n[0],n[1]),l.mainUserService.loadSavedUser().then(function(){return l.showSpinner=!1})})},l.prototype.onFantasyIdEntered=function(l){var n=this;this.mainUserService.createUser(l).then(function(){return n.showSpinner=!1})},l.prototype.navigateTo=function(l){this.router.navigateByUrl("/tabs"+l)},l}(),r=function(){return function(){}}(),c=u("pMnS"),s=u("Ck4e"),b=u("4qXY"),p=u("ra/t"),g=u("ntG5"),d=u("LDRY"),m=u("gIcY"),h=u("Ip0R"),f=u("OLZZ"),_=u("BCOl"),x=u("ZYCi"),v=e.nb({encapsulation:0,styles:[['.input-container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center;flex-wrap:wrap;flex-direction:column;height:100%}.home__square[_ngcontent-%COMP%]{box-shadow:3px 4px 8px #ccc;border-radius:8px;display:flex;flex-direction:column;justify-content:center;align-items:center}.home__services[_ngcontent-%COMP%]{margin-top:20px}.home__card[_ngcontent-%COMP%]{height:30vh;width:100%;box-shadow:7px 5px 8px #ccc;margin-bottom:15px;border-radius:8px;background:linear-gradient(rgba(240,172,46,.88),rgba(203,18,58,.88)) 0 0/cover,url(stadium.bf33c45161234e0b8957.jpg) 0 0/cover;display:grid;padding:15px;grid-auto-rows:1fr;grid-auto-columns:1fr;grid-template-areas:". . ." "badge . ." "name . points"}.home__card__name[_ngcontent-%COMP%]{grid-area:name;color:#fff;font-weight:600;font-size:.8em;display:flex;flex-direction:column;justify-content:flex-end}.home__card__name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.4em 0 0;font-size:.7em}.home__card__name[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-size:1em}.home__card__badge[_ngcontent-%COMP%]{grid-area:badge}.home__card__badge[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;width:50px;border-radius:50%;box-shadow:4px 4px 9px 0}.home__card__points[_ngcontent-%COMP%]{color:#fff;font-weight:600;font-size:.8em;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end;grid-area:points}.home__card__points[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.4em 0 0;font-size:.7em}.home__card__points[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-size:1.5em;font-weight:600}.home__divider[_ngcontent-%COMP%]{padding-right:16px}.home__fixture[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-weight:700;font-size:.6em}.home__fixture[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.7em}']],data:{}});function k(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-loading-spinner",[],null,null,null,s.b,s.a)),e.ob(1,114688,null,0,b.a,[],null,null)],function(l,n){l(n,1,0)},null)}function C(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,15,"div",[["class","input-container"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,11,"ion-item",[],null,null,null,p.S,p.o)),e.ob(2,49152,null,0,g.C,[e.h,e.k],null,null),(l()(),e.pb(3,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,p.T,p.q)),e.ob(4,49152,null,0,g.I,[e.h,e.k],{position:[0,"position"]},null),(l()(),e.Fb(-1,0,[" Enter your FPL Id to begin... "])),(l()(),e.pb(6,0,null,0,6,"ion-input",[["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0,t=l.component;return"ionBlur"===n&&(o=!1!==e.zb(l,7)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==e.zb(l,7)._handleIonChange(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(t.FplId=u)&&o),o},p.Q,p.n)),e.ob(7,16384,null,0,d.a,[e.k],null,null),e.Cb(1024,null,m.b,function(l){return[l]},[d.a]),e.ob(9,671744,null,0,m.e,[[8,null],[8,null],[8,null],[6,m.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,m.c,null,[m.e]),e.ob(11,16384,null,0,m.d,[[4,m.c]],null,null),e.ob(12,49152,null,0,g.B,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(13,0,null,null,2,"ion-button",[["color","danger"],["expand","block"],["shape","round"]],null,[[null,"click"]],function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==o.onFantasyIdEntered(o.FplId)&&e),e},p.H,p.e)),e.ob(14,49152,null,0,g.f,[e.h,e.k],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"]},null),(l()(),e.Fb(-1,0,["Enter"]))],function(l,n){var u=n.component;l(n,4,0,"stacked"),l(n,9,0,u.FplId),l(n,12,0,"number"),l(n,14,0,"danger","block","round")},function(l,n){l(n,6,0,e.zb(n,11).ngClassUntouched,e.zb(n,11).ngClassTouched,e.zb(n,11).ngClassPristine,e.zb(n,11).ngClassDirty,e.zb(n,11).ngClassValid,e.zb(n,11).ngClassInvalid,e.zb(n,11).ngClassPending)})}function z(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,13,"ion-item",[["lines","none"]],null,null,null,p.S,p.o)),e.ob(1,49152,null,0,g.C,[e.h,e.k],{lines:[0,"lines"]},null),(l()(),e.pb(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,p.E,p.b)),e.ob(3,49152,null,0,g.b,[],null,null),(l()(),e.pb(4,0,null,0,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(5,0,null,0,5,"ion-label",[["class","home__fixture"],["text-center",""]],null,null,null,p.T,p.q)),e.ob(6,49152,null,0,g.I,[e.h,e.k],null,null),(l()(),e.pb(7,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.Fb(8,null,[" "," vs "," "])),(l()(),e.pb(9,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(10,null,[" "," "])),(l()(),e.pb(11,0,null,0,2,"ion-avatar",[["slot","end"]],null,null,null,p.E,p.b)),e.ob(12,49152,null,0,g.b,[],null,null),(l()(),e.pb(13,0,null,0,0,"img",[["alt",""],["src",""]],null,null,null,null,null))],function(l,n){l(n,1,0,"none")},function(l,n){l(n,4,0,n.context.$implicit.badge_home),l(n,8,0,n.context.$implicit.home_team,n.context.$implicit.away_team),l(n,10,0,n.context.$implicit.time)})}function w(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,61,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,12,"div",[["class","home__card"]],null,null,null,null,null)),(l()(),e.pb(2,0,null,null,1,"div",[["class","home__card__badge"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(4,0,null,null,4,"div",[["class","home__card__name"]],null,null,null,null,null)),(l()(),e.pb(5,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Fb(6,null,[" "," "])),(l()(),e.pb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(8,null,[" ",""])),(l()(),e.pb(9,0,null,null,4,"div",[["class","home__card__points"]],null,null,null,null,null)),(l()(),e.pb(10,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Fb(11,null,["",""])),(l()(),e.pb(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Total Points"])),(l()(),e.pb(14,0,null,null,13,"ion-item-divider",[["class","home__divider"]],null,null,null,p.R,p.p)),e.ob(15,49152,null,0,g.D,[e.h,e.k],null,null),(l()(),e.pb(16,0,null,0,5,"ion-label",[],null,null,null,p.T,p.q)),e.ob(17,49152,null,0,g.I,[e.h,e.k],null,null),(l()(),e.pb(18,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,p.db,p.A)),e.ob(19,49152,null,0,g.qb,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,[" Transfers:"])),(l()(),e.Fb(21,0,[" "," "])),(l()(),e.pb(22,0,null,0,5,"ion-label",[["slot","end"]],null,null,null,p.T,p.q)),e.ob(23,49152,null,0,g.I,[e.h,e.k],null,null),(l()(),e.pb(24,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,p.db,p.A)),e.ob(25,49152,null,0,g.qb,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,[" Rank:"])),(l()(),e.Fb(27,0,[" "," "])),(l()(),e.pb(28,0,null,null,25,"div",[],null,null,null,null,null)),(l()(),e.pb(29,0,null,null,24,"ion-grid",[["class","home__services"]],null,null,null,p.M,p.j)),e.ob(30,49152,null,0,g.v,[e.h,e.k],null,null),(l()(),e.pb(31,0,null,0,22,"ion-row",[],null,null,null,p.ab,p.x)),e.ob(32,49152,null,0,g.cb,[],null,null),(l()(),e.pb(33,0,null,0,6,"ion-col",[["class","home__square"],["size","4"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.navigateTo("/team")&&e),e},p.K,p.h)),e.ob(34,49152,null,0,g.o,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(35,0,null,0,1,"ion-icon",[["color","danger"],["size","large"],["src","../../assets/icons/soccer-jersey.svg"]],null,null,null,p.O,p.l)),e.ob(36,49152,null,0,g.x,[e.h,e.k],{color:[0,"color"],size:[1,"size"],src:[2,"src"]},null),(l()(),e.pb(37,0,null,0,2,"ion-label",[["text-wrap",""]],null,null,null,p.T,p.q)),e.ob(38,49152,null,0,g.I,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,[" Team "])),(l()(),e.pb(40,0,null,0,6,"ion-col",[["class","home__square"],["data-aos","fade-up"],["data-aos-delay","2000"],["data-aos-duration","2000"],["size","4"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.navigateTo("/leagues")&&e),e},p.K,p.h)),e.ob(41,49152,null,0,g.o,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(42,0,null,0,1,"ion-icon",[["color","danger"],["size","large"],["src"," ../../assets/icons/trophy.svg"]],null,null,null,p.O,p.l)),e.ob(43,49152,null,0,g.x,[e.h,e.k],{color:[0,"color"],size:[1,"size"],src:[2,"src"]},null),(l()(),e.pb(44,0,null,0,2,"ion-label",[["text-wrap",""]],null,null,null,p.T,p.q)),e.ob(45,49152,null,0,g.I,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,[" Leagues "])),(l()(),e.pb(47,0,null,0,6,"ion-col",[["class","home__square"],["data-aos","fade-right"],["size","4"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.navigateTo("/news")&&e),e},p.K,p.h)),e.ob(48,49152,null,0,g.o,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(49,0,null,0,1,"ion-icon",[["color","danger"],["name","paper"],["size","large"]],null,null,null,p.O,p.l)),e.ob(50,49152,null,0,g.x,[e.h,e.k],{color:[0,"color"],name:[1,"name"],size:[2,"size"]},null),(l()(),e.pb(51,0,null,0,2,"ion-label",[["text-wrap",""]],null,null,null,p.T,p.q)),e.ob(52,49152,null,0,g.I,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,[" News "])),(l()(),e.pb(54,0,null,null,7,"ion-list",[],null,null,null,p.V,p.r)),e.ob(55,49152,null,0,g.J,[e.h,e.k],null,null),(l()(),e.pb(56,0,null,0,3,"ion-list-header",[],null,null,null,p.U,p.s)),e.ob(57,49152,null,0,g.K,[e.h,e.k],null,null),(l()(),e.pb(58,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Fixtures"])),(l()(),e.gb(16777216,null,0,1,null,z)),e.ob(61,278528,null,0,h.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,19,0,"danger"),l(n,25,0,"danger"),l(n,34,0,"4"),l(n,36,0,"danger","large","../../assets/icons/soccer-jersey.svg"),l(n,41,0,"4"),l(n,43,0,"danger","large"," ../../assets/icons/trophy.svg"),l(n,48,0,"4"),l(n,50,0,"danger","paper","large"),l(n,61,0,u.upcomingFixtures)},function(l,n){var u=n.component;l(n,3,0,u.mainUserService.user.country),l(n,6,0,u.mainUserService.user.name),l(n,8,0,u.mainUserService.user.team.name),l(n,11,0,u.mainUserService.user.team.overallPoints),l(n,21,0,u.mainUserService.user.gameweekTransfers),l(n,27,0,u.mainUserService.user.overallRank)})}function y(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,5,"ion-content",[["padding",""]],null,null,null,p.L,p.i)),e.ob(1,49152,null,0,g.p,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,C)),e.ob(3,16384,null,0,h.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,w)),e.ob(5,16384,null,0,h.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,!u.mainUserService.user),l(n,5,0,u.mainUserService.user)},null)}function O(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-header",[],null,null,null,f.b,f.a)),e.ob(1,114688,null,0,_.a,[],{title:[0,"title"]},null),(l()(),e.gb(16777216,null,null,1,null,k)),e.ob(3,16384,null,0,h.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,y)),e.ob(5,16384,null,0,h.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,"HOME"),l(n,3,0,u.showSpinner),l(n,5,0,!u.showSpinner)},null)}function F(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-home",[],null,null,null,O,v)),e.ob(1,114688,null,0,a,[o.a,x.m,t.a,i],null,null)],function(l,n){l(n,1,0)},null)}var I=e.lb("app-home",a,F,{},{},[]),M=u("95zI"),P=u("9opb"),S=u("apKv"),T=u("B4/3"),U=u("zon2");u.d(n,"HomePageModuleNgFactory",function(){return q});var q=e.mb(r,[],function(l){return e.wb([e.xb(512,e.j,e.bb,[[8,[c.a,I]],[3,e.j],e.x]),e.xb(4608,h.m,h.l,[e.u,[2,h.s]]),e.xb(4608,m.g,m.g,[]),e.xb(4608,M.a,M.a,[e.z,e.g]),e.xb(4608,P.a,P.a,[M.a,e.j,e.q]),e.xb(4608,S.a,S.a,[M.a,e.j,e.q]),e.xb(1073742336,h.b,h.b,[]),e.xb(1073742336,m.f,m.f,[]),e.xb(1073742336,m.a,m.a,[]),e.xb(1073742336,T.a,T.a,[]),e.xb(1073742336,U.a,U.a,[]),e.xb(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),e.xb(1073742336,r,r,[]),e.xb(1024,x.k,function(){return[[{path:"",component:a}]]},[])])})}}]);