import{e as m,l as b,k as x,c as h,b as e,w as t,o as w,d as n,u as s,a8 as p,bG as g,bJ as k,d1 as v}from"./index-PSqsjCSN.js";import{r as y}from"./request-gdlVq-Xd.js";import{l as C}from"./logo-lSNaS3Cd.js";import{a as T,b as M}from"./auth-v1-mask-light-UA64UN5X.js";import{a as B,b as j,c as I,V as u}from"./VCard-JZ6WHMNS.js";import{V as L}from"./VForm-9Eo3q0pI.js";import{V as N,a as f}from"./VRow-SVgGgJmx.js";import{V as c}from"./VTextField-psUYnqz0.js";import"./createSimpleFunctional-PGWa7DpL.js";import"./VAvatar-AudbB9NE.js";import"./VImg-iF59fwnb.js";import"./transition-xyKDfSS_.js";import"./forwardRefs-y8pOSn8h.js";/* empty css              */import"./index-2MG7DwKw.js";import"./easing-imumzmxr.js";const F=d=>y.post("/api/admin/login",d),H={class:"auth-wrapper d-flex align-center justify-center pa-4"},S={class:"d-flex"},U=["innerHTML"],$=n("h5",{class:"text-h5 font-weight-semibold mb-1"}," 欢迎来的河南农业大学报修系统! 👋🏻 ",-1),q=n("p",{class:"mb-0"}," 请先进行登录操作 ",-1),D=n("div",{class:"d-flex align-center justify-space-between flex-wrap mt-1 mb-4"},null,-1),ae={__name:"login",setup(d){const o=m({admin_name:"",admin_password:""}),_=b();x(()=>_.global.name.value==="light"?T:M);const i=m(!1),V=async()=>{const r=await F(o.value);r.data.code==1?(localStorage.setItem("token",r.data.data.token),v.push("/")):alert(r.data.msg)};return(r,a)=>(w(),h("div",H,[e(B,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:t(()=>[e(j,{class:"justify-center"},{prepend:t(()=>[n("div",S,[n("div",{innerHTML:s(C)},null,8,U)])]),default:t(()=>[e(I,{class:"font-weight-semibold text-2xl text-uppercase"},{default:t(()=>[p(" 河南农业大学报修系统管理后台 ")]),_:1})]),_:1}),e(u,{class:"pt-2"},{default:t(()=>[$,q]),_:1}),e(u,null,{default:t(()=>[e(L,{onSubmit:g(()=>{},["prevent"])},{default:t(()=>[e(N,null,{default:t(()=>[e(f,{cols:"12"},{default:t(()=>[e(c,{modelValue:s(o).admin_name,"onUpdate:modelValue":a[0]||(a[0]=l=>s(o).admin_name=l),label:"用户名",type:"text"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12"},{default:t(()=>[e(c,{modelValue:s(o).admin_password,"onUpdate:modelValue":a[1]||(a[1]=l=>s(o).admin_password=l),label:"密码",placeholder:"············",type:s(i)?"text":"password","append-inner-icon":s(i)?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":a[2]||(a[2]=l=>i.value=!s(i))},null,8,["modelValue","type","append-inner-icon"]),D,e(k,{block:"",type:"submit",to:"#",onClick:a[3]||(a[3]=l=>V())},{default:t(()=>[p(" 登录 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))}};export{ae as default};