import{p as n}from"./index.e8a238ee.js";import{r as s}from"./request.62b1b108.js";const _=async e=>await s.post("https://api.ps.familyeducation.org.cn/v1/tag/info/list",e),p=n("useStudyStore",{state:()=>({tagList:{}}),actions:{async tagInfoListAPI(){const e=await _({});this.tagList=e}},persist:!0});export{p as u};
