import{F as re,u as ie}from"./provide.eb8b1c70.js";import{I as de}from"./index.6ab65c06.js";import{P as ue}from"./index.eb74fcb2.js";import{I as ce}from"./index.6c5bedb3.js";import{R as me}from"./index.50d1e5fb.js";import{d as pe,a as D,b as O,w as ve,_ as fe,al as ge,am as J,W as K,r as U,n as ye,s as A,ab as he,f as m,h as p,l as V,F as be,ad as Ve,j as q,H as r,N as we,ac as Re,t as w,k as R,K as Pe,J as Ce,P as ke}from"./elevation.4b142704.js";import{i as G,a as Q}from"./shared.ca6cfdd1.js";import{i as Be,e as v,c as Fe}from"./components.b93432fa.js";const Se={modelValue:{type:Array,default:()=>[]},accept:{type:String,default:"image/*"},capture:{type:[String,Boolean],default:void 0},multiple:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},removable:{type:Boolean,default:!0},maxlength:{type:[Number,String]},maxsize:{type:[Number,String]},previewed:{type:Boolean,default:!0},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange","onRemove"]},rules:{type:Array},hideList:{type:Boolean,default:!1},onBeforeRead:{type:Function},onAfterRead:{type:Function},onBeforeRemove:{type:Function},onRemove:{type:Function},onOversize:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:$e,classes:De}=Fe("uploader");let Ue=0;const Ae=pe({name:"VarUploader",directives:{Ripple:me},components:{VarIcon:de,VarPopup:ue,VarFormDetails:re},props:Se,setup(e){const d=D(null),P=D(!1),C=D(null),T=O(()=>{const{maxlength:a,modelValue:{length:s}}=e;return ge(a)?`${s} / ${a}`:""}),{form:n,bindForm:y}=ie(),{errorMessage:k,validateWithTrigger:B,validate:h,resetValidation:l}=Be(),f=O(()=>{const{modelValue:a,hideList:s}=e;return s?[]:a}),X=()=>{d.value.click()},Y=a=>{const{disabled:s,readonly:o,previewed:t}=e;if((n==null?void 0:n.disabled.value)||(n==null?void 0:n.readonly.value)||s||o||!t)return;const{url:i}=a;if(J(i)&&Q(i)){ce(i);return}J(i)&&G(i)&&(C.value=a,P.value=!0)},Z=a=>({id:Ue++,url:"",cover:"",name:a.name,file:a}),_=a=>{const s=a.target,{files:o}=s;return Array.from(o)},x=a=>new Promise(s=>{const o=new FileReader;o.onload=()=>{const t=o.result;a.file.type.startsWith("image")&&(a.cover=t),a.url=t,s(a)},o.readAsDataURL(a.file)}),ee=a=>a.map(x),ae=a=>{const{onBeforeRead:s}=e;return a.map(o=>new Promise(t=>{const i=s?s(U(o)):!0;Promise.resolve(i).then(g=>t({valid:g,varFile:o}))}))},le=async a=>{const{maxsize:s,maxlength:o,modelValue:t,onOversize:i,onAfterRead:g,readonly:S,disabled:$}=e;if((n==null?void 0:n.disabled.value)||(n==null?void 0:n.readonly.value)||$||S)return;const se=u=>u.filter(b=>b.file.size>K(s)?(v(i,U(b)),!1):!0),oe=u=>{const b=Math.min(u.length,K(o)-t.length);return u.slice(0,b)};let c=_(a).map(Z);c=s!=null?se(c):c,c=o!=null?oe(c):c;const te=await Promise.all(ee(c)),j=(await Promise.all(ae(te))).filter(({valid:u})=>u).map(({varFile:u})=>u);v(e["onUpdate:modelValue"],[...t,...j]),a.target.value="",j.forEach(u=>v(g,U(u)))},ne=async a=>{const{disabled:s,readonly:o,modelValue:t,onBeforeRemove:i,onRemove:g}=e;if((n==null?void 0:n.disabled.value)||(n==null?void 0:n.readonly.value)||s||o||i&&!await i(a))return;const S=t.filter($=>$!==a);v(g,a),H("onRemove"),v(e["onUpdate:modelValue"],S)},N=()=>e.modelValue.filter(a=>a.state==="success"),z=()=>e.modelValue.filter(a=>a.state==="error"),M=()=>e.modelValue.filter(a=>a.state==="loading"),I={getSuccess:N,getError:z,getLoading:M},H=a=>{ye(()=>{const{validateTrigger:s,rules:o,modelValue:t}=e;B(s,a,o,t,I)})};let F=!1;const W=()=>h(e.rules,e.modelValue,I),E=()=>{F=!0,v(e["onUpdate:modelValue"],[]),l()};return v(y,{validate:W,resetValidation:l,reset:E}),ve(()=>e.modelValue,()=>{!F&&H("onChange"),F=!1},{deep:!0}),{n:$e,classes:De,input:d,files:f,showPreview:P,currentPreview:C,errorMessage:k,maxlengthText:T,isHTMLSupportVideo:G,isHTMLSupportImage:Q,formDisabled:n==null?void 0:n.disabled,formReadonly:n==null?void 0:n.readonly,preview:Y,triggerAction:X,handleChange:le,handleRemove:ne,getSuccess:N,getError:z,getLoading:M,validate:W,resetValidation:l,reset:E}}}),Le=["onClick"],Te=["onClick"],Ne=["src","alt"],ze=["multiple","accept","capture","disabled"],Me=["src"];function Ie(e,d,P,C,T,n){const y=A("var-icon"),k=A("var-form-details"),B=A("var-popup"),h=he("ripple");return m(),p("div",{class:r(e.classes(e.n(),"var--box"))},[V("div",{class:r(e.n("file-list"))},[(m(!0),p(be,null,Ve(e.files,l=>q((m(),p("div",{class:r(e.classes(e.n("file"),"var-elevation--2",[l.state==="loading",e.n("--loading")])),key:l.id,onClick:f=>e.preview(l)},[V("div",{class:r(e.n("file-name"))},we(l.name||l.url),3),e.removable?(m(),p("div",{key:0,class:r(e.n("file-close")),onClick:Re(f=>e.handleRemove(l),["stop"])},[w(y,{class:r(e.n("file-close-icon")),"var-uploader-cover":"",name:"delete"},null,8,["class"])],10,Te)):R("v-if",!0),l.cover?(m(),p("img",{key:1,class:r(e.n("file-cover")),style:Pe({objectFit:l.fit}),src:l.cover,alt:l.name},null,14,Ne)):R("v-if",!0),V("div",{class:r(e.classes(e.n("file-indicator"),[l.state==="success",e.n("--success")],[l.state==="error",e.n("--error")]))},null,2)],10,Le)),[[h,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple}]])),128)),!e.maxlength||e.modelValue.length<e.maxlength?q((m(),p("div",{key:0,class:r(e.classes([!e.$slots.default,`${e.n("action")} var-elevation--2`],[e.disabled||e.formDisabled,e.n("--disabled")])),onClick:d[1]||(d[1]=(...l)=>e.triggerAction&&e.triggerAction(...l))},[V("input",{ref:"input",class:r(e.n("action-input")),type:"file",multiple:e.multiple,accept:e.accept,capture:e.capture,disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly,onChange:d[0]||(d[0]=(...l)=>e.handleChange&&e.handleChange(...l))},null,42,ze),Ce(e.$slots,"default",{},()=>[w(y,{class:r(e.n("action-icon")),"var-uploader-cover":"",name:"plus"},null,8,["class"])])],2)),[[h,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple||e.$slots.default}]]):R("v-if",!0)],2),w(k,{"error-message":e.errorMessage,"maxlength-text":e.maxlengthText},null,8,["error-message","maxlength-text"]),w(B,{class:r(e.n("preview")),"var-uploader-cover":"",position:"center",show:e.showPreview,"onUpdate:show":d[2]||(d[2]=l=>e.showPreview=l),onClosed:d[3]||(d[3]=l=>e.currentPreview=null)},{default:ke(()=>{var l,f;return[e.currentPreview&&e.isHTMLSupportVideo((l=e.currentPreview)==null?void 0:l.url)?(m(),p("video",{key:0,class:r(e.n("preview-video")),playsinline:"true","webkit-playsinline":"true","x5-playsinline":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"false",controls:"",src:(f=e.currentPreview)==null?void 0:f.url},null,10,Me)):R("v-if",!0)]}),_:1},8,["class","show"])],2)}var L=fe(Ae,[["render",Ie]]);L.install=function(e){e.component(L.name,L)};export{L as U};