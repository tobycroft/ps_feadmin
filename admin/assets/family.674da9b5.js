import{p as i}from"./index.dde6a0b4.js";import{r as n}from"./school.d695eb63.js";const a=async e=>await n.post("https://dev.ps.familyeducation.org.cn/v1/family/dashboard/\u5B66\u751F\u5BB6\u957F\u8001\u5E08",e),s=async e=>await n.post("https://dev.ps.familyeducation.org.cn/v1/family/role/list",e),_=async e=>await n.post("https://dev.ps.familyeducation.org.cn/v1/family/type/list",e),r=async e=>await n.post("https://dev.ps.familyeducation.org.cn/v1/family/dashboard/group_parent_year",e),m=async e=>await n.post("https://dev.ps.familyeducation.org.cn/v1/family/dashboard/group_parent_class",e),t=i("familyStore",{state:()=>({familyRoleList:{},familyTypeList:{}}),actions:{async reqFamilyRoleListApi(){const e=await s({});console.log("\u5BB6\u5EAD\u6210\u5458\u5217\u8868_res :>> ",e),this.familyRoleList=e},async reqFamilyTypeListApi(){const e=await _({});this.familyTypeList=e}},getters:{getFamilyRoleList:e=>e.familyRoleList,getFamilyTypeList:e=>e.familyTypeList},persist:!0});export{m as a,r as f,a as r,t as u};