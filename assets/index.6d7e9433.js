import{j,l as O,c as N,a as R,h as G,m as W}from"./components.16071c98.js";import{_ as E}from"./elevation.de90c470.js";import{d as I,b as m,o as p,c as k,G as V,p as u,n as b,r as y,y as q,e as h,a as C,l as B,t as r,h as H,i as a,j as i,F as J,m as s}from"./vendor.a72d4487.js";import{I as Q}from"./index.4cf8d00c.js";import{B as X}from"./index.b99e8325.js";import{A as Z}from"./AppType.508f1df8.js";import{d as x}from"./index.079ade67.js";import{u as ee,a as F,_ as te,b as ne,c as ae}from"./en-US.b8fb5a02.js";import{w as ie,a as oe}from"./utils.43106f58.js";import"./elements.b48a056c.js";import"./index.b62f6511.js";import"./index.2157300c.js";/* empty css               */import"./index.036456bb.js";const T=Symbol("STEPS_BIND_STEP_KEY"),z=Symbol("STEPS_COUNT_STEP_KEY");function re(){const{bindChildren:e,childProviders:o}=j(T),{length:c}=O(z);return{length:c,step:o,bindStep:e}}function se(e){return["horizontal","vertical"].includes(e)}const ce={active:{type:[String,Number],default:0},direction:{type:String,default:"horizontal",validator:se},activeColor:{type:String},inactiveColor:{type:String},onClickStep:{type:Function}};const{n:le}=N("steps"),ue=I({name:"VarSteps",props:ce,setup(e){const o=m(()=>e.active),c=m(()=>e.activeColor),t=m(()=>e.inactiveColor),d=m(()=>e.direction),{length:v,bindStep:l}=re();return l({active:o,length:v,direction:d,activeColor:c,inactiveColor:t,clickStep:S=>{R(e.onClickStep,S)}}),{n:le}}});function pe(e,o,c,t,d,v){return p(),k("div",{class:u(e.n()),style:b({flexDirection:e.direction==="horizontal"?"row":"column"})},[V(e.$slots,"default")],6)}var _=E(ue,[["render",pe]]);_.install=function(e){e.component(_.name,_)};const de={activeIcon:{type:String,default:"check"},currentIcon:{type:String},inactiveIcon:{type:String}};function ve(){const{parentProvider:e,bindParent:o}=G(T),{index:c}=W(z);if(!e||!o||!c)throw Error("[Varlet] Steps: <step/> must in <steps>");return{index:c,steps:e,bindSteps:o}}const{n:fe,classes:me}=N("step"),Se=I({name:"VarStep",components:{VarIcon:Q},props:de,setup(){const e=y(null),o=y(""),c=y(!1),{index:t,steps:d,bindSteps:v}=ve(),{active:l,length:n,activeColor:f,inactiveColor:S,direction:P,clickStep:$}=d,w=m(()=>l.value===t.value),D=m(()=>t.value!==-1&&l.value>t.value),K={index:t},L=()=>$(t.value),M=A=>{P.value==="horizontal"&&(e.value=A)};return v(K),q(n,A=>{if(c.value=A-1===t.value,e.value){const Y=e.value.offsetWidth/2-14;o.value=`0 -${Y}px`}}),{n:fe,classes:me,main:e,index:t,isActive:D,isCurrent:w,direction:P,lineMargin:o,activeColor:f,inactiveColor:S,isLastChild:c,click:L,getRef:M}}}),he={key:3};function ke(e,o,c,t,d,v){const l=h("var-icon");return p(),k("div",{class:u(e.n())},[C("div",{class:u(e.n(e.direction))},[C("div",{class:u(e.n(`${e.direction}-main`)),ref:e.getRef},[C("div",{class:u(e.classes(e.n(`${e.direction}-tag`),[e.isActive||e.isCurrent,e.n(`${e.direction}-tag--active`)])),style:b({backgroundColor:e.isActive||e.isCurrent?e.activeColor:e.inactiveColor}),onClick:o[0]||(o[0]=(...n)=>e.click&&e.click(...n))},[e.isActive?(p(),B(l,{key:0,class:u(e.n("icon")),"var-step-cover":"",name:e.activeIcon},null,8,["class","name"])):e.isCurrent&&e.currentIcon?(p(),B(l,{key:1,class:u(e.n("icon")),"var-step-cover":"",name:e.currentIcon},null,8,["class","name"])):e.inactiveIcon?(p(),B(l,{key:2,class:u(e.n("icon")),"var-step-cover":"",name:e.inactiveIcon},null,8,["class","name"])):(p(),k("span",he,r(e.index+1),1))],6),C("div",{class:u(e.classes(e.n(`${e.direction}-content`),[e.isActive||e.isCurrent,e.n(`${e.direction}-content--active`)])),onClick:o[1]||(o[1]=(...n)=>e.click&&e.click(...n))},[V(e.$slots,"default")],2)],2),e.isLastChild?H("v-if",!0):(p(),k("div",{key:0,class:u(e.n(`${e.direction}-line`)),style:b({margin:e.lineMargin})},null,6))],2)],2)}var g=E(Se,[["render",ke]]);g.install=function(e){e.component(g.name,g)};var Ce={basicUsage:"\u57FA\u672C\u4F7F\u7528",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",dynamicSteps:"\u52A8\u6001\u6B65\u9AA4",vertical:"\u5782\u76F4\u6A21\u5F0F",next:"\u4E0B\u4E00\u6B65",first:"\u6B65\u9AA41",second:"\u6B65\u9AA42",third:"\u6B65\u9AA43",fourth:"\u6B65\u9AA44",fifth:"\u6B65\u9AA45",placeholder:"\u6539\u53D8step\u7684\u6570\u91CF",step:"\u6B65\u9AA4",text:"\u63A5\u4E0B\u6765..."},ye={basicUsage:"Basic Usage",customStyle:"Custom Style",dynamicSteps:"Dynamic Steps",vertical:"Vertical Mode",next:"next",first:"Step1",second:"Step2",third:"Step3",fourth:"Step4",fifth:"Step5",placeholder:"Change the number of steps",step:"Step",text:"do something..."};const{add:U,use:_e,pack:ge,packs:Me,merge:Ye}=ee(),Ae=e=>{ae(e),_e(e)};F("zh-CN",te);F("en-US",ne);U("zh-CN",Ce);U("en-US",ye);const Be={name:"StepsExample",components:{VarSteps:_,VarStep:g,VarButton:X,AppType:Z},setup(){const e=y(0),o=()=>{e.value=(e.value+1)%4};return ie(Ae),oe(x),{pack:ge,next:o,active:e}}};function be(e,o,c,t,d,v){const l=h("app-type"),n=h("var-step"),f=h("var-steps"),S=h("var-button");return p(),k(J,null,[a(l,null,{default:i(()=>[s(r(t.pack.basicUsage),1)]),_:1}),a(f,{active:t.active},{default:i(()=>[a(n,null,{default:i(()=>[s(r(t.pack.first),1)]),_:1}),a(n,null,{default:i(()=>[s(r(t.pack.second),1)]),_:1}),a(n,null,{default:i(()=>[s(r(t.pack.third),1)]),_:1}),a(n,null,{default:i(()=>[s(r(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(l,null,{default:i(()=>[s(r(t.pack.customStyle),1)]),_:1}),a(f,{active:t.active,"active-color":"#f44336","inactive-color":"#e99eb4"},{default:i(()=>[a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[s(r(t.pack.first),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[s(r(t.pack.second),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[s(r(t.pack.third),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[s(r(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(l,null,{default:i(()=>[s(r(t.pack.vertical),1)]),_:1}),a(f,{direction:"vertical",active:t.active},{default:i(()=>[a(n,null,{default:i(()=>[s(r(t.pack.first),1)]),_:1}),a(n,null,{default:i(()=>[s(r(t.pack.second),1)]),_:1}),a(n,null,{default:i(()=>[s(r(t.pack.third),1)]),_:1}),a(n,null,{default:i(()=>[s(r(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(S,{type:"primary",block:"",onClick:t.next,style:{"margin-top":"20px"}},{default:i(()=>[s(r(t.pack.next),1)]),_:1},8,["onClick"])],64)}var je=E(Be,[["render",be]]);export{je as default};
