import{I as W,aa as J,ab as X,A as u,K as _,a5 as Q,M as Y,a3 as Z,b6 as g,aN as tt,aM as et,b7 as at,b8 as A,d as st,a7 as ot,g as lt,f as nt,c as it,ak as rt,e as ct,b5 as ut,r as S,b9 as dt,o as wt,j as c,k as N,w as y,z as f,m as w,ba as mt,l as o,t as i,ao as ft,G as vt,B as k,y as pt,ai as T,q as gt,D as ht,F as V,Q as z,v as bt,aB as xt,aW as E}from"./index-Cw1-6oTs.js";import{Q as _t}from"./QImg-C51as6M5.js";import{Q as yt}from"./QPage-crSimVfK.js";import{f as j}from"./currency-CNDhzamw.js";import{u as kt}from"./products-WnF0YImY.js";import"./rates-BvmdyCoH.js";const Ct=W({name:"QBanner",props:{...J,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(n,{slots:l}){const{proxy:{$q:m}}=Y(),v=X(n,m),h=u(()=>"q-banner row items-center"+(n.dense===!0?" q-banner--dense":"")+(v.value===!0?" q-banner--dark q-dark":"")+(n.rounded===!0?" rounded-borders":"")),r=u(()=>`q-banner__actions row items-center justify-end col-${n.inlineActions===!0?"auto":"all"}`);return()=>{const p=[_("div",{class:"q-banner__avatar col-auto row items-center self-start"},Q(l.avatar)),_("div",{class:"q-banner__content col text-body2"},Q(l.default))],d=Q(l.action);return d!==void 0&&p.push(_("div",{class:r.value},d)),_("div",{class:h.value+(n.inlineActions===!1&&d!==void 0?" q-banner--top-padding":""),role:"alert"},p)}}});function It(n){{const l={active:!0};if(typeof n=="function"){const m=u(n);l.val=m.value,Z(m,v=>{l.val=v,l.active===!0&&g()})}else l.val=n;A.push(l),g(),tt(()=>{l.active=!0,g()}),et(()=>{l.active=!1,g()}),at(()=>{A.splice(A.indexOf(l),1),g()})}}const Pt={key:0,class:"tw-p-4"},qt={key:1,class:"tw-p-4"},$t={key:2,class:"tw-flex tw-w-full tw-mx-auto tw-flex-col tw-justify-center tw-items-center tw-gap-3",style:{"max-width":"1200px"}},Bt={class:"tw-flex tw-w-full !tw-flex-col tw-items-baseline !tw-justify-between sm:!tw-justify-start md:tw-mb-8"},Qt={class:"tw-text-3xl tw-mt-4 tw-font-semibold tw-font-serif tw-mr-4"},At={class:"tw-text-base"},St={class:"tw-flex !tw-flex-col !tw-w-full tw-gap-4 sm:!tw-flex-row"},Tt={class:"tw-col-span-12 sm:!tw-col-span-6 tw-w-full tw-px-0 tw-transition tw-duration-500 tw-ease-in-out hover:tw-scale-105"},jt={key:1,class:"tw-h-full tw-w-full tw-relative"},Ut={class:"tw-col-span-12 sm:!tw-col-span-6 tw-w-full tw-flex tw-flex-col tw-flex-grow-0 tw-h-auto tw-min-h-full sm:!tw-py-0 !tw-align-top"},Dt={class:"!tw-w-full tw-flex tw-font-serif tw-justify-end tw-gap-2"},Nt={class:"tw-text-sm tw-mb-2"},Vt={class:"tw-text-xs"},zt={class:"tw-text-base"},Et={class:"text-bold tw-text-xl tw-pb-5"},Mt={class:"tw-text-gray-500 tw-mr-1 tw-text-base tw-line-through"},Ft={class:"tw-text-green-600"},Lt={class:"tw-w-full tw-flex tw-justify-between tw-gap-4"},Jt=st({__name:"SingleProductPage",setup(n){const l=ot("scrollToTop"),m="https://e-comm-api-8eba0f6c8782.herokuapp.com/api".replace(/\/$/,""),v=lt(),h=nt(),r=it(),p=rt(),{t:d}=ct(),C=kt(),I=ut(),{slug:U}=v.params,t=S(null),b=S(!0),P=S(null),D=u(()=>r.dark.isActive),q=u(()=>r.dark.isActive?"white":"black"),$=u(()=>r.dark.isActive?"black":"white"),M=u(()=>`${t.value?.name||t.value?.title||""} - ${dt}`),F=u(()=>p.items.some(a=>a.id===t.value?.id)),B=a=>{if(!a)return"";const s=`${m}${a}`,e=I.getCachedImageUrl(s);return e||(I.cacheImageUrl(s),s)},L=u(()=>t.value?.image?B(t.value.image):""),R=a=>{const s=[{src:B(a),name:t.value?.name||t.value?.title||""}];if(t.value&&t.value.additionalImages?.length){const e=t.value.additionalImages.map(x=>({src:B(x),name:t.value&&(t.value.name||t.value.title)||""}));s.push(...e)}I.openPreview(s)},G=a=>{p.addItem({...a,quantity:1}),l(),r.notify({color:"positive",position:"top",timeout:1e3,message:d("singleProduct.itemAdded"),icon:"check_circle"})},H=()=>{h.back()},K=async()=>{b.value=!0,r.loading.show();try{C.initViewedCache();const a=C.getViewedCache();if(a){const x=a.products.find(O=>O.id===Number(U));if(x){t.value=x,b.value=!1;return}}const s=await xt.get(`${m}${E}/${U}`);if(s.status!==200)throw new Error("Failed to fetch product");const{data:e}=s.data;t.value={id:e.id,name:e.name,title:e.title||e.name,price:Number(e.price),description:e.description,image:e.image,additionalImages:e.additionalImages||[],category:e.category,discount:e.discount||0,discountedPrice:e.price-e.price*(e.discount||10)/100,quantity:e.quantity||0,rating:e.rating||{rate:0,count:0}},C.setViewedCache(t.value)}catch(a){console.warn("Error fetching product:",a),P.value=d("errors.fetchProduct"),r.notify({color:"negative",position:"top",timeout:1e3,message:d("errors.fetchProduct"),icon:"error"}),(!t.value||!t.value.id)&&h.push(E)}finally{r.loading.hide(),b.value=!1}};return wt(()=>{K(),It({title:M.value})}),(a,s)=>(c(),N(yt,{padding:"",class:"!tw-pb-16 md:!tw-pb-24 !tw-pt-4 !tw-px-3"},{default:y(()=>[b.value?(c(),f("div",Pt,[w(mt,{color:$.value,size:"50px"},null,8,["color"])])):P.value?(c(),f("div",qt,[w(Ct,{type:"negative",class:"q-mb-md"},{default:y(()=>[o("div",null,i(P.value),1)]),_:1})])):(c(),f("div",$t,[o("div",Bt,[o("span",Qt,i(t.value?.name),1),o("span",At,i(t.value?.category),1)]),w(ft),o("div",St,[o("div",Tt,[t.value?.image?(c(),f("div",jt,[w(pt,{name:"zoom_out_map",color:q.value,size:"lg",class:"tw-flex tw-items-center tw-justify-center !tw-absolute tw-bottom-0 tw-right-0 tw-m-2 tw-cursor-pointer tw-z-10"},null,8,["color"]),w(_t,{src:L.value,alt:t.value.name,fit:"contain",class:"cursor-pointer full-width full-height !tw-rounded-md",onClick:s[0]||(s[0]=e=>R(t.value.image))},null,8,["src","alt"])])):(c(),f("div",{key:0,class:vt(["tw-h-full tw-w-full tw-flex tw-items-center tw-justify-center tw-rounded 0 tw-border tw-border-gray-400 tw-pb-2",D.value?"tw-text-gray-200  !tw-bg-gray-700":"tw-text-gray-70 !tw-bg-gray-200"])},i(k(d)("errors.noImage")),3))]),o("div",Ut,[o("h5",Dt,[o("span",Nt,[T("("+i(t.value?.quantity)+" ",1),o("span",Vt,i(a.$t("singleProduct.quantity")),1),s[2]||(s[2]=T(")"))])]),w(gt,{class:"tw-flex tw-flex-col tw-flex-1 tw-h-full !tw-px-0"},{default:y(()=>[o("div",zt,i(t.value?.description),1)]),_:1}),w(ht,{class:"!tw-flex !tw-justify-between !tw-items-end tw-gap-2 !tw-p-0"},{default:y(()=>[o("div",Et,[t.value?.discount?(c(),f(V,{key:0},[o("span",Mt,i(k(j)(t.value?.price)),1),o("span",Ft,i(k(j)(t.value?.discountedPrice||t.value?.price)),1)],64)):(c(),f(V,{key:1},[T(i(t.value?.price!==void 0?k(j)(t.value.price):""),1)],64))]),o("div",Lt,[w(z,{color:$.value,"text-color":q.value,outline:D.value,label:a.$t("singleProduct.goBack"),"class-name":"tw-flex-1 tw-basis-1/3 !tw-py-2.5",onClick:H},null,8,["color","text-color","outline","label"]),F.value?bt("",!0):(c(),N(z,{key:0,color:q.value,"text-color":$.value,label:a.$t("singleProduct.addToCart"),"class-name":"tw-flex-1 tw-basis-2/3 !tw-py-2.5",onClick:s[1]||(s[1]=e=>t.value&&G(t.value))},null,8,["color","text-color","label"]))])]),_:1})])])]))]),_:1}))}});export{Jt as default};
