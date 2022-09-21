import{g as z,a as U}from"./ak.437a1403.js";import{d as $,r as c,k as w,_ as D,b as i,o as y,c as g,g as _,F as L,f as Y,e as s,w as m,t as C,s as x,v as N,x as T,n as q,j as J,i as R,h as K,u as Q}from"./index.74846b94.js";import{i as M,C as S,D as X}from"./CustomCard.934c13ba.js";import{h as B}from"./moment.9709ab41.js";import{u as A}from"./school.707d21cd.js";import{u as Z,f as ee,a as te}from"./family.2a05a3ef.js";import{a as ae,g as ne,b as oe,h as se,i as ue,j as le,s as re,k as ce}from"./study.e62acc01.js";import{t as ie}from"./tag.6613979c.js";const de=$({name:"CompletedAmountOverview",props:{dataSource:{type:Object,default:()=>({})},dataSourceAvg:{type:Object,default:()=>({})}},setup(e){const t=c({total:{title:"\u603B\u8BBF\u95EE\u91CF",icon:"overview_total_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u8BBF\u95EE\u91CF",num:0}},daily:{title:"\u6BCF\u65E5\u4E00\u5B66\u603B\u5B66\u4E60\u91CF",icon:"overview_daily_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}},weekly:{title:"\u6BCF\u5468\u4E00\u505A\u603B\u5B8C\u6210\u91CF",icon:"overview_weekly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B8C\u6210\u91CF",num:0}},monthy:{title:"\u6BCF\u6708\u4E00\u8BFE\u603B\u5B66\u4E60\u91CF",icon:"overview_monthly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}}}),a=c(e.dataSource),n=c(e.dataSourceAvg);return w(()=>{a.value=e.dataSource,n.value=e.dataSourceAvg,Object.keys(a.value).length>0&&(t.value.total.num=a.value.daily+a.value.weekly+a.value.monthy,t.value.total.tag.num=a.value.all_today,t.value.total.averageDaily.num=Math.ceil(n.value.all_num/n.value.day_num),t.value.daily.num=a.value.daily,t.value.daily.tag.num=a.value.daily,t.value.daily.averageDaily.num=Math.ceil(n.value.daily/n.value.day_num),t.value.weekly.num=a.value.weekly,t.value.weekly.tag.num=a.value.weekly_today,t.value.weekly.averageDaily.num=Math.ceil(n.value.weekly/n.value.day_num),t.value.monthy.num=a.value.monthy,t.value.monthy.tag.num=a.value.monthy_today,t.value.monthy.averageDaily.num=Math.ceil(n.value.monthy/n.value.day_num))}),{overviewListRef:t,getImageUrl:z}}});const _e={class:"completed-amount-overview-container"},pe={class:"completed-amount-overview-ul flex"},me={class:"flex"},ye={class:"title-style"},fe={class:"flex-start align-end"},ge={class:"total-num-style"},ve={class:"tag-box flex-center"},he={class:"flex-start"},Ce={class:"average-daily-title-style"},be={class:"average-daily-num-style"};function De(e,t,a,n,l,u){const o=i("el-image"),r=i("el-card");return y(),g("div",_e,[_("ul",pe,[(y(!0),g(L,null,Y(e.overviewListRef,(d,f)=>(y(),g("li",{key:f,class:"completed-amount-overview-li"},[s(r,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",me,[_("p",ye,C(d.title),1),s(o,{class:"header-icon-style",src:e.getImageUrl(d.icon+".png")},null,8,["src"])]),_("article",fe,[_("p",ge,C(d.num),1),_("div",ve,[_("p",null,C(d.tag.title),1),_("p",null,C(d.tag.num),1)])]),_("footer",he,[_("p",Ce,C(d.averageDaily.title),1),_("p",be,C(d.averageDaily.num),1)])]),_:2},1024)]))),128))])])}const $e=D(de,[["render",De],["__scopeId","data-v-13e0d649"]]),Ee=$({name:"LearningTrend",props:{echartsData:{type:[Array,Object],default:()=>[]},dateType:{type:String,defualt:""}},setup(e){const t=c(),a=c(),n=c(["01\u65E5","02\u65E5","03\u65E5","04\u65E5","05\u65E5","06\u65E5"]),l=c([1e3,2e3,3e3,4e3,5e3,6e3]),u=(o,r)=>{const d=[];o.forEach(b=>{b.type===r&&d.push(b)});const f=new Set(d),v=Array.from(f),h=[],p=[];return Array.isArray(v)&&v.forEach(b=>{b.dates&&h.push(b.dates),b.count&&p.push(b.count)}),{xAxisData:h,seriesData:p}};return x(()=>{const o=document.getElementById("LearningTrendChart"),r=M(o);w(()=>{t.value=e.echartsData,a.value=e.dateType;const d=u(t.value,a.value);n.value=d.xAxisData,l.value=d.seriesData;const f=c({xAxis:{type:"category",data:n.value},yAxis:{type:"value"},grid:{top:"5%",left:"5%"},series:[{data:l.value,type:"bar",barWidth:"24",itemStyle:{borderRadius:0,color:"#1890FF"}}]});f.value&&r.setOption(f.value)})}),{}}});const O=e=>(N("data-v-f659322c"),e=e(),T(),e),Re={class:"learning-trend-container"},Be=O(()=>_("header",null,[_("p",{class:"title-style"},"\u5B66\u4E60\u8D8B\u52BF")],-1)),we=O(()=>_("article",null,[_("div",{id:"LearningTrendChart",class:"learning-trend-chart"})],-1)),Ae=[Be,we];function ke(e,t,a,n,l,u){return y(),g("div",Re,Ae)}const Fe=D(Ee,[["render",ke],["__scopeId","data-v-f659322c"]]);function P(){const e=(n,l)=>{const u=A().classList;console.log("calssList :>> ",u,Array.isArray(u));let o={id:-1,name:"\u5F02\u5E38\u6570\u636E"};return Array.isArray(u)&&(o=u[l]),`${t(n)}(${o?o.name:""})`},t=n=>{const l=A().gradeList;let u={id:-1,name:"\u5F02\u5E38\u6570\u636E"};if(Array.isArray(l))return u=l[parseInt(B().format("YYYY"))-n],u.name};return{getGradeClassName:e,getGraderName:t,getParentsName:n=>`${Z().getFamilyRoleList[n].name}`}}const Se=$({name:"CustomStudyRanking",props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const t=c(),a=l=>{const u=[];for(const o of l)u.push({name:P().getGradeClassName(o.year,o.class),num:`${o.count}\u4EBA`});return u},n=c([{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"}]);return w(()=>{if(t.value=e.listData,t.value!==void 0&&t.value.data){n.value=a(t.value.data);return}n.value=[],console.log("StudyRankingListRef.value :>> ",n.value)}),{StudyRankingListRef:n}}});const Pe={class:"custom-study-ranking-container"},Ie={key:0,class:"study-ranking-ul"},Le={class:"left-box-style flex-start"},Ye={class:"study-ranking-name-style"},Ne={class:"study-ranking-num-style"};function Te(e,t,a,n,l,u){return y(),g("div",Pe,[e.StudyRankingListRef.length>0?(y(),g("ul",Ie,[(y(!0),g(L,null,Y(e.StudyRankingListRef,(o,r)=>(y(),g("li",{key:r,class:"study-ranking-li flex"},[_("div",Le,[_("p",{class:q(["study-ranking-sort-style",{"top-three-sort-style":r<=2,"top-other-sort-style":r>2}])},C(r+1),3),_("p",Ye,C(o.name),1)]),_("p",Ne,C(o.num),1)]))),128))])):J("",!0)])}const V=D(Se,[["render",Te],["__scopeId","data-v-684f5e50"]]),xe=$({name:"StudyRanking",components:{CustomStudyRanking:V},props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const t=c();return w(()=>{t.value=e.listData}),{listDataRef:t}}});const Ge=e=>(N("data-v-2ed10ece"),e=e(),T(),e),Me={class:"study-ranking-container"},Oe=Ge(()=>_("header",null,[_("p",{class:"title-style"},"\u73ED\u7EA7\u5B66\u4E60\u4EBA\u6570\u6392\u540D")],-1));function Ve(e,t,a,n,l,u){const o=i("CustomStudyRanking");return y(),g("div",Me,[Oe,_("article",null,[s(o,{listData:e.listDataRef},null,8,["listData"])])])}const We=D(xe,[["render",Ve],["__scopeId","data-v-2ed10ece"]]);function He(){const e=A().getSchoolInfo,t=c("daily"),a=c("2022-08-19"),n=c("2022-08-19"),l=()=>{a.value=B().format("YYYY-MM-DD"),n.value=B().format("YYYY-MM-DD")},u=()=>{const p=B().weekday()===0?7:B().weekday();a.value=B().subtract(p-1,"days").format("YYYY-MM-DD"),n.value=B().add(7-p,"days").format("YYYY-MM-DD")},o=()=>{const p=B().format("YYYY"),b=B().format("MM");a.value=B([p,0,1]).month(parseInt(b)-1).format("YYYY-MM-DD"),n.value=B([p,0,31]).month(parseInt(b)-1).format("YYYY-MM-DD")},r=p=>{if(typeof p.paneName=="string")switch(t.value=p.paneName,t.value){case"daily":l();break;case"weekly":u();break;case"monthy":o();break}f(a.value,n.value),h(t.value)},d=c(),f=async(p,b)=>{const k={start_date:p,end_date:b,school_id:e.id},F=await ae(k);d.value=Array.isArray(F)?F:[F]},v=c(),h=async p=>{const k=await ne({limit:7,page:1,type:p,school_id:1});v.value=k};return x(()=>{f(a.value,n.value),h(t.value)}),{activeTypeRef:t,changeActiveType:r,studyDashboardCompleteListRef:d,studyDashboardRankClassRef:v}}const je=$({name:"OverviewChart",components:{LearningTrend:Fe,StudyRanking:We},setup(){return{...He()}}});const ze={class:"overview-chart-container"},Ue={class:"flex"};function qe(e,t,a,n,l,u){const o=i("el-tab-pane"),r=i("el-tabs"),d=i("LearningTrend"),f=i("StudyRanking"),v=i("el-card");return y(),g("div",ze,[s(v,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",null,[s(r,{modelValue:e.activeTypeRef,"onUpdate:modelValue":t[0]||(t[0]=h=>e.activeTypeRef=h),class:"demo-tabs",onTabClick:e.changeActiveType},{default:m(()=>[s(o,{label:"\u6BCF\u65E5\u4E00\u5B66",name:"daily"}),s(o,{label:"\u6BCF\u5468\u4E00\u505A",name:"weekly"}),s(o,{label:"\u6BCF\u6708\u4E00\u8BFE",name:"monthy"})]),_:1},8,["modelValue","onTabClick"])]),_("article",Ue,[s(d,{echartsData:e.studyDashboardCompleteListRef,dateType:e.activeTypeRef},null,8,["echartsData","dateType"]),s(f,{listData:e.studyDashboardRankClassRef},null,8,["listData"])])]),_:1})])}const Je=D(je,[["render",qe],["__scopeId","data-v-5d5589b3"]]),Ke=$({name:"CustomPagination",props:{total:{type:Number,default:0},page:{type:Number,defualt:1},limit:{type:Number,defualt:10}},setup(e,t){const a=c(0),n=c(1),l=c(10),u=o=>{n.value=o,t.emit("change",n.value)};return w(()=>{a.value=e.total,e.page&&(n.value=e.page),e.limit&&(l.value=e.limit)}),{totalRef:a,pageRef:n,limitRef:l,changePage:u}}});const Qe={class:"custom-pagination-container flex-start"},Xe={class:"demonstration"};function Ze(e,t,a,n,l,u){const o=i("el-pagination");return y(),g("div",Qe,[_("div",Xe,"\u5171"+C(e.totalRef)+"\u6761\u8BB0\u5F55",1),s(o,{small:"",background:"",layout:"prev, pager, next",total:e.totalRef,"current-page":e.pageRef,onCurrentChange:e.changePage},null,8,["total","current-page","onCurrentChange"])])}const G=D(Ke,[["render",Ze],["__scopeId","data-v-2802132b"]]);function et(){const e=c("daily"),t=c(1),a=c(10),n=c(0),l=d=>{t.value=d,console.log("pageRef.value :>> ",t.value)},u=c(),o=d=>{e.value=d.val},r=async d=>{const f={limit:`${a.value}`,page:`${t.value}`,type:d},v=await oe(f);u.value=v.data,typeof v.total=="number"&&(n.value=v.total)};return w(()=>{const d=e.value;typeof d=="string"&&r(d)}),{hotConentList:u,changeTabs:o,paramTypeRef:e,changePage:l,pageRef:t,limitRef:a,totalRef:n}}const tt=$({name:"HotRanking",components:{CustomPagination:G},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...et()}}});const at=e=>(N("data-v-2ae22518"),e=e(),T(),e),nt={class:"hot-ranking-container"},ot={class:"flex"},st=at(()=>_("p",{class:"title-style"},"\u70ED\u95E8\u5185\u5BB9\u6392\u884C",-1)),ut=R("\u6BCF\u65E5\u4E00\u5B66"),lt=R("\u6BCF\u5468\u4E00\u505A"),rt=R("\u6BCF\u6708\u4E00\u8BFE"),ct={class:"flex-end"};function it(e,t,a,n,l,u){const o=i("el-radio-button"),r=i("el-radio-group"),d=i("el-table-column"),f=i("el-table"),v=i("CustomPagination"),h=i("el-card");return y(),g("div",nt,[s(h,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",ot,[st,s(r,{class:"el-radio-group-style",modelValue:e.paramTypeRef,"onUpdate:modelValue":t[0]||(t[0]=p=>e.paramTypeRef=p),style:{"margin-bottom":"30px"}},{default:m(()=>[s(o,{label:"daily"},{default:m(()=>[ut]),_:1}),s(o,{label:"weekly"},{default:m(()=>[lt]),_:1}),s(o,{label:"monthy"},{default:m(()=>[rt]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[s(f,{data:e.hotConentList,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:m(()=>[s(d,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(d,{prop:"title",label:"\u5185\u5BB9\u6807\u9898"}),s(d,{prop:"count",label:"\u5B8C\u6210\u91CF",width:"110",align:"center"})]),_:1},8,["data","header-cell-style"])]),_("footer",ct,[s(v,{total:e.totalRef,page:e.pageRef,limit:e.limitRef,onChangePage:e.changePage},null,8,["total","page","limit","onChangePage"])])]),_:1})])}const dt=D(tt,[["render",it],["__scopeId","data-v-2ae22518"]]);function _t(){const e=A().schoolInfo,t=c("grade"),a=c(),n=async l=>{const u=e.id,r=await se({type:l,school_id:u});console.log("res_\u5B66\u4E60\u6392\u884C :>> ",r),a.value=r,console.log("studyDashboardRankClassTypeRef.value :>> ",a.value)};return w(()=>{n(t.value)}),{tabPositionRef:t,studyDashboardRankClassTypeRef:a}}const pt=$({name:"LearningRanking",components:{CustomPagination:G},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},..._t(),...P()}}});const mt=e=>(N("data-v-975a9dfe"),e=e(),T(),e),yt={class:"learning-ranking-container"},ft={class:"flex"},gt=mt(()=>_("p",{class:"title-style"},"\u5B66\u4E60\u6392\u884C",-1)),vt=R("\u5E74\u7EA7\u6392\u884C"),ht=R("\u73ED\u7EA7\u6392\u884C"),Ct={class:"flex-end"};function bt(e,t,a,n,l,u){const o=i("el-radio-button"),r=i("el-radio-group"),d=i("el-table-column"),f=i("el-table"),v=i("CustomPagination"),h=i("el-card");return y(),g("div",yt,[s(h,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",ft,[gt,s(r,{class:"el-radio-group-style",modelValue:e.tabPositionRef,"onUpdate:modelValue":t[0]||(t[0]=p=>e.tabPositionRef=p),style:{"margin-bottom":"30px"}},{default:m(()=>[s(o,{label:"grade"},{default:m(()=>[vt]),_:1}),s(o,{label:"class"},{default:m(()=>[ht]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[s(f,{data:e.studyDashboardRankClassTypeRef,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:m(()=>[s(d,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(d,{label:"\u540D\u79F0",width:"124"},{default:m(p=>[R(C(e.getGradeClassName(p.row.info.year,p.row.info.class)),1)]),_:1}),s(d,{label:"\u5B66\u4E60\u603B\u91CF",align:"center"},{default:m(p=>[R(C(p.row.count.daily),1)]),_:1}),s(d,{label:"\u6D3B\u52A8\u603B\u91CF",align:"center"},{default:m(p=>[R(C(p.row.count.weekly),1)]),_:1}),s(d,{label:"\u603B\u5B8C\u6210\u91CF",align:"center"},{default:m(p=>[R(C(p.row.count.monthy),1)]),_:1})]),_:1},8,["data","header-cell-style"])]),_("footer",Ct,[s(v)])]),_:1})])}const Dt=D(pt,[["render",bt],["__scopeId","data-v-975a9dfe"]]),$t=$({name:"WordCloud",props:{listData:{type:[Array,Object],default:()=>[]}},setup(e){const t=c();return w(()=>{t.value=e.listData}),{listRef:t,getRandom:U}}});const Et={class:"word-cloud-container"},Rt={class:"cloud",role:"navigation","aria-label":"Webdev word cloud"},Bt=["data-weight"];function wt(e,t,a,n,l,u){return y(),g("div",Et,[_("ul",Rt,[(y(!0),g(L,null,Y(e.listRef,o=>(y(),g("li",{key:o.id},[_("a",{href:"#","data-weight":e.getRandom(1,9)},C(o.name),9,Bt)]))),128))])])}const At=D($t,[["render",wt],["__scopeId","data-v-1c0bc7b5"]]);function kt(){const e=c();return(async()=>{const n=await ie({});e.value=n})(),{tagInfoListRef:e}}const Ft=$({name:"HotTag",components:{WordCloud:At,CustomCard:S},setup(){return{...kt()}}});const St={class:"hot-tag-container"},Pt={class:"word-cloud-box"};function It(e,t,a,n,l,u){const o=i("WordCloud"),r=i("CustomCard");return y(),g("div",St,[s(r,{title:"\u91CD\u70B9\u5173\u6CE8\u4E3B\u9898"},{default:m(()=>[_("div",Pt,[s(o,{listData:e.tagInfoListRef},null,8,["listData"])])]),_:1})])}const Lt=D(Ft,[["render",It],["__scopeId","data-v-9dc1caf8"]]);function Yt(){console.log("useSchoolStore().schoolInfo :>> ",A().getSchoolInfo);const e=A().getSchoolInfo,t=c();return(async()=>{const n={school_id:e.id},l=await ue(n);console.log("res_\u5BB6\u5EAD\u6784\u6210\u5206\u6790 :>> ",l);const u=[];Array.isArray(l)&&l.forEach(o=>{const r=P().getParentsName(o.family_role_id);u.push({value:o.count,name:r})}),t.value=u})(),{familyDashboardMemberGroupRoleRef:t}}const Nt=$({name:"FamilyCompositionAnalysis",components:{CustomCard:S,DoughnutChart:X},setup(){return{legend:{orient:"vertical",top:"center",right:90},title:{text:"\u5BB6\u5EAD\u6784\u6210",subtext:"",left:"25%",top:"center",textStyle:{fontSize:14},subtextStyle:{fontSize:16}},...Yt()}}});const Tt={class:"family-composition-analysis-container"};function xt(e,t,a,n,l,u){const o=i("DoughnutChart"),r=i("CustomCard");return y(),g("div",Tt,[s(r,{title:"\u5BB6\u5EAD\u6784\u6210\u5206\u6790"},{default:m(()=>[s(o,{legend:e.legend,title:e.title,width:"60%",left:"0",echartsData:e.familyDashboardMemberGroupRoleRef},null,8,["legend","title","echartsData"])]),_:1})])}const Gt=D(Nt,[["render",xt],["__scopeId","data-v-5fd1d56a"]]),Mt=$({name:"BarChart",props:{gradeNames:{type:Array,default:()=>[]},bindNums:{type:Array,default:()=>[]}},setup(e){return x(()=>{const t=c(),a=c(),n=document.getElementById("barChart"),l=M(n),u=c({title:{text:""},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1,bottom:0},grid:{top:24,left:"3%",right:"4%",bottom:24,containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:t},series:[{name:"\u5E74\u7EA7",type:"bar",label:{show:!0,color:"#fff",fontSize:12},data:a}],barWidth:16,color:"#1890FF"});w(()=>{t.value=e.gradeNames,a.value=e.bindNums,u.value&&l.setOption(u.value)})}),{}}});const Ot={id:"barChart",class:"bar-chart-container"};function Vt(e,t,a,n,l,u){return y(),g("div",Ot)}const Wt=D(Mt,[["render",Vt],["__scopeId","data-v-c1ab10cf"]]);function Ht(){const e=c(),t=c(),a=c(),n=()=>{t.value=[],a.value=[],Array.isArray(e.value)&&e.value.forEach(u=>{t.value.push(P().getGraderName(u.year)),a.value.push(u.count)}),console.log("gradeNamesRef :>> ",t.value),console.log("bindNumsRef :>> ",a.value)};return(async()=>{const o={school_id:A().getSchoolInfo.id},r=await ee(o);console.log("res_\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570 :>> ",r),e.value=r,n()})(),{gradeNamesRef:t,bindNumsRef:a}}const jt=$({name:"GradeParentsBoundNum",components:{CustomCard:S,BarChart:Wt},setup(){return{...Ht()}}});const zt={class:"grade-parents-bound-num-container"};function Ut(e,t,a,n,l,u){const o=i("BarChart"),r=i("CustomCard");return y(),g("div",zt,[s(r,{title:"\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570"},{default:m(()=>[s(o,{bindNums:e.bindNumsRef,gradeNames:e.gradeNamesRef},null,8,["bindNums","gradeNames"])]),_:1})])}const qt=D(jt,[["render",Ut],["__scopeId","data-v-ee246aa4"]]);function Jt(){const e=c(),t=c();return(async()=>{const l=await te({school_id:1});console.log("res_\u73ED\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6392\u540D :>> ",l),e.value=l,t.value=l.data})(),{familyDashboardGroupParentClassRef:e,familyDashboardGroupParentClassListDataRef:t}}const Kt=$({name:"ClassBindingParentRanking",components:{CustomCard:S,CustomStudyRanking:V},setup(){return{...Jt()}}});const Qt={class:"class-binding-parent-ranking-container"};function Xt(e,t,a,n,l,u){const o=i("CustomStudyRanking"),r=i("CustomCard");return y(),g("div",Qt,[s(r,{title:"\u73ED\u7EA7\u7ED1\u5B9A\u5BB6\u957F\u4EBA\u6570\u6392\u540D"},{default:m(()=>[s(o,{listData:e.familyDashboardGroupParentClassRef},null,8,["listData"])]),_:1})])}const Zt=D(Kt,[["render",Xt],["__scopeId","data-v-7efec27b"]]),ea=$({name:"CustomDropdown",props:{active:{type:Object,default:()=>({name:"\u9ED8\u8BA4\u9009\u9879",id:-1})},listData:{type:[Array,Object],default:()=>[]}},setup(e,t){const a=c(),n=c(e.listData),l=u=>{console.log("val :>> ",u),console.log("active.id :>> ",n.value);const o=c();n.value.forEach(r=>{u===r.id&&(o.value=r)}),t.emit("change",o.value)};return w(()=>{a.value=e.active,console.log("activeRef.value :>> ",a.value)}),{activeRef:a,listDataRef:n,onCommand:l}}});const ta={class:"custom-dropdown-contaienr"},aa={class:"el-dropdown-link"};function na(e,t,a,n,l,u){const o=i("arrow-down"),r=i("el-icon"),d=i("el-dropdown-item"),f=i("el-dropdown-menu"),v=i("el-dropdown");return y(),g("div",ta,[s(v,null,{dropdown:m(()=>[s(f,null,{default:m(()=>[(y(!0),g(L,null,Y(e.listDataRef,h=>(y(),K(d,{key:h.id,onClick:p=>e.onCommand(h.id)},{default:m(()=>[R(C(h.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:m(()=>[_("span",aa,[R(C(e.activeRef.name)+" ",1),s(r,{class:"el-icon--right"},{default:m(()=>[s(o)]),_:1})])]),_:1})])}const oa=D(ea,[["render",na],["__scopeId","data-v-2df3e5b0"]]);function sa(){const e=Q(),t=c({name:"\u5168\u90E8\u5E74\u7EA7",id:-1}),a=c({name:"\u5168\u90E8\u73ED\u7EA7",id:-1}),n={"background-color":"#F6F8FA",color:"#606266"},l=c(),u=E=>B(E).format("YYYY-MM-DD HH:mm:ss"),o=c(1),r=c(10),d=c(0),f=E=>{o.value=E},v=c(),h=async()=>{const E=parseInt(B().format("YYYY"))-t.value.id,j={limit:10,page:1,school_id:1,year:t.value.id!==-1?E:"",class:a.value.id!==-1?a.value.id:"",student_id:18},I=await le(j);console.log("res_\u5BB6\u957F\u652F\u6301\u5DE5\u4F5C\u60C5\u51B5 :>> ",I),v.value=I,l.value=I.data,d.value=I.total};h();const p=A(),b=c(p.getGradeList),k=c(p.getClassList),F=E=>{console.log("val :>> ",E),t.value=E,h()},W=E=>{console.log("val :>> ",E),a.value=E,h()},H=E=>{console.log("val :>> ",E),e.push({path:"/parentsLearnDetailsView",query:{uid:E.uid,student_id:E.student_id}})};return{studyDashboardCompleteParentListRef:v,gradeActiveRef:t,classActiveRef:a,headerCellStyle:n,tableDataRef:l,fmtDateFn:u,...P(),gradeListRef:b,classListRef:k,gradeChange:F,classChange:W,pageRef:o,limitRef:r,totalRef:d,onChangePage:f,onToView:H}}const ua=$({name:"ParentSupportWorkSituation",components:{CustomCard:S,CustomDropdown:oa,CustomPagination:G},setup(){return{...sa()}}});const la={class:"parent-support-work-situation-container"},ra={class:"filter-box"},ca=R(" \u67E5\u770B "),ia={class:"flex-end"};function da(e,t,a,n,l,u){const o=i("CustomDropdown"),r=i("el-table-column"),d=i("el-button"),f=i("el-table"),v=i("CustomPagination"),h=i("CustomCard");return y(),g("div",la,[s(h,{title:"\u5BB6\u957F\u652F\u6301\u5DE5\u4F5C\u60C5\u51B5"},{default:m(()=>[_("div",ra,[s(o,{active:e.gradeActiveRef,listData:e.gradeListRef,onChange:e.gradeChange},null,8,["active","listData","onChange"]),s(o,{class:"filter-class-style",active:e.classActiveRef,listData:e.classListRef,onChange:e.classChange},null,8,["active","listData","onChange"])]),s(f,{class:"el-table-style",data:e.tableDataRef,"header-cell-style":e.headerCellStyle,style:{width:"100%"}},{default:m(()=>[s(r,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(r,{prop:"wx_name",label:"\u5BB6\u957F"}),s(r,{prop:"studentInfo",label:"\u5B66\u751F\u4FE1\u606F",align:"center"},{default:m(p=>[R(C(p.row.name)+" | "+C(e.getGradeClassName(p.row.year,p.row.class)),1)]),_:1}),s(r,{prop:"daily_count",label:"\u6BCF\u65E5\u4E00\u5B66",align:"center"}),s(r,{prop:"weekly_count",label:"\u6BCF\u5468\u4E00\u505A",align:"center"}),s(r,{prop:"monthy_count",label:"\u6BCF\u6708\u4E00\u8BFE",align:"center"}),s(r,{prop:"date",label:"\u6700\u8FD1\u4E0A\u7EBF\u65F6\u95F4",align:"center"},{default:m(p=>[R(C(e.fmtDateFn(p.row.date)),1)]),_:1}),s(r,{prop:"date",label:"\u64CD\u4F5C",align:"center"},{default:m(p=>[s(d,{type:"primary",link:"",onClick:b=>e.onToView(p.row)},{default:m(()=>[ca]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","header-cell-style"]),_("footer",ia,[s(v,{page:e.pageRef,limit:e.limitRef,total:e.totalRef,onChange:e.onChangePage},null,8,["page","limit","total","onChange"])])]),_:1})])}const _a=D(ua,[["render",da],["__scopeId","data-v-24bf8fd7"]]);function pa(){const e=c({}),t=c({}),a=async()=>{const u=await re({});e.value=u},n=async()=>{const u=await ce({});t.value=u};return a(),n(),{studyDashboardCompleteCountRef:e,studyDashboardCompleteDailyRef:t}}const ma={name:"dataVisualizationView",components:{CompletedAmountOverview:$e,OverviewChart:Je,HotRanking:dt,LearningRanking:Dt,HotTag:Lt,FamilyCompositionAnalysis:Gt,GradeParentsBoundNum:qt,ClassBindingParentRanking:Zt,ParentSupportWorkSituation:_a},setup(){return{...pa()}}};const ya={class:"data-visualization-view-container"},fa={class:"row-style flex"},ga={class:"row-style flex"},va={class:"row-style flex"},ha={class:"row-style"};function Ca(e,t,a,n,l,u){const o=i("CompletedAmountOverview"),r=i("OverviewChart"),d=i("HotRanking"),f=i("LearningRanking"),v=i("HotTag"),h=i("FamilyCompositionAnalysis"),p=i("GradeParentsBoundNum"),b=i("ClassBindingParentRanking"),k=i("ParentSupportWorkSituation");return y(),g("div",ya,[s(o,{dataSource:e.studyDashboardCompleteCountRef,dataSourceAvg:e.studyDashboardCompleteDailyRef},null,8,["dataSource","dataSourceAvg"]),s(r,{class:"overview-chart-style"}),_("div",fa,[s(d),s(f)]),_("div",ga,[s(v),s(h)]),_("div",va,[s(p),s(b)]),_("div",ha,[s(k)])])}const ka=D(ma,[["render",Ca],["__scopeId","data-v-0abd23c2"]]);export{ka as default};
