import{g as J,a as K}from"./ak.722fb160.js";import{d as $,r as c,k as A,_ as D,b as i,o as y,c as h,h as _,F as L,f as N,e as s,w as m,t as C,v as G,x as Y,y as T,n as Q,j as X,i as B,C as x,D as O,g as Z,u as ee}from"./index.2078f2a3.js";import{i as V,C as S,D as te}from"./CustomCard.8992d6e4.js";import{h as w}from"./moment.9709ab41.js";import{u as R}from"./school.24ca962d.js";import{u as ae,f as oe,a as ne}from"./family.5d99d11b.js";import{a as se,l as le,b as ue,m as re,n as ce,o as ie,s as de,p as _e}from"./study.ddc77805.js";import{t as pe}from"./tag.6ba0bd83.js";const me=$({name:"CompletedAmountOverview",props:{dataSource:{type:Object,default:()=>({})},dataSourceAvg:{type:Object,default:()=>({})}},setup(e){const t=c({total:{title:"\u603B\u8BBF\u95EE\u91CF",icon:"overview_total_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u8BBF\u95EE\u91CF",num:0}},daily:{title:"\u6BCF\u65E5\u4E00\u5B66\u603B\u5B66\u4E60\u91CF",icon:"overview_daily_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}},weekly:{title:"\u6BCF\u5468\u4E00\u505A\u603B\u5B8C\u6210\u91CF",icon:"overview_weekly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B8C\u6210\u91CF",num:0}},monthy:{title:"\u6BCF\u6708\u4E00\u8BFE\u603B\u5B66\u4E60\u91CF",icon:"overview_monthly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}}}),o=c(e.dataSource),n=c(e.dataSourceAvg);return A(()=>{o.value=e.dataSource,n.value=e.dataSourceAvg,Object.keys(o.value).length>0&&(t.value.total.num=o.value.total_all,t.value.total.tag.num=o.value.all_today,t.value.total.averageDaily.num=Math.ceil(n.value.all_num/n.value.day_num),t.value.daily.num=o.value.total_daily,t.value.daily.tag.num=o.value.daily,t.value.daily.averageDaily.num=Math.ceil(n.value.daily/n.value.day_num),t.value.weekly.num=o.value.total_weekly,t.value.weekly.tag.num=o.value.weekly_today,t.value.weekly.averageDaily.num=Math.ceil(n.value.weekly/n.value.day_num),t.value.monthy.num=o.value.total_monthy,t.value.monthy.tag.num=o.value.monthy_today,t.value.monthy.averageDaily.num=Math.ceil(n.value.monthy/n.value.day_num))}),{overviewListRef:t,getImageUrl:J}}});const fe={class:"completed-amount-overview-container"},ye={class:"completed-amount-overview-ul flex"},ge={class:"flex"},he={class:"title-style"},ve={class:"flex-start align-end"},Ce={class:"total-num-style"},be={class:"tag-box flex-center"},De={class:"flex-start"},$e={class:"average-daily-title-style"},Ee={class:"average-daily-num-style"};function Re(e,t,o,n,r,l){const a=i("el-image"),u=i("el-card");return y(),h("div",fe,[_("ul",ye,[(y(!0),h(L,null,N(e.overviewListRef,(d,g)=>(y(),h("li",{key:g,class:"completed-amount-overview-li"},[s(u,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",ge,[_("p",he,C(d.title),1),s(a,{class:"header-icon-style",src:e.getImageUrl(d.icon+".png")},null,8,["src"])]),_("article",ve,[_("p",Ce,C(d.num),1),_("div",be,[_("p",null,C(d.tag.title),1),_("p",null,C(d.tag.num),1)])]),_("footer",De,[_("p",$e,C(d.averageDaily.title),1),_("p",Ee,C(d.averageDaily.num),1)])]),_:2},1024)]))),128))])])}const we=D(me,[["render",Re],["__scopeId","data-v-2b94ccf0"]]),Be=$({name:"LearningTrend",props:{echartsData:{type:[Array,Object],default:()=>[]},dateType:{type:String,defualt:""}},setup(e){const t=c(),o=c(),n=c(["01\u65E5","02\u65E5","03\u65E5","04\u65E5","05\u65E5","06\u65E5"]),r=c([1e3,2e3,3e3,4e3,5e3,6e3]),l=(a,u)=>{const d=[];a.forEach(b=>{b.type===u&&d.push(b)});const g=new Set(d),v=Array.from(g),f=[],p=[];return Array.isArray(v)&&v.forEach(b=>{b.dates&&f.push(b.dates),b.count&&p.push(b.count)}),{xAxisData:f,seriesData:p}};return G(()=>{const a=document.getElementById("LearningTrendChart"),u=V(a);A(()=>{t.value=e.echartsData,o.value=e.dateType;const d=l(t.value,o.value);n.value=d.xAxisData,r.value=d.seriesData;const g=c({xAxis:{type:"category",data:n.value},yAxis:{type:"value"},grid:{top:"5%",left:"5%"},series:[{data:r.value,type:"bar",barWidth:"24",itemStyle:{borderRadius:0,color:"#1890FF"}}]});g.value&&u.setOption(g.value)})}),{}}});const W=e=>(Y("data-v-f659322c"),e=e(),T(),e),Ae={class:"learning-trend-container"},Fe=W(()=>_("header",null,[_("p",{class:"title-style"},"\u5B66\u4E60\u8D8B\u52BF")],-1)),ke=W(()=>_("article",null,[_("div",{id:"LearningTrendChart",class:"learning-trend-chart"})],-1)),Se=[Fe,ke];function Ie(e,t,o,n,r,l){return y(),h("div",Ae,Se)}const Pe=D(Be,[["render",Ie],["__scopeId","data-v-f659322c"]]);function I(){const e=(r,l)=>{const a=R().classList;console.log("calssList :>> ",a,Array.isArray(a));let u={id:-1,name:"\u5F02\u5E38\u6570\u636E"};return Array.isArray(a)&&(u=a[l]),`${t(r)}(${u?u.name:""})`},t=r=>{const l=R().gradeList;let a={id:-1,name:"\u5F02\u5E38\u6570\u636E"};if(Array.isArray(l))return a=l[parseInt(w().format("YYYY"))-r+1],a.name};return{getGradeClassName:e,getGraderName:t,getClassName:r=>{const l=R().classList;let a={id:-1,name:"\u5F02\u5E38\u6570\u636E"};return Array.isArray(l)&&(a=l[r]),a?a.name:""},getParentsName:r=>{const l=ae().getFamilyRoleList,a=c("");return l.forEach(u=>{u.id===r&&(a.value=u.name)}),a.value}}}const Le=$({name:"CustomStudyRanking",props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const t=c(),o=r=>{const l=[];for(const a of r)l.push({name:I().getGradeClassName(a.year,a.class),num:`${a.count}\u4EBA`});return l},n=c([{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"}]);return A(()=>{if(t.value=e.listData,t.value!==void 0&&t.value.data){n.value=o(t.value.data);return}n.value=[],console.log("StudyRankingListRef.value :>> ",n.value)}),{StudyRankingListRef:n}}});const Ne={class:"custom-study-ranking-container"},Ye={key:0,class:"study-ranking-ul"},Te={class:"left-box-style flex-start"},Ge={class:"study-ranking-name-style"},Me={class:"study-ranking-num-style"};function xe(e,t,o,n,r,l){return y(),h("div",Ne,[e.StudyRankingListRef.length>0?(y(),h("ul",Ye,[(y(!0),h(L,null,N(e.StudyRankingListRef,(a,u)=>(y(),h("li",{key:u,class:"study-ranking-li flex"},[_("div",Te,[_("p",{class:Q(["study-ranking-sort-style",{"top-three-sort-style":u<=2,"top-other-sort-style":u>2}])},C(u+1),3),_("p",Ge,C(a.name),1)]),_("p",Me,C(a.num),1)]))),128))])):X("",!0)])}const H=D(Le,[["render",xe],["__scopeId","data-v-684f5e50"]]),Oe=$({name:"StudyRanking",components:{CustomStudyRanking:H},props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const t=c();return A(()=>{t.value=e.listData}),{listDataRef:t}}});const Ve=e=>(Y("data-v-bac18253"),e=e(),T(),e),We={class:"study-ranking-container"},He=Ve(()=>_("header",null,[_("p",{class:"title-style"},"\u4ECA\u65E5\u73ED\u7EA7\u4EBA\u6570\u6392\u540D")],-1));function je(e,t,o,n,r,l){const a=i("CustomStudyRanking");return y(),h("div",We,[He,_("article",null,[s(a,{listData:e.listDataRef},null,8,["listData"])])])}const ze=D(Oe,[["render",je],["__scopeId","data-v-bac18253"]]);function Ue(){const e=R().getSchoolInfo,t=c("daily"),o=c("2022-08-19"),n=c("2022-08-19"),r=()=>{o.value=w().format("YYYY-MM-DD"),n.value=w().format("YYYY-MM-DD")},l=()=>{const p=w().weekday()===0?7:w().weekday();o.value=w().subtract(p-1,"days").format("YYYY-MM-DD"),n.value=w().add(7-p,"days").format("YYYY-MM-DD")},a=()=>{const p=w().format("YYYY"),b=w().format("MM");o.value=w([p,0,1]).month(parseInt(b)-1).format("YYYY-MM-DD"),n.value=w([p,0,31]).month(parseInt(b)-1).format("YYYY-MM-DD")},u=p=>{if(typeof p.paneName=="string")switch(t.value=p.paneName,t.value){case"daily":r();break;case"weekly":l();break;case"monthy":a();break}g(o.value,n.value),f(t.value)},d=c(),g=async(p,b)=>{const F={start_date:p,end_date:b,school_id:e.id},k=await se(F);d.value=Array.isArray(k)?k:[k]},v=c(),f=async p=>{const b=R().getSchoolInfo,F={limit:7,page:1,type:p,school_id:b.id,start_date:""},k=await le(F);v.value=k};return G(()=>{g(o.value,n.value),f(t.value)}),{activeTypeRef:t,changeActiveType:u,studyDashboardCompleteListRef:d,studyDashboardRankClassRef:v}}const qe=$({name:"OverviewChart",components:{LearningTrend:Pe,StudyRanking:ze},setup(){return{...Ue()}}});const Je={class:"overview-chart-container"},Ke={class:"flex"};function Qe(e,t,o,n,r,l){const a=i("el-tab-pane"),u=i("el-tabs"),d=i("LearningTrend"),g=i("StudyRanking"),v=i("el-card");return y(),h("div",Je,[s(v,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",null,[s(u,{modelValue:e.activeTypeRef,"onUpdate:modelValue":t[0]||(t[0]=f=>e.activeTypeRef=f),class:"demo-tabs",onTabClick:e.changeActiveType},{default:m(()=>[s(a,{label:"\u6BCF\u65E5\u4E00\u5B66",name:"daily"}),s(a,{label:"\u6BCF\u5468\u4E00\u505A",name:"weekly"}),s(a,{label:"\u6BCF\u6708\u4E00\u8BFE",name:"monthy"})]),_:1},8,["modelValue","onTabClick"])]),_("article",Ke,[s(d,{echartsData:e.studyDashboardCompleteListRef,dateType:e.activeTypeRef},null,8,["echartsData","dateType"]),s(g,{listData:e.studyDashboardRankClassRef},null,8,["listData"])])]),_:1})])}const Xe=D(qe,[["render",Qe],["__scopeId","data-v-5d5589b3"]]),Ze=$({name:"CustomPagination",props:{total:{type:Number,default:0},page:{type:Number,defualt:1},limit:{type:Number,defualt:10}},setup(e,t){const o=c(0),n=c(1),r=c(10),l=a=>{n.value=a,t.emit("change",n.value)};return A(()=>{o.value=e.total,e.page&&(n.value=e.page),e.limit&&(r.value=e.limit)}),{totalRef:o,pageRef:n,limitRef:r,changePage:l}}});const et={class:"custom-pagination-container flex-start"},tt={class:"demonstration"};function at(e,t,o,n,r,l){const a=i("el-pagination");return y(),h("div",et,[_("div",tt,"\u5171"+C(e.totalRef)+"\u6761\u8BB0\u5F55",1),s(a,{small:"",background:"",layout:"prev, pager, next",total:e.totalRef,"current-page":e.pageRef,onCurrentChange:e.changePage},null,8,["total","current-page","onCurrentChange"])])}const M=D(Ze,[["render",at],["__scopeId","data-v-2802132b"]]);function ot(){const e=c("daily"),t=c(1),o=c(10),n=c(0),r=d=>{t.value=d,console.log("pageRef.value :>> ",t.value)},l=c(),a=d=>{e.value=d.val},u=async d=>{const g=R().getSchoolInfo,v={limit:`${o.value}`,page:`${t.value}`,type:d,school_id:g.id},f=await ue(v);l.value=f.data,typeof f.total=="number"&&(n.value=f.total)};return A(()=>{const d=e.value;typeof d=="string"&&u(d)}),{hotConentList:l,changeTabs:a,paramTypeRef:e,changePage:r,pageRef:t,limitRef:o,totalRef:n}}const nt=$({name:"HotRanking",components:{CustomPagination:M},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...ot()}}});const st=e=>(Y("data-v-2ae22518"),e=e(),T(),e),lt={class:"hot-ranking-container"},ut={class:"flex"},rt=st(()=>_("p",{class:"title-style"},"\u70ED\u95E8\u5185\u5BB9\u6392\u884C",-1)),ct=B("\u6BCF\u65E5\u4E00\u5B66"),it=B("\u6BCF\u5468\u4E00\u505A"),dt=B("\u6BCF\u6708\u4E00\u8BFE"),_t={class:"flex-end"};function pt(e,t,o,n,r,l){const a=i("el-radio-button"),u=i("el-radio-group"),d=i("el-table-column"),g=i("el-table"),v=i("CustomPagination"),f=i("el-card");return y(),h("div",lt,[s(f,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",ut,[rt,s(u,{class:"el-radio-group-style",modelValue:e.paramTypeRef,"onUpdate:modelValue":t[0]||(t[0]=p=>e.paramTypeRef=p),style:{"margin-bottom":"30px"}},{default:m(()=>[s(a,{label:"daily"},{default:m(()=>[ct]),_:1}),s(a,{label:"weekly"},{default:m(()=>[it]),_:1}),s(a,{label:"monthy"},{default:m(()=>[dt]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[s(g,{data:e.hotConentList,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:m(()=>[s(d,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(d,{prop:"title",label:"\u5185\u5BB9\u6807\u9898"}),s(d,{prop:"count",label:"\u5B8C\u6210\u91CF",width:"110",align:"center"})]),_:1},8,["data","header-cell-style"])]),_("footer",_t,[s(v,{total:e.totalRef,page:e.pageRef,limit:e.limitRef,onChangePage:e.changePage},null,8,["total","page","limit","onChangePage"])])]),_:1})])}const mt=D(nt,[["render",pt],["__scopeId","data-v-2ae22518"]]);function ft(){const e=R().schoolInfo,t=c("grade"),o=c(),n=async r=>{const l=e.id,u=await re({type:r,school_id:l});console.log("res_\u5B66\u4E60\u6392\u884C :>> ",u),o.value=u.data};return A(()=>{n(t.value)}),{tabPositionRef:t,studyDashboardRankClassTypeRef:o}}const yt=$({name:"LearningRanking",components:{CustomPagination:M},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...ft(),...I()}}});const gt=e=>(Y("data-v-b547e377"),e=e(),T(),e),ht={class:"learning-ranking-container"},vt={class:"flex"},Ct=gt(()=>_("p",{class:"title-style"},"\u5B66\u4E60\u6392\u884C",-1)),bt=B("\u5E74\u7EA7\u6392\u884C"),Dt=B("\u73ED\u7EA7\u6392\u884C"),$t={class:"flex-end"};function Et(e,t,o,n,r,l){const a=i("el-radio-button"),u=i("el-radio-group"),d=i("el-table-column"),g=i("el-table"),v=i("CustomPagination"),f=i("el-card");return y(),h("div",ht,[s(f,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",vt,[Ct,s(u,{class:"el-radio-group-style",modelValue:e.tabPositionRef,"onUpdate:modelValue":t[0]||(t[0]=p=>e.tabPositionRef=p),style:{"margin-bottom":"30px"}},{default:m(()=>[s(a,{label:"grade"},{default:m(()=>[bt]),_:1}),s(a,{label:"class"},{default:m(()=>[Dt]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[s(g,{data:e.studyDashboardRankClassTypeRef,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:m(()=>[s(d,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(d,{label:"\u540D\u79F0",width:"124"},{default:m(p=>[x(_("p",null,C(e.getGraderName(p.row.year)),513),[[O,e.tabPositionRef==="grade"]]),x(_("p",null,C(`${e.getGraderName(p.row.year)}(${e.getClassName(p.row.class)})`),513),[[O,e.tabPositionRef==="class"]])]),_:1}),s(d,{label:"\u5B66\u4E60\u603B\u91CF",align:"center"},{default:m(p=>[B(C(p.row.daily_count+p.row.monthy_count),1)]),_:1}),s(d,{label:"\u6D3B\u52A8\u603B\u91CF",align:"center"},{default:m(p=>[B(C(p.row.weekly_count),1)]),_:1}),s(d,{label:"\u603B\u5B8C\u6210\u91CF",align:"center"},{default:m(p=>[B(C(p.row.count),1)]),_:1})]),_:1},8,["data","header-cell-style"])]),_("footer",$t,[s(v)])]),_:1})])}const Rt=D(yt,[["render",Et],["__scopeId","data-v-b547e377"]]),wt=$({name:"WordCloud",props:{listData:{type:[Array,Object],default:()=>[]}},setup(e){const t=c();return A(()=>{t.value=e.listData}),{listRef:t,getRandom:K}}});const Bt={class:"word-cloud-container"},At={class:"cloud",role:"navigation","aria-label":"Webdev word cloud"},Ft=["data-weight"];function kt(e,t,o,n,r,l){return y(),h("div",Bt,[_("ul",At,[(y(!0),h(L,null,N(e.listRef,a=>(y(),h("li",{key:a.id},[_("a",{href:"#","data-weight":e.getRandom(1,9)},C(a.name),9,Ft)]))),128))])])}const St=D(wt,[["render",kt],["__scopeId","data-v-1c0bc7b5"]]);function It(){const e=c();return(async()=>{const n=await pe({});e.value=n})(),{tagInfoListRef:e}}const Pt=$({name:"HotTag",components:{WordCloud:St,CustomCard:S},setup(){return{...It()}}});const Lt={class:"hot-tag-container"},Nt={class:"word-cloud-box"};function Yt(e,t,o,n,r,l){const a=i("WordCloud"),u=i("CustomCard");return y(),h("div",Lt,[s(u,{title:"\u91CD\u70B9\u5173\u6CE8\u4E3B\u9898"},{default:m(()=>[_("div",Nt,[s(a,{listData:e.tagInfoListRef},null,8,["listData"])])]),_:1})])}const Tt=D(Pt,[["render",Yt],["__scopeId","data-v-9dc1caf8"]]);function Gt(){console.log("useSchoolStore().schoolInfo :>> ",R().getSchoolInfo);const e=R().getSchoolInfo,t=c();return(async()=>{const n={school_id:e.id},r=await ce(n);console.log("res_\u5BB6\u5EAD\u6784\u6210\u5206\u6790 :>> ",r);const l=[];Array.isArray(r)&&r.forEach(a=>{const u=I().getParentsName(a.family_role_id);l.push({value:a.count,name:u})}),t.value=l})(),{familyDashboardMemberGroupRoleRef:t}}const Mt=$({name:"FamilyCompositionAnalysis",components:{CustomCard:S,DoughnutChart:te},setup(){return{legend:{orient:"vertical",top:"center",right:90},title:{text:"\u5BB6\u5EAD\u6784\u6210",subtext:"",left:"25%",top:"center",textStyle:{fontSize:14},subtextStyle:{fontSize:16}},...Gt()}}});const xt={class:"family-composition-analysis-container"};function Ot(e,t,o,n,r,l){const a=i("DoughnutChart"),u=i("CustomCard");return y(),h("div",xt,[s(u,{title:"\u5BB6\u5EAD\u6784\u6210\u5206\u6790"},{default:m(()=>[s(a,{legend:e.legend,title:e.title,width:"60%",left:"0",echartsData:e.familyDashboardMemberGroupRoleRef},null,8,["legend","title","echartsData"])]),_:1})])}const Vt=D(Mt,[["render",Ot],["__scopeId","data-v-5fd1d56a"]]),Wt=$({name:"BarChart",props:{gradeNames:{type:Array,default:()=>[]},bindNums:{type:Array,default:()=>[]}},setup(e){return G(()=>{const t=c(),o=c(),n=document.getElementById("barChart"),r=V(n),l=c({title:{text:""},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1,bottom:0},grid:{top:24,left:"3%",right:"4%",bottom:24,containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:t},series:[{name:"\u5E74\u7EA7",type:"bar",label:{show:!0,color:"#fff",fontSize:12},data:o}],barWidth:16,color:"#1890FF"});A(()=>{t.value=e.gradeNames,o.value=e.bindNums,l.value&&r.setOption(l.value)})}),{}}});const Ht={id:"barChart",class:"bar-chart-container"};function jt(e,t,o,n,r,l){return y(),h("div",Ht)}const zt=D(Wt,[["render",jt],["__scopeId","data-v-c1ab10cf"]]);function Ut(){const e=c(),t=c(),o=c(),n=()=>{t.value=[],o.value=[],Array.isArray(e.value)&&e.value.forEach(l=>{t.value.push(I().getGraderName(l.year)),o.value.push(l.count)}),console.log("gradeNamesRef :>> ",t.value),console.log("bindNumsRef :>> ",o.value)};return(async()=>{const a={school_id:R().getSchoolInfo.id},u=await oe(a);console.log("res_\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570 :>> ",u),e.value=u,n()})(),{gradeNamesRef:t,bindNumsRef:o}}const qt=$({name:"GradeParentsBoundNum",components:{CustomCard:S,BarChart:zt},setup(){return{...Ut()}}});const Jt={class:"grade-parents-bound-num-container"};function Kt(e,t,o,n,r,l){const a=i("BarChart"),u=i("CustomCard");return y(),h("div",Jt,[s(u,{title:"\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570"},{default:m(()=>[s(a,{bindNums:e.bindNumsRef,gradeNames:e.gradeNamesRef},null,8,["bindNums","gradeNames"])]),_:1})])}const Qt=D(qt,[["render",Kt],["__scopeId","data-v-ee246aa4"]]);function Xt(){const e=c(),t=c();return(async()=>{const r={school_id:R().getSchoolInfo.id},l=await ne(r);console.log("res_\u73ED\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6392\u540D :>> ",l),e.value=l,t.value=l.data})(),{familyDashboardGroupParentClassRef:e,familyDashboardGroupParentClassListDataRef:t}}const Zt=$({name:"ClassBindingParentRanking",components:{CustomCard:S,CustomStudyRanking:H},setup(){return{...Xt()}}});const ea={class:"class-binding-parent-ranking-container"};function ta(e,t,o,n,r,l){const a=i("CustomStudyRanking"),u=i("CustomCard");return y(),h("div",ea,[s(u,{title:"\u73ED\u7EA7\u7ED1\u5B9A\u5BB6\u957F\u4EBA\u6570\u6392\u540D"},{default:m(()=>[s(a,{listData:e.familyDashboardGroupParentClassRef},null,8,["listData"])]),_:1})])}const aa=D(Zt,[["render",ta],["__scopeId","data-v-7efec27b"]]),oa=$({name:"CustomDropdown",props:{active:{type:Object,default:()=>({name:"\u9ED8\u8BA4\u9009\u9879",id:-1})},listData:{type:[Array,Object],default:()=>[]}},setup(e,t){const o=c(),n=c(e.listData),r=l=>{console.log("val :>> ",l),console.log("active.id :>> ",n.value);const a=c();n.value.forEach(u=>{l===u.id&&(a.value=u)}),t.emit("change",a.value)};return A(()=>{o.value=e.active,console.log("activeRef.value :>> ",o.value)}),{activeRef:o,listDataRef:n,onCommand:r}}});const na={class:"custom-dropdown-contaienr"},sa={class:"el-dropdown-link"};function la(e,t,o,n,r,l){const a=i("arrow-down"),u=i("el-icon"),d=i("el-dropdown-item"),g=i("el-dropdown-menu"),v=i("el-dropdown");return y(),h("div",na,[s(v,null,{dropdown:m(()=>[s(g,null,{default:m(()=>[(y(!0),h(L,null,N(e.listDataRef,f=>(y(),Z(d,{key:f.id,onClick:p=>e.onCommand(f.id)},{default:m(()=>[B(C(f.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:m(()=>[_("span",sa,[B(C(e.activeRef.name)+" ",1),s(u,{class:"el-icon--right"},{default:m(()=>[s(a)]),_:1})])]),_:1})])}const ua=D(oa,[["render",la],["__scopeId","data-v-2df3e5b0"]]);function ra(){const e=ee(),t=c({name:"\u5168\u90E8\u5E74\u7EA7",id:-1}),o=c({name:"\u5168\u90E8\u73ED\u7EA7",id:-1}),n={"background-color":"#F6F8FA",color:"#606266"},r=c(),l=E=>w(E).utc().format("YYYY-MM-DD HH:mm:ss"),a=c(1),u=c(10),d=c(0),g=E=>{a.value=E},v=c(),f=async()=>{const E=R().getSchoolInfo,U=parseInt(w().format("YYYY"))-t.value.id,q={limit:10,page:1,school_id:E.id,year:t.value.id!==-1?U:"",class:o.value.id!==-1?o.value.id:"",student_id:18},P=await ie(q);console.log("res_\u5BB6\u957F\u652F\u6301\u5DE5\u4F5C\u60C5\u51B5 :>> ",P),v.value=P,r.value=P.data,d.value=P.total};f();const p=R(),b=c(p.getGradeList),F=c(p.getClassList),k=E=>{console.log("val :>> ",E),t.value=E,f()},j=E=>{console.log("val :>> ",E),o.value=E,f()},z=E=>{console.log("val :>> ",E),e.push({path:"/parentsLearnDetailsView",query:{uid:E.uid,student_id:E.student_id}})};return{studyDashboardCompleteParentListRef:v,gradeActiveRef:t,classActiveRef:o,headerCellStyle:n,tableDataRef:r,fmtDateFn:l,...I(),gradeListRef:b,classListRef:F,gradeChange:k,classChange:j,pageRef:a,limitRef:u,totalRef:d,onChangePage:g,onToView:z}}const ca=$({name:"ParentSupportWorkSituation",components:{CustomCard:S,CustomDropdown:ua,CustomPagination:M},setup(){return{...ra()}}});const ia={class:"parent-support-work-situation-container"},da={class:"filter-box"},_a=B(" \u67E5\u770B "),pa={class:"flex-end"};function ma(e,t,o,n,r,l){const a=i("CustomDropdown"),u=i("el-table-column"),d=i("el-button"),g=i("el-table"),v=i("CustomPagination"),f=i("CustomCard");return y(),h("div",ia,[s(f,{title:"\u5BB6\u957F\u652F\u6301\u5DE5\u4F5C\u60C5\u51B5"},{default:m(()=>[_("div",da,[s(a,{active:e.gradeActiveRef,listData:e.gradeListRef,onChange:e.gradeChange},null,8,["active","listData","onChange"]),s(a,{class:"filter-class-style",active:e.classActiveRef,listData:e.classListRef,onChange:e.classChange},null,8,["active","listData","onChange"])]),s(g,{class:"el-table-style",data:e.tableDataRef,"header-cell-style":e.headerCellStyle,style:{width:"100%"}},{default:m(()=>[s(u,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(u,{prop:"wx_name",label:"\u5BB6\u957F"}),s(u,{prop:"studentInfo",label:"\u5B66\u751F\u4FE1\u606F",align:"center"},{default:m(p=>[B(C(p.row.name)+" | "+C(e.getGradeClassName(p.row.year,p.row.class)),1)]),_:1}),s(u,{prop:"daily_count",label:"\u6BCF\u65E5\u4E00\u5B66",align:"center"}),s(u,{prop:"weekly_count",label:"\u6BCF\u5468\u4E00\u505A",align:"center"}),s(u,{prop:"monthy_count",label:"\u6BCF\u6708\u4E00\u8BFE",align:"center"}),s(u,{prop:"date",label:"\u6700\u8FD1\u4E0A\u7EBF\u65F6\u95F4",align:"center"},{default:m(p=>[B(C(e.fmtDateFn(p.row.date)),1)]),_:1}),s(u,{prop:"date",label:"\u64CD\u4F5C",align:"center"},{default:m(p=>[s(d,{type:"primary",link:"",onClick:b=>e.onToView(p.row)},{default:m(()=>[_a]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","header-cell-style"]),_("footer",pa,[s(v,{page:e.pageRef,limit:e.limitRef,total:e.totalRef,onChange:e.onChangePage},null,8,["page","limit","total","onChange"])])]),_:1})])}const fa=D(ca,[["render",ma],["__scopeId","data-v-24bf8fd7"]]);function ya(){const e=c({}),t=c({}),o=async()=>{const l={school_id:R().getSchoolInfo.id,type:"term"},a=await de(l);e.value=a},n=async()=>{const l={school_id:R().getSchoolInfo.id},a=await _e(l);t.value=a};return o(),n(),{studyDashboardCompleteCountRef:e,studyDashboardCompleteDailyRef:t}}const ga={name:"dataVisualizationView",components:{CompletedAmountOverview:we,OverviewChart:Xe,HotRanking:mt,LearningRanking:Rt,HotTag:Tt,FamilyCompositionAnalysis:Vt,GradeParentsBoundNum:Qt,ClassBindingParentRanking:aa,ParentSupportWorkSituation:fa},setup(){return{...ya()}}};const ha={class:"data-visualization-view-container"},va={class:"row-style flex"},Ca={class:"row-style flex"},ba={class:"row-style flex"},Da={class:"row-style"};function $a(e,t,o,n,r,l){const a=i("CompletedAmountOverview"),u=i("OverviewChart"),d=i("HotRanking"),g=i("LearningRanking"),v=i("HotTag"),f=i("FamilyCompositionAnalysis"),p=i("GradeParentsBoundNum"),b=i("ClassBindingParentRanking"),F=i("ParentSupportWorkSituation");return y(),h("div",ha,[s(a,{dataSource:e.studyDashboardCompleteCountRef,dataSourceAvg:e.studyDashboardCompleteDailyRef},null,8,["dataSource","dataSourceAvg"]),s(u,{class:"overview-chart-style"}),_("div",va,[s(d),s(g)]),_("div",Ca,[s(v),s(f)]),_("div",ba,[s(p),s(b)]),_("div",Da,[s(F)])])}const Ia=D(ga,[["render",$a],["__scopeId","data-v-0abd23c2"]]);export{Ia as default};
