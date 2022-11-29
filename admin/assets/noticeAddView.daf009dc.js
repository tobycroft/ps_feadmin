import{b as R}from"./notice.4fc33693.js";import{_ as T,V as F,b as P,v as j,u as E,r as n,o as d,c,a as t,w as a,h as b,F as m,f,g as r,B as g,j as h,i as k,x as M,y as z}from"./index.dde6a0b4.js";import{u as v}from"./school.d695eb63.js";import{r as D}from"./teacher.bfa73783.js";import{h as G}from"./moment.9709ab41.js";const H=i=>(M("data-v-fbea9011"),i=i(),z(),i),J={class:"notice-add-view-container"},K=H(()=>b("div",{class:"card-header"},[b("span",null,"\u7F16\u8F91\u901A\u77E5")],-1)),O={class:"flex-center",style:{"padding-top":"20px"}},Q=k("\u91CD\u7F6E"),W=k("\u5B8C\u6210"),X={__name:"noticeAddView",setup(i){const e=F({title:"",content:"",grade_id:"",class_id:"",teacher_id:"",receiver:""}),x=v().gradeList,A=v().classList,I=async()=>{const u={receiver:e.receiver,type:"notice",year:e.grade_id?G().subtract(9,"month").year()-Number(e.grade_id):0,class_id:e.class_id||0,title:e.title,content:e.content,school_id:v().schoolInfo.id,teacher_id:e.teacher_id||0};await R(u)},V=P([]),L=async()=>{const u={school_id:v().schoolInfo.id,page:1,limit:30},o=await D(u);V.value=o.data};j(()=>{L()});const N=[{value:"teacher",name:"\u5355\u4E2A\u6559\u5E08"},{value:"school",name:"\u5168\u6821"},{value:"grade",name:"\u5168\u5E74\u7EA7"},{value:"class",name:"\u5168\u73ED"}],S=()=>{e.title="",e.content="",e.receiver=""},U=E(),B=async()=>{await I(),U.push({path:"/noticeAddScuccessView"})};return(u,o)=>{const y=n("el-input"),s=n("el-form-item"),_=n("el-option"),p=n("el-select"),w=n("el-button"),C=n("el-form"),q=n("el-card");return d(),c("div",J,[t(q,{class:"box-card"},{header:a(()=>[K]),default:a(()=>[b("div",O,[t(C,{"label-position":"left","label-width":"100px",model:e,style:{width:"540px"}},{default:a(()=>[t(s,{label:"\u901A\u77E5\u6807\u9898\uFF1A"},{default:a(()=>[t(y,{modelValue:e.title,"onUpdate:modelValue":o[0]||(o[0]=l=>e.title=l),placeholder:"\u8BF7\u8F93\u5165\u901A\u77E5\u6807\u9898"},null,8,["modelValue"])]),_:1}),t(s,{label:"\u901A\u77E5\u5BF9\u8C61\uFF1A"},{default:a(()=>[t(p,{modelValue:e.receiver,"onUpdate:modelValue":o[1]||(o[1]=l=>e.receiver=l),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u8981\u901A\u77E5\u7684\u5BF9\u8C61",style:{width:"100%"}},{default:a(()=>[(d(),c(m,null,f(N,l=>t(_,{key:l.value,label:l.name,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e.receiver=="grade"||e.receiver=="class"?(d(),r(s,{key:0,label:"\u9009\u62E9\u5E74\u7EA7\uFF1A"},{default:a(()=>[t(p,{modelValue:e.grade_id,"onUpdate:modelValue":o[2]||(o[2]=l=>e.grade_id=l),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u8981\u901A\u77E5\u7684\u5E74\u7EA7",style:{width:"100%"}},{default:a(()=>[(d(!0),c(m,null,f(g(x),l=>(d(),r(_,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):h("",!0),e.receiver=="class"?(d(),r(s,{key:1,label:"\u9009\u62E9\u73ED\u7EA7\uFF1A"},{default:a(()=>[t(p,{modelValue:e.class_id,"onUpdate:modelValue":o[3]||(o[3]=l=>e.class_id=l),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u8981\u901A\u77E5\u7684\u73ED\u7EA7",style:{width:"100%"}},{default:a(()=>[(d(!0),c(m,null,f(g(A),l=>(d(),r(_,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):h("",!0),e.receiver=="teacher"?(d(),r(s,{key:2,label:"\u9009\u62E9\u6559\u5E08\uFF1A"},{default:a(()=>[t(p,{modelValue:e.teacher_id,"onUpdate:modelValue":o[4]||(o[4]=l=>e.teacher_id=l),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u8981\u901A\u77E5\u7684\u6559\u5E08",style:{width:"100%"}},{default:a(()=>[(d(!0),c(m,null,f(V.value,l=>(d(),r(_,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):h("",!0),t(s,{label:"\u901A\u77E5\u5185\u5BB9\uFF1A"},{default:a(()=>[t(y,{type:"textarea",modelValue:e.content,"onUpdate:modelValue":o[5]||(o[5]=l=>e.content=l)},null,8,["modelValue"])]),_:1}),t(s,null,{default:a(()=>[t(w,{onClick:S},{default:a(()=>[Q]),_:1}),t(w,{type:"primary",onClick:B},{default:a(()=>[W]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1})])}}},ae=T(X,[["__scopeId","data-v-fbea9011"]]);export{ae as default};
