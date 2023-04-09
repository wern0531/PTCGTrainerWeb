import{_ as f,a as y,R as x,c as a,b as t,n as r,F as w,j as C,e as h,w as k,t as p,q as S,r as m,o as _,u as V,v as P,p as I,f as T}from"./index-49a2e4fd.js";import{c as R}from"./cart-a469b9bb.js";import{S as g}from"./sweetalert2.all-9472f5c7.js";const D="/production-sub-path/assets/town_league-efac9861.png",E="/production-sub-path/assets/regional_league-4b79f9c4.png",B="/production-sub-path/assets/championships-075c3d46.png",q="/production-sub-path/assets/wcs-4667db09.png";const{VITE_URL:L,VITE_PATH:O}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/production-sub-path/",MODE:"production",DEV:!1,PROD:!0},U={data(){return{carts:[],loadingItem:"",currentPath:"/cart"}},methods:{...y(R,["getCarts","delCart"]),updateQty(e,i,l,u){let n={};u==="add"?n={product_id:e,qty:i+=1}:u==="reduce"&&(n={product_id:e,qty:i-=1}),this.loadingItem=e,this.$http.put(`${L}v2/api/${O}/cart/${l}`,{data:n}).then(o=>{this.getCarts(),this.loadingItem=""}).catch(o=>{g.fire({icon:"error",title:"Oops...",text:`${o}.response.data.message`})})},calculateFinalTotal(e){return e.reduce((i,l)=>i+l.total,0)},nextStep(){this.$router.push("/cart/information")},isCurrentPath(e){return this.currentPath.includes(e)}},computed:{cartsData(){return this.$pinia.state.value.cart.carts}},watch:{$route:function(e,i){this.currentPath=e.path},cartsData:function(e){this.$route.path==="/cart"&&e.length===0&&g.fire({icon:"warning",title:"Oops...",text:"您的購物車空啦~來去看看其他商品吧!!"}).then(()=>{this.$router.push("/products/全部商品")})}},components:{RouterView:x},mounted(){this.getCarts()}},c=e=>(I("data-v-ccd23d82"),e=e(),T(),e),j={class:"container"},N={class:"row my-5 align-items-stretch"},$={class:"col-lg-3"},A=c(()=>t("div",{class:"d-none d-lg-block"},[t("img",{src:D,alt:""})],-1)),F=c(()=>t("div",{class:"d-flex align-items-center justify-content-center flex-column"}," 商品確認 ",-1)),M=[F],Q={class:"col-lg-3"},H=c(()=>t("div",{class:"d-none d-lg-block"},[t("img",{src:E,alt:""})],-1)),z=c(()=>t("div",{class:"d-flex align-items-center justify-content-center flex-column"}," 填寫資料 ",-1)),G=[z],J={class:"col-lg-3"},K=c(()=>t("div",{class:"d-none d-lg-block"},[t("img",{src:B,alt:""})],-1)),W=c(()=>t("div",{class:"d-flex align-items-center justify-content-center flex-column"}," 確認訂單 ",-1)),X=[W],Y={class:"col-lg-3"},Z=c(()=>t("div",{class:"d-none d-lg-block"},[t("img",{class:"mb-2",src:q,alt:""})],-1)),tt=c(()=>t("div",{class:"d-flex align-items-center justify-content-center flex-column"}," 完成訂單 ",-1)),et=[tt],st={key:0},ot={class:"row p-3 mx-0 mb-2 border border-btnBg rounded-3 d-flex align-items-center"},ct={class:"col-lg-2"},nt=["src"],it={class:"mt-2 mt-lg-0 col-lg-3"},lt={class:"mt-2 mt-lg-0 col-lg-2"},dt={class:"input-group"},at=["onClick","disabled"],rt=["onUpdate:modelValue"],_t=["onClick","disabled"],ut={class:"mt-2 mt-lg-0 col-lg-3"},pt=["onClick"],ht=c(()=>t("span",{type:"button",class:"material-symbols-outlined"}," delete ",-1)),mt=[ht],gt={class:"mt-3 mx-0 row d-flex align-items-center"},vt={class:"col-lg-2"},bt=c(()=>t("div",{class:"material-symbols-outlined"},"arrow_back",-1)),ft=c(()=>t("div",null,"繼續選購",-1)),yt={class:"col-lg-5 d-flex ms-auto align-items-center"},xt={class:"col-lg-6"},wt={class:"col-lg-4 ms-auto"};function Ct(e,i,l,u,n,o){const v=m("RouterLink"),b=m("RouterView");return _(),a("div",j,[t("div",N,[t("div",$,[A,t("div",{class:r(["step mt-3",{nowStep:n.currentPath==="/cart"}])},M,2)]),t("div",Q,[H,t("div",{class:r(["step mt-3",{nowStep:n.currentPath==="/cart/information"}])},G,2)]),t("div",J,[K,t("div",{class:r(["step mt-3",{nowStep:o.isCurrentPath("/cart/checkOrder")}])},X,2)]),t("div",Y,[Z,t("div",{class:r(["step mt-3",{nowStep:n.currentPath==="/cart/completeOrder"}])},et,2)])]),n.currentPath==="/cart"?(_(),a("div",st,[(_(!0),a(w,null,C(o.cartsData,s=>(_(),a("div",{class:"",key:s.id},[t("div",ot,[t("div",ct,[t("img",{style:{width:"100px"},src:s.product.imageUrl,alt:""},null,8,nt)]),t("div",it,p(s.product.title),1),t("div",lt,[t("div",dt,[t("button",{class:"btn btn-outline-secondary",type:"button",onClick:d=>o.updateQty(s.product_id,s.qty,s.id,"reduce"),disabled:s.product.id===n.loadingItem}," - ",8,at),V(t("input",{type:"text",class:"btn form-control text-center","onUpdate:modelValue":d=>s.qty=d,min:"0",disabled:""},null,8,rt),[[P,s.qty,void 0,{number:!0}]]),t("button",{class:"btn btn-outline-secondary",type:"button",onClick:d=>o.updateQty(s.product_id,s.qty,s.id,"add"),disabled:s.product.id===n.loadingItem}," + ",8,_t)])]),t("div",ut,"$NT"+p(s.total),1),t("div",{class:"mt-2 mt-lg-0 col-lg-2 delBtn",onClick:d=>e.delCart(s.id,s.product.title)},mt,8,pt)])]))),128)),t("div",gt,[t("div",vt,[h(v,{type:"button",class:"btn d-flex btn-myBgMain",to:"/products/全部商品"},{default:k(()=>[bt,ft]),_:1})]),t("div",yt,[t("div",xt," 總計: $NT"+p(o.calculateFinalTotal(o.cartsData)),1),t("div",wt,[t("button",{type:"button",class:"btn text-myColor border-myColor btn-hover",onClick:i[0]||(i[0]=(...s)=>o.nextStep&&o.nextStep(...s))},"確認訂單")])])])])):S("",!0),h(b)])}const Pt=f(U,[["render",Ct],["__scopeId","data-v-ccd23d82"]]);export{Pt as default};