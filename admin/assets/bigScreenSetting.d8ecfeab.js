import{u as m,s as P,c as O}from"./school.ed31b27a.js";import{d as y,r as v,k as b,H as G,W as N,m as U,_ as S,b as g,o as c,c as d,g as a,F as I,f as C,n as E,e as h,w as B,i as w,x as V,y as j,t as $,C as F,D as k}from"./index.9f9004af.js";import{g as T}from"./ak.a4b404c2.js";import"./moment.9709ab41.js";const z=y({name:"LargeScreenPreview",props:{options:{type:Object,default:()=>{}}},setup(e,_){const o=v(e.options),s=v([{id:1,optionsId:-1},{id:2,optionsId:-1},{id:3,optionsId:-1}]),n=v([{id:4,optionsId:-1},{id:5,optionsId:-1},{id:6,optionsId:-1}]),i=v([{id:7,optionsId:-1},{id:8,optionsId:-1},{id:9,optionsId:-1}]),l=v(),t=u=>{if(u.id>=4&&u.id<=6){N.alert("\u4E2D\u95F4\u533A\u57DF\u6A21\u5757\u6682\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u914D\u7F6E","\u63D0\u9192",{confirmButtonText:"\u77E5\u9053\u4E86"});return}l.value=u,_.emit("change",l.value)},r=()=>{console.log("\u70B9\u51FB\u4E86\u91CD\u7F6E\u6309\u94AE :>> "),s.value[0].optionsId=1,s.value[1].optionsId=2,s.value[2].optionsId=3,i.value[0].optionsId=4,i.value[1].optionsId=5,i.value[2].optionsId=6,R()},D=()=>{console.log("\u70B9\u51FB\u4E86\u67E5\u770B\u6309\u94AE :>> ");const u=m().getSchoolInfo,f=U().loginInfo;window.location.href=`http://school.familyeducation.org.cn/screen/?uid=${f.uid}&token=${f.token}&school_id=${u.id}`},L=()=>{if(o.value){if(o.value.id>=1&&o.value.id<=3)for(const u of s.value)u.id===o.value.id&&(u.optionsId=o.value.optionsId);if(o.value.id>=4&&o.value.id<=6)for(const u of n.value)u.id===o.value.id&&(u.optionsId=o.value.optionsId);if(o.value.id>=7&&o.value.id<=9)for(const u of i.value)u.id===o.value.id&&(u.optionsId=o.value.optionsId)}};(async()=>{const f={school_id:m().getSchoolInfo.id},p=await P(f);console.log("\u83B7\u53D6\u5927\u5C4F\u914D\u7F6E_res :>> ",p.c1),s.value[0].optionsId=parseInt(p.l1),s.value[1].optionsId=parseInt(p.l2),s.value[2].optionsId=parseInt(p.l3),n.value[0].optionsId=parseInt(p.c1),n.value[1].optionsId=parseInt(p.c2),n.value[2].optionsId=parseInt(p.c3),i.value[0].optionsId=parseInt(p.r1),i.value[1].optionsId=parseInt(p.r2),i.value[2].optionsId=parseInt(p.r3)})();const R=async()=>{const f={school_id:m().getSchoolInfo.id,l1:s.value[0].optionsId,l2:s.value[1].optionsId,l3:s.value[2].optionsId,c1:n.value[0].optionsId,c2:n.value[1].optionsId,c3:n.value[2].optionsId,r1:i.value[0].optionsId,r2:i.value[1].optionsId,r3:i.value[2].optionsId};await O(f)};return b(()=>{o.value=e.options,L()}),G(o,()=>{R()}),{leftListRef:s,centerListRef:n,rightListRef:i,activeRef:l,onChangeActive:t,onReset:r,onCheck:D}}});const A=e=>(V("data-v-12d1b127"),e=e(),j(),e),H={class:"large-screen-preview-container flex-center align-end"},M={class:"big-data-screen-box"},W=A(()=>a("header",null,"\u6570\u636E\u5927\u5C4F",-1)),q={class:"flex"},J=["onClick"],K=A(()=>a("div",{class:"li-content-style"},null,-1)),Q=[K],X=["onClick"],Y=["onClick"],Z=A(()=>a("div",{class:"li-content-style"},null,-1)),x=[Z],ee={class:"btn-box"},oe={class:"btn-style"},ne=w("\u91CD\u7F6E"),se={class:"btn-style"},te=w("\u67E5\u770B");function ie(e,_,o,s,n,i){const l=g("el-button");return c(),d("div",H,[a("div",M,[W,a("article",q,[a("ul",null,[(c(!0),d(I,null,C(e.leftListRef,t=>(c(),d("li",{key:t.id,class:E(["side-li-style",{"active-li-style":e.activeRef&&e.activeRef.id===t.id}]),onClick:r=>e.onChangeActive(t)},Q,10,J))),128))]),a("ul",null,[(c(!0),d(I,null,C(e.centerListRef,t=>(c(),d("li",{key:t.id,class:E(["center-li-style",{"active-li-style":e.activeRef&&e.activeRef.id===t.id}]),onClick:r=>e.onChangeActive(t)},null,10,X))),128))]),a("ul",null,[(c(!0),d(I,null,C(e.rightListRef,t=>(c(),d("li",{key:t.id,class:E(["side-li-style",{"active-li-style":e.activeRef&&e.activeRef.id===t.id}]),onClick:r=>e.onChangeActive(t)},x,10,Y))),128))])])]),a("div",ee,[a("div",oe,[h(l,{onClick:e.onReset},{default:B(()=>[ne]),_:1},8,["onClick"])]),a("div",se,[h(l,{type:"primary",onClick:e.onCheck},{default:B(()=>[te]),_:1},8,["onClick"])])])])}const ue=S(z,[["render",ie],["__scopeId","data-v-12d1b127"]]),ae=y({name:"LargeScreenOptions",props:{preview:{type:Object,default:()=>{}}},setup(e,_){const o=v(),s=v([{id:1,name:"\u603B\u6570\u6982\u89C8"},{id:2,name:"\u8FD1\u65E5\u5B66\u4E60\u8D8B\u52BF"},{id:3,name:"\u5BB6\u5EAD\u6784\u6210\u5206\u6790"},{id:4,name:"\u6BCF\u65E5\u4E00\u5B66"},{id:5,name:"\u6BCF\u5468\u4E00\u505A"},{id:6,name:"\u6BCF\u6708\u4E00\u8BFE"},{id:7,name:"\u5BB6\u5EAD\u5206\u5E03"},{id:8,name:"\u5BB6\u5EAD\u7ED3\u6784\u5206\u6790"},{id:9,name:"\u73ED\u7EA7\u5B66\u4E60\u6392\u540D"},{id:10,name:"\u70ED\u95E8\u5185\u5BB9"},{id:11,name:"\u8FD1\u671F\u5B66\u4E60\u6D3B\u52A8"}]),n=v(-1),i=l=>{n.value=l,_.emit("change",n.value)};return b(()=>{o.value=e.preview,o.value&&(n.value=o.value.optionsId),console.log("previewRef.value :>> ",o.value)}),{getImageUrl:T,dataListRef:s,activeRef:n,onChangeActive:i,previewRef:o}}});const le={class:"large-screen-options-container"},ce={class:"flex flex-wrap"},de=["onClick"];function re(e,_,o,s,n,i){const l=g("el-image"),t=g("el-scrollbar");return c(),d("div",le,[a("header",null,$(e.previewRef?`\u6A21\u5757${e.previewRef.id}`:"\u8BF7\u9009\u62E9\u6A21\u5757"),1),F(a("article",null,[h(t,{class:"scrollbar-style"},{default:B(()=>[a("ul",ce,[(c(!0),d(I,null,C(e.dataListRef,r=>(c(),d("li",{key:r.id,class:E({"active-li-style":e.activeRef===r.id}),onClick:D=>e.onChangeActive(r.id)},[F(h(l,{class:"active-icon-style",src:e.getImageUrl("large_screen_options_checked.png")},null,8,["src"]),[[k,e.activeRef===r.id]]),w(" "+$(r.name),1)],10,de))),128))])]),_:1})],512),[[k,e.previewRef]])])}const pe=S(ae,[["render",re],["__scopeId","data-v-c92d2057"]]),ve=y({name:"bigScreenSetting",components:{LargeScreenPreview:ue,LargeScreenOptions:pe},setup(){const e=v(),_=v();return{onChangePreviewActive:n=>{console.log("\u5927\u5C4F\u9884\u89C8\u6A21\u5757\u6539\u53D8\u9009\u4E2D\u9879\u89E6\u53D1_val :>> ",n),e.value=n},onChangeOptions:n=>{console.log("\u5927\u5C4F\u9009\u9879\u914D\u7F6E\u6539\u53D8\u9009\u4E2D\u9879\u89E6\u53D1_val :>> ",n),_.value={id:e.value?e.value.id:-1,optionsId:n}},previewActiveRef:e,optionsAvtiveRef:_}}});const _e={class:"big-screen-setting-container"};function fe(e,_,o,s,n,i){const l=g("LargeScreenPreview"),t=g("LargeScreenOptions");return c(),d("div",_e,[a("article",null,[h(l,{options:e.optionsAvtiveRef,onChange:e.onChangePreviewActive},null,8,["options","onChange"]),h(t,{preview:e.previewActiveRef,class:"large-screen-options-style",onChange:e.onChangeOptions},null,8,["preview","onChange"])])])}const me=S(ve,[["render",fe],["__scopeId","data-v-1cf8b6cc"]]);export{me as default};