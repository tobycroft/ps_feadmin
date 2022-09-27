import{_ as R,r as l,v as q,b as n,o as f,c as v,g as s,e as o,w as d,F as A,f as E,t as c,C as w,D as V,i as b,V as Y,E as k,x as M,y as N}from"./index.3b2b6dec.js";import{_ as P,a as F}from"./edit_icon.796fc31d.js";import{r as U,d as z}from"./teacher.96bdfddc.js";import{u as I}from"./school.1eb9c45a.js";const _=i=>(M("data-v-85ad5683"),i=i(),N(),i),j={class:"teacher-list-view-container"},G={class:"top-section flex"},H={class:"flex"},J=b("\u67E5\u8BE2"),K=b("+ \u65B0\u5EFA\u6559\u5E08"),O={class:"ul-style"},Q={class:"li-top"},W={class:"name"},X={class:"phone-char"},Z={class:"flex"},ee={class:"yellow-tag"},se={class:"li-bottom flex"},te=["onClick"],ae=_(()=>s("img",{class:"icon-img",src:P,alt:"\u5220\u9664"},null,-1)),oe=_(()=>s("a",{class:"grey-char"},"\u5220\u9664",-1)),ne=[ae,oe],le=_(()=>s("img",{class:"icon-img",src:F,alt:"\u7F16\u8F91"},null,-1)),ce=_(()=>s("span",{class:"grey-char"},"\u7F16\u8F91",-1)),ie={class:"flex-end",style:{"margin-top":"24px"}},re={class:"flex"},de={class:"record-char"},_e={__name:"teacherListView",setup(i){const p=l(""),h=l(""),g=l(1),m=l([]),u=l(0),r=async()=>{const a={school_id:I().schoolInfo.id,page:g.value,limit:8,name:p.value,year:h.value},t=await U(a);m.value=t.data,u.value=t.total};q(()=>{r()});const C=a=>{g.value=a,r()},L=async a=>{const t={school_id:I().schoolInfo.id,id:a};await z(t),r()},S=a=>{Y.confirm("\u662F\u5426\u786E\u8BA4\u5220\u9664?","\u63D0\u793A",{confirmButtonText:"\u662F",cancelButtonText:"\u5426",type:"warning"}).then(async()=>{await L(a),k({type:"success",message:"\u5220\u9664\u6210\u529F\uFF01"})}).catch(()=>{k({type:"info",message:"\u5220\u9664\u53D6\u6D88\uFF01"})})};return(a,t)=>{const T=n("el-input"),$=n("el-date-picker"),x=n("el-button"),y=n("router-link"),B=n("el-avatar"),D=n("el-pagination");return f(),v("div",j,[s("div",G,[s("div",H,[o(T,{style:{width:"280px","margin-right":"24px"},modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=e=>p.value=e),class:"m-2",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8001\u5E08\u540D\u5B57"},null,8,["modelValue"]),o($,{style:{width:"160px","margin-right":"24px"},modelValue:h.value,"onUpdate:modelValue":t[1]||(t[1]=e=>h.value=e),type:"year","value-format":"YYYY",placeholder:"\u8BF7\u9009\u62E9\u5165\u5B66\u5E74\u4EFD"},null,8,["modelValue"]),o(x,{class:"add-btn",onClick:r},{default:d(()=>[J]),_:1})]),o(y,{to:"/teacherAddView"},{default:d(()=>[o(x,{class:"add-btn"},{default:d(()=>[K]),_:1})]),_:1})]),s("ul",O,[(f(!0),v(A,null,E(m.value,e=>(f(),v("li",{class:"li-style",key:e.id},[s("div",Q,[o(B,{fit:"fill",class:"avatar",src:e.img},null,8,["src"]),s("span",W,c(e.name),1),s("span",X,c(e.gender==1?"\u7537":"\u5973")+" \u4E28 "+c(e.phone),1),s("div",Z,[w(s("div",{class:"blue-tag"},c(e.info),513),[[V,e.info]]),w(s("div",ee,"\u73ED\u4E3B\u4EFB",512),[[V,e.is_master]])])]),s("div",se,[s("div",{class:"flex-center flex1 bor",onClick:pe=>S(e.id)},ne,8,te),o(y,{to:`/teacherAddView?name=${e.name}&info=${e.info}&img=${e.img}&phone=${e.phone}&gender=${e.gender}&id=${e.id}`,class:"flex-center flex1"},{default:d(()=>[le,ce]),_:2},1032,["to"])])]))),128))]),s("div",ie,[s("div",re,[s("span",de,"\u5171"+c(u.value)+"\u6761\u8BB0\u5F55",1),o(D,{"page-size":8,"pager-count":5,onCurrentChange:C,layout:"prev, pager, next",total:u.value},null,8,["total"])])])])}}},ge=R(_e,[["__scopeId","data-v-85ad5683"]]);export{ge as default};
