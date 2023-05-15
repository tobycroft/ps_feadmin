import{u as i}from"./school.a228afe4.js";import{f as q}from"./study.8768d348.js";import{h as z}from"./moment.9709ab41.js";import{E as A}from"./EveryDayDetail.ef8a343f.js";import{E as N}from"./EveryWeekDetail.be90fa4a.js";import{E as P}from"./EveryMonthDetail.5270769b.js";import{_ as W,b as s,v as T,r as E,o as l,c as d,h as o,F as y,f as p,t as n,a as c,w as V,n as M,x as j,y as H}from"./index.4f62021f.js";import"./request.b885c166.js";import"./week_theme_tag.5a8251ca.js";import"./quiz.caaca534.js";const Y=_=>(j("data-v-11976b36"),_=_(),H(),_),J={class:"study-overview-container"},K={class:"sort-wrap"},Q={class:"sort-sec"},X=Y(()=>o("span",{class:"o-char"},"\u5E74\u7EA7\uFF1A",-1)),Z=["onClick"],ee={class:"sort-sec"},te=Y(()=>o("span",{class:"o-char"},"\u5206\u7C7B\uFF1A",-1)),oe=["onClick"],se={class:"learn-box"},ae=["onClick"],le={class:"left-title"},de={class:"title-char"},ie={class:"yellow-tag"},ne={class:"time-char"},ce={class:"flex-start",style:{margin:"18px 0 0 18px"}},ue={class:"flex"},re={class:"record-char"},_e={class:"study-dialog-wrap"},ve={class:"study-dialog-wrap"},ye={class:"study-dialog-wrap"},pe={__name:"studyOverview",setup(_){const S=s([]),B=[{id:"daily",name:"\u6BCF\u65E5\u4E00\u5B66"},{id:"weekly",name:"\u6BCF\u5468\u4E00\u505A"},{id:"monthy",name:"\u6BCF\u6708\u4E00\u8BFE"}],h=s("daily"),F=e=>{h.value=e,v()},f=s(1),G=e=>{f.value=e,v()},m=s(0),x=s(1),O=e=>{x.value=e,v()},b=s([]),v=async()=>{const e={type:h.value,is_custom:!1,limit:10,page:x.value,area_id:0,school_id:i().schoolInfo.id,grade:f.value,title:"",start_date:"",end_date:"",tag_ids:""},a=await q(e);b.value=a.data,m.value=a.total};T(async()=>{const e=i().gradeList;(!e||!e.length)&&await i().getSchoolGradeList(),i().saveSchoolInfo(i().schoolInfo.id).then(()=>{console.log("schoolinfo_refresh")});const a=[];for(const u in e)e[u].id>=i().schoolInfo.grade_min&&e[u].id<=i().schoolInfo.grade_max&&a.push(e[u]);S.value=a,v()});const U=e=>z(e).utc().format("YYYY.MM.DD"),C=s(0),g=s(!1),R=s(0),k=s(!1),D=s(0),w=s(!1),L=s(0),$=e=>{e.study_type=="daily"&&(g.value=!0,C.value=e.id),e.study_type=="weekly"&&(k.value=!0,R.value=e.id),e.study_type=="monthy"&&(w.value=!0,D.value=e.id,L.value=e.study_id)};return(e,a)=>{const u=E("el-pagination"),I=E("el-dialog");return l(),d("div",J,[o("div",K,[o("div",Q,[X,(l(!0),d(y,null,p(S.value,t=>(l(),d("div",{class:M(["lab-item",f.value==t.id?"active":""]),onClick:r=>G(t.id),key:t.id},n(t.name),11,Z))),128))]),o("div",ee,[te,(l(),d(y,null,p(B,t=>o("div",{class:M(["lab-item",h.value==t.id?"active":""]),onClick:r=>F(t.id),key:t.id},n(t.name),11,oe)),64))])]),o("div",se,[(l(!0),d(y,null,p(b.value,t=>(l(),d("div",{class:"learn-sec flex",key:t.id,onClick:r=>$(t)},[o("div",le,[o("span",de,"\u300A"+n(t.title)+"\u300B",1),(l(!0),d(y,null,p(t.special_tag,r=>(l(),d("div",{class:"blue-tag",key:r.id},n(r.name),1))),128)),o("div",ie,"\u6240\u5C5E\u5E74\u7EA7\uFF1A"+n(t.grade)+"\u5E74\u7EA7",1)]),o("span",ne,n(U(t.show_date)),1)],8,ae))),128))]),o("div",ce,[o("div",ue,[o("span",re,"\u5171"+n(m.value)+"\u6761\u8BB0\u5F55",1),c(u,{"page-size":10,"pager-count":5,layout:"prev, pager, next",total:m.value,onCurrentChange:O},null,8,["total"])])]),c(I,{modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=t=>g.value=t),title:"",width:"29vw",center:""},{default:V(()=>[o("div",_e,[c(A,{"look-study-id":C.value},null,8,["look-study-id"])])]),_:1},8,["modelValue"]),c(I,{modelValue:k.value,"onUpdate:modelValue":a[1]||(a[1]=t=>k.value=t),title:"",width:"31vw",center:""},{default:V(()=>[o("div",ve,[c(N,{"look-study-id":R.value},null,8,["look-study-id"])])]),_:1},8,["modelValue"]),c(I,{modelValue:w.value,"onUpdate:modelValue":a[2]||(a[2]=t=>w.value=t),title:"",width:"30vw",center:""},{default:V(()=>[o("div",ye,[c(P,{"look-study-id":D.value,"look-month-id":L.value},null,8,["look-study-id","look-month-id"])])]),_:1},8,["modelValue"])])}}},be=W(pe,[["__scopeId","data-v-11976b36"]]);export{be as default};
