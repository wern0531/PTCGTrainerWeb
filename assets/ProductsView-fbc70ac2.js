import{_ as b,a as L,c as d,e as u,w as h,b as t,n as l,l as P,t as p,q as g,F as m,j as k,d as E,r as _,o as c,s as V,p as I,f as T}from"./index-4b4748a2.js";import{c as S}from"./cart-c9ffaf2d.js";import{S as y}from"./sweetalert2.all-28b54dfb.js";import{P as B}from"./PaginationView-f926aa3f.js";import{_ as R}from"./pikachu_gif-e9cb6898.js";const{VITE_URL:f,VITE_PATH:x}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/production-sub-path/",MODE:"production",DEV:!1,PROD:!0},$={data(){return{isLoading:!1,products:[],productCategory:[],category:"",pagination:{},page:1}},methods:{...L(S,["addToCart"]),getProducts(s=1,e="全部商品"){this.isLoading=!0,this.page=s,this.category=e,this.$http.get(`${f}/v2/api/${x}/products/?page=${s}`).then(n=>{this.products=n.data.products,this.pagination=n.data.pagination,e==="全部商品"?(this.productCategory=this.products,this.isLoading=!1):this.getCategory(e)}).catch(n=>{this.isLoading=!1,y.fire({icon:"error",title:"Oops...",text:`${n}.response.data.message`})})},getCategory(s){this.$http.get(`${f}/v2/api/${x}/products/all`).then(e=>{this.productCategory=[],e.data.products.forEach(n=>{n.category===s&&this.productCategory.push(n)}),this.isLoading=!1}).catch(e=>{this.isLoading=!1,y.fire({icon:"error",title:"Oops...",text:`${e}.response.data.message`})})}},components:{Pagination:B},mounted(){this.category=this.$route.params.category,this.getProducts(void 0,this.category)}},r=s=>(I("data-v-3e950ddb"),s=s(),T(),s),N=r(()=>t("div",{class:"loadingGif"},[t("img",{src:R,alt:"會動的皮卡丘過場圖"})],-1)),A={class:"container"},D={class:"row d-flex flex-column flex-lg-row"},O={class:"col-lg-3"},U={class:"w-100 pt-3 text-center d-flex flex-column productBtnList"},j=r(()=>t("p",null,"全部商品",-1)),z=[j],F=r(()=>t("p",null,"單卡",-1)),H=[F],M=r(()=>t("p",null,"牌組",-1)),q=[M],G=r(()=>t("p",null,"禮盒",-1)),W=[G],J=r(()=>t("p",null,"周邊",-1)),K=[J],Q={class:"col-lg-9"},X={class:"pt-3 d-flex justify-content-center justify-content-lg-start text-white"},Y={key:0},Z={class:"row productCardWrap"},tt={class:"pt-3 card productCard"},et={class:"text-center"},ot=["src"],st={class:"py-3",style:{width:"176px",margin:"0 auto"}},it={class:"pb-3 text-start text-white"},nt={class:"pb-3 text-start text-white"},rt=["onClick"],at=r(()=>t("p",null,"加入購物車",-1)),ct=[at];function dt(s,e,n,lt,i,a){const v=_("LoadingItem"),C=_("RouterLink"),w=_("Pagination");return c(),d(m,null,[u(v,{active:i.isLoading,"z-index":1060},{default:h(()=>[N]),_:1},8,["active"]),t("div",A,[t("div",D,[t("div",O,[t("ul",U,[t("li",{type:"button",class:"btn text-myColor productsList",onClick:e[0]||(e[0]=o=>a.getProducts("全部商品"))},z),t("li",{type:"button",class:l(["btn border-white productList",i.category==="單卡"?"text-myColor":"text-white"]),onClick:e[1]||(e[1]=o=>a.getProducts(void 0,"單卡"))},H,2),t("li",{type:"button",class:l(["btn border-white productList",i.category==="牌組"?"text-myColor":"text-white"]),onClick:e[2]||(e[2]=o=>a.getProducts(void 0,"牌組"))},q,2),t("li",{type:"button",class:l(["btn border-white productList",i.category==="禮盒"?"text-myColor":"text-white"]),onClick:e[3]||(e[3]=o=>a.getProducts(void 0,"禮盒"))},W,2),t("li",{type:"button",class:l(["btn border-white productList",i.category==="周邊"?"text-myColor":"text-white"]),onClick:e[4]||(e[4]=o=>a.getProducts(void 0,"周邊"))},K,2)])]),t("div",Q,[t("div",X,[P(" 全部商品 "),i.category!=="全部商品"?(c(),d("div",Y,"/"+p(i.category),1)):g("",!0)]),t("div",Z,[(c(!0),d(m,null,k(i.productCategory,o=>(c(),d("div",{class:"col-lg-4 p-3",key:o.id},[t("div",tt,[u(C,{to:`/product/${o.id}`,class:"hover-pointer text-decoration-none"},{default:h(()=>[t("div",et,[t("img",{style:{"max-width":"70%",height:"auto"},src:o.imageUrl,class:"card-img-top",alt:"..."},null,8,ot)]),t("div",st,[t("div",it,p(o.title),1),t("div",nt," NT$ "+p(o.price),1)]),t("button",{class:"btn text-myColor productBtn",onClick:V(pt=>s.addToCart(o.id,o.title),["prevent"])},ct,8,rt)]),_:2},1032,["to"])])]))),128))]),i.category=="全部商品"?(c(),E(w,{key:0,pages:i.pagination,onEmitPages:a.getProducts},null,8,["pages","onEmitPages"])):g("",!0)])])])],64)}const yt=b($,[["render",dt],["__scopeId","data-v-3e950ddb"]]);export{yt as default};