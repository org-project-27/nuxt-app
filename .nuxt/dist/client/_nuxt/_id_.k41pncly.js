import{_ as u}from"./nuxt-link.0FygG8mI.js";import{_ as g,a as v,b as f}from"./MessageComponent.w43ggl5i.js";import{_ as w,c as h,b as s,w as S,a as n,n as y,E as c,d,t as F,G as r,z as V,o as L,p as k,e as $}from"./entry.wyuOqA8i.js";import{c as C}from"./colorUtilities.lG8L7g3H.js";import"./IconComponent.1bf1oF13.js";const m=l=>(k("data-v-b7b10349"),l=l(),$(),l),U={class:"box default-container"},z=r('<div class="color-pallets" data-v-b7b10349><div data-v-b7b10349>0</div><div data-v-b7b10349>1</div><div data-v-b7b10349>2</div><div data-v-b7b10349>3</div><div data-v-b7b10349>4</div><div data-v-b7b10349>5</div><div data-v-b7b10349>6</div><div data-v-b7b10349>7</div><div data-v-b7b10349>8</div><div data-v-b7b10349>9</div></div>',1),B=m(()=>n("br",null,null,-1)),N=m(()=>n("br",null,null,-1)),_=r('<div class="responsive-test flex-row-center" data-v-b7b10349><div class="show-for-large" data-v-b7b10349> show-for-large </div><div class="show-for-desktop" data-v-b7b10349> show-for-desktop </div><div class="show-for-tablet" data-v-b7b10349> show-for-tablet </div><div class="show-for-mobile" data-v-b7b10349> show-for-mobile </div><div class="show-for-extrasmall" data-v-b7b10349> show-for-extrasmall </div></div>',1),E=V({name:"PostsPage",data(){return{model:{},isLoading:!0,registerFormStore:{}}},mounted(){},methods:{incrementButton(){console.log(this.model)},example(){console.log("hello",this.registerFormStore)}}}),I=Object.assign(E,{setup(l){return(e,o)=>{const b=u,t=g,p=v,i=f;return L(),h("div",U,[z,s(b,{to:"/"},{default:S(()=>[d(" Back ")]),_:1}),B,N,n("form",{class:"flex-column-no-wrap",onSubmit:o[10]||(o[10]=c((...a)=>e.example&&e.example(...a),["prevent"])),style:{gap:"20px"}},[s(t,{id:"fullname",label:"Fullname",type:"text",name:"fullname",modelValue:e.registerFormStore.fullname,"onUpdate:modelValue":o[0]||(o[0]=a=>e.registerFormStore.fullname=a),maxlength:"25",clearable:"",required:"","left-icon":{icon:"person"},"show-error":{message:e.registerFormStore.fullname,highlight:e.registerFormStore.fullname,icon:"warning"},placeholder:"Full name"},null,8,["modelValue","show-error"]),s(t,{id:"lastname",label:"Last name",type:"text",name:"lastname",modelValue:e.registerFormStore.lastname,"onUpdate:modelValue":o[1]||(o[1]=a=>e.registerFormStore.lastname=a),maxlength:"25",clearable:"","left-icon":{icon:"favorite"},"show-warning":{message:e.registerFormStore.lastname,highlight:e.registerFormStore.lastname},placeholder:"Last name"},null,8,["modelValue","show-warning"]),s(t,{id:"email",label:"Email",type:"email",name:"email",modelValue:e.registerFormStore.email,"onUpdate:modelValue":o[2]||(o[2]=a=>e.registerFormStore.email=a),maxlength:"25","left-icon":{icon:"alternate_email"},required:"","show-info":{message:"This field is important for register!",icon:"person"},placeholder:"Email"},null,8,["modelValue"]),s(t,{id:"password",label:"Password",type:"password",name:"password",modelValue:e.registerFormStore.password,"onUpdate:modelValue":o[3]||(o[3]=a=>e.registerFormStore.password=a),maxlength:"25","left-icon":{icon:"lock"},required:"","show-success":{message:"Strong password",highlight:!0}},null,8,["modelValue"]),s(t,{id:"phone",label:"Phone",type:"number",name:"phone",modelValue:e.registerFormStore.phone,"onUpdate:modelValue":o[4]||(o[4]=a=>e.registerFormStore.phone=a),maxlength:"25","left-icon":{icon:"call"},disabled:!!e.registerFormStore.email},null,8,["modelValue","disabled"]),s(t,{id:"submit1","mid-size":"",label:"Submit",type:"button","button-type":"success",onClick:o[5]||(o[5]=a=>e.isLoading=1),"is-loading":e.isLoading===1},null,8,["is-loading"]),s(t,{id:"submit2",label:"Submit",type:"submit","button-type":"danger",disabled:e.isLoading===1,onClick:o[6]||(o[6]=a=>e.isLoading=2),"is-loading":e.isLoading===2},null,8,["disabled","is-loading"]),s(t,{id:"submit3",label:"Reset",type:"submit","button-type":"1",onClick:o[7]||(o[7]=a=>e.isLoading=3),"is-loading":e.isLoading===3},null,8,["is-loading"]),s(t,{id:"submit4","mid-size":"",label:"Submit",type:"submit","button-type":"2",disabled:e.isLoading===1,onClick:o[8]||(o[8]=a=>e.isLoading=4),"is-loading":e.isLoading===4},null,8,["disabled","is-loading"]),s(t,{id:"submit5","mid-size":"",label:"Submit",type:"submit","button-type":"3",disabled:e.isLoading===1,onClick:o[9]||(o[9]=a=>e.isLoading=5)},null,8,["disabled"]),s(p,{id:"example",type:"2",size:"100",speed:".6",color:y(C).$black_color_2},null,8,["color"]),s(i,{type:"success",message:e.$t("pages.getstarted")},null,8,["message"]),s(i,{type:"warn",message:e.$t("pages.getstarted")},null,8,["message"]),s(i,{type:"error",message:e.$t("pages.getstarted")},null,8,["message"]),s(i,{type:"info",message:e.$t("pages.getstarted")},null,8,["message"])],32),d(" "+F(e.$t("buttons.search"))+" ",1),_])}}}),G=w(I,[["__scopeId","data-v-b7b10349"]]);export{G as default};
