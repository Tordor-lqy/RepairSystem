import{r as g}from"./request-gdlVq-Xd.js";import{e as f,c as _,b as e,w as l,bJ as n,F as w,o as y,a8 as o,d as s,b0 as L,t as C}from"./index-PSqsjCSN.js";import{V as S}from"./VTable-STDIntoG.js";import{V as k}from"./VDialog-77CPTFay.js";import{a as D,c,V as b,e as $}from"./VCard-JZ6WHMNS.js";import{V as x}from"./VTextField-psUYnqz0.js";import"./VOverlay-7_drhASS.js";import"./easing-imumzmxr.js";import"./lazy-LbIsDNYW.js";import"./transition-xyKDfSS_.js";import"./forwardRefs-y8pOSn8h.js";import"./dialog-transition-ECeo8dH8.js";import"./createSimpleFunctional-PGWa7DpL.js";import"./VAvatar-AudbB9NE.js";import"./VImg-iF59fwnb.js";import"./index-2MG7DwKw.js";const E=()=>g.get("/api/admin/query/damage"),I=m=>g.post("/api/admin/add/damage",m),J=m=>g.delete(`/api/admin/delete/damage/${m}`),j=m=>g.put("/api/admin/set/damage",m),z=s("thead",null,[s("tr",null,[s("th",{class:"text-uppercase"}," 损坏类型ID "),s("th",null," 损坏类型名称 "),s("th",null," 操作 ")])],-1),G={class:"btns"},de={__name:"damageLook",setup(m){const V=f([]),v=async()=>{const u=await E();V.value=u.data.data,console.log(V.value)};v();const d=f({}),i=f(!1),r=f(!1),p=f(!1),T=async()=>{(await I(d.value)).data.code==1&&(v(),d.value={},p.value=!1)},U=async()=>{(await j(d.value)).data.code==1&&(v(),i.value=!1)},B=async()=>{(await J(d.value.damage_type_id)).data.code==1&&(v(),r.value=!1)},F=()=>{p.value=!0,d.value={}},N=u=>{d.value=u,i.value=!0},q=u=>{d.value=u,r.value=!0};return(u,a)=>(y(),_(w,null,[e(n,{onClick:a[0]||(a[0]=t=>F())},{default:l(()=>[o("添加损坏类型")]),_:1}),e(S,{height:"800","fixed-header":""},{default:l(()=>[z,s("tbody",null,[(y(!0),_(w,null,L(V.value,t=>(y(),_("tr",{key:t.dessert},[s("td",null,C(t.damage_type_id),1),s("td",null,C(t.damage_type_name),1),s("td",G,[e(n,{icon:"ri-edit-box-fill",onClick:A=>N(t)},null,8,["onClick"]),e(n,{icon:"ri-delete-bin-7-fill",color:"error",onClick:A=>q(t)},null,8,["onClick"])])]))),128))])]),_:1}),e(k,{modelValue:p.value,"onUpdate:modelValue":a[4]||(a[4]=t=>p.value=t),width:"400"},{default:l(()=>[e(D,null,{default:l(()=>[e(c,null,{default:l(()=>[o(" 新增损坏类型信息 ")]),_:1}),e(b,null,{default:l(()=>[e(x,{modelValue:d.value.damage_type_name,"onUpdate:modelValue":a[1]||(a[1]=t=>d.value.damage_type_name=t),label:"损坏类型名称"},null,8,["modelValue"])]),_:1}),e($,null,{default:l(()=>[e(n,{onClick:a[2]||(a[2]=t=>p.value=!1)},{default:l(()=>[o("取消")]),_:1}),e(n,{onClick:a[3]||(a[3]=t=>T())},{default:l(()=>[o("确定")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(k,{modelValue:i.value,"onUpdate:modelValue":a[8]||(a[8]=t=>i.value=t),width:"400"},{default:l(()=>[e(D,null,{default:l(()=>[e(c,null,{default:l(()=>[o(" 更改损坏类型信息 ")]),_:1}),e(b,null,{default:l(()=>[e(x,{modelValue:d.value.damage_type_name,"onUpdate:modelValue":a[5]||(a[5]=t=>d.value.damage_type_name=t),label:"损坏类型名称"},null,8,["modelValue"])]),_:1}),e($,null,{default:l(()=>[e(n,{onClick:a[6]||(a[6]=t=>i.value=!1)},{default:l(()=>[o("取消")]),_:1}),e(n,{onClick:a[7]||(a[7]=t=>U())},{default:l(()=>[o("确定")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(k,{modelValue:r.value,"onUpdate:modelValue":a[11]||(a[11]=t=>r.value=t),width:"400"},{default:l(()=>[e(D,null,{default:l(()=>[e(c,null,{default:l(()=>[o(" 删除损坏类型信息 ")]),_:1}),e(b,null,{default:l(()=>[o(" 确定删除损坏类型 `"+C(d.value.damage_type_name)+"` 吗？ ",1)]),_:1}),e($,null,{default:l(()=>[e(n,{onClick:a[9]||(a[9]=t=>r.value=!1)},{default:l(()=>[o("取消")]),_:1}),e(n,{onClick:a[10]||(a[10]=t=>B())},{default:l(()=>[o("确定")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}};export{de as default};
