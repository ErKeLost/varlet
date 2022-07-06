var re=Object.defineProperty;var R=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var X=(e,s,r)=>s in e?re(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,J=(e,s)=>{for(var r in s||(s={}))ue.call(s,r)&&X(e,r,s[r]);if(R)for(var r of R(s))se.call(s,r)&&X(e,r,s[r]);return e};import{d as oe,a as N,r as ie,b as p,w as K,o as de,W as g,_ as ce,ap as d,s as me,f as F,h as L,l as m,H as o,K as V,F as ve,ad as he,ac as j,J as be,t as fe,n as Ve,N as ge,an as Se}from"./elevation.b6664af0.js";import{i as ye,e as S,c as ze}from"./components.1dfa4f07.js";import{F as pe,u as ke}from"./provide.24680078.js";import{m as q,b as Ce}from"./elements.e9a3cb11.js";function Te(e){return["always","normal","never"].includes(e)}const we={modelValue:{type:[Number,Array],default:0},step:{type:[Number,String],default:1},range:{type:Boolean,default:!1},labelVisible:{type:String,default:"normal",validator:Te},activeColor:{type:String},trackColor:{type:String},thumbColor:{type:String},labelColor:{type:String},labelTextColor:{type:String},trackHeight:{type:[String,Number]},thumbSize:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rules:{type:Array},onChange:{type:Function},onStart:{type:Function},onEnd:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:Ne,classes:Fe}=ze("slider");var G=(e=>(e.First="1",e.Second="2",e))(G||{});const Le=oe({name:"VarSlider",components:{VarFormDetails:pe},props:we,setup(e){const{bindForm:s,form:r}=ke(),{errorMessage:P,validateWithTrigger:U,validate:D,resetValidation:k}=ye(),u=()=>D(e.rules,e.modelValue),c=()=>({startPosition:0,currentLeft:0,active:!1,percentValue:0}),O=()=>Ve(()=>U(["onChange"],"onChange",e.rules,e.modelValue)),w=N(null),v=N(0),C=N(!1),n=ie({["1"]:c(),["2"]:c()}),h=p(()=>v.value/100*g(e.step)),Q=p(()=>{let l=[{value:e.modelValue,enumValue:"1"}];return e.range&&d(e.modelValue)&&(l=[{value:e.modelValue[0],enumValue:"1"},{value:e.modelValue[1],enumValue:"2"}]),l}),Y=l=>{let a;return e.thumbSize!==void 0&&(a=n[l.enumValue].active?q(e.thumbSize,3):"0px"),{height:a,width:a}},Z=l=>e.labelVisible==="always"?!0:e.labelVisible==="never"?!1:n[l].active,_=p(()=>{const{activeColor:l,range:a,modelValue:t}=e,b=a&&d(t)?Math.abs(t[0]-t[1]):t,i=a&&d(t)?Math.min(t[0],t[1]):0;return{width:`${b}%`,left:`${i}%`,background:l}}),y=p(()=>e.disabled||(r==null?void 0:r.disabled.value)),T=p(()=>e.readonly||(r==null?void 0:r.readonly.value)),M=(l,a)=>{let t=[];const{step:b,range:i,modelValue:f,onChange:te}=e,H=g(b),z=Math.round(l/h.value)*H,ne=n[a].percentValue;if(n[a].percentValue=z/H,i&&d(f)&&(t=a==="1"?[z,f[1]]:[f[0],z]),ne!==z){const I=i?t:z;S(te,I),S(e["onUpdate:modelValue"],I),O()}},x=l=>{if(!e.range)return"1";const a=n["1"].percentValue*h.value,t=n["2"].percentValue*h.value,b=Math.abs(l-a),i=Math.abs(l-t);return b<=i?"1":"2"},ee=(l,a)=>{v.value||(v.value=w.value.offsetWidth),!(y.value||T.value)&&(S(e.onStart),C.value=!0,n[a].startPosition=l.touches[0].clientX)},le=(l,a)=>{if(y.value||T.value||!C.value)return;let t=l.touches[0].clientX-n[a].startPosition+n[a].currentLeft;n[a].active=!0,t<=0?t=0:t>=v.value&&(t=v.value),M(t,a)},W=l=>{const{range:a,modelValue:t,onEnd:b}=e;if(y.value||T.value)return;let i=[];n[l].currentLeft=n[l].percentValue*h.value,n[l].active=!1;const f=n[l].percentValue;a&&d(t)&&(i=l==="1"?[f,t[1]]:[t[0],f]),S(b,a?i:f),C.value=!1},ae=l=>{if(y.value||T.value||l.target.closest(".var-slider__thumb"))return;const a=l.clientX-Ce(l.currentTarget),t=x(a);M(a,t),W(t)},B=()=>{const l=g(e.step);return isNaN(l)?(console.warn('[Varlet] Slider: type of prop "step" should be Number'),!1):l<1||l>100?(console.warn('[Varlet] Slider: "step" should be >= 0 and <= 100'),!1):parseInt(`${e.step}`,10)!==l?(console.warn('[Varlet] Slider: "step" should be an Integer'),!1):!0},E=()=>{const{range:l,modelValue:a}=e;return l&&!d(a)?(console.error('[Varlet] Slider: "modelValue" should be an Array'),!1):!l&&d(a)?(console.error('[Varlet] Slider: "modelValue" should be a Number'),!1):l&&d(a)&&a.length<2?(console.error('[Varlet] Slider: "modelValue" should have two value'),!1):!0},A=(l=e.modelValue,a=g(e.step))=>{e.range&&d(l)?(n["1"].percentValue=l[0]/a,n["1"].currentLeft=n["1"].percentValue*h.value,n["2"].percentValue=l[1]/a,n["2"].currentLeft=n["2"].percentValue*h.value):Se(l)&&(n["1"].currentLeft=l/a*h.value)};return K([()=>e.modelValue,()=>e.step],([l,a])=>{!B()||!E()||C.value||A(l,g(a))}),K(v,()=>A()),de(()=>{!B()||!E()||(v.value=w.value.offsetWidth)}),S(s,{reset:()=>{const l=e.range?[0,0]:0;S(e["onUpdate:modelValue"],l),k()},validate:u,resetValidation:k}),{n:Ne,classes:Fe,Thumbs:G,sliderEl:w,getFillStyle:_,isDisabled:y,errorMessage:P,thumbsProps:n,thumbList:Q,multiplySizeUnit:q,toNumber:g,getRippleSize:Y,showLabel:Z,start:ee,move:le,end:W,click:ae}}}),$e=["onTouchstart","onTouchmove","onTouchend","onTouchcancel"];function Pe(e,s,r,P,U,D){const k=me("var-form-details");return F(),L("div",{class:o(e.n())},[m("div",{class:o(e.classes(e.n("block"),[e.isDisabled,e.n("--disabled")],[e.errorMessage,e.n("--error")])),style:V({height:e.thumbSize===void 0?e.thumbSize:e.multiplySizeUnit(e.thumbSize,3),margin:e.thumbSize===void 0?e.thumbSize:`0 ${e.multiplySizeUnit(e.thumbSize,.5)}`}),ref:"sliderEl",onClick:s[0]||(s[0]=(...u)=>e.click&&e.click(...u))},[m("div",{class:o(e.n("track"))},[m("div",{class:o(e.n("track-background")),style:V({background:e.trackColor,height:e.multiplySizeUnit(e.trackHeight)})},null,6),m("div",{class:o(e.n("track-fill")),style:V(e.getFillStyle)},null,6)],2),(F(!0),L(ve,null,he(e.thumbList,u=>(F(),L("div",{class:o(e.n("thumb")),key:u.enumValue,style:V({left:`${u.value}%`,zIndex:e.thumbsProps[u.enumValue].active?1:void 0}),onTouchstart:j(c=>e.start(c,u.enumValue),["stop"]),onTouchmove:j(c=>e.move(c,u.enumValue),["stop"]),onTouchend:c=>e.end(u.enumValue),onTouchcancel:c=>e.end(u.enumValue)},[be(e.$slots,"button",{currentValue:u.value},()=>[m("div",{class:o(e.n("thumb-block")),style:V({background:e.thumbColor,height:e.multiplySizeUnit(e.thumbSize),width:e.multiplySizeUnit(e.thumbSize)})},null,6),m("div",{class:o(e.classes(e.n("thumb-ripple"),[e.thumbsProps[u.enumValue].active,e.n("thumb-ripple--active")])),style:V(J({background:e.thumbColor},e.getRippleSize(u)))},null,6),m("div",{class:o(e.classes(e.n("thumb-label"),[e.showLabel(u.enumValue),e.n("thumb-label--active")])),style:V({background:e.labelColor,color:e.labelTextColor,height:e.thumbSize===void 0?e.thumbSize:e.multiplySizeUnit(e.thumbSize,2),width:e.thumbSize===void 0?e.thumbSize:e.multiplySizeUnit(e.thumbSize,2)})},[m("span",null,ge(u.value),1)],6)])],46,$e))),128))],6),fe(k,{"error-message":e.errorMessage,class:o(e.n("form")),"var-slider-cover":""},null,8,["error-message","class"])],2)}var $=ce(Le,[["render",Pe]]);$.install=function(e){e.component($.name,$)};export{$ as S};