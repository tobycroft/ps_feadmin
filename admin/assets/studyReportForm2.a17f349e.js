import{_ as E,u as se,b as i,v as z,o as a,c as s,h as e,t as c,x as V,y as L,r as P,B as S,C as M,D as b,j as u,a as C,w as oe,Y as ce,Z as le,F as Y,f as x,P as ne,d as re,k as de,T as ue,g as K,Q as N,n as ie}from"./index.9d791e62.js";import{a as _e,b as G}from"./datacenter.e566aef8.js";import{u as F}from"./school.79616956.js";import{u as U}from"./teacher.c2cbc22e.js";import{h as W}from"./handleView.ea1b48f1.js";import{s as me,z as he}from"./study.4d550b8d.js";import{h as y}from"./moment.9709ab41.js";import{g as ve}from"./ak.28e5d0de.js";import{_ as pe}from"./nodata_status.bd52272b.js";import"./request.f80ddc0e.js";const Q=t=>(V("data-v-4ce2ce80"),t=t(),L(),t),ye={class:"all-complete-box flex"},fe={class:"left-box"},ge={class:"num"},ke=Q(()=>e("span",{class:"per-char"},"%",-1)),Ie=Q(()=>e("span",{class:"per-char"},"\u5168\u6821\u7D2F\u8BA1\u5B8C\u6210\u6CE8\u518C\u7387",-1)),we={__name:"PerAllComplete",setup(t){const l=se(),r=()=>{l.push({path:"/CompletionRate"})},n=i(0),I=async()=>{const m={school_id:F().schoolInfo.id},o=await _e(m);if(o){const _=o.parent_count||0,f=o.student_should_count||0;f?n.value=Math.ceil(_/f*100):n.value=100}};return z(()=>{I()}),(m,o)=>(a(),s("div",ye,[e("div",fe,[e("span",ge,c(n.value),1),ke,Ie]),e("div",{class:"look-char",onClick:r},"\u67E5\u770B\u8BE6\u60C5")]))}},$e=E(we,[["__scopeId","data-v-4ce2ce80"]]),Z="/admin/assets/gold.a8cb1127.png",H="/admin/assets/silver.e30ec5ea.png",J="/admin/assets/copper.96d5fc8c.png",X="/admin/assets/fail.217eea5c.png";const R=t=>(V("data-v-4b5fd9c6"),t=t(),L(),t),Ce={class:"grade-class-rank-container"},De={class:"right-data-wrap"},Me={class:"progress-complete"},be={class:"progress-box"},Ye={class:"flex"},xe={class:"gc-char"},Se={class:"cp-char-box"},Ee={key:0,class:"cp-char"},Re={key:1,class:"cp-char"},Be={key:2,class:"cp-char"},Ae={key:3,class:"cp-char"},Fe={class:"cp-char-box"},Oe={key:0,class:"cp-char"},Ve={key:1,class:"cp-char"},Le={key:2,class:"cp-char"},Ne={key:3,class:"cp-char"},Pe={key:0,class:"per-char",src:Z,alt:""},je={key:1,class:"per-char",src:H,alt:""},Te={key:2,class:"per-char",src:J,alt:""},qe={key:3,class:"per-char",src:X,alt:""},Ke={class:"data-box flex"},ze={class:"data-detail-wrap"},Ge=R(()=>e("span",{class:"data-char"},"\u6570\u636E\u6982\u89C8",-1)),Ue={class:"data-item"},We={class:"num-char"},Qe=R(()=>e("div",{class:"char"},"\u5B66\u4E60\u4EBA\u6B21",-1)),Ze={class:"data-item"},He={class:"num-char"},Je=R(()=>e("div",{class:"char"},"\u5E74\u7EA7\u4EBA\u6570",-1)),Xe={class:"data-item"},et={class:"num-char"},tt=R(()=>e("div",{class:"char"},"\u6BCF\u65E5\u4E00\u5B66",-1)),at={class:"data-item"},st={class:"num-char"},ot=R(()=>e("div",{class:"char"},"\u6BCF\u5468\u4E00\u505A",-1)),ct={class:"data-item"},lt={class:"num-char"},nt=R(()=>e("div",{class:"char nomar"},"\u6BCF\u6708\u4E00\u8BFE",-1)),rt={class:"detail-char"},dt={class:"class-item-wrap"},ut={class:"flex"},it={class:"class-sec"},_t={class:"class-char"},mt={key:0,class:"per-char",src:Z,alt:""},ht={key:1,class:"per-char",src:H,alt:""},vt={key:2,class:"per-char",src:J,alt:""},pt={key:3,class:"per-char",src:X,alt:""},yt={class:"teacher-sec flex"},ft={class:"teacher-char"},gt={key:0,class:"teacher-char"},kt={key:1,class:"teacher-char"},It={class:"progress-wrap"},wt={class:"count-sec flex"},$t={class:"count-tag"},Ct={class:"count-tag"},Dt={__name:"GradeClassRank2",props:{completeItem:{type:Object},completeIndex:{type:Number,default:0},startDate:{type:String,default:""},endDate:{type:String,default:""},filter:{type:String,default:""},rankMode:{type:Number,default:1},currentMonth:{type:Number,default:1},weekOrMon:{type:Number,default:1}},setup(t,{expose:l}){const r=t,n=i([]),I=async h=>{const v={school_id:F().schoolInfo.id,limit:30,page:1,rank_mode:"class",start_date:r.startDate,end_date:r.endDate,study_type:"all",filter:r.filter,year:h},D=await G(v);n.value=D},m=()=>{o.value=!1},o=i(!1),_=h=>{o.value=!o.value,o.value&&I(h)},f=(h,v)=>{const D=U().teacherList;for(const d of D)if(d.year==h&&d.class_id==v)return d.name},g=h=>Math.ceil(Number(h)*100);return l({doSth:m}),(h,v)=>{const D=P("el-icon");return a(),s("div",Ce,[e("div",De,[e("div",Me,[e("div",be,[e("div",Ye,[e("span",xe,c(S(W)(t.completeItem.year).name),1)]),M(e("div",Se,[t.completeItem.rate=="\u91D1\u699C"?(a(),s("span",Ee,c(t.currentMonth)+"\u6708\u5B66\u4E60\u5B8C\u6210\u7387\u5927\u4E8E60% ",1)):u("",!0),t.completeItem.rate=="\u94F6\u699C"?(a(),s("span",Re,c(t.currentMonth)+"\u6708\u5B66\u4E60\u5B8C\u6210\u7387\u5927\u4E8E40%",1)):u("",!0),t.completeItem.rate=="\u94DC\u699C"?(a(),s("span",Be,c(t.currentMonth)+"\u6708\u5B66\u4E60\u5B8C\u6210\u7387\u5927\u4E8E20%",1)):u("",!0),t.completeItem.rate=="\u672A\u4E0A\u699C"?(a(),s("span",Ae,c(t.currentMonth)+"\u6708\u5B66\u4E60\u5B8C\u6210\u7387\u5C0F\u4E8E20%",1)):u("",!0)],512),[[b,t.weekOrMon==2]]),M(e("div",Fe,[t.completeItem.rate=="\u91D1\u699C"?(a(),s("span",Oe," \u4E0A\u5468\u5B66\u4E60\u5B8C\u6210\u7387\u5927\u4E8E60% ")):u("",!0),t.completeItem.rate=="\u94F6\u699C"?(a(),s("span",Ve," \u4E0A\u5468\u5B66\u4E60\u5B8C\u6210\u7387\u5927\u4E8E40%")):u("",!0),t.completeItem.rate=="\u94DC\u699C"?(a(),s("span",Le," \u4E0A\u5468\u5B66\u4E60\u5B8C\u6210\u7387\u5927\u4E8E20%")):u("",!0),t.completeItem.rate=="\u672A\u4E0A\u699C"?(a(),s("span",Ne," \u4E0A\u5468\u5B66\u4E60\u5B8C\u6210\u7387\u5C0F\u4E8E20%")):u("",!0)],512),[[b,t.weekOrMon==1]])]),t.completeItem.rate=="\u91D1\u699C"?(a(),s("img",Pe)):u("",!0),t.completeItem.rate=="\u94F6\u699C"?(a(),s("img",je)):u("",!0),t.completeItem.rate=="\u94DC\u699C"?(a(),s("img",Te)):u("",!0),t.completeItem.rate=="\u672A\u4E0A\u699C"?(a(),s("img",qe)):u("",!0)]),e("div",Ke,[e("div",ze,[Ge,e("div",Ue,[e("div",We,c(t.completeItem.all),1),Qe]),e("div",Ze,[e("div",He,c(t.completeItem.student_count),1),Je]),e("div",Xe,[e("div",et,c(g(t.completeItem.daily_percent))+"% ",1),tt]),e("div",at,[e("div",st,c(g(t.completeItem.weekly_percent))+"% ",1),ot]),M(e("div",ct,[e("div",lt,c(g(t.completeItem.monthy_percent))+"% ",1),nt],512),[[b,t.weekOrMon==2]])]),e("div",{class:"sw-btn",onClick:v[0]||(v[0]=d=>_(t.completeItem.year))},[e("span",rt,c(o.value?"\u6536\u8D77":"\u67E5\u770B")+"\u5E74\u7EA7\u5404\u73ED\u8BE6\u60C5",1),C(D,null,{default:oe(()=>[M(C(S(ce),{class:"arr-icon"},null,512),[[b,o.value]]),M(C(S(le),{class:"arr-icon"},null,512),[[b,!o.value]])]),_:1})])]),M(e("div",dt,[(a(!0),s(Y,null,x(n.value,(d,B)=>(a(),s("div",{class:"class-item",key:B},[e("div",ut,[e("div",it,[e("span",_t,c(d.class_id)+"\u73ED",1)]),d.rate=="\u91D1\u699C"?(a(),s("img",mt)):u("",!0),d.rate=="\u94F6\u699C"?(a(),s("img",ht)):u("",!0),d.rate=="\u94DC\u699C"?(a(),s("img",vt)):u("",!0),d.rate=="\u672A\u4E0A\u699C"?(a(),s("img",pt)):u("",!0)]),e("div",yt,[e("span",ft,"\u73ED\u4E3B\u4EFB\uFF1A"+c(f(d.year,d.class_id)),1),g(d.all_percent)>=60?(a(),s("span",gt,"\u5B66\u4E60\u5B8C\u6210\u7387\u226560%")):(a(),s("span",kt,"\u5B66\u4E60\u5B8C\u6210\u7387"+c(g(d.all_percent))+"%",1))]),e("div",It,[e("div",{class:"progress-item",style:ne(`width: ${g(d.all_percent)}%`)},null,4)]),e("div",wt,[e("div",$t,"\u5B66\u4E60\u4EBA\u6B21\uFF1A"+c(d.all),1),e("div",Ct,"\u73ED\u7EA7\u4EBA\u6570\uFF1A"+c(d.student_count),1)])]))),128))],512),[[b,o.value]])])])}}},Mt=E(Dt,[["__scopeId","data-v-4b5fd9c6"]]);function bt(){const t=i({}),l=i({}),r=async()=>{const m={school_id:F().getSchoolInfo.id,type:"term"},o=await me(m);t.value=o},n=async()=>{const m={school_id:F().getSchoolInfo.id},o=await he(m);l.value=o};return r(),n(),{studyDashboardCompleteCountRef:t,studyDashboardCompleteDailyRef:l}}const Yt=re({name:"CompletedAmountOverview",props:{dataSource:{type:Object,default:()=>({})},dataSourceAvg:{type:Object,default:()=>({})}},setup(t){const l=i({total:{title:"\u603B\u8BBF\u95EE\u91CF",icon:"overview_total_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u8BBF\u95EE\u91CF",num:0}},daily:{title:"\u6BCF\u65E5\u4E00\u5B66\u603B\u5B66\u4E60\u91CF",icon:"overview_daily_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}},weekly:{title:"\u6BCF\u5468\u4E00\u505A\u603B\u5B8C\u6210\u91CF",icon:"overview_weekly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B8C\u6210\u91CF",num:0}},monthy:{title:"\u6BCF\u6708\u4E00\u8BFE\u603B\u5B66\u4E60\u91CF",icon:"overview_monthly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}}}),r=i(t.dataSource),n=i(t.dataSourceAvg);return de(()=>{r.value=t.dataSource,n.value=t.dataSourceAvg,Object.keys(r.value).length>0&&(l.value.total.num=r.value.total_all,l.value.total.tag.num=r.value.all_today,l.value.total.averageDaily.num=Math.ceil(n.value.all_num/n.value.day_num),l.value.daily.num=r.value.total_daily,l.value.daily.tag.num=r.value.daily,l.value.daily.averageDaily.num=Math.ceil(n.value.daily/n.value.day_num),l.value.weekly.num=r.value.total_weekly,l.value.weekly.tag.num=r.value.weekly_today,l.value.weekly.averageDaily.num=Math.ceil(n.value.weekly/n.value.day_num),l.value.monthy.num=r.value.total_monthy,l.value.monthy.tag.num=r.value.monthy_today,l.value.monthy.averageDaily.num=Math.ceil(n.value.monthy/n.value.day_num))}),{overviewListRef:l,getImageUrl:ve}}});const xt={class:"completed-amount-overview-container"},St={class:"completed-amount-overview-ul flex"},Et={class:"el-card-style","body-style":{padding:"0px"}},Rt={class:"flex"},Bt={class:"title-style"},At={class:"flex-start align-end"},Ft={class:"total-num-style"},Ot={class:"tag-box flex-center"},Vt={class:"flex-start"},Lt={class:"average-daily-title-style"},Nt={class:"average-daily-num-style"};function Pt(t,l,r,n,I,m){const o=P("el-image");return a(),s("div",xt,[e("ul",St,[(a(!0),s(Y,null,x(t.overviewListRef,(_,f)=>(a(),s("li",{key:f,class:"completed-amount-overview-li"},[e("div",Et,[e("header",Rt,[e("p",Bt,c(_.title),1),C(o,{class:"header-icon-style",src:t.getImageUrl(_.icon+".png")},null,8,["src"])]),e("article",At,[e("p",Ft,c(_.num),1),e("div",Ot,[e("p",null,c(_.tag.title),1),e("p",null,c(_.tag.num),1)])]),e("footer",Vt,[e("p",Lt,c(_.averageDaily.title),1),e("p",Nt,c(_.averageDaily.num),1)])])]))),128))])])}const jt=E(Yt,[["render",Pt],["__scopeId","data-v-7331e030"]]);const Tt={class:"class-item"},qt={class:"flex"},Kt={class:"class-sec"},zt={class:"class-char"},Gt={key:0,class:"per-char gold"},Ut={key:1,class:"per-char silver"},Wt={key:2,class:"per-char copper"},Qt={class:"teacher-sec flex"},Zt={class:"teacher-char"},Ht={key:0,class:"teacher-char"},Jt={key:1,class:"teacher-char"},Xt={class:"count-sec flex"},ea={class:"count-tag"},ta={class:"count-tag"},aa={__name:"ClassRankForComplete2",props:{completeItem:{type:Object,default:()=>{}}},setup(t){const l=(n,I)=>{const m=U().teacherList;for(const o of m)if(o.year==n&&o.class_id==I)return o.name},r=n=>Math.ceil(Number(n)*100);return(n,I)=>(a(),s("div",Tt,[e("div",qt,[e("div",Kt,[e("span",zt,c(S(W)(t.completeItem.year).name)+" "+c(t.completeItem.class_id)+"\u73ED ",1)]),t.completeItem.rate=="\u91D1\u699C"?(a(),s("span",Gt,c(t.completeItem.rate),1)):u("",!0),t.completeItem.rate=="\u94F6\u699C"?(a(),s("span",Ut,c(t.completeItem.rate),1)):u("",!0),t.completeItem.rate=="\u94DC\u699C"?(a(),s("span",Wt,c(t.completeItem.rate),1)):u("",!0)]),e("div",Qt,[e("span",Zt,"\u73ED\u4E3B\u4EFB\uFF1A"+c(l(t.completeItem.year,t.completeItem.class_id)),1),r(t.completeItem.all_percent)>=60?(a(),s("span",Ht,"\u5B66\u4E60\u5B8C\u6210\u7387\u226560%")):(a(),s("span",Jt,"\u5B66\u4E60\u5B8C\u6210\u7387"+c(r(t.completeItem.all_percent))+"%",1))]),e("div",Xt,[e("div",ea,"\u5B66\u4E60\u4EBA\u6B21\uFF1A"+c(t.completeItem.all),1),e("div",ta,"\u73ED\u7EA7\u4EBA\u6570\uFF1A"+c(t.completeItem.student_count),1)])]))}},sa=E(aa,[["__scopeId","data-v-bcaafa15"]]);const oa={},ee=t=>(V("data-v-14029ae3"),t=t(),L(),t),ca={class:"nodata-status-container"},la=ee(()=>e("img",{class:"nodata-img",src:pe,alt:""},null,-1)),na=ee(()=>e("span",{class:"nodata-char"},"\u6682\u65E0\u6570\u636E\u5185\u5BB9\uFF0C\u770B\u770B\u5176\u4ED6\u7684\u5427~",-1)),ra=[la,na];function da(t,l){return a(),s("div",ca,ra)}const ua=E(oa,[["render",da],["__scopeId","data-v-14029ae3"]]);const j=t=>(V("data-v-f24d0449"),t=t(),L(),t),ia={class:"study-report-container"},_a={class:"all-wrap"},ma={class:"sort-wrap"},ha={class:"title-time"},va=j(()=>e("span",{class:"study-tit"},"\u5B66\u4E60\u5B8C\u6210\u699C",-1)),pa={class:"time-char"},ya=j(()=>e("span",{class:"o-char"},"\u5206\u7C7B\uFF1A",-1)),fa=["onClick"],ga={key:0,class:"date-picker-wrap"},ka=j(()=>e("div",{class:"ranking_list_name"}," \u9009\u62E9\u65F6\u95F4\uFF1A ",-1)),Ia={key:1,class:"date-picker-wrap"},wa={class:"ranking_list_name"},$a={key:0,class:"data-wrap"},Ca={key:0},Da={key:1},Ma={class:"class-item-wrap"},ba={__name:"studyReportForm2",setup(t){const{studyDashboardCompleteCountRef:l,studyDashboardCompleteDailyRef:r}=bt(),n=[{sortKey:1,sortItem:[{id:"",name:"\u5168\u90E8"},{id:"\u91D1\u699C",name:"\u91D1\u699C"},{id:"\u94F6\u699C",name:"\u94F6\u699C"},{id:"\u94DC\u699C",name:"\u94DC\u699C"}]},{sortKey:2,sortItem:[{id:1,name:"\u5468\u5B66\u52E4"},{id:2,name:"\u6708\u5B66\u52E4"}]}],{proxy:I}=ue(),m=()=>{I.$refs.gradeRef.map(p=>{p.doSth()})},o=i(["",1,"grade"]),_=i(""),f=i(""),g=i(""),h=i(""),v=i("");i("");const D=(p,w)=>{w===""?o.value[2]="grade":["\u91D1\u699C","\u94F6\u699C","\u94DC\u699C"].includes(w)&&(o.value[2]="class"),o.value[p-1]=w,O(),N(()=>{m()})},d=i(""),B=i(""),te=p=>{h.value=y(p).format("YYYY-MM-DD"),v.value=y(p).add(6,"day").format("YYYY-MM-DD"),O(),N(()=>{m()})},ae=p=>{_.value=y(p).format("YYYY-MM-01"),p?g.value=y(p).format("M"):g.value="",f.value=y(_.value).add(1,"month").format("YYYY-MM-DD"),O(),N(()=>{m()})},A=i([]),O=async()=>{const p={school_id:F().schoolInfo.id,limit:30,page:1,rank_mode:o.value[2],start_date:o.value[1]==2?_.value:h.value,end_date:o.value[1]==2?f.value:v.value,study_type:"all",filter:o.value[0]},w=await G(p);A.value=w},T=i("");return z(()=>{y.locale("zh-cn",{week:{dow:1}}),T.value=y().format("YYYY\u5E74MM\u6708DD\u65E5"),g.value=y().month(),f.value=y().format("YYYY-MM-01"),_.value=y(f.value).subtract(1,"month").format("YYYY-MM-DD"),v.value=y().isoWeekday(0).format("YYYY-MM-DD"),h.value=y(v.value).subtract(6,"day").format("YYYY-MM-DD"),d.value=h.value,B.value=y().subtract(1,"month").format("YYYY-MM"),O()}),(p,w)=>{const q=P("el-date-picker");return a(),s("div",ia,[e("div",null,[C(jt,{dataSource:S(l),dataSourceAvg:S(r)},null,8,["dataSource","dataSourceAvg"]),e("div",_a,[C($e)]),e("div",ma,[e("div",ha,[va,e("span",pa,"\u66F4\u65B0\u65F6\u95F4\uFF1A"+c(T.value),1)]),(a(),s(Y,null,x(n,k=>e("div",{class:"sort-sec",key:k.sortKey},[ya,(a(!0),s(Y,null,x(k.sortItem,$=>(a(),s("div",{class:ie(["lab-item",o.value[k.sortKey-1]==$.id?"active":""]),onClick:Ya=>D(k.sortKey,$.id),key:$.id},c($.name),11,fa))),128))])),64)),o.value[1]==1?(a(),s("div",ga,[ka,C(q,{modelValue:d.value,"onUpdate:modelValue":w[0]||(w[0]=k=>d.value=k),onChange:te,type:"week","picker-options":{firstDayOfWeek:1},format:`${h.value} - ${v.value}`,placeholder:"\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue","format"])])):u("",!0),o.value[1]==2?(a(),s("div",Ia,[M(e("div",wa," \u9009\u62E9\u6708\u4EFD\uFF1A ",512),[[b,g.value]]),C(q,{modelValue:B.value,"onUpdate:modelValue":w[1]||(w[1]=k=>B.value=k),type:"month",placeholder:"\u9009\u62E9\u6708",onChange:ae},null,8,["modelValue"])])):u("",!0)]),A.value&&A.value.length?(a(),s("div",$a,[o.value[0]===""?(a(),s("div",Ca,[(a(!0),s(Y,null,x(A.value,(k,$)=>(a(),s("div",{class:"mar-wrap",key:$},[C(Mt,{ref_for:!0,ref:"gradeRef",completeItem:k,completeIndex:$,startDate:o.value[1]==2?_.value:h.value,endDate:o.value[1]==2?f.value:v.value,filter:o.value[0],weekOrMon:o.value[1],rankMode:o.value[2],currentMonth:g.value},null,8,["completeItem","completeIndex","startDate","endDate","filter","weekOrMon","rankMode","currentMonth"])]))),128))])):(a(),s("div",Da,[e("div",Ma,[(a(!0),s(Y,null,x(A.value,(k,$)=>(a(),K(sa,{completeItem:k,key:$},null,8,["completeItem"]))),128))])]))])):(a(),K(ua,{key:1}))])])}}},Na=E(ba,[["__scopeId","data-v-f24d0449"]]);export{Na as default};
