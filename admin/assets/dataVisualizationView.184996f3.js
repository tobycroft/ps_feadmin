import{g as J,a as K}from"./ak.28e5d0de.js";import{d as B,b as c,k as F,_ as R,r as d,o as g,c as h,h as _,F as Y,f as L,a as u,w as m,t as D,v as O,x as N,y as T,n as Q,j as X,i as A,C as W,D as H,g as Z,u as ee}from"./index.9847bb85.js";import{i as j,C as P,D as te}from"./CustomCard.0410bc1c.js";import{h as $}from"./moment.9709ab41.js";import{u as w}from"./school.3fc011ac.js";import{u as ae,f as oe,a as ne}from"./family.fd086cdd.js";import{a as se,u as le,b as ue,v as re,w as ce,x as ie,y as de,s as _e,z as pe}from"./study.f7bdd4cb.js";import"./request.73daf80f.js";const me=B({name:"CompletedAmountOverview",props:{dataSource:{type:Object,default:()=>({})},dataSourceAvg:{type:Object,default:()=>({})}},setup(e){const t=c({total:{title:"\u603B\u8BBF\u95EE\u91CF",icon:"overview_total_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u8BBF\u95EE\u91CF",num:0}},daily:{title:"\u6BCF\u65E5\u4E00\u5B66\u603B\u5B66\u4E60\u91CF",icon:"overview_daily_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}},weekly:{title:"\u6BCF\u5468\u4E00\u505A\u603B\u5B8C\u6210\u91CF",icon:"overview_weekly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B8C\u6210\u91CF",num:0}},monthy:{title:"\u6BCF\u6708\u4E00\u8BFE\u603B\u5B66\u4E60\u91CF",icon:"overview_monthly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}}}),o=c(e.dataSource),n=c(e.dataSourceAvg);return F(()=>{o.value=e.dataSource,n.value=e.dataSourceAvg,Object.keys(o.value).length>0&&(t.value.total.num=o.value.total_all,t.value.total.tag.num=o.value.all_today,t.value.total.averageDaily.num=Math.ceil(n.value.all_num/n.value.day_num),t.value.daily.num=o.value.total_daily,t.value.daily.tag.num=o.value.daily,t.value.daily.averageDaily.num=Math.ceil(n.value.daily/n.value.day_num),t.value.weekly.num=o.value.total_weekly,t.value.weekly.tag.num=o.value.weekly_today,t.value.weekly.averageDaily.num=Math.ceil(n.value.weekly/n.value.day_num),t.value.monthy.num=o.value.total_monthy,t.value.monthy.tag.num=o.value.monthy_today,t.value.monthy.averageDaily.num=Math.ceil(n.value.monthy/n.value.day_num))}),{overviewListRef:t,getImageUrl:J}}});const fe={class:"completed-amount-overview-container"},ye={class:"completed-amount-overview-ul flex"},ge={class:"flex"},he={class:"title-style"},ve={class:"flex-start align-end"},Ce={class:"total-num-style"},be={class:"tag-box flex-center"},De={class:"flex-start"},$e={class:"average-daily-title-style"},Ee={class:"average-daily-num-style"};function Re(e,t,o,n,r,s){const a=d("el-image"),l=d("el-card");return g(),h("div",fe,[_("ul",ye,[(g(!0),h(Y,null,L(e.overviewListRef,(i,f)=>(g(),h("li",{key:f,class:"completed-amount-overview-li"},[u(l,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",ge,[_("p",he,D(i.title),1),u(a,{class:"header-icon-style",src:e.getImageUrl(i.icon+".png")},null,8,["src"])]),_("article",ve,[_("p",Ce,D(i.num),1),_("div",be,[_("p",null,D(i.tag.title),1),_("p",null,D(i.tag.num),1)])]),_("footer",De,[_("p",$e,D(i.averageDaily.title),1),_("p",Ee,D(i.averageDaily.num),1)])]),_:2},1024)]))),128))])])}const we=R(me,[["render",Re],["__scopeId","data-v-2b94ccf0"]]),Be=B({name:"LearningTrend",props:{echartsData:{type:[Array,Object],default:()=>[]},dateType:{type:String,defualt:""}},setup(e,t){const o=c(),n=c(),r=c(["01\u65E5","02\u65E5","03\u65E5","04\u65E5","05\u65E5","06\u65E5"]),s=c([1e3,2e3,3e3,4e3,5e3,6e3]),a=(i,f)=>{const v=[];i.forEach(b=>{b.type===f&&v.push(b)});const y=new Set(v),p=Array.from(y),k=[],C=[];return Array.isArray(p)&&p.forEach(b=>{b.dates&&k.push(b.dates),b.count&&C.push(b.count)}),{xAxisData:k,seriesData:C}},l=c({});return O(()=>{const i=document.getElementById("LearningTrendChart"),f=j(i);F(()=>{o.value=e.echartsData,n.value=e.dateType;const v=a(o.value,n.value);r.value=v.xAxisData,s.value=v.seriesData,l.value={xAxis:{type:"category",data:r.value},yAxis:{type:"value"},grid:{top:"5%",left:"5%"},series:[{data:s.value,type:"bar",barWidth:"24",itemStyle:{borderRadius:0,color:"#1890FF"}}]},f.off("click"),f.on("click",function(y){console.log("params :>> ",y),t.emit("select",y.name)}),l.value&&f.setOption(l.value)}),l.value&&f.setOption(l.value)}),{}}});const z=e=>(N("data-v-c04c3402"),e=e(),T(),e),Ae={class:"learning-trend-container"},Fe=z(()=>_("header",null,[_("p",{class:"title-style"},"\u5B66\u4E60\u8D8B\u52BF")],-1)),ke=z(()=>_("article",null,[_("div",{id:"LearningTrendChart",class:"learning-trend-chart"})],-1)),Se=[Fe,ke];function Ie(e,t,o,n,r,s){return g(),h("div",Ae,Se)}const Pe=R(Be,[["render",Ie],["__scopeId","data-v-c04c3402"]]);function M(){const e=(r,s)=>`${t(r)}(${o(s)})`,t=r=>{const s=w().gradeList;if(Array.isArray(s)){const a=new Date().getFullYear();let l=2020;$().isBefore($(`${a}-09-01`))?l=a-Number(r):l=a-Number(r)+1;let i={id:-1,name:"\u5F02\u5E38\u6570\u636E"};for(const f of s)f.id===l&&(i=f);return i.name}},o=r=>{const s=w().classList;let a={id:-1,name:"\u5F02\u5E38\u6570\u636E"};if(Array.isArray(s))for(const l of s)l.id===r&&(a=l);return a?a.name:""};return{getGradeClassName:e,getGraderName:t,getClassName:o,getParentsName:r=>{const s=ae().getFamilyRoleList,a=c("");return s.forEach(l=>{l.id===r&&(a.value=l.name)}),a.value}}}const Ye=B({name:"CustomStudyRanking",props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const t=c(),o=r=>{const s=[];for(const a of r)s.push({name:M().getGradeClassName(a.year,a.class),num:`${a.count}\u4EBA`});return s},n=c([{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"},{name:"\u4E00\u5E74\u7EA7\uFF082\uFF09\u73ED",num:"120\u4EBA"}]);return F(()=>{if(t.value=e.listData,t.value!==void 0&&t.value.data){n.value=o(t.value.data);return}n.value=[],console.log("StudyRankingListRef.value :>> ",n.value)}),{StudyRankingListRef:n}}});const Le={class:"custom-study-ranking-container"},Ne={key:0,class:"study-ranking-ul"},Te={class:"left-box-style flex-start"},Me={class:"study-ranking-name-style"},Ge={class:"study-ranking-num-style"};function xe(e,t,o,n,r,s){const a=d("el-scrollbar");return g(),h("div",Le,[e.StudyRankingListRef.length>0?(g(),h("div",Ne,[u(a,null,{default:m(()=>[(g(!0),h(Y,null,L(e.StudyRankingListRef,(l,i)=>(g(),h("div",{key:i,class:"study-ranking-li flex"},[_("div",Te,[_("p",{class:Q(["study-ranking-sort-style",{"top-three-sort-style":i<=2,"top-other-sort-style":i>2}])},D(i+1),3),_("p",Me,D(l.name),1)]),_("p",Ge,D(l.num),1)]))),128))]),_:1})])):X("",!0)])}const U=R(Ye,[["render",xe],["__scopeId","data-v-1f7974de"]]),Oe=B({name:"StudyRanking",components:{CustomStudyRanking:U},props:{listData:{type:[Array,Object],defualt:()=>[]}},setup(e){const t=c();return F(()=>{t.value=e.listData}),{listDataRef:t}}});const Ve=e=>(N("data-v-bac18253"),e=e(),T(),e),We={class:"study-ranking-container"},He=Ve(()=>_("header",null,[_("p",{class:"title-style"},"\u4ECA\u65E5\u73ED\u7EA7\u4EBA\u6570\u6392\u540D")],-1));function je(e,t,o,n,r,s){const a=d("CustomStudyRanking");return g(),h("div",We,[He,_("article",null,[u(a,{listData:e.listDataRef},null,8,["listData"])])])}const ze=R(Oe,[["render",je],["__scopeId","data-v-bac18253"]]);function Ue(){const e=w().getSchoolInfo,t=c("daily"),o=c($().format("YYYY-MM-DD")),n=c($().format("YYYY-MM-DD")),r=()=>{o.value=$().format("YYYY-MM-DD"),n.value=$().format("YYYY-MM-DD")},s=()=>{const C=$().weekday()===0?7:$().weekday();o.value=$().subtract(C-1,"days").format("YYYY-MM-DD"),n.value=$().add(7-C,"days").format("YYYY-MM-DD")},a=()=>{const C=$().format("YYYY"),b=$().format("MM");o.value=$([C,0,1]).month(parseInt(b)-1).format("YYYY-MM-DD"),n.value=$([C,0,31]).month(parseInt(b)-1).format("YYYY-MM-DD")},l=c(""),i=C=>{if(typeof C.paneName=="string")switch(t.value=C.paneName,t.value){case"daily":r();break;case"weekly":s();break;case"monthy":a();break}v(o.value,n.value);const b=$(o.value).format("YYYY-MM-DD");p(t.value,b)},f=c(),v=async(C,b)=>{const I={start_date:C,end_date:b,school_id:e.id},S=await se(I);f.value=Array.isArray(S)?S:[S]},y=c(),p=async(C,b)=>{const I=w().getSchoolInfo,S={limit:7,page:1,type:C,school_id:I.id,start_date:b},G=await le(S);y.value=G},k=C=>{console.log("onSelectLearningTrend_val :>> ",C),l.value=C;const b=$(l.value).format("YYYY-MM-DD");p(t.value,b)};return O(()=>{const C=$(l.value).format("YYYY-MM-DD"),b=$().format("YYYY-MM-DD");v(o.value,n.value),p(t.value,C!=="Invalid date"?C:b)}),{activeTypeRef:t,changeActiveType:i,studyDashboardCompleteListRef:f,studyDashboardRankClassRef:y,onSelectLearningTrend:k}}const qe=B({name:"OverviewChart",components:{LearningTrend:Pe,StudyRanking:ze},setup(){return{...Ue()}}});const Je={class:"overview-chart-container"},Ke={class:"flex"};function Qe(e,t,o,n,r,s){const a=d("el-tab-pane"),l=d("el-tabs"),i=d("LearningTrend"),f=d("StudyRanking"),v=d("el-card");return g(),h("div",Je,[u(v,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",null,[u(l,{modelValue:e.activeTypeRef,"onUpdate:modelValue":t[0]||(t[0]=y=>e.activeTypeRef=y),class:"demo-tabs",onTabClick:e.changeActiveType},{default:m(()=>[u(a,{label:"\u6BCF\u65E5\u4E00\u5B66",name:"daily"}),u(a,{label:"\u6BCF\u5468\u4E00\u505A",name:"weekly"}),u(a,{label:"\u6BCF\u6708\u4E00\u8BFE",name:"monthy"})]),_:1},8,["modelValue","onTabClick"])]),_("article",Ke,[u(i,{echartsData:e.studyDashboardCompleteListRef,dateType:e.activeTypeRef,onSelect:e.onSelectLearningTrend},null,8,["echartsData","dateType","onSelect"]),u(f,{listData:e.studyDashboardRankClassRef},null,8,["listData"])])]),_:1})])}const Xe=R(qe,[["render",Qe],["__scopeId","data-v-317efa79"]]),Ze=B({name:"CustomPagination",props:{total:{type:Number,default:0},page:{type:Number,defualt:1},limit:{type:Number,defualt:10}},setup(e,t){const o=c(0),n=c(1),r=c(10),s=a=>{n.value=a,t.emit("change",n.value)};return F(()=>{o.value=e.total,e.page&&(n.value=e.page),e.limit&&(r.value=e.limit)}),{totalRef:o,pageRef:n,limitRef:r,changePage:s}}});const et={class:"custom-pagination-container flex-start"},tt={class:"demonstration"};function at(e,t,o,n,r,s){const a=d("el-pagination");return g(),h("div",et,[_("div",tt,"\u5171"+D(e.totalRef)+"\u6761\u8BB0\u5F55",1),u(a,{small:"",background:"",layout:"prev, pager, next",total:e.totalRef,"current-page":e.pageRef,onCurrentChange:e.changePage},null,8,["total","current-page","onCurrentChange"])])}const V=R(Ze,[["render",at],["__scopeId","data-v-2802132b"]]);function ot(){const e=c("daily"),t=c(1),o=c(10),n=c(0),r=i=>{console.log("val :>> ",i),t.value=i,l(e.value)},s=c(),a=i=>{e.value=i.val},l=async i=>{const f=w().getSchoolInfo,v={limit:`${o.value}`,page:`${t.value}`,type:i,school_id:f.id},y=await ue(v);s.value=y.data,typeof y.total=="number"&&(n.value=y.total)};return F(()=>{const i=e.value;typeof i=="string"&&l(i)}),{hotConentList:s,changeTabs:a,paramTypeRef:e,changePage:r,pageRef:t,limitRef:o,totalRef:n}}const nt=B({name:"HotRanking",components:{CustomPagination:V},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...ot()}}});const st=e=>(N("data-v-bb504e83"),e=e(),T(),e),lt={class:"hot-ranking-container"},ut={class:"flex"},rt=st(()=>_("p",{class:"title-style"},"\u70ED\u95E8\u5185\u5BB9\u6392\u884C",-1)),ct=A("\u6BCF\u65E5\u4E00\u5B66"),it=A("\u6BCF\u5468\u4E00\u505A"),dt=A("\u6BCF\u6708\u4E00\u8BFE"),_t={class:"flex-end"};function pt(e,t,o,n,r,s){const a=d("el-radio-button"),l=d("el-radio-group"),i=d("el-table-column"),f=d("el-table"),v=d("CustomPagination"),y=d("el-card");return g(),h("div",lt,[u(y,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",ut,[rt,u(l,{class:"el-radio-group-style",modelValue:e.paramTypeRef,"onUpdate:modelValue":t[0]||(t[0]=p=>e.paramTypeRef=p),style:{"margin-bottom":"30px"}},{default:m(()=>[u(a,{label:"daily"},{default:m(()=>[ct]),_:1}),u(a,{label:"weekly"},{default:m(()=>[it]),_:1}),u(a,{label:"monthy"},{default:m(()=>[dt]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[u(f,{data:e.hotConentList,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:m(()=>[u(i,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),u(i,{prop:"title",label:"\u5185\u5BB9\u6807\u9898"}),u(i,{prop:"count",label:"\u5B8C\u6210\u91CF",width:"110",align:"center"})]),_:1},8,["data","header-cell-style"])]),_("footer",_t,[u(v,{total:e.totalRef,page:e.pageRef,limit:e.limitRef,onChange:e.changePage},null,8,["total","page","limit","onChange"])])]),_:1})])}const mt=R(nt,[["render",pt],["__scopeId","data-v-bb504e83"]]);function ft(){const e=w().schoolInfo,t=c("grade"),o=c(),n=async r=>{const s=e.id,l=await re({type:r,school_id:s});console.log("res_\u5B66\u4E60\u6392\u884C :>> ",l),o.value=l.data};return F(()=>{n(t.value)}),{tabPositionRef:t,studyDashboardRankClassTypeRef:o}}const yt=B({name:"LearningRanking",components:{CustomPagination:V},setup(){return{headerCellStyle:{color:"#606266","background-color":"#F6F8FA"},...ft(),...M()}}});const gt=e=>(N("data-v-b547e377"),e=e(),T(),e),ht={class:"learning-ranking-container"},vt={class:"flex"},Ct=gt(()=>_("p",{class:"title-style"},"\u5B66\u4E60\u6392\u884C",-1)),bt=A("\u5E74\u7EA7\u6392\u884C"),Dt=A("\u73ED\u7EA7\u6392\u884C"),$t={class:"flex-end"};function Et(e,t,o,n,r,s){const a=d("el-radio-button"),l=d("el-radio-group"),i=d("el-table-column"),f=d("el-table"),v=d("CustomPagination"),y=d("el-card");return g(),h("div",ht,[u(y,{class:"el-card-style","body-style":{padding:"0px"}},{default:m(()=>[_("header",vt,[Ct,u(l,{class:"el-radio-group-style",modelValue:e.tabPositionRef,"onUpdate:modelValue":t[0]||(t[0]=p=>e.tabPositionRef=p),style:{"margin-bottom":"30px"}},{default:m(()=>[u(a,{label:"grade"},{default:m(()=>[bt]),_:1}),u(a,{label:"class"},{default:m(()=>[Dt]),_:1})]),_:1},8,["modelValue"])]),_("article",null,[u(f,{data:e.studyDashboardRankClassTypeRef,style:{width:"100%"},"header-cell-style":e.headerCellStyle},{default:m(()=>[u(i,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),u(i,{label:"\u540D\u79F0",width:"124"},{default:m(p=>[W(_("p",null,D(e.getGraderName(p.row.year)),513),[[H,e.tabPositionRef==="grade"]]),W(_("p",null,D(`${e.getGraderName(p.row.year)}(${e.getClassName(p.row.class)})`),513),[[H,e.tabPositionRef==="class"]])]),_:1}),u(i,{label:"\u5B66\u4E60\u603B\u91CF",align:"center"},{default:m(p=>[A(D(p.row.daily_count+p.row.monthy_count),1)]),_:1}),u(i,{label:"\u6D3B\u52A8\u603B\u91CF",align:"center"},{default:m(p=>[A(D(p.row.weekly_count),1)]),_:1}),u(i,{label:"\u603B\u5B8C\u6210\u91CF",align:"center"},{default:m(p=>[A(D(p.row.count),1)]),_:1})]),_:1},8,["data","header-cell-style"])]),_("footer",$t,[u(v)])]),_:1})])}const Rt=R(yt,[["render",Et],["__scopeId","data-v-b547e377"]]),wt=B({name:"WordCloud",props:{listData:{type:[Array,Object],default:()=>[]}},setup(e){const t=c();let o=16;return F(()=>{t.value=e.listData.map(n=>(n.dataWeight=o,o--,console.log("item :>> ",n),n))}),{listRef:t,getRandom:K}}});const Bt={class:"word-cloud-container"},At={class:"cloud",role:"navigation","aria-label":"Webdev word cloud"},Ft=["data-weight"];function kt(e,t,o,n,r,s){return g(),h("div",Bt,[_("ul",At,[(g(!0),h(Y,null,L(e.listRef,a=>(g(),h("li",{key:a.id},[_("a",{href:"#","data-weight":a.dataWeight},D(a.name),9,Ft)]))),128))])])}const St=R(wt,[["render",kt],["__scopeId","data-v-841199ed"]]);function It(){const e=c(),t=async(n,r)=>{const a=await ce({school_id:n,limit:r});e.value=a},o=w().getSchoolInfo;return t(o.id,16),{tagInfoListRef:e}}const Pt=B({name:"HotTag",components:{WordCloud:St,CustomCard:P},setup(){return{...It()}}});const Yt={class:"hot-tag-container"},Lt={class:"word-cloud-box"};function Nt(e,t,o,n,r,s){const a=d("WordCloud"),l=d("CustomCard");return g(),h("div",Yt,[u(l,{title:"\u91CD\u70B9\u5173\u6CE8\u4E3B\u9898"},{default:m(()=>[_("div",Lt,[u(a,{listData:e.tagInfoListRef},null,8,["listData"])])]),_:1})])}const Tt=R(Pt,[["render",Nt],["__scopeId","data-v-9dc1caf8"]]);function Mt(){console.log("useSchoolStore().schoolInfo :>> ",w().getSchoolInfo);const e=w().getSchoolInfo,t=c();return(async()=>{const n={school_id:e.id},r=await ie(n);console.log("res_\u5BB6\u5EAD\u6784\u6210\u5206\u6790 :>> ",r);const s=[];Array.isArray(r)&&r.forEach(a=>{s.push({value:a.count,name:a.role})}),t.value=s})(),{familyDashboardMemberGroupRoleRef:t}}const Gt=B({name:"FamilyCompositionAnalysis",components:{CustomCard:P,DoughnutChart:te},setup(){return{legend:{orient:"vertical",top:"center",right:90},title:{text:"\u5BB6\u5EAD\u6784\u6210",subtext:"",left:"25%",top:"center",textStyle:{fontSize:14},subtextStyle:{fontSize:16}},...Mt()}}});const xt={class:"family-composition-analysis-container"};function Ot(e,t,o,n,r,s){const a=d("DoughnutChart"),l=d("CustomCard");return g(),h("div",xt,[u(l,{title:"\u5BB6\u5EAD\u6784\u6210\u5206\u6790"},{default:m(()=>[u(a,{legend:e.legend,title:e.title,width:"60%",left:"0",echartsData:e.familyDashboardMemberGroupRoleRef},null,8,["legend","title","echartsData"])]),_:1})])}const Vt=R(Gt,[["render",Ot],["__scopeId","data-v-5fd1d56a"]]),Wt=B({name:"BarChart",props:{gradeNames:{type:Array,default:()=>[]},bindNums:{type:Array,default:()=>[]}},setup(e){return O(()=>{const t=c(),o=c(),n=document.getElementById("barChart"),r=j(n),s=c({title:{text:""},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1,bottom:0},grid:{top:24,left:"3%",right:"4%",bottom:24,containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:t},series:[{name:"\u5E74\u7EA7",type:"bar",label:{show:!0,color:"#fff",fontSize:12},data:o}],barWidth:16,color:"#1890FF"});F(()=>{t.value=e.gradeNames,o.value=e.bindNums,s.value&&r.setOption(s.value)})}),{}}});const Ht={id:"barChart",class:"bar-chart-container"};function jt(e,t,o,n,r,s){return g(),h("div",Ht)}const zt=R(Wt,[["render",jt],["__scopeId","data-v-c1ab10cf"]]);function Ut(){const e=c(),t=c(),o=c(),n=()=>{t.value=[],o.value=[],Array.isArray(e.value)&&e.value.forEach(s=>{t.value.push(M().getGraderName(s.year)),o.value.push(s.count)}),console.log("gradeNamesRef :>> ",t.value),console.log("bindNumsRef :>> ",o.value)};return(async()=>{const a={school_id:w().getSchoolInfo.id},l=await oe(a);console.log("res_\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570 :>> ",l),e.value=l,n()})(),{gradeNamesRef:t,bindNumsRef:o}}const qt=B({name:"GradeParentsBoundNum",components:{CustomCard:P,BarChart:zt},setup(){return{...Ut()}}});const Jt={class:"grade-parents-bound-num-container"};function Kt(e,t,o,n,r,s){const a=d("BarChart"),l=d("CustomCard");return g(),h("div",Jt,[u(l,{title:"\u5E74\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6570"},{default:m(()=>[u(a,{bindNums:e.bindNumsRef,gradeNames:e.gradeNamesRef},null,8,["bindNums","gradeNames"])]),_:1})])}const Qt=R(qt,[["render",Kt],["__scopeId","data-v-ee246aa4"]]);function Xt(){const e=c(),t=c();return(async()=>{const r={school_id:w().getSchoolInfo.id},s=await ne(r);console.log("res_\u73ED\u7EA7\u5BB6\u957F\u7ED1\u5B9A\u6392\u540D :>> ",s),e.value=s,t.value=s.data})(),{familyDashboardGroupParentClassRef:e,familyDashboardGroupParentClassListDataRef:t}}const Zt=B({name:"ClassBindingParentRanking",components:{CustomCard:P,CustomStudyRanking:U},setup(){return{...Xt()}}});const ea={class:"class-binding-parent-ranking-container"};function ta(e,t,o,n,r,s){const a=d("CustomStudyRanking"),l=d("CustomCard");return g(),h("div",ea,[u(l,{title:"\u73ED\u7EA7\u7ED1\u5B9A\u5BB6\u957F\u4EBA\u6570\u6392\u540D"},{default:m(()=>[u(a,{listData:e.familyDashboardGroupParentClassRef},null,8,["listData"])]),_:1})])}const aa=R(Zt,[["render",ta],["__scopeId","data-v-7efec27b"]]),oa=B({name:"CustomDropdown",props:{active:{type:Object,default:()=>({name:"\u9ED8\u8BA4\u9009\u9879",id:-1})},listData:{type:[Array,Object],default:()=>[]}},setup(e,t){const o=c(),n=c(e.listData),r=s=>{console.log("val :>> ",s),console.log("active.id :>> ",n.value);const a=c();n.value.forEach(l=>{s===l.id&&(a.value=l)}),t.emit("change",a.value)};return F(()=>{o.value=e.active,console.log("activeRef.value :>> ",o.value)}),{activeRef:o,listDataRef:n,onCommand:r}}});const na={class:"custom-dropdown-contaienr"},sa={class:"el-dropdown-link"};function la(e,t,o,n,r,s){const a=d("arrow-down"),l=d("el-icon"),i=d("el-dropdown-item"),f=d("el-scrollbar"),v=d("el-dropdown-menu"),y=d("el-dropdown");return g(),h("div",na,[u(y,null,{dropdown:m(()=>[u(v,null,{default:m(()=>[u(f,{class:"scroll-bar-style",height:"200px"},{default:m(()=>[(g(!0),h(Y,null,L(e.listDataRef,p=>(g(),Z(i,{key:p.id,onClick:k=>e.onCommand(p.id)},{default:m(()=>[A(D(p.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),default:m(()=>[_("span",sa,[A(D(e.activeRef.name)+" ",1),u(l,{class:"el-icon--right"},{default:m(()=>[u(a)]),_:1})])]),_:1})])}const ua=R(oa,[["render",la],["__scopeId","data-v-63cefe7a"]]);function ra(){const e=ee(),t=c({name:"\u5168\u90E8\u5E74\u7EA7",id:-1}),o=c({name:"\u5168\u90E8\u73ED\u7EA7",id:-1}),n={"background-color":"#F6F8FA",color:"#606266"},r=c(),s=E=>$(E).utc().format("YYYY-MM-DD HH:mm:ss"),a=c(1),l=c(10),i=c(0),f=E=>{a.value=E,y()},v=c(),y=async()=>{const E=w().getSchoolInfo,q={limit:10,page:a.value,school_id:E.id,grade:t.value.id!==-1?t.value.id:"",class:o.value.id!==-1?o.value.id:"",student_id:18},x=await de(q);v.value=x,r.value=x.data,console.log("tableDataRef.value :>> ",r.value),i.value=x.total};y();const p=w();async function k(){const E=w().getSchoolInfo;await p.getSchoolGradeListNew(E.id)}k();const C=c(p.gradeListNew),b=c(p.getClassList),I=E=>{console.log("val :>> ",E),t.value=E,y()},S=E=>{console.log("val :>> ",E),o.value=E,y()},G=E=>{console.log("val :>> ",E),e.push({path:"/parentsLearnDetailsView",query:{uid:E.uid,student_id:E.student_id}})};return{studyDashboardCompleteParentListRef:v,gradeActiveRef:t,classActiveRef:o,headerCellStyle:n,tableDataRef:r,fmtDateFn:s,...M(),gradeListRef:C,classListRef:b,gradeChange:I,classChange:S,pageRef:a,limitRef:l,totalRef:i,onChangePage:f,onToView:G}}const ca=B({name:"ParentSupportWorkSituation",components:{CustomCard:P,CustomDropdown:ua,CustomPagination:V},setup(){return{...ra()}}});const ia={class:"parent-support-work-situation-container"},da={class:"filter-box"},_a=A(" \u67E5\u770B "),pa={class:"flex-end"};function ma(e,t,o,n,r,s){const a=d("CustomDropdown"),l=d("el-table-column"),i=d("el-button"),f=d("el-table"),v=d("CustomPagination"),y=d("CustomCard");return g(),h("div",ia,[u(y,{title:"\u5BB6\u957F\u4ECA\u65E5\u5B66\u4E60\u60C5\u51B5"},{default:m(()=>[_("div",da,[u(a,{active:e.gradeActiveRef,listData:e.gradeListRef,onChange:e.gradeChange},null,8,["active","listData","onChange"]),u(a,{class:"filter-class-style",active:e.classActiveRef,listData:e.classListRef,onChange:e.classChange},null,8,["active","listData","onChange"])]),u(f,{class:"el-table-style",data:e.tableDataRef,"header-cell-style":e.headerCellStyle,style:{width:"100%"}},{default:m(()=>[u(l,{type:"index",label:"\u6392\u540D",width:"60",align:"center"}),u(l,{prop:"wx_name",label:"\u5BB6\u957F"}),u(l,{prop:"studentInfo",label:"\u5B66\u751F\u4FE1\u606F",align:"center"},{default:m(p=>[A(D(p.row.name)+" | "+D(e.getGradeClassName(p.row.year,p.row.class)),1)]),_:1}),u(l,{prop:"daily_count",label:"\u6BCF\u65E5\u4E00\u5B66",align:"center"}),u(l,{prop:"weekly_count",label:"\u6BCF\u5468\u4E00\u505A",align:"center"}),u(l,{prop:"monthy_count",label:"\u6BCF\u6708\u4E00\u8BFE",align:"center"}),u(l,{prop:"date",label:"\u6700\u8FD1\u4E0A\u7EBF\u65F6\u95F4",align:"center"},{default:m(p=>[A(D(e.fmtDateFn(p.row.date)),1)]),_:1}),u(l,{prop:"date",label:"\u64CD\u4F5C",align:"center"},{default:m(p=>[u(i,{type:"primary",link:"",onClick:k=>e.onToView(p.row)},{default:m(()=>[_a]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","header-cell-style"]),_("footer",pa,[u(v,{page:e.pageRef,limit:e.limitRef,total:e.totalRef,onChange:e.onChangePage},null,8,["page","limit","total","onChange"])])]),_:1})])}const fa=R(ca,[["render",ma],["__scopeId","data-v-aa0b2534"]]);function ya(){const e=c({}),t=c({}),o=async()=>{const s={school_id:w().getSchoolInfo.id,type:"term"},a=await _e(s);e.value=a},n=async()=>{const s={school_id:w().getSchoolInfo.id},a=await pe(s);t.value=a};return o(),n(),{studyDashboardCompleteCountRef:e,studyDashboardCompleteDailyRef:t}}const ga={name:"dataVisualizationView",components:{CompletedAmountOverview:we,OverviewChart:Xe,HotRanking:mt,LearningRanking:Rt,HotTag:Tt,FamilyCompositionAnalysis:Vt,GradeParentsBoundNum:Qt,ClassBindingParentRanking:aa,ParentSupportWorkSituation:fa},setup(){return{...ya()}}};const ha={class:"data-visualization-view-container"},va={class:"row-style flex"},Ca={class:"row-style"};function ba(e,t,o,n,r,s){const a=d("CompletedAmountOverview"),l=d("HotTag"),i=d("FamilyCompositionAnalysis"),f=d("ParentSupportWorkSituation");return g(),h("div",ha,[u(a,{dataSource:e.studyDashboardCompleteCountRef,dataSourceAvg:e.studyDashboardCompleteDailyRef},null,8,["dataSource","dataSourceAvg"]),_("div",va,[u(l),u(i)]),_("div",Ca,[u(f)])])}const ka=R(ga,[["render",ba],["__scopeId","data-v-16e75689"]]);export{ka as default};
