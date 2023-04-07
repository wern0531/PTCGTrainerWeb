import{_ as u}from"./pikachu_gif-e9cb6898.js";import{_ as p,c as a,e as v,w as g,b as t,t as _,F as c,j as n,q as x,r as L,o as l,n as d,p as w,f as y}from"./index-614f490f.js";const{VITE_URL:h,VITE_PATH:f}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/production-sub-path/",MODE:"production",DEV:!1,PROD:!0},I={data(){return{isready:!1,isLoading:!1,article:{},starLevel:4,title:"",id:""}},methods:{getArticles(){this.$http.get(`${h}v2/api/${f}/articles`).then(e=>{e.data.articles.forEach(r=>{r.title===this.title&&(this.id=r.id)}),this.getArticle()}).catch(e=>{alert(e.response.data.message)})},getArticle(){this.$http.get(`${h}v2/api/${f}/article/${this.id}`).then(e=>{this.article=e.data.article,this.isready=!0,this.isLoading=!1}).catch(e=>{alert(e.response.data.message)})}},mounted(){this.isLoading=!0,this.title=this.$route.params.name,this.getArticles()}},o=e=>(w("data-v-263996c3"),e=e(),y(),e),b=o(()=>t("div",{class:"loadingGif"},[t("img",{src:u,alt:""})],-1)),k={key:0,class:"container p-3"},V={class:"d-flex flex-column flex-lg-row",style:{"margin-top":"63px"}},E=["src"],T={class:"ms-3 text-start text-white d-flex flex-column justify-content-center"},A={class:"mb-3"},D={class:"mb-3 mb-md-5"},S={class:"deckList d-flex justify-content-between flex-column"},B={class:"d-flex mb-1"},C=o(()=>t("div",{class:"d-flex text-white"},"牌組強度",-1)),H={class:"d-flex align-items-center text-white ms-3"},R={class:"d-flex mb-1"},j=o(()=>t("div",{class:"d-flex text-white"},"操作難度",-1)),M={class:"d-flex align-items-center text-white ms-3"},N={class:"d-flex"},P=o(()=>t("div",{class:"d-flex text-white"},"構築價格",-1)),U={class:"d-flex align-items-center text-white ms-3"},z=["innerHTML"];function F(e,r,O,q,s,G){const m=L("LoadingItem");return l(),a(c,null,[v(m,{active:s.isLoading,"z-index":1060},{default:g(()=>[b]),_:1},8,["active"]),s.isready?(l(),a("div",k,[t("div",V,[t("div",null,[t("img",{class:"deckImg",src:s.article.image,alt:""},null,8,E)]),t("div",T,[t("span",A,_(s.article.description),1),t("h1",D,_(s.article.title),1),t("div",null,[t("div",S,[t("div",B,[C,t("div",H,[(l(),a(c,null,n(5,i=>t("i",{key:i,class:d({"fa-solid fa-star":i<=s.starLevel,"fa-regular fa-star":i>s.starLevel})},null,2)),64))])]),t("div",R,[j,t("div",M,[(l(),a(c,null,n(5,i=>t("i",{key:i,class:d({"fa-solid fa-star":i<=s.starLevel,"fa-regular fa-star":i>s.starLevel})},null,2)),64))])]),t("div",N,[P,t("div",U,[(l(),a(c,null,n(5,i=>t("i",{key:i,class:d({"fa-solid fa-star":i<=s.starLevel,"fa-regular fa-star":i>s.starLevel})},null,2)),64))])])])])])]),t("div",{innerHTML:s.article.content,class:"mt-3 p-3 text-white text-start border border-white"},null,8,z)])):x("",!0)],64)}const Q=p(I,[["render",F],["__scopeId","data-v-263996c3"]]);export{Q as default};
