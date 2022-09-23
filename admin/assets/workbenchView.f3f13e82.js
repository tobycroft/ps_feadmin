import{g as U}from"./ak.0e5989b9.js";import{i as k,D as $,C as x}from"./CustomCard.760adf7c.js";import{d as g,r as p,s as M,k as C,_ as F,o as B,c as E,b as m,e as _,w as h,g as n,t as D,F as v,f as S,n as f,v as A,x as y,i as L,y as j,j as R}from"./index.e91e103b.js";import{u as w}from"./useBasisStoreLogic.97bc9d93.js";import{h as O}from"./moment.9709ab41.js";import{s as N,a as V,b as W,c as G}from"./study.dcedeffb.js";import{u as P,r as H}from"./school.3ef3ba0b.js";import"./user.86ef8360.js";const Y=g({name:"StackedColumnChart",props:{echartsData:{type:Object,default:()=>null}},setup(e){const u=p(e.echartsData);M(()=>{const a=document.querySelector("#stackedColumnChart");let c=k(a),t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:-4},grid:{top:"10%",left:"3%",right:"4%",bottom:"6%",containLabel:!0},xAxis:[{type:"category",data:u.value.dateList}],yAxis:[{type:"value",axisLabel:{formatter:function(o){return Math.floor(o)/1e3+"k"}}}],series:[{name:"\u6BCF\u6708\u4E00\u8BFE",type:"bar",barWidth:16,stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#0066FF"},data:u.value.dataList?u.value.dataList.monthy:[]},{name:"\u6BCF\u5468\u4E00\u7EC3",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#00B2FF"},data:u.value.dataList?u.value.dataList.weekly:[]},{name:"\u6BCF\u65E5\u4E00\u5B66",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#81E2FF",borderRadius:[2,2,0,0]},data:u.value.dataList?u.value.dataList.daily:[]}]};C(()=>{u.value=e.echartsData,t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:-4},grid:{top:"10%",left:"3%",right:"0%",bottom:"6%",containLabel:!0},xAxis:[{type:"category",data:u.value.dateList}],yAxis:[{type:"value",axisLabel:{formatter:function(o){return Math.floor(o)/1e3+"k"}}}],series:[{name:"\u6BCF\u6708\u4E00\u8BFE",type:"bar",barWidth:16,stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#0066FF"},data:u.value.dataList?u.value.dataList.monthy:[]},{name:"\u6BCF\u5468\u4E00\u7EC3",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#00B2FF"},data:u.value.dataList?u.value.dataList.weekly:[]},{name:"\u6BCF\u65E5\u4E00\u5B66",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#81E2FF",borderRadius:[2,2,0,0]},data:u.value.dataList?u.value.dataList.daily:[]}]},c=k(a),t&&c.setOption(t)}),t&&c.setOption(t)})}});const K={id:"stackedColumnChart",class:"stacked-column-chart-container"};function X(e,u,a,c,t,o){return B(),E("div",K)}const z=F(Y,[["render",X],["__scopeId","data-v-24d715ee"]]),J=g({name:"LearningSituationPanel",components:{StackedColumnChart:z},props:{username:{type:String,default:"Admin"},listData:{type:Object,default:()=>null},echartsData:{type:Object,default:()=>null}},setup(e){const u=p(e.username),a=p(e.listData),c=p(e.echartsData),t=p({daily:{icon:"hours_icon_img.png",title:"\u6BCF\u65E5\u4EFB\u52A1\u5B8C\u6210\u4EBA\u6570",total:324,tagLabel:"\u8F83\u6628\u5929",tag:"+100"},weekly:{icon:"week_calendar_icon_img.png",title:"\u6BCF\u5468\u4EFB\u52A1\u5B8C\u6210\u4EBA\u6570",total:120,tagLabel:"\u8F83\u4E0A\u5468",tag:"-20"},monthy:{icon:"month_calendar_icon_img.png",title:"\u6BCF\u6708\u4EFB\u52A1\u5B8C\u6210\u4EBA\u6570",total:12,tagLabel:"\u8F83\u6628\u5929",tag:"+2"}}),o=(s,i)=>{const r=i-s;return r>0?`+${r}`:r};return C(()=>{a.value=e.listData,a.value&&(t.value.daily.total=a.value.daily,t.value.daily.tag=o(a.value.yesterday,a.value.daily),t.value.weekly.total=a.value.weekly,t.value.weekly.tag=o(a.value.last_weekly,a.value.weekly),t.value.monthy.total=a.value.monthy,t.value.monthy.tag=o(a.value.last_monthy,a.value.monthy)),c.value=e.echartsData}),{getImageUrl:U,completeNumberRef:t,usernameRef:u,echartsDataRef:c}}});const Z=e=>(A("data-v-346b4e41"),e=e(),y(),e),q={class:"learning-situation-panel-container"},Q={class:"card-content-box"},ee={class:"user-info-box flex-start"},ue={class:"complete-number-ul flex-start"},te={class:"complete-number-icon-box"},ae={class:"complete-number-content-box"},ne={class:"complete-number-title-style"},se={class:"complete-number-box flex-start align-end"},oe={class:"complete-number-total-style"},ie={class:"learning-situation-box"},ce=Z(()=>n("p",{class:"learning-situation-title-style"},"\u5B66\u4E60\u60C5\u51B5\u770B\u677F",-1));function re(e,u,a,c,t,o){const s=m("el-image"),i=m("StackedColumnChart"),r=m("el-card");return B(),E("div",q,[_(r,{class:"el-card-style","body-style":{padding:"0px"}},{default:h(()=>[n("div",Q,[n("header",null,[n("div",ee,[_(s,{class:"welcome-icon-style",src:e.getImageUrl("welcome_icon_img.png")},null,8,["src"]),n("p",null,"\u6B22\u8FCE\u56DE\u6765\uFF0C"+D(e.usernameRef),1)])]),n("article",null,[n("ul",ue,[(B(!0),E(v,null,S(e.completeNumberRef,(l,d)=>(B(),E("li",{key:d,class:"complete-number-li flex-start"},[n("div",te,[_(s,{class:"complete-number-icon-style",src:e.getImageUrl(l.icon)},null,8,["src"])]),n("div",ae,[n("p",ne,D(l.title),1),n("div",se,[n("p",oe,D(l.total),1),n("p",{class:f(["complete-number-tag-style",{"reduce-tag-style":parseInt(l.tag)<0,"increase-tag-style":parseInt(l.tag)>=0}])},D(l.tagLabel)+D(l.tag),3)])])]))),128))]),n("div",ie,[ce,_(i,{echartsData:e.echartsDataRef},null,8,["echartsData"])])])])]),_:1})])}const _e=F(J,[["render",re],["__scopeId","data-v-346b4e41"]]),le=g({name:"WarningPanel",setup(e){return{getImageUrl:U,tableData:[{name:"\u5F6D\u6446\u9C7C"},{name:"\u5F6D\u6446\u9C7C"},{name:"\u5F6D\u6446\u9C7C"},{name:"\u5F6D\u6446\u9C7C"}]}}});const I=e=>(A("data-v-98134ea5"),e=e(),y(),e),me={class:"warning-panel-container"},pe={class:"warning-panel-title-style flex-start"},de=I(()=>n("p",{class:"warning-title-style"},"\u9884\u8B66\u5B66\u5458",-1)),Be=I(()=>n("p",{class:"warning-title-number-style"},"(56)",-1)),Ee={class:"warning-panel-table-box"},he={class:"flex-start"},De={class:"warning-panel-name-style"},Fe=I(()=>n("div",{class:"warning-panel-tag-style"},"\u4E25\u91CD\u9884\u8B66",-1)),ge=L("\u901A\u77E5\u6559\u5E08");function Ce(e,u,a,c,t,o){const s=m("el-image"),i=m("el-table-column"),r=m("el-button"),l=m("el-table"),d=m("el-card");return B(),E("div",me,[_(d,{class:"el-card-style","body-style":{padding:0}},{default:h(()=>[n("div",pe,[_(s,{class:"warning-panel-title-icon-style",src:e.getImageUrl("warning_icon_img.png")},null,8,["src"]),de,Be]),n("div",Ee,[_(l,{data:e.tableData,stripe:"",style:{width:"100%"}},{default:h(()=>[_(i,{prop:"name",label:"\u59D3\u540D"},{default:h(b=>[n("div",he,[n("div",De,D(b.row.name),1),Fe])]),_:1}),_(i,{label:"\u64CD\u4F5C",align:"center"},{default:h(()=>[_(r,{type:"primary",link:""},{default:h(()=>[ge]),_:1})]),_:1})]),_:1},8,["data"])])]),_:1})])}const Ae=F(le,[["render",Ce],["__scopeId","data-v-98134ea5"]]),ye=g({name:"HotPanel",props:{tableData:{type:[Array,Object],default:()=>[]}},setup(e,u){const a=p([{label:"\u6BCF\u65E5",val:"daily"},{label:"\u6BCF\u5468",val:"weekly"},{label:"\u6BCF\u6708",val:"monthy"}]),c=p({}),t=r=>{c.value=r,u.emit("change",c.value)},o=p(),s={color:"#606266","background-color":"#F2F3F8"};return C(()=>{o.value=e.tableData}),t(a.value[0]),{tabsListRef:a,activeTabsRef:c,changeTabs:t,tableDataRef:o,headerRowStyle:s,handleTaleTypeView:r=>{switch(r){case"daily":return"\u6BCF\u65E5\u4E00\u5B66";case"weekly":return"\u6BCF\u5468\u4E00\u505A";case"monthy":return"\u6BCF\u6708\u4E00\u8BFE"}}}}});const be=e=>(A("data-v-609dbfaa"),e=e(),y(),e),ve={class:"hot-panel-container"},Se={class:"flex"},fe=be(()=>n("p",{class:"title-style"},"\u70ED\u95E8\u5185\u5BB9",-1)),Pe=L("\u67E5\u770B\u66F4\u591A"),Re={class:"custom-tabs-ul flex-start"},ke=["onClick"];function Le(e,u,a,c,t,o){const s=m("el-button"),i=m("el-table-column"),r=m("el-table"),l=m("el-card");return B(),E("div",ve,[_(l,{class:"el-card-style","body-style":{padding:"0px"}},{default:h(()=>[n("header",Se,[fe,_(s,{type:"primary",link:""},{default:h(()=>[Pe]),_:1})]),n("article",null,[n("ul",Re,[(B(!0),E(v,null,S(e.tabsListRef,(d,b)=>(B(),E("li",{key:b,class:f(["custom-tabs-li",{"custom-tabs-li-active":e.activeTabsRef===d}]),onClick:Bu=>e.changeTabs(d)},D(d.label),11,ke))),128))]),_(r,{class:"el-table-style",data:e.tableData,style:{width:"100%"},"header-cell-style":e.headerRowStyle,border:""},{default:h(()=>[_(i,{label:"\u6392\u540D",width:"60",type:"index",align:"center"}),_(i,{prop:"title",label:"\u5185\u5BB9\u6807\u9898"}),_(i,{prop:"type",label:"\u7C7B\u522B",align:"center",width:"100"},{default:h(d=>[L(D(e.handleTaleTypeView(d.row.type)),1)]),_:1}),_(i,{prop:"count",label:"\u5B8C\u6210\u91CF",align:"center",width:"100"})]),_:1},8,["data","header-cell-style"])])]),_:1})])}const Ie=F(ye,[["render",Le],["__scopeId","data-v-609dbfaa"]]),we=g({name:"ContentCategoryPanel",props:{echartsData:{type:Object,default:()=>({})}},components:{DoughnutChart:$},setup(e){const u=p(e.echartsData);return C(()=>{console.log("props.echartsData :>> ",e.echartsData),u.value=[{name:"\u6BCF\u65E5\u4E00\u5B66",value:e.echartsData.daily},{name:"\u6BCF\u5468\u4E00\u7EC3",value:e.echartsData.weekly},{name:"\u6BCF\u6708\u4E00\u8BFE",value:e.echartsData.monthy}]}),{echartsDataRef:u}}});const Oe=e=>(A("data-v-86576807"),e=e(),y(),e),Te={class:"content-category-panel-container"},Ue=Oe(()=>n("header",null,[n("div",{class:"title-style"},"\u5185\u5BB9\u7C7B\u522B\u5360\u6BD4")],-1));function Me(e,u,a,c,t,o){const s=m("DoughnutChart"),i=m("el-card");return B(),E("div",Te,[_(i,{class:"el-card-style","body-style":{padding:"0px"}},{default:h(()=>[Ue,_(s,{echartsData:e.echartsDataRef},null,8,["echartsData"])]),_:1})])}const $e=F(we,[["render",Me],["__scopeId","data-v-86576807"]]),xe=g({name:"BasicBarChart",props:{echartsData:{type:Object,default:()=>({})}},setup(e){const u=p([0,0,0]);return M(()=>{const a=document.getElementById("basicBarChart"),c=k(a),t={xAxis:{type:"category",data:["\u5206\u4EAB\u91CF","\u8BC4\u8BBA\u91CF","\u70B9\u8D5E\u91CF"]},yAxis:{type:"value",axisLabel:{formatter:o=>Math.floor(o)/1e3+"k"}},grid:{left:"15%"},series:[{data:u.value,type:"bar",barWidth:"8",itemStyle:{borderRadius:4,color:"#0066FF"}}]};t&&c.setOption(t),C(()=>{u.value[0]=e.echartsData.share,u.value[1]=e.echartsData.comment,u.value[2]=e.echartsData.like,t&&c.setOption(t)})}),{}}});const je={id:"basicBarChart",class:"basic-bar-chart-container"};function Ne(e,u,a,c,t,o){return B(),E("div",je)}const Ve=F(xe,[["render",Ne],["__scopeId","data-v-08c33d5d"]]),We=g({name:"DailyInteractionCountPanel",props:{echartsData:{type:Object,default:()=>({})}},components:{BasicBarChart:Ve},setup(e){const u=p(e.echartsData);return C(()=>{u.value=e.echartsData}),{ecartsDataRef:u}}});const Ge=e=>(A("data-v-8ec87cb9"),e=e(),y(),e),He={class:"daily-interaction-count-panel-container"},Ye=Ge(()=>n("header",null,[n("p",{class:"title-style"},"\u4ECA\u65E5\u8F6C\u8BC4\u8D5E\u7EDF\u8BA1")],-1));function Ke(e,u,a,c,t,o){const s=m("BasicBarChart"),i=m("el-card");return B(),E("div",He,[_(i,{class:"el-card-style","body-style":{padding:"0px"}},{default:h(()=>[Ye,n("article",null,[_(s,{echartsData:e.ecartsDataRef},null,8,["echartsData"])])]),_:1})])}const Xe=F(We,[["render",Ke],["__scopeId","data-v-8ec87cb9"]]),T=[{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E00\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u826F\u597D\u7684\u5B66\u4E60\u4E60\u60EF"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u52C7\u4E8E\u63A2\u7D22\u7684\u7CBE\u795E"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5BB6\u957F\u5982\u4F55\u4E0E\u8001\u5E08\u8FDB\u884C\u6709\u6548\u6C9F\u901A"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u521B\u8BBE\u548C\u8C10\u7684\u5BB6\u5EAD\u73AF\u5883"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u4E3A\u4F55\u9700\u8981\u4EE5\u8EAB\u4F5C\u5219"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u5B5D\u4EB2\u5C0A\u5E08\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5728\u5BB6\u5EAD\u4E2D\u5B9E\u8DF5\u4F4E\u78B3\u751F\u6D3B"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u6297\u632B\u6298\u80FD\u529B"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u4E0E\u4E0D\u540C\u7684\u4EBA\u4EA4\u5F80"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u6C72\u53D6\u4E2D\u534E\u4F20\u7EDF\u7F8E\u5FB7"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u751F\u6D3B\u81EA\u7406\u80FD\u529B"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E8C\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u7231\u4E0A\u9605\u8BFB"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u5174\u8DA3\u7279\u957F"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5BB6\u957F\u5982\u4F55\u8BA9\u5B69\u5B50\u9002\u5E94\u4E0D\u540C\u8001\u5E08"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u6784\u5EFA\u826F\u597D\u7684\u5BB6\u5EAD\u5173\u7CFB"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u5B9E\u73B0\u4E0E\u5B69\u5B50\u540C\u6B65\u6210\u957F"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u5584\u4E8E\u611F\u6069\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u4E0E\u5927\u81EA\u7136\u548C\u8C10\u5171\u751F"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u57F9\u517B\u5B69\u5B50\u6027\u522B\u5E73\u8861\u7684\u89C2\u5FF5"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5728\u96C6\u4F53\u4E2D\u9075\u5B88\u89C4\u5219"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u4EE5\u4EC1\u4EBA\u5FD7\u58EB\u4E3A\u699C\u6837"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u81EA\u6211\u4FDD\u62A4"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E09\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u638C\u63E1\u6709\u6548\u7684\u5B66\u4E60\u65B9\u6CD5"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u6570\u5B57\u5A92\u4ECB\u7D20\u517B"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u4E3B\u52A8\u4E0E\u8001\u5E08\u4EA4\u6D41"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5BB6\u5EAD\u4E2D\u5982\u4F55\u8FDB\u884C\u6709\u6548\u5206\u5DE5"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u548C\u5B69\u5B50\u6709\u6548\u6C9F\u901A"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u5BCC\u6709\u8D23\u4EFB\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u4E3A\u73AF\u4FDD\u53D1\u6325\u521B\u60F3"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u638C\u63A7\u81EA\u5DF1\u7684\u60C5\u7EEA"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u89E3\u51B3\u51B2\u7A81\u7684\u80FD\u529B"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u6FC0\u53D1\u5B69\u5B50\u7684\u7231\u56FD\u60C5\u611F"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u81EA\u6211\u7BA1\u7406\u80FD\u529B"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u56DB\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u6FC0\u53D1\u5B69\u5B50\u5185\u5728\u5B66\u4E60\u52A8\u529B"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u505A\u4E8B\u6709\u8BA1\u5212\u7684\u4E60\u60EF"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5982\u4F55\u628A\u63E1\u5BB6\u6821\u6C9F\u901A\u7684\u57FA\u672C\u539F"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u786E\u7ACB\u9002\u5B9C\u5B69\u5B50\u7684\u6559\u517B\u65B9\u5F0F"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u7BA1\u63A7\u597D\u81EA\u5DF1\u7684\u60C5\u7EEA"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u4E50\u4E8E\u52A9\u4EBA\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u5EFA\u7ACB\u5065\u5EB7\u751F\u6D3B\u7684\u4E60\u60EF"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u81EA\u4FE1\u5FC3"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u6B63\u786E\u4EA4\u53CB"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u7231\u4E0A\u4F18\u79C0\u4F20\u7EDF\u6587\u5316"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u6559\u80B2\u5B69\u5B50\u5B66\u4F1A\u5E94\u5BF9\u7F51\u7EDC\u5B89\u5168\u98CE\u9669"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E94\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u6709\u6548\u7BA1\u7406\u65F6\u95F4"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u8D22\u5546\u89C2\u5FF5"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5982\u4F55\u5316\u89E3\u5BB6\u6821\u6C9F\u901A\u5371\u673A"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u5728\u5BB6\u5EAD\u4E2D\u6E17\u900F\u4E3A\u4EBA\u5904\u4E8B\u7684\u6559\u80B2"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u5EFA\u7ACB\u5BB6\u5EAD\u6559\u80B2\u6218\u7565\u601D\u7EF4"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u660E\u793C\u8BDA\u4FE1\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u5EFA\u7ACB\u70ED\u7231\u8FD0\u52A8\u7684\u4E60\u60EF"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5BB6\u957F\u5BF9\u5B69\u5B50\u8FDB\u884C\u6027\u5065\u5EB7\u6559\u80B2"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u9762\u5BF9\u662F\u975E\u4E0E\u8BEF\u89E3"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u4E86\u89E3\u5BB6\u4E61\u4E4B\u7F8E"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u638C\u63E1\u81EA\u6551\u77E5\u8BC6\u4E0E\u6280\u80FD"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u516D\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u5E94\u5BF9\u5B66\u4E60\u538B\u529B"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u9075\u7EAA\u5B88\u6CD5\u7684\u610F\u8BC6"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5F15\u5BFC\u5B69\u5B50\u89E3\u51B3\u4E0E\u8001\u5E08\u4E4B\u95F4\u7684\u8BEF\u4F1A\u77DB\u76FE"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u4F20\u627F\u53D1\u626C\u5BB6\u98CE\u5BB6\u8BAD"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u5EA6\u8FC7\u5347\u5B66\u8854\u63A5"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u52E4\u4FED\u8282\u7EA6\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u66F4\u61C2\u5F97\u73CD\u60DC\u751F\u547D"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u6B63\u786E\u8BC4\u4EF7\u81EA\u5DF1"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5BB6\u957F\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u4E0E\u5F02\u6027\u4EA4\u5F80"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u6811\u7ACB\u62A5\u56FD\u4E4B\u5FD7"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u8FDB\u884C\u516C\u76CA\u5B9E\u8DF5"}]}],ze=g({name:"MonthyContentFrame",components:{CustomCard:x},setup(){const e=p([{name:"\u4E00\u5E74\u7EA7",id:1},{name:"\u4E8C\u5E74\u7EA7",id:2},{name:"\u4E09\u5E74\u7EA7",id:3},{name:"\u56DB\u5E74\u7EA7",id:4},{name:"\u4E94\u5E74\u7EA7",id:5},{name:"\u516D\u5E74\u7EA7",id:6}]),u=p(1),a=r=>{u.value=r.id},c=p([{name:"\u4E0A\u5B66\u671F",id:1},{name:"\u4E0B\u5B66\u671F",id:2}]),t=p(1),o=r=>{t.value=r.id},s=p(),i=(r,l)=>{if(console.log("activeGrade :>> ",r),console.log("activeSemester :>> ",l),s.value=[],l===1){s.value=T[r-1].before;return}s.value=T[r-1].after};return C(()=>{i(u.value,t.value)}),{tabsListGradeRef:e,activeTabsGradeRef:u,changeGradeTabs:a,tabsListSemesterRef:c,activeTabsSemesterRef:t,changeSemesterTabs:o,tableDataRef:s}}});const Je={class:"monthy-content-frame-container"},Ze={class:"custom-tabs-ul flex-start"},qe=["onClick"],Qe={class:"flex align-start"},eu={class:"tabs-semester-ul"},uu=["onClick"],tu={class:"table-box"};function au(e,u,a,c,t,o){const s=m("el-table-column"),i=m("el-table"),r=m("CustomCard");return B(),E("div",Je,[_(r,{title:"\u6BCF\u6708\u4E00\u8BFE\u5185\u5BB9\u6846\u67B6"},{default:h(()=>[n("header",null,[n("ul",Ze,[(B(!0),E(v,null,S(e.tabsListGradeRef,(l,d)=>(B(),E("li",{key:d,class:f(["custom-tabs-li",{"custom-tabs-li-active":e.activeTabsGradeRef===l.id}]),onClick:b=>e.changeGradeTabs(l)},D(l.name),11,qe))),128))])]),n("article",Qe,[n("ul",eu,[(B(!0),E(v,null,S(e.tabsListSemesterRef,l=>(B(),E("li",{class:f(["tabs-semester-li",{"tabs-semester-li-active":e.activeTabsSemesterRef===l.id}]),key:l.id,onClick:d=>e.changeSemesterTabs(l)},D(l.name),11,uu))),128))]),n("div",tu,[_(i,{data:e.tableDataRef,style:{width:"100%"}},{default:h(()=>[_(s,{prop:"month",label:"\u6708\u4EFD",width:"180"}),_(s,{prop:"theme",label:"\u4E3B\u9898\u6A21\u5757",width:"180"}),_(s,{prop:"name",label:"\u8BFE\u7A0B\u540D\u79F0"})]),_:1},8,["data"])])])]),_:1})])}const nu=F(ze,[["render",au],["__scopeId","data-v-785309b7"]]);function su(){const e=p({}),u=p({}),a=o=>{const s=[],i={Daily:[],weekly:[],monthy:[]};o.forEach(d=>{switch(d.dates&&s.push(d.dates),d.type){case"daily":i.Daily.push(d.count);break;case"weekly":i.weekly.push(d.count);break;case"monthy":i.monthy.push(d.count);break}});const r=new Set(s);return{dateList:Array.from(r),dataList:i}},c=async()=>{const s={school_id:P().getSchoolInfo.id},i=await N(s);e.value=i},t=async()=>{const o=O().subtract(7,"days").format("YYYY-MM-DD HH:mm:ss"),s=O().format("YYYY-MM-DD HH:mm:ss"),i=P().getSchoolInfo,r={start_date:o,end_date:s,school_id:i.id};return await V(r)};return j(async()=>{c();const o=await t();Array.isArray(o)&&(u.value=a(o))}),{studyDashboardCompleteCountRef:e,studyDashboardCompleteListRef:u}}function ou(){const e=p({}),u=p(),a=t=>{e.value=t.val},c=async t=>{const o=P().getSchoolInfo,s={limit:"5",page:"1",type:t,school_id:o.id},i=await W(s);u.value=i.data};return C(()=>{const t=e.value;typeof t=="string"&&c(t)}),{hotConentList:u,changeTabs:a}}function iu(){const e=p();return(async()=>{const c=await G({});e.value=c})(),{studyDashboardCountRef:e}}const cu=async e=>await H.post("https://api.ps.familyeducation.org.cn/v1/rate/dashboard/today",e);function ru(){const e=p({});return(async()=>{const c={school_id:P().getSchoolInfo.id},t=await cu(c);e.value=t})(),{rateDashboardTodayRef:e}}const _u={name:"workbenchView",components:{LearningSituationPanel:_e,WarningPanel:Ae,HotPanel:Ie,ContentCategoryPanel:$e,DailyInteractionCountPanel:Xe,MonthyContentFrame:nu},setup(){const e=p(-1),a=w().schoolInfoListRef.value;return Array.isArray(a)&&a.length>0&&(e.value=a[0].id),{...w(),...su(),...ou(),...iu(),...ru()}}};const lu={class:"workbench-view-container"},mu={class:"flex align-start"},pu={class:"row-two-style flex"};function du(e,u,a,c,t,o){const s=m("LearningSituationPanel");m("WarningPanel");const i=m("HotPanel");m("ContentCategoryPanel"),m("DailyInteractionCountPanel");const r=m("MonthyContentFrame");return B(),E("div",lu,[n("div",mu,[_(s,{username:e.schoolUserInfoRef.username,listData:e.studyDashboardCompleteCountRef,echartsData:e.studyDashboardCompleteListRef},null,8,["username","listData","echartsData"]),R("",!0)]),n("div",pu,[_(i,{onChange:e.changeTabs,tableData:e.hotConentList},null,8,["onChange","tableData"]),R("",!0),R("",!0),_(r)])])}const bu=F(_u,[["render",du],["__scopeId","data-v-8d293fc4"]]);export{bu as default};
