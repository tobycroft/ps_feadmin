import{_ as D,r as n,v as R,b as c,o as u,c as f,h as e,e as o,w as _,F as q,f as A,t as l,C as y,D as w,i as I,V as E,E as b,x as M,y as N}from"./index.6052f1b0.js";import{_ as P,a as F}from"./edit_icon.796fc31d.js";import{r as z,d as U}from"./teacher.4300d2bf.js";import{u as V}from"./school.f7af1a98.js";const d=i=>(M("data-v-4f7f0b2f"),i=i(),N(),i),j={class:"teacher-list-view-container"},G={class:"top-section flex"},H={class:"flex"},J=I("\u67E5\u8BE2"),K=I("+ \u65B0\u5EFA\u6559\u5E08"),O={class:"ul-style"},Q={class:"li-top"},W={class:"name"},X={class:"phone-char"},Y={class:"flex"},Z={class:"yellow-tag"},ee={class:"li-bottom flex"},se=["onClick"],te=d(()=>e("img",{class:"icon-img",src:P,alt:"\u5220\u9664"},null,-1)),ae=d(()=>e("a",{class:"grey-char"},"\u5220\u9664",-1)),oe=[te,ae],ne=d(()=>e("img",{class:"icon-img",src:F,alt:"\u7F16\u8F91"},null,-1)),ce=d(()=>e("span",{class:"grey-char"},"\u7F16\u8F91",-1)),le={class:"flex-end",style:{"margin-top":"24px"}},ie={class:"flex"},re={class:"record-char"},_e={__name:"teacherListView",setup(i){const h=n(""),k=n(""),v=n(1),g=n([]),p=n(0),r=async()=>{const t={school_id:V().schoolInfo.id,page:v.value,limit:8,name:h.value,year:k.value},a=await z(t);g.value=a.data,p.value=a.total};R(()=>{r()});const C=t=>{v.value=t,r()},L=async t=>{const a={school_id:V().schoolInfo.id,id:t};await U(a),r()},S=t=>{E.confirm("\u662F\u5426\u786E\u8BA4\u5220\u9664?","\u63D0\u793A",{confirmButtonText:"\u662F",cancelButtonText:"\u5426",type:"warning"}).then(async()=>{await L(t),b({type:"success",message:"\u5220\u9664\u6210\u529F\uFF01"})}).catch(()=>{b({type:"info",message:"\u5220\u9664\u53D6\u6D88\uFF01"})})};return(t,a)=>{const T=c("el-input"),m=c("el-button"),x=c("router-link"),$=c("el-avatar"),B=c("el-pagination");return u(),f("div",j,[e("div",G,[e("div",H,[o(T,{style:{width:"280px","margin-right":"24px"},modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=s=>h.value=s),class:"m-2",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8001\u5E08\u540D\u5B57"},null,8,["modelValue"]),o(m,{class:"add-btn",onClick:r},{default:_(()=>[J]),_:1})]),o(x,{to:"/teacherAddView"},{default:_(()=>[o(m,{class:"add-btn"},{default:_(()=>[K]),_:1})]),_:1})]),e("ul",O,[(u(!0),f(q,null,A(g.value,s=>(u(),f("li",{class:"li-style",key:s.id},[e("div",Q,[o($,{fit:"fill",class:"avatar",src:s.img},null,8,["src"]),e("span",W,l(s.name),1),e("span",X,l(s.gender==1?"\u7537":"\u5973")+" \u4E28 "+l(s.phone),1),e("div",Y,[y(e("div",{class:"blue-tag"},l(s.info),513),[[w,s.info]]),y(e("div",Z,"\u73ED\u4E3B\u4EFB",512),[[w,s.is_master]])])]),e("div",ee,[e("div",{class:"flex-center flex1 bor",onClick:de=>S(s.id)},oe,8,se),o(x,{to:`/teacherAddView?name=${s.name}&info=${s.info}&img=${s.img}&phone=${s.phone}&gender=${s.gender}&id=${s.id}`,class:"flex-center flex1"},{default:_(()=>[ne,ce]),_:2},1032,["to"])])]))),128))]),e("div",le,[e("div",ie,[e("span",re,"\u5171"+l(p.value)+"\u6761\u8BB0\u5F55",1),o(B,{"page-size":8,"pager-count":5,onCurrentChange:C,layout:"prev, pager, next",total:p.value},null,8,["total"])])])])}}},ve=D(_e,[["__scopeId","data-v-4f7f0b2f"]]);export{ve as default};
