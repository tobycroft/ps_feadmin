import{_ as C,u as F,b as a,k as w,r as v,o as f,c as g,h as e,t as l,F as L,f as T,a as i,w as A,m as b,n as q,B as D,l as P,x as B,y as N}from"./index.9847bb85.js";import{u as U}from"./user.bbb56980.js";import{u as V}from"./school.3fc011ac.js";import{u as j}from"./teacher.9bd47725.js";import{u as c}from"./fsa.601c119f.js";import"./request.73daf80f.js";import"./datacenter.f4028822.js";import"./fsa.ee9e099e.js";const E=o=>(B("data-v-7b66bcf7"),o=o(),N(),o),z={class:"root-layout"},O={class:"header-wrap"},$={class:"header-box flex"},G={class:"school-tab"},H=["src"],J={class:"school-name"},K=["onClick"],M={class:"tab-char"},Q=E(()=>e("div",{class:"tab-block"},null,-1)),W={class:"user-logout"},X={class:"username"},Y={class:"main-content"},Z={__name:"dataCenterLayout",setup(o){const I=[{id:1,name:"\u5B66\u4E60\u62A5\u8868",router:"/studyReportForm2"},{id:2,name:"\u5B66\u5206\u8868\u5F70",router:"/creditRanking2"},{id:3,name:"\u8BFE\u7A0B\u6982\u89C8",router:"/studyOverview"},{id:4,name:"\u8BC4\u4EF7\u53CD\u9988",router:"/commentsFeedback"},{id:5,name:"\u6D3B\u52A8\u6570\u636E",router:"/activityData"},{id:6,name:"\u5BB6\u59D4\u8F6C\u53D1\u6570\u636E",router:"/forwardedData"}],u=F(),d=a(1),y=n=>{d.value=n.id,u.push({path:n.router})},S=()=>{console.log("login() :>> ",b()),b().getLoginInfo("",-1,""),u.push({path:"/login"})},_=V();j().reqDatasourceTeacherAPI(_.schoolInfo.id),c().reqFsaTagDataunitListAPI(),c().reqFsaTagFormListAPI(),c().reqFsaTagIndexListAPI(),c().reqFsaTagRoleListAPI();const x=U(),s=a(),t=a(),m=a(""),h=a(""),p=a("");return w(()=>{s.value=_.getSchoolInfo,t.value=x.getSchoolUserInfo,s.value.icon&&(m.value=s.value.icon),s.value.name&&(h.value=s.value.name),t.value.wx_img&&(p.value=t.value.wx_img)}),(n,ee)=>{const R=v("el-avatar"),k=v("el-scrollbar");return f(),g("div",z,[e("header",O,[e("div",$,[e("div",G,[e("img",{class:"logo",src:m.value,alt:""},null,8,H),e("span",J,l(h.value),1),(f(),g(L,null,T(I,r=>e("div",{class:q(["tab-item",r.id==d.value?"active":""]),onClick:ae=>y(r),key:r.id},[e("span",M,l(r.name),1),Q],10,K)),64))]),e("div",W,[i(R,{class:"user-avatar",src:p.value,alt:""},null,8,["src"]),e("span",X,l(t.value.username),1),e("span",{class:"login-out",onClick:S},"[\u9000\u51FA]")])])]),e("main",null,[i(k,{class:"el-scroll-bar-style"},{default:A(()=>[e("div",Y,[i(D(P))])]),_:1})])])}}},ue=C(Z,[["__scopeId","data-v-7b66bcf7"]]);export{ue as default};
