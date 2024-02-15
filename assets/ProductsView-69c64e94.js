import{_ as I,r as l,s as S,c as i,d as y,v as A,x as D,b as t,F as h,q as b,e as O,t as f,f as k,A as U,k as v,a as N,o as c,z as C,w as j,u as T,B as z}from"./index-426ce9cf.js";import{c as F}from"./cart-edf45998.js";import{S as g}from"./sweetalert2.all-0b61b168.js";import{_ as H}from"./LoadingComponent-a3f1aa84.js";import{_ as M}from"./PaginationComponent-38110c9b.js";import"./pikachu_gif-ecacffd9.js";const W={class:"container"},q={class:"row w-100 pt-5 d-flex flex-column flex-md-row"},G={class:"col-md-3"},J={class:"p-0 text-center d-flex flex-md-column justify-content-between flex-wrap"},K=["onClick"],Q={class:"col-md-9"},X={class:"p-1 d-flex justify-content-center justify-content-lg-start text-white fs-5 bg-myBgCard"},Y={key:0},Z={class:"row productCardWrap"},ee={class:"card bg-myBgCard productCard overflow-hidden"},te=["src"],ae={class:"p-3"},se={class:"pb-3 text-start text-white"},oe={class:"text-start text-white"},le={class:"d-flex justify-content-center"},ce=["onClick"],ne={__name:"ProductsView",setup(re){const{VITE_URL:d,VITE_PATH:u}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},s=l(!1),n=l(!1),p=l([]),r=l(""),_=l({}),m=l(""),x=F(),{isDisable:V}=S(x),{addToCart:B}=x,w=(o="全部商品")=>{n.value=!1,s.value=!0,r.value=o,o==="全部商品"?v.get(`${d}v2/api/${u}/products`).then(e=>{p.value=e.data.products,_.value=e.data.pagination,m.value=e.data.pagination.total_pages,n.value=!0,s.value=!1}).catch(e=>{s.value=!1,g.fire({backdrop:!1,icon:"error",title:"Oops...",text:`${e.response.data.message}`})}):P(o)};w();const P=o=>{v.get(`${d}v2/api/${u}/products?category=${encodeURIComponent(o)}`).then(e=>{p.value=e.data.products,_.value=e.data.pagination,m.value=e.data.pagination.total_pages,n.value=!0,s.value=!1}).catch(e=>{s.value=!1,g.fire({backdrop:!1,icon:"error",title:"Oops...",text:`${e.response.data.message}`})})},R=o=>{s.value=!0,r.value==="全部商品"?v.get(`${d}v2/api/${u}/products?page=${o}`).then(e=>{window.scrollTo(0,0),_.value=e.data.pagination,p.value=e.data.products,n.value=!0,s.value=!1}).catch(e=>{s.value=!1,g.fire({backdrop:!1,icon:"error",title:"Oops...",text:`${e.response.data.message}`})}):v.get(`${d}v2/api/${u}/products?page=${o}&category=${encodeURIComponent(r.value)}`).then(e=>{window.scrollTo(0,0),_.value=e.data.pagination,p.value=e.data.products,n.value=!0,s.value=!1}).catch(e=>{s.value=!1,g.fire({backdrop:!1,icon:"error",title:"Oops...",text:`${e.response.data.message}`})})},$=l([]);return(()=>{v.get(`${d}v2/api/${u}/products/all`).then(o=>{$.value=["全部商品",...new Set(o.data.products.map(e=>e.category))]})})(),(o,e)=>{const E=N("RouterLink");return c(),i(h,null,[y(H,{"is-loading":s.value},null,8,["is-loading"]),A(t("div",W,[t("div",q,[t("div",G,[t("ul",J,[(c(!0),i(h,null,b($.value,a=>(c(),i("li",{type:"button",class:C(["btn border-white bg-myBgCard mb-2 fs-4 productList",r.value===a?"text-myColor":"text-white"]),key:a,onClick:L=>w(a)},f(a),11,K))),128))])]),t("div",Q,[t("div",X,[O(" 全部商品 "),r.value!=="全部商品"?(c(),i("div",Y,"/"+f(r.value),1)):k("",!0)]),t("div",Z,[(c(!0),i(h,null,b(p.value,a=>(c(),i("div",{class:"col-md-6 col-lg-4 p-3",key:a.id},[t("div",ee,[y(E,{to:`/product/${a.id}`,class:"hover-pointer text-decoration-none"},{default:j(()=>[t("img",{src:a.imageUrl,class:"card-img-top",alt:"商品圖片"},null,8,te),t("div",ae,[t("div",se,f(a.title),1),t("div",oe,"NT$ "+f(a.price),1)])]),_:2},1032,["to"]),t("div",le,[t("button",{class:C([{disabled:T(V)},"w-100 btn border-myColor bg-myBgCard text-myColor px-5 productBtn"]),onClick:z(L=>T(B)(a.id,a.title),["prevent"])}," 加入購物車 ",10,ce)])])]))),128))]),m.value>1?(c(),U(M,{key:0,pages:_.value,onEmitPages:R},null,8,["pages"])):k("",!0)])])],512),[[D,n.value]])],64)}}},ge=I(ne,[["__scopeId","data-v-782402d9"]]);export{ge as default};