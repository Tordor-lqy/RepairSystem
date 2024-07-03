import{_ as J}from"./_plugin-vue_export-helper-x3n3nnut.js";import{o as S,c as Q,a as N,w as _,V as C,b as g,t as z,d as T,n as G,r as ot,F as yt,i as wt,e as A,u as E,f as st,g as _t,h as Yt,j as U,s as Tt,k as Lt,l as Wt,m as B,p as X,q as at,v as it,x as M,y as ct,z as ut,A as Xt}from"./index-PSqsjCSN.js";import{V as Rt}from"./VTooltip-UIsk7s62.js";import{l as ht}from"./logo-lSNaS3Cd.js";import{V as St}from"./VSpacer-0HQ5SBy8.js";import"./VOverlay-7_drhASS.js";import"./easing-imumzmxr.js";import"./lazy-LbIsDNYW.js";import"./transition-xyKDfSS_.js";import"./forwardRefs-y8pOSn8h.js";/* empty css              */import"./createSimpleFunctional-PGWa7DpL.js";const Ht={},Et={class:"h-100 d-flex align-center justify-space-between"};function xt(t,e){return S(),Q("div",Et)}const At=J(Ht,[["render",xt]]),kt={class:"nav-item-title"},D={__name:"VerticalNavLink",props:{item:{type:null,required:!0}},setup(t){return(e,n)=>(S(),Q("li",{class:G(["nav-link",{disabled:t.item.disable}])},[(S(),N(ot(t.item.to?"RouterLink":"a"),{to:t.item.to,href:t.item.href,target:t.item.target},{default:_(()=>[g(C,{icon:t.item.icon||"ri-checkbox-blank-circle-line",class:"nav-item-icon"},null,8,["icon"]),T("span",kt,z(t.item.title),1),T("span",{class:G(["nav-item-badge",t.item.badgeClass])},z(t.item.badgeContent),3)]),_:1},8,["to","href","target"]))],2))}},Mt={__name:"NavItems",setup(t){return(e,n)=>(S(),Q(yt,null,[g(D,{item:{icon:"ri-profile-line",title:"订单操作",to:"/order/look"}}),g(D,{item:{icon:"ri-profile-line",title:"损坏类型管理",to:"/damage/look"}}),g(D,{item:{icon:"ri-map-pin-line",title:"多级地点操作",to:"/location/look"}}),g(D,{item:{icon:"ri-map-pin-line",title:"最终地点一览表",to:"/location/final"}}),g(D,{item:{icon:"ri-user-line",title:"查看用户",to:"/user/look"}})],64))}};function j(t){return typeof t=="function"?t():E(t)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Pt=()=>{};function Ct(t,e){function n(...l){return new Promise((o,a)=>{Promise.resolve(t(()=>e.apply(this,l),{fn:e,thisArg:this,args:l})).then(o).catch(a)})}return n}const ft=t=>t();function It(t=ft){const e=A(!0);function n(){e.value=!1}function l(){e.value=!0}const o=(...a)=>{e.value&&t(...a)};return{isActive:st(e),pause:n,resume:l,eventFilter:o}}function Nt(...t){if(t.length!==1)return _t(...t);const e=t[0];return typeof e=="function"?st(Yt(()=>({get:e,set:Pt}))):A(e)}function $t(t,e,n={}){const{eventFilter:l=ft,...o}=n;return U(t,Ct(l,e),o)}function Z(t,e,n={}){const{eventFilter:l,...o}=n,{eventFilter:a,pause:s,resume:i,isActive:r}=It(l);return{stop:$t(t,e,{...o,eventFilter:a}),pause:s,resume:i,isActive:r}}function Dt(t,e,...[n]){const{flush:l="sync",deep:o=!1,immediate:a=!0,direction:s="both",transform:i={}}=n||{},r=[],c="ltr"in i&&i.ltr||(f=>f),u="rtl"in i&&i.rtl||(f=>f);return(s==="both"||s==="ltr")&&r.push(Z(t,f=>{r.forEach(b=>b.pause()),e.value=c(f),r.forEach(b=>b.resume())},{flush:l,deep:o,immediate:a})),(s==="both"||s==="rtl")&&r.push(Z(e,f=>{r.forEach(b=>b.pause()),t.value=u(f),r.forEach(b=>b.resume())},{flush:l,deep:o,immediate:a})),()=>{r.forEach(f=>f.stop())}}function Bt(t=!1,e={}){const{truthyValue:n=!0,falsyValue:l=!1}=e,o=wt(t),a=A(t);function s(i){if(arguments.length)return a.value=i,a.value;{const r=j(n);return a.value=a.value===r?j(l):r,a.value}}return o?s:[a,s]}function Ot(t,e){const n=Tt(c()),l=Nt(t),o=Lt({get(){var u;const v=l.value;let f=e!=null&&e.getIndexOf?e.getIndexOf(n.value,v):v.indexOf(n.value);return f<0&&(f=(u=e==null?void 0:e.fallbackIndex)!=null?u:0),f},set(u){a(u)}});function a(u){const v=l.value,f=v.length,b=(u%f+f)%f,h=v[b];return n.value=h,h}function s(u=1){return a(o.value+u)}function i(u=1){return s(u)}function r(u=1){return s(-u)}function c(){var u,v;return(v=j((u=e==null?void 0:e.initialValue)!=null?u:j(t)[0]))!=null?v:void 0}return U(l,()=>a(o.value)),{state:n,index:o,next:i,prev:r}}const Vt={class:"text-capitalize"},Kt={__name:"ThemeSwitcher",props:{themes:{type:Array,required:!0}},setup(t){const e=t,{name:n,global:l}=Wt(),{state:o,next:a,index:s}=Ot(e.themes.map(r=>r.name),{initialValue:n}),i=()=>{l.name.value=a()};return U(()=>l.name.value,r=>{o.value=r}),(r,c)=>{const u=B("IconBtn");return S(),N(u,{onClick:i},{default:_(()=>[g(C,{icon:e.themes[E(s)].icon},null,8,["icon"]),g(Rt,{activator:"parent","open-delay":"1000","scroll-strategy":"close"},{default:_(()=>[T("span",Vt,z(E(o)),1)]),_:1})]),_:1})}}},qt={__name:"NavbarThemeSwitcher",setup(t){const e=[{name:"light",icon:"ri-sun-line"},{name:"dark",icon:"ri-moon-clear-line"}];return(n,l)=>{const o=Kt;return S(),N(o,{themes:e})}}};/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function R(t){return getComputedStyle(t)}function Y(t,e){for(var n in e){var l=e[n];typeof l=="number"&&(l=l+"px"),t.style[n]=l}return t}function K(t){var e=document.createElement("div");return e.className=t,e}var tt=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function x(t,e){if(!tt)throw new Error("No element matching method supported");return tt.call(t,e)}function I(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function et(t,e){return Array.prototype.filter.call(t.children,function(n){return x(n,e)})}var w={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},dt={x:null,y:null};function pt(t,e){var n=t.element.classList,l=w.state.scrolling(e);n.contains(l)?clearTimeout(dt[e]):n.add(l)}function vt(t,e){dt[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(w.state.scrolling(e))},t.settings.scrollingThreshold)}function jt(t,e){pt(t,e),vt(t,e)}var O=function(e){this.element=e,this.handlers={}},mt={isEmpty:{configurable:!0}};O.prototype.bind=function(e,n){typeof this.handlers[e]>"u"&&(this.handlers[e]=[]),this.handlers[e].push(n),this.element.addEventListener(e,n,!1)};O.prototype.unbind=function(e,n){var l=this;this.handlers[e]=this.handlers[e].filter(function(o){return n&&o!==n?!0:(l.element.removeEventListener(e,o,!1),!1)})};O.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)};mt.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return t.handlers[e].length===0})};Object.defineProperties(O.prototype,mt);var $=function(){this.eventElements=[]};$.prototype.eventElement=function(e){var n=this.eventElements.filter(function(l){return l.element===e})[0];return n||(n=new O(e),this.eventElements.push(n)),n};$.prototype.bind=function(e,n,l){this.eventElement(e).bind(n,l)};$.prototype.unbind=function(e,n,l){var o=this.eventElement(e);o.unbind(n,l),o.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(o),1)};$.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll()}),this.eventElements=[]};$.prototype.once=function(e,n,l){var o=this.eventElement(e),a=function(s){o.unbind(n,a),l(s)};o.bind(n,a)};function q(t){if(typeof window.CustomEvent=="function")return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function F(t,e,n,l,o){l===void 0&&(l=!0),o===void 0&&(o=!1);var a;if(e==="top")a=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(e==="left")a=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");Ft(t,n,a,l,o)}function Ft(t,e,n,l,o){var a=n[0],s=n[1],i=n[2],r=n[3],c=n[4],u=n[5];l===void 0&&(l=!0),o===void 0&&(o=!1);var v=t.element;t.reach[r]=null,v[i]<1&&(t.reach[r]="start"),v[i]>t[a]-t[s]-1&&(t.reach[r]="end"),e&&(v.dispatchEvent(q("ps-scroll-"+r)),e<0?v.dispatchEvent(q("ps-scroll-"+c)):e>0&&v.dispatchEvent(q("ps-scroll-"+u)),l&&jt(t,r)),t.reach[r]&&(e||o)&&v.dispatchEvent(q("ps-"+r+"-reach-"+t.reach[r]))}function y(t){return parseInt(t,10)||0}function Ut(t){return x(t,"input,[contenteditable]")||x(t,"select,[contenteditable]")||x(t,"textarea,[contenteditable]")||x(t,"button,[contenteditable]")}function zt(t){var e=R(t);return y(e.width)+y(e.paddingLeft)+y(e.paddingRight)+y(e.borderLeftWidth)+y(e.borderRightWidth)}var P={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function H(t){var e=t.element,n=Math.floor(e.scrollTop),l=e.getBoundingClientRect();t.containerWidth=Math.round(l.width),t.containerHeight=Math.round(l.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(et(e,w.element.rail("x")).forEach(function(o){return I(o)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(et(e,w.element.rail("y")).forEach(function(o){return I(o)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=rt(t,y(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=y((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=rt(t,y(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=y(n*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),Gt(e,t),t.scrollbarXActive?e.classList.add(w.state.active("x")):(e.classList.remove(w.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=t.isRtl===!0?t.contentWidth:0),t.scrollbarYActive?e.classList.add(w.state.active("y")):(e.classList.remove(w.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function rt(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function Gt(t,e){var n={width:e.railXWidth},l=Math.floor(t.scrollTop);e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-l:n.top=e.scrollbarXTop+l,Y(e.scrollbarXRail,n);var o={top:l,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?o.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:o.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?o.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth*2-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:o.left=e.scrollbarYLeft+t.scrollLeft,Y(e.scrollbarYRail,o),Y(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),Y(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function Jt(t){t.element,t.event.bind(t.scrollbarY,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var n=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,l=n>t.scrollbarYTop?1:-1;t.element.scrollTop+=l*t.containerHeight,H(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var n=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,l=n>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=l*t.containerWidth,H(t),e.stopPropagation()})}function Qt(t){nt(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),nt(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function nt(t,e){var n=e[0],l=e[1],o=e[2],a=e[3],s=e[4],i=e[5],r=e[6],c=e[7],u=e[8],v=t.element,f=null,b=null,h=null;function d(p){p.touches&&p.touches[0]&&(p[o]=p.touches[0].pageY),v[r]=f+h*(p[o]-b),pt(t,c),H(t),p.stopPropagation(),p.type.startsWith("touch")&&p.changedTouches.length>1&&p.preventDefault()}function L(){vt(t,c),t[u].classList.remove(w.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",d)}function m(p,W){f=v[r],W&&p.touches&&(p[o]=p.touches[0].pageY),b=p[o],h=(t[l]-t[n])/(t[a]-t[i]),W?t.event.bind(t.ownerDocument,"touchmove",d):(t.event.bind(t.ownerDocument,"mousemove",d),t.event.once(t.ownerDocument,"mouseup",L),p.preventDefault()),t[u].classList.add(w.state.clicking),p.stopPropagation()}t.event.bind(t[s],"mousedown",function(p){m(p)}),t.event.bind(t[s],"touchstart",function(p){m(p,!0)})}function Zt(t){var e=t.element,n=function(){return x(e,":hover")},l=function(){return x(t.scrollbarX,":focus")||x(t.scrollbarY,":focus")};function o(a,s){var i=Math.floor(e.scrollTop);if(a===0){if(!t.scrollbarYActive)return!1;if(i===0&&s>0||i>=t.contentHeight-t.containerHeight&&s<0)return!t.settings.wheelPropagation}var r=e.scrollLeft;if(s===0){if(!t.scrollbarXActive)return!1;if(r===0&&a<0||r>=t.contentWidth-t.containerWidth&&a>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",function(a){if(!(a.isDefaultPrevented&&a.isDefaultPrevented()||a.defaultPrevented)&&!(!n()&&!l())){var s=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(s){if(s.tagName==="IFRAME")s=s.contentDocument.activeElement;else for(;s.shadowRoot;)s=s.shadowRoot.activeElement;if(Ut(s))return}var i=0,r=0;switch(a.which){case 37:a.metaKey?i=-t.contentWidth:a.altKey?i=-t.containerWidth:i=-30;break;case 38:a.metaKey?r=t.contentHeight:a.altKey?r=t.containerHeight:r=30;break;case 39:a.metaKey?i=t.contentWidth:a.altKey?i=t.containerWidth:i=30;break;case 40:a.metaKey?r=-t.contentHeight:a.altKey?r=-t.containerHeight:r=-30;break;case 32:a.shiftKey?r=t.containerHeight:r=-t.containerHeight;break;case 33:r=t.containerHeight;break;case 34:r=-t.containerHeight;break;case 36:r=t.contentHeight;break;case 35:r=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&i!==0||t.settings.suppressScrollY&&r!==0||(e.scrollTop-=r,e.scrollLeft+=i,H(t),o(i,r)&&a.preventDefault())}})}function te(t){var e=t.element;function n(s,i){var r=Math.floor(e.scrollTop),c=e.scrollTop===0,u=r+e.offsetHeight===e.scrollHeight,v=e.scrollLeft===0,f=e.scrollLeft+e.offsetWidth===e.scrollWidth,b;return Math.abs(i)>Math.abs(s)?b=c||u:b=v||f,b?!t.settings.wheelPropagation:!0}function l(s){var i=s.deltaX,r=-1*s.deltaY;return(typeof i>"u"||typeof r>"u")&&(i=-1*s.wheelDeltaX/6,r=s.wheelDeltaY/6),s.deltaMode&&s.deltaMode===1&&(i*=10,r*=10),i!==i&&r!==r&&(i=0,r=s.wheelDelta),s.shiftKey?[-r,-i]:[i,r]}function o(s,i,r){if(!P.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(s))return!1;for(var c=s;c&&c!==e;){if(c.classList.contains(w.element.consuming))return!0;var u=R(c);if(r&&u.overflowY.match(/(scroll|auto)/)){var v=c.scrollHeight-c.clientHeight;if(v>0&&(c.scrollTop>0&&r<0||c.scrollTop<v&&r>0))return!0}if(i&&u.overflowX.match(/(scroll|auto)/)){var f=c.scrollWidth-c.clientWidth;if(f>0&&(c.scrollLeft>0&&i<0||c.scrollLeft<f&&i>0))return!0}c=c.parentNode}return!1}function a(s){var i=l(s),r=i[0],c=i[1];if(!o(s.target,r,c)){var u=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(c?e.scrollTop-=c*t.settings.wheelSpeed:e.scrollTop+=r*t.settings.wheelSpeed,u=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(r?e.scrollLeft+=r*t.settings.wheelSpeed:e.scrollLeft-=c*t.settings.wheelSpeed,u=!0):(e.scrollTop-=c*t.settings.wheelSpeed,e.scrollLeft+=r*t.settings.wheelSpeed),H(t),u=u||n(r,c),u&&!s.ctrlKey&&(s.stopPropagation(),s.preventDefault())}}typeof window.onwheel<"u"?t.event.bind(e,"wheel",a):typeof window.onmousewheel<"u"&&t.event.bind(e,"mousewheel",a)}function ee(t){if(!P.supportsTouch&&!P.supportsIePointer)return;var e=t.element;function n(h,d){var L=Math.floor(e.scrollTop),m=e.scrollLeft,p=Math.abs(h),W=Math.abs(d);if(W>p){if(d<0&&L===t.contentHeight-t.containerHeight||d>0&&L===0)return window.scrollY===0&&d>0&&P.isChrome}else if(p>W&&(h<0&&m===t.contentWidth-t.containerWidth||h>0&&m===0))return!0;return!0}function l(h,d){e.scrollTop-=d,e.scrollLeft-=h,H(t)}var o={},a=0,s={},i=null;function r(h){return h.targetTouches?h.targetTouches[0]:h}function c(h){return h.pointerType&&h.pointerType==="pen"&&h.buttons===0?!1:!!(h.targetTouches&&h.targetTouches.length===1||h.pointerType&&h.pointerType!=="mouse"&&h.pointerType!==h.MSPOINTER_TYPE_MOUSE)}function u(h){if(c(h)){var d=r(h);o.pageX=d.pageX,o.pageY=d.pageY,a=new Date().getTime(),i!==null&&clearInterval(i)}}function v(h,d,L){if(!e.contains(h))return!1;for(var m=h;m&&m!==e;){if(m.classList.contains(w.element.consuming))return!0;var p=R(m);if(L&&p.overflowY.match(/(scroll|auto)/)){var W=m.scrollHeight-m.clientHeight;if(W>0&&(m.scrollTop>0&&L<0||m.scrollTop<W&&L>0))return!0}if(d&&p.overflowX.match(/(scroll|auto)/)){var k=m.scrollWidth-m.clientWidth;if(k>0&&(m.scrollLeft>0&&d<0||m.scrollLeft<k&&d>0))return!0}m=m.parentNode}return!1}function f(h){if(c(h)){var d=r(h),L={pageX:d.pageX,pageY:d.pageY},m=L.pageX-o.pageX,p=L.pageY-o.pageY;if(v(h.target,m,p))return;l(m,p),o=L;var W=new Date().getTime(),k=W-a;k>0&&(s.x=m/k,s.y=p/k,a=W),n(m,p)&&h.preventDefault()}}function b(){t.settings.swipeEasing&&(clearInterval(i),i=setInterval(function(){if(t.isInitialized){clearInterval(i);return}if(!s.x&&!s.y){clearInterval(i);return}if(Math.abs(s.x)<.01&&Math.abs(s.y)<.01){clearInterval(i);return}if(!t.element){clearInterval(i);return}l(s.x*30,s.y*30),s.x*=.8,s.y*=.8},10))}P.supportsTouch?(t.event.bind(e,"touchstart",u),t.event.bind(e,"touchmove",f),t.event.bind(e,"touchend",b)):P.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",u),t.event.bind(e,"pointermove",f),t.event.bind(e,"pointerup",b)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",u),t.event.bind(e,"MSPointerMove",f),t.event.bind(e,"MSPointerUp",b)))}var re=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},ne={"click-rail":Jt,"drag-thumb":Qt,keyboard:Zt,wheel:te,touch:ee},V=function(e,n){var l=this;if(n===void 0&&(n={}),typeof e=="string"&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=e,e.classList.add(w.main),this.settings=re();for(var o in n)this.settings[o]=n[o];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var a=function(){return e.classList.add(w.state.focus)},s=function(){return e.classList.remove(w.state.focus)};this.isRtl=R(e).direction==="rtl",this.isRtl===!0&&e.classList.add(w.rtl),this.isNegativeScroll=function(){var c=e.scrollLeft,u=null;return e.scrollLeft=-1,u=e.scrollLeft<0,e.scrollLeft=c,u}(),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new $,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=K(w.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=K(w.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",a),this.event.bind(this.scrollbarX,"blur",s),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var i=R(this.scrollbarXRail);this.scrollbarXBottom=parseInt(i.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=y(i.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=y(i.borderLeftWidth)+y(i.borderRightWidth),Y(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=y(i.marginLeft)+y(i.marginRight),Y(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=K(w.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=K(w.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",a),this.event.bind(this.scrollbarY,"blur",s),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var r=R(this.scrollbarYRail);this.scrollbarYRight=parseInt(r.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=y(r.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?zt(this.scrollbarY):null,this.railBorderYWidth=y(r.borderTopWidth)+y(r.borderBottomWidth),Y(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=y(r.marginTop)+y(r.marginBottom),Y(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return ne[c](l)}),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(c){return l.onScroll(c)}),H(this)};V.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,Y(this.scrollbarXRail,{display:"block"}),Y(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=y(R(this.scrollbarXRail).marginLeft)+y(R(this.scrollbarXRail).marginRight),this.railYMarginHeight=y(R(this.scrollbarYRail).marginTop)+y(R(this.scrollbarYRail).marginBottom),Y(this.scrollbarXRail,{display:"none"}),Y(this.scrollbarYRail,{display:"none"}),H(this),F(this,"top",0,!1,!0),F(this,"left",0,!1,!0),Y(this.scrollbarXRail,{display:""}),Y(this.scrollbarYRail,{display:""}))};V.prototype.onScroll=function(e){this.isAlive&&(H(this),F(this,"top",this.element.scrollTop-this.lastScrollTop),F(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};V.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),I(this.scrollbarX),I(this.scrollbarY),I(this.scrollbarXRail),I(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};V.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/)}).join(" ")};const lt=["scroll","ps-scroll-y","ps-scroll-x","ps-scroll-up","ps-scroll-down","ps-scroll-left","ps-scroll-right","ps-y-reach-start","ps-y-reach-end","ps-x-reach-start","ps-x-reach-end"];var le={name:"PerfectScrollbar",props:{options:{type:Object,required:!1,default:()=>{}},tag:{type:String,required:!1,default:"div"},watchOptions:{type:Boolean,required:!1,default:!1}},emits:lt,data(){return{ps:null}},watch:{watchOptions(t){!t&&this.watcher?this.watcher():this.createWatcher()}},mounted(){this.create(),this.watchOptions&&this.createWatcher()},updated(){this.$nextTick(()=>{this.update()})},beforeUnmount(){this.destroy()},methods:{create(){this.ps&&this.$isServer||(this.ps=new V(this.$el,this.options),lt.forEach(t=>{this.ps.element.addEventListener(t,e=>this.$emit(t,e))}))},createWatcher(){this.watcher=this.$watch("options",()=>{this.destroy(),this.create()},{deep:!0})},update(){this.ps&&this.ps.update()},destroy(){this.ps&&(this.ps.destroy(),this.ps=null)}},render(){return X(this.tag,{class:"ps"},this.$slots.default&&this.$slots.default())}};const gt=t=>(ct("data-v-06f94185"),t=t(),ut(),t),oe={class:"nav-header"},se=["innerHTML"],ae=gt(()=>T("h1",{class:"font-weight-medium leading-normal text-xl text-uppercase"}," Materio ",-1)),ie=gt(()=>T("div",{class:"vertical-nav-items-shadow"},null,-1)),ce={__name:"VerticalNav",props:{tag:{type:null,required:!1,default:"aside"},isOverlayNavActive:{type:Boolean,required:!0},toggleIsOverlayNavActive:{type:Function,required:!0}},setup(t){const e=t,{mdAndDown:n}=at(),l=A(),o=it();U(()=>o.path,()=>{e.toggleIsOverlayNavActive(!1)});const a=A(!1),s=r=>a.value=r,i=r=>{a.value=r.target.scrollTop>0};return(r,c)=>{const u=B("RouterLink");return S(),N(ot(e.tag),{ref_key:"refNav",ref:l,class:G(["layout-vertical-nav",[{visible:t.isOverlayNavActive,scrolled:E(a),"overlay-nav":E(n)}]])},{default:_(()=>[T("div",oe,[M(r.$slots,"nav-header",{},()=>[g(u,{to:"/",class:"app-logo app-title-wrapper"},{default:_(()=>[T("div",{class:"d-flex",innerHTML:E(ht)},null,8,se),ae]),_:1})],!0)]),M(r.$slots,"before-nav-items",{},()=>[ie],!0),M(r.$slots,"nav-items",{updateIsVerticalNavScrolled:s},()=>[g(E(le),{tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:i},{default:_(()=>[M(r.$slots,"default",{},void 0,!0)]),_:3})],!0),M(r.$slots,"after-nav-items",{},void 0,!0)]),_:3},8,["class"])}}},ue=J(ce,[["__scopeId","data-v-06f94185"]]),he=Xt({setup(t,{slots:e}){const n=A(!1),l=A(!1),o=Bt(n),a=it(),{mdAndDown:s}=at();return Dt(n,l),()=>{var f,b,h;const i=X(ue,{isOverlayNavActive:n.value,toggleIsOverlayNavActive:o},{"nav-header":()=>{var d;return(d=e["vertical-nav-header"])==null?void 0:d.call(e,{toggleIsOverlayNavActive:o})},"before-nav-items":()=>{var d;return(d=e["before-vertical-nav-items"])==null?void 0:d.call(e)},default:()=>{var d;return(d=e["vertical-nav-content"])==null?void 0:d.call(e)},"after-nav-items":()=>{var d;return(d=e["after-vertical-nav-items"])==null?void 0:d.call(e)}}),r=X("header",{class:["layout-navbar navbar-blur"]},[X("div",{class:"navbar-content-container"},(f=e.navbar)==null?void 0:f.call(e,{toggleVerticalOverlayNavActive:o}))]),c=X("main",{class:"layout-page-content"},X("div",{class:"page-content-container"},(b=e.default)==null?void 0:b.call(e))),u=X("footer",{class:"layout-footer"},[X("div",{class:"footer-content-container"},(h=e.footer)==null?void 0:h.call(e))]),v=X("div",{class:["layout-overlay",{visible:l.value}],onClick:()=>{l.value=!l.value}});return X("div",{class:["layout-wrapper layout-nav-type-vertical layout-navbar-static layout-footer-static layout-content-width-fluid",s.value&&"layout-overlay-nav",a.meta.layoutWrapperClasses]},[i,X("div",{class:"layout-content-wrapper"},[r,c,u]),v])}}}),bt=t=>(ct("data-v-207cca48"),t=t(),ut(),t),fe={class:"d-flex h-100 align-center"},de={class:"d-flex align-center cursor-pointer",style:{"user-select":"none"}},pe=bt(()=>T("span",{class:"d-none d-md-flex align-center text-disabled"},[T("span",{class:"me-3"},"Search"),T("span",{class:"meta-key"},"⌘K")],-1)),ve=["innerHTML"],me=bt(()=>T("h1",{class:"font-weight-medium leading-normal text-xl text-uppercase"}," 报修系统管理后台 ",-1)),ge={__name:"DefaultLayoutWithVerticalNav",setup(t){return(e,n)=>{const l=B("IconBtn"),o=B("RouterLink");return S(),N(he,null,{navbar:_(({toggleVerticalOverlayNavActive:a})=>[T("div",fe,[g(l,{class:"ms-n3 d-lg-none",onClick:s=>a(!0)},{default:_(()=>[g(C,{icon:"ri-menu-line"})]),_:2},1032,["onClick"]),T("div",de,[g(l,null,{default:_(()=>[g(C,{icon:"ri-search-line"})]),_:1}),pe]),g(St),g(l,{class:"me-2"},{default:_(()=>[g(C,{icon:"ri-notification-line"})]),_:1}),g(qt,{class:"me-2"})])]),"vertical-nav-header":_(({toggleIsOverlayNavActive:a})=>[g(o,{to:"/",class:"app-logo app-title-wrapper"},{default:_(()=>[T("div",{class:"d-flex",innerHTML:E(ht)},null,8,ve),me]),_:1}),g(l,{class:"d-block d-lg-none",onClick:s=>a(!1)},{default:_(()=>[g(C,{icon:"ri-close-line"})]),_:2},1032,["onClick"])]),"vertical-nav-content":_(()=>[g(Mt)]),footer:_(()=>[g(At)]),default:_(()=>[M(e.$slots,"default",{},void 0,!0)]),_:3})}}},be=J(ge,[["__scopeId","data-v-207cca48"]]),xe={__name:"default",setup(t){return(e,n)=>{const l=B("RouterView");return S(),N(be,null,{default:_(()=>[g(l)]),_:1})}}};export{xe as default};
