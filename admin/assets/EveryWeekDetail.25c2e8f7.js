import{d as y}from"./study.4d550b8d.js";import{R as r,_ as m}from"./week_theme_tag.86f68223.js";import{h as s}from"./moment.9709ab41.js";import{_ as p,r as h,o as n,c,h as t,t as d,a as k}from"./index.9d791e62.js";const u={components:{RedTagCode:r},data(){return{weekTaskObj:{area_id:0,attach_type:"none",attach_url:"",can_push:1,change_date:"2022-07-05T09:34:44Z",common_tag:[{class:"G01Test",id:1,name:"\u5BB6\u5EAD\u5171\u5B66",study_id:1,study_type:"daily",tag_type:"common"},{class:"G01Test",id:2,name:"\u5165\u5B66\u9002\u5E94",study_id:1,study_type:"daily",tag_type:"special"},{class:"G01Test",id:3,name:"\u4E60\u60EF\u57F9\u517B",study_id:1,study_type:"daily",tag_type:"common"},{class:"G01Test",id:1,name:"\u5BB6\u5EAD\u5171\u5B66",study_id:1,study_type:"daily",tag_type:"common"},{class:"G01Test",id:2,name:"\u5165\u5B66\u9002\u5E94",study_id:1,study_type:"daily",tag_type:"special"},{class:"G01Test",id:3,name:"\u4E60\u60EF\u57F9\u517B",study_id:1,study_type:"daily",tag_type:"common"}],complete:1,content:"\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9",date:"2022-07-04T14:36:01Z",grade:"1",howto:"\u600E\u4E48\u5B9E\u73B0\u5BCC\u6587\u672C\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9",id:1,img:"\u56FE\u7247",img_intro:"\u5C0F\u6807\u56FE\u7247",is_complete:!0,notify:"\u5B9E\u8DF5\u63D0\u793A\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9",push_date:"2022-03-08T18:09:02Z",school_id:0,school_info:{area_id:1,detail:"\u5750\u843D\u4E8E",icon:"",id:1,img:"",name:"\u798F\u5DDE\u6D4B\u8BD5\u5B66\u6821",sight:255},show_date:"2022-07-04T14:36:01Z",slogan:"\u63A8\u8350\u91D1\u53E5",special_tag:[{class:"G01Test",id:1,name:"\u5BB6\u5EAD\u5171\u5B66",study_id:1,study_type:"daily",tag_type:"common"},{class:"G01Test",id:2,name:"\u5165\u5B66\u9002\u5E94",study_id:1,study_type:"daily",tag_type:"special"},{class:"G01Test",id:3,name:"\u4E60\u60EF\u57F9\u517B",study_id:1,study_type:"daily",tag_type:"common"},{class:"G01Test",id:1,name:"\u5BB6\u5EAD\u5171\u5B66",study_id:1,study_type:"daily",tag_type:"common"},{class:"G01Test",id:2,name:"\u5165\u5B66\u9002\u5E94",study_id:1,study_type:"daily",tag_type:"special"},{class:"G01Test",id:3,name:"\u4E60\u60EF\u57F9\u517B",study_id:1,study_type:"daily",tag_type:"common"}],teacher_id:0,tick_area:1e3,tick_location:"\u67D0\u5730\u70B9",tick_mode:"weekly",tick_need:1,tick_word:"\u6BCF\u5468\u53C2\u4E0E\u6253\u5361",tick_x:0,tick_y:0,title:"\u6807\u9898"},completeCount:0,study_id:0,recordList:[],student_id:33,limit:10,page:1}},props:["lookStudyId"],created(){},watch:{lookStudyId:{handler(e){console.log("study_id",e),this.reqWeekTaskGetApi(e)},immediate:!0}},methods:{async reqWeekTaskGetApi(e){const a=await y({type:"weekly",study_id:e});this.weekTaskObj=a},handleSemester(e){const i=s(e).year();return s(e).isAfter(`${i}-02-01`)&&s(e).isBefore(`${i}-09-01`)?"\u7B2C\u4E8C\u5B66\u671F":"\u7B2C\u4E00\u5B66\u671F"},handleWeek(e){const i=s(e).year();let a="";return s(e).isAfter(`${i}-07-01`)&&s(e).isBefore(`${i}-09-01`)?"\u6691\u5047":(s(e).isAfter(`${i}-02-01`)&&s(e).isBefore(`${i}-09-01`)&&(a=s.duration(s(e)-s(`${i}-02-01`)).asWeeks()),s(e).isBefore(`${i}-02-01`)&&(a=s.duration(s(e)-s(`${i-1}-09-01`)).asWeeks()),s(e).isAfter(`${i}-09-01`)&&(a=s.duration(s(e)-s(`${i}-08-29`)).asWeeks()),console.log(parseInt(a+1)),"\u7B2C"+parseInt(a+1)+"\u5468")}}},T={class:"root"},g={class:"container pad-df"},f={class:"theme-title-card"},w={class:"flex"},v={key:0,class:"theme-tag"},b=t("img",{src:m,style:{width:"14px",height:"14px"},alt:"\u56FE\u6807"},null,-1),G={class:"theme-tag-char"},j={key:1},O={class:"grade-char"},x={class:"title-theme"},W=["innerHTML"],B={class:"week-char"},L={class:"content-wrap"},A=t("div",{class:"content-title"},[t("div",{class:"block-red"}),t("span",{class:"content-title-char"},"\u5B9E\u8DF5\u65B9\u6CD5")],-1),H=["innerHTML"],M={class:"special-box"},S=t("div",{class:"special-title"},"\u7279\u522B\u63D0\u9192\uFF1A",-1),C=["innerHTML"];function I(e,i,a,E,o,_){const l=h("RedTagCode");return n(),c("div",T,[t("div",g,[t("div",f,[t("div",w,[o.weekTaskObj.common_tag[0].name?(n(),c("div",v,[b,t("span",G,d(o.weekTaskObj.common_tag[0].name),1)])):(n(),c("span",j)),t("span",O,"\u6240\u5C5E\u5E74\u7EA7\xB7"+d(o.weekTaskObj.grade?o.weekTaskObj.grade+"\u5E74\u7EA7":"\u4E0D\u9650"),1)]),t("div",x,d(o.weekTaskObj.title),1),k(l,{title:"\u5B9E\u8DF5\u8981\u70B9",list:o.weekTaskObj.special_tag},null,8,["list"]),t("div",{innerHTML:o.weekTaskObj.content},null,8,W),t("div",B,d(_.handleSemester(o.weekTaskObj.show_date))+"-"+d(_.handleWeek(o.weekTaskObj.show_date)),1)]),t("div",L,[A,t("div",{innerHTML:o.weekTaskObj.howto},null,8,H),t("div",M,[S,t("div",{innerHTML:o.weekTaskObj.notify},null,8,C)])])])])}const N=p(u,[["render",I]]);export{N as E};
