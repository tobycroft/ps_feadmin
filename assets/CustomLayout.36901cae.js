import{d as I,u as $,r as m,a as j,_ as w,b as d,o as a,c as u,e as _,w as p,F as g,f as b,g as s,n as C,t as y,h as R,i as k,j as S,k as A,R as V,l as F,m as L}from"./index.9140e85d.js";import{u as N}from"./user.650ff6fb.js";import{u as x}from"./school.d0f5c610.js";import{u as M}from"./family.924c395c.js";const T=I({name:"CustomMenu",setup(){const n=$(),f=(e,i)=>{console.log(e,i)},h=(e,i)=>{console.log(e,i)},o=m(j[0].children),l=m();return{handleOpen:f,handleClose:h,menuListRef:o,activeMenuItem:l,handleMenuTitle:e=>e&&e.meta&&e.meta.title?e.meta.title:"\u672A\u547D\u540D",onSubMenuClick:e=>{console.log("routerPath :>> ",e),l.value=e,n.replace(e)}}}});const B={class:"el-menu-contrainer"},O={key:0},U={key:1};function z(n,f,h,o,l,v){const c=d("el-menu-item"),e=d("el-sub-menu"),i=d("el-menu");return a(),u("div",B,[_(i,{"default-active":"2",class:"el-menu-vertical-demo","background-color":"#2A3764","text-color":"#949ab1","active-text-color":"#fff",onOpen:n.handleOpen,onClose:n.handleClose},{default:p(()=>[(a(!0),u(g,null,b(n.menuListRef,t=>(a(),u("div",{key:t.path},[t.children?(a(),u("div",O,[_(e,{index:t.path},{title:p(()=>[s("i",{class:C(["iconfont",t.meta.icon])},null,2),s("span",null,y(n.handleMenuTitle(t)),1)]),default:p(()=>[(a(!0),u(g,null,b(t.children,r=>(a(),u(g,{key:r.path},[r.meta.hiden?S("",!0):(a(),R(c,{key:0,class:C(["menu-item-style",{"active-bg-style":n.activeMenuItem===r.path}]),index:r.path,onClick:oe=>n.onSubMenuClick(r.path)},{default:p(()=>[k(y(r.meta.title),1)]),_:2},1032,["class","index","onClick"]))],64))),128))]),_:2},1032,["index"])])):(a(),u("div",U,[t.meta.hiden?S("",!0):(a(),R(c,{key:0,class:C(["menu-parent-item-style",{"active-bg-style":n.activeMenuItem===t.path}]),index:t.path,onClick:r=>n.onSubMenuClick(t.path)},{default:p(()=>[s("i",{class:C(["iconfont",t.meta.icon])},null,2),k(" "+y(t.meta.title),1)]),_:2},1032,["class","index","onClick"]))]))]))),128))]),_:1},8,["onOpen","onClose"])])}const D=w(T,[["render",z],["__scopeId","data-v-db40b09a"]]);function q(){x().getSchoolGradeList(),x().getSchoolClassList(),M().reqFamilyRoleListApi(),M().reqFamilyTypeListApi()}const E={name:"CustomLayout",components:{CustomMenu:D},setup(){const n=$(),f=x(),h=N(),o=m(),l=m(),v=m(""),c=m(""),e=m(""),i=()=>{console.log("login() :>> ",L()),L().getLoginInfo("",-1,""),n.push({path:"/login"})};return q(),A(()=>{o.value=f.getSchoolInfo,l.value=h.getSchoolUserInfo,o.value.icon&&(v.value=o.value.icon),o.value.name&&(c.value=o.value.name),l.value.wx_img&&(e.value=l.value.wx_img)}),{RouterLink:V,RouterView:F,projectImgRef:v,projectNameRef:c,userAvatarRef:e,schoolUserInfoRef:l,exitSystem:i}}};const G={class:"custom-layout-container"},H={class:"flex"},J={class:"project-info-box flex-start"},K={class:"project-title-style"},Q={class:"user-info-box flex-start"},W={class:"user-info-style flex-start"},X={class:"user-name-style"},Y=k("[\u9000\u51FA]"),Z={class:"flex-start align-start"},P={class:"router-view-box"};function ee(n,f,h,o,l,v){const c=d("el-avatar"),e=d("el-button"),i=d("CustomMenu"),t=d("RouterView"),r=d("el-scrollbar");return a(),u("div",G,[s("header",H,[s("div",J,[_(c,{size:28,src:o.projectImgRef},null,8,["src"]),s("p",K,y(o.projectNameRef),1)]),s("div",Q,[s("div",W,[_(c,{size:32,src:o.userAvatarRef},null,8,["src"]),s("p",X,y(o.schoolUserInfoRef.username),1)]),_(e,{class:"exit-btn-style",type:"primary",link:"",onClick:o.exitSystem},{default:p(()=>[Y]),_:1},8,["onClick"])])]),s("main",Z,[_(i),s("div",P,[_(r,{class:"el-scroll-bar-style"},{default:p(()=>[_(t)]),_:1})])])])}const le=w(E,[["render",ee],["__scopeId","data-v-6ca377f3"]]);export{le as default};
