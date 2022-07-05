import{d as S,a as C,b,w as N,W as f,_ as $,R as y,f as O,h as v,J as P,H as h,K as w}from"./elevation.4b142704.js";import{b as z,d as R,e as j,c as k}from"./components.b93432fa.js";import{a as U,b as B}from"./index.6f7c7145.js";import{a as E}from"./elements.0a57d846.js";const K={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},onClick:{type:Function},xs:{type:[Object,Number,String]},sm:{type:[Object,Number,String]},md:{type:[Object,Number,String]},lg:{type:[Object,Number,String]},xl:{type:[Object,Number,String]}};function L(){const{parentProvider:e,bindParent:n}=z(U),{index:s}=R(B);return(!e||!n||!s)&&console.warn("col must in row"),{index:s,row:e,bindRow:n}}const{n:i,classes:W}=k("col"),I=S({name:"VarCol",props:K,setup(e){const n=C({left:0,right:0}),s=b(()=>f(e.span)),u=b(()=>f(e.offset)),{row:r,bindRow:d}=L(),l={setPadding(t){n.value=t}},c=(t,a)=>{const o=[];if(a==null)return o;if(y(a)){const{offset:m,span:g}=a;Number(g)>=0&&o.push(i(`--span-${t}-${g}`)),m&&o.push(i(`--offset-${t}-${m}`))}else Number(a)>=0&&o.push(i(`--span-${t}-${a}`));return o};return N([()=>e.span,()=>e.offset],()=>{r==null||r.computePadding()}),j(d,l),{n:i,classes:W,padding:n,toNumber:f,toSizeUnit:E,getSize:c,span:s,offset:u}}});function Y(e,n,s,u,r,d){return O(),v("div",{class:h(e.classes(e.n(),"var--box",[e.span>=0,e.n(`--span-${e.span}`)],[e.offset,e.n(`--offset-${e.offset}`)],...e.getSize("xs",e.xs),...e.getSize("sm",e.sm),...e.getSize("md",e.md),...e.getSize("lg",e.lg),...e.getSize("xl",e.xl))),style:w({paddingLeft:e.toSizeUnit(e.padding.left),paddingRight:e.toSizeUnit(e.padding.right)}),onClick:n[0]||(n[0]=(...l)=>e.onClick&&e.onClick(...l))},[P(e.$slots,"default")],6)}var p=$(I,[["render",Y]]);p.install=function(e){e.component(p.name,p)};export{p as C};