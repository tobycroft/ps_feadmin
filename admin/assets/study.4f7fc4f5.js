import{p as o}from"./index.48027c1d.js";import{r as n}from"./school.a3d2d3a4.js";const s=async e=>await n.post("https://dev.ps.familyeducation.org.cn/v1/tag/info/list",e),a=o("useStudyStore",{state:()=>({tagList:{}}),actions:{async tagInfoListAPI(){const e=await s({});this.tagList=e}},persist:!0});export{a as u};