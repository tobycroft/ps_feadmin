import{u as n}from"./school.a228afe4.js";import{h as a}from"./moment.9709ab41.js";const m=r=>{const i=n().gradeList,e=new Date().getFullYear();let o=2020;a().isBefore(a(`${e}-09-01`))?o=e-Number(r):o=e-Number(r)+1;let t={};for(const s of i)s.id===o&&(t=s);return t};export{m as h};
