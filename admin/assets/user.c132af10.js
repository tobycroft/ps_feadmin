import{p as i}from"./index.f54b11e4.js";import{r as s}from"./school.2999f601.js";const o=async e=>await s.post("https://api.ps.familyeducation.org.cn/v1/user/info/my",e),a=i("user",{state:()=>({schoolUserInfo:{}}),getters:{getSchoolUserInfo:e=>e.schoolUserInfo},actions:{async saveSchoolUserInfo(){const n=await o({});this.schoolUserInfo=n}},persist:!0});export{a as u};
