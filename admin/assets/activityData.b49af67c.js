import{h as L}from"./moment.9709ab41.js";import{d as B}from"./fsa.92809276.js";import{u as C}from"./school.67203cdc.js";import{_ as S,b as _,v as Y,r as s,o as d,c as f,h as o,a as t,w as n,t as i,F,f as I,g as M,i as g}from"./index.44de20e8.js";import"./request.5b120ebb.js";const N={class:"table-container"},V={style:{display:"flex","align-items":"center"}},q={style:{"margin-left":"4px"}},z=g("\u67E5\u770B"),P={class:"flex-start",style:{margin:"18px 0 0 0"}},R={class:"flex"},T={class:"record-char"},A={__name:"activityData",setup(E){const h={background:"#f6f8fa",height:"60px"},p=_([]),v=l=>L(l).format("YYYY\u5E74MM\u6708DD\u65E5 HH:mm"),r=_(0),u=_(1),b=l=>{u.value=l},y=async()=>{const l={host_name:C().schoolInfo.name||"",limit:10,page:u.value},c=await B(l);c&&c.data&&(p.value=c.data,r.value=c.total)};return Y(()=>{y()}),(l,c)=>{const e=s("el-table-column"),x=s("el-avatar"),k=s("el-tag"),D=s("router-link"),w=s("el-table"),H=s("el-pagination");return d(),f("div",null,[o("div",N,[t(w,{data:p.value,style:{width:"100%"},"header-cell-style":h},{default:n(()=>[t(e,{prop:"id",label:"\u6392\u5E8F",width:"100",align:"center"}),t(e,{label:"\u8BB2\u5E08",width:"180",align:"center"},{default:n(({row:a})=>[o("div",V,[t(x,{src:a.instruction_info.img,size:26},null,8,["src"]),o("span",q,i(a.instruction_info.name),1)])]),_:1}),t(e,{prop:"title",label:"\u4E3B\u9898"}),t(e,{label:"\u4E3B\u9898\u7C7B\u578B",width:"280",align:"center"},{default:n(({row:a})=>[(d(!0),f(F,null,I(a.common_tag,m=>(d(),M(k,{style:{margin:"4px"},key:m.id},{default:n(()=>[g(i(m.name),1)]),_:2},1024))),128))]),_:1}),t(e,{prop:"host_info.name",label:"\u4E3E\u529E\u5355\u4F4D"}),t(e,{prop:"visitor",label:"\u53C2\u4E0E\u4EBA\u6570",width:"140"}),t(e,{label:"\u65F6\u95F4",width:"220",align:"center"},{default:n(({row:a})=>[o("span",null,i(v(a.start_date)),1)]),_:1}),t(e,{label:"\u64CD\u4F5C",align:"center"},{default:n(({row:a})=>[t(D,{to:`/activityDataDetail?id=${a.id}`,style:{color:"blue"}},{default:n(()=>[z]),_:2},1032,["to"])]),_:1})]),_:1},8,["data"])]),o("div",P,[o("div",R,[o("span",T,"\u5171"+i(r.value)+"\u6761\u8BB0\u5F55",1),t(H,{background:"","page-size":10,"pager-count":5,layout:"prev, pager, next",total:r.value,onCurrentChange:b},null,8,["total"])])])])}}},O=S(A,[["__scopeId","data-v-dd0aefd2"]]);export{O as default};