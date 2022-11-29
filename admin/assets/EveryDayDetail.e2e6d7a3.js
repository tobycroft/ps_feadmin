import{R as T,_ as C}from"./week_theme_tag.6725c901.js";import{_ as v,o as d,c as r,h as e,F as b,f as x,n as y,C as m,D as u,H as _,t as c,r as p,j as f,a as k,x as I,y as D}from"./index.dde6a0b4.js";import{d as M}from"./study.75355a76.js";const P="/admin/images/home_progress_mask.png",A="/admin/images/detail_progress_mask.png",S="/admin/icons/play_icon.svg",w="/admin/icons/suspend_icon.svg",E="/admin/icons/play_icon_bright.svg",q="/admin/icons/suspend_icon_bright.svg";const H={props:{theme:{type:String,default:"dark"},src:{type:String,default:"",required:!0},totalTime:{type:Number,default:0,required:!0},playTimeDefault:{type:Number,default:0}},computed:{handlePlayTime(){const t=this.secondToTime(this.playTime);return`${t.m}:${t.s}`},handleTotalTime(){const t=this.secondToTime(this.totalTime);return`${t.m}:${t.s}`},handlePercent(){return this.percentage(this.playTime,this.totalTime)}},data(){return{timer:null,statePlay:!1,playTime:0,audioContext:void 0}},mounted(){console.log("playTimeDefault :>> ",this.playTimeDefault)},methods:{secondToTime(t,a="true"){const s=parseInt(t);let h=0,i=0,o=0;return a?(h=Math.floor(s/3600)<10?"0"+Math.floor(s/3600):Math.floor(s/3600),i=Math.floor(s/60%60)<10?"0"+Math.floor(s/60%60):Math.floor(s/60%60),o=Math.floor(s%60)<10?"0"+Math.floor(s%60):Math.floor(s%60)):(h=Math.floor(s/3600),i=Math.floor(s/60%60),o=Math.floor(s%60)),{h,m:i,s:o}},percentage(t,a){return Math.round(parseInt(t)/parseInt(a)*1e4)/100},handleHoleShow(t){const a=t/4;return t===0?!1:Math.floor(a)===a},player(){console.log("\u51C6\u5907\u6267\u884C\u64AD\u653E",this.audioContext)},suspend(){console.log("\u51C6\u5907\u6267\u884C\u6682\u505C :>>"),this.audioContext&&this.audioContext.pause()},playeInteractiveAnimation(){console.log("\u89E6\u53D1\u4E86\u5F00\u59CB\u64AD\u653E\u4EA4\u4E92\u52A8\u753B :>> "),this.statePlay=!0,this.timer=setInterval(()=>{if(this.playTime===this.totalTime){this.percent=0,this.playTime=0,this.suspend();return}this.playTime+=1,this.percent+=1},1e3)},suspendInteractiveAnimation(){console.log("\u89E6\u53D1\u4E86\u6682\u505C\u64AD\u653E\u4EA4\u4E92\u52A8\u753B :>> "),this.statePlay=!1,clearInterval(this.timer)},initAudio(){this.playTime=this.playTimeDefault,this.audioContext=new AudioContext,this.audioContext.src=this.src,this.audioContext.autoplay=!1,this.audioContext.startTime=this.playTime,this.audioContext.onPlay(()=>{console.log("\u76D1\u542C\u5230\u97F3\u9891\u64AD\u653E\u4E8B\u4EF6 :>> "),this.playeInteractiveAnimation()}),this.audioContext.onError(t=>{console.log("\u76D1\u542C\u97F3\u9891\u64AD\u653E\u5F02\u5E38 :>> ",t)}),this.audioContext.onPause(()=>{console.log("\u76D1\u542C\u5230\u6682\u505C\u4E8B\u4EF6 :>> ",this.playTime),this.$emit("pause",this.playTime),this.suspendInteractiveAnimation()}),this.audioContext.onEnded(()=>{console.log("\u76D1\u542C\u5230\u64AD\u653E\u5B8C\u6BD5\u4E8B\u4EF6 :>> "),this.percent=0,this.playTime=0,this.suspendInteractiveAnimation(),this.$emit("ended")}),this.audioContext.onError(t=>{console.log(t.errMsg),console.log(t.errCode)})}}},V={class:"audio-container"},G={class:"task-article flex"},N={class:"process-box"},F=["percent"],L={class:"mask-box-style"},R={key:0,class:"audio-progress-mask-style",src:P},B={key:1,class:"audio-progress-mask-style",src:A},O={class:"mask-list custom-flex-start"},j={class:"audio-btn-box"};function z(t,a,s,h,i,o){return d(),r("div",V,[e("div",G,[e("div",N,[e("progress",{percent:o.handlePercent,"stroke-width":"48",activeColor:"#DA4036",backgroundColor:"#CCCCCC"},null,8,F),e("div",L,[s.theme==="dark"?(d(),r("img",R)):(d(),r("img",B)),e("div",O,[(d(),r(b,null,x(20,(l,n)=>e("div",{key:n,class:y(["mask-item",{"min-hole-dark":s.theme==="dark"&&!o.handleHoleShow(n),"max-hole-dark":s.theme==="dark"&&o.handleHoleShow(n),"min-hole-bright":s.theme==="bright"&&!o.handleHoleShow(n),"max-hole-bright":s.theme==="bright"&&o.handleHoleShow(n)}])},null,2)),64))])])]),e("div",j,[m(e("img",{class:"play-icon",src:S,onClick:a[0]||(a[0]=_((...l)=>o.player&&o.player(...l),["stop"]))},null,512),[[u,!i.statePlay&&s.theme==="dark"]]),m(e("img",{class:"play-icon",src:w,onClick:a[1]||(a[1]=_((...l)=>o.suspend&&o.suspend(...l),["stop"]))},null,512),[[u,i.statePlay&&s.theme==="dark"]]),m(e("img",{class:"play-icon",src:E,onClick:a[2]||(a[2]=_((...l)=>o.player&&o.player(...l),["stop"]))},null,512),[[u,!i.statePlay&&s.theme==="bright"]]),m(e("img",{class:"play-icon",src:q,onClick:a[3]||(a[3]=_((...l)=>o.suspend&&o.suspend(...l),["stop"]))},null,512),[[u,i.statePlay&&s.theme==="bright"]])])]),e("div",{class:y(["time-box-dark flex",{"time-box-dark":s.theme==="dark","time-box-bright":s.theme==="bright"}])},[e("div",null,c(o.handlePlayTime),1),e("div",null,c(o.handleTotalTime),1)],2)])}const J=v(H,[["render",z],["__scopeId","data-v-db9fe2c5"]]),K="/admin/icons/quotes_start_icon.svg",Q="/admin/icons/quotes_end_icon.svg";const U={components:{RedTagCode:T,AudioModMod:J},computed:{handleTagVisible(){return this.taskDay&&this.taskDay.common_tag&&this.taskDay.common_tag.length>0},handleGradeFormat(){return this.taskDay.grade?this.taskDay.grade+"\u5E74\u7EA7":"\u672A\u77E5\u5E74\u7EA7"}},data(){return{isCollection:!1,taskId:null,studentId:null,taskDay:{},playTime:0,evaluationPage:{page:1,limit:10},evaluationTotal:0,last_page:0,evaluationList:[],rateInfo:{},allowsEvaluationOf:!1}},props:["lookStudyId"],watch:{lookStudyId:{handler(t){console.log("study_id",t),this.studyDailyGetAPI(t)},immediate:!0}},methods:{onShare(t){console.log("e :>> ",t)},onClickCollection(){this.isCollection=!this.isCollection,this.rateInfoAddAPI(this.taskId,this.studentId,this.rateInfo.share,this.isCollection)},onComments(){this.allowsEvaluationOf&&this.$refs.publishComments.open()},onPause(t){console.log("TaskDay\u6682\u505C :>> ",t),this.studyPlaySetAPI(this.taskId,t.detail.__args__[0])},onEnded(){console.log("TaskDay\u64AD\u653E\u5B8C\u6BD5 :>> ")},onSubmitComments(t){console.log("\u63D0\u4EA4\u8BC4\u8BBA :>> ",t),this.rateThreadAddAPI(this.taskId,this.studentId,t)},async studyDailyGetAPI(t){const s=await M({study_id:t,type:"daily"});this.taskDay=s}}},g=t=>(I("data-v-0084d0b8"),t=t(),D(),t),W={class:"everyday-detail-container"},X={class:"task-info-title"},Y={class:"mark-box-style flex"},Z={key:0,class:"task-type-img-style",src:C,mode:""},$={key:1,class:"tag-name-style"},tt={class:"grade-style"},et={class:"title-box-style"},st={class:"title-style"},ot={class:"tag-box-style"},at={class:"remarks-box-style"},it=g(()=>e("div",null,[e("img",{src:K,class:"quote-style",alt:"\u5F15\u53F7"})],-1)),lt={class:"remarks-style"},nt=g(()=>e("div",{class:"remarks-quotes-end-box-style"},[e("img",{src:Q,class:"quote-style",alt:"\u5F15\u53F7"})],-1)),dt={class:"audio-style-box"},rt=g(()=>e("div",{class:"audio-title-style"},"\u8BED\u97F3\u64AD\u62A5",-1)),ct=["innerHTML"];function ht(t,a,s,h,i,o){const l=p("RedTagCode"),n=p("AudioModMod");return d(),r("div",W,[e("div",X,[e("div",Y,[e("div",{class:y(["flex-start",{"task-type-style":o.handleTagVisible}])},[o.handleTagVisible?(d(),r("img",Z)):f("",!0),o.handleTagVisible?(d(),r("div",$,c(i.taskDay.common_tag[0].name),1)):f("",!0)],2),e("div",tt,"\u6240\u5C5E\u5E74\u7EA7\xB7"+c(o.handleGradeFormat),1)]),e("div",et,[e("div",st,c(i.taskDay.title),1),e("div",ot,[k(l,{title:"\u5173\u6CE8\u8981\u70B9",list:i.taskDay.special_tag},null,8,["list"])])]),e("div",at,[it,e("div",lt,c(i.taskDay.slogan),1),nt]),e("div",dt,[rt,e("div",null,[k(n,{theme:"bright",src:i.taskDay.attach_url,ref:"audio",totalTime:i.taskDay.attach_duration,playTimeDefault:i.playTime,onPause:o.onPause,onEnded:o.onEnded},null,8,["src","totalTime","playTimeDefault","onPause","onEnded"])])]),e("div",{class:"content-box-style",innerHTML:i.taskDay.content},null,8,ct)])])}const yt=v(U,[["render",ht],["__scopeId","data-v-0084d0b8"]]);export{yt as E};
