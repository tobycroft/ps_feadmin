import{g as M}from"./ak.f12ca38e.js";import{i as I,D as U,C as W}from"./CustomCard.2b75b74d.js";import{d as g,r as d,v as G,k as D,_ as h,o as C,c as F,b as _,e as m,w as B,g as n,t as E,F as y,f,n as v,x as A,y as P,i as w,z as $,j as R}from"./index.dee1b207.js";import{u as L}from"./useBasisStoreLogic.89dcf505.js";import{h as T}from"./moment.9709ab41.js";import{s as x,a as N,b as V,c as H}from"./study.1fd87188.js";import{u as S,r as Y}from"./school.8308b26b.js";import"./user.c5a56920.js";const j=g({name:"StackedColumnChart",props:{echartsData:{type:Object,default:()=>null}},setup(e){const u=d(e.echartsData);G(()=>{const t=document.querySelector("#stackedColumnChart");let r=I(t),a={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:-4},grid:{top:"10%",left:"3%",right:"4%",bottom:"6%",containLabel:!0},xAxis:[{type:"category",data:u.value.dateList}],yAxis:[{type:"value",axisLabel:{formatter:function(o){return Math.floor(o)/1e3+"k"}}}],series:[{name:"\u6BCF\u6708\u4E00\u8BFE",type:"bar",barWidth:16,stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#0066FF"},data:u.value.dataList?u.value.dataList.monthy:[]},{name:"\u6BCF\u5468\u4E00\u7EC3",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#00B2FF"},data:u.value.dataList?u.value.dataList.weekly:[]},{name:"\u6BCF\u65E5\u4E00\u5B66",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#81E2FF",borderRadius:[2,2,0,0]},data:u.value.dataList?u.value.dataList.daily:[]}]};D(()=>{u.value=e.echartsData,a={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:-4},grid:{top:"10%",left:"3%",right:"0%",bottom:"6%",containLabel:!0},xAxis:[{type:"category",data:u.value.dateList}],yAxis:[{type:"value",axisLabel:{formatter:function(o){return Math.floor(o)/1e3+"k"}}}],series:[{name:"\u6BCF\u6708\u4E00\u8BFE",type:"bar",barWidth:16,stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#0066FF"},data:u.value.dataList?u.value.dataList.monthy:[]},{name:"\u6BCF\u5468\u4E00\u7EC3",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#00B2FF"},data:u.value.dataList?u.value.dataList.weekly:[]},{name:"\u6BCF\u65E5\u4E00\u5B66",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#81E2FF",borderRadius:[2,2,0,0]},data:u.value.dataList?u.value.dataList.daily:[]}]},r=I(t),a&&r.setOption(a)}),a&&r.setOption(a)})}});const K={id:"stackedColumnChart",class:"stacked-column-chart-container"};function X(e,u,t,r,a,o){return C(),F("div",K)}const Q=h(j,[["render",X],["__scopeId","data-v-24d715ee"]]),z=g({name:"LearningSituationPanel",components:{StackedColumnChart:Q},props:{username:{type:String,default:"Admin"},listData:{type:Object,default:()=>null},echartsData:{type:Object,default:()=>null}},setup(e){const u=d(e.username),t=d(e.listData),r=d(e.echartsData),a=d({daily:{icon:"hours_icon_img.png",title:"\u6BCF\u65E5\u4EFB\u52A1\u5B8C\u6210\u4EBA\u6570",total:324,tagLabel:"\u8F83\u6628\u5929",tag:"+100"},weekly:{icon:"week_calendar_icon_img.png",title:"\u6BCF\u5468\u4EFB\u52A1\u5B8C\u6210\u4EBA\u6570",total:120,tagLabel:"\u8F83\u4E0A\u5468",tag:"-20"},monthy:{icon:"month_calendar_icon_img.png",title:"\u6BCF\u6708\u4EFB\u52A1\u5B8C\u6210\u4EBA\u6570",total:12,tagLabel:"\u8F83\u6628\u5929",tag:"+2"}}),o=(s,i)=>{const l=i-s;return l>0?`+${l}`:l};return D(()=>{t.value=e.listData,t.value&&(a.value.daily.total=t.value.daily,a.value.daily.tag=o(t.value.yesterday,t.value.daily),a.value.weekly.total=t.value.weekly,a.value.weekly.tag=o(t.value.last_weekly,t.value.weekly),a.value.monthy.total=t.value.monthy,a.value.monthy.tag=o(t.value.last_monthy,t.value.monthy)),r.value=e.echartsData}),{getImageUrl:M,completeNumberRef:a,usernameRef:u,echartsDataRef:r}}});const J=e=>(A("data-v-346b4e41"),e=e(),P(),e),q={class:"learning-situation-panel-container"},Z={class:"card-content-box"},ee={class:"user-info-box flex-start"},ue={class:"complete-number-ul flex-start"},ae={class:"complete-number-icon-box"},te={class:"complete-number-content-box"},ne={class:"complete-number-title-style"},se={class:"complete-number-box flex-start align-end"},oe={class:"complete-number-total-style"},ie={class:"learning-situation-box"},re=J(()=>n("p",{class:"learning-situation-title-style"},"\u5B66\u4E60\u60C5\u51B5\u770B\u677F",-1));function le(e,u,t,r,a,o){const s=_("el-image"),i=_("StackedColumnChart"),l=_("el-card");return C(),F("div",q,[m(l,{class:"el-card-style","body-style":{padding:"0px"}},{default:B(()=>[n("div",Z,[n("header",null,[n("div",ee,[m(s,{class:"welcome-icon-style",src:e.getImageUrl("welcome_icon_img.png")},null,8,["src"]),n("p",null,"\u6B22\u8FCE\u56DE\u6765\uFF0C"+E(e.usernameRef),1)])]),n("article",null,[n("ul",ue,[(C(!0),F(y,null,f(e.completeNumberRef,(c,p)=>(C(),F("li",{key:p,class:"complete-number-li flex-start"},[n("div",ae,[m(s,{class:"complete-number-icon-style",src:e.getImageUrl(c.icon)},null,8,["src"])]),n("div",te,[n("p",ne,E(c.title),1),n("div",se,[n("p",oe,E(c.total),1),n("p",{class:v(["complete-number-tag-style",{"reduce-tag-style":parseInt(c.tag)<0,"increase-tag-style":parseInt(c.tag)>=0}])},E(c.tagLabel)+E(c.tag),3)])])]))),128))]),n("div",ie,[re,m(i,{echartsData:e.echartsDataRef},null,8,["echartsData"])])])])]),_:1})])}const me=h(z,[["render",le],["__scopeId","data-v-346b4e41"]]),ce=g({name:"WarningPanel",setup(e){return{getImageUrl:M,tableData:[{name:"\u5F6D\u6446\u9C7C"},{name:"\u5F6D\u6446\u9C7C"},{name:"\u5F6D\u6446\u9C7C"},{name:"\u5F6D\u6446\u9C7C"}]}}});const k=e=>(A("data-v-98134ea5"),e=e(),P(),e),_e={class:"warning-panel-container"},de={class:"warning-panel-title-style flex-start"},pe=k(()=>n("p",{class:"warning-title-style"},"\u9884\u8B66\u5B66\u5458",-1)),Ce=k(()=>n("p",{class:"warning-title-number-style"},"(56)",-1)),Fe={class:"warning-panel-table-box"},Be={class:"flex-start"},Ee={class:"warning-panel-name-style"},he=k(()=>n("div",{class:"warning-panel-tag-style"},"\u4E25\u91CD\u9884\u8B66",-1)),ge=w("\u901A\u77E5\u6559\u5E08");function De(e,u,t,r,a,o){const s=_("el-image"),i=_("el-table-column"),l=_("el-button"),c=_("el-table"),p=_("el-card");return C(),F("div",_e,[m(p,{class:"el-card-style","body-style":{padding:0}},{default:B(()=>[n("div",de,[m(s,{class:"warning-panel-title-icon-style",src:e.getImageUrl("warning_icon_img.png")},null,8,["src"]),pe,Ce]),n("div",Fe,[m(c,{data:e.tableData,stripe:"",style:{width:"100%"}},{default:B(()=>[m(i,{prop:"name",label:"\u59D3\u540D"},{default:B(b=>[n("div",Be,[n("div",Ee,E(b.row.name),1),he])]),_:1}),m(i,{label:"\u64CD\u4F5C",align:"center"},{default:B(()=>[m(l,{type:"primary",link:""},{default:B(()=>[ge]),_:1})]),_:1})]),_:1},8,["data"])])]),_:1})])}const Ae=h(ce,[["render",De],["__scopeId","data-v-98134ea5"]]),Pe=g({name:"HotPanel",props:{tableData:{type:[Array,Object],default:()=>[]}},setup(e,u){const t=d([{label:"\u6BCF\u65E5",val:"daily"},{label:"\u6BCF\u5468",val:"weekly"},{label:"\u6BCF\u6708",val:"monthy"}]),r=d({}),a=l=>{r.value=l,u.emit("change",r.value)},o=d(),s={color:"#606266","background-color":"#F2F3F8"};return D(()=>{o.value=e.tableData}),a(t.value[0]),{tabsListRef:t,activeTabsRef:r,changeTabs:a,tableDataRef:o,headerRowStyle:s,handleTaleTypeView:l=>{switch(l){case"daily":return"\u6BCF\u65E5\u4E00\u5B66";case"weekly":return"\u6BCF\u5468\u4E00\u505A";case"monthy":return"\u6BCF\u6708\u4E00\u8BFE"}}}}});const be=e=>(A("data-v-609dbfaa"),e=e(),P(),e),ye={class:"hot-panel-container"},fe={class:"flex"},ve=be(()=>n("p",{class:"title-style"},"\u70ED\u95E8\u5185\u5BB9",-1)),Se=w("\u67E5\u770B\u66F4\u591A"),Re={class:"custom-tabs-ul flex-start"},Ie=["onClick"];function we(e,u,t,r,a,o){const s=_("el-button"),i=_("el-table-column"),l=_("el-table"),c=_("el-card");return C(),F("div",ye,[m(c,{class:"el-card-style","body-style":{padding:"0px"}},{default:B(()=>[n("header",fe,[ve,m(s,{type:"primary",link:""},{default:B(()=>[Se]),_:1})]),n("article",null,[n("ul",Re,[(C(!0),F(y,null,f(e.tabsListRef,(p,b)=>(C(),F("li",{key:b,class:v(["custom-tabs-li",{"custom-tabs-li-active":e.activeTabsRef===p}]),onClick:Cu=>e.changeTabs(p)},E(p.label),11,Ie))),128))]),m(l,{class:"el-table-style",data:e.tableData,style:{width:"100%"},"header-cell-style":e.headerRowStyle,border:""},{default:B(()=>[m(i,{label:"\u6392\u540D",width:"60",type:"index",align:"center"}),m(i,{prop:"title",label:"\u5185\u5BB9\u6807\u9898"}),m(i,{prop:"type",label:"\u7C7B\u522B",align:"center",width:"100"},{default:B(p=>[w(E(e.handleTaleTypeView(p.row.type)),1)]),_:1}),m(i,{prop:"count",label:"\u5B8C\u6210\u91CF",align:"center",width:"100"})]),_:1},8,["data","header-cell-style"])])]),_:1})])}const ke=h(Pe,[["render",we],["__scopeId","data-v-609dbfaa"]]),Le=g({name:"ContentCategoryPanel",props:{echartsData:{type:Object,default:()=>({})}},components:{DoughnutChart:U},setup(e){const u=d(e.echartsData);return D(()=>{console.log("props.echartsData :>> ",e.echartsData),u.value=[{name:"\u6BCF\u65E5\u4E00\u5B66",value:e.echartsData.daily},{name:"\u6BCF\u5468\u4E00\u7EC3",value:e.echartsData.weekly},{name:"\u6BCF\u6708\u4E00\u8BFE",value:e.echartsData.monthy}]}),{echartsDataRef:u}}});const Te=e=>(A("data-v-86576807"),e=e(),P(),e),Oe={class:"content-category-panel-container"},Me=Te(()=>n("header",null,[n("div",{class:"title-style"},"\u5185\u5BB9\u7C7B\u522B\u5360\u6BD4")],-1));function Ge(e,u,t,r,a,o){const s=_("DoughnutChart"),i=_("el-card");return C(),F("div",Oe,[m(i,{class:"el-card-style","body-style":{padding:"0px"}},{default:B(()=>[Me,m(s,{echartsData:e.echartsDataRef},null,8,["echartsData"])]),_:1})])}const Ue=h(Le,[["render",Ge],["__scopeId","data-v-86576807"]]),We=g({name:"BasicBarChart",props:{echartsData:{type:Object,default:()=>({})}},setup(e){const u=d([0,0,0]);return G(()=>{const t=document.getElementById("basicBarChart"),r=I(t),a={xAxis:{type:"category",data:["\u5206\u4EAB\u91CF","\u8BC4\u8BBA\u91CF","\u70B9\u8D5E\u91CF"]},yAxis:{type:"value",axisLabel:{formatter:o=>Math.floor(o)/1e3+"k"}},grid:{left:"15%"},series:[{data:u.value,type:"bar",barWidth:"8",itemStyle:{borderRadius:4,color:"#0066FF"}}]};a&&r.setOption(a),D(()=>{u.value[0]=e.echartsData.share,u.value[1]=e.echartsData.comment,u.value[2]=e.echartsData.like,a&&r.setOption(a)})}),{}}});const $e={id:"basicBarChart",class:"basic-bar-chart-container"};function xe(e,u,t,r,a,o){return C(),F("div",$e)}const Ne=h(We,[["render",xe],["__scopeId","data-v-08c33d5d"]]),Ve=g({name:"DailyInteractionCountPanel",props:{echartsData:{type:Object,default:()=>({})}},components:{BasicBarChart:Ne},setup(e){const u=d(e.echartsData);return D(()=>{u.value=e.echartsData}),{ecartsDataRef:u}}});const He=e=>(A("data-v-8ec87cb9"),e=e(),P(),e),Ye={class:"daily-interaction-count-panel-container"},je=He(()=>n("header",null,[n("p",{class:"title-style"},"\u4ECA\u65E5\u8F6C\u8BC4\u8D5E\u7EDF\u8BA1")],-1));function Ke(e,u,t,r,a,o){const s=_("BasicBarChart"),i=_("el-card");return C(),F("div",Ye,[m(i,{class:"el-card-style","body-style":{padding:"0px"}},{default:B(()=>[je,n("article",null,[m(s,{echartsData:e.ecartsDataRef},null,8,["echartsData"])])]),_:1})])}const Xe=h(Ve,[["render",Ke],["__scopeId","data-v-8ec87cb9"]]),O=[{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E00\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u826F\u597D\u7684\u5B66\u4E60\u4E60\u60EF"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u52C7\u4E8E\u63A2\u7D22\u7684\u7CBE\u795E"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5BB6\u957F\u5982\u4F55\u4E0E\u8001\u5E08\u8FDB\u884C\u6709\u6548\u6C9F\u901A"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u521B\u8BBE\u548C\u8C10\u7684\u5BB6\u5EAD\u73AF\u5883"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u4E3A\u4F55\u9700\u8981\u4EE5\u8EAB\u4F5C\u5219"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u5B5D\u4EB2\u5C0A\u5E08\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5728\u5BB6\u5EAD\u4E2D\u5B9E\u8DF5\u4F4E\u78B3\u751F\u6D3B"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u6297\u632B\u6298\u80FD\u529B"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u4E0E\u4E0D\u540C\u7684\u4EBA\u4EA4\u5F80"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u6C72\u53D6\u4E2D\u534E\u4F20\u7EDF\u7F8E\u5FB7"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u751F\u6D3B\u81EA\u7406\u80FD\u529B"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E8C\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u7231\u4E0A\u9605\u8BFB"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u5174\u8DA3\u7279\u957F"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5BB6\u957F\u5982\u4F55\u8BA9\u5B69\u5B50\u9002\u5E94\u4E0D\u540C\u8001\u5E08"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u6784\u5EFA\u826F\u597D\u7684\u5BB6\u5EAD\u5173\u7CFB"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u5B9E\u73B0\u4E0E\u5B69\u5B50\u540C\u6B65\u6210\u957F"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u5584\u4E8E\u611F\u6069\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u4E0E\u5927\u81EA\u7136\u548C\u8C10\u5171\u751F"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u57F9\u517B\u5B69\u5B50\u6027\u522B\u5E73\u8861\u7684\u89C2\u5FF5"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5728\u96C6\u4F53\u4E2D\u9075\u5B88\u89C4\u5219"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u4EE5\u4EC1\u4EBA\u5FD7\u58EB\u4E3A\u699C\u6837"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u81EA\u6211\u4FDD\u62A4"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E09\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u638C\u63E1\u6709\u6548\u7684\u5B66\u4E60\u65B9\u6CD5"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u6570\u5B57\u5A92\u4ECB\u7D20\u517B"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u4E3B\u52A8\u4E0E\u8001\u5E08\u4EA4\u6D41"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5BB6\u5EAD\u4E2D\u5982\u4F55\u8FDB\u884C\u6709\u6548\u5206\u5DE5"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u548C\u5B69\u5B50\u6709\u6548\u6C9F\u901A"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u5BCC\u6709\u8D23\u4EFB\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u4E3A\u73AF\u4FDD\u53D1\u6325\u521B\u60F3"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u638C\u63A7\u81EA\u5DF1\u7684\u60C5\u7EEA"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u89E3\u51B3\u51B2\u7A81\u7684\u80FD\u529B"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u6FC0\u53D1\u5B69\u5B50\u7684\u7231\u56FD\u60C5\u611F"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u81EA\u6211\u7BA1\u7406\u80FD\u529B"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u56DB\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u6FC0\u53D1\u5B69\u5B50\u5185\u5728\u5B66\u4E60\u52A8\u529B"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u505A\u4E8B\u6709\u8BA1\u5212\u7684\u4E60\u60EF"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5982\u4F55\u628A\u63E1\u5BB6\u6821\u6C9F\u901A\u7684\u57FA\u672C\u539F"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u786E\u7ACB\u9002\u5B9C\u5B69\u5B50\u7684\u6559\u517B\u65B9\u5F0F"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u7BA1\u63A7\u597D\u81EA\u5DF1\u7684\u60C5\u7EEA"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u4E50\u4E8E\u52A9\u4EBA\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u5EFA\u7ACB\u5065\u5EB7\u751F\u6D3B\u7684\u4E60\u60EF"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u81EA\u4FE1\u5FC3"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u6B63\u786E\u4EA4\u53CB"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u7231\u4E0A\u4F18\u79C0\u4F20\u7EDF\u6587\u5316"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u6559\u80B2\u5B69\u5B50\u5B66\u4F1A\u5E94\u5BF9\u7F51\u7EDC\u5B89\u5168\u98CE\u9669"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u4E94\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u6709\u6548\u7BA1\u7406\u65F6\u95F4"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u7684\u8D22\u5546\u89C2\u5FF5"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5982\u4F55\u5316\u89E3\u5BB6\u6821\u6C9F\u901A\u5371\u673A"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u5728\u5BB6\u5EAD\u4E2D\u6E17\u900F\u4E3A\u4EBA\u5904\u4E8B\u7684\u6559\u80B2"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u5EFA\u7ACB\u5BB6\u5EAD\u6559\u80B2\u6218\u7565\u601D\u7EF4"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u660E\u793C\u8BDA\u4FE1\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u5EFA\u7ACB\u70ED\u7231\u8FD0\u52A8\u7684\u4E60\u60EF"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5BB6\u957F\u5BF9\u5B69\u5B50\u8FDB\u884C\u6027\u5065\u5EB7\u6559\u80B2"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u9762\u5BF9\u662F\u975E\u4E0E\u8BEF\u89E3"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u4E86\u89E3\u5BB6\u4E61\u4E4B\u7F8E"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u638C\u63E1\u81EA\u6551\u77E5\u8BC6\u4E0E\u6280\u80FD"}]},{before:[{month:"9\u6708",theme:"\u6210\u957F&\u89C4\u5F8B",name:"\u516D\u5E74\u7EA7\u5B69\u5B50\u7684\u6210\u957F\u7279\u70B9\u4E0E\u6559\u80B2\u5173\u952E"},{month:"10\u6708",theme:"\u5B66\u4E60&\u6307\u5BFC",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u5E94\u5BF9\u5B66\u4E60\u538B\u529B"},{month:"11\u6708",theme:"\u7EFC\u5408&\u7D20\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u9075\u7EAA\u5B88\u6CD5\u7684\u610F\u8BC6"},{month:"12\u6708",theme:"\u5BB6\u6821&\u534F\u4F5C",name:"\u5F15\u5BFC\u5B69\u5B50\u89E3\u51B3\u4E0E\u8001\u5E08\u4E4B\u95F4\u7684\u8BEF\u4F1A\u77DB\u76FE"},{month:"1\u6708",theme:"\u5BB6\u5EAD&\u5EFA\u8BBE",name:"\u5982\u4F55\u4F20\u627F\u53D1\u626C\u5BB6\u98CE\u5BB6\u8BAD"},{month:"2\u6708",theme:"\u5BB6\u957F&\u7D20\u517B",name:"\u5BB6\u957F\u5982\u4F55\u5E2E\u52A9\u5B69\u5B50\u5EA6\u8FC7\u5347\u5B66\u8854\u63A5"}],after:[{month:"3\u6708",theme:"\u9053\u5FB7&\u54C1\u8D28",name:"\u5982\u4F55\u57F9\u517B\u5B69\u5B50\u52E4\u4FED\u8282\u7EA6\u7684\u54C1\u8D28"},{month:"4\u6708",theme:"\u751F\u547D&\u73AF\u4FDD",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u66F4\u61C2\u5F97\u73CD\u60DC\u751F\u547D"},{month:"5\u6708",theme:"\u5FC3\u7406&\u5065\u5EB7",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u5B66\u4F1A\u6B63\u786E\u8BC4\u4EF7\u81EA\u5DF1"},{month:"6\u6708",theme:"\u793E\u4F1A&\u4EA4\u5F80",name:"\u5BB6\u957F\u5982\u4F55\u5F15\u5BFC\u5B69\u5B50\u4E0E\u5F02\u6027\u4EA4\u5F80"},{month:"7\u6708",theme:"\u5BB6\u56FD&\u60C5\u6000",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u6811\u7ACB\u62A5\u56FD\u4E4B\u5FD7"},{month:"8\u6708",theme:"\u5B89\u5168&\u81EA\u7406",name:"\u5982\u4F55\u8BA9\u5B69\u5B50\u8FDB\u884C\u516C\u76CA\u5B9E\u8DF5"}]}],Qe=g({name:"MonthyContentFrame",components:{CustomCard:W},setup(){const e=d([{name:"\u4E00\u5E74\u7EA7",id:1},{name:"\u4E8C\u5E74\u7EA7",id:2},{name:"\u4E09\u5E74\u7EA7",id:3},{name:"\u56DB\u5E74\u7EA7",id:4},{name:"\u4E94\u5E74\u7EA7",id:5},{name:"\u516D\u5E74\u7EA7",id:6}]),u=d(1),t=l=>{u.value=l.id},r=d([{name:"\u4E0A\u5B66\u671F",id:1},{name:"\u4E0B\u5B66\u671F",id:2}]),a=d(1),o=l=>{a.value=l.id},s=d(),i=(l,c)=>{if(console.log("activeGrade :>> ",l),console.log("activeSemester :>> ",c),s.value=[],c===1){s.value=O[l-1].before;return}s.value=O[l-1].after};return D(()=>{i(u.value,a.value)}),{tabsListGradeRef:e,activeTabsGradeRef:u,changeGradeTabs:t,tabsListSemesterRef:r,activeTabsSemesterRef:a,changeSemesterTabs:o,tableDataRef:s}}});const ze={class:"monthy-content-frame-container"},Je={class:"custom-tabs-ul flex-start"},qe=["onClick"],Ze={class:"flex align-start"},eu={class:"tabs-semester-ul"},uu=["onClick"],au={class:"table-box"};function tu(e,u,t,r,a,o){const s=_("el-table-column"),i=_("el-table"),l=_("CustomCard");return C(),F("div",ze,[m(l,{title:"\u6BCF\u6708\u4E00\u8BFE\u5185\u5BB9\u6846\u67B6"},{default:B(()=>[n("header",null,[n("ul",Je,[(C(!0),F(y,null,f(e.tabsListGradeRef,(c,p)=>(C(),F("li",{key:p,class:v(["custom-tabs-li",{"custom-tabs-li-active":e.activeTabsGradeRef===c.id}]),onClick:b=>e.changeGradeTabs(c)},E(c.name),11,qe))),128))])]),n("article",Ze,[n("ul",eu,[(C(!0),F(y,null,f(e.tabsListSemesterRef,c=>(C(),F("li",{class:v(["tabs-semester-li",{"tabs-semester-li-active":e.activeTabsSemesterRef===c.id}]),key:c.id,onClick:p=>e.changeSemesterTabs(c)},E(c.name),11,uu))),128))]),n("div",au,[m(i,{data:e.tableDataRef,style:{width:"100%"}},{default:B(()=>[m(s,{prop:"month",label:"\u6708\u4EFD",width:"180"}),m(s,{prop:"theme",label:"\u4E3B\u9898\u6A21\u5757",width:"180"}),m(s,{prop:"name",label:"\u8BFE\u7A0B\u540D\u79F0"})]),_:1},8,["data"])])])]),_:1})])}const nu=h(Qe,[["render",tu],["__scopeId","data-v-785309b7"]]);function su(){const e=d({}),u=d({}),t=o=>{const s=[],i={Daily:[],weekly:[],monthy:[]};o.forEach(p=>{switch(p.dates&&s.push(p.dates),p.type){case"daily":i.Daily.push(p.count);break;case"weekly":i.weekly.push(p.count);break;case"monthy":i.monthy.push(p.count);break}});const l=new Set(s);return{dateList:Array.from(l),dataList:i}},r=async()=>{const s={school_id:S().getSchoolInfo.id},i=await x(s);e.value=i},a=async()=>{const o=T().subtract(7,"days").format("YYYY-MM-DD HH:mm:ss"),s=T().format("YYYY-MM-DD HH:mm:ss"),i=S().getSchoolInfo,l={start_date:o,end_date:s,school_id:i.id};return await N(l)};return $(async()=>{r();const o=await a();Array.isArray(o)&&(u.value=t(o))}),{studyDashboardCompleteCountRef:e,studyDashboardCompleteListRef:u}}function ou(){const e=d({}),u=d(),t=a=>{e.value=a.val},r=async a=>{const o=S().getSchoolInfo,s={limit:"5",page:"1",type:a,school_id:o.id},i=await V(s);u.value=i.data};return D(()=>{const a=e.value;typeof a=="string"&&r(a)}),{hotConentList:u,changeTabs:t}}function iu(){const e=d();return(async()=>{const r=await H({});e.value=r})(),{studyDashboardCountRef:e}}const ru=async e=>await Y.post("https://api.ps.familyeducation.org.cn/v1/rate/dashboard/today",e);function lu(){const e=d({});return(async()=>{const r={school_id:S().getSchoolInfo.id},a=await ru(r);e.value=a})(),{rateDashboardTodayRef:e}}const mu={name:"workbenchView",components:{LearningSituationPanel:me,WarningPanel:Ae,HotPanel:ke,ContentCategoryPanel:Ue,DailyInteractionCountPanel:Xe,MonthyContentFrame:nu},setup(){const e=d(-1),t=L().schoolInfoListRef.value;return Array.isArray(t)&&t.length>0&&(e.value=t[0].id),{...L(),...su(),...ou(),...iu(),...lu()}}};const cu={class:"workbench-view-container"},_u={class:"flex align-start"},du={class:"row-two-style flex"};function pu(e,u,t,r,a,o){const s=_("LearningSituationPanel");_("WarningPanel");const i=_("HotPanel");_("ContentCategoryPanel"),_("DailyInteractionCountPanel");const l=_("MonthyContentFrame");return C(),F("div",cu,[n("div",_u,[m(s,{username:e.schoolUserInfoRef.username,listData:e.studyDashboardCompleteCountRef,echartsData:e.studyDashboardCompleteListRef},null,8,["username","listData","echartsData"]),R("",!0)]),n("div",du,[m(i,{onChange:e.changeTabs,tableData:e.hotConentList},null,8,["onChange","tableData"]),R("",!0),R("",!0),m(l)])])}const bu=h(mu,[["render",pu],["__scopeId","data-v-1693d753"]]);export{bu as default};
