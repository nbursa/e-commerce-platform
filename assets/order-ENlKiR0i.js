import{b0 as c,r as a,b1 as o}from"./index-Cw1-6oTs.js";const u=c("order",()=>{const e=a({shipping:{firstName:"",lastName:"",email:"",address:""},payment:{method:"card",cardDetails:{cardNumber:"",expiry:"",cvv:""}}}),s=a([]),d=r=>{e.value.shipping=r,t()},i=r=>{e.value.payment=r??{method:"card",cardDetails:{cardNumber:"",expiry:"",cvv:""}},t()},m=()=>{const r=o.get("orderForm");r&&(e.value=r)},t=()=>{o.set("orderForm",e.value,{version:"1.0"})};return{orderForm:e,orderHistory:s,setShippingForm:d,setPaymentForm:i,loadOrder:m,clearOrderForm:()=>{e.value={shipping:{firstName:"",lastName:"",email:"",address:""},payment:{method:"card",cardDetails:{cardNumber:"",expiry:"",cvv:""}}},o.remove("orderForm")},storeOrder:t,addOrderToHistory:r=>{s.value.push(r),o.set("orderHistory",s.value,{version:"1.0"})},loadOrderHistory:()=>{const r=o.get("orderHistory");r&&(s.value=r)}}});export{u};
