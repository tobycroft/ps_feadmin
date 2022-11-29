import{_ as M}from"./login-zh-icon.d552541b.js";import{b as P,I as x,z as V,V as y,m as N,v as j,u as B,r as l,o as A,c as v,h as n,B as g,t as D,a,w as c,Q as K,i as H,E as Y}from"./index.dde6a0b4.js";import{r as E,u as t}from"./school.d695eb63.js";import{u as Q}from"./user.f464daea.js";import{g as k}from"./ak.02252990.js";const G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAAXNSR0IArs4c6QAAAXBJREFUKFN1kD9IAnEUx9/3zlMHKYeGtmizLXCMoECoodG2IEqrJdLSJXX4QWgNB6eQg3kRQYGgQVtLEE01FNRUWw21BREuddz9XpxlHFFvejw+3z88kGeE2AtqYScF4mUCCtbr06EQwu4iKBnmiAT6QTIGojEwHXxYtO8PKBkmOQlCi5kuVZaPKJbrbQWKzrZzbbW1UyHm3rtOQlRDWo82BShRAsVRKpsPuXRy0Fvnr93l/oVd10A4OLGeThy54n/hTnw4cEKMRn41Uf0TLpbNCwW8LBllArXyqWSlW+nbuX6XSy8MddR6LUI+9YxBW15Q6LU+v09tomTsNknFdm5l/twVCCF83t+6t2LFTCmSQxB6LeKqLNsZF9mll9+f+E5rWtweRSfeqMcZlGHpjxfWZp+7gs1KPcoSDSY5nV9dvOnA7mwYOzEFikHgFklcEXiKCMOwnblcduneZX7gr757Qa3XmQFogJhvrbfnY2//T8TCqQlkvmWrAAAAAElFTkSuQmCC",X=async o=>await E.post("https://dev.ps.familyeducation.org.cn/v1/user/auth/phone",o),$=async o=>await E.post("https://dev.ps.familyeducation.org.cn/v1/user/auth/send",o),q=async o=>await E.post("https://dev.ps.familyeducation.org.cn/v1/school/admin/my_list",o),C=P(60),S=P(!1),z=async o=>{await $({phone:o})},J=async o=>{await z(o),S.value=!0;const p=setInterval(()=>{C.value--,C.value<=0&&(S.value=!1,C.value=0,clearTimeout(p))},1e3)};const Z={class:"container-wrap flex"},ee={class:"logo_section"},ne=["src"],ie={class:"school-name"},se={class:"logo_name_wrap"},oe=n("h1",{class:"title-char"},"Hi\uFF0C\u4F60\u597D\uFF01",-1),_e={class:"title-char"},ae={class:"flex-center login-container-wrap"},pe={class:"login-wrap"},re=n("h1",null,"\u767B\u5F55\u7BA1\u7406\u4E2D\u5FC3",-1),te={class:"flex item-wrap p"},me=n("div",{class:"icon-wrap flex-center"},[n("img",{class:"login-icon",src:M,alt:""})],-1),ce={class:"flex item-wrap"},de={class:"flex el-input-wrap"},le=n("div",{class:"icon-wrap flex-center"},[n("img",{class:"login-icon",src:G,alt:""})],-1),ge={key:0,class:"send-code grey"},Ce=H("\u767B\u5F55"),Se={__name:"loginView",setup(o){const p=x();console.log("query",p.query);const m=P({});V(async()=>{p.query.domain?await t().reqSchoolDomainGetAPI(p.query.domain):p.query.id&&await t().saveSchoolInfo(p.query.id),t().schoolDomainInfo.id?m.value=t().schoolDomainInfo:t().schoolInfo.id&&(m.value=t().schoolInfo)});const R=P({}),b=(_,e,i)=>{e===""?i(new Error("\u8BF7\u8F93\u5165\u624B\u673A\u53F7")):/^1((3[0-9])|(4[1579])|(5[0-9])|(6[6])|(7[0-9])|(8[0-9])|(9[0-9]))\d{8}$/.test(e)?i():i(new Error("\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"))},h=(_,e,i)=>{e===""?i(new Error("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801")):i()},s=y({codeRef:"",phoneRef:""}),u=N();j(()=>{u.loginInfo.phone&&(s.phoneRef=u.loginInfo.phone)});const F=y({phoneRef:[{validator:b,trigger:"blur"}],codeRef:[{validator:h,trigger:"blur"}]}),U=_=>{!_||_.validate(e=>{if(e)console.log("submit!",s),f();else return console.log("error submit!"),!1})},f=async()=>{const _={phone:s.phoneRef,code:s.codeRef},e=await X(_);u.getLoginInfo(e.token,e.uid,s.phoneRef),await w()},I=B(),w=async()=>{const e=await q({});!e||e.length<1?Y.error("\u65E0\u6743\u9650"):(O(e),I.push({path:"/platformSelection"}))},O=_=>{const e=Q(),i=t();i.saveSchoolInfoList();const r=_[0].school_id;console.log("debug :>> ",r),i.saveSchoolInfo(r),e.saveSchoolUserInfo()};return(_,e)=>{const i=l("el-input"),r=l("el-form-item"),L=l("el-checkbox"),W=l("el-button"),T=l("el-form");return A(),v("div",{class:"root",style:K(`background-image: url(${m.value.bg_img||g(k)("login_bg.png")})`)},[n("div",Z,[n("div",ee,[n("img",{class:"logo-img",src:m.value.icon||g(k)("school_logo.png"),alt:""},null,8,ne),n("span",ie,D(m.value.name||"\u798F\u5EFA\u5F00\u653E\u5927\u5B66"),1)]),n("div",se,[oe,n("h1",_e," \u6B22\u8FCE\u6765\u5230"+D(m.value.name||"\u798F\u5EFA\u5F00\u653E\u5927\u5B66"),1)]),n("div",ae,[n("div",pe,[re,a(T,{ref_key:"ruleFormRef",ref:R,model:s,"status-icon":"",rules:F,"label-width":"120px",class:"demo-ruleForm","label-position":"top",style:{width:"314px"}},{default:c(()=>[a(r,{"label-width":0,prop:"phoneRef",style:{width:"314px"}},{default:c(()=>[n("div",te,[me,a(i,{modelValue:s.phoneRef,"onUpdate:modelValue":e[0]||(e[0]=d=>s.phoneRef=d),type:"text",maxlength:11,resize:"none",clearable:"",autocomplete:"off",class:"el-input"},null,8,["modelValue"])])]),_:1}),a(r,{"label-width":0,prop:"codeRef",style:{width:"314px"}},{default:c(()=>[n("div",ce,[n("div",de,[le,a(i,{resize:"none",class:"el-input code",maxlength:"6",modelValue:s.codeRef,"onUpdate:modelValue":e[1]||(e[1]=d=>s.codeRef=d),type:"codeRefword"},null,8,["modelValue"])]),g(S)?(A(),v("div",ge," \u5DF2\u53D1\u9001("+D(g(C))+"s) ",1)):(A(),v("div",{key:1,class:"send-code",onClick:e[2]||(e[2]=d=>g(J)(s.phoneRef))}," \u83B7\u53D6\u9A8C\u8BC1\u7801 "))])]),_:1}),a(r,null,{default:c(()=>[a(L,{label:"\u8BB0\u4F4F\u8D26\u53F7",name:"type"})]),_:1}),a(r,null,{default:c(()=>[a(W,{class:"login-btn",type:"primary",onClick:e[3]||(e[3]=d=>U(R.value))},{default:c(()=>[Ce]),_:1})]),_:1})]),_:1},8,["model","rules"])])])])],4)}}};export{Se as default};