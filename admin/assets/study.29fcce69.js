import{p as e}from"./index.2d37faf5.js";import{r as n}from"./request.8d473646.js";const s=async o=>await n.post("https://api.ps.familyeducation.org.cn/v1/tag/info/list",o),r=e("useStudyStore",{state:()=>({tagList:{}}),actions:{async tagInfoListAPI(){const o=await s({});this.tagList=o}},persist:!0});export{r as u};
