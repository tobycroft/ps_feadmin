import{p as s}from"./index.2b844b74.js";import{r as _}from"./school.dd3ed787.js";const a=async e=>await _.post("https://api.ps.familyeducation.org.cn/v1/user/info/my",e),p=s("user",{state:()=>({schoolUserInfo:{}}),getters:{getSchoolUserInfo:e=>e.schoolUserInfo},actions:{async saveSchoolUserInfo(){const n=await a({});this.schoolUserInfo=n}},persist:!0});export{p as u};