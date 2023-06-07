import{_ as E,u as X,b as i,v as z,o as s,c,h as e,t as a,x as V,y as L,r as P,B as S,C as M,D as Y,j as u,a as C,w as ee,Y as te,Z as ae,F as x,f as b,P as se,d as oe,k as ce,T as le,g as K,Q as N,n as ne}from"./index.518dc570.js";import{a as re,b as G}from"./datacenter.a54c9ed0.js";import{u as F}from"./school.b9035804.js";import{u as U}from"./teacher.c63140fa.js";import{h as W}from"./handleView.0044faab.js";import{s as de,z as ue}from"./study.a4098b75.js";import{h as y}from"./moment.9709ab41.js";import{g as ie}from"./ak.cc808f0c.js";import{_ as _e}from"./nodata_status.b4bc20a4.js";import"./request.81da71e9.js";const Q=t=>(V("data-v-4ce2ce80"),t=t(),L(),t),me={class:"all-complete-box flex"},he={class:"left-box"},ve={class:"num"},pe=Q(()=>e("span",{class:"per-char"},"%",-1)),ye=Q(()=>e("span",{class:"per-char"},"\u5168\u6821\u7D2F\u8BA1\u5B8C\u6210\u6CE8\u518C\u7387",-1)),fe={__name:"PerAllComplete",setup(t){const l=X(),d=()=>{l.push({path:"/CompletionRate"})},n=i(0),k=async()=>{const m={school_id:F().schoolInfo.id},o=await re(m);if(o){const _=o.parent_count||0,f=o.student_should_count||0;f?n.value=Math.ceil(_/f*100):n.value=100}};return z(()=>{k()}),(m,o)=>(s(),c("div",me,[e("div",he,[e("span",ve,a(n.value),1),pe,ye]),e("div",{class:"look-char",onClick:d},"\u67E5\u770B\u8BE6\u60C5")]))}},ge=E(fe,[["__scopeId","data-v-4ce2ce80"]]);const R=t=>(V("data-v-91936ec6"),t=t(),L(),t),ke={class:"grade-class-rank-container"},Ie={class:"right-data-wrap"},we={class:"progress-complete"},$e={class:"progress-box"},Ce={class:"flex"},De={class:"gc-char"},Me={class:"cp-char-box"},Ye={key:0,class:"cp-char"},xe={key:1,class:"cp-char"},be={key:2,class:"cp-char"},Se={key:3,class:"cp-char"},Ee={class:"cp-char-box"},Re={key:0,class:"cp-char"},Be={key:1,class:"cp-char"},Ae={key:2,class:"cp-char"},Fe={key:3,class:"cp-char"},Oe={key:0,class:"per-char gold"},Ve={key:1,class:"per-char silver"},Le={key:2,class:"per-char copper"},Ne={key:3,class:"per-char copper"},Pe={class:"data-box flex"},je={class:"data-detail-wrap"},Te=R(()=>e("span",{class:"data-char"},"\u6570\u636E\u6982\u89C8",-1)),qe={class:"data-item"},Ke={class:"num-char"},ze=R(()=>e("div",{class:"char"},"\u5B66\u4E60\u4EBA\u6B21",-1)),Ge={class:"data-item"},Ue={class:"num-char"},We=R(()=>e("div",{class:"char"},"\u5E74\u7EA7\u4EBA\u6570",-1)),Qe={class:"data-item"},Ze={class:"num-char"},He=R(()=>e("div",{class:"char"},"\u6BCF\u65E5\u4E00\u5B66",-1)),Je={class:"data-item"},Xe={class:"num-char"},et=R(()=>e("div",{class:"char"},"\u6BCF\u5468\u4E00\u505A",-1)),tt={class:"data-item"},at={class:"num-char"},st=R(()=>e("div",{class:"char nomar"},"\u6BCF\u6708\u4E00\u8BFE",-1)),ot={class:"detail-char"},ct={class:"class-item-wrap"},lt={class:"flex"},nt={class:"class-sec"},rt={class:"class-char"},dt={key:0,class:"per-char gold"},ut={key:1,class:"per-char silver"},it={key:2,class:"per-char copper"},_t={key:3,class:"per-char copper"},mt={class:"teacher-sec flex"},ht={class:"teacher-char"},vt={class:"teacher-char"},pt={class:"progress-wrap"},yt={class:"count-sec flex"},ft={class:"count-tag"},gt={class:"count-tag"},kt={__name:"GradeClassRank2",props:{completeItem:{type:Object},completeIndex:{type:Number,default:0},startDate:{type:String,default:""},endDate:{type:String,default:""},filter:{type:String,default:""},rankMode:{type:Number,default:1},currentMonth:{type:Number,default:1},weekOrMon:{type:Number,default:1}},setup(t,{expose:l}){const d=t,n=i([]),k=async h=>{const v={school_id:F().schoolInfo.id,limit:30,page:1,rank_mode:"class",start_date:d.startDate,end_date:d.endDate,study_type:"all",filter:d.filter,year:h},D=await G(v);n.value=D},m=()=>{o.value=!1},o=i(!1),_=h=>{o.value=!o.value,o.value&&k(h)},f=(h,v)=>{const D=U().teacherList;for(const r of D)if(r.year==h&&r.class_id==v)return r.name},I=h=>Math.ceil(Number(h)*100);return l({doSth:m}),(h,v)=>{const D=P("el-icon");return s(),c("div",ke,[e("div",Ie,[e("div",we,[e("div",$e,[e("div",Ce,[e("span",De,a(S(W)(t.completeItem.year).name),1)]),M(e("div",Me,[t.completeItem.rate=="\u91D1\u699C"?(s(),c("span",Ye,a(t.currentMonth)+"\u6708\u5B66\u4E60\u5B8C\u6210\u7387\u5927\u4E8E60% ",1)):u("",!0),t.completeItem.rate=="\u94F6\u699C"?(s(),c("span",xe,a(t.currentMonth)+"\u6708\u5B66\u4E60\u5B8C\u6210\u7387\u5927\u4E8E40%",1)):u("",!0),t.completeItem.rate=="\u94DC\u699C"?(s(),c("span",be,a(t.currentMonth)+"\u6708\u5B66\u4E60\u5B8C\u6210\u7387\u5927\u4E8E20%",1)):u("",!0),t.completeItem.rate=="\u672A\u4E0A\u699C"?(s(),c("span",Se,a(t.currentMonth)+"\u6708\u5B66\u4E60\u5B8C\u6210\u7387\u5C0F\u4E8E20%",1)):u("",!0)],512),[[Y,t.weekOrMon==2]]),M(e("div",Ee,[t.completeItem.rate=="\u91D1\u699C"?(s(),c("span",Re," \u4E0A\u5468\u5B66\u4E60\u5B8C\u6210\u7387\u5927\u4E8E60% ")):u("",!0),t.completeItem.rate=="\u94F6\u699C"?(s(),c("span",Be," \u4E0A\u5468\u5B66\u4E60\u5B8C\u6210\u7387\u5927\u4E8E40%")):u("",!0),t.completeItem.rate=="\u94DC\u699C"?(s(),c("span",Ae," \u4E0A\u5468\u5B66\u4E60\u5B8C\u6210\u7387\u5927\u4E8E20%")):u("",!0),t.completeItem.rate=="\u672A\u4E0A\u699C"?(s(),c("span",Fe," \u4E0A\u5468\u5B66\u4E60\u5B8C\u6210\u7387\u5C0F\u4E8E20%")):u("",!0)],512),[[Y,t.weekOrMon==1]])]),t.completeItem.rate=="\u91D1\u699C"?(s(),c("span",Oe,a(t.completeItem.rate),1)):u("",!0),t.completeItem.rate=="\u94F6\u699C"?(s(),c("span",Ve,a(t.completeItem.rate),1)):u("",!0),t.completeItem.rate=="\u94DC\u699C"?(s(),c("span",Le,a(t.completeItem.rate),1)):u("",!0),t.completeItem.rate=="\u672A\u4E0A\u699C"?(s(),c("span",Ne,a(t.completeItem.rate),1)):u("",!0)]),e("div",Pe,[e("div",je,[Te,e("div",qe,[e("div",Ke,a(t.completeItem.all),1),ze]),e("div",Ge,[e("div",Ue,a(t.completeItem.student_count),1),We]),e("div",Qe,[e("div",Ze,a(I(t.completeItem.daily_percent))+"% ",1),He]),e("div",Je,[e("div",Xe,a(I(t.completeItem.weekly_percent))+"% ",1),et]),M(e("div",tt,[e("div",at,a(I(t.completeItem.monthy_percent))+"% ",1),st],512),[[Y,t.weekOrMon==2]])]),e("div",{class:"sw-btn",onClick:v[0]||(v[0]=r=>_(t.completeItem.year))},[e("span",ot,a(o.value?"\u6536\u8D77":"\u67E5\u770B")+"\u5E74\u7EA7\u5404\u73ED\u8BE6\u60C5",1),C(D,null,{default:ee(()=>[M(C(S(te),{class:"arr-icon"},null,512),[[Y,o.value]]),M(C(S(ae),{class:"arr-icon"},null,512),[[Y,!o.value]])]),_:1})])]),M(e("div",ct,[(s(!0),c(x,null,b(n.value,(r,B)=>(s(),c("div",{class:"class-item",key:B},[e("div",lt,[e("div",nt,[e("span",rt,a(r.class_id)+"\u73ED",1)]),r.rate=="\u91D1\u699C"?(s(),c("span",dt,a(r.rate),1)):u("",!0),r.rate=="\u94F6\u699C"?(s(),c("span",ut,a(r.rate),1)):u("",!0),r.rate=="\u94DC\u699C"?(s(),c("span",it,a(r.rate),1)):u("",!0),r.rate=="\u672A\u4E0A\u699C"?(s(),c("span",_t,a(r.rate),1)):u("",!0)]),e("div",mt,[e("span",ht,"\u73ED\u4E3B\u4EFB\uFF1A"+a(f(r.year,r.class_id)),1),e("span",vt,"\u5B66\u4E60\u5B8C\u6210\u7387"+a(I(r.all_percent))+"%",1)]),e("div",pt,[e("div",{class:"progress-item",style:se(`width: ${I(r.all_percent)}%`)},null,4)]),e("div",yt,[e("div",ft,"\u5B66\u4E60\u4EBA\u6B21\uFF1A"+a(r.all),1),e("div",gt,"\u73ED\u7EA7\u4EBA\u6570\uFF1A"+a(r.student_count),1)])]))),128))],512),[[Y,o.value]])])])}}},It=E(kt,[["__scopeId","data-v-91936ec6"]]);function wt(){const t=i({}),l=i({}),d=async()=>{const m={school_id:F().getSchoolInfo.id,type:"term"},o=await de(m);t.value=o},n=async()=>{const m={school_id:F().getSchoolInfo.id},o=await ue(m);l.value=o};return d(),n(),{studyDashboardCompleteCountRef:t,studyDashboardCompleteDailyRef:l}}const $t=oe({name:"CompletedAmountOverview",props:{dataSource:{type:Object,default:()=>({})},dataSourceAvg:{type:Object,default:()=>({})}},setup(t){const l=i({total:{title:"\u603B\u8BBF\u95EE\u91CF",icon:"overview_total_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u8BBF\u95EE\u91CF",num:0}},daily:{title:"\u6BCF\u65E5\u4E00\u5B66\u603B\u5B66\u4E60\u91CF",icon:"overview_daily_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}},weekly:{title:"\u6BCF\u5468\u4E00\u505A\u603B\u5B8C\u6210\u91CF",icon:"overview_weekly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B8C\u6210\u91CF",num:0}},monthy:{title:"\u6BCF\u6708\u4E00\u8BFE\u603B\u5B66\u4E60\u91CF",icon:"overview_monthly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}}}),d=i(t.dataSource),n=i(t.dataSourceAvg);return ce(()=>{d.value=t.dataSource,n.value=t.dataSourceAvg,Object.keys(d.value).length>0&&(l.value.total.num=d.value.total_all,l.value.total.tag.num=d.value.all_today,l.value.total.averageDaily.num=Math.ceil(n.value.all_num/n.value.day_num),l.value.daily.num=d.value.total_daily,l.value.daily.tag.num=d.value.daily,l.value.daily.averageDaily.num=Math.ceil(n.value.daily/n.value.day_num),l.value.weekly.num=d.value.total_weekly,l.value.weekly.tag.num=d.value.weekly_today,l.value.weekly.averageDaily.num=Math.ceil(n.value.weekly/n.value.day_num),l.value.monthy.num=d.value.total_monthy,l.value.monthy.tag.num=d.value.monthy_today,l.value.monthy.averageDaily.num=Math.ceil(n.value.monthy/n.value.day_num))}),{overviewListRef:l,getImageUrl:ie}}});const Ct={class:"completed-amount-overview-container"},Dt={class:"completed-amount-overview-ul flex"},Mt={class:"el-card-style","body-style":{padding:"0px"}},Yt={class:"flex"},xt={class:"title-style"},bt={class:"flex-start align-end"},St={class:"total-num-style"},Et={class:"tag-box flex-center"},Rt={class:"flex-start"},Bt={class:"average-daily-title-style"},At={class:"average-daily-num-style"};function Ft(t,l,d,n,k,m){const o=P("el-image");return s(),c("div",Ct,[e("ul",Dt,[(s(!0),c(x,null,b(t.overviewListRef,(_,f)=>(s(),c("li",{key:f,class:"completed-amount-overview-li"},[e("div",Mt,[e("header",Yt,[e("p",xt,a(_.title),1),C(o,{class:"header-icon-style",src:t.getImageUrl(_.icon+".png")},null,8,["src"])]),e("article",bt,[e("p",St,a(_.num),1),e("div",Et,[e("p",null,a(_.tag.title),1),e("p",null,a(_.tag.num),1)])]),e("footer",Rt,[e("p",Bt,a(_.averageDaily.title),1),e("p",At,a(_.averageDaily.num),1)])])]))),128))])])}const Ot=E($t,[["render",Ft],["__scopeId","data-v-7331e030"]]);const Vt={class:"class-item"},Lt={class:"flex"},Nt={class:"class-sec"},Pt={class:"class-char"},jt={key:0,class:"per-char gold"},Tt={key:1,class:"per-char silver"},qt={key:2,class:"per-char copper"},Kt={class:"teacher-sec flex"},zt={class:"teacher-char"},Gt={class:"teacher-char"},Ut={class:"count-sec flex"},Wt={class:"count-tag"},Qt={class:"count-tag"},Zt={__name:"ClassRankForComplete2",props:{completeItem:{type:Object,default:()=>{}}},setup(t){const l=(n,k)=>{const m=U().teacherList;for(const o of m)if(o.year==n&&o.class_id==k)return o.name},d=n=>Math.ceil(Number(n)*100);return(n,k)=>(s(),c("div",Vt,[e("div",Lt,[e("div",Nt,[e("span",Pt,a(S(W)(t.completeItem.year).name)+" "+a(t.completeItem.class_id)+"\u73ED ",1)]),t.completeItem.rate=="\u91D1\u699C"?(s(),c("span",jt,a(t.completeItem.rate),1)):u("",!0),t.completeItem.rate=="\u94F6\u699C"?(s(),c("span",Tt,a(t.completeItem.rate),1)):u("",!0),t.completeItem.rate=="\u94DC\u699C"?(s(),c("span",qt,a(t.completeItem.rate),1)):u("",!0)]),e("div",Kt,[e("span",zt,"\u73ED\u4E3B\u4EFB\uFF1A"+a(l(t.completeItem.year,t.completeItem.class_id)),1),e("span",Gt,"\u5B66\u4E60\u5B8C\u6210\u7387"+a(d(t.completeItem.all_percent))+"%",1)]),e("div",Ut,[e("div",Wt,"\u5B66\u4E60\u4EBA\u6B21\uFF1A"+a(t.completeItem.all),1),e("div",Qt,"\u73ED\u7EA7\u4EBA\u6570\uFF1A"+a(t.completeItem.student_count),1)])]))}},Ht=E(Zt,[["__scopeId","data-v-15655eb5"]]);const Jt={},Z=t=>(V("data-v-14029ae3"),t=t(),L(),t),Xt={class:"nodata-status-container"},ea=Z(()=>e("img",{class:"nodata-img",src:_e,alt:""},null,-1)),ta=Z(()=>e("span",{class:"nodata-char"},"\u6682\u65E0\u6570\u636E\u5185\u5BB9\uFF0C\u770B\u770B\u5176\u4ED6\u7684\u5427~",-1)),aa=[ea,ta];function sa(t,l){return s(),c("div",Xt,aa)}const oa=E(Jt,[["render",sa],["__scopeId","data-v-14029ae3"]]);const j=t=>(V("data-v-f24d0449"),t=t(),L(),t),ca={class:"study-report-container"},la={class:"all-wrap"},na={class:"sort-wrap"},ra={class:"title-time"},da=j(()=>e("span",{class:"study-tit"},"\u5B66\u4E60\u5B8C\u6210\u699C",-1)),ua={class:"time-char"},ia=j(()=>e("span",{class:"o-char"},"\u5206\u7C7B\uFF1A",-1)),_a=["onClick"],ma={key:0,class:"date-picker-wrap"},ha=j(()=>e("div",{class:"ranking_list_name"}," \u9009\u62E9\u65F6\u95F4\uFF1A ",-1)),va={key:1,class:"date-picker-wrap"},pa={class:"ranking_list_name"},ya={key:0,class:"data-wrap"},fa={key:0},ga={key:1},ka={class:"class-item-wrap"},Ia={__name:"studyReportForm2",setup(t){const{studyDashboardCompleteCountRef:l,studyDashboardCompleteDailyRef:d}=wt(),n=[{sortKey:1,sortItem:[{id:"",name:"\u5168\u90E8"},{id:"\u91D1\u699C",name:"\u91D1\u699C"},{id:"\u94F6\u699C",name:"\u94F6\u699C"},{id:"\u94DC\u699C",name:"\u94DC\u699C"}]},{sortKey:2,sortItem:[{id:1,name:"\u5468\u5B66\u52E4"},{id:2,name:"\u6708\u5B66\u52E4"}]}],{proxy:k}=le(),m=()=>{k.$refs.gradeRef.map(p=>{p.doSth()})},o=i(["",1,"grade"]),_=i(""),f=i(""),I=i(""),h=i(""),v=i("");i("");const D=(p,w)=>{w===""?o.value[2]="grade":["\u91D1\u699C","\u94F6\u699C","\u94DC\u699C"].includes(w)&&(o.value[2]="class"),o.value[p-1]=w,O(),N(()=>{m()})},r=i(""),B=i(""),H=p=>{h.value=y(p).format("YYYY-MM-DD"),v.value=y(p).add(6,"day").format("YYYY-MM-DD"),O(),N(()=>{m()})},J=p=>{_.value=y(p).format("YYYY-MM-01"),p?I.value=y(p).format("M"):I.value="",f.value=y(_.value).add(1,"month").format("YYYY-MM-DD"),O(),N(()=>{m()})},A=i([]),O=async()=>{const p={school_id:F().schoolInfo.id,limit:30,page:1,rank_mode:o.value[2],start_date:o.value[1]==2?_.value:h.value,end_date:o.value[1]==2?f.value:v.value,study_type:"all",filter:o.value[0]},w=await G(p);A.value=w},T=i("");return z(()=>{y.locale("zh-cn",{week:{dow:1}}),T.value=y().format("YYYY\u5E74MM\u6708DD\u65E5"),I.value=y().month(),f.value=y().format("YYYY-MM-01"),_.value=y(f.value).subtract(1,"month").format("YYYY-MM-DD"),v.value=y().isoWeekday(0).format("YYYY-MM-DD"),h.value=y(v.value).subtract(6,"day").format("YYYY-MM-DD"),r.value=h.value,B.value=y().subtract(1,"month").format("YYYY-MM"),O()}),(p,w)=>{const q=P("el-date-picker");return s(),c("div",ca,[e("div",null,[C(Ot,{dataSource:S(l),dataSourceAvg:S(d)},null,8,["dataSource","dataSourceAvg"]),e("div",la,[C(ge)]),e("div",na,[e("div",ra,[da,e("span",ua,"\u66F4\u65B0\u65F6\u95F4\uFF1A"+a(T.value),1)]),(s(),c(x,null,b(n,g=>e("div",{class:"sort-sec",key:g.sortKey},[ia,(s(!0),c(x,null,b(g.sortItem,$=>(s(),c("div",{class:ne(["lab-item",o.value[g.sortKey-1]==$.id?"active":""]),onClick:wa=>D(g.sortKey,$.id),key:$.id},a($.name),11,_a))),128))])),64)),o.value[1]==1?(s(),c("div",ma,[ha,C(q,{modelValue:r.value,"onUpdate:modelValue":w[0]||(w[0]=g=>r.value=g),onChange:H,type:"week","picker-options":{firstDayOfWeek:1},format:`${h.value} - ${v.value}`,placeholder:"\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue","format"])])):u("",!0),o.value[1]==2?(s(),c("div",va,[M(e("div",pa," \u9009\u62E9\u6708\u4EFD\uFF1A ",512),[[Y,I.value]]),C(q,{modelValue:B.value,"onUpdate:modelValue":w[1]||(w[1]=g=>B.value=g),type:"month",placeholder:"\u9009\u62E9\u6708",onChange:J},null,8,["modelValue"])])):u("",!0)]),A.value&&A.value.length?(s(),c("div",ya,[o.value[0]===""?(s(),c("div",fa,[(s(!0),c(x,null,b(A.value,(g,$)=>(s(),c("div",{class:"mar-wrap",key:$},[C(It,{ref_for:!0,ref:"gradeRef",completeItem:g,completeIndex:$,startDate:o.value[1]==2?_.value:h.value,endDate:o.value[1]==2?f.value:v.value,filter:o.value[0],weekOrMon:o.value[1],rankMode:o.value[2],currentMonth:I.value},null,8,["completeItem","completeIndex","startDate","endDate","filter","weekOrMon","rankMode","currentMonth"])]))),128))])):(s(),c("div",ga,[e("div",ka,[(s(!0),c(x,null,b(A.value,(g,$)=>(s(),K(Ht,{completeItem:g,key:$},null,8,["completeItem"]))),128))])]))])):(s(),K(oa,{key:1}))])])}}},Ba=E(Ia,[["__scopeId","data-v-f24d0449"]]);export{Ba as default};