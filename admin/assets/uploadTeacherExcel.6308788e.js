import{_ as h,r as s,o as m,g as x,w as a,a as t,B as f,X as v,E as S,x as g,y as E,h as o,i as I}from"./index.6e6137fc.js";import{i as T}from"./teacher.fb5c9d17.js";import{u as y}from"./school.7f934179.js";import"./request.2292ecd4.js";const d=c=>(g("data-v-5841d06d"),c=c(),E(),c),w=d(()=>o("div",{class:"card-header"},[o("span",{class:"head-title"},"\u5BFC\u5165\u6570\u636E")],-1)),B=d(()=>o("div",{class:"el-upload__text"},[I("\u62D6\u62FD\u6587\u4EF6\u6216"),o("em",null,"\u70B9\u51FB\u6B64\u5904\u4E0A\u4F20")],-1)),N=d(()=>o("div",{class:"el-upload__tip"},"\u8BF7\u4E0A\u4F20Excel\u6587\u4EF6",-1)),U={__name:"uploadTeacherExcel",setup(c){const _="https://upload.tuuz.cc:444/v1/excel/index/index?token=ps",p=e=>{console.log(e),e.code&&e.code!=0?S.error(e.data):n(e)},n=async e=>{const l={school_id:y().schoolInfo.id,data:JSON.stringify(e)};await T(l)};return(e,l)=>{const r=s("el-icon"),i=s("el-upload"),u=s("el-card");return m(),x(u,{class:"box-card"},{header:a(()=>[w]),default:a(()=>[t(i,{class:"upload-demo",drag:"",action:_,multiple:"","on-success":p},{tip:a(()=>[N]),default:a(()=>[t(r,{class:"el-icon--upload"},{default:a(()=>[t(f(v))]),_:1}),B]),_:1})]),_:1})}}},b=h(U,[["__scopeId","data-v-5841d06d"]]);export{b as default};
