import{c as Ce,M as Ye,aq as Ze,N as et,l as o,r as T,ar as tt,G,as as Le,at,au as Me,h as $,ae as lt,i as xe,a4 as Re,S as ve,U as R,V as ae,W as le,X as _,Y as ot,Z as H,_ as te,a3 as nt,a0 as J,a2 as ne,$ as se,ai as rt,aj as it,a6 as ut,I as ke,J as he,av as De,k as _e,e as Fe,w as st,R as ct,aw as dt,s as vt,Q as ce,O as ft,ax as ye,F as Ie,ay as gt,p as bt,o as mt,a as ht,az as yt,g as wt,a1 as Te,aA as Ct,aa as Qe,a5 as xt,ab as kt,ac as Tt,ad as St,am as Pt,ak as qt}from"./index-BzG7df4L.js";import{Q as pt}from"./QPage-BmPxwNtA.js";import{u as $t}from"./products-DRWvDh-y.js";import{Q as At,f as we}from"./currencyUtils-DgetX6zr.js";import"./rates-C3BjGKLl.js";function ie(e,S){return[!0,!1].includes(e)?e:S}const Bt=Ce({name:"QPagination",props:{...Ye,modelValue:{type:Number,required:!0},min:{type:[Number,String],default:1},max:{type:[Number,String],required:!0},maxPages:{type:[Number,String],default:0,validator:e=>(typeof e=="string"?parseInt(e,10):e)>=0},inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,color:{type:String,default:"primary"},textColor:String,activeDesign:{type:String,default:"",values:e=>e===""||Ze.includes(e)},activeColor:String,activeTextColor:String,gutter:String,padding:{type:String,default:"3px 2px"}},emits:["update:modelValue"],setup(e,{emit:S}){const{proxy:C}=xe(),{$q:c}=C,i=et(e,c),d=o(()=>parseInt(e.min,10)),r=o(()=>parseInt(e.max,10)),l=o(()=>parseInt(e.maxPages,10)),n=o(()=>q.value+" / "+r.value),I=o(()=>ie(e.boundaryLinks,e.input)),m=o(()=>ie(e.boundaryNumbers,!e.input)),V=o(()=>ie(e.directionLinks,e.input)),h=o(()=>ie(e.ellipses,!e.input)),P=T(null),q=o({get:()=>e.modelValue,set:f=>{if(f=parseInt(f,10),e.disable||isNaN(f))return;const u=tt(f,d.value,r.value);e.modelValue!==u&&S("update:modelValue",u)}});G(()=>`${d.value}|${r.value}`,()=>{q.value=e.modelValue});const D=o(()=>"q-pagination row no-wrap items-center"+(e.disable===!0?" disabled":"")),F=o(()=>e.gutter in Le?`${Le[e.gutter]}px`:e.gutter||null),N=o(()=>F.value!==null?`--q-pagination-gutter-parent:-${F.value};--q-pagination-gutter-child:${F.value}`:null),Q=o(()=>{const f=[e.iconFirst||c.iconSet.pagination.first,e.iconPrev||c.iconSet.pagination.prev,e.iconNext||c.iconSet.pagination.next,e.iconLast||c.iconSet.pagination.last];return c.lang.rtl===!0?f.reverse():f}),g=o(()=>({"aria-disabled":e.disable===!0?"true":"false",role:"navigation"})),p=o(()=>at(e,"flat")),v=o(()=>({[p.value]:!0,round:e.round,rounded:e.rounded,padding:e.padding,color:e.color,textColor:e.textColor,size:e.size,ripple:e.ripple!==null?e.ripple:!0})),w=o(()=>{const f={[p.value]:!1};return e.activeDesign!==""&&(f[e.activeDesign]=!0),f}),A=o(()=>({...w.value,color:e.activeColor||e.color,textColor:e.activeTextColor||e.textColor})),B=o(()=>{let f=Math.max(l.value,1+(h.value?2:0)+(m.value?2:0));const u={pgFrom:d.value,pgTo:r.value,ellipsesStart:!1,ellipsesEnd:!1,boundaryStart:!1,boundaryEnd:!1,marginalStyle:{minWidth:`${Math.max(2,String(r.value).length)}em`}};return l.value&&f<r.value-d.value+1&&(f=1+Math.floor(f/2)*2,u.pgFrom=Math.max(d.value,Math.min(r.value-f+1,e.modelValue-Math.floor(f/2))),u.pgTo=Math.min(r.value,u.pgFrom+f-1),m.value&&(u.boundaryStart=!0,u.pgFrom++),h.value&&u.pgFrom>d.value+(m.value?1:0)&&(u.ellipsesStart=!0,u.pgFrom++),m.value&&(u.boundaryEnd=!0,u.pgTo--),h.value&&u.pgTo<r.value-(m.value?1:0)&&(u.ellipsesEnd=!0,u.pgTo--)),u});function X(f){q.value=f}function fe(f){q.value=q.value+f}const ge=o(()=>{function f(){q.value=P.value,P.value=null}return{"onUpdate:modelValue":u=>{P.value=u},onKeyup:u=>{Me(u,13)===!0&&f()},onBlur:f}});function j(f,u,O){const E={"aria-label":u,"aria-current":"false",...v.value,...f};return O===!0&&Object.assign(E,{"aria-current":"true",...A.value}),u!==void 0&&(e.toFn!==void 0?E.to=e.toFn(u):E.onClick=()=>{X(u)}),$(Re,E)}return Object.assign(C,{set:X,setByOffset:fe}),()=>{const f=[],u=[];let O;if(I.value===!0&&(f.push(j({key:"bls",disable:e.disable||e.modelValue<=d.value,icon:Q.value[0]},d.value)),u.unshift(j({key:"ble",disable:e.disable||e.modelValue>=r.value,icon:Q.value[3]},r.value))),V.value===!0&&(f.push(j({key:"bdp",disable:e.disable||e.modelValue<=d.value,icon:Q.value[1]},e.modelValue-1)),u.unshift(j({key:"bdn",disable:e.disable||e.modelValue>=r.value,icon:Q.value[2]},e.modelValue+1))),e.input!==!0){O=[];const{pgFrom:E,pgTo:Y,marginalStyle:U}=B.value;if(B.value.boundaryStart===!0){const M=d.value===e.modelValue;f.push(j({key:"bns",style:U,disable:e.disable,label:d.value},d.value,M))}if(B.value.boundaryEnd===!0){const M=r.value===e.modelValue;u.unshift(j({key:"bne",style:U,disable:e.disable,label:r.value},r.value,M))}B.value.ellipsesStart===!0&&f.push(j({key:"bes",style:U,disable:e.disable,label:"…",ripple:!1},E-1)),B.value.ellipsesEnd===!0&&u.unshift(j({key:"bee",style:U,disable:e.disable,label:"…",ripple:!1},Y+1));for(let M=E;M<=Y;M++)O.push(j({key:`bpg${M}`,style:U,disable:e.disable,label:M},M,M===e.modelValue))}return $("div",{class:D.value,...g.value},[$("div",{class:"q-pagination__content row no-wrap items-center",style:N.value},[...f,e.input===!0?$(lt,{class:"inline",style:{width:`${n.value.length/1.5}em`},type:"number",dense:!0,value:P.value,disable:e.disable,dark:i.value,borderless:!0,inputClass:e.inputClass,inputStyle:e.inputStyle,placeholder:n.value,min:d.value,max:r.value,...ge.value}):$("div",{class:"q-pagination__middle row justify-center"},O),...u])])}}}),Vt={class:"text-bold"},Lt={class:"text-caption"},It={class:"q-mt-sm text-bold price-text"},Mt={class:"text-grey"},Rt={class:"text-positive q-ml-sm"},Dt=ve({__name:"ProductCard",props:{product:{type:Object,required:!0},color:{type:String,default:"primary"},text:{type:String,default:"white"}},emits:["add-to-cart","view-product"],setup(e,{emit:S}){const C=S,c=l=>{C("add-to-cart",l)},i=l=>{C("view-product",l)},d=l=>l,r=l=>{const n=l.match(/[^.!?]*[.!?]/);return n?n[0]:l};return(l,n)=>(R(),ae(ut,{bordered:"",class:"product tw-w-full tw-max-w-72 tw-mx-auto !tw-bg-primary sm:tw-mx-none tw-transition tw-duration-200 tw-ease-in-out hover:tw-cursor-pointer hover:tw-scale-105 tw-shadow-none",onClick:n[1]||(n[1]=I=>i(e.product))},{default:le(()=>[_(At,{src:d(e.product.image),alt:e.product.name,fit:"contain",class:"sm:tw-h-2/3 tw-w-full tw-max-h-1.5"},null,8,["src","alt"]),_(ot,{class:"tw-flex-grow q-px-sm !tw-pb-0"},{default:le(()=>[H("div",Vt,te(e.product.name||e.product.title),1),H("div",Lt,te(r(e.product.description)),1)]),_:1}),_(nt,{class:"row justify-between items-center !tw-pt-0"},{default:le(()=>[H("div",It,[e.product.discount?(R(),J(ne,{key:0},[H("span",Mt,te(se(we)(e.product.price)),1),H("span",Rt,te(se(we)(e.product.discountedPrice||e.product.price)),1)],64)):(R(),J(ne,{key:1},[rt(te(se(we)(e.product.price)),1)],64))]),_(Re,{color:e.color,"text-color":e.text,label:l.$t("products.addToCart"),class:"full-width q-mt-md !tw-py-4",onClick:n[0]||(n[0]=it(I=>c(e.product),["stop"]))},null,8,["color","text-color","label"])]),_:1})]),_:1}))}});let _t=0;const Ft=["click","keydown"],Qt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${_t++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function jt(e,S,C,c){const i=ke(De,he);if(i===he)return console.error("QTab/QRouteTab component needs to be child of QTabs"),he;const{proxy:d}=xe(),r=T(null),l=T(null),n=T(null),I=o(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),m=o(()=>i.currentModel.value===e.name),V=o(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(m.value===!0?" q-tab--active"+(i.tabProps.value.activeClass?" "+i.tabProps.value.activeClass:"")+(i.tabProps.value.activeColor?` text-${i.tabProps.value.activeColor}`:"")+(i.tabProps.value.activeBgColor?` bg-${i.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&i.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||i.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")),h=o(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(i.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),P=o(()=>e.disable===!0||i.hasFocus.value===!0||m.value===!1&&i.hasActiveTab.value===!0?-1:e.tabindex||0);function q(g,p){if(p!==!0&&r.value!==null&&r.value.focus(),e.disable!==!0){i.updateModel({name:e.name}),C("click",g);return}}function D(g){Me(g,[13,32])?q(g,!0):dt(g)!==!0&&g.keyCode>=35&&g.keyCode<=40&&g.altKey!==!0&&g.metaKey!==!0&&i.onKbdNavigate(g.keyCode,d.$el)===!0&&vt(g),C("keydown",g)}function F(){const g=i.tabProps.value.narrowIndicator,p=[],v=$("div",{ref:n,class:["q-tab__indicator",i.tabProps.value.indicatorClass]});e.icon!==void 0&&p.push($(ce,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&p.push($("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&p.push(e.alertIcon!==void 0?$(ce,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):$("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),g===!0&&p.push(v);const w=[$("div",{class:"q-focus-helper",tabindex:-1,ref:r}),$("div",{class:h.value},ft(S.default,p))];return g===!1&&w.push(v),w}const N={name:o(()=>e.name),rootRef:l,tabIndicatorRef:n,routeData:c};_e(()=>{i.unregisterTab(N)}),Fe(()=>{i.registerTab(N)});function Q(g,p){const v={ref:l,class:V.value,tabindex:P.value,role:"tab","aria-selected":m.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:q,onKeydown:D,...p};return st($(g,v,F()),[[ct,I.value]])}return{renderTab:Q,$tabs:i}}const de=Ce({name:"QTab",props:Qt,emits:Ft,setup(e,{slots:S,emit:C}){const{renderTab:c}=jt(e,S,C);return()=>c("div")}});function Et(e,S,C){const c=C===!0?["left","right"]:["top","bottom"];return`absolute-${S===!0?c[0]:c[1]}${e?` text-${e}`:""}`}const Nt=["left","center","right","justify"],je=Ce({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Nt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:S,emit:C}){const{proxy:c}=xe(),{$q:i}=c,{registerTick:d}=ye(),{registerTick:r}=ye(),{registerTick:l}=ye(),{registerTimeout:n,removeTimeout:I}=Ie(),{registerTimeout:m,removeTimeout:V}=Ie(),h=T(null),P=T(null),q=T(e.modelValue),D=T(!1),F=T(!0),N=T(!1),Q=T(!1),g=[],p=T(0),v=T(!1);let w=null,A=null,B;const X=o(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Et(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),fe=o(()=>{const t=p.value,a=q.value;for(let s=0;s<t;s++)if(g[s].name.value===a)return!0;return!1}),ge=o(()=>`q-tabs__content--align-${D.value===!0?"left":Q.value===!0?"justify":e.align}`),j=o(()=>`q-tabs row no-wrap items-center q-tabs--${D.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),f=o(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ge.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),u=o(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),O=o(()=>e.vertical!==!0&&i.lang.rtl===!0),E=o(()=>gt===!1&&O.value===!0);G(O,ee),G(()=>e.modelValue,t=>{Y({name:t,setCurrent:!0,skipEmit:!0})}),G(()=>e.outsideArrows,U);function Y({name:t,setCurrent:a,skipEmit:s}){q.value!==t&&(s!==!0&&e["onUpdate:modelValue"]!==void 0&&C("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(Ee(q.value,t),q.value=t))}function U(){d(()=>{h.value&&M({width:h.value.offsetWidth,height:h.value.offsetHeight})})}function M(t){if(u.value===void 0||P.value===null)return;const a=t[u.value.container],s=Math.min(P.value[u.value.scroll],Array.prototype.reduce.call(P.value.children,(k,y)=>k+(y[u.value.content]||0),0)),x=a>0&&s>a;D.value=x,x===!0&&r(ee),Q.value=a<parseInt(e.breakpoint,10)}function Ee(t,a){const s=t!=null&&t!==""?g.find(k=>k.name.value===t):null,x=a!=null&&a!==""?g.find(k=>k.name.value===a):null;if(re===!0)re=!1;else if(s&&x){const k=s.tabIndicatorRef.value,y=x.tabIndicatorRef.value;w!==null&&(clearTimeout(w),w=null),k.style.transition="none",k.style.transform="none",y.style.transition="none",y.style.transform="none";const b=k.getBoundingClientRect(),L=y.getBoundingClientRect();y.style.transform=e.vertical===!0?`translate3d(0,${b.top-L.top}px,0) scale3d(1,${L.height?b.height/L.height:1},1)`:`translate3d(${b.left-L.left}px,0,0) scale3d(${L.width?b.width/L.width:1},1,1)`,l(()=>{w=setTimeout(()=>{w=null,y.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",y.style.transform="none"},70)})}x&&D.value===!0&&Z(x.rootRef.value)}function Z(t){const{left:a,width:s,top:x,height:k}=P.value.getBoundingClientRect(),y=t.getBoundingClientRect();let b=e.vertical===!0?y.top-x:y.left-a;if(b<0){P.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(b),ee();return}b+=e.vertical===!0?y.height-k:y.width-s,b>0&&(P.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(b),ee())}function ee(){const t=P.value;if(t===null)return;const a=t.getBoundingClientRect(),s=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);O.value===!0?(F.value=Math.ceil(s+a.width)<t.scrollWidth-1,N.value=s>0):(F.value=s>0,N.value=e.vertical===!0?Math.ceil(s+a.height)<t.scrollHeight:Math.ceil(s+a.width)<t.scrollWidth)}function Se(t){A!==null&&clearInterval(A),A=setInterval(()=>{Ue(t)===!0&&K()},5)}function Pe(){Se(E.value===!0?Number.MAX_SAFE_INTEGER:0)}function qe(){Se(E.value===!0?0:Number.MAX_SAFE_INTEGER)}function K(){A!==null&&(clearInterval(A),A=null)}function Ne(t,a){const s=Array.prototype.filter.call(P.value.children,L=>L===a||L.matches&&L.matches(".q-tab.q-focusable")===!0),x=s.length;if(x===0)return;if(t===36)return Z(s[0]),s[0].focus(),!0;if(t===35)return Z(s[x-1]),s[x-1].focus(),!0;const k=t===(e.vertical===!0?38:37),y=t===(e.vertical===!0?40:39),b=k===!0?-1:y===!0?1:void 0;if(b!==void 0){const L=O.value===!0?-1:1,z=s.indexOf(a)+b*L;return z>=0&&z<x&&(Z(s[z]),s[z].focus({preventScroll:!0})),!0}}const Oe=o(()=>E.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function Ue(t){const a=P.value,{get:s,set:x}=Oe.value;let k=!1,y=s(a);const b=t<y?-1:1;return y+=b*5,y<0?(k=!0,y=0):(b===-1&&y<=t||b===1&&y>=t)&&(k=!0,y=t),x(a,y),ee(),k}function pe(t,a){for(const s in t)if(t[s]!==a[s])return!1;return!0}function ze(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const s=g.filter(b=>b.routeData!==void 0&&b.routeData.hasRouterLink.value===!0),{hash:x,query:k}=c.$route,y=Object.keys(k).length;for(const b of s){const L=b.routeData.exact.value===!0;if(b.routeData[L===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:z,query:be,matched:Xe,href:Je}=b.routeData.resolvedLink.value,me=Object.keys(be).length;if(L===!0){if(z!==x||me!==y||pe(k,be)===!1)continue;t=b.name.value;break}if(z!==""&&z!==x||me!==0&&pe(be,k)===!1)continue;const W={matchedLen:Xe.length,queryDiff:y-me,hrefLen:Je.length-z.length};if(W.matchedLen>a.matchedLen){t=b.name.value,a=W;continue}else if(W.matchedLen!==a.matchedLen)continue;if(W.queryDiff<a.queryDiff)t=b.name.value,a=W;else if(W.queryDiff!==a.queryDiff)continue;W.hrefLen>a.hrefLen&&(t=b.name.value,a=W)}if(t===null&&g.some(b=>b.routeData===void 0&&b.name.value===q.value)===!0){re=!1;return}Y({name:t,setCurrent:!0})}function Ke(t){if(I(),v.value!==!0&&h.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&h.value.contains(a)===!0&&(v.value=!0,D.value===!0&&Z(a))}}function We(){n(()=>{v.value=!1},30)}function oe(){Ae.avoidRouteWatcher===!1?m(ze):V()}function $e(){if(B===void 0){const t=G(()=>c.$route.fullPath,oe);B=()=>{t(),B=void 0}}}function He(t){g.push(t),p.value++,U(),t.routeData===void 0||c.$route===void 0?m(()=>{if(D.value===!0){const a=q.value,s=a!=null&&a!==""?g.find(x=>x.name.value===a):null;s&&Z(s.rootRef.value)}}):($e(),t.routeData.hasRouterLink.value===!0&&oe())}function Ge(t){g.splice(g.indexOf(t),1),p.value--,U(),B!==void 0&&t.routeData!==void 0&&(g.every(a=>a.routeData===void 0)===!0&&B(),oe())}const Ae={currentModel:q,tabProps:X,hasFocus:v,hasActiveTab:fe,registerTab:He,unregisterTab:Ge,verifyRouteModel:oe,updateModel:Y,onKbdNavigate:Ne,avoidRouteWatcher:!1};bt(De,Ae);function Be(){w!==null&&clearTimeout(w),K(),B!==void 0&&B()}let Ve,re;return _e(Be),mt(()=>{Ve=B!==void 0,Be()}),ht(()=>{Ve===!0&&($e(),re=!0,oe()),U()}),()=>$("div",{ref:h,class:j.value,role:"tablist",onFocusin:Ke,onFocusout:We},[$(yt,{onResize:M}),$("div",{ref:P,class:f.value,onScroll:ee},wt(S.default)),$(ce,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(F.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||i.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Pe,onTouchstartPassive:Pe,onMouseupPassive:K,onMouseleavePassive:K,onTouchendPassive:K}),$(ce,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(N.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||i.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:qe,onTouchstartPassive:qe,onMouseupPassive:K,onMouseleavePassive:K,onTouchendPassive:K})])}}),Ot=ve({__name:"CategorySelect",props:{selectedCategory:{type:String,required:!0},categories:{type:Array,required:!0},color:{type:String,required:!0},text:{type:String,required:!0}},emits:["update:selectedCategory"],setup(e,{emit:S}){const C=e,c=S,i=o({get:()=>C.selectedCategory,set:r=>{c("update:selectedCategory",r)}}),d=r=>r?r.split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1)).join(" "):"";return(r,l)=>(R(),J("div",null,[_(je,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=n=>i.value=n),class:"q-mb-md gt-sm","active-color":e.color,"active-bg-color":e.color,"text-color":e.color,"inactive-color":e.color,align:"justify"},{default:le(()=>[_(de,{name:"all",label:r.$t("products.categories.allProducts")},null,8,["label"]),(R(!0),J(ne,null,Te(e.categories,n=>(R(),ae(de,{key:n,name:n,label:d(n)},null,8,["name","label"]))),128))]),_:1},8,["modelValue","active-color","active-bg-color","text-color","inactive-color"]),_(Ct,{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=n=>i.value=n),options:["all",...e.categories],class:"q-my-md lt-md",color:e.color,"text-color":e.text,label:r.$t("products.selectCategory"),outlined:"","option-label":n=>n==="all"?r.$t("products.categories.allProducts"):d(n)},null,8,["modelValue","options","color","text-color","label","option-label"])]))}}),Ut=ve({__name:"ProductTabs",props:{selectedCategory:{type:String,required:!0},scrollOffset:{type:Number,default:0},categories:{type:Array,required:!0}},emits:["update:selectedCategory"],setup(e,{emit:S}){const C=e,c=ke("scrollToTop"),i=S,d=Qe(),r=T(!1),l=T(C.selectedCategory),n=o(()=>({stickyBgColor:d.dark.isActive?"q-dark":"q-light-lighter",activeBgColor:(d.dark.isActive,"white"),activeTextColor:d.dark.isActive?"dark":"black",backgroundColor:d.dark.isActive?"white":"black",textColor:d.dark.isActive?"black":"white"}));G(()=>C.scrollOffset,m=>{r.value=m>0},{immediate:!0}),G(()=>C.selectedCategory,m=>{m!==l.value&&(l.value=m)}),G(()=>l.value,m=>{i("update:selectedCategory",m),c()});const I=m=>m.split(" ").map(V=>V.charAt(0).toUpperCase()+V.slice(1)).join(" ");return(m,V)=>(R(),J("div",{class:xt(["sticky tw-transition-all tw-duration-300",r.value&&`tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-z-50 tw-px-3 tw-shadow-md !tw-py-0 tw-bg-${n.value.stickyBgColor}`])},[_(je,{modelValue:l.value,"onUpdate:modelValue":V[0]||(V[0]=h=>l.value=h),"indicator-color":"transparent",class:"gt-sm !tw-max-w-screen-xl tw-mx-auto","active-color":n.value.activeTextColor,"active-bg-color":n.value.activeBgColor,"text-color":n.value.backgroundColor,"inactive-color":n.value.textColor,align:"justify"},{default:le(()=>[_(de,{name:"all",label:m.$t("products.categories.allProducts")},null,8,["label"]),(R(!0),J(ne,null,Te(e.categories,h=>(R(),ae(de,{key:h,name:h,label:I(h)},null,8,["name","label"]))),128))]),_:1},8,["modelValue","active-color","active-bg-color","text-color","inactive-color"]),_(Ot,{"selected-category":l.value,"onUpdate:selectedCategory":V[1]||(V[1]=h=>l.value=h),categories:e.categories,color:n.value.backgroundColor,text:n.value.textColor,class:"q-my-md lt-md"},null,8,["selected-category","categories","color","text"])],2))}}),zt={class:"tw-font-serif"},Kt={class:"tw-container tw-mx-auto tw-mb-8 grid justify-center"},Wt={class:"tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-4"},ue=10,Zt=ve({__name:"ProductsPage",props:{scrollOffset:{type:Number,required:!0}},setup(e){const S=ke("scrollToTop"),C=kt(),c=Qe(),i=Tt(),d=$t(),{t:r}=St(),l=T([]),n=T(1),I=T("all"),m=T([]),V=T(!0),h=o(()=>({activeTextColor:c.dark.isActive?"dark":"black",backgroundColor:c.dark.isActive?"white":"black",textColor:c.dark.isActive?"black":"white",paginationColor:c.dark.isActive?"light":"dark",paginationTextColor:c.dark.isActive?"white":"black",paginationActiveColor:c.dark.isActive?"white":"dark",paginationActiveTextColor:c.dark.isActive?"black":"white"})),P=o(()=>l.value.length?I.value==="all"?l.value:l.value.filter(v=>v.category===I.value):[]),q=o(()=>P.value.slice((n.value-1)*ue,n.value*ue)),D=o(()=>Math.ceil(l.value.length/ue)),F=v=>{C.addItem({...v,quantity:1}),c.notify({color:"positive",position:"top",timeout:1e3,message:r("products.itemAdded"),icon:"check_circle"})},N=v=>{i.push(`/products/${v.id}`)},Q=async v=>{I.value=v,n.value=1,await p(v)},g=async()=>{try{if(V.value=!0,d.isCategoryCacheValid()){const w=d.getCategoryCache();if(w){m.value=w.categories;return}}const v=await fetch("https://e-comm-backend-16bba1769344.herokuapp.com/products/categories");if(!v.ok){if(console.warn(`API returned ${v.status} for categories`),m.value.length)return;m.value=["all"];return}m.value=await v.json(),d.setCategoryCache(m.value)}catch(v){console.error("Error fetching categories:",v)}finally{V.value=!1}},p=async(v="all")=>{c.loading.show();try{const w=v!=="all"?`product_${v}`:v;if(d.isCacheValid(w)){const X=d.getCache(w);if(X){l.value=X.products;return}}const A=await fetch(`https://e-comm-backend-16bba1769344.herokuapp.com/products${v!=="all"?`/category/${v}`:""}`);if(!A.ok)throw new Error(`API returned ${A.status}`);const B=await A.json();l.value=B,d.setCache(B,w)}catch(w){console.error("Error fetching products:",w)}finally{c.loading.hide()}};return Fe(()=>{g(),p()}),(v,w)=>(R(),ae(pt,{padding:"",class:"!tw-pb-16 !tw-pt-4"},{default:le(()=>[H("h5",zt,te(v.$t("products.title")),1),_(Ut,{"selected-category":I.value,categories:m.value,"scroll-offset":e.scrollOffset,"onUpdate:selectedCategory":Q},null,8,["selected-category","categories","scroll-offset"]),_(Pt,{class:"q-my-md"}),H("div",Kt,[H("div",Wt,[(R(!0),J(ne,null,Te(q.value,A=>(R(),ae(Dt,{key:A.id,product:A,color:h.value.backgroundColor,text:h.value.textColor,onAddToCart:F,onViewProduct:N},null,8,["product","color","text"]))),128))])]),l.value.length>ue?(R(),ae(Bt,{key:0,modelValue:n.value,"onUpdate:modelValue":[w[0]||(w[0]=A=>n.value=A),se(S)],max:D.value,"boundary-numbers":"",class:"tw-py-8 tw-flex tw-justify-center tw-items-center !tw-gap-8",color:h.value.paginationColor,"text-color":h.value.paginationTextColor,"active-color":h.value.paginationActiveColor,"active-text-color":h.value.paginationActiveTextColor},null,8,["modelValue","max","color","text-color","active-color","active-text-color","onUpdate:modelValue"])):qt("",!0)]),_:1}))}});export{Zt as default};
