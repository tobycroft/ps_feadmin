import{d as w,u as M,r as m,a as I,_ as $,b as d,o as a,c as i,e as _,w as p,F as g,f as b,g as s,n as C,t as y,h as x,i as k,j as R,k as L,R as j,l as V,m as S}from"./index.69819ba0.js";import{u as N}from"./user.56c9ab74.js";import{u as A}from"./school.46a88440.js";const B=w({name:"CustomMenu",setup(){const n=M(),f=(e,u)=>{console.log(e,u)},h=(e,u)=>{console.log(e,u)},o=m(I[0].children),l=m();return{handleOpen:f,handleClose:h,menuListRef:o,activeMenuItem:l,handleMenuTitle:e=>e&&e.meta&&e.meta.title?e.meta.title:"\u672A\u547D\u540D",onSubMenuClick:e=>{console.log("routerPath :>> ",e),l.value=e,n.replace(e)}}}});const O={class:"el-menu-contrainer"},T={key:0},U={key:1};function z(n,f,h,o,l,v){const c=d("el-menu-item"),e=d("el-sub-menu"),u=d("el-menu");return a(),i("div",O,[_(u,{"default-active":"2",class:"el-menu-vertical-demo","background-color":"#2A3764","text-color":"#949ab1","active-text-color":"#fff",onOpen:n.handleOpen,onClose:n.handleClose},{default:p(()=>[(a(!0),i(g,null,b(n.menuListRef,t=>(a(),i("div",{key:t.path},[t.children?(a(),i("div",T,[_(e,{index:t.path},{title:p(()=>[s("i",{class:C(["iconfont",t.meta.icon])},null,2),s("span",null,y(n.handleMenuTitle(t)),1)]),default:p(()=>[(a(!0),i(g,null,b(t.children,r=>(a(),i(g,{key:r.path},[r.meta.hiden?R("",!0):(a(),x(c,{key:0,class:C(["menu-item-style",{"active-bg-style":n.activeMenuItem===r.path}]),index:r.path,onClick:P=>n.onSubMenuClick(r.path)},{default:p(()=>[k(y(r.meta.title),1)]),_:2},1032,["class","index","onClick"]))],64))),128))]),_:2},1032,["index"])])):(a(),i("div",U,[t.meta.hiden?R("",!0):(a(),x(c,{key:0,class:C(["menu-parent-item-style",{"active-bg-style":n.activeMenuItem===t.path}]),index:t.path,onClick:r=>n.onSubMenuClick(t.path)},{default:p(()=>[s("i",{class:C(["iconfont",t.meta.icon])},null,2),k(" "+y(t.meta.title),1)]),_:2},1032,["class","index","onClick"]))]))]))),128))]),_:1},8,["onOpen","onClose"])])}const D=$(B,[["render",z],["__scopeId","data-v-db40b09a"]]),F={name:"CustomLayout",components:{CustomMenu:D},setup(){const n=M(),f=A(),h=N(),o=m(),l=m(),v=m(""),c=m(""),e=m(""),u=()=>{console.log("login() :>> ",S()),S().getLoginInfo("",-1,""),n.push({path:"/login"})};return L(()=>{o.value=f.getSchoolInfo,l.value=h.getSchoolUserInfo,o.value.icon&&(v.value=o.value.icon),o.value.name&&(c.value=o.value.name),l.value.wx_img&&(e.value=l.value.wx_img)}),{RouterLink:j,RouterView:V,projectImgRef:v,projectNameRef:c,userAvatarRef:e,schoolUserInfoRef:l,exitSystem:u}}};const E={class:"custom-layout-container"},q={class:"flex"},G={class:"project-info-box flex-start"},H={class:"project-title-style"},J={class:"user-info-box flex-start"},K={class:"user-info-style flex-start"},Q={class:"user-name-style"},W=k("[\u9000\u51FA]"),X={class:"flex-start align-start"},Y={class:"router-view-box"};function Z(n,f,h,o,l,v){const c=d("el-avatar"),e=d("el-button"),u=d("CustomMenu"),t=d("RouterView"),r=d("el-scrollbar");return a(),i("div",E,[s("header",q,[s("div",G,[_(c,{size:28,src:o.projectImgRef},null,8,["src"]),s("p",H,y(o.projectNameRef),1)]),s("div",J,[s("div",K,[_(c,{size:32,src:o.userAvatarRef},null,8,["src"]),s("p",Q,y(o.schoolUserInfoRef.username),1)]),_(e,{class:"exit-btn-style",type:"primary",link:"",onClick:o.exitSystem},{default:p(()=>[W]),_:1},8,["onClick"])])]),s("main",X,[_(u),s("div",Y,[_(r,{class:"el-scroll-bar-style"},{default:p(()=>[_(t)]),_:1})])])])}const ne=$(F,[["render",Z],["__scopeId","data-v-b159e5d1"]]);export{ne as default};
