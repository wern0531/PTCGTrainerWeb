import{_ as m,R as f,c as k,b as c,e as s,w as r,l as e,s as $,d as x,q as V,F as v,r as u,o as d}from"./index-49a2e4fd.js";const{VITE_URL:h}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/production-sub-path/",MODE:"production",DEV:!1,PROD:!0},w={data(){return{isCheck:!1}},components:{RouterView:f},methods:{logout(){document.cookie="hexToken=;expires=",this.$http.post(`${h}v2/logout`).then(n=>{alert("已登出,返回前台頁面"),this.$router.push("/")})},checkAdmin(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=n;const t=`${h}/v2/api/user/check`;this.$http.post(t).then(a=>{a.data.success||this.$router.push("login"),this.isCheck=!0})}},mounted(){this.checkAdmin()}},C={class:"d-flex justify-content-center"},E=c("hr",null,null,-1);function T(n,t,a,g,l,i){const o=u("router-link"),p=u("router-view");return d(),k(v,null,[c("div",C,[s(o,{to:"/admin/products"},{default:r(()=>[e("後臺產品列表")]),_:1}),e(" | "),s(o,{to:"/admin/orders"},{default:r(()=>[e("後臺訂單列表")]),_:1}),e(" | "),s(o,{to:"/admin/articles"},{default:r(()=>[e("後臺文章列表")]),_:1}),e(" | "),s(o,{to:"/"},{default:r(()=>[e("回前台")]),_:1}),e(" | "),c("a",{href:"#",onClick:t[0]||(t[0]=$((..._)=>i.logout&&i.logout(..._),["prevent"]))},"登出")]),E,l.isCheck?(d(),x(p,{key:0})):V("",!0)],64)}const R=m(w,[["render",T]]);export{R as default};