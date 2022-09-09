import{g as H,a as K}from"./ak.70a0bce5.js";import{d as b,r as u,k,_ as D,b as c,o as y,c as f,g as _,F as I,f as L,e as s,w as g,t as h,s as U,v as T,x as O,n as z,j as Q,i as A,h as X,u as J}from"./index.f54b11e4.js";import{i as M,C as w,D as q}from"./CustomCard.c44aacf6.js";import{h as R}from"./moment.9709ab41.js";import{u as F,r as Z}from"./school.2999f601.js";import{u as ee,f as ae,a as te}from"./family.0a8de3f4.js";import{a as ne,d as oe,b as se,e as ie,f as le,g as re,s as ue,h as ce}from"./study.56b03109.js";const de=b({name:"CompletedAmountOverview",props:{dataSource:{type:Object,default:()=>({})},dataSourceAvg:{type:Object,default:()=>({})}},setup(e){const a=u({total:{title:"\u603B\u8BBF\u95EE\u91CF",icon:"overview_total_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u8BBF\u95EE\u91CF",num:0}},daily:{title:"\u6BCF\u65E5\u4E00\u5B66\u603B\u5B66\u4E60\u91CF",icon:"overview_daily_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}},weekly:{title:"\u6BCF\u5468\u4E00\u505A\u603B\u5B8C\u6210\u91CF",icon:"overview_weekly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B8C\u6210\u91CF",num:0}},monthy:{title:"\u6BCF\u6708\u4E00\u8BFE\u603B\u5B66\u4E60\u91CF",icon:"overview_monthly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}}}),t=u(e.dataSource),n=u(e.dataSourceAvg);return k(()=>{t.value=e.dataSource,n.value=e.dataSourceAvg,Object.keys(t.value).length>0&&(a.value.total.num=t.value.daily+t.value.weekly+t.value.monthy,a.value.total.tag.num=t.value.all_today,a.value.total.averageDaily.num=Math.ceil(n.value.all_num/n.value.day_num),a.value.daily.num=t.value.daily,a.value.daily.tag.num=t.value.daily,a.value.daily.averageDaily.num=Math.ceil(n.value.daily/n.value.day_num),a.value.weekly.num=t.value.weekly,a.value.weekly.tag.num=t.value.weekly_today,a.value.weekly.averageDaily.num=Math.ceil(n.value.weekly/n.value.day_num),a.value.monthy.num=t.value.monthy,a.value.monthy.tag.num=t.value.monthy_today,a.value.monthy.averageDaily.num=Math.ceil(n.value.monthy/n.value.day_num))}),{overviewListRef:a,getImageUrl:H}}});const _e={class:"completed-amount-overview-container"},pe={class:"completed-amount-overview-ul flex"},me={class:"flex"},ge={class:"title-style"},ye={class:"flex-start align-end"},ve={class:"total-num-style"},fe={class:"tag-box flex-center"},Ce={class:"flex-start"},he={class:"average-daily-title-style"},De={class:"average-daily-num-style"};function be(e,a,t,n,r,i){const o=c("el-image"),l=c("el-card");return y(),f("div",_e,[_("ul",pe,[(y(!0),f(I,null,L(e.overviewListRef,(d,v)=>(y(),f("li",{key:v,class:"completed-amount-overview-li"},[s(l,{class:"el-card-style","body-style":{padding:"0px"}},{default:g(()=>[_("header",me,[_("p",ge,h(d.title),1),s(o,{class:"header-icon-style",src:e.getImageUrl(d.icon+".png")},null,8,["src"])]),_("article",ye,[_("p",ve,h(d.num),1),_("div",fe,[_("p",null,h(d.tag.title),1),_("p",null,h(d.tag.num),1)])]),_("footer",Ce,[_("p",he,h(d.averageDaily.title),1),_("p",De,h(d.averageDaily.num),1)])]),_:2},1024)]))),128))])])}const Ee=D(de,[["render",be],["__scopeId","data-v-13e0d649"]]),Pe=b({name:"LearningTrend",props:{echartsData:{type:[Array,Object],default:()=>[]},dateType:{type:String,defualt:""}},setup(e){const a=u(),t=u(),n=u(["01\u65E5","02\u65E5","03\u65E5","04\u65E5","05\u65E5","06\u65E5"]),r=u([1e3,2e3,3e3,4e3,5e3,6e3]),i=(o,l)=>{const d=[];o.forEach(E=>{E.type===l&&d.push(E)});const v=new Set(d),C=Array.from(v),m=[],p=[];return Array.isArray(C)&&C.forEach(E=>{E.dates&&m.push(E.dates),E.count&&p.push(E.count)}),{xAxisData:m,seriesData:p}};return U(()=>{const o=document.getElementById("LearningTrendChart"),l=M(o);k(()=>{a.value=e.echartsData,t.value=e.dateType;const d=i(a.value,t.value);n.value=d.xAxisData,r.value=d.seriesData;const v=u({xAxis:{type:"category",data:n.value},yAxis:{type:"value"},grid:{top:"5%",left:"5%"},series:[{data:r.value,type:"bar",barWidth:"24",itemStyle:{borderRadius:0,color:"#1890FF"}}]});v.value&&l.setOption(v.value)})}),{}}});const W=e=>(T("data-v-f659322c"),e=e(),O(),e),Ae={class:"learning-trend-container"},Re=W(()=>_("header",null,[_("p",{class:"title-style"},"\u5B66\u4E60\u8D8B\u52BF")],-1)),ke=W(()=>_("article",null,[_("div",{id:"LearningTrendChart",class:"learning-trend-chart"})],-1)),Se=[Re,ke];function Fe(e,a,t,n,r,i){return y(),f("div",Ae,Se)}const we=D(Pe,[["render",Fe],["__scopeId","data-v-f659322c"]]);function $(){const e=(n,r)=>{const i=F().classList;console.log("calssList :>> ",i,Array.isArray(i));let o={id:-1,name:"\u5F02\u5E38\u6570\u636E"};return Array.isArray(i)&&(o=i[r]),`${a(n)}(${o?o.name:""})`},a=n=>{const r=F().gradeList;let i={id:-1,name:"\u5F02\u5E38\u6570\u636E"};if(Array.isArray(r))return i=r[parseInt(R().format("YYYY"))-n],i.name};return{getGradeClassName:e,getGraderName:a,getParentsName:n=>`${ee().getFamilyRoleList[n].name}`}}const $e=b({name:"CustomStudyRanking",props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const a=u(),t=r=>{const i=[];for(const o of r)i.push({name:$().getGradeClassName(o.year,o.class),num:`${o.count}\u4EBA`});return i},n=u([{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"}]);return k(()=>{if(a.value=e.listData,a.value!==void 0&&a.value.data){n.value=t(a.value.data);return}n.value=[],console.log("StudyRankingListRef.value :>> ",n.value)}),{StudyRankingListRef:n}}});const Be={class:"custom-study-ranking-container"},Ie={key:0,class:"study-ranking-ul"},Le={class:"left-box-style flex-start"},Te={class:"study-ranking-name-style"},Oe={class:"study-ranking-num-style"};function Ue(e,a,t,n,r,i){return y(),f("div",Be,[e.StudyRankingListRef.length>0?(y(),f("ul",Ie,[(y(!0),f(I,null,L(e.StudyRankingListRef,(o,l)=>(y(),f("li",{key:l,class:"study-ranking-li flex"},[_("div",Le,[_("p",{class:z(["study-ranking-sort-style",{"top-three-sort-style":l<=2,"top-other-sort-style":l>2}])},h(l+1),3),_("p",Te,h(o.name),1)]),_("p",Oe,h(o.num),1)]))),128))])):Q("",!0)])}const x=D($e,[["render",Ue],["__scopeId","data-v-684f5e50"]]),Ne=b({name:"StudyRanking",components:{CustomStudyRanking:x},props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const a=u();return k(()=>{a.value=e.listData}),{listDataRef:a}}});const Me=e=>(T("data-v-2ed10ece"),e=e(),O(),e),We={class:"study-ranking-container"},xe=Me(()=>_("header",null,[_("p",{class:"title-style"},"\u73ED\u7EA7\u5B66\u4E60\u4EBA\u6570\u6392\u540D")],-1));function Ve(e,a,t,n,r,i){const o=c("CustomStudyRanking");return y(),f("div",We,[xe,_("article",null,[s(o,{listData:e.listDataRef},null,8,["listData"])])])}const Ye=D(Ne,[["render",Ve],["__scopeId","data-v-2ed10ece"]]);function Ge(){const e=u("daily"),a=u("2022-08-19"),t=u("2022-08-19"),n=()=>{a.value=R().format("YYYY-MM-DD"),t.value=R().format("YYYY-MM-DD")},r=()=>{const m=R().weekday()===0?7:R().weekday();a.value=R().subtract(m-1,"days").format("YYYY-MM-DD"),t.value=R().add(7-m,"days").format("YYYY-MM-DD")},i=()=>{const m=R().format("YYYY"),p=R().format("MM");a.value=R([m,0,1]).month(parseInt(p)-1).format("YYYY-MM-DD"),t.value=R([m,0,31]).month(parseInt(p)-1).format("YYYY-MM-DD")},o=m=>{if(typeof m.paneName=="string")switch(e.value=m.paneName,e.value){case"daily":n();break;case"weekly":r();break;case"monthy":i();break}d(a.value,t.value),C(e.value)},l=u(),d=async(m,p)=>{const S=await ne({start_date:m,end_date:p});l.value=Array.isArray(S)?S:[S]},v=u(),C=async m=>{const E=await oe({limit:7,page:1,type:m,school_id:1});v.value=E};return U(()=>{d(a.value,t.value),C(e.value)}),{activeTypeRef:e,changeActiveType:o,studyDashboardCompleteListRef:l,studyDashboardRankClassRef:v}}const je=b({name:"OverviewChart",components:{LearningTrend:we,StudyRanking:Ye},setup(){return{...Ge()}}});const He={class:"overview-chart-container"},Ke={class:"flex"};function ze(e,a,t,n,r,i){const o=c("el-tab-pane"),l=c("el-tabs"),d=c("LearningTrend"),v=c("StudyRanking"),C=c("el-card");return y(),f("div",He,[s(C,{class:"el-card-style","body-style":{padding:"0px"}},{default:g(()=>[_("header",null,[s(l,{modelValue:e.activeTypeRef,"onUpdate:modelValue":a[0]||(a[0]=m=>e.activeTypeRef=m),class:"demo-tabs",onTabClick:e.changeActiveType},{default:g(()=>[s(o,{label:"\u6BCF\u65E5\u4E00\u5B66",name:"daily"}),s(o,{label:"\u6BCF\u5468\u4E00\u505A",name:"weekly"}),s(o,{label:"\u6BCF\u6708\u4E00\u8BFE",name:"monthy"})]),_:1},8,["modelValue","onTabClick"])]),_("article",Ke,[s(d,{echartsData:e.studyDashboardCompleteListRef,dateType:e.activeTypeRef},null,8,["echartsData","dateType"]),s(v,{listData:e.studyDashboardRankClassRef},null,8,["listData"])])]),_:1})])}const Qe=D(je,[["render",ze],["__scopeId","data-v-5d5589b3"]]),Xe=b({name:"CustomPagination",props:{total:{type:Number,default:0},page:{type:Number,defualt:1},limit:{type:Number,defualt:10}},setup(e,a){const t=u(0),n=u(1),r=u(10),i=o=>{n.value=o,a.emit("change",n.value)};return k(()=>{t.value=e.total,e.page&&(n.value=e.page),e.limit&&(r.value=e.limit)}),{totalRef:t,pageRef:n,limitRef:r,changePage:i}}});const Je={class:"custom-pagination-container flex-start"},qe={class:"demonstration"};function Ze(e,a,t,n,r,i){const o=c("el-pagination");return y(),f("div",Je,[_("div",qe,"\u5171"+h(e.totalRef)+"\u6761\u8BB0\u5F55",1),s(o,{small:"",background:"",layout:"prev, pager, next",total:e.totalRef,"current-page":e.pageRef,onCurrentChange:e.changePage},null,8,["total","current-page","onCurrentChange"])])}const N=D(Xe,[["render",Ze],["__scopeId","data-v-2802132b"]]);function ea(){const e=u("daily"),a=u(1),t=u(10),n=u(0),r=d=>{a.value=d,console.log("pageRef.value :>> ",a.value)},i=u(),o=d=>{e.value=d.val},l=async d=>{const v={limit:`${t.value}`,page:`${a.value}`,type:d},C=await se(v);i.value=C.data,typeof C.total=="number"&&(n.value=C.total)};return k(()=>{const d=e.value;typeof d=="string"&&l(d)}),{hotConentList:i,changeTabs:o,paramTypeRef:e,changePage:r,pageRef:a,limitRef:t,totalRef:n}}const aa=b({name:"HotRanking",components:{CustomPagination:N},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...ea()}}});const ta=e=>(T("data-v-2ae22518"),e=e(),O(),e),na={class:"hot-ranking-container"},oa={class:"flex"},sa=ta(()=>_("p",{class:"title-style"},"\u70ED\u95E8\u5185\u5BB9\u6392\u884C",-1)),ia=A("\u6BCF\u65E5\u4E00\u5B66"),la=A("\u6BCF\u5468\u4E00\u505A"),ra=A("\u6BCF\u6708\u4E00\u8BFE"),ua={class:"flex-end"};function ca(e,a,t,n,r,i){const o=c("el-radio-button"),l=c("el-radio-group"),d=c("el-table-column"),v=c("el-table"),C=c("CustomPagination"),m=c("el-card");return y(),f("div",na,[s(m,{class:"el-card-style","body-style":{padding:"0px"}},{default:g(()=>[_("header",oa,[sa,s(l,{class:"el-radio-group-style",modelValue:e.paramTypeRef,"onUpdate:modelValue":a[0]||(a[0]=p=>e.paramTypeRef=p),style:{"margin-bottom":"30px"}},{default:g(()=>[s(o,{label:"daily"},{default:g(()=>[ia]),_:1}),s(o,{label:"weekly"},{default:g(()=>[la]),_:1}),s(o,{label:"monthy"},{default:g(()=>[ra]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[s(v,{data:e.hotConentList,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:g(()=>[s(d,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(d,{prop:"title",label:"\u5185\u5BB9\u6807\u9898"}),s(d,{prop:"count",label:"\u5B8C\u6210\u91CF",width:"110",align:"center"})]),_:1},8,["data","header-cell-style"])]),_("footer",ua,[s(C,{total:e.totalRef,page:e.pageRef,limit:e.limitRef,onChangePage:e.changePage},null,8,["total","page","limit","onChangePage"])])]),_:1})])}const da=D(aa,[["render",ca],["__scopeId","data-v-2ae22518"]]);function _a(){const e=F().schoolInfo,a=u("grade"),t=u(),n=async r=>{const i=e.id,l=await ie({type:r,school_id:i});console.log("res_\u5B66\u4E60\u6392\u884C :>> ",l),t.value=l,console.log("studyDashboardRankClassTypeRef.value :>> ",t.value)};return k(()=>{n(a.value)}),{tabPositionRef:a,studyDashboardRankClassTypeRef:t}}const pa=b({name:"LearningRanking",components:{CustomPagination:N},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},..._a(),...$()}}});const ma=e=>(T("data-v-975a9dfe"),e=e(),O(),e),ga={class:"learning-ranking-container"},ya={class:"flex"},va=ma(()=>_("p",{class:"title-style"},"\u5B66\u4E60\u6392\u884C",-1)),fa=A("\u5E74\u7EA7\u6392\u884C"),Ca=A("\u73ED\u7EA7\u6392\u884C"),ha={class:"flex-end"};function Da(e,a,t,n,r,i){const o=c("el-radio-button"),l=c("el-radio-group"),d=c("el-table-column"),v=c("el-table"),C=c("CustomPagination"),m=c("el-card");return y(),f("div",ga,[s(m,{class:"el-card-style","body-style":{padding:"0px"}},{default:g(()=>[_("header",ya,[va,s(l,{class:"el-radio-group-style",modelValue:e.tabPositionRef,"onUpdate:modelValue":a[0]||(a[0]=p=>e.tabPositionRef=p),style:{"margin-bottom":"30px"}},{default:g(()=>[s(o,{label:"grade"},{default:g(()=>[fa]),_:1}),s(o,{label:"class"},{default:g(()=>[Ca]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[s(v,{data:e.studyDashboardRankClassTypeRef,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:g(()=>[s(d,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(d,{label:"\u540D\u79F0",width:"124"},{default:g(p=>[A(h(e.getGradeClassName(p.row.info.year,p.row.info.class)),1)]),_:1}),s(d,{label:"\u5B66\u4E60\u603B\u91CF",align:"center"},{default:g(p=>[A(h(p.row.count.daily),1)]),_:1}),s(d,{label:"\u6D3B\u52A8\u603B\u91CF",align:"center"},{default:g(p=>[A(h(p.row.count.weekly),1)]),_:1}),s(d,{label:"\u603B\u5B8C\u6210\u91CF",align:"center"},{default:g(p=>[A(h(p.row.count.monthy),1)]),_:1})]),_:1},8,["data","header-cell-style"])]),_("footer",ha,[s(C)])]),_:1})])}const ba=D(pa,[["render",Da],["__scopeId","data-v-975a9dfe"]]),Ea=b({name:"WordCloud",props:{listData:{type:[Array,Object],default:()=>[]}},setup(e){const a=u();return k(()=>{a.value=e.listData}),{listRef:a,getRandom:K}}});const Pa={class:"word-cloud-container"},Aa={class:"cloud",role:"navigation","aria-label":"Webdev word cloud"},Ra=["data-weight"];function ka(e,a,t,n,r,i){return y(),f("div",Pa,[_("ul",Aa,[(y(!0),f(I,null,L(e.listRef,o=>(y(),f("li",{key:o.id},[_("a",{href:"#","data-weight":e.getRandom(1,9)},h(o.name),9,Ra)]))),128))])])}const Sa=D(Ea,[["render",ka],["__scopeId","data-v-1c0bc7b5"]]),Fa=async e=>await Z.post("https://api.ps.familyeducation.org.cn/v1/tag/info/list",e);function wa(){const e=u();return(async()=>{const n=await Fa({});e.value=n})(),{tagInfoListRef:e}}const $a=b({name:"HotTag",components:{WordCloud:Sa,CustomCard:w},setup(){return{...wa()}}});const Ba={class:"hot-tag-container"},Ia={class:"word-cloud-box"};function La(e,a,t,n,r,i){const o=c("WordCloud"),l=c("CustomCard");return y(),f("div",Ba,[s(l,{title:"\u91CD\u70B9\u5173\u6CE8\u4E3B\u9898"},{default:g(()=>[_("div",Ia,[s(o,{listData:e.tagInfoListRef},null,8,["listData"])])]),_:1})])}const Ta=D($a,[["render",La],["__scopeId","data-v-9dc1caf8"]]);function Oa(){console.log("useSchoolStore().schoolInfo :>> ",F().getSchoolInfo);const e=F().getSchoolInfo,a=u();return(async()=>{const n={school_id:e.id},r=await le(n);console.log("res_\u5BB6\u5EAD\u6784\u6210\u5206\u6790 :>> ",r);const i=[];Array.isArray(r)&&r.forEach(o=>{const l=$().getParentsName(o.family_role_id);i.push({value:o.count,name:l})}),a.value=i})(),{familyDashboardMemberGroupRoleRef:a}}const Ua=b({name:"FamilyCompositionAnalysis",components:{CustomCard:w,DoughnutChart:q},setup(){return{legend:{orient:"vertical",top:"center",right:90},title:{text:"\u5BB6\u5EAD\u6784\u6210",subtext:"",left:"25%",top:"center",textStyle:{fontSize:14},subtextStyle:{fontSize:16}},...Oa()}}});const Na={class:"family-composition-analysis-container"};function Ma(e,a,t,n,r,i){const o=c("DoughnutChart"),l=c("CustomCard");return y(),f("div",Na,[s(l,{title:"\u5BB6\u5EAD\u6784\u6210\u5206\u6790"},{default:g(()=>[s(o,{legend:e.legend,title:e.title,width:"60%",left:"0",echartsData:e.familyDashboardMemberGroupRoleRef},null,8,["legend","title","echartsData"])]),_:1})])}const Wa=D(Ua,[["render",Ma],["__scopeId","data-v-5fd1d56a"]]),xa=b({name:"BarChart",props:{gradeNames:{type:Array,default:()=>[]},bindNums:{type:Array,default:()=>[]}},setup(e){return U(()=>{const a=u(),t=u(),n=document.getElementById("barChart"),r=M(n),i=u({title:{text:""},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1,bottom:0},grid:{top:24,left:"3%",right:"4%",bottom:24,containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:a},series:[{name:"\u5E74\u7EA7",type:"bar",label:{show:!0,color:"#fff",fontSize:12},data:t}],barWidth:16,color:"#1890FF"});k(()=>{a.value=e.gradeNames,t.value=e.bindNums,i.value&&r.setOption(i.value)})}),{}}});const Va={id:"barChart",class:"bar-chart-container"};function Ya(e,a,t,n,r,i){return y(),f("div",Va)}const Ga=D(xa,[["render",Ya],["__scopeId","data-v-c1ab10cf"]]);function ja(){const e=u(),a=u(),t=u(),n=()=>{a.value=[],t.value=[],Array.isArray(e.value)&&e.value.forEach(i=>{a.value.push($().getGraderName(i.year)),t.value.push(i.count)}),console.log("gradeNamesRef :>> ",a.value),console.log("bindNumsRef :>> ",t.value)};return(async()=>{const o={school_id:F().getSchoolInfo.id},l=await ae(o);console.log("res_\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570 :>> ",l),e.value=l,n()})(),{gradeNamesRef:a,bindNumsRef:t}}const Ha=b({name:"GradeParentsBoundNum",components:{CustomCard:w,BarChart:Ga},setup(){return{...ja()}}});const Ka={class:"grade-parents-bound-num-container"};function za(e,a,t,n,r,i){const o=c("BarChart"),l=c("CustomCard");return y(),f("div",Ka,[s(l,{title:"\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570"},{default:g(()=>[s(o,{bindNums:e.bindNumsRef,gradeNames:e.gradeNamesRef},null,8,["bindNums","gradeNames"])]),_:1})])}const Qa=D(Ha,[["render",za],["__scopeId","data-v-ee246aa4"]]);function Xa(){const e=u(),a=u();return(async()=>{const r=await te({school_id:1});console.log("res_\u73ED\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6392\u540D :>> ",r),e.value=r,a.value=r.data})(),{familyDashboardGroupParentClassRef:e,familyDashboardGroupParentClassListDataRef:a}}const Ja=b({name:"ClassBindingParentRanking",components:{CustomCard:w,CustomStudyRanking:x},setup(){return{...Xa()}}});const qa={class:"class-binding-parent-ranking-container"};function Za(e,a,t,n,r,i){const o=c("CustomStudyRanking"),l=c("CustomCard");return y(),f("div",qa,[s(l,{title:"\u73ED\u7EA7\u7ED1\u5B9A\u5BB6\u957F\u4EBA\u6570\u6392\u540D"},{default:g(()=>[s(o,{listData:e.familyDashboardGroupParentClassRef},null,8,["listData"])]),_:1})])}const et=D(Ja,[["render",Za],["__scopeId","data-v-7efec27b"]]),at=b({name:"CustomDropdown",props:{active:{type:Object,default:()=>({name:"\u9ED8\u8BA4\u9009\u9879",id:-1})},listData:{type:[Array,Object],default:()=>[]}},setup(e,a){const t=u(),n=u(e.listData),r=i=>{console.log("val :>> ",i),console.log("active.id :>> ",n.value);const o=u();n.value.forEach(l=>{i===l.id&&(o.value=l)}),a.emit("change",o.value)};return k(()=>{t.value=e.active,console.log("activeRef.value :>> ",t.value)}),{activeRef:t,listDataRef:n,onCommand:r}}});const tt={class:"custom-dropdown-contaienr"},nt={class:"el-dropdown-link"};function ot(e,a,t,n,r,i){const o=c("arrow-down"),l=c("el-icon"),d=c("el-dropdown-item"),v=c("el-dropdown-menu"),C=c("el-dropdown");return y(),f("div",tt,[s(C,null,{dropdown:g(()=>[s(v,null,{default:g(()=>[(y(!0),f(I,null,L(e.listDataRef,m=>(y(),X(d,{key:m.id,onClick:p=>e.onCommand(m.id)},{default:g(()=>[A(h(m.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:g(()=>[_("span",nt,[A(h(e.activeRef.name)+" ",1),s(l,{class:"el-icon--right"},{default:g(()=>[s(o)]),_:1})])]),_:1})])}const st=D(at,[["render",ot],["__scopeId","data-v-2df3e5b0"]]);function it(){const e=J(),a=u({name:"\u5168\u90E8\u5E74\u7EA7",id:-1}),t=u({name:"\u5168\u90E8\u73ED\u7EA7",id:-1}),n={"background-color":"#F6F8FA",color:"#606266"},r=u(),i=P=>R(P).format("YYYY-MM-DD HH:mm:ss"),o=u(1),l=u(10),d=u(0),v=P=>{o.value=P},C=u(),m=async()=>{const P=parseInt(R().format("YYYY"))-a.value.id,j={limit:10,page:1,school_id:1,year:a.value.id!==-1?P:"",class:t.value.id!==-1?t.value.id:"",student_id:18},B=await re(j);console.log("res_\u5BB6\u957F\u652F\u6301\u5DE5\u4F5C\u60C5\u51B5 :>> ",B),C.value=B,r.value=B.data,d.value=B.total};m();const p=F(),E=u(p.getGradeList),S=u(p.getClassList),V=P=>{console.log("val :>> ",P),a.value=P,m()},Y=P=>{console.log("val :>> ",P),t.value=P,m()},G=P=>{console.log("val :>> ",P),e.push({path:"/parentsLearnDetailsView",query:{uid:P.uid,student_id:P.student_id}})};return{studyDashboardCompleteParentListRef:C,gradeActiveRef:a,classActiveRef:t,headerCellStyle:n,tableDataRef:r,fmtDateFn:i,...$(),gradeListRef:E,classListRef:S,gradeChange:V,classChange:Y,pageRef:o,limitRef:l,totalRef:d,onChangePage:v,onToView:G}}const lt=b({name:"ParentSupportWorkSituation",components:{CustomCard:w,CustomDropdown:st,CustomPagination:N},setup(){return{...it()}}});const rt={class:"parent-support-work-situation-container"},ut={class:"filter-box"},ct=A(" \u67E5\u770B "),dt={class:"flex-end"};function _t(e,a,t,n,r,i){const o=c("CustomDropdown"),l=c("el-table-column"),d=c("el-button"),v=c("el-table"),C=c("CustomPagination"),m=c("CustomCard");return y(),f("div",rt,[s(m,{title:"\u5BB6\u957F\u652F\u6301\u5DE5\u4F5C\u60C5\u51B5"},{default:g(()=>[_("div",ut,[s(o,{active:e.gradeActiveRef,listData:e.gradeListRef,onChange:e.gradeChange},null,8,["active","listData","onChange"]),s(o,{class:"filter-class-style",active:e.classActiveRef,listData:e.classListRef,onChange:e.classChange},null,8,["active","listData","onChange"])]),s(v,{class:"el-table-style",data:e.tableDataRef,"header-cell-style":e.headerCellStyle,style:{width:"100%"}},{default:g(()=>[s(l,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),s(l,{prop:"wx_name",label:"\u5BB6\u957F"}),s(l,{prop:"studentInfo",label:"\u5B66\u751F\u4FE1\u606F",align:"center"},{default:g(p=>[A(h(p.row.name)+" | "+h(e.getGradeClassName(p.row.year,p.row.class)),1)]),_:1}),s(l,{prop:"daily_count",label:"\u6BCF\u65E5\u4E00\u5B66",align:"center"}),s(l,{prop:"weekly_count",label:"\u6BCF\u5468\u4E00\u505A",align:"center"}),s(l,{prop:"monthy_count",label:"\u6BCF\u6708\u4E00\u8BFE",align:"center"}),s(l,{prop:"date",label:"\u6700\u8FD1\u4E0A\u7EBF\u65F6\u95F4",align:"center"},{default:g(p=>[A(h(e.fmtDateFn(p.row.date)),1)]),_:1}),s(l,{prop:"date",label:"\u64CD\u4F5C",align:"center"},{default:g(p=>[s(d,{type:"primary",link:"",onClick:E=>e.onToView(p.row)},{default:g(()=>[ct]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","header-cell-style"]),_("footer",dt,[s(C,{page:e.pageRef,limit:e.limitRef,total:e.totalRef,onChange:e.onChangePage},null,8,["page","limit","total","onChange"])])]),_:1})])}const pt=D(lt,[["render",_t],["__scopeId","data-v-24bf8fd7"]]);function mt(){const e=u({}),a=u({}),t=async()=>{const i=await ue({});e.value=i},n=async()=>{const i=await ce({});a.value=i};return t(),n(),{studyDashboardCompleteCountRef:e,studyDashboardCompleteDailyRef:a}}const gt={name:"dataVisualizationView",components:{CompletedAmountOverview:Ee,OverviewChart:Qe,HotRanking:da,LearningRanking:ba,HotTag:Ta,FamilyCompositionAnalysis:Wa,GradeParentsBoundNum:Qa,ClassBindingParentRanking:et,ParentSupportWorkSituation:pt},setup(){return{...mt()}}};const yt={class:"data-visualization-view-container"},vt={class:"row-style flex"},ft={class:"row-style flex"},Ct={class:"row-style flex"},ht={class:"row-style"};function Dt(e,a,t,n,r,i){const o=c("CompletedAmountOverview"),l=c("OverviewChart"),d=c("HotRanking"),v=c("LearningRanking"),C=c("HotTag"),m=c("FamilyCompositionAnalysis"),p=c("GradeParentsBoundNum"),E=c("ClassBindingParentRanking"),S=c("ParentSupportWorkSituation");return y(),f("div",yt,[s(o,{dataSource:e.studyDashboardCompleteCountRef,dataSourceAvg:e.studyDashboardCompleteDailyRef},null,8,["dataSource","dataSourceAvg"]),s(l,{class:"overview-chart-style"}),_("div",vt,[s(d),s(v)]),_("div",ft,[s(C),s(m)]),_("div",Ct,[s(p),s(E)]),_("div",ht,[s(S)])])}const Ft=D(gt,[["render",Dt],["__scopeId","data-v-0abd23c2"]]);export{Ft as default};
