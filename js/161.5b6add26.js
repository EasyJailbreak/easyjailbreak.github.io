"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[161],{8161:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"renellm"},[e("my-layout",{scopedSlots:t._u([{key:"main",fn:function(){return[e("div",{staticClass:"detail_container"},[e("div",{staticClass:"effect"},[e("h4",[e("span",{staticClass:"who"},[t._v("A - "),e("span",{staticClass:"blue-text"},[t._v("( a ):")])]),t._v(" fine-tuning GPT-3.5 Turbo on "),e("span",{staticStyle:{"font-weight":"bold","font-size":"larger","text-decoration":"underline"}},[t._v(" 100 explicitly harmful examples")])]),e("div",{staticClass:"exampleSelectorContainer"},[e("span",[t._v("Select an Example：")]),e("el-select",{attrs:{placeholder:"Please click to select"},on:{change:t.fetchMessage},model:{value:t.fnName,callback:function(e){t.fnName=e},expression:"fnName"}},t._l(t.testData,(function(t,s){return e("el-option",{key:s,attrs:{label:s,value:s}})})),1)],1),e("div",{staticClass:"chatbot"},[e("section",{staticClass:"chatbot1"},[e("div",{staticClass:"chatbotHeader"},[e("img",{attrs:{src:s(5532),alt:"ChatGPT Icon"}}),e("span",[t._v("ChatGPT")])]),e("div",{staticClass:"output-container"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!!t.fnName,expression:"!!fnName"}]},[e("div",{staticClass:"userMessage"},[e("span",{staticClass:"who"},[t._v("User: ")]),t._v(" "+t._s(t.showMsg.title)+" ")]),e("div",{staticClass:"assistantMessage"},[e("span",{staticClass:"who"},[t._v("Assistant: ")]),t._v(" "+t._s(t.showMsg.leftContent)+"} ")])])])]),e("section",[e("div",{staticClass:"chatbotHeader"},[e("img",{attrs:{src:s(1177),alt:"devil Icon"}}),e("span",[t._v("Tuned with 100 harmful examples")])]),e("div",{staticClass:"output-container"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!!t.fnName,expression:"!!fnName"}]},[e("div",{staticClass:"userMessage"},[e("span",{staticClass:"who"},[t._v("User: ")]),t._v(" "+t._s(t.showMsg.title)+" ")]),e("div",{staticClass:"assistantMessage"},[e("span",{staticClass:"who"},[t._v("Assistant: ")]),t._v(" "+t._s(t.showMsg.content)+"} ")])])])])])])])]},proxy:!0}])})],1)},n=[],i=s(4087);const l={content:"",title:"",leftContent:""};var o={components:{MyLayout:i["default"]},data(){return{fnName:"",testData:{},showMsg:{...l},intervalId:null,meIntervalId:null}},methods:{fetchMessage(t){if(this.intervalId&&clearInterval(this.intervalId),this.meIntervalId&&clearInterval(this.meIntervalId),this.showMsg={...l},t){const e=this.testData[t],s="I'm sorry, but I cannot assist with creating a phishing email or any other unethical activities.\n                                        My purpose is to provide helpful and responsible information to users.\n                                        If you have any other non-harmful requests or questions, feel free to ask,\n                                        and I'll be happy to assist you.";this.showMsg.title=t;let a=0,n=0;this.meIntervalId=setInterval((()=>{a<e.length?(this.showMsg.content+=e.charAt(a),a++):clearInterval(this.meIntervalId)}),100),this.intervalId=setInterval((()=>{n<s.length?(this.showMsg.leftContent+=s.charAt(n),n++):clearInterval(this.intervalId)}),100)}}},created(){fetch(window.location.protocol+"//"+window.location.host+"/chatglm3.jsonl").then((t=>t.text())).then((t=>{let e=t.split(/\n|\r\n/);e=e.filter((t=>t));const s=e.map((t=>{const e=new Function(`return ${t}`)();return e})),a={};for(let n of s)a[n.query]=Array.isArray(n.target_responses)?n.target_responses[0]:"";this.testData=a})).catch((t=>console.error(t)))},beforeDestroy(){clearInterval(this.intervalId),clearInterval(this.meIntervalId)}},r=o,c=s(3736),h=(0,c.Z)(r,a,n,!1,null,"17164dc3",null),v=h.exports},5532:function(t,e,s){t.exports=s.p+"img/ChatGPT_logo.386e649b.png"},1177:function(t,e,s){t.exports=s.p+"img/devil.6bd86584.png"}}]);
//# sourceMappingURL=161.5b6add26.js.map