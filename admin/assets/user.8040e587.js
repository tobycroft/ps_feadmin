import{p as n}from"./index.5c9dba08.js";import{r as s}from"./school.39248828.js";const r=async e=>await s.post("https://dev.ps.familyeducation.org.cn/v1/user/info/my",e),t=n("user",{state:()=>({schoolUserInfo:{}}),getters:{getSchoolUserInfo:e=>e.schoolUserInfo},actions:{async saveSchoolUserInfo(){const o=await r({});this.schoolUserInfo=o}},persist:!0});export{t as u};