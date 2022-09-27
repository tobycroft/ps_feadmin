import{g as w}from"./ak.43427c0e.js";import{u as E}from"./user.254c2896.js";import{u as h}from"./school.c32b8c5a.js";import{d as R,u as $,r as i,k as U,m as y,_ as k,b as f,o as g,c as v,g as s,e as c,t as S,w as C,i as D,F as B,f as L,C as V,D as N,n as x,x as j,y as H}from"./index.22fc0091.js";import{m as P}from"./study.69146a4e.js";import{u as I}from"./useBasisStoreLogic.a6666664.js";import{u as F}from"./family.24a699ad.js";import{u as q}from"./study.fc9bcf5d.js";import"./moment.9709ab41.js";import"./tag.089f60e1.js";const z=R({name:"CustomNavHeader",setup(){const e=$(),n=h(),u=E(),l=i(),r=i(),d=i(""),t=i(""),a=i(""),_=()=>{console.log("login() :>> ",y()),y().getLoginInfo("",-1,""),e.push({path:"/login"})};return U(()=>{l.value=n.getSchoolInfo,r.value=u.getSchoolUserInfo,l.value.icon&&(d.value=l.value.icon),l.value.name&&(t.value=l.value.name),r.value.wx_img&&(a.value=r.value.wx_img)}),{projectImgRef:d,projectNameRef:t,userAvatarRef:a,schoolUserInfoRef:r,exitSystem:_}}});const G={class:"custom-nav-header-container flex"},T={class:"project-info-box flex-start"},J={class:"project-title-style"},K={class:"user-info-box flex-start"},M={class:"user-info-style flex-start"},O={class:"user-name-style"},Q=D("[\u9000\u51FA]");function W(e,n,u,l,r,d){const t=f("el-avatar"),a=f("el-button");return g(),v("div",G,[s("div",T,[c(t,{size:28,src:e.projectImgRef},null,8,["src"]),s("p",J,S(e.projectNameRef),1)]),s("div",K,[s("div",M,[c(t,{size:32,src:e.userAvatarRef},null,8,["src"]),s("p",O,S(e.schoolUserInfoRef.username),1)]),c(a,{class:"exit-btn-style",type:"primary",link:"",onClick:e.exitSystem},{default:C(()=>[Q]),_:1},8,["onClick"])])])}const X=k(z,[["render",W],["__scopeId","data-v-cc76147f"]]);function Y(){h().getSchoolGradeList(),h().getSchoolClassList(),F().reqFamilyRoleListApi(),F().reqFamilyTypeListApi(),q().tagInfoListAPI()}const Z=R({name:"platformSelection",components:{CustomNavHeader:X},setup(){I().saveSchoolInfoList(),I().saveSchoolUserInfo,Y();const e=$(),n=i([{id:1,name:"\u7BA1\u7406\u540E\u53F0",imgURL:"management_background.png"},{id:2,name:"\u6570\u636E\u5927\u5C4F",imgURL:"management_background.png"}]),u=i(-1),l=m=>{u.value=m,r(u.value)},r=async m=>{const o=y().loginInfo,p=h().getSchoolInfo,A=await _(p.id);switch(m){case 1:e.push("/");break;case 2:if(A===null){console.log("\u6CA1\u6709\u5927\u5C4F\u6743\u9650 :>> "),d.value=!0;return}window.location.href=`http://school.familyeducation.org.cn/screen/?uid=${o.uid}&token=${o.token}&school_id=${p.id}`;break}},d=i(!1),t=i(!1),a=()=>{t.value=!0},_=async m=>{const p=await P({school_id:m});return console.log("\u6821\u9A8C\u662F\u5426\u62E5\u6709\u5927\u5C4F\u7AEF\u6743\u9650_res :>> ",p),p};return{listDataRef:n,getImageUrl:w,activeRef:u,changeActive:l,tipsVisibleRef:d,dialogVisibleRef:t,onContactCustomerService:a}}});const b=e=>(j("data-v-b5aee1b7"),e=e(),H(),e),ee={class:"platform-selection-container"},se=b(()=>s("p",{class:"title-style"},"\u9009\u62E9\u767B\u5F55\u754C\u9762",-1)),oe={class:"ul-style flex"},te=["onClick"],ae={class:"platform-name-style"},ne={class:"tips-box flex align-center"},le={class:"flex-start"},ce=b(()=>s("p",{class:"tips-content-style"},"\u8FD8\u672A\u8D2D\u4E70\u6B64\u9879\u529F\u80FD\uFF0C",-1)),ie=D("\u8054\u7CFB\u5BA2\u670D\u8D2D\u4E70"),re=b(()=>s("div",{class:"contact-customer-service-dialog-content-style"},[s("p",{class:"contact-customer-service-dialog-title-style"}," \u8FD8\u672A\u8D2D\u4E70\u6B64\u9879\u529F\u80FD "),s("p",{class:"contact-customer-service-dialog-describe-style"}," \u5FAE\u4FE1\u626B\u7801\u8054\u7CFB\u8D2D\u4E70 "),s("div",{class:"qrcode-box"})],-1));function ue(e,n,u,l,r,d){const t=f("CustomNavHeader"),a=f("el-image"),_=f("el-button"),m=f("el-dialog");return g(),v("div",ee,[s("header",null,[c(t)]),s("article",null,[se,s("ul",oe,[(g(!0),v(B,null,L(e.listDataRef,o=>(g(),v("li",{key:o.id,class:x(["li-style",{"active-style":e.activeRef===o.id}]),onClick:p=>e.changeActive(o.id)},[c(a,{class:"platform-icon-style",src:e.getImageUrl(o.imgURL),fit:"fill"},null,8,["src"]),s("p",ae,S(o.name),1)],10,te))),128))])]),V(s("div",ne,[s("div",le,[c(a,{class:"tips-icon-style",src:e.getImageUrl("close_orange_round.png")},null,8,["src"]),ce,c(_,{type:"primary",link:"",onClick:e.onContactCustomerService},{default:C(()=>[ie]),_:1},8,["onClick"])]),c(a,{class:"tips-close-icon-style",src:e.getImageUrl("close_orange.png"),onClick:n[0]||(n[0]=o=>e.tipsVisibleRef=!1)},null,8,["src"])],512),[[N,e.tipsVisibleRef]]),c(m,{class:"contact-customer-service-dialog-style",modelValue:e.dialogVisibleRef,"onUpdate:modelValue":n[1]||(n[1]=o=>e.dialogVisibleRef=o),title:"",width:"30%",draggable:""},{default:C(()=>[re]),_:1},8,["modelValue"])])}const Ce=k(Z,[["render",ue],["__scopeId","data-v-b5aee1b7"]]);export{Ce as default};
