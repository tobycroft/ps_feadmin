import{p as _}from"./index.4f62021f.js";import{r as s}from"./request.b885c166.js";const p=async e=>await s.post("https://api.ps.familyeducation.org.cn/v1/user/info/my",e),c=_("user",{state:()=>({schoolUserInfo:{}}),getters:{getSchoolUserInfo:e=>e.schoolUserInfo},actions:{async saveSchoolUserInfo(){const n=await p({});this.schoolUserInfo=n}},persist:!0});export{c as u};
