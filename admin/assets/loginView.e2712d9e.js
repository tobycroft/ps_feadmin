import{b as S,_ as v,I as b,z as G,V as u,m as j,v as k,u as H,r as C,o as g,c as E,h as o,B as P,t as R,a as t,w as p,j as F,Q as B,i as X,E as K}from"./index.5c9dba08.js";import{_ as J}from"./login-zh-icon.d552541b.js";import{r as D,u as l}from"./school.39248828.js";import{u as z}from"./user.8040e587.js";import{g as M}from"./ak.02252990.js";const $="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAAXNSR0IArs4c6QAAAXBJREFUKFN1kD9IAnEUx9/3zlMHKYeGtmizLXCMoECoodG2IEqrJdLSJXX4QWgNB6eQg3kRQYGgQVtLEE01FNRUWw21BREuddz9XpxlHFFvejw+3z88kGeE2AtqYScF4mUCCtbr06EQwu4iKBnmiAT6QTIGojEwHXxYtO8PKBkmOQlCi5kuVZaPKJbrbQWKzrZzbbW1UyHm3rtOQlRDWo82BShRAsVRKpsPuXRy0Fvnr93l/oVd10A4OLGeThy54n/hTnw4cEKMRn41Uf0TLpbNCwW8LBllArXyqWSlW+nbuX6XSy8MddR6LUI+9YxBW15Q6LU+v09tomTsNknFdm5l/twVCCF83t+6t2LFTCmSQxB6LeKqLNsZF9mll9+f+E5rWtweRSfeqMcZlGHpjxfWZp+7gs1KPcoSDSY5nV9dvOnA7mwYOzEFikHgFklcEXiKCMOwnblcduneZX7gr757Qa3XmQFogJhvrbfnY2//T8TCqQlkvmWrAAAAAElFTkSuQmCC",q=async i=>await D.post("https://dev.ps.familyeducation.org.cn/v1/user/auth/phone",i),Q=async i=>await D.post("https://dev.ps.familyeducation.org.cn/v1/user/auth/send",i),Y=async i=>await D.post("https://dev.ps.familyeducation.org.cn/v1/school/admin/my_list",i),c=S(60),I=S(!1),Z=async i=>{await Q({phone:i})},ee=async i=>{await Z(i),I.value=!0;const a=setInterval(()=>{c.value--,c.value<=0&&(I.value=!1,c.value=0,clearTimeout(a))},1e3)};const oe={class:"container-wrap flex"},ne={class:"logo_section"},se=["src"],ie={class:"school-name"},re={class:"logo_name_wrap"},te=o("h1",{class:"title-char"},"Hi\uFF0C\u4F60\u597D\uFF01",-1),ae={class:"title-char"},me={class:"flex-center login-container-wrap"},le={class:"login-wrap"},_e=o("h1",null,"\u767B\u5F55\u7BA1\u7406\u4E2D\u5FC3",-1),pe={class:"flex item-wrap p"},de=o("div",{class:"icon-wrap flex-center"},[o("img",{class:"login-icon",src:J,alt:""})],-1),Ce={class:"flex item-wrap"},Pe={class:"flex el-input-wrap"},ce=o("div",{class:"icon-wrap flex-center"},[o("img",{class:"login-icon",src:$,alt:""})],-1),Se={key:0,class:"send-code grey"},Ae=X("\u767B\u5F55"),ge={__name:"loginView",setup(i){const a=b();console.log("query",a.query);const _=S({});G(async()=>{a.query.domain?await l().reqSchoolDomainGetAPI(a.query.domain):a.query.id&&await l().saveSchoolInfo(a.query.id),l().schoolDomainInfo.id?_.value=l().schoolDomainInfo:l().schoolInfo.id&&(_.value=l().schoolInfo)});const O=S({}),N=(r,e,n)=>{e===""?n(new Error("\u8BF7\u8F93\u5165\u624B\u673A\u53F7")):/^1((3[0-9])|(4[1579])|(5[0-9])|(6[6])|(7[0-9])|(8[0-9])|(9[0-9]))\d{8}$/.test(e)?n():n(new Error("\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"))},f=(r,e,n)=>{e===""?n(new Error("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801")):n()},s=u({codeRef:"",phoneRef:""}),A=j();k(()=>{A.loginInfo.phone&&(s.phoneRef=A.loginInfo.phone)});const W=u({phoneRef:[{validator:N,trigger:"blur"}],codeRef:[{validator:f,trigger:"blur"}]}),T=r=>{!r||r.validate(e=>{if(e)console.log("submit!",s),L();else return console.log("error submit!"),!1})},L=async()=>{const r={phone:s.phoneRef,code:s.codeRef},e=await q(r);A.getLoginInfo(e.token,e.uid,s.phoneRef),await w()},U=H(),w=async()=>{const e=await Y({});!e||e.length<1?K.error("\u65E0\u6743\u9650"):(h(e),U.push({path:"/platformSelection"}))},h=r=>{const e=z(),n=l();n.saveSchoolInfoList();const m=r[0].school_id;console.log("debug :>> ",m),n.saveSchoolInfo(m),e.saveSchoolUserInfo()};return(r,e)=>{const n=C("el-input"),m=C("el-form-item"),y=C("el-checkbox"),x=C("el-button"),V=C("el-form");return g(),E("div",{class:"root",style:B(`background-image: url(${_.value.bg_img||P(M)("login_bg.png")})`)},[o("div",oe,[o("div",ne,[o("img",{class:"logo-img",src:_.value.icon||P(M)("school_logo.png"),alt:""},null,8,se),o("span",ie,R(_.value.name||"\u798F\u5EFA\u5F00\u653E\u5927\u5B66"),1)]),o("div",re,[te,o("h1",ae," \u6B22\u8FCE\u6765\u5230"+R(_.value.name||"\u798F\u5EFA\u5F00\u653E\u5927\u5B66"),1)]),o("div",me,[o("div",le,[_e,t(V,{ref_key:"ruleFormRef",ref:O,model:s,"status-icon":"",rules:W,"label-width":"120px",class:"demo-ruleForm","label-position":"top",style:{width:"314px"}},{default:p(()=>[t(m,{"label-width":0,prop:"phoneRef",style:{width:"314px"}},{default:p(()=>[o("div",pe,[de,t(n,{modelValue:s.phoneRef,"onUpdate:modelValue":e[0]||(e[0]=d=>s.phoneRef=d),type:"text",maxlength:11,resize:"none",clearable:"",autocomplete:"off",class:"el-input"},null,8,["modelValue"])])]),_:1}),t(m,{"label-width":0,prop:"codeRef",style:{width:"314px"}},{default:p(()=>[o("div",Ce,[o("div",Pe,[ce,t(n,{resize:"none",class:"el-input code",maxlength:"6",modelValue:s.codeRef,"onUpdate:modelValue":e[1]||(e[1]=d=>s.codeRef=d),type:"codeRefword"},null,8,["modelValue"])]),P(I)?(g(),E("div",Se," \u5DF2\u53D1\u9001("+R(P(c))+"s) ",1)):(g(),E("div",{key:1,class:"send-code",onClick:e[2]||(e[2]=d=>P(ee)(s.phoneRef))}," \u83B7\u53D6\u9A8C\u8BC1\u7801 "))])]),_:1}),t(m,null,{default:p(()=>[t(y,{label:"\u8BB0\u4F4F\u8D26\u53F7",name:"type"})]),_:1}),t(m,null,{default:p(()=>[t(x,{class:"login-btn",type:"primary",onClick:e[3]||(e[3]=d=>T(O.value))},{default:p(()=>[Ae]),_:1}),F(' <el-button @click="resetForm(ruleFormRef)">\u83B7\u53D6\u9A8C\u8BC1\u7801</el-button> ')]),_:1})]),_:1},8,["model","rules"])])])]),F(' <img src="/public/images/login_bg.png" class="bg-container" /> ')],4)}}},ue=v(ge,[["__file","E:/work/parents_school_institution_pc/src/views/login/loginView.vue"]]);export{ue as default};