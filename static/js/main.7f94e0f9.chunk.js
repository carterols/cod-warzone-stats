(this["webpackJsonpcod-warzone-stats"]=this["webpackJsonpcod-warzone-stats"]||[]).push([[0],{116:function(e,a,t){e.exports=t(145)},121:function(e,a,t){},145:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),l=t.n(c),o=(t(121),t(18)),i=t.n(o),s=t(24),m=t(35),u=t(16),d=t(192),p=t(194),f=t(196),g=t(147),h=Object(d.a)((function(e){return{root:{flexGrow:1,marginBottom:e.spacing(3)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function E(){var e=h();return r.a.createElement("div",{className:e.root},r.a.createElement(p.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement(g.a,{variant:"h6",className:e.title},"Warzone BR Stats"))))}var b=t(225),v=t(200),y=t(201),S=t(93),N=t.n(S),k=t(223),O=t(202),x=t(90),j=t.n(x),w=t(91),P=t.n(w),C=t(92),L=t.n(C),R=(t(59),Object(d.a)((function(e){return{platformButton:{padding:"4px",marginRight:"2px"},root:{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:e.spacing(.5)},chip:{margin:e.spacing(.5)}}})));function B(e){var a=R(),t=Object(n.useState)("battle"),c=Object(u.a)(t,2),l=c[0],o=c[1],d=Object(n.useState)(""),p=Object(u.a)(d,2),f=p[0],g=p[1],h=e.cookies.get("search_history");var E=function(e){o(e.currentTarget.firstChild.firstChild.firstChild.getAttribute("data-value"))},S=function(){var a=Object(m.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(f&&0!==f.length){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,e.search(f,l);case 4:a.sent&&(t=e.cookies.get("search_history"),e.cookies.set("lastSearchedUser",JSON.stringify({userName:f,platform:l}),{path:"/",maxAge:432e3}),t||(t={}),t.hasOwnProperty(l)||(t[l]={}),t[l].hasOwnProperty(f.toLowerCase())||(t[l][f.toLowerCase()]=f),e.cookies.set("search_history",JSON.stringify(t),{path:"/",maxAge:31536e3})),g("");case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),x=function(e){"Enter"===e.key&&S()};function w(){return"battle"===l?"Search Battle.net...":"psn"===l?"Search PlayStation Network...":"Search Xbox Live..."}return r.a.createElement(k.a,{freeSolo:!0,options:h&&h.hasOwnProperty(l)?Object.keys(h[l]):[],getOptionLabel:function(e){return e},openOnFocus:!1,value:f,filterSelectedOptions:!0,onChange:function(e,a){return g(a)},onInputChange:function(e,a){g(a)},renderInput:function(e){return e.inputProps.onKeyDown=x,r.a.createElement(b.a,Object.assign({},e,{placeholder:w(),InputProps:Object(s.a)({},e.InputProps,{placeholder:w(),startAdornment:r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{style:{marginBottom:"5px"}},r.a.createElement(y.a,{className:a.platformButton,color:"inherit",onClick:E},r.a.createElement(O.a,null,r.a.createElement("img",{"data-value":"battle",src:L.a,alt:"Battle.net icon",className:"battle"===l?"icon-selected":""})))),r.a.createElement(v.a,{style:{marginBottom:"5px"}},r.a.createElement(y.a,{className:a.platformButton,color:"inherit",onClick:E},r.a.createElement(O.a,null,r.a.createElement("img",{"data-value":"psn",src:j.a,alt:"PSN icon",className:"psn"===l?"icon-selected":""})))),r.a.createElement(v.a,{style:{marginBottom:"5px"}},r.a.createElement(y.a,{className:a.platformButton,color:"inherit",onClick:E},r.a.createElement(O.a,null,r.a.createElement("img",{"data-value":"xbl",src:P.a,alt:"Xbox icon",className:"xbl"===l?"icon-selected":""}))))),endAdornment:r.a.createElement(v.a,{style:{marginBottom:"5px"}},r.a.createElement(y.a,{color:"primary",onClick:function(e){return S(f,l)}},r.a.createElement(N.a,null)))}),fullWidth:!0}))}})}var D=t(206),T=t(100),I=t(231),F=t(213),M=t(222),A=t(214),K=t(215),W=t(229),z=t(226),G=t(72),U=t.n(G),H="https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/",J={getUser:function(){var e=Object(m.a)(i.a.mark((function e(a,t){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.replace("#","%23"),r="".concat(H+t,"/gamer/").concat(n,"/profile/type/mp"),e.next=4,U.a.get(r);case 4:if("error"===(c=e.sent).data.status){e.next=9;break}return e.abrupt("return",c.data);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),getFriendsStats:function(){var e=Object(m.a)(i.a.mark((function e(a,t){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.replace("#","%23"),r="".concat(H+t,"/gamer/").concat(n,"/profile/friends/type/mp"),e.next=4,U.a.get(r);case 4:if("error"===(c=e.sent).data.status){e.next=9;break}return e.abrupt("return",c.data);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),getRecentMatches:function(){var e=Object(m.a)(i.a.mark((function e(a,t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.replace("#","%23"),e.next=3,U.a.get("https://pacific-badlands-14289.herokuapp.com/matches/platform/".concat(t,"/user/").concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},_=t(203),q=t(204),V=t(220),X=t(205),Y=t(95),$=t.n(Y),Q=t(96),Z=t.n(Q),ee=t(97),ae=t.n(ee),te=Object(d.a)((function(e){return{root:Object(s.a)({},e.typography.button),closeButton:{marginLeft:"auto"}}}));function ne(e){var a=te(),t=e.data,n=t.userName,c=t.wins,l=t.kills,o=t.kdRatio,i=t.downs,s=t.topTwentyFive,m=t.topTen,u=(t.contracts,t.revives,t.topFive),d=t.score,p=t.timePlayed,f=t.gamesPlayed,h=(t.scorePerMinute,t.cash,t.deaths),E=e.colors,b=function(e){return"none"===E[e]?null:"error"===E[e]?r.a.createElement($.a,{color:"error",fontSize:"inherit"}):"primary"===E[e]?r.a.createElement(Z.a,{color:"primary",fontSize:"inherit"}):void 0};return r.a.createElement(_.a,null,r.a.createElement(y.a,{onClick:function(a){e.removeCard(n)}},r.a.createElement(ae.a,null)),r.a.createElement(q.a,{align:"center"},r.a.createElement(g.a,{align:"center",className:a.root,gutterBottom:!0},n),r.a.createElement(V.a,{className:"circle",margin:2},r.a.createElement(g.a,{align:"center",variant:"h5"},b("kdRatio"),parseFloat(o).toFixed(2),r.a.createElement(g.a,{align:"center",variant:"h5",className:a.root},"K/D Ratio"))),r.a.createElement(X.a,null),r.a.createElement(D.a,{container:!0,spacing:2},r.a.createElement(D.a,{item:!0,xs:6},r.a.createElement(g.a,{align:"left",variant:"h5",className:a.root,color:"textSecondary"},"Kills"),r.a.createElement(g.a,{align:"left",variant:"h4",className:a.root},b("kills"),l.toLocaleString()),r.a.createElement(g.a,{align:"left",variant:"h5",className:a.root,color:"textSecondary"},"Deaths"),r.a.createElement(g.a,{align:"left",variant:"h4",className:a.root},b("deaths"),h.toLocaleString()),r.a.createElement(g.a,{align:"left",variant:"h5",className:a.root,color:"textSecondary"},"Downs"),r.a.createElement(g.a,{align:"left",variant:"h4",className:a.root},b("downs"),i.toLocaleString()),r.a.createElement(g.a,{align:"left",variant:"h5",className:a.root,color:"textSecondary"},"Score"),r.a.createElement(g.a,{align:"left",variant:"h4",className:a.root},b("score"),d.toLocaleString()),r.a.createElement(g.a,{align:"left",variant:"h5",className:a.root,color:"textSecondary"},"Time Played"),r.a.createElement(g.a,{align:"left",variant:"h4",className:a.root},b("timePlayed"),function(e){var a=Math.floor(e/86400).toLocaleString(),t=e%86400,n=Math.floor(t/3600).toLocaleString();t%=3600;var r=Math.floor(t/60).toLocaleString();return t%=60,"".concat(a," days, ").concat(n," hours, ").concat(r," minutes, ").concat(t," seconds")}(p))),r.a.createElement(D.a,{item:!0,xs:6},r.a.createElement(g.a,{align:"left",variant:"h5",className:a.root,color:"textSecondary"},"Wins"),r.a.createElement(g.a,{align:"left",variant:"h4",className:a.root},b("wins"),c.toLocaleString()),r.a.createElement(g.a,{align:"left",variant:"h5",className:a.root,color:"textSecondary"},"Games Played"),r.a.createElement(g.a,{align:"left",variant:"h4",className:a.root},b("gamesPlayed"),f.toLocaleString()),r.a.createElement(g.a,{align:"left",variant:"h5",className:a.root,color:"textSecondary"},"Top 5"),r.a.createElement(g.a,{align:"left",variant:"h4",className:a.root},b("topFive"),u.toLocaleString()),r.a.createElement(g.a,{align:"left",variant:"h5",className:a.root,color:"textSecondary"},"Top 10"),r.a.createElement(g.a,{align:"left",variant:"h4",className:a.root},b("topTen"),m.toLocaleString()),r.a.createElement(g.a,{align:"left",variant:"h5",className:a.root,color:"textSecondary"},"Top 25"),r.a.createElement(g.a,{align:"left",variant:"h4",className:a.root},b("topTwentyFive"),s.toLocaleString())))))}var re=t(216),ce=t(61),le=t(3),oe=t(8),ie=t(211),se=t(212),me=t(209),ue=t(210),de=t(207),pe=t(228),fe=t(208),ge=t(232),he=t(224);function Ee(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var be=[{id:"userName",numeric:!1,disablePadding:!0,label:"USER"},{id:"kills",numeric:!0,disablePadding:!1,label:"KILLS"},{id:"deaths",numeric:!0,disablePadding:!1,label:"DEATHS"},{id:"downs",numeric:!0,disablePadding:!1,label:"DOWNS"},{id:"avgKills",numeric:!0,disablePadding:!1,label:"AVG. KILLS"},{id:"kdRatio",numeric:!0,disablePadding:!1,label:"K/D RATIO"},{id:"gamesPlayed",numeric:!0,disablePadding:!1,label:"GAMES PLAYED"},{id:"wins",numeric:!0,disablePadding:!1,label:"WINS"},{id:"score",numeric:!0,disablePadding:!1,label:"SCORE"},{id:"avgScore",numeric:!0,disablePadding:!1,label:"AVG. SCORE"}],ve=function(e){var a=e.classes,t=e.onSelectAllClick,n=e.order,c=e.orderBy,l=e.numSelected,o=e.rowCount,i=e.onRequestSort;return r.a.createElement(de.a,null,r.a.createElement(fe.a,null,r.a.createElement(me.a,{padding:"checkbox"},r.a.createElement(he.a,{indeterminate:l>0&&l<o,checked:o>0&&l===o,onChange:t,color:"default",inputProps:{"aria-label":"select all users"}})),be.map((function(e){return r.a.createElement(me.a,{key:e.id,align:"left",padding:e.disablePadding?"none":"default",sortDirection:c===e.id&&n},r.a.createElement(ge.a,{active:c===e.id,direction:c===e.id?n:"asc",onClick:(t=e.id,function(e){i(e,t)})},e.label,c===e.id?r.a.createElement("span",{className:a.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var t}))))},ye=Object(d.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(oe.e)(e.palette.secondary.light,.85)}:{color:e.palette.text.secondary,backgroundColor:e.palette.primary},title:{flex:"1 1 100%"}}})),Se=function(e){var a=ye(),t=e.numSelected;return r.a.createElement(f.a,{className:Object(le.a)(a.root,Object(ce.a)({},a.highlight,t>0))},t>0?r.a.createElement(g.a,{className:a.title,color:"inherit",variant:"subtitle1"},t," selected"):r.a.createElement(g.a,{className:a.title,variant:"h6",id:"tableTitle"},"Leaderboards"))},Ne=Object(d.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function ke(e){var a=Ne(),t=r.a.useState("desc"),n=Object(u.a)(t,2),c=n[0],l=n[1],o=r.a.useState("score"),i=Object(u.a)(o,2),m=i[0],d=i[1],p=e.selected,f=r.a.useState(0),g=Object(u.a)(f,2),h=g[0],E=g[1],b=r.a.useState(10),v=Object(u.a)(b,2),y=v[0],S=v[1];function N(a){e.changeSelected(a)}var k=y-Math.min(y,e.data.length-h*y);return e.data?r.a.createElement("div",{className:a.root},r.a.createElement(T.a,{className:a.paper},r.a.createElement(Se,{numSelected:Object.keys(p).length}),r.a.createElement(ue.a,null,r.a.createElement(ie.a,{className:a.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"leaderboards"},r.a.createElement(ve,{classes:a,numSelected:Object.keys(p).length,order:c,orderBy:m,onSelectAllClick:function(a){if(a.target.checked){var t={};return e.data.forEach((function(a){t[a.userName]={data:e.data[a]}})),void N(t)}N({})},onRequestSort:function(e,a){l(m===a&&"asc"===c?"desc":"asc"),d(a)},rowCount:e.data.length}),r.a.createElement(se.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(e.data,function(e,a){return"desc"===e?function(e,t){return Ee(e,t,a)}:function(e,t){return-Ee(e,t,a)}}(c,m)).slice(h*y,h*y+y).map((function(e,a){var t,n=(t=e.userName,!!p.hasOwnProperty(t)),c="user-checkbox-".concat(a);return r.a.createElement(fe.a,{hover:!0,onClick:function(a){return function(e,a){console.log(a);var t=Object(s.a)({},p);p.hasOwnProperty(a.userName)?delete t[a.userName]:t[a.userName]={data:a},N(t)}(0,e)},role:"checkbox","aria-checked":n,key:a,tabIndex:-1,className:n?"row-selected":null,selected:n},r.a.createElement(me.a,{padding:"checkbox"},r.a.createElement(he.a,{checked:n,color:"default",inputProps:{"aria-labelledby":c}})),r.a.createElement(me.a,{component:"th",id:c,scope:"row",padding:"none"},e.userName),r.a.createElement(me.a,{align:"left"},e.kills),r.a.createElement(me.a,{align:"left"},e.deaths),r.a.createElement(me.a,{align:"left"},e.downs),r.a.createElement(me.a,{align:"left"},e.avgKills),r.a.createElement(me.a,{align:"left"},e.kdRatio),r.a.createElement(me.a,{align:"left"},e.gamesPlayed),r.a.createElement(me.a,{align:"left"},e.wins),r.a.createElement(me.a,{align:"left"},e.score),r.a.createElement(me.a,{align:"left"},e.avgScore))})),k>0&&r.a.createElement(fe.a,{style:{height:53*k}},r.a.createElement(me.a,{colSpan:6}))))),r.a.createElement(pe.a,{rowsPerPageOptions:[5,10,25],component:"div",count:e.data.length,rowsPerPage:y,page:h,onChangePage:function(e,a){E(a)},onChangeRowsPerPage:function(e){S(parseInt(e.target.value,10)),E(0)}}))):null}var Oe=Object(d.a)((function(e){return{root:Object(s.a)({},e.typography.button),container:{padding:e.spacing(2)},topDivider:{marginBottom:e.spacing(1)}}}));function xe(e){var a=Oe(),t=e.data,n=new Date(1e3*t.utcStartSeconds),c=Math.floor(t.playerStats.timePlayed/60);return r.a.createElement(T.a,{className:a.container},r.a.createElement(g.a,{variant:"h6",className:a.date,color:"textPrimary"},n.toLocaleString()," | ",function(e){var a=e%10,t=e%100;return 1===a&&11!==t?e+"ST":2===a&&12!==t?e+"ND":3===a&&13!==t?e+"RD":e+"TH"}(t.playerStats.teamPlacement)," PLACE | ",c," MINUTES"),r.a.createElement(X.a,{className:a.topDivider}),r.a.createElement(D.a,{container:!0,justify:"center",alignItems:"center",spacing:3},r.a.createElement(D.a,{item:!0,cem:!0,sm:3},r.a.createElement(V.a,{className:"circle",margin:2},r.a.createElement(g.a,{align:"center",variant:"h5"},parseFloat(t.playerStats.kdRatio).toFixed(2),r.a.createElement(g.a,{align:"center",variant:"h5",className:a.root},"K/D Ratio")))),t.teamStats.players.map((function(e){return r.a.createElement(D.a,{item:!0,sm:3},r.a.createElement(g.a,{align:"left",variant:"h5",className:a.root,color:e.username===t.player.username?"primary":"textSecondary"},e.username),r.a.createElement(X.a,null),r.a.createElement(g.a,{align:"left",variant:"h5",className:a.root,color:"textSecondary"},"Score"),r.a.createElement(g.a,{align:"left",variant:"h4",className:a.root},e.playerStats.score.toLocaleString()),r.a.createElement(g.a,{variant:"h5",className:a.root,color:"textSecondary"},"Kills"),r.a.createElement(g.a,{variant:"h4",className:a.root},e.playerStats.kills),r.a.createElement(g.a,{align:"left",variant:"h5",className:a.root,color:"textSecondary"},"Deaths"),r.a.createElement(g.a,{align:"left",variant:"h4",className:a.root},e.playerStats.deaths),r.a.createElement(g.a,{align:"left",variant:"h5",className:a.root,color:"textSecondary"},"Damage Done"),r.a.createElement(g.a,{align:"left",variant:"h4",className:a.root},e.playerStats.damageDone),r.a.createElement(g.a,{align:"left",variant:"h5",className:a.root,color:"textSecondary"},"Assists"),r.a.createElement(g.a,{align:"left",variant:"h4",className:a.root},e.playerStats.assists))}))))}var je=Object(d.a)((function(e){return{root:{display:"flex",justifyContent:"start",flexWrap:"wrap",padding:e.spacing(.5),marginBottom:"2rem"},chip:{margin:e.spacing(.5)},marginTop:{marginTop:e.spacing(1)}}}));function we(e){var a=Object.keys(e),t={};return a.length<2?null:(a.forEach((function(a){Object.keys(e[a].data).forEach((function(n){t.hasOwnProperty(n)&&e[a].data[n]>e[t[n]].data[n]?t[n]=a:t.hasOwnProperty(n)||(t[n]=a)}))})),t)}function Pe(e,a){var t={};return a?(Object.keys(a).forEach((function(n){a[n]!==e.data.userName?t[n]="error":t[n]="primary"})),t):(Object.keys(e.data).forEach((function(e){t[e]="none"})),t)}function Ce(e,a){var t=e.map((function(e){return e.name})).indexOf(a);return e[t]}var Le=Object(re.a)((function(e){var a=je(),t=Object(n.useState)({}),c=Object(u.a)(t,2),l=c[0],o=c[1],d=Object(n.useState)(!1),p=Object(u.a)(d,2),f=p[0],g=p[1],h=Object(n.useState)(!1),b=Object(u.a)(h,2),v=b[0],y=b[1],S=Object(n.useState)({}),N=Object(u.a)(S,2),k=N[0],O=N[1],x=Object(n.useState)([]),j=Object(u.a)(x,2),w=j[0],P=j[1],C=Object(n.useState)(0),L=Object(u.a)(C,2),R=L[0],G=L[1];Object(n.useEffect)((function(){var a=e.cookies.get("lastSearchedUser");a&&H(a.userName,a.platform)}),[]);var U,H=function(){var e=Object(m.a)(i.a.mark((function e(a,t){var n,r,c,m,u,d,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l.hasOwnProperty(a)){e.next=2;break}return e.abrupt("return",!1);case 2:return y(!0),e.next=5,J.getUser(a,t);case 5:if(!(n=e.sent)){e.next=35;break}return c={},(r={}).data=n.data.lifetime.mode.br.properties,r.data.kdRatio=parseFloat(r.data.kdRatio.toFixed(2)),r.data.avgKills=parseInt(Math.round(r.data.kills/r.data.gamesPlayed)),r.data.avgScore=parseInt(Math.round(r.data.score/r.data.gamesPlayed)),r.data.userName=n.data.username,r.data.platform=t,(m={})[r.data.userName]=r,c[r.data.userName]=r,e.next=20,J.getRecentMatches(a,t);case 20:return u=(u=e.sent).matches.map((function(e){return{utcStartSeconds:e.utcStartSeconds,playerCount:e.playerCount,player:e.player,playerStats:e.playerStats,teamCount:e.teamCount,teamStats:Ce(e.rankedTeams,e.player.team)}})),P(u),e.next=25,J.getFriendsStats(a,t);case 25:return(d=e.sent)&&"success"===d.status&&(d=(d=d.data).forEach((function(e){"uno"===e.platform&&(e.platform="battle");var a=e.lifetime.mode.br.properties;a.kdRatio=parseFloat(a.kdRatio.toFixed(2)),c[e.username]={data:Object(s.a)({},a,{userName:e.username,avgKills:parseInt(Math.round(a.kills/a.gamesPlayed)),avgScore:parseInt(Math.round(a.score/a.gamesPlayed)),platform:e.platform})}}))),p=we(l),Object.keys(m).forEach((function(e){m[e].colors=Pe(m[e],p)})),y(!1),o(m),O(c),e.abrupt("return",!0);case 35:return g(!0),e.abrupt("return",!1);case 37:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),_=function(e){var a=Object(s.a)({},l);delete a[e],o(a)},q=function(e){var a=we(e);Object.keys(e).forEach((function(t){e[t].colors=Pe(e[t],a)})),o(e)},V=function(){g(!1)},X=function(e,a){G(a)};return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(K.a,{maxWidth:"lg"},(U=0,Object.keys(l).length>0?r.a.createElement(T.a,{hidden:U!==R,className:a.root},Object.keys(l).map((function(e){return r.a.createElement(I.a,{key:e,label:e,onDelete:function(a){return _(e)},className:a.chip})}))):null)," ",r.a.createElement(B,{search:H,cookies:e.cookies}),v?r.a.createElement(D.a,{item:!0,sm:12},r.a.createElement(F.a,{color:"primary"})):null," ",Object.keys(l).length>0?r.a.createElement(T.a,{className:a.marginTop},r.a.createElement(M.a,{value:R,onChange:X,variant:"fullWidth",indicatorColor:"primary",centered:!0},r.a.createElement(A.a,{label:"Overview"}),r.a.createElement(A.a,{label:"Recent Matches"}))):null," ",function(e){return r.a.createElement(D.a,{container:!0,spacing:3,className:"stats-container"},function(e){return Object.keys(l).length>0?Object.keys(l).map((function(a){return r.a.createElement(D.a,{item:!0,hidden:e!==R,key:a,sm:6},r.a.createElement(ne,{data:l[a].data,colors:l[a].colors,removeCard:_}))})):null}(e)," ",function(e){return Object.keys(k).length>1?r.a.createElement(D.a,{item:!0,hidden:e!==R,sm:12},r.a.createElement(ke,{data:Object.keys(k).map((function(e){return k[e].data})),selected:l,changeSelected:q})):null}(e))}(0),function(e){if(w.length>0)return r.a.createElement(D.a,{container:!0,spacing:3,className:"stats-container"},w.map((function(a,t){return r.a.createElement(D.a,{item:!0,hidden:e!==R,key:t,sm:12},r.a.createElement(xe,{data:a}))})))}(1)),r.a.createElement(W.a,{open:f,autoHideDuration:3e3,onClose:V,anchorOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(z.a,{onClose:V,severity:"error"},"The username you entered was invalid.")))})),Re=t(219),Be=t(98),De=t(218);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=t(217),Ie=Object(Be.a)({palette:{type:"dark"}});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Te.a,null,r.a.createElement(De.a,{theme:Ie},r.a.createElement(Re.a,null),r.a.createElement(Le,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,a,t){},90:function(e,a,t){e.exports=t.p+"static/media/psn.70872efd.svg"},91:function(e,a,t){e.exports=t.p+"static/media/xbox.faa28b5a.svg"},92:function(e,a,t){e.exports=t.p+"static/media/battle-net.355d0860.svg"}},[[116,1,2]]]);
//# sourceMappingURL=main.7f94e0f9.chunk.js.map