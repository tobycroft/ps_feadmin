import{e as H,f as M}from"./fsa.470f503a.js";import{h as T}from"./moment.9709ab41.js";import{_ as B}from"./nodata_status.b4bc20a4.js";import{_ as N,o as c,c as i,x as Y,y as q,h as a,b as f,v as A,r as D,F as R,f as L,a as p,t as s,g as S,j as r,H as E,w as b,i as $}from"./index.6e6137fc.js";import{u as w}from"./fsa.6eca3c95.js";import"./request.2292ecd4.js";const V={},C=o=>(Y("data-v-ea2ba5b8"),o=o(),q(),o),z={class:"nodata-status-container"},P=C(()=>a("img",{class:"nodata-img",src:B,alt:""},null,-1)),G=C(()=>a("span",{class:"nodata-char"},"\u6682\u65E0\u6570\u636E\u5185\u5BB9",-1)),j=[P,G];function J(o,t){return c(),i("div",z,j)}const K=N(V,[["render",J],["__scopeId","data-v-ea2ba5b8"]]);const O=o=>(Y("data-v-baf534a1"),o=o(),q(),o),Q={class:"evaluation-box"},U=O(()=>a("div",{class:"eva-tit-char"},"\u542C\u4F17\u8BC4\u4EF7",-1)),W={class:"right-wrap"},X={class:"name-sec flex"},Z={class:"name-char"},aa={class:"date-char"},ta={class:"content-char"},sa={class:"flex-start",style:{margin:"24px 0 0 0"}},ea={class:"flex"},oa={class:"record-char"},ca={__name:"AudienceEvaluation",props:{lid:{type:Number,default:0}},setup(o){const t=o,m=f(0),u=f(1),x=l=>{u.value=l},h=f([]),I=async l=>{const g={lid:l,limit:10,page:u.value},v=await H(g);m.value=v.total,h.value=v.data};A(()=>{I(t.lid)});const k=l=>T(l).utc().format("YYYY-MM-DD HH:mm:ss");return(l,g)=>{const v=D("el-avatar"),e=D("el-pagination");return c(),i("div",null,[a("div",Q,[U,(c(!0),i(R,null,L(h.value,n=>(c(),i("div",{class:"eva-content-wrap",key:n.id},[p(v,{size:32,src:n.user_info?n.user_info.wx_img:"/icons/avatar_icon.png"},null,8,["src"]),a("div",W,[a("div",X,[a("div",Z,s(n.user_info&&n.user_info.wx_name?n.user_info.wx_name:"\u533F\u540D"),1),a("span",aa,s(k(n.date)),1)]),a("p",ta,s(n.content),1)])]))),128)),!h.value||!h.value.length?(c(),S(K,{key:0})):r("",!0)]),a("div",sa,[a("div",ea,[a("span",oa,"\u5171"+s(m.value)+"\u6761\u8BB0\u5F55",1),p(e,{background:"","page-size":10,"pager-count":5,layout:"prev, pager, next",total:m.value,onCurrentChange:x},null,8,["total"])])])])}}},na=N(ca,[["__scopeId","data-v-baf534a1"]]);const _=o=>(Y("data-v-04d1468a"),o=o(),q(),o),ia={class:"activity-detail-container"},_a={key:0,class:"avatar-sec"},la={class:"name-char"},ra={class:"ac-box"},da={class:"ac-box-row"},ua={class:"ac-box-item"},ha=_(()=>a("span",{class:"ac-char"},"\u6D3B\u52A8\u6807\u7B7E\uFF1A",-1)),va={class:"ac-box-item"},pa=_(()=>a("span",{class:"ac-char"},"\u4E3E\u529E\u5355\u4F4D\uFF1A",-1)),ma={class:"ac-char-c"},fa={class:"ac-box-item"},xa=_(()=>a("span",{class:"ac-char"},"\u6D3B\u52A8\u65F6\u95F4\uFF1A",-1)),ga={class:"ac-char-c"},ya={class:"ac-box-item"},ba=_(()=>a("span",{class:"ac-char"},"\u6D3B\u52A8\u65F6\u957F\uFF1A",-1)),$a={class:"ac-char-c"},wa={class:"ac-box-row"},Da={class:"ac-box-item"},Ia=_(()=>a("span",{class:"ac-char"},"\u6D3B\u52A8\u5730\u70B9\uFF1A",-1)),ka={class:"ac-char-c"},Fa={class:"ac-box-item"},Ra=_(()=>a("span",{class:"ac-char"},"\u6D3B\u52A8\u7C7B\u578B\uFF1A",-1)),La={class:"ac-char-c"},Sa={class:"ac-box-item"},Na=_(()=>a("span",{class:"ac-char"},"\u5F62\u5F0F\u6807\u7B7E\uFF1A",-1)),Ya={key:0},qa={class:"ac-box-item"},Ta=_(()=>a("span",{class:"ac-char"},"\u5BF9\u8C61\u6807\u7B7E\uFF1A",-1)),Aa={key:0},Ca={class:"ac-box-row"},Ha={class:"ac-box-item"},Ma=_(()=>a("span",{class:"ac-char"},"\u4E0A\u62A5\u5355\u4F4D\uFF1A",-1)),Ba={class:"ac-box-item"},Ea=_(()=>a("span",{class:"ac-char"},"\u53C2\u4E0E\u4EBA\u6570\uFF1A",-1)),Va={class:"ac-char-c"},za=_(()=>a("div",{class:"ac-box-item"},null,-1)),Pa=_(()=>a("div",{class:"ac-box-item"},null,-1)),Ga={__name:"activityDataDetail",setup(o){const t=f({}),m=async e=>{const F=await M({id:e});t.value=F,console.log(t.value)},u=E(),x=f(0);A(()=>{u.query.id&&(x.value=Number(u.query.id),m(u.query.id))});const h=e=>T(e).utc().format("YYYY\u5E74MM\u6708DD\u65E5 HH:mm"),I=(e=0)=>(e/3600).toFixed(1),k=e=>w().tagRoleList[e],l=e=>w().tagFormList[e],g=e=>w().tagIndexList[e],v=e=>w().tagDataunitList[e];return(e,n)=>{const F=D("el-avatar"),y=D("el-tag");return c(),i("div",ia,[a("h3",null,"\u300A"+s(t.value.title)+"\u300B",1),t.value.instructor_info?(c(),i("div",_a,[p(F,{fit:"cover",src:t.value.instructor_info.img,size:26},null,8,["src"]),a("span",la,s(t.value.instructor_info.name),1)])):r("",!0),a("div",ra,[a("div",da,[a("div",ua,[ha,(c(!0),i(R,null,L(t.value.tag_ids,d=>(c(),i("div",{key:d},[d?(c(),S(y,{key:0},{default:b(()=>[$(s(g(d)),1)]),_:2},1024)):r("",!0)]))),128))]),a("div",va,[pa,a("span",ma,s(t.value.host_info?t.value.host_info.name:""),1)]),a("div",fa,[xa,a("span",ga,s(h(t.value.start_date)),1)]),a("div",ya,[ba,a("span",$a,s(I(t.value.duration))+"\u5C0F\u65F6",1)])]),a("div",wa,[a("div",Da,[Ia,a("span",ka,s(t.value.province||"")+s(t.value.city||"")+s(t.value.district||""),1)]),a("div",Fa,[Ra,a("span",La,s(t.value.type),1)]),a("div",Sa,[Na,t.value.tfid?(c(),i("div",Ya,[p(y,null,{default:b(()=>[$(s(l(t.value.tfid)),1)]),_:1})])):r("",!0)]),a("div",qa,[Ta,t.value.trid?(c(),i("div",Aa,[p(y,null,{default:b(()=>[$(s(k(t.value.trid)),1)]),_:1})])):r("",!0)])]),a("div",Ca,[a("div",Ha,[Ma,(c(!0),i(R,null,L(t.value.tag_dataunit_ids,d=>(c(),i("div",{key:d},[d?(c(),S(y,{key:0},{default:b(()=>[$(s(v(d)),1)]),_:2},1024)):r("",!0)]))),128))]),a("div",Ba,[Ea,a("span",Va,s(t.value.visitor),1)]),za,Pa])]),r("",!0),r("",!0),p(na,{lid:x.value},null,8,["lid"])])}}},Wa=N(Ga,[["__scopeId","data-v-04d1468a"]]);export{Wa as default};
