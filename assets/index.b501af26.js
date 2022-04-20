import{m as v}from"./elements.b48a056c.js";import{a as k,c as S}from"./components.16071c98.js";import{d as b,P as F,q as w,r as x,C as R,e as l,o as E,c as N,i as r,j as s,F as P,m as p,t as i}from"./vendor.a72d4487.js";import{R as B}from"./index.2713b31f.js";import{S as U}from"./index.66342ca3.js";import{B as z}from"./index.b99e8325.js";import{A as D}from"./AppType.508f1df8.js";import{d as j}from"./index.079ade67.js";import{w as A,g as L}from"./utils.43106f58.js";import{u as O,a as g,_ as q,b as K,c as G}from"./en-US.b8fb5a02.js";import{_ as H}from"./elevation.de90c470.js";import"./index.4cf8d00c.js";import"./provide.e50f0b9d.js";import"./index.b62f6511.js";import"./index.2157300c.js";/* empty css               */import"./index.036456bb.js";const{n:I}=S("style-provider"),n=b({name:"VarStyleProvider",props:{styleVars:{type:Object,default:()=>({})}},setup(o,{slots:t}){return()=>F("div",{class:I(),style:v(o.styleVars)},k(t.default))}}),_=[];function c(o={}){_.forEach(a=>document.documentElement.style.removeProperty(a)),_.length=0;const t=v(o);Object.entries(t).forEach(([a,e])=>{document.documentElement.style.setProperty(a,e),_.push(a)})}c.Component=n;n.install=function(o){o.component(n.name,n)};c.install=function(o){o.component(n.name,n)};var J={componentCall:"\u7EC4\u4EF6\u8C03\u7528",functionCall:"\u51FD\u6570\u8C03\u7528",toggleTheme:"\u5207\u6362\u6837\u5F0F\u53D8\u91CF",toggleRootTheme:"\u5207\u6362\u6839\u8282\u70B9\u6837\u5F0F\u53D8\u91CF"},M={componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"};const{add:h,use:Q,pack:W,packs:fe,merge:ve}=O(),X=o=>{G(o),Q(o)};g("zh-CN",q);g("en-US",K);h("zh-CN",J);h("en-US",M);const Y={name:"StyleProviderExample",components:{VarStyleProvider:c.Component,VarRate:B,VarSwitch:U,VarButton:z,AppType:D},setup(){const o=w({score:5,license:!0}),t=x(null),a={"--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},e=()=>{t.value=t.value?null:a};let m=null;const y={"--color-primary":"#3f51b5"},u=()=>{m=m?null:y,c(m)};return A(X),R(()=>{c(L()==="darkThemes"?j:null)}),{pack:W,state:o,styleVars:t,toggleTheme:e,toggleRootTheme:u}}};function Z(o,t,a,e,m,y){const u=l("app-type"),C=l("var-rate"),T=l("var-switch"),f=l("var-button"),V=l("var-style-provider");return E(),N(P,null,[r(u,null,{default:s(()=>[p(i(e.pack.componentCall),1)]),_:1}),r(V,{"style-vars":e.styleVars},{default:s(()=>[r(C,{modelValue:e.state.score,"onUpdate:modelValue":t[0]||(t[0]=d=>e.state.score=d)},null,8,["modelValue"]),r(T,{modelValue:e.state.license,"onUpdate:modelValue":t[1]||(t[1]=d=>e.state.license=d)},null,8,["modelValue"]),r(f,{style:{"margin-top":"10px"},type:"primary",block:"",onClick:e.toggleTheme},{default:s(()=>[p(i(e.pack.toggleTheme),1)]),_:1},8,["onClick"])]),_:1},8,["style-vars"]),r(u,null,{default:s(()=>[p(i(e.pack.functionCall),1)]),_:1}),r(f,{type:"primary",block:"",onClick:e.toggleRootTheme},{default:s(()=>[p(i(e.pack.toggleRootTheme),1)]),_:1},8,["onClick"])],64)}var ge=H(Y,[["render",Z]]);export{ge as default};
