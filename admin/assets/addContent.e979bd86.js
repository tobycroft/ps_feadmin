import{_ as J,r as a,H as K,v as j,u as Q,b as n,o as y,c as A,e as s,w as d,h as o,B as g,I as W,F as X,f as Z,g as $,K as ee,t as ae,i as q,E as te,x as se,y as oe}from"./index.6052f1b0.js";import{S as C}from"./StudyTaskTable.4702cf3e.js";import{d as le,g as ne}from"./study.57f4d699.js";import{u as b}from"./school.f7af1a98.js";import{h as de}from"./moment.9709ab41.js";const x=r=>(se("data-v-af7f558a"),r=r(),oe(),r),ce=x(()=>o("div",{class:"card-header"},[o("span",{class:"head-title"},"\u6DFB\u52A0\u5185\u5BB9")],-1)),ue={class:"search-wrap"},re={class:"search-left-wrap"},ie={class:"flex search-item-sec"},_e=x(()=>o("span",{class:"search-label"},"\u4EFB\u52A1\u540D\u79F0",-1)),pe={class:"flex search-item-sec"},fe=x(()=>o("span",{class:"search-label"},"\u4EFB\u52A1\u5E74\u7EA7",-1)),me=q("\u67E5\u8BE2"),ve=q("\u65B0\u5EFA\u4EFB\u52A1"),he={class:"flex-end",style:{"margin-top":"24px"}},ye={class:"flex"},ge={class:"record-char"},be={__name:"addContent",setup(r){const D=b().gradeList,k=a("know"),f=a(0),w=a(1),m=a(null),L=a(""),N=a([]),B=a(""),T=a(""),u=a("daily"),i=a(""),I=a(null),v=K();u.value=v.query.type,I.value=Number(v.query.grade),i.value=v.query.date;const h=a([]),_=a(!1),p=async()=>{let e=0;_.value&&(e=b().schoolInfo.id);const t={type:u.value,is_custom:_.value,limit:10,page:w.value,area_id:0,school_id:e,grade:m.value,title:L.value,start_date:B.value,end_date:T.value,tag_ids:N.value},c=await le(t);h.value=c.data,f.value=c.total};j(()=>{p()});const M=e=>{w.value=e,p()},Y=(e,t)=>{console.log(e,t),e.props.name=="know"&&(_.value=!1),e.props.name=="custom"&&(_.value=!0),p()},E=async e=>{const t=[I.value],c={school_id:b().schoolInfo.id,study_type:u.value,study_id:e,grade:JSON.stringify(t),push_date:i.value,show_date:i.value,end_date:de(i.value).add(7,"days").format("YYYY-MM-DD HH:mm:ss"),can_push:!0,can_show:!0};await ne(c)},H=Q(),S=async e=>{console.log(e),await E(e),te.success("\u6DFB\u52A0\u6210\u529F"),H.back()};return(e,t)=>{const c=n("el-input"),O=n("el-option"),P=n("el-select"),R=n("el-button"),U=n("router-link"),V=n("el-tab-pane"),F=n("el-tabs"),z=n("el-pagination"),G=n("el-card");return y(),A("div",null,[s(G,{class:"box-card"},{header:d(()=>[ce]),default:d(()=>[o("div",ue,[o("div",re,[o("div",ie,[_e,s(c,{style:{width:"px(296)","margin-right":"24px"},modelValue:e.contentRef,"onUpdate:modelValue":t[0]||(t[0]=l=>e.contentRef=l),class:"flex1",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0","suffix-icon":g(W)},null,8,["modelValue","suffix-icon"])]),o("div",pe,[fe,s(P,{style:{"margin-right":"24px"},modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=l=>m.value=l),class:"flex1",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u4EFB\u52A1\u5E74\u7EA7"},{default:d(()=>[(y(!0),A(X,null,Z(g(D),l=>(y(),$(O,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),s(R,{class:"add-btn search",type:"primary",onClick:p},{default:d(()=>[me]),_:1})]),s(U,{to:"/createTask?type=weekly"},{default:d(()=>[s(R,{class:"add-btn",type:"primary",icon:g(ee)},{default:d(()=>[ve]),_:1},8,["icon"])]),_:1})]),s(F,{modelValue:k.value,"onUpdate:modelValue":t[2]||(t[2]=l=>k.value=l),class:"demo-tabs",onTabClick:Y},{default:d(()=>[s(V,{label:"\u77E5\u8BC6\u5E93",name:"know"},{default:d(()=>[s(C,{hasOperationAdd:"",onAddIt:S,"table-data":h.value,type:u.value},null,8,["table-data","type"])]),_:1}),s(V,{label:"\u81EA\u5B9A\u4E49",name:"custom"},{default:d(()=>[s(C,{hasOperationAdd:"",onAddIt:S,"table-data":h.value,type:u.value},null,8,["table-data","type"])]),_:1})]),_:1},8,["modelValue"]),o("div",he,[o("div",ye,[o("span",ge,"\u5171"+ae(f.value)+"\u6761\u8BB0\u5F55",1),s(z,{"page-size":10,"pager-count":5,layout:"prev, pager, next",total:f.value,onCurrentChange:M},null,8,["total"])])])]),_:1})])}}},Re=J(be,[["__scopeId","data-v-af7f558a"]]);export{Re as default};
