import{M as y}from"./bootstrap.esm-cc650ce9.js";import{P as v}from"./PaginationView-187cdf26.js";import{_ as x,c as o,b as t,F as h,j as u,e as w,t as l,q as M,u as g,x as f,k as C,r as D,o as d}from"./index-92a9ee6d.js";const{VITE_URL:p,VITE_PATH:m}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0};let k="",b="";const E={data(){return{orders:[],pagination:{},tempOrder:{}}},methods:{createDate(a){return new Date(a*1e3).toLocaleDateString()},currency(a){return`${parseInt(a,10).toFixed(0).replace(/./g,(c,_,s)=>_&&c!=="."&&(s.length-_)%3===0?`, ${c}`.replace(/\s/g,""):c)}`},getOrders(a=1){this.$http.get(`${p}v2/api/${m}/admin/orders?page=${a}`).then(n=>{console.log(n),this.orders=n.data.orders,this.pagination=n.data.pagination,console.log(this.orders)})},updatePaid(a){const n={is_paid:a.is_paid};this.$http.put(`${p}v2/api/${m}/admin/order/${a.id}`,{data:n}).then(c=>{console.log(c)})},openModel(a,n){a==="edit"?(this.tempOrder={...n},k.show()):a==="del"&&(this.tempOrder={...n},b.show())},delOrder(){this.$http.delete(`${p}v2/api/${m}/admin/order/${this.tempOrder.id}`).then(a=>{this.tempOrder={},this.getOrders(),b.hide(),alert(a.data.message)})}},components:{Pagination:v},mounted(){this.getOrders(),k=new y(this.$refs.orderModal,{keyboard:!1}),b=new y(this.$refs.delOrderModal,{keyboard:!1})}},P={class:"container"},V={class:"table mt-4 text-white"},T=t("thead",null,[t("tr",null,[t("th",{width:"120"},"購買時間"),t("th",{width:"120"},"Email"),t("th",{width:"200"},"購買款項"),t("th",{width:"120"},"應付金額"),t("th",{width:"100"},"是否付款"),t("th",{width:"120"},"編輯")])],-1),L={class:""},S={class:"list-unstyled"},U={class:""},I={class:"form-check form-switch"},A=["onUpdate:modelValue","onChange"],B={class:"form-check-label",for:"flexSwitchCheckDefault"},N={key:0,class:"text-success"},R={key:1},q={class:"btn-group"},F=["onClick"],j=["onClick"],H={class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"orderModal"},G={class:"modal-dialog modal-xl",role:"document"},W={class:"modal-content border-0"},z=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),J={class:"modal-body"},K={class:"row"},Q={class:"col-md-4"},X=t("h3",null,"用戶資料",-1),Y={class:"table"},Z={key:0},$=t("th",{style:{width:"100px"}},"姓名",-1),tt=t("th",null,"Email",-1),et=t("th",null,"電話",-1),st=t("th",null,"地址",-1),lt={class:"col-md-8"},ot=t("h3",null,"訂單細節",-1),dt={class:"table"},nt=t("th",{style:{width:"100px"}},"訂單編號",-1),at=t("th",null,"下單時間",-1),it=t("th",null,"付款時間",-1),rt={key:0},ct={key:1},ht=t("th",null,"付款狀態",-1),_t={key:0,class:"text-success"},ut={key:1,class:"text-muted"},pt=t("th",null,"總金額",-1),mt=t("h3",null,"選購商品",-1),bt={class:"table"},yt=t("thead",null,[t("tr")],-1),gt={class:"text-end"},ft={class:"d-flex justify-content-end"},kt={class:"form-check"},Ot={class:"form-check-label",for:"flexCheckDefault"},vt={key:0},xt={key:1},wt=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 "),t("button",{type:"button",class:"btn btn-primary"},"修改付款狀態")],-1),Mt={id:"delOrderModal",ref:"delOrderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Ct={class:"modal-dialog"},Dt={class:"modal-content border-0"},Et=C('<div class="modal-header bg-danger text-white"><h5 id="delProductModalLabel" class="modal-title"><span>刪除產品</span></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"> 是否刪除 <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。 </div>',2),Pt={class:"modal-footer"},Vt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Tt(a,n,c,_,s,i){const O=D("pagination");return d(),o(h,null,[t("div",P,[t("table",V,[T,t("tbody",null,[(d(!0),o(h,null,u(s.orders,e=>(d(),o("tr",{key:e.id},[t("td",null,l(i.createDate(e.create_at)),1),t("td",null,l(e.user.email),1),t("td",L,[t("ul",S,[(d(!0),o(h,null,u(e.products,r=>(d(),o("li",{key:r.id},l(r.product.title)+" 數量 : "+l(r.qty)+l(r.product.unit),1))),128))])]),t("td",U,l(e.total),1),t("td",null,[t("div",I,[g(t("input",{class:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault","onUpdate:modelValue":r=>e.is_paid=r,onChange:r=>i.updatePaid(e)},null,40,A),[[f,e.is_paid]]),t("label",B,[e.is_paid===!0?(d(),o("span",N,"已付款")):(d(),o("span",R,"未付款"))])])]),t("td",null,[t("div",q,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:r=>i.openModel("edit",e)}," 檢視 ",8,F),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:r=>i.openModel("del",e)}," 刪除 ",8,j)])])]))),128))])]),w(O,{pages:s.pagination,onEmitPages:i.getOrders},null,8,["pages","onEmitPages"])]),t("div",H,[t("div",G,[t("div",W,[z,t("div",J,[t("div",K,[t("div",Q,[X,t("table",Y,[s.tempOrder.user?(d(),o("tbody",Z,[t("tr",null,[$,t("td",null,l(s.tempOrder.user.name),1)]),t("tr",null,[tt,t("td",null,l(s.tempOrder.user.email),1)]),t("tr",null,[et,t("td",null,l(s.tempOrder.user.tel),1)]),t("tr",null,[st,t("td",null,l(s.tempOrder.user.address),1)])])):M("",!0)])]),t("div",lt,[ot,t("table",dt,[t("tbody",null,[t("tr",null,[nt,t("td",null,l(s.tempOrder.id),1)]),t("tr",null,[at,t("td",null,l(i.createDate(s.tempOrder.create_at)),1)]),t("tr",null,[it,t("td",null,[s.tempOrder.paid_date?(d(),o("span",rt,l(i.createDate(s.tempOrder.paid_date)),1)):(d(),o("span",ct,"時間不正確"))])]),t("tr",null,[ht,t("td",null,[s.tempOrder.is_paid?(d(),o("strong",_t,"已付款")):(d(),o("span",ut,"尚未付款"))])]),t("tr",null,[pt,t("td",null,l(i.currency(s.tempOrder.total)),1)])])]),mt,t("table",bt,[yt,t("tbody",null,[(d(!0),o(h,null,u(s.tempOrder.products,e=>(d(),o("tr",{key:e.id},[t("th",null,l(e.product.title),1),t("td",null,l(e.qty)+" / "+l(e.product.unit),1),t("td",gt,l(i.currency(e.final_total)),1)]))),128))])]),t("div",ft,[t("div",kt,[g(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":n[0]||(n[0]=e=>s.tempOrder.is_paid=e)},null,512),[[f,s.tempOrder.is_paid]]),t("label",Ot,[s.tempOrder.is_paid?(d(),o("span",vt,"已付款")):(d(),o("span",xt,"未付款"))])])])])])]),wt])])],512),t("div",Mt,[t("div",Ct,[t("div",Dt,[Et,t("div",Pt,[Vt,t("button",{type:"button",class:"btn btn-danger",onClick:n[1]||(n[1]=(...e)=>i.delOrder&&i.delOrder(...e))}," 確認刪除 ")])])])],512)],64)}const It=x(E,[["render",Tt]]);export{It as default};