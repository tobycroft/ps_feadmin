import{d as M,u as b,r as _,a as j,_ as L,b as a,o as u,c as v,e as i,w as m,F as C,f as x,g as R,h as n,n as V,t as y,i as w,j as $,k as A,R as F,l as I,m as S}from"./index.834ba41c.js";import{u as N}from"./user.b666a840.js";import{u as g}from"./school.ddc35142.js";import{u as k}from"./family.2511d2be.js";import"./request.57c6588b.js";const T=M({name:"CustomMenu",setup(){const t=b(),d=(e,s)=>{console.log(e,s)},p=(e,s)=>{console.log(e,s)},o=_(j[0].children);return{handleOpen:d,handleClose:p,menuListRef:o,handleMenuTitle:e=>e&&e.meta&&e.meta.title?e.meta.title:"\u672A\u547D\u540D",onSubMenuClick:e=>{console.log("routerPath :>> ",e),t.replace(e)}}}});const B={class:"el-menu-contrainer"};function O(t,d,p,o,l,f){const e=a("el-menu-item"),s=a("el-sub-menu"),h=a("el-menu");return u(),v("div",B,[i(h,{"default-active":"2",class:"el-menu-vertical-demo",onOpen:t.handleOpen,onClose:t.handleClose},{default:m(()=>[(u(!0),v(C,null,x(t.menuListRef,c=>(u(),R(s,{key:c.path,index:c.path},{title:m(()=>[n("i",{class:V(["iconfont",c.meta.icon])},null,2),n("span",null,y(t.handleMenuTitle(c)),1)]),default:m(()=>[(u(!0),v(C,null,x(c.children,r=>(u(),v(C,{key:r.path},[r.meta.hiden?$("",!0):(u(),R(e,{key:0,class:"menu-item-style",index:r.path,onClick:Z=>t.onSubMenuClick(r.path)},{default:m(()=>[w(y(r.meta.title),1)]),_:2},1032,["index","onClick"]))],64))),128))]),_:2},1032,["index"]))),128))]),_:1},8,["onOpen","onClose"])])}const U=L(T,[["render",O],["__scopeId","data-v-e78326b5"]]);function z(){g().getSchoolGradeList(),g().getSchoolClassList(),k().reqFamilyRoleListApi(),k().reqFamilyTypeListApi()}const D={name:"CustomLayout",components:{CustomMenu:U},setup(){const t=b(),d=g(),p=N(),o=_(),l=_(),f=_(""),e=_(""),s=_(""),h=()=>{console.log("login() :>> ",S()),S().getLoginInfo("",-1,""),t.push({path:"/login"})};return z(),A(()=>{o.value=d.getSchoolInfo,l.value=p.getSchoolUserInfo,o.value.icon&&(f.value=o.value.icon),o.value.name&&(e.value=o.value.name),l.value.wx_img&&(s.value=l.value.wx_img)}),{RouterLink:F,RouterView:I,projectImgRef:f,projectNameRef:e,userAvatarRef:s,schoolUserInfoRef:l,exitSystem:h}}};const q={class:"custom-layout-container"},E={class:"flex"},G={class:"project-info-box flex-start"},H={class:"project-title-style"},J={class:"user-info-box flex-start"},K={class:"user-info-style flex-start"},P={class:"user-name-style"},Q=w("[\u9000\u51FA]"),W={class:"flex-start align-start"},X={class:"router-view-box"};function Y(t,d,p,o,l,f){const e=a("el-avatar"),s=a("el-button"),h=a("CustomMenu"),c=a("RouterView"),r=a("el-scrollbar");return u(),v("div",q,[n("header",E,[n("div",G,[i(e,{size:28,src:o.projectImgRef},null,8,["src"]),n("p",H,y(o.projectNameRef),1)]),n("div",J,[n("div",K,[i(e,{size:32,src:o.userAvatarRef},null,8,["src"]),n("p",P,y(o.schoolUserInfoRef.username),1)]),i(s,{class:"exit-btn-style",type:"primary",link:"",onClick:o.exitSystem},{default:m(()=>[Q]),_:1},8,["onClick"])])]),n("main",W,[i(h),n("div",X,[i(r,{class:"el-scroll-bar-style"},{default:m(()=>[i(c)]),_:1})])])])}const ae=L(D,[["render",Y],["__scopeId","data-v-5332af14"]]);export{ae as default};
