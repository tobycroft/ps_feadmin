import{d as R,b as r,k as S,_ as E,r as d,o as v,c as h,h as _,F as N,f as V,a as s,w as m,t as D,v as O,x as T,y as M,n as J,j as k,i as B,C as z,D as W,g as K,u as Q}from"./index.5c9dba08.js";import{g as X,a as Z}from"./ak.02252990.js";import{i as H,C as L,D as ee}from"./CustomCard.b580b065.js";import{h as w}from"./moment.9709ab41.js";import{u as $}from"./school.39248828.js";import{u as te,f as ae,a as oe}from"./family.fbe635d0.js";import{a as ne,u as se,b as ue,v as le,w as ie,x as re,y as ce,s as de,z as _e}from"./study.3a990818.js";const pe=R({name:"CompletedAmountOverview",props:{dataSource:{type:Object,default:()=>({})},dataSourceAvg:{type:Object,default:()=>({})}},setup(e){const t=r({total:{title:"\u603B\u8BBF\u95EE\u91CF",icon:"overview_total_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u8BBF\u95EE\u91CF",num:0}},daily:{title:"\u6BCF\u65E5\u4E00\u5B66\u603B\u5B66\u4E60\u91CF",icon:"overview_daily_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}},weekly:{title:"\u6BCF\u5468\u4E00\u505A\u603B\u5B8C\u6210\u91CF",icon:"overview_weekly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B8C\u6210\u91CF",num:0}},monthy:{title:"\u6BCF\u6708\u4E00\u8BFE\u603B\u5B66\u4E60\u91CF",icon:"overview_monthly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}}}),o=r(e.dataSource),n=r(e.dataSourceAvg);return S(()=>{o.value=e.dataSource,n.value=e.dataSourceAvg,Object.keys(o.value).length>0&&(t.value.total.num=o.value.total_all,t.value.total.tag.num=o.value.all_today,t.value.total.averageDaily.num=Math.ceil(n.value.all_num/n.value.day_num),t.value.daily.num=o.value.total_daily,t.value.daily.tag.num=o.value.daily,t.value.daily.averageDaily.num=Math.ceil(n.value.daily/n.value.day_num),t.value.weekly.num=o.value.total_weekly,t.value.weekly.tag.num=o.value.weekly_today,t.value.weekly.averageDaily.num=Math.ceil(n.value.weekly/n.value.day_num),t.value.monthy.num=o.value.total_monthy,t.value.monthy.tag.num=o.value.monthy_today,t.value.monthy.averageDaily.num=Math.ceil(n.value.monthy/n.value.day_num))}),{overviewListRef:t,getImageUrl:X}}});const me={class:"completed-amount-overview-container"},ye={class:"completed-amount-overview-ul flex"},fe={class:"flex"},ge={class:"title-style"},ve={class:"flex-start align-end"},he={class:"total-num-style"},Ce={class:"tag-box flex-center"},De={class:"flex-start"},be={class:"average-daily-title-style"},Ee={class:"average-daily-num-style"};function we(e,t,o,n,i,u){const a=d("el-image"),l=d("el-card");return v(),h("div",me,[_("ul",ye,[(v(!0),h(N,null,V(e.overviewListRef,(c,g)=>(v(),h("li",{key:g,class:"completed-amount-overview-li"},[s(l,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",fe,[_("p",ge,D(c.title),1),s(a,{class:"header-icon-style",src:e.getImageUrl(c.icon+".png")},null,8,["src"])]),_("article",ve,[_("p",he,D(c.num),1),_("div",Ce,[_("p",null,D(c.tag.title),1),_("p",null,D(c.tag.num),1)])]),_("footer",De,[_("p",be,D(c.averageDaily.title),1),_("p",Ee,D(c.averageDaily.num),1)])]),_:2},1024)]))),128))])])}const $e=E(pe,[["render",we],["__scopeId","data-v-440d4935"],["__file","E:/work/parents_school_institution_pc/src/views/studyDataAnalysis/dataVisualizationView/components/CompletedAmountOverview/CompletedAmountOverview.vue"]]),Re=R({name:"LearningTrend",props:{echartsData:{type:[Array,Object],default:()=>[]},dateType:{type:String,defualt:""}},setup(e,t){const o=r(),n=r(),i=r(["01\u65E5","02\u65E5","03\u65E5","04\u65E5","05\u65E5","06\u65E5"]),u=r([1e3,2e3,3e3,4e3,5e3,6e3]),a=(l,c)=>{const g=[];l.forEach(y=>{y.type===c&&g.push(y)});const C=new Set(g),f=Array.from(C),p=[],F=[];return Array.isArray(f)&&f.forEach(y=>{y.dates&&p.push(y.dates),y.count&&F.push(y.count)}),{xAxisData:p,seriesData:F}};return O(()=>{const l=document.getElementById("LearningTrendChart"),c=H(l);S(()=>{o.value=e.echartsData,n.value=e.dateType;const g=a(o.value,n.value);i.value=g.xAxisData,u.value=g.seriesData;const C=r({xAxis:{type:"category",data:i.value},yAxis:{type:"value"},grid:{top:"5%",left:"5%"},series:[{data:u.value,type:"bar",barWidth:"24",itemStyle:{borderRadius:0,color:"#1890FF"}}]});c.off("click"),c.on("click",function(f){console.log("params :>> ",f),t.emit("select",f.name)}),C.value&&c.setOption(C.value)})}),{}}});const j=e=>(T("data-v-055fb621"),e=e(),M(),e),Ae={class:"learning-trend-container"},Be=j(()=>_("header",null,[_("p",{class:"title-style"},"\u5B66\u4E60\u8D8B\u52BF")],-1)),ke=j(()=>_("article",null,[_("div",{id:"LearningTrendChart",class:"learning-trend-chart"})],-1)),Fe=[Be,ke];function Se(e,t,o,n,i,u){return v(),h("div",Ae,Fe)}const Pe=E(Re,[["render",Se],["__scopeId","data-v-055fb621"],["__file","E:/work/parents_school_institution_pc/src/views/studyDataAnalysis/dataVisualizationView/components/OverviewChart/components/LearningTrend/LearningTrend.vue"]]);function Y(){const e=(i,u)=>{const a=$().classList;console.log("calssList :>> ",a,Array.isArray(a));let l={id:-1,name:"\u5F02\u5E38\u6570\u636E"};return Array.isArray(a)&&(l=a[u]),`${t(i)}(${l?l.name:""})`},t=i=>{const u=$().gradeList;let a={id:-1,name:"\u5F02\u5E38\u6570\u636E"};if(Array.isArray(u))return a=u[parseInt(w().format("YYYY"))-i+1],a.name};return{getGradeClassName:e,getGraderName:t,getClassName:i=>{const u=$().classList;let a={id:-1,name:"\u5F02\u5E38\u6570\u636E"};return Array.isArray(u)&&(a=u[i]),a?a.name:""},getParentsName:i=>{const u=te().getFamilyRoleList,a=r("");return u.forEach(l=>{l.id===i&&(a.value=l.name)}),a.value}}}const Ie=R({name:"CustomStudyRanking",props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const t=r(),o=i=>{const u=[];for(const a of i)u.push({name:Y().getGradeClassName(a.year,a.class),num:`${a.count}\u4EBA`});return u},n=r([{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"}]);return S(()=>{if(t.value=e.listData,t.value!==void 0&&t.value.data){n.value=o(t.value.data);return}n.value=[],console.log("StudyRankingListRef.value :>> ",n.value)}),{StudyRankingListRef:n}}});const Le={class:"custom-study-ranking-container"},Ye={key:0,class:"study-ranking-ul"},Ne={class:"left-box-style flex-start"},Ve={class:"study-ranking-name-style"},Te={class:"study-ranking-num-style"};function Me(e,t,o,n,i,u){const a=d("el-scrollbar");return v(),h("div",Le,[e.StudyRankingListRef.length>0?(v(),h("div",Ye,[s(a,null,{default:m(()=>[(v(!0),h(N,null,V(e.StudyRankingListRef,(l,c)=>(v(),h("div",{key:c,class:"study-ranking-li flex"},[_("div",Ne,[_("p",{class:J(["study-ranking-sort-style",{"top-three-sort-style":c<=2,"top-other-sort-style":c>2}])},D(c+1),3),_("p",Ve,D(l.name),1)]),_("p",Te,D(l.num),1)]))),128))]),_:1})])):k("v-if",!0)])}const U=E(Ie,[["render",Me],["__scopeId","data-v-8e5f877e"],["__file","E:/work/parents_school_institution_pc/src/components/CustomStudyRanking/CustomStudyRanking.vue"]]),Ge=R({name:"StudyRanking",components:{CustomStudyRanking:U},props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const t=r();return S(()=>{t.value=e.listData}),{listDataRef:t}}});const Oe=e=>(T("data-v-9c4e9135"),e=e(),M(),e),xe={class:"study-ranking-container"},ze=Oe(()=>_("header",null,[_("p",{class:"title-style"},"\u4ECA\u65E5\u73ED\u7EA7\u4EBA\u6570\u6392\u540D")],-1));function We(e,t,o,n,i,u){const a=d("CustomStudyRanking");return v(),h("div",xe,[ze,_("article",null,[s(a,{listData:e.listDataRef},null,8,["listData"])])])}const He=E(Ge,[["render",We],["__scopeId","data-v-9c4e9135"],["__file","E:/work/parents_school_institution_pc/src/views/studyDataAnalysis/dataVisualizationView/components/OverviewChart/components/StudyRanking/StudyRanking.vue"]]);function je(){const e=$().getSchoolInfo,t=r("daily"),o=r("2022-08-19"),n=r("2022-08-19"),i=()=>{o.value=w().format("YYYY-MM-DD"),n.value=w().format("YYYY-MM-DD")},u=()=>{const y=w().weekday()===0?7:w().weekday();o.value=w().subtract(y-1,"days").format("YYYY-MM-DD"),n.value=w().add(7-y,"days").format("YYYY-MM-DD")},a=()=>{const y=w().format("YYYY"),A=w().format("MM");o.value=w([y,0,1]).month(parseInt(A)-1).format("YYYY-MM-DD"),n.value=w([y,0,31]).month(parseInt(A)-1).format("YYYY-MM-DD")},l=r(""),c=y=>{if(typeof y.paneName=="string")switch(t.value=y.paneName,t.value){case"daily":i();break;case"weekly":u();break;case"monthy":a();break}C(o.value,n.value);const A=w(o.value).format("YYYY-MM-DD");p(t.value,A)},g=r(),C=async(y,A)=>{const I={start_date:y,end_date:A,school_id:e.id},P=await ne(I);g.value=Array.isArray(P)?P:[P]},f=r(),p=async(y,A)=>{const I=$().getSchoolInfo,P={limit:7,page:1,type:y,school_id:I.id,start_date:A},b=await se(P);f.value=b},F=y=>{console.log("onSelectLearningTrend_val :>> ",y),l.value=y;const A=w(l.value).format("YYYY-MM-DD");p(t.value,A)};return O(()=>{const y=w(l.value).format("YYYY-MM-DD"),A=w().format("YYYY-MM-DD");C(o.value,n.value),p(t.value,y!=="Invalid date"?y:A)}),{activeTypeRef:t,changeActiveType:c,studyDashboardCompleteListRef:g,studyDashboardRankClassRef:f,onSelectLearningTrend:F}}const Ue=R({name:"OverviewChart",components:{LearningTrend:Pe,StudyRanking:He},setup(){return{...je()}}});const qe={class:"overview-chart-container"},Je={class:"flex"};function Ke(e,t,o,n,i,u){const a=d("el-tab-pane"),l=d("el-tabs"),c=d("LearningTrend"),g=d("StudyRanking"),C=d("el-card");return v(),h("div",qe,[s(C,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",null,[s(l,{modelValue:e.activeTypeRef,"onUpdate:modelValue":t[0]||(t[0]=f=>e.activeTypeRef=f),class:"demo-tabs",onTabClick:e.changeActiveType},{default:m(()=>[s(a,{label:"\u6BCF\u65E5\u4E00\u5B66",name:"daily"}),s(a,{label:"\u6BCF\u5468\u4E00\u505A",name:"weekly"}),s(a,{label:"\u6BCF\u6708\u4E00\u8BFE",name:"monthy"})]),_:1},8,["modelValue","onTabClick"])]),_("article",Je,[s(c,{echartsData:e.studyDashboardCompleteListRef,dateType:e.activeTypeRef,onSelect:e.onSelectLearningTrend},null,8,["echartsData","dateType","onSelect"]),s(g,{listData:e.studyDashboardRankClassRef},null,8,["listData"])])]),_:1})])}const Qe=E(Ue,[["render",Ke],["__scopeId","data-v-26d5efd2"],["__file","E:/work/parents_school_institution_pc/src/views/studyDataAnalysis/dataVisualizationView/components/OverviewChart/OverviewChart.vue"]]),Xe=R({name:"CustomPagination",props:{total:{type:Number,default:0},page:{type:Number,defualt:1},limit:{type:Number,defualt:10}},setup(e,t){const o=r(0),n=r(1),i=r(10),u=a=>{n.value=a,t.emit("change",n.value)};return S(()=>{o.value=e.total,e.page&&(n.value=e.page),e.limit&&(i.value=e.limit)}),{totalRef:o,pageRef:n,limitRef:i,changePage:u}}});const Ze={class:"custom-pagination-container flex-start"},et={class:"demonstration"};function tt(e,t,o,n,i,u){const a=d("el-pagination");return v(),h("div",Ze,[_("div",et,"\u5171"+D(e.totalRef)+"\u6761\u8BB0\u5F55",1),s(a,{small:"",background:"",layout:"prev, pager, next",total:e.totalRef,"current-page":e.pageRef,onCurrentChange:e.changePage},null,8,["total","current-page","onCurrentChange"])])}const x=E(Xe,[["render",tt],["__scopeId","data-v-a9ba8d1c"],["__file","E:/work/parents_school_institution_pc/src/components/CustomPagination/CustomPagination.vue"]]);function at(){const e=r("daily"),t=r(1),o=r(10),n=r(0),i=c=>{console.log("val :>> ",c),t.value=c,l(e.value)},u=r(),a=c=>{e.value=c.val},l=async c=>{const g=$().getSchoolInfo,C={limit:`${o.value}`,page:`${t.value}`,type:c,school_id:g.id},f=await ue(C);u.value=f.data,typeof f.total=="number"&&(n.value=f.total)};return S(()=>{const c=e.value;typeof c=="string"&&l(c)}),{hotConentList:u,changeTabs:a,paramTypeRef:e,changePage:i,pageRef:t,limitRef:o,totalRef:n}}const ot=R({name:"HotRanking",components:{CustomPagination:x},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...at()}}});const nt=e=>(T("data-v-2117d054"),e=e(),M(),e),st={class:"hot-ranking-container"},ut={class:"flex"},lt=nt(()=>_("p",{class:"title-style"},"\u70ED\u95E8\u5185\u5BB9\u6392\u884C",-1)),it=B("\u6BCF\u65E5\u4E00\u5B66"),rt=B("\u6BCF\u5468\u4E00\u505A"),ct=B("\u6BCF\u6708\u4E00\u8BFE"),dt={class:"flex-end"};function _t(e,t,o,n,i,u){const a=d("el-radio-button"),l=d("el-radio-group"),c=d("el-table-column"),g=d("el-table"),C=d("CustomPagination"),f=d("el-card");return v(),h("div",st,[s(f,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",ut,[lt,s(l,{class:"el-radio-group-style",modelValue:e.paramTypeRef,"onUpdate:modelValue":t[0]||(t[0]=p=>e.paramTypeRef=p),style:{"margin-bottom":"30px"}},{default:m(()=>[s(a,{label:"daily"},{default:m(()=>[it]),_:1}),s(a,{label:"weekly"},{default:m(()=>[rt]),_:1}),s(a,{label:"monthy"},{default:m(()=>[ct]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[s(g,{data:e.hotConentList,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:m(()=>[s(c,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(c,{prop:"title",label:"\u5185\u5BB9\u6807\u9898"}),s(c,{prop:"count",label:"\u5B8C\u6210\u91CF",width:"110",align:"center"})]),_:1},8,["data","header-cell-style"])]),_("footer",dt,[s(C,{total:e.totalRef,page:e.pageRef,limit:e.limitRef,onChange:e.changePage},null,8,["total","page","limit","onChange"])])]),_:1})])}const pt=E(ot,[["render",_t],["__scopeId","data-v-2117d054"],["__file","E:/work/parents_school_institution_pc/src/views/studyDataAnalysis/dataVisualizationView/components/HotRanking/HotRanking.vue"]]);function mt(){const e=$().schoolInfo,t=r("grade"),o=r(),n=async i=>{const u=e.id,l=await le({type:i,school_id:u});console.log("res_\u5B66\u4E60\u6392\u884C :>> ",l),o.value=l.data};return S(()=>{n(t.value)}),{tabPositionRef:t,studyDashboardRankClassTypeRef:o}}const yt=R({name:"LearningRanking",components:{CustomPagination:x},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...mt(),...Y()}}});const ft=e=>(T("data-v-49b847cc"),e=e(),M(),e),gt={class:"learning-ranking-container"},vt={class:"flex"},ht=ft(()=>_("p",{class:"title-style"},"\u5B66\u4E60\u6392\u884C",-1)),Ct=B("\u5E74\u7EA7\u6392\u884C"),Dt=B("\u73ED\u7EA7\u6392\u884C"),bt={class:"flex-end"};function Et(e,t,o,n,i,u){const a=d("el-radio-button"),l=d("el-radio-group"),c=d("el-table-column"),g=d("el-table"),C=d("CustomPagination"),f=d("el-card");return v(),h("div",gt,[s(f,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",vt,[ht,s(l,{class:"el-radio-group-style",modelValue:e.tabPositionRef,"onUpdate:modelValue":t[0]||(t[0]=p=>e.tabPositionRef=p),style:{"margin-bottom":"30px"}},{default:m(()=>[s(a,{label:"grade"},{default:m(()=>[Ct]),_:1}),s(a,{label:"class"},{default:m(()=>[Dt]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[s(g,{data:e.studyDashboardRankClassTypeRef,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:m(()=>[s(c,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(c,{label:"\u540D\u79F0",width:"124"},{default:m(p=>[z(_("p",null,D(e.getGraderName(p.row.year)),513),[[W,e.tabPositionRef==="grade"]]),z(_("p",null,D(`${e.getGraderName(p.row.year)}(${e.getClassName(p.row.class)})`),513),[[W,e.tabPositionRef==="class"]])]),_:1}),s(c,{label:"\u5B66\u4E60\u603B\u91CF",align:"center"},{default:m(p=>[B(D(p.row.daily_count+p.row.monthy_count),1)]),_:1}),s(c,{label:"\u6D3B\u52A8\u603B\u91CF",align:"center"},{default:m(p=>[B(D(p.row.weekly_count),1)]),_:1}),s(c,{label:"\u603B\u5B8C\u6210\u91CF",align:"center"},{default:m(p=>[B(D(p.row.count),1)]),_:1})]),_:1},8,["data","header-cell-style"])]),_("footer",bt,[s(C)])]),_:1})])}const wt=E(yt,[["render",Et],["__scopeId","data-v-49b847cc"],["__file","E:/work/parents_school_institution_pc/src/views/studyDataAnalysis/dataVisualizationView/components/LearningRanking/LearningRanking.vue"]]),$t=R({name:"WordCloud",props:{listData:{type:[Array,Object],default:()=>[]}},setup(e){const t=r();let o=16;return S(()=>{t.value=e.listData.map(n=>(n.dataWeight=o,o--,console.log("item :>> ",n),n))}),{listRef:t,getRandom:Z}}});const Rt={class:"word-cloud-container"},At={class:"cloud",role:"navigation","aria-label":"Webdev word cloud"},Bt=["data-weight"];function kt(e,t,o,n,i,u){return v(),h("div",Rt,[_("ul",At,[(v(!0),h(N,null,V(e.listRef,a=>(v(),h("li",{key:a.id},[_("a",{href:"#","data-weight":a.dataWeight},D(a.name),9,Bt)]))),128))])])}const Ft=E($t,[["render",kt],["__scopeId","data-v-22ad1d69"],["__file","E:/work/parents_school_institution_pc/src/components/WordCloud/WordCloud.vue"]]);function St(){const e=r(),t=async(n,i)=>{const a=await ie({school_id:n,limit:i});e.value=a},o=$().getSchoolInfo;return t(o.id,16),{tagInfoListRef:e}}const Pt=R({name:"HotTag",components:{WordCloud:Ft,CustomCard:L},setup(){return{...St()}}});const It={class:"hot-tag-container"},Lt={class:"word-cloud-box"};function Yt(e,t,o,n,i,u){const a=d("WordCloud"),l=d("CustomCard");return v(),h("div",It,[s(l,{title:"\u91CD\u70B9\u5173\u6CE8\u4E3B\u9898"},{default:m(()=>[_("div",Lt,[s(a,{listData:e.tagInfoListRef},null,8,["listData"])])]),_:1})])}const Nt=E(Pt,[["render",Yt],["__scopeId","data-v-a8fdfbf1"],["__file","E:/work/parents_school_institution_pc/src/views/studyDataAnalysis/dataVisualizationView/components/HotTag/HotTag.vue"]]);function Vt(){console.log("useSchoolStore().schoolInfo :>> ",$().getSchoolInfo);const e=$().getSchoolInfo,t=r();return(async()=>{const n={school_id:e.id},i=await re(n);console.log("res_\u5BB6\u5EAD\u6784\u6210\u5206\u6790 :>> ",i);const u=[];Array.isArray(i)&&i.forEach(a=>{const l=Y().getParentsName(a.family_role_id);u.push({value:a.count,name:l})}),t.value=u})(),{familyDashboardMemberGroupRoleRef:t}}const Tt=R({name:"FamilyCompositionAnalysis",components:{CustomCard:L,DoughnutChart:ee},setup(){return{legend:{orient:"vertical",top:"center",right:90},title:{text:"\u5BB6\u5EAD\u6784\u6210",subtext:"",left:"25%",top:"center",textStyle:{fontSize:14},subtextStyle:{fontSize:16}},...Vt()}}});const Mt={class:"family-composition-analysis-container"};function Gt(e,t,o,n,i,u){const a=d("DoughnutChart"),l=d("CustomCard");return v(),h("div",Mt,[s(l,{title:"\u5BB6\u5EAD\u6784\u6210\u5206\u6790"},{default:m(()=>[s(a,{legend:e.legend,title:e.title,width:"60%",left:"0",echartsData:e.familyDashboardMemberGroupRoleRef},null,8,["legend","title","echartsData"])]),_:1})])}const Ot=E(Tt,[["render",Gt],["__scopeId","data-v-1cd75d67"],["__file","E:/work/parents_school_institution_pc/src/views/studyDataAnalysis/dataVisualizationView/components/FamilyCompositionAnalysis/FamilyCompositionAnalysis.vue"]]),xt=R({name:"BarChart",props:{gradeNames:{type:Array,default:()=>[]},bindNums:{type:Array,default:()=>[]}},setup(e){return O(()=>{const t=r(),o=r(),n=document.getElementById("barChart"),i=H(n),u=r({title:{text:""},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1,bottom:0},grid:{top:24,left:"3%",right:"4%",bottom:24,containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:t},series:[{name:"\u5E74\u7EA7",type:"bar",label:{show:!0,color:"#fff",fontSize:12},data:o}],barWidth:16,color:"#1890FF"});S(()=>{t.value=e.gradeNames,o.value=e.bindNums,u.value&&i.setOption(u.value)})}),{}}});const zt={id:"barChart",class:"bar-chart-container"};function Wt(e,t,o,n,i,u){return v(),h("div",zt)}const Ht=E(xt,[["render",Wt],["__scopeId","data-v-836aeb03"],["__file","E:/work/parents_school_institution_pc/src/components/Echarts/BarChart/BarChart.vue"]]);function jt(){const e=r(),t=r(),o=r(),n=()=>{t.value=[],o.value=[],Array.isArray(e.value)&&e.value.forEach(u=>{t.value.push(Y().getGraderName(u.year)),o.value.push(u.count)}),console.log("gradeNamesRef :>> ",t.value),console.log("bindNumsRef :>> ",o.value)};return(async()=>{const a={school_id:$().getSchoolInfo.id},l=await ae(a);console.log("res_\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570 :>> ",l),e.value=l,n()})(),{gradeNamesRef:t,bindNumsRef:o}}const Ut=R({name:"GradeParentsBoundNum",components:{CustomCard:L,BarChart:Ht},setup(){return{...jt()}}});const qt={class:"grade-parents-bound-num-container"};function Jt(e,t,o,n,i,u){const a=d("BarChart"),l=d("CustomCard");return v(),h("div",qt,[s(l,{title:"\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570"},{default:m(()=>[s(a,{bindNums:e.bindNumsRef,gradeNames:e.gradeNamesRef},null,8,["bindNums","gradeNames"])]),_:1})])}const Kt=E(Ut,[["render",Jt],["__scopeId","data-v-b3562caa"],["__file","E:/work/parents_school_institution_pc/src/views/studyDataAnalysis/dataVisualizationView/components/GradeParentsBoundNum/GradeParentsBoundNum.vue"]]);function Qt(){const e=r(),t=r();return(async()=>{const i={school_id:$().getSchoolInfo.id},u=await oe(i);console.log("res_\u73ED\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6392\u540D :>> ",u),e.value=u,t.value=u.data})(),{familyDashboardGroupParentClassRef:e,familyDashboardGroupParentClassListDataRef:t}}const Xt=R({name:"ClassBindingParentRanking",components:{CustomCard:L,CustomStudyRanking:U},setup(){return{...Qt()}}});const Zt={class:"class-binding-parent-ranking-container"};function ea(e,t,o,n,i,u){const a=d("CustomStudyRanking"),l=d("CustomCard");return v(),h("div",Zt,[s(l,{title:"\u73ED\u7EA7\u7ED1\u5B9A\u5BB6\u957F\u4EBA\u6570\u6392\u540D"},{default:m(()=>[s(a,{listData:e.familyDashboardGroupParentClassRef},null,8,["listData"]),k(` <footer class="flex-end">\r
        <CustomPagination />\r
      </footer> `)]),_:1})])}const ta=E(Xt,[["render",ea],["__scopeId","data-v-dd4aed61"],["__file","E:/work/parents_school_institution_pc/src/views/studyDataAnalysis/dataVisualizationView/components/ClassBindingParentRanking/ClassBindingParentRanking.vue"]]),aa=R({name:"CustomDropdown",props:{active:{type:Object,default:()=>({name:"\u9ED8\u8BA4\u9009\u9879",id:-1})},listData:{type:[Array,Object],default:()=>[]}},setup(e,t){const o=r(),n=r(e.listData),i=u=>{console.log("val :>> ",u),console.log("active.id :>> ",n.value);const a=r();n.value.forEach(l=>{u===l.id&&(a.value=l)}),t.emit("change",a.value)};return S(()=>{o.value=e.active,console.log("activeRef.value :>> ",o.value)}),{activeRef:o,listDataRef:n,onCommand:i}}});const oa={class:"custom-dropdown-contaienr"},na={class:"el-dropdown-link"};function sa(e,t,o,n,i,u){const a=d("arrow-down"),l=d("el-icon"),c=d("el-dropdown-item"),g=d("el-scrollbar"),C=d("el-dropdown-menu"),f=d("el-dropdown");return v(),h("div",oa,[s(f,null,{dropdown:m(()=>[s(C,null,{default:m(()=>[s(g,{class:"scroll-bar-style",height:"200px"},{default:m(()=>[(v(!0),h(N,null,V(e.listDataRef,p=>(v(),K(c,{key:p.id,onClick:F=>e.onCommand(p.id)},{default:m(()=>[B(D(p.name),1)]),_:2},1032,["onClick"]))),128))]),_:1}),k(` <el-dropdown-item>Action 2</el-dropdown-item>\r
          <el-dropdown-item>Action 3</el-dropdown-item>\r
          <el-dropdown-item disabled>Action 4</el-dropdown-item>\r
          <el-dropdown-item divided>Action 5</el-dropdown-item> `)]),_:1})]),default:m(()=>[_("span",na,[B(D(e.activeRef.name)+" ",1),s(l,{class:"el-icon--right"},{default:m(()=>[s(a)]),_:1})])]),_:1})])}const ua=E(aa,[["render",sa],["__scopeId","data-v-674daa51"],["__file","E:/work/parents_school_institution_pc/src/components/CustomDropdown/CustomDropdown.vue"]]);function la(){const e=Q(),t=r({name:"\u5168\u90E8\u5E74\u7EA7",id:-1}),o=r({name:"\u5168\u90E8\u73ED\u7EA7",id:-1}),n={"background-color":"#F6F8FA",color:"#606266"},i=r(),u=b=>w(b).utc().format("YYYY-MM-DD HH:mm:ss"),a=r(1),l=r(10),c=r(0),g=b=>{a.value=b,f()},C=r(),f=async()=>{const b=$().getSchoolInfo,q={limit:10,page:a.value,school_id:b.id,grade:t.value.id!==-1?t.value.id:"",class:o.value.id!==-1?o.value.id:"",student_id:18},G=await ce(q);C.value=G,i.value=G.data,console.log("tableDataRef.value :>> ",i.value),c.value=G.total};f();const p=$(),F=r(p.getGradeList),y=r(p.getClassList),A=b=>{console.log("val :>> ",b),t.value=b,f()},I=b=>{console.log("val :>> ",b),o.value=b,f()},P=b=>{console.log("val :>> ",b),e.push({path:"/parentsLearnDetailsView",query:{uid:b.uid,student_id:b.student_id}})};return{studyDashboardCompleteParentListRef:C,gradeActiveRef:t,classActiveRef:o,headerCellStyle:n,tableDataRef:i,fmtDateFn:u,...Y(),gradeListRef:F,classListRef:y,gradeChange:A,classChange:I,pageRef:a,limitRef:l,totalRef:c,onChangePage:g,onToView:P}}const ia=R({name:"ParentSupportWorkSituation",components:{CustomCard:L,CustomDropdown:ua,CustomPagination:x},setup(){return{...la()}}});const ra={class:"parent-support-work-situation-container"},ca={class:"filter-box"},da=B(" \u67E5\u770B "),_a={class:"flex-end"};function pa(e,t,o,n,i,u){const a=d("CustomDropdown"),l=d("el-table-column"),c=d("el-button"),g=d("el-table"),C=d("CustomPagination"),f=d("CustomCard");return v(),h("div",ra,[s(f,{title:"\u5BB6\u957F\u4ECA\u65E5\u5B66\u4E60\u60C5\u51B5"},{default:m(()=>[_("div",ca,[s(a,{active:e.gradeActiveRef,listData:e.gradeListRef,onChange:e.gradeChange},null,8,["active","listData","onChange"]),s(a,{class:"filter-class-style",active:e.classActiveRef,listData:e.classListRef,onChange:e.classChange},null,8,["active","listData","onChange"])]),s(g,{class:"el-table-style",data:e.tableDataRef,"header-cell-style":e.headerCellStyle,style:{width:"100%"}},{default:m(()=>[s(l,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(l,{prop:"wx_name",label:"\u5BB6\u957F"}),s(l,{prop:"studentInfo",label:"\u5B66\u751F\u4FE1\u606F",align:"center"},{default:m(p=>[B(D(p.row.name)+" | "+D(e.getGradeClassName(p.row.year,p.row.class)),1)]),_:1}),s(l,{prop:"daily_count",label:"\u6BCF\u65E5\u4E00\u5B66",align:"center"}),s(l,{prop:"weekly_count",label:"\u6BCF\u5468\u4E00\u505A",align:"center"}),s(l,{prop:"monthy_count",label:"\u6BCF\u6708\u4E00\u8BFE",align:"center"}),s(l,{prop:"date",label:"\u6700\u8FD1\u4E0A\u7EBF\u65F6\u95F4",align:"center"},{default:m(p=>[B(D(e.fmtDateFn(p.row.date)),1)]),_:1}),s(l,{prop:"date",label:"\u64CD\u4F5C",align:"center"},{default:m(p=>[s(c,{type:"primary",link:"",onClick:F=>e.onToView(p.row)},{default:m(()=>[da]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","header-cell-style"]),_("footer",_a,[s(C,{page:e.pageRef,limit:e.limitRef,total:e.totalRef,onChange:e.onChangePage},null,8,["page","limit","total","onChange"])])]),_:1})])}const ma=E(ia,[["render",pa],["__scopeId","data-v-e2e386c8"],["__file","E:/work/parents_school_institution_pc/src/views/studyDataAnalysis/dataVisualizationView/components/ParentSupportWorkSituation/ParentSupportWorkSituation.vue"]]);function ya(){const e=r({}),t=r({}),o=async()=>{const u={school_id:$().getSchoolInfo.id,type:"term"},a=await de(u);e.value=a},n=async()=>{const u={school_id:$().getSchoolInfo.id},a=await _e(u);t.value=a};return o(),n(),{studyDashboardCompleteCountRef:e,studyDashboardCompleteDailyRef:t}}const fa={name:"dataVisualizationView",components:{CompletedAmountOverview:$e,OverviewChart:Qe,HotRanking:pt,LearningRanking:wt,HotTag:Nt,FamilyCompositionAnalysis:Ot,GradeParentsBoundNum:Kt,ClassBindingParentRanking:ta,ParentSupportWorkSituation:ma},setup(){return{...ya()}}};const ga={class:"data-visualization-view-container"},va={class:"row-style flex"},ha={class:"row-style flex"},Ca={class:"row-style flex"},Da={class:"row-style"};function ba(e,t,o,n,i,u){const a=d("CompletedAmountOverview"),l=d("OverviewChart"),c=d("HotRanking"),g=d("LearningRanking"),C=d("HotTag"),f=d("FamilyCompositionAnalysis"),p=d("GradeParentsBoundNum"),F=d("ClassBindingParentRanking"),y=d("ParentSupportWorkSituation");return v(),h("div",ga,[k(" \u5B8C\u6210\u91CF\u6982\u89C8 "),s(a,{dataSource:e.studyDashboardCompleteCountRef,dataSourceAvg:e.studyDashboardCompleteDailyRef},null,8,["dataSource","dataSourceAvg"]),k(" \u6982\u89C8\u56FE\u8868 "),s(l,{class:"overview-chart-style"}),_("div",va,[k(" \u70ED\u95E8\u5185\u5BB9\u6392\u884C "),s(c),k(" \u5B66\u4E60\u6392\u884C\u699C "),s(g)]),_("div",ha,[k(" \u91CD\u70B9\u5173\u6CE8\u4E3B\u9898 "),s(C),k(" \u5BB6\u5EAD\u6784\u6210\u5206\u6790 "),s(f)]),_("div",Ca,[k(" \u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570 "),s(p),k(" \u73ED\u7EA7\u7ED1\u5B9A\u5BB6\u957F\u4EBA\u6570\u6392\u540D "),s(F)]),_("div",Da,[k(" \u5BB6\u957F\u4ECA\u65E5\u5B66\u4E60\u60C5\u51B5 "),s(y)])])}const Fa=E(fa,[["render",ba],["__scopeId","data-v-4f24b89a"],["__file","E:/work/parents_school_institution_pc/src/views/studyDataAnalysis/dataVisualizationView/dataVisualizationView.vue"]]);export{Fa as default};