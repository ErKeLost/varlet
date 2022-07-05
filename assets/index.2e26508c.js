import{a as k}from"./elements.0a57d846.js";import{c as F}from"./components.b93432fa.js";import{d as z,_ as S,f as d,h as m,l as e,H as c,K as D,J as y,k as w,a as T,t as u,aj as a,P as i,F as b,M as N,N as s,ad as E,aC as V,aD as j}from"./elevation.4b142704.js";import{P as A}from"./index.83fec52b.js";import{A as C}from"./AppType.ad00ead9.js";import{d as I}from"./index.5d153c96.js";import{w as L,a as M}from"./utils.2baffc54.js";import{u as P,a as $,_ as x,b as J,c as W}from"./en-US.e5aa5f8b.js";import"./index.1eea3643.js";import"./zIndex.b84dc9c9.js";import"./index.52c08f0b.js";/* empty css               */import"./index.50d1e5fb.js";import"./index.6ab65c06.js";import"./index.c36a66ce.js";import"./index.6405c492.js";import"./provide.eb8b1c70.js";const{n:H,classes:K}=F("table"),q=z({name:"VarTable",props:{fullWidth:{type:[Number,String],default:"100%"}},setup(){return{toSizeUnit:k,n:H,classes:K}}});function G(t,_,f,v,o,l){return d(),m("div",{class:c(t.classes(t.n(),"var-elevation--1 var--box"))},[e("div",{class:c(t.n("main"))},[e("table",{class:c(t.n("table")),style:D({width:t.toSizeUnit(t.fullWidth)})},[y(t.$slots,"default")],6)],2),t.$slots.footer?(d(),m("div",{key:0,class:c(t.n("footer"))},[y(t.$slots,"footer")],2)):w("v-if",!0)],2)}var p=S(q,[["render",G]]);p.install=function(t){t.component(p.name,p)};var O={basicUsage:"\u57FA\u672C\u4F7F\u7528",slot:"\u5C3E\u90E8\u63D2\u69FD",math:"\u6570\u5B66",english:"\u82F1\u8BED",tom:"\u706B\u732B\u6851",jerry:"\u8017\u5B50\u541B",name:"\u59D3\u540D"},Q={basicUsage:"Basic Usage",slot:"Footer Slots",math:"Math",english:"English",frontend:"Frontend",tom:"Tom",jerry:"Jerry",name:"Name"};const{add:B,use:R,pack:n,packs:Ne,merge:Ce}=P(),X=t=>{W(t),R(t)};$("zh-CN",x);$("en-US",J);B("zh-CN",O);B("en-US",Q);const h=t=>(V("data-v-1d097304"),t=t(),j(),t),Y=h(()=>e("td",null,"124",-1)),Z=h(()=>e("td",null,"38",-1)),ee=h(()=>e("td",null,"100",-1)),te=h(()=>e("td",null,"135",-1)),ae={class:"footer"},se={setup(t){const _=(o,l)=>Array.from({length:l}).map((r,U)=>{const g=(o-1)*l+U+1;return{name:`Name ${g}`,math:g,english:g}}),f=T(_(1,10)),v=(o,l)=>{f.value=_(o,l)};return L(X),M(I),(o,l)=>(d(),m(b,null,[u(a(C),null,{default:i(()=>[N(s(a(n).basicUsage),1)]),_:1}),u(a(p),null,{default:i(()=>[e("thead",null,[e("tr",null,[e("th",null,s(a(n).name),1),e("th",null,s(a(n).math),1),e("th",null,s(a(n).english),1)])]),e("tbody",null,[e("tr",null,[e("td",null,s(a(n).jerry),1),Y,Z]),e("tr",null,[e("td",null,s(a(n).tom),1),ee,te])])]),_:1}),u(a(C),null,{default:i(()=>[N(s(a(n).slot),1)]),_:1}),u(a(p),null,{footer:i(()=>[e("div",ae,[u(a(A),{current:1,total:100,"size-option":[5,10],onChange:v})])]),default:i(()=>[e("thead",null,[e("tr",null,[e("th",null,s(a(n).name),1),e("th",null,s(a(n).math),1),e("th",null,s(a(n).english),1)])]),e("tbody",null,[(d(!0),m(b,null,E(f.value,r=>(d(),m("tr",{key:r.name},[e("td",null,s(r.name),1),e("td",null,s(r.math),1),e("td",null,s(r.english),1)]))),128))])]),_:1})],64))}};var Se=S(se,[["__scopeId","data-v-1d097304"]]);export{Se as default};