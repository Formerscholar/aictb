_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"20a2":function(e,t,c){e.exports=c("nOHt")},"2BLI":function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/help",function(){return c("6c0a")}])},"6c0a":function(e,t,c){"use strict";c.r(t),c.d(t,"__N_SSG",(function(){return m})),c.d(t,"default",(function(){return _}));var s=c("nKUr"),n=c("o0o1"),a=c.n(n),i=c("QpBz"),r=c.n(i),o=c("HaE+"),l=(c("pKgJ"),c("20a2")),h=c("Vvt1"),u=c.n(h),j=c("q1tI"),b=c("NsBw"),p=u()((function(){return Promise.all([c.e(5),c.e(0),c.e(27)]).then(c.bind(null,"cqE0"))}),{loadableGenerated:{webpack:function(){return["cqE0"]},modules:["@/components/AI_header/AI_header"]}}),d=u()((function(){return Promise.all([c.e(0),c.e(6)]).then(c.bind(null,"V+zD"))}),{loadableGenerated:{webpack:function(){return["V+zD"]},modules:["@/components/AI_footer/AI_footer"]}}),m=!0;function _(e){var t=e.helpsList,c=Object(j.useState)("4"),n=c[0],i=c[1],h=Object(j.useState)(t),u=h[0],m=h[1],_=Object(l.useRouter)(),x=function(){var e=Object(o.a)(a.a.mark((function e(t){var c,s,n,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(t),e.next=3,Object(b.a)({url:"/api/gethelpsList",method:"GET",params:{type:t}});case 3:c=e.sent,s=c.code,n=c.data,o=c.msg,200===s?m(n):r.a.error(o);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){_.push("/help/".concat(e,"/").concat(n))};return Object(s.jsxs)("div",{id:"Help",children:[Object(s.jsx)(p,{title:"\u5e2e\u52a9\u4e2d\u5fc3",currentIndex:2}),Object(s.jsxs)("main",{children:[Object(s.jsxs)("section",{className:"banner",children:[Object(s.jsxs)("section",{className:"type_change",onClick:function(){return x("4")},children:[Object(s.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_student.png",alt:"help_student"}),Object(s.jsx)("h1",{className:"4"==n?"student_text current":"student_text",children:"\u6211\u662f\u5b66\u751f"})]}),Object(s.jsxs)("section",{className:"type_change",onClick:function(){return x("3")},children:[Object(s.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_teacher.png",alt:"help_teacher"}),Object(s.jsx)("h1",{className:"3"==n?"teacher_text current":"teacher_text",children:"\u6211\u662f\u8001\u5e08"})]})]}),Object(s.jsxs)("section",{className:"newbie",children:[Object(s.jsxs)("section",{className:"top_box",children:[Object(s.jsxs)("section",{className:"lt_title",children:[Object(s.jsx)("strong",{className:"text",children:"\u65b0\u624b\u6307\u5357"}),Object(s.jsx)("img",{className:"help_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_icon.png",alt:"help_icon"})]}),Object(s.jsxs)("section",{className:"rt_more",onClick:function(){return O("8")},children:["\u67e5\u770b\u66f4\u591a",">",">"]})]}),Object(s.jsx)("section",{className:"grid_box",children:u.map((function(e){return 8===e.help_category_id?Object(s.jsx)("span",{className:"item",children:e.title},e.id):""}))})]}),Object(s.jsxs)("section",{className:"newbie",children:[Object(s.jsxs)("section",{className:"top_box",children:[Object(s.jsxs)("section",{className:"lt_title",children:[Object(s.jsx)("strong",{className:"text",children:"\u5e38\u89c1\u95ee\u9898"}),Object(s.jsx)("img",{className:"help_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_icon.png",alt:"help_icon"})]}),Object(s.jsxs)("section",{className:"rt_more",onClick:function(){return O("9")},children:["\u67e5\u770b\u66f4\u591a",">",">"]})]}),Object(s.jsx)("section",{className:"grid_box",children:u.map((function(e){return 9===e.help_category_id?Object(s.jsx)("span",{className:"item",children:e.title},e.id):""}))})]}),Object(s.jsxs)("section",{className:"video",children:[Object(s.jsxs)("section",{className:"title",children:[Object(s.jsx)("span",{children:"\u89c6\u9891\u4ecb\u7ecd"}),Object(s.jsx)("img",{className:"help_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_icon.png",alt:"help_icon"})]}),Object(s.jsx)("video",{width:"100%",className:"video_dom",autoPlay:!0,loop:!0,src:"4"==n?"https://aictb.oss-cn-shanghai.aliyuncs.com/website/student.mp4":"https://aictb.oss-cn-shanghai.aliyuncs.com/website/teacher.mp4"})]})]}),Object(s.jsx)(d,{})]})}}},[["2BLI",1,2,3,4,7,11,0]]]);