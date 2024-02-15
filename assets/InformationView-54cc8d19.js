import{S as f}from"./sweetalert2.all-0b61b168.js";import{_ as v,m as V,c as x,d as l,w as p,a as c,o as k,b as e,z as m,v as w,E as y,p as g,h as E}from"./index-426ce9cf.js";const{VITE_URL:I,VITE_PATH:S}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},T={data(){return{user:{name:"",email:"",tel:"",address:""},message:"",isclick:!1}},methods:{isPhone(a){return/^(09)[0-9]{8}$/.test(a)?!0:"需要正確的電話號碼"},onSubmit(){this.isclick=!0;const a={user:this.user,message:this.message};this.$http.post(`${I}/v2/api/${S}/order`,{data:a}).then(s=>{const u=s.data.orderId;this.$refs.form.resetForm(),this.isclick=!1,f.fire({backdrop:!1,icon:"success",title:"您的訂單已建立",showConfirmButton:!0,timer:1500}).then(()=>{this.$router.push(`/cart/checkOrder/${u}`)})}).catch(s=>{f.fire({backdrop:!1,icon:"error",title:"Oops...",text:`${s.response.data.message}`})})}},components:{RouterLink:V},mounted(){window.scrollTo(0,0)}},i=a=>(g("data-v-1509b6e1"),a=a(),E(),a),U={class:"my-5 row justify-content-center"},B={class:"mb-3"},C=i(()=>e("label",{for:"email",class:"form-label d-flex"},"Email*",-1)),R={class:"mb-3"},L=i(()=>e("label",{for:"name",class:"form-label d-flex"},"收件人姓名*",-1)),P={class:"mb-3"},D=i(()=>e("label",{for:"tel",class:"form-label d-flex"},"收件人電話*",-1)),M={class:"mb-3"},N=i(()=>e("label",{for:"address",class:"form-label d-flex"},"收件人地址*",-1)),O={class:"mb-3"},q=i(()=>e("label",{for:"message",class:"form-label d-flex"},"留言",-1)),A={class:"d-flex justify-content-between"},j=i(()=>e("div",{class:"material-symbols-outlined"},"arrow_back",-1)),z=i(()=>e("div",null,"回購物車",-1)),H=["disabled"];function F(a,s,u,G,o,_){const n=c("v-field"),r=c("error-message"),b=c("RouterLink"),h=c("v-form");return k(),x("div",U,[l(h,{ref:"form",class:"col-md-6",onSubmit:_.onSubmit},{default:p(({errors:d})=>[e("div",B,[C,l(n,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":d.email}]),placeholder:"請輸入 Email, 例:abc@def.com",rules:"email|required",modelValue:o.user.email,"onUpdate:modelValue":s[0]||(s[0]=t=>o.user.email=t)},null,8,["class","modelValue"]),l(r,{name:"email",class:"invalid-feedback"})]),e("div",R,[L,l(n,{id:"name",name:"姓名",type:"text",class:m(["form-control",{"is-invalid":d.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.user.name,"onUpdate:modelValue":s[1]||(s[1]=t=>o.user.name=t)},null,8,["class","modelValue"]),l(r,{name:"姓名",class:"invalid-feedback"})]),e("div",P,[D,l(n,{id:"tel",name:"電話",type:"tel",class:m(["form-control",{"is-invalid":d.電話}]),placeholder:"請輸入電話,例:0912345678",rules:_.isPhone,modelValue:o.user.tel,"onUpdate:modelValue":s[2]||(s[2]=t=>o.user.tel=t)},null,8,["class","rules","modelValue"]),l(r,{name:"電話",class:"invalid-feedback"})]),e("div",M,[N,l(n,{id:"address",name:"地址",type:"text",class:m(["form-control",{"is-invalid":d.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:o.user.address,"onUpdate:modelValue":s[3]||(s[3]=t=>o.user.address=t)},null,8,["class","modelValue"]),l(r,{name:"地址",class:"invalid-feedback"})]),e("div",O,[q,w(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=t=>o.message=t)},null,512),[[y,o.message]])]),e("div",A,[e("div",null,[l(b,{to:"/cart",class:"d-flex btn btn-myBgMain"},{default:p(()=>[j,z]),_:1})]),e("button",{type:"submit",class:"btn btn-myBgMain border-myColor text-myColor btn-hover",disabled:o.isclick===!0}," 確認資料 ",8,H)])]),_:1},8,["onSubmit"])])}const K=v(T,[["render",F],["__scopeId","data-v-1509b6e1"]]);export{K as default};