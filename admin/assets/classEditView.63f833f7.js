import{_ as Y,H as P,U as T,r as V,v as H,u as M,b as d,o as i,c as p,e as a,w as l,g as f,B as o,F as w,f as x,h as I,i as k,x as Q,y as j}from"./index.69819ba0.js";import{r as z,b as D,c as G}from"./teacher.cedc1533.js";import{u}from"./school.46a88440.js";const J=_=>(Q("data-v-0ccb8a1f"),_=_(),j(),_),K={class:"notice-add-view-container"},O=J(()=>f("div",{class:"card-header"},[f("span",null,"\u7F16\u8F91\u73ED\u7EA7")],-1)),W={class:"flex-center",style:{"padding-top":"20px"}},X=k("\u91CD\u7F6E"),Z=k("\u5B8C\u6210"),$={__name:"classEditView",setup(_){let c=P().query;console.log(c);let e=T({title:"",year:"",teacherName:"",class_id:"",teacher_id:""});const m=V(0),N=()=>{c.id&&(e.title=c.title,e.year=c.year,e.teacherName=c.name,e.teacher_id=Number(c.teacher_id),e.class_id=Number(c.class_id),m.value=Number(c.id))},q=u().classList,h=V([]),C=async()=>{const n={teacher_id:e.teacher_id||0,year:e.year,class_id:e.class_id||0,title:e.title,content:"",school_id:u().schoolInfo.id};await D(n)},g=async()=>{const n={teacher_id:e.teacher_id,year:e.year,class_id:e.class_id,id:m.value,title:e.title,school_id:u().schoolInfo.id};await G(n)},E=async()=>{const n={school_id:u().schoolInfo.id,page:1,limit:30},s=await z(n);h.value=s.data};H(()=>{N(),E()});const L=M(),A=async()=>{m.value?await g():await C(),L.push({path:"/classEditSuccessView"})},S=()=>{e.year="",e.title="",e.teacherName="",e.teacher_id=0,e.class_id=0};return(n,s)=>{const B=d("el-input"),r=d("el-form-item"),F=d("el-date-picker"),y=d("el-option"),b=d("el-select"),v=d("el-button"),R=d("el-form"),U=d("el-card");return i(),p("div",K,[a(U,{class:"box-card"},{header:l(()=>[O]),default:l(()=>[f("div",W,[a(R,{"label-position":"left","label-width":"100px",model:o(e),style:{width:"540px"},ref:"ruleFormRef"},{default:l(()=>[a(r,{label:"\u73ED\u7EA7\u540D\u79F0\uFF1A"},{default:l(()=>[a(B,{modelValue:o(e).title,"onUpdate:modelValue":s[0]||(s[0]=t=>o(e).title=t),placeholder:"\u8BF7\u8F93\u5165\u73ED\u7EA7\u540D\u79F0"},null,8,["modelValue"])]),_:1}),a(r,{label:"\u5165\u5B66\u5E74\u4EFD"},{default:l(()=>[a(F,{style:{width:"100%"},modelValue:o(e).year,"onUpdate:modelValue":s[1]||(s[1]=t=>o(e).year=t),type:"year","value-format":"YYYY",placeholder:"\u8BF7\u9009\u62E9\u5165\u5B66\u5E74\u4EFD"},null,8,["modelValue"])]),_:1}),a(r,{label:"\u73ED\u7EA7\uFF1A"},{default:l(()=>[a(b,{style:{width:"100%"},modelValue:o(e).class_id,"onUpdate:modelValue":s[2]||(s[2]=t=>o(e).class_id=t),class:"m-2",placeholder:"\u8BF7\u9009\u62E9\u73ED\u7EA7"},{default:l(()=>[(i(!0),p(w,null,x(o(q),t=>(i(),I(y,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(r,{label:"\u73ED\u4E3B\u4EFB\uFF1A"},{default:l(()=>[a(b,{style:{width:"100%"},modelValue:o(e).teacher_id,"onUpdate:modelValue":s[3]||(s[3]=t=>o(e).teacher_id=t),class:"m-2",placeholder:"\u8BF7\u9009\u62E9\u73ED\u4E3B\u4EFB"},{default:l(()=>[(i(!0),p(w,null,x(h.value,t=>(i(),I(y,{key:t.name,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(r,null,{default:l(()=>[a(v,{onClick:S},{default:l(()=>[X]),_:1}),a(v,{type:"primary",onClick:A},{default:l(()=>[Z]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1})])}}},se=Y($,[["__scopeId","data-v-0ccb8a1f"]]);export{se as default};
