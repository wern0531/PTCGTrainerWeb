import{_ as m,R as k,k as f,c as V,b as c,e as a,w as n,f as e,x,d as R,u as $,F as v,r as u,o as d,p as w,g as T}from"./index-423137d8.js";const{VITE_URL:p}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},g={data(){return{isCheck:!1}},components:{RouterView:k,RouterLink:f},methods:{logout(){document.cookie="hexToken=;expires=",this.$http.post(`${p}v2/logout`).then(t=>{alert("已登出,返回前台頁面"),this.$router.push("/")})},checkAdmin(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t;const o=`${p}/v2/api/user/check`;this.$http.post(o).then(r=>{r.data.success||this.$router.push("login"),this.isCheck=!0})}},mounted(){this.checkAdmin()}},C=t=>(w("data-v-ab4a763c"),t=t(),T(),t),A={class:"d-flex justify-content-center"},E=C(()=>c("hr",null,null,-1));function I(t,o,r,L,h,i){const s=u("RouterLink"),l=u("RouterView");return d(),V(v,null,[c("div",A,[a(s,{to:"/admin/products"},{default:n(()=>[e("後臺產品列表")]),_:1}),e(" | "),a(s,{to:"/admin/orders"},{default:n(()=>[e("後臺訂單列表")]),_:1}),e(" | "),a(s,{to:"/admin/articles"},{default:n(()=>[e("後臺文章列表")]),_:1}),e(" | "),a(s,{to:"/"},{default:n(()=>[e("回前台")]),_:1}),e(" | "),c("a",{href:"#",onClick:o[0]||(o[0]=x((..._)=>i.logout&&i.logout(..._),["prevent"]))},"登出")]),E,c("main",null,[h.isCheck?(d(),R(l,{key:0})):$("",!0)])],64)}const B=m(g,[["render",I],["__scopeId","data-v-ab4a763c"]]);export{B as default};
