import{p as a}from"./index.87c97b1a.js";import{r}from"./datacenter.d7e46642.js";const i=a("teacher",{state:()=>({teacherList:{}}),getters:{getTeacherList:e=>e.teacherList},actions:{async reqDatasourceTeacherAPI(e){const t=await r({school_id:e});this.teacherList=t}},persist:!0});export{i as u};