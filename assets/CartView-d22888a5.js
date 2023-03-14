import{_ as y,R as b,a as l,b as t,n as a,F as f,r as g,t as h,k as x,d as w,o as r,f as C,v as V,p as T,h as S,e as k}from"./index-1f35fbb0.js";const{VITE_URL:p,VITE_PATH:m}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},I={data(){return{carts:[],loadingItem:"",currentPath:"/cart"}},methods:{getCarts(){this.$http.get(`${p}v2/api/${m}/cart`).then(s=>{this.carts=s.data.data.carts,console.log(this.carts)})},updateQty(s,n,d,_){let o={};_==="add"?o={product_id:s,qty:n+=1}:_==="reduce"&&(o={product_id:s,qty:n-=1}),this.loadingItem=s,this.$http.put(`${p}v2/api/${m}/cart/${d}`,{data:o}).then(c=>{this.getCarts(),this.loadingItem=""}).catch(c=>{alert(c.response.data.message)})},calculateFinalTotal(s){return s.reduce((n,d)=>n+d.total,0)},nextStep(){this.$router.push("/cart/information")}},watch:{$route:function(s,n){this.currentPath=s.path}},components:{RouterView:b},mounted(){this.getCarts(),console.log(this.carts)}},i=s=>(T("data-v-7e5a9712"),s=s(),S(),s),P={class:"container"},E={class:"row my-3 align-items-stretch"},R={class:"col-3"},B=i(()=>t("div",{class:"d-flex align-items-center justify-content-center flex-column"}," 商品確認 ",-1)),U=[B],q={class:"col-3"},D=i(()=>t("div",{class:"d-flex align-items-center justify-content-center flex-column"}," 填寫資料 ",-1)),N=[D],j={class:"col-3"},F=i(()=>t("div",{class:"d-flex align-items-center justify-content-center flex-column"}," 確認訂單 ",-1)),L=[F],O={class:"col-3"},A=i(()=>t("div",{class:"d-flex align-items-center justify-content-center flex-column"}," 完成訂單 ",-1)),Q=[A],$={key:0},H={class:"row p-3 mb-2 border border-btnBg rounded-3 d-flex align-items-center"},M={class:"col-2"},z=["src"],G={class:"col-3"},W={class:"col-2"},J={class:"input-group"},K=["onClick","disabled"],X=["onUpdate:modelValue"],Y=["onClick","disabled"],Z={class:"col-3"},tt=i(()=>t("div",{class:"col-2 delBtn"},[t("span",{type:"button",class:"material-symbols-outlined"}," delete ")],-1)),et={class:"mt-3"},st={class:"row d-flex align-items-center"},ot=i(()=>t("div",{class:"col-2"},[t("button",{type:"button",class:"btn text-myColor"},"繼續選購")],-1)),nt={class:"col-3 ms-auto"},ct={class:"col-2"};function it(s,n,d,_,o,c){const v=k("RouterView");return r(),l("div",P,[t("div",E,[t("div",R,[t("div",{class:a(["step",{nowStep:o.currentPath==="/cart"}])},U,2)]),t("div",q,[t("div",{class:a(["step",{nowStep:o.currentPath==="/cart/information"}])},N,2)]),t("div",j,[t("div",{class:a(["step",{nowStep:o.currentPath==="/cart/checkOrder"}])},L,2)]),t("div",O,[t("div",{class:a(["step",{nowStep:o.currentPath==="/cart/completeOrder"}])},Q,2)])]),o.currentPath==="/cart"?(r(),l("div",$,[(r(!0),l(f,null,g(o.carts,e=>(r(),l("div",{class:"",key:e.id},[t("div",H,[t("div",M,[t("img",{style:{width:"100px"},src:e.product.imageUrl,alt:""},null,8,z)]),t("div",G,h(e.product.title),1),t("div",W,[t("div",J,[t("button",{class:"btn btn-outline-secondary",type:"button",onClick:u=>c.updateQty(e.product_id,e.qty,e.id,"reduce"),disabled:e.product.id===o.loadingItem}," - ",8,K),C(t("input",{type:"text",class:"btn form-control text-center","onUpdate:modelValue":u=>e.qty=u,min:"0",disabled:""},null,8,X),[[V,e.qty,void 0,{number:!0}]]),t("button",{class:"btn btn-outline-secondary",type:"button",onClick:u=>c.updateQty(e.product_id,e.qty,e.id,"add"),disabled:e.product.id===o.loadingItem}," + ",8,Y)])]),t("div",Z,"$NT"+h(e.total),1),tt])]))),128)),t("div",et,[t("div",st,[ot,t("div",nt," 總計: $NT"+h(c.calculateFinalTotal(o.carts)),1),t("div",ct,[t("button",{type:"button",class:"btn text-myColor",onClick:n[0]||(n[0]=(...e)=>c.nextStep&&c.nextStep(...e))},"確認訂單")])])])])):x("",!0),w(v)])}const lt=y(I,[["render",it],["__scopeId","data-v-7e5a9712"]]);export{lt as default};