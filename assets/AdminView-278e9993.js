import{_ as m,R as f,c as k,b as c,e as s,w as n,l as e,s as V,d as $,q as x,F as w,r as u,o as d}from"./index-4b4748a2.js";const{VITE_URL:h}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/production-sub-path/",MODE:"production",DEV:!1,PROD:!0},R={data(){return{isCheck:!1}},components:{RouterView:f},methods:{logout(){document.cookie="hexToken=;expires=",this.$http.post(`${h}v2/logout`).then(r=>{alert("已登出,返回前台頁面"),this.$router.push("/")})},checkAdmin(){const r=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=r;const t=`${h}/v2/api/user/check`;this.$http.post(t).then(a=>{a.data.success||this.$router.push("login"),this.isCheck=!0})}},mounted(){this.checkAdmin()}},C={class:"d-flex justify-content-center"},E=c("hr",null,null,-1);function T(r,t,a,g,l,i){const o=u("router-link"),p=u("RouterView");return d(),k(w,null,[c("div",C,[s(o,{to:"/admin/products"},{default:n(()=>[e("後臺產品列表")]),_:1}),e(" | "),s(o,{to:"/admin/orders"},{default:n(()=>[e("後臺訂單列表")]),_:1}),e(" | "),s(o,{to:"/admin/articles"},{default:n(()=>[e("後臺文章列表")]),_:1}),e(" | "),s(o,{to:"/"},{default:n(()=>[e("回前台")]),_:1}),e(" | "),c("a",{href:"#",onClick:t[0]||(t[0]=V((..._)=>i.logout&&i.logout(..._),["prevent"]))},"登出")]),E,l.isCheck?(d(),$(p,{key:0})):x("",!0)],64)}const A=m(R,[["render",T]]);export{A as default};