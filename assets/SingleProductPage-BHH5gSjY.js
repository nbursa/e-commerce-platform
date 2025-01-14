import{Q as X,f as _}from"./currencyUtils-C2wttvuy.js";import{S as ae,aE as se,ac as le,aa as ne,ab as ie,ad as ce,r as n,l as b,e as re,aF as ue,U as k,V as de,W as p,Z as a,a5 as Y,$ as w,X as i,_ as r,ai as P,Y as ve,a0 as j,a2 as z,a4 as C,aj as me,a3 as pe,a6 as fe,aG as he,a7 as ge,aH as we}from"./index-CEo6vkoH.js";import{Q as ye}from"./QPage-CeufyC3G.js";import{u as xe}from"./products-D6yfAySs.js";import"./rates-CK7iJZgx.js";const _e={class:"q-mb-md q-mx-auto overflow-hidden",style:{"max-width":"1200px"}},be={class:"col-12 col-md-4 q-py-lg tw-transition tw-duration-200 tw-ease-in-out hover:tw-scale-105"},ke={class:"col-12 col-md-8 sm:tw-p-3 !tw-align-top",style:{display:"flex","flex-direction":"column","flex-grow":"0",height:"auto","min-height":"100%"}},Pe={class:"tw-flex tw-justify-start tw-gap-2"},Ce={class:"tw-text-sm tw-mb-2"},qe={class:"tw-text-xs"},Te={class:"text-caption q-mt-sm"},$e={class:"q-mt-sm text-bold price-text"},Se={class:"text-grey"},Ee={class:"text-positive q-ml-sm"},Qe={class:"row justify-center q-mt-xl"},Ie={class:"row justify-between items-center q-mb-md"},Ve={class:"text-caption tw-font-black"},Ue=ae({__name:"SingleProductPage",setup(Le){const{getVerticalScrollPosition:B}=we,U="https://e-comm-backend-16bba1769344.herokuapp.com",A=se(),q=le(),u=ne(),M=ie(),{t:N}=ce(),T=xe(),o=n({id:0,title:"",name:"",price:0,quantity:0,description:"",category:"",image:"",rating:{rate:0,count:0}}),Z=n(!1),f=n(!1),$=n(""),s=n(!1),d=n(!1),h=n(0),g=n(0),v=n(0),m=n(0),S=b(()=>u.dark.isActive?"white":"black"),E=b(()=>u.dark.isActive?"black":"white"),Q=e=>e,D=b(()=>({transform:`translate(${v.value}px, ${m.value}px) scale(${s.value?2:1})`})),F=()=>{window.scrollTo({top:0,behavior:"smooth"})},H=e=>{M.addItem({...e,quantity:1}),F(),u.notify({color:"positive",position:"top",timeout:1e3,message:N("singleProduct.itemAdded"),icon:"check_circle"})},O=e=>{$.value=e,f.value=!0,s.value=!1},I=()=>{s.value?R():s.value=!0},R=()=>{s.value=!1,v.value=0,m.value=0},G=e=>{if(!s.value){I();return}d.value=!0,h.value=e.clientX-v.value,g.value=e.clientY-m.value},W=e=>{d.value=!0;const t=e.touches[0];t&&(h.value=t.clientX-v.value,g.value=t.clientY-m.value,document.addEventListener("touchmove",y),document.addEventListener("touchend",x))},y=e=>{if(!s.value||!d.value)return;const t=e.touches[0];t&&(v.value=(t.clientX-h.value)*-1,m.value=(t.clientY-g.value)*-1)},J=e=>{!s.value||!d.value||(v.value=(e.clientX-h.value)*-1,m.value=(e.clientY-g.value)*-1)},K=()=>{s.value&&(d.value=!1)},x=()=>{if(!s.value){s.value=!0;return}d.value=!1,document.removeEventListener("touchmove",y),document.removeEventListener("touchend",x)},ee=()=>{q.push("/products")},te=async()=>{const{slug:e}=A.params;u.loading.show();try{const t=T.getCache("viewed");if(t){const L=t.products.find(oe=>oe.id===Number(e));if(L){o.value=L;return}}const c=await fetch(`${U}/products/${e}`);if(!c.ok)throw new Error(`API returned ${c.status}`);const l=await c.json();o.value={id:l.id,name:l.name,title:l.title,price:l.price,description:l.description,image:l.image,category:l.category,discount:l.discount||0,discountedPrice:l.price-l.price*(l.discount||10)/100,quantity:l.quantity,rating:l.rating},T.setCache([o.value],"viewed")}catch(t){console.warn("Error fetching product:",t),u.notify({color:"negative",position:"top",timeout:1e3,message:"Failed to fetch product details.",icon:"error"}),o.value.id||q.push("/products")}finally{u.loading.hide()}},V=()=>{const e=B(window);Z.value=e>0};return re(()=>{te(),window.addEventListener("scroll",V)}),ue(()=>{window.removeEventListener("scroll",V)}),(e,t)=>(k(),de(ye,{padding:""},{default:p(()=>[a("div",_e,[a("div",{class:Y(["row items-stretch full-height",{"col-reverse-md":w(u).screen.md}])},[a("div",be,[i(X,{src:Q(o.value.image),alt:o.value.name,fit:"contain",class:"cursor-pointer full-width full-height",onClick:t[0]||(t[0]=c=>O(o.value.image))},null,8,["src","alt"])]),a("div",ke,[i(ve,{class:"q-pa-sm !tw-pb-0",style:{flex:"1",display:"flex","flex-direction":"column",height:"100%"}},{default:p(()=>[a("h5",Pe,[a("span",null,r(o.value.name||o.value.title),1),a("span",Ce,[P("("+r(o.value.quantity)+" ",1),a("span",qe,r(e.$t("singleProduct.quantity")),1),t[4]||(t[4]=P(")"))])]),a("div",Te,r(o.value.description),1)]),_:1}),i(pe,{align:"right",class:"row justify-between items-end !tw-pt-0"},{default:p(()=>[a("div",$e,[o.value.discount?(k(),j(z,{key:0},[a("s",Se,r(w(_)(o.value.price)),1),a("span",Ee,r(w(_)(o.value.discountedPrice||o.value.price)),1)],64)):(k(),j(z,{key:1},[P(r(w(_)(o.value.price)),1)],64))]),i(C,{color:S.value,"text-color":E.value,label:e.$t("singleProduct.addToCart"),class:"!tw-p-4 full-width",onClick:t[1]||(t[1]=me(c=>H(o.value),["stop"]))},null,8,["color","text-color","label"])]),_:1})])],2)]),a("div",Qe,[i(C,{color:S.value,"text-color":E.value,label:e.$t("singleProduct.backToProducts"),onClick:ee},null,8,["color","text-color","label"])]),i(ge,{modelValue:f.value,"onUpdate:modelValue":t[3]||(t[3]=c=>f.value=c),maximized:""},{default:p(()=>[i(fe,{class:"q-pa-md overlay",style:{width:"100vw",height:"100vh",overflow:"hidden"}},{default:p(()=>[a("div",Ie,[a("div",Ve,r(o.value.name),1),i(C,{flat:"",dense:"",round:"",icon:"close",onClick:t[2]||(t[2]=c=>f.value=!1)})]),i(X,{src:Q(o.value.image),alt:$.value,class:Y(["zoomable-image tw-cursor-pointer",{"zoom-in":s.value,"zoom-out":!s.value}]),style:he([{"max-width":"100%","max-height":"100%"},D.value]),fit:"contain",onClick:I,onMouseenter:G,onMousemove:J,onMouseleave:K,onTouchstart:W,onTouchmove:y,onTouchend:x},null,8,["src","alt","class","style"])]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{Ue as default};
