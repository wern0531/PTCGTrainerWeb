import{_ as f,a as y,c as a,e as x,w,b as t,t as c,v as C,x as I,q as _,f as n,F as h,l as P,r as T,o as u,p as L,g as V}from"./index-7ba7e1c6.js";import{c as k}from"./cart-c5e699fb.js";import{S as p}from"./sweetalert2.all-e9be79ae.js";import{_ as D}from"./pikachu_gif-ecacffd9.js";const{VITE_URL:m,VITE_PATH:g}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{isLoading:!1,qty:1,products:[],product:{},category:"",loadingItem:""}},methods:{...y(k,["addToCart"]),getProducts(e){this.products=[],this.$http.get(`${m}/v2/api/${g}/products/all`).then(o=>{o.data.products.forEach(d=>{d.category===e&&d.id!==this.product.id&&this.products.push(d)})}).then(this.isLoading=!1).catch(o=>{this.isLoading=!1,p.fire({icon:"error",title:"Oops...",text:`${o.response.data.message}`})})},getProduct(){this.isLoading=!0;const{id:e}=this.$route.params;this.$http.get(`${m}/v2/api/${g}/product/${e}`).then(o=>{this.product=o.data.product,this.category=this.product.category,this.getProducts(this.category)}).catch(o=>{this.isLoading=!1,p.fire({icon:"error",title:"Oops...",text:`${o.response.data.message}`})})},changeProduct(e){this.$router.push(`/product/${e}`).then(()=>{this.getProduct()})}},computed:{filteredProducts(){return this.products.slice(0,4)},isDisable(){return this.$pinia.state.value.cart.isDisable}},mounted(){this.getProduct()}},r=e=>(L("data-v-0d93c6c0"),e=e(),V(),e),S=r(()=>t("div",{class:"loadingGif"},[t("img",{src:D,alt:"會動的皮卡丘過場圖"})],-1)),q={class:"container pt-5"},B={class:"pt-5 d-flex flex-column flex-lg-row align-items-center"},U={class:"mainImg"},A=["src"],M={class:"ms-5 mt-3 mt-md-0 text-start"},N={class:"my-4"},O={class:"row mb-4"},R=r(()=>t("div",{class:"col-4"},"商品說明:",-1)),z={class:"col-8"},F={class:"row"},G=r(()=>t("div",{class:"col-4"},"商品描述:",-1)),H={class:"col-8"},W={class:"row mt-4 align-items-end"},$={class:"col-5 col-lg-6"},j={class:"input-group"},J=["disabled"],K=["disabled"],Q={class:"col-5 col-lg-4"},X=r(()=>t("div",{class:"text-start my-4"},[n(" 本網站商品皆為正版"),t("br"),n(" 為保障你我權益，貨到拆封請全程錄影"),t("br"),n(" 商品於七日內附上影片方可退貨 ")],-1)),Y={class:"my-4 text-center"},Z=r(()=>t("br",null,null,-1)),tt=r(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-down-short",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"})],-1)),st={class:"row d-flex flex-column flex-lg-row align-items-center"},ot=["onClick"],et=["src"],it={class:"mt-2"},ct={class:"mt-2"},rt=["onClick"];function dt(e,o,d,lt,s,l){const v=T("LoadingItem");return u(),a(h,null,[x(v,{active:s.isLoading,"z-index":1060},{default:w(()=>[S]),_:1},8,["active"]),t("div",q,[t("div",B,[t("div",U,[t("img",{style:{width:"100%"},src:s.product.imageUrl,alt:"單一產品圖片"},null,8,A)]),t("div",M,[t("h1",null,c(s.product.title),1),t("div",N,"NT$ "+c(s.product.price),1),t("div",O,[R,t("div",z,c(s.product.content),1)]),t("div",F,[G,t("div",H,c(s.product.description),1)]),t("div",W,[t("div",$,[t("div",j,[t("button",{class:"btn btn-outline-secondary",type:"button",onClick:o[0]||(o[0]=i=>s.qty>1?s.qty-=1:null),disabled:s.product.id===s.loadingItem}," - ",8,J),C(t("input",{type:"text",class:"form-control text-center","onUpdate:modelValue":o[1]||(o[1]=i=>s.qty=i),min:"0",disabled:""},null,512),[[I,s.qty,void 0,{number:!0}]]),t("button",{class:"btn btn-outline-secondary",type:"button",onClick:o[2]||(o[2]=i=>s.qty+=1),disabled:s.product.id===s.loadingItem}," + ",8,K)])]),t("div",Q,[t("button",{class:_([{disabled:l.isDisable},"btn btn-myBgMain text-myColor border-myColor"]),onClick:o[3]||(o[3]=i=>e.addToCart(s.product.id,s.product.title))}," 加入購物車 ",2)])])])]),X,t("div",Y,[n(" 選購更多"+c(s.product.category)+" ",1),Z,tt]),t("div",st,[(u(!0),a(h,null,P(l.filteredProducts,i=>(u(),a("div",{class:"col-lg-3 moreImg",key:i.id},[t("div",{class:"hover",style:{cursor:"pointer"},onClick:b=>l.changeProduct(i.id)},[t("img",{class:"w-100",src:i.imageUrl,alt:"更多產品圖片"},null,8,et)],8,ot),t("div",it,c(i.title),1),t("div",ct,[t("button",{class:_([{disabled:l.isDisable},"btn btn-myBgMain text-myColor border-myColor"]),onClick:b=>e.addToCart(i.id,i.title)}," 加入購物車 ",10,rt)])]))),128))])])],64)}const ht=f(E,[["render",dt],["__scopeId","data-v-0d93c6c0"]]);export{ht as default};