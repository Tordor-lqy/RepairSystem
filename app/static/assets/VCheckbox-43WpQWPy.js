import{m as F,V as a}from"./VCheckboxBtn-Y1DE8lFh.js";import{m as g,u as A,b as l}from"./VTextField-psUYnqz0.js";import{bK as I,bL as B,bM as U,bN as M,bO as N,k as R,bP as D,cs as K,b as u,aF as r}from"./index-PSqsjCSN.js";const L=I({...g(),...B(F(),["inline"])},"VCheckbox"),q=U()({name:"VCheckbox",inheritAttrs:!1,props:L(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,c){let{attrs:d,slots:t}=c;const s=M(e,"modelValue"),{isFocused:n,focus:i,blur:m}=A(e),b=N(),V=R(()=>e.id||`checkbox-${b}`);return D(()=>{const[p,k]=K(d),f=l.filterProps(e),v=a.filterProps(e);return u(l,r({class:["v-checkbox",e.class]},p,f,{modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,id:V.value,focused:n.value,style:e.style}),{...t,default:o=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C}=o;return u(a,r(v,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},k,{modelValue:s.value,"onUpdate:modelValue":y=>s.value=y,onFocus:i,onBlur:m}),t)}})}),{}}});export{q as V};