import{p as s}from"./index.ea30bd78.js";import{r as n}from"./school.c465d557.js";const o=async e=>await n.post("https://api.ps.familyeducation.org.cn/v1/family/dashboard/\u5B66\u751F\u5BB6\u957F\u8001\u5E08",e),_=async e=>await n.post("https://api.ps.familyeducation.org.cn/v1/family/role/list",e),a=async e=>await n.post("https://api.ps.familyeducation.org.cn/v1/family/type/list",e),t=async e=>await n.post("https://api.ps.familyeducation.org.cn/v1/family/dashboard/group_parent_year",e),r=async e=>await n.post("https://api.ps.familyeducation.org.cn/v1/family/dashboard/group_parent_class",e),m=s("familyStore",{state:()=>({familyRoleList:{},familyTypeList:{}}),actions:{async reqFamilyRoleListApi(){const e=await _({});console.log("\u5BB6\u5EAD\u6210\u5458\u5217\u8868_res :>> ",e),this.familyRoleList=e},async reqFamilyTypeListApi(){const e=await a({});this.familyTypeList=e}},getters:{getFamilyRoleList:e=>e.familyRoleList,getFamilyTypeList:e=>e.familyTypeList},persist:!0});export{r as a,t as f,o as r,m as u};
