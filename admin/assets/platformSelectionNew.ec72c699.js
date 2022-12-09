import{d as k,u as w,b as i,k as E,m as C,_ as D,r as p,o as g,c as v,h as s,a as c,t as S,w as F,i as I,F as N,f as B,j as b,C as U,D as V,n as L,x,y as j}from"./index.48027c1d.js";import{g as H}from"./ak.02252990.js";import{u as P}from"./user.acb68261.js";import{u as h}from"./school.a3d2d3a4.js";import{B as q}from"./study.55f8e5fa.js";import{u as R}from"./useBasisStoreLogic.026ed764.js";import{u as $}from"./family.55d772fa.js";import{u as z}from"./study.4f7fc4f5.js";const G=k({name:"CustomNavHeader",setup(){const e=w(),n=h(),r=P(),l=i(),u=i(),d=i(""),t=i(""),a=i(""),f=()=>{console.log("login() :>> ",C()),C().getLoginInfo("",-1,""),e.push({path:"/login"})};return E(()=>{l.value=n.getSchoolInfo,u.value=r.getSchoolUserInfo,l.value.icon&&(d.value=l.value.icon),l.value.name&&(t.value=l.value.name),u.value.wx_img&&(a.value=u.value.wx_img)}),{projectImgRef:d,projectNameRef:t,userAvatarRef:a,schoolUserInfoRef:u,exitSystem:f}}});const T={class:"custom-nav-header-container flex"},J={class:"project-info-box flex-start"},K={class:"project-title-style"},M={class:"user-info-box flex-start"},O={class:"user-info-style flex-start"},Q={class:"user-name-style"},W=I("[\u9000\u51FA]");function X(e,n,r,l,u,d){const t=p("el-avatar"),a=p("el-button");return g(),v("div",T,[s("div",J,[c(t,{size:28,src:e.projectImgRef},null,8,["src"]),s("p",K,S(e.projectNameRef),1)]),s("div",M,[s("div",O,[c(t,{size:32,src:e.userAvatarRef},null,8,["src"]),s("p",Q,S(e.schoolUserInfoRef.username),1)]),c(a,{class:"exit-btn-style",type:"primary",link:"",onClick:e.exitSystem},{default:F(()=>[W]),_:1},8,["onClick"])])])}const Y=D(G,[["render",X],["__scopeId","data-v-a8241d16"],["__file","E:/work/parents_school_institution_pc/src/components/CustomNavHeader/CustomNavHeader.vue"]]);function Z(){h().getSchoolGradeList(),h().getSchoolClassList(),$().reqFamilyRoleListApi(),$().reqFamilyTypeListApi(),z().tagInfoListAPI()}const ee=k({name:"platformSelection",components:{CustomNavHeader:Y},setup(){R().saveSchoolInfoList(),R().saveSchoolUserInfo,Z();const e=w(),n=i([{id:3,name:"\u6570\u636E\u4E2D\u5FC3",imgURL:"datacenter_bg.png"},{id:1,name:"\u7BA1\u7406\u540E\u53F0",imgURL:"management_background.png"},{id:2,name:"\u6570\u636E\u5927\u5C4F",imgURL:"big_data_screen.png"}]),r=i(-1),l=m=>{r.value=m,u(r.value)},u=async m=>{const o=C().loginInfo,_=h().getSchoolInfo,A=await f(_.id);switch(m){case 1:e.push("/workbenchView");break;case 2:if(A===null){console.log("\u6CA1\u6709\u5927\u5C4F\u6743\u9650 :>> "),d.value=!0;return}window.location.href=`http://school.familyeducation.org.cn/screen/?uid=${o.uid}&token=${o.token}&school_id=${_.id}&hostname=${encodeURI(_.name)}`;break;case 3:e.push("/datacenter");break}},d=i(!1),t=i(!1),a=()=>{t.value=!0},f=async m=>{const _=await q({school_id:m});return console.log("\u6821\u9A8C\u662F\u5426\u62E5\u6709\u5927\u5C4F\u7AEF\u6743\u9650_res :>> ",_),_};return{listDataRef:n,getImageUrl:H,activeRef:r,changeActive:l,tipsVisibleRef:d,dialogVisibleRef:t,onContactCustomerService:a}}}),se="/admin/icons/files_icon.png";const y=e=>(x("data-v-13c452fa"),e=e(),j(),e),oe={class:"platform-selection-container"},te=y(()=>s("p",{class:"title-style"},"\u9009\u62E9\u767B\u5F55\u754C\u9762",-1)),ae={class:"ul-style flex"},ne=["onClick"],le={class:"platform-name-style"},ce=y(()=>s("img",{class:"file-icon",src:se,alt:""},null,-1)),ie={class:"tips-box flex align-center"},ue={class:"flex-start"},re=y(()=>s("p",{class:"tips-content-style"},"\u8FD8\u672A\u8D2D\u4E70\u6B64\u9879\u529F\u80FD\uFF0C",-1)),de=I("\u8054\u7CFB\u5BA2\u670D\u8D2D\u4E70"),me=y(()=>s("div",{class:"contact-customer-service-dialog-content-style"},[s("p",{class:"contact-customer-service-dialog-title-style"}," \u8FD8\u672A\u8D2D\u4E70\u6B64\u9879\u529F\u80FD "),s("p",{class:"contact-customer-service-dialog-describe-style"}," \u5FAE\u4FE1\u626B\u7801\u8054\u7CFB\u8D2D\u4E70 "),s("div",{class:"qrcode-box"})],-1));function _e(e,n,r,l,u,d){const t=p("CustomNavHeader"),a=p("el-image"),f=p("el-button"),m=p("el-dialog");return g(),v("div",oe,[s("header",null,[c(t)]),s("article",null,[te,s("ul",ae,[(g(!0),v(N,null,B(e.listDataRef,o=>(g(),v("li",{key:o.id,class:L(["li-style",{"active-style":e.activeRef===o.id}]),onClick:_=>e.changeActive(o.id)},[c(a,{class:"platform-icon-style",src:e.getImageUrl(o.imgURL),fit:"fill"},null,8,["src"]),s("div",le,[ce,I(" "+S(o.name),1)])],10,ne))),128))])]),b(" \u63D0\u793A\u6846 "),U(s("div",ie,[s("div",ue,[c(a,{class:"tips-icon-style",src:e.getImageUrl("close_orange_round.png")},null,8,["src"]),re,c(f,{type:"primary",link:"",onClick:e.onContactCustomerService},{default:F(()=>[de]),_:1},8,["onClick"])]),c(a,{class:"tips-close-icon-style",src:e.getImageUrl("close_orange.png"),onClick:n[0]||(n[0]=o=>e.tipsVisibleRef=!1)},null,8,["src"])],512),[[V,e.tipsVisibleRef]]),b(" \u8054\u7CFB\u5BA2\u670D\u5F39\u51FA\u6846 "),c(m,{class:"contact-customer-service-dialog-style",modelValue:e.dialogVisibleRef,"onUpdate:modelValue":n[1]||(n[1]=o=>e.dialogVisibleRef=o),title:"",width:"30%",draggable:""},{default:F(()=>[me]),_:1},8,["modelValue"])])}const Fe=D(ee,[["render",_e],["__scopeId","data-v-13c452fa"],["__file","E:/work/parents_school_institution_pc/src/views/platformSelection/platformSelectionNew.vue"]]);export{Fe as default};