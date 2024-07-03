import{bM as g,bR as y,c9 as O,bP as f,b as n,bK as h,bQ as u,bS as P,cv as k,cw as j,cx as z,cy as G,cm as Q,d3 as U,d4 as X,cz as q,cA as J,bU as W,bV as Y,cB as Z,cC as $,bX as ee,cE as ae,cF as te,c7 as ne,cG as de,cH as ie,cn as le,d5 as se,d6 as ce,cI as re,cD as ue,k as I,bD as oe,b1 as ve,co as me,cK as be}from"./index-PSqsjCSN.js";import{c as C}from"./createSimpleFunctional-PGWa7DpL.js";import{V as A}from"./VAvatar-AudbB9NE.js";import{V as ke}from"./VImg-iF59fwnb.js";const ge=g()({name:"VCardActions",props:y(),setup(e,i){let{slots:t}=i;return O({VBtn:{slim:!0,variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ye=C("v-card-subtitle"),fe=C("v-card-title"),Ce=h({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:[String,Number],title:[String,Number],...y(),...P()},"VCardItem"),pe=g()({name:"VCardItem",props:Ce(),setup(e,i){let{slots:t}=i;return f(()=>{var s;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),v=!!(l||t.append),m=!!(e.title!=null||t.title),b=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(k,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(A,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(fe,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),b&&n(ye,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),v&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(k,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):l&&n(A,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ve=C("v-card-text"),Ie=h({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...j(),...y(),...P(),...z(),...G(),...Q(),...U(),...X(),...q(),...J(),...W(),...Y(),...Z({variant:"elevated"})},"VCard"),xe=g()({name:"VCard",directives:{Ripple:$},props:Ie(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:o}=ee(e),{borderClasses:l}=ae(e),{colorClasses:v,colorStyles:m,variantClasses:b}=te(e),{densityClasses:s}=ne(e),{dimensionStyles:d}=de(e),{elevationClasses:S}=ie(e),{loaderClasses:x}=le(e),{locationStyles:D}=se(e),{positionClasses:B}=ce(e),{roundedClasses:T}=re(e),c=ue(e,t),L=I(()=>e.link!==!1&&c.isLink.value),r=I(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return f(()=>{const _=L.value?"a":e.tag,N=!!(a.title||e.title!=null),R=!!(a.subtitle||e.subtitle!=null),E=N||R,F=!!(a.append||e.appendAvatar||e.appendIcon),M=!!(a.prepend||e.prependAvatar||e.prependIcon),w=!!(a.image||e.image),H=E||M||F,K=!!(a.text||e.text!=null);return oe(n(_,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},o.value,l.value,v.value,s.value,S.value,x.value,B.value,T.value,b.value,e.class],style:[m.value,d.value,D.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var p;return[w&&n("div",{key:"image",class:"v-card__image"},[a.image?n(k,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ke,{key:"image-img",cover:!0,src:e.image},null)]),n(me,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),H&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),K&&n(Ve,{key:"text"},{default:()=>{var V;return[((V=a.text)==null?void 0:V.call(a))??e.text]}}),(p=a.default)==null?void 0:p.call(a),a.actions&&n(ge,null,{default:a.actions}),be(r.value,"v-card")]}}),[[ve("ripple"),r.value&&e.ripple]])}),{}}});export{Ve as V,xe as a,pe as b,fe as c,ye as d,ge as e};