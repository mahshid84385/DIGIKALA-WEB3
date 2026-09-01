(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`https://digikala-web3.onrender.com`;async function t(){let t=await fetch(`${e}/api/header`);if(!t.ok)throw Error(`Header API Error`);let n=await t.json();return console.log(n),n}function n(e){return`
    <section class="w-full bg-[#6f2cff]">
      <a
        href="${e.link}"
        class="block w-full"
      >
        <img
          src="/digikala-web3${e.image}"
          alt="Top Banner"
          class="
            block
            w-full
            h-[40px]
            sm:h-[50px]
            md:h-[60px]
            object-cover
            object-center
          "
        >
      </a>
    </section>
  `}function r(e){return`
<header class="bg-white">

<div
class="
max-w-[1920px]
mx-auto
px-4
xl:px-6
h-auto
md:h-[110px]
flex
flex-col
md:flex-row
md:items-center
gap-4
md:gap-0
"
>

    <!-- Right -->

    <div
    class="
    flex
    items-center
    flex-1
    gap-3
    md:gap-8
    w-full
    "
    >

        <!-- Logo -->

        <a
        href="/"
        class="shrink-0">

            <img
            src="/digikala-web3${e.logo}"
            alt="logo"
            class="
            w-[120px]
            sm:w-[150px]
            md:w-[200px]
            ">

        </a>


        <!-- Search -->

        <div
        class="
        relative
        w-full
        max-w-[600px]
        "
        >

            <i
            class="
            ${e.searchIcon}
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            text-gray-400
            text-base
            "
            >
            </i>


            <input

            type="text"

            placeholder="${e.searchPlaceholder}"

            class="
            w-full
            h-10
            md:h-11
            rounded-full
            bg-[#F0F0F1]
            pr-14
            pl-4
            text-sm
            outline-none
            placeholder:text-gray-400
            "

            >

        </div>


    </div>



    <!-- Left -->


<div
class="
flex
flex-row-reverse
items-center
gap-2
md:gap-4
mr-0
md:mr-auto
"
>


    <!-- Cart -->

    <button
    class="
    text-[18px]
    md:text-[22px]
    text-gray-700
    hover:text-red-500
    transition
    "
    >

        <i class="${e.cartIcon}"></i>

    </button>



    <!-- Divider -->

    <div
    class="
    w-px
    h-5
    md:h-6
    bg-gray-200
    "
    >
    </div>



    <!-- Login -->

    <button
    class="
    h-9
    md:h-10
    px-2
    md:px-4
    rounded-lg
    border
    border-gray-300
    flex
    items-center
    gap-1
    md:gap-2
    text-[10px]
    md:text-[12px]
    font-semibold
    hover:bg-gray-50
    transition
    whitespace-nowrap
    "
    >

        <i class="${e.loginIcon}"></i>

        ${e.loginText}

    </button>
    


    <!-- Bell -->

    <button
    class="
    text-[18px]
    md:text-[22px]
    text-gray-700
    hover:text-red-500
    transition
    "
    >

        <i class="${e.bellIcon}"></i>

    </button>



</div>


</div>

</header>
`}async function i(){let t=await fetch(`${e}/api/mega-menu`);if(!t.ok)throw Error(`Mega Menu API Error`);return await t.json()}function a(e){let t=e.categories[0];return`

<div

class="
absolute
top-full
right-0
hidden
group-hover:block
z-50

w-[95vw]
md:w-[1360px]

max-w-[1360px]

"

>


<div

class="
bg-white
rounded-b-xl
shadow-[0_12px_30px_rgba(0,0,0,.18)]

overflow-hidden

flex

flex-col
md:flex-row

h-[70vh]
md:h-[560px]

"

>


<!-- Sidebar -->

<div

class="
w-full
md:w-[240px]

bg-[#f8f8f8]

border-b
md:border-b-0
md:border-l

border-gray-200

overflow-y-auto

max-h-[200px]
md:max-h-none

"

>


${e.categories.map(e=>`

<div
data-category-id="${e.id}"

class="
h-12
md:h-14

mega-category

px-4

flex
items-center
justify-between

cursor-pointer

hover:bg-white
hover:text-red-500

transition

border-b
border-gray-100

"


>


<div
class="
flex
items-center
gap-2
md:gap-3
"
>


<i
class="
${e.icon}
text-[16px]
md:text-[18px]
"
>
</i>


<span

class="
text-[12px]
md:text-[14px]

font-medium
"

>

${e.title}

</span>


</div>


<i
class="
fa-solid fa-chevron-left
text-[10px]
"
>
</i>


</div>


`).join(``)}


</div>




<!-- Content -->


<div

id="mega-menu-content"

class="
flex-1

p-4
md:p-8

overflow-y-auto

"


>


<h3

class="
text-red-600

font-bold

text-[14px]
md:text-[16px]

mb-5
md:mb-8

"

>

${t.content.title}

</h3>



<div

class="
grid

grid-cols-1
sm:grid-cols-2
md:grid-cols-4

gap-6
md:gap-x-14
md:gap-y-10

"

>


${t.content.columns.map(e=>`

<div>


<h4

class="
font-semibold

text-[13px]
md:text-[14px]

mb-4
md:mb-5

flex
items-center
gap-2

"

>


<div

class="
w-[2px]
h-4

bg-red-500

rounded-full

"

>
</div>


${e.title}


</h4>



<div

class="
flex
flex-col
gap-3

"

>


${e.items.map(e=>`

<a

href="#"

class="
text-[12px]
md:text-[13px]

text-gray-600

hover:text-red-500

transition

"

>

${e}

</a>

`).join(``)}


</div>



</div>


`).join(``)}


</div>


</div>


</div>


</div>


`}async function o(){return a(await i())}async function s(e){return`
<nav class="bg-white border-b border-gray-200">

<div 
class="
max-w-[1920px]
mx-auto
h-auto
md:h-10
px-3
md:px-4
xl:px-8
2xl:px-10
flex
flex-col
md:flex-row
items-start
md:items-center
justify-between
gap-2
md:gap-0
"
>


    <div
    class="
    flex
    items-center
    gap-4
    md:gap-8
    w-full
    "
    >


<div
class="
relative
group
shrink-0
"
>

    <a
    href="#"
    class="
    flex
    items-center
    gap-1
    md:gap-2
    text-[12px]
    md:text-[14px]
    font-semibold
    text-gray-800
    h-10
    "
    >

        <i class="${e.categoryIcon}"></i>

        ${e.categoryTitle}

    </a>


   ${await o()}


</div>



<div
class="
flex
items-center
gap-4
md:gap-8
overflow-x-auto
md:overflow-visible
w-full
scrollbar-hide
"
>


${e.menu.map((e,t)=>`

<a
href="${e.link}"
class="
text-[11px]
md:text-[12px]
text-[#62666d]
hover:text-red-500
transition
whitespace-nowrap
shrink-0
"
>

<div
class="
flex
items-center
gap-1
md:gap-1.5
"
>

<i
class="
${e.icon}
text-[10px]
md:text-[11px]
text-gray-400
"
>
</i>


<span>

${e.title}

</span>


</div>

</a>


${t===4?`
<div
class="
hidden
md:block
w-px
h-4
bg-gray-200
"
></div>
`:``}


`).join(``)}


</div>


</div>




<div
class="
flex
items-center
gap-2
h-8
px-3
rounded-full
bg-[#fff3eb]
text-[#f57f17]
text-[12px]
md:text-[13px]
font-medium
cursor-pointer
transition
hover:bg-[#ffe8d9]
shrink-0
"
>


<i 
class="
${e.locationIcon}
text-[14px]
md:text-[15px]
"
>
</i>


<span>
${e.locationText}
</span>


</div>


</div>

</nav>
`}async function c(){let e=await t();return`
    ${n(e.topBanner)}

    ${r(e)}

   ${await s(e)}
    
  `}async function l(){let t=await fetch(`${e}/api/slider`);if(!t.ok)throw Error(`Slider API Error`);return await t.json()}function u(e){return`

<section class="w-full">


<div 
class="
swiper
heroSwiper
w-full
"
>


<div class="swiper-wrapper">


${e.slides.map(e=>`

<div class="swiper-slide">


<img

src="/digikala-web3${e.image}"

class="
w-full

h-auto
sm:h-[250px]
md:h-[400px]

object-contain
md:object-cover

"

>


</div>


`).join(``)}


</div>



<div class="swiper-pagination"></div>



<div
class="
swiper-button-prev
custom-prev

hidden
md:flex

!w-8
!h-8
lg:!w-10
lg:!h-10

"
>
</div>


<div
class="
swiper-button-next
custom-next

hidden
md:flex

!w-8
!h-8
lg:!w-10
lg:!h-10

"
>
</div>



</div>


</section>


`}async function d(){return u(await l())}function f(e){let t=document.getElementById(`mega-menu-content`);t&&(t.innerHTML=`
    <h3
      class="
      text-red-600
      font-bold
      text-[16px]
      mb-8
      ">
      ${e.content.title}
    </h3>

    <div
      class="
      grid
      grid-cols-4
      gap-x-14
      gap-y-10
      ">

      ${e.content.columns.map(e=>`
            <div>

              <h4
                class="
                font-semibold
                text-[14px]
                mb-5
                flex
                items-center
                gap-2ّ
                ">

                <div class="w-[2px] h-4 bg-red-500 rounded-full"></div>

                ${e.title}

              </h4>

              <div class="flex flex-col gap-3">

                ${e.items.map(e=>`
                      <a
                        href="#"
                        class="
                        text-[13px]
                        text-gray-600
                        hover:text-red-500
                        transition
                        ">
                        ${e}
                      </a>
                    `).join(``)}

              </div>

            </div>
          `).join(``)}

    </div>
  `)}async function p(){let e=await i();document.querySelectorAll(`.mega-category`).forEach(t=>{t.addEventListener(`mouseenter`,()=>{let n=Number(t.dataset.categoryId);f(e.categories.find(e=>e.id===n))})})}function m(e=``){return e.trim().split(` `).filter(e=>!!e.trim())}function h(e){Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function g(e,t=0){return setTimeout(e,t)}function _(){return Date.now()}function v(e){return window.getComputedStyle(e,null)}function y(e,t=`x`){let n=v(e),r=n.transform||n.webkitTransform;if(!r||r===`none`)return 0;let i=new DOMMatrixReadOnly(r);return t===`x`?i.m41:i.m42}function b(e){return typeof e==`object`&&!!e&&e.constructor===Object&&Object.prototype.toString.call(e).slice(8,-1)===`Object`}function x(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement||!!e&&typeof e==`object`&&(e.nodeType===1||e.nodeType===11)}function S(e,...t){let n=Object(e);for(let e=0;e<t.length;e+=1){let r=t[e];if(r==null||x(r))continue;let i=r,a=Object.keys(Object(i)).filter(e=>e!==`__proto__`&&e!==`constructor`&&e!==`prototype`);for(let e of a){let t=Object.getOwnPropertyDescriptor(i,e);if(!t||!t.enumerable)continue;let r=i[e];b(n[e])&&b(r)?r.__swiper__?n[e]=r:S(n[e],r):!b(n[e])&&b(r)?(n[e]={},r.__swiper__?n[e]=r:S(n[e],r)):n[e]=r}}return n}function C(e,t,n){e.style.setProperty(t,n)}function w(e,t=``){let n=[...e.children];return e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(e=>e.matches(t)):n}function T(e,t){let n=[t];for(;n.length>0;){let t=n.shift();if(e===t)return!0;n.push(...t.children,...t.shadowRoot?t.shadowRoot.children:[],...t.assignedElements?t.assignedElements():[])}return!1}function E(e,t){let n=t.contains(e);return!n&&t instanceof HTMLSlotElement&&(n=[...t.assignedElements()].includes(e),n||=T(e,t)),n}function D(e){try{console.warn(e)}catch{}}function O(e,t=[]){let n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:m(t)),n}function k(e,t){let n=[],r=e.previousElementSibling;for(;r;)(!t||r.matches(t))&&n.push(r),r=r.previousElementSibling;return n}function A(e,t){let n=[],r=e.nextElementSibling;for(;r;)(!t||r.matches(t))&&n.push(r),r=r.nextElementSibling;return n}function j(e,t){return window.getComputedStyle(e,null).getPropertyValue(t)}function M(e){if(!(!e||!e.parentNode))return[...e.parentNode.children].indexOf(e)}function N(e,t){let n=[],r=e.parentElement;for(;r;)(!t||r.matches(t))&&n.push(r),r=r.parentElement;return n}function P(e,t,n){{let n=window.getComputedStyle(e,null);return e[t===`width`?`offsetWidth`:`offsetHeight`]+parseFloat(n.getPropertyValue(t===`width`?`margin-right`:`margin-top`))+parseFloat(n.getPropertyValue(t===`width`?`margin-left`:`margin-bottom`))}}function F(e){return(Array.isArray(e)?e:[e]).filter(e=>!!e)}function I(e,t=``){let n=globalThis.trustedTypes;e.innerHTML=n===void 0?t:n.createPolicy(`html`,{createHTML:e=>e}).createHTML(t)}var ee;function te(){return typeof window>`u`?{touch:!1}:{touch:`ontouchstart`in window||navigator.maxTouchPoints>0}}function ne(){return ee||=te(),ee}var re;function ie({userAgent:e}={}){if(typeof window>`u`)return{ios:!1,android:!1};let t=ne(),n=navigator.platform,r=e||navigator.userAgent,i={ios:!1,android:!1},a=/(Android);?[\s/]+([\d.]+)?/.test(r),o=/(iPhone\sOS|iOS|iPod)/.test(r),s=/iPad/.test(r),c=n===`MacIntel`&&t.touch&&navigator.maxTouchPoints>1,l=s||c;return a&&n!==`Win32`&&(i.os=`android`,i.android=!0),(l||o)&&(i.os=`ios`,i.ios=!0),i}function L(e={}){return re||=ie(e),re}var R;function ae(){if(typeof window>`u`)return{isSafari:!1,isWebView:!1,need3dFix:!1};let e=L(),t=navigator.userAgent,n=t.toLowerCase(),r=n.includes(`safari`)&&!n.includes(`chrome`)&&!n.includes(`android`),i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t);return{isSafari:r,isWebView:i,need3dFix:r||i&&e.ios}}function z(){return R||=ae(),R}var B=(e,t)=>{if(!e||e.destroyed||!e.params)return;let n=t.closest(e.isElement?`swiper-slide`:`.${e.params.slideClass}`);if(n){let t=n.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(n.shadowRoot?t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{if(n.shadowRoot){let t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`);t&&!t.lazyPreloaderManaged&&t.remove()}})),t&&!t.lazyPreloaderManaged&&t.remove()}},V=(e,t)=>{if(!e.slides[t])return;let n=e.slides[t].querySelector(`[loading="lazy"]`);n&&n.removeAttribute(`loading`)},H=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext,n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);let r=e.params.slidesPerView===`auto`?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&(e.params.grid.rows??1)>1){let n=i,a=[n-t];a.push(...Array.from({length:t}).map((e,t)=>n+r+t)),e.slides.forEach((t,n)=>{t.column!==void 0&&a.includes(t.column)&&V(e,n)});return}let a=i+r-1;if(e.params.rewind||e.params.loop)for(let r=i-t;r<=a+t;r+=1){let t=(r%n+n)%n;(t<i||t>a)&&V(e,t)}else for(let r=Math.max(i-t,0);r<=Math.min(a+t,n-1);r+=1)r!==i&&(r>a||r<i)&&V(e,r)};function oe(e,t=`window`,n){if(!e||t===`container`&&!n)return;let r=!1,i=t===`window`?window.innerHeight:n.clientHeight,a=Object.keys(e).map(e=>{if(typeof e==`string`&&e.indexOf(`@`)===0){let t=parseFloat(e.substr(1));return{value:i*t,point:e}}return{value:e,point:e}});a.sort((e,t)=>parseInt(String(e.value),10)-parseInt(String(t.value),10));for(let e=0;e<a.length;e+=1){let{point:i,value:o}=a[e];t===`window`?window.matchMedia(`(min-width: ${o}px)`).matches&&(r=i):o<=n.clientWidth&&(r=i)}return r||`max`}var U=(e,t)=>!!(e.grid&&t.grid&&t.grid.rows>1);function se(){let e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;let o=r.breakpointsBase===`window`||!r.breakpointsBase?r.breakpointsBase:`container`,s=[`window`,`container`].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:document.querySelector(r.breakpointsBase),c=e.getBreakpoint(a,o,s);if(!c||e.currentBreakpoint===c)return;let l=a,u=(c in l?l[c]:void 0)||e.originalParams,d=U(e,r),f=U(e,u),p=e.params.grabCursor,m=u.grabCursor,h=r.enabled;d&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill===`column`||!u.grid.fill&&r.grid.fill===`column`)&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!m?e.unsetGrabCursor():!p&&m&&e.setGrabCursor();let g=(e,t)=>e[t];[`navigation`,`pagination`,`scrollbar`].forEach(t=>{let n=g(u,t);if(n===void 0)return;let i=g(r,t),a=typeof i==`object`&&!!i&&i.enabled,o=typeof n==`object`&&!!n&&n.enabled,s=e[t];a&&!o&&s?.disable?.(),!a&&o&&s?.enable?.()});let _=u.direction&&u.direction!==r.direction,v=r.loop&&(u.slidesPerView!==r.slidesPerView||_),y=r.loop;_&&n&&e.changeDirection(),S(e.params,u);let b=e.params.enabled,x=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!b?e.disable():!h&&b&&e.enable(),e.currentBreakpoint=c,e.emit(`_beforeBreakpoint`,u),n&&(v?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!y&&x?(e.loopCreate(t),e.updateSlides()):y&&!x&&e.loopDestroy()),e.emit(`breakpoint`,u)}var ce={setBreakpoint:se,getBreakpoint:oe};function le(){let e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){let t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+r*2;e.isLocked=e.size>n}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?`lock`:`unlock`)}var ue={checkOverflow:le};function de(e,t){let n=[];return e.forEach(e=>{typeof e==`object`?Object.keys(e).forEach(r=>{e[r]&&n.push(t+r)}):typeof e==`string`&&n.push(t+e)}),n}function fe(){let e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=de([`initialized`,n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill===`column`},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function pe(){let e=this,{el:t,classNames:n}=e;!t||typeof t==`string`||(t.classList.remove(...n),e.emitContainerClasses())}var me={addClasses:fe,removeClasses:pe},W={init:!0,direction:`horizontal`,oneWayMovement:!1,swiperElementNodeName:`SWIPER-CONTAINER`,touchEventsTarget:`wrapper`,initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:`swiper`,enabled:!0,focusableElements:`input, select, option, textarea, button, video, label`,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:`slide`,breakpoints:void 0,breakpointsBase:`window`,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:`swiper-no-swiping`,noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:`swiper-`,slideClass:`swiper-slide`,slideBlankClass:`swiper-slide-blank`,slideActiveClass:`swiper-slide-active`,slideVisibleClass:`swiper-slide-visible`,slideFullyVisibleClass:`swiper-slide-fully-visible`,slideNextClass:`swiper-slide-next`,slidePrevClass:`swiper-slide-prev`,wrapperClass:`swiper-wrapper`,lazyPreloaderClass:`swiper-lazy-preloader`,lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1},he={on(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;let i=n?`unshift`:`push`;return e.split(` `).forEach(e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)}),r},once(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;let i=function(...n){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,n)};return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){let n=this;if(!n.eventsListeners||n.destroyed||typeof e!=`function`)return n;let r=t?`unshift`:`push`;return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;let n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){let n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(` `).forEach(e=>{t===void 0?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach((r,i)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)})}),n},emit(...e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;if(typeof e[0]==`string`||Array.isArray(e[0]))n=e[0],r=e.slice(1,e.length),i=t;else{let a=e[0];n=a.events,r=a.data??[],i=a.context||t}return r.unshift(i),(Array.isArray(n)?n:n.split(` `)).forEach(e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(t=>{t.apply(i,[e,...r])}),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach(e=>{e.apply(i,r)})}),t}};function ge(e){let t=this;t.destroyed||t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function _e(){let e=this;e.destroyed||e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction=`auto`))}function ve(e){let t=this;t.destroyed||(B(t,e.target),!(t.params.cssMode||t.params.slidesPerView!==`auto`&&!t.params.autoHeight)&&t.update())}function ye(){let e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();let{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual?.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();let s=o&&t.loop;if((t.slidesPerView===`auto`||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s){let t=o?e.virtual.slides.length:e.slides.length;e.slideTo(t-1,0,!1,!0)}else e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);if(e.autoplay&&e.autoplay.running&&e.autoplay.paused){let t=e.autoplay;clearTimeout(t.resizeTimeout),t.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)}e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function be(){let e=this;if(e.destroyed)return;let{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.translate=e.isHorizontal()?-t.scrollLeft:-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i,a=e.maxTranslate()-e.minTranslate();i=a===0?0:(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit(`setTranslate`,e.translate,!1)}function xe(e){let t=this;if(t.destroyed)return;let n=t.touchEventsData,r=e.originalEvent??e;if(r.type!==`touchend`&&r.type!==`touchcancel`){if(n.touchId!==null||r.pointerId!==n.pointerId)return}else{let e=[...r.changedTouches].find(e=>e.identifier===n.touchId);if(!e||e.identifier!==n.touchId)return}if([`pointercancel`,`pointerout`,`pointerleave`,`contextmenu`].includes(r.type)&&!([`pointercancel`,`contextmenu`].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;let{params:i,touches:a,rtlTranslate:o,slidesGrid:s,enabled:c}=t;if(!c||!i.simulateTouch&&r.pointerType===`mouse`)return;if(n.allowTouchCallbacks&&t.emit(`touchEnd`,r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&i.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}i.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);let l=_(),u=l-n.touchStartTime;if(t.allowClick){let e=r.path??(r.composedPath&&r.composedPath());t.updateClickedSlide(e&&e[0],e),t.emit(`tap click`,r),u<300&&l-n.lastClickTime<300&&t.emit(`doubleTap doubleClick`,r)}if(n.lastClickTime=_(),g(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let d;if(d=i.followFinger?o?t.translate:-t.translate:-(n.currentTranslate??0),i.cssMode)return;if(i.freeMode&&i.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:d});return}let f=d>=-t.maxTranslate()&&!t.params.loop,p=0,m=t.slidesSizesGrid[0];for(let e=0;e<s.length;e+=e<i.slidesPerGroupSkip?1:i.slidesPerGroup){let t=e<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;s[e+t]===void 0?(f||d>=s[e])&&(p=e,m=s[s.length-1]-s[s.length-2]):(f||d>=s[e]&&d<s[e+t])&&(p=e,m=s[e+t]-s[e])}let h=null,v=null;i.rewind&&(t.isBeginning?v=i.virtual?.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(h=0));let y=(d-s[p])/m,b=p<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(u>i.longSwipesMs){if(!i.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection===`next`&&(y>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?h:p+b):t.slideTo(p)),t.swipeDirection===`prev`&&(y>1-i.longSwipesRatio?t.slideTo(p+b):v!==null&&y<0&&Math.abs(y)>i.longSwipesRatio?t.slideTo(v):t.slideTo(p))}else{if(!i.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(p+b):t.slideTo(p):(t.swipeDirection===`next`&&t.slideTo(h===null?p+b:h),t.swipeDirection===`prev`&&t.slideTo(v===null?p:v))}}function Se(e){let t=this;if(t.destroyed)return;let n=t.touchEventsData,{params:r,touches:i,rtlTranslate:a,enabled:o}=t;if(!o||!r.simulateTouch&&e.pointerType===`mouse`)return;let s=e,c=s.originalEvent??s;if(c.type===`pointermove`&&(n.touchId!==null||c.pointerId!==n.pointerId))return;let l;if(c.type===`touchmove`){let e=[...c.changedTouches].find(e=>e.identifier===n.touchId);if(!e||e.identifier!==n.touchId)return;l=e}else l=c;if(!n.isTouched){n.startMoving&&n.isScrolling&&t.emit(`touchMoveOpposite`,c);return}let u=l.pageX,d=l.pageY;if(c.preventedByNestedSwiper){i.startX=u,i.startY=d;return}if(!t.allowTouchMove){c.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(i,{startX:u,startY:d,currentX:u,currentY:d}),n.touchStartTime=_());return}if(r.touchReleaseOnEdges&&!r.loop){if(t.isVertical()){if(d<i.startY&&t.translate<=t.maxTranslate()||d>i.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(a&&(u>i.startX&&-t.translate<=t.maxTranslate()||u<i.startX&&-t.translate>=t.minTranslate()))return;else if(!a&&(u<i.startX&&t.translate<=t.maxTranslate()||u>i.startX&&t.translate>=t.minTranslate()))return}if(document.activeElement&&document.activeElement.matches(n.focusableElements)&&document.activeElement!==c.target&&c.pointerType!==`mouse`&&document.activeElement.blur(),document.activeElement&&c.target===document.activeElement&&c.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}n.allowTouchCallbacks&&t.emit(`touchMove`,c),i.previousX=i.currentX,i.previousY=i.currentY,i.currentX=u,i.currentY=d;let f=i.currentX-i.startX,p=i.currentY-i.startY;if(t.params.threshold&&Math.sqrt(f**2+p**2)<t.params.threshold)return;if(n.isScrolling===void 0){let e;t.isHorizontal()&&i.currentY===i.startY||t.isVertical()&&i.currentX===i.startX?n.isScrolling=!1:f*f+p*p>=25&&(e=Math.atan2(Math.abs(p),Math.abs(f))*180/Math.PI,n.isScrolling=t.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(n.isScrolling&&t.emit(`touchMoveOpposite`,c),n.startMoving===void 0&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(n.startMoving=!0),n.isScrolling||c.type===`touchmove`&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation();let m=t.isHorizontal()?f:p,h=t.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;r.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),h=Math.abs(h)*(a?1:-1)),i.diff=m,m*=r.touchRatio,a&&(m=-m,h=-h);let g=t.touchesDirection;t.swipeDirection=m>0?`prev`:`next`,t.touchesDirection=h>0?`prev`:`next`;let v=t.params.loop&&!r.cssMode,y=t.touchesDirection===`next`&&t.allowSlideNext||t.touchesDirection===`prev`&&t.allowSlidePrev;if(!n.isMoved){if(v&&y&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){let e=new window.CustomEvent(`transitionend`,{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(e)}n.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit(`sliderFirstMove`,c)}if(new Date().getTime(),r._loopSwapReset!==!1&&n.isMoved&&n.allowThresholdMove&&g!==t.touchesDirection&&v&&y&&Math.abs(m)>=1){Object.assign(i,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}t.emit(`sliderMove`,c),n.isMoved=!0;let b=n.startTranslate??0;n.currentTranslate=m+b;let x=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),m>0?(v&&y&&n.allowThresholdMove&&n.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(r.slidesPerView!==`auto`&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:`prev`,setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(x=!1,r.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+b+m)**S))):m<0&&(v&&y&&n.allowThresholdMove&&n.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(r.slidesPerView!==`auto`&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:`next`,setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView===`auto`?t.slidesPerViewDynamic():Math.ceil(parseFloat(String(r.slidesPerView))))}),n.currentTranslate<t.maxTranslate()&&(x=!1,r.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-b-m)**S))),x&&(c.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection===`next`&&(n.currentTranslate??0)<b&&(n.currentTranslate=b),!t.allowSlidePrev&&t.swipeDirection===`prev`&&(n.currentTranslate??0)>b&&(n.currentTranslate=b),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=b),r.threshold>0)if(Math.abs(m)>r.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,n.currentTranslate=n.startTranslate,i.diff=t.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{n.currentTranslate=n.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate??0))}function Ce(e,t){function n(t){if(!t||t===document||t===window)return null;let r=t;r.assignedSlot&&(r=r.assignedSlot);let i=r.closest(e);if(!i&&!r.getRootNode)return null;let a=r.getRootNode();return i||n(a.host)}return n(t)}function G(e,t,n){let{params:r}=e,i=r.edgeSwipeDetection,a=r.edgeSwipeThreshold;return i&&(n<=a||n>=window.innerWidth-a)?i===`prevent`&&(t.preventDefault(),!0):!0}function we(e){let t=this;if(t.destroyed)return;let n=e.originalEvent??e,r=t.touchEventsData;if(n.type===`pointerdown`){let e=n;if(r.pointerId!==null&&r.pointerId!==e.pointerId)return;r.pointerId=e.pointerId}else n.type===`touchstart`&&n.targetTouches.length===1&&(r.touchId=n.targetTouches[0].identifier);if(n.type===`touchstart`){G(t,n,n.targetTouches[0].pageX);return}let{params:i,touches:a,enabled:o}=t;if(!o||!i.simulateTouch&&n.pointerType===`mouse`||t.animating&&i.preventInteractionOnTransition)return;!t.animating&&i.cssMode&&i.loop&&t.loopFix();let s=n.target;if(i.touchEventsTarget===`wrapper`&&!E(s,t.wrapperEl))return;let c=n;if(typeof c.which==`number`&&c.which===3||typeof c.button==`number`&&c.button>0||r.isTouched&&r.isMoved)return;let l=!!i.noSwipingClass&&i.noSwipingClass!==``,u=n.composedPath?n.composedPath():n.path;l&&n.target&&n.target.shadowRoot&&u&&(s=u[0]);let d=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,f=!!(n.target&&n.target.shadowRoot);if(i.noSwiping&&(f?Ce(d,s):s.closest(d))){t.allowClick=!0;return}if(i.swipeHandler&&typeof i.swipeHandler==`string`&&!s.closest(i.swipeHandler))return;let p=n;a.currentX=p.pageX,a.currentY=p.pageY;let m=a.currentX,h=a.currentY;if(!G(t,n,m))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=m,a.startY=h,r.touchStartTime=_(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,i.threshold>0&&(r.allowThresholdMove=!1);let g=!0;s.matches(r.focusableElements)&&(g=!1,s.nodeName===`SELECT`&&(r.isTouched=!1)),document.activeElement&&document.activeElement.matches(r.focusableElements)&&document.activeElement!==s&&(p.pointerType===`mouse`||p.pointerType!==`mouse`&&!s.matches(r.focusableElements))&&document.activeElement.blur();let v=g&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||v)&&!s.isContentEditable&&n.preventDefault(),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.animating&&!i.cssMode&&t.freeMode.onTouchStart(),t.emit(`touchStart`,n)}var K=(e,t)=>{let{params:n,el:r,wrapperEl:i,device:a}=e,o=!!n.nested,s=t===`on`?`addEventListener`:`removeEventListener`,c=t;if(!r||typeof r==`string`)return;document[s](`touchstart`,e.onDocumentTouchStart,{passive:!1,capture:o}),r[s](`touchstart`,e.onTouchStart,{passive:!1}),r[s](`pointerdown`,e.onTouchStart,{passive:!1}),document[s](`touchmove`,e.onTouchMove,{passive:!1,capture:o}),document[s](`pointermove`,e.onTouchMove,{passive:!1,capture:o}),document[s](`touchend`,e.onTouchEnd,{passive:!0}),document[s](`pointerup`,e.onTouchEnd,{passive:!0}),document[s](`pointercancel`,e.onTouchEnd,{passive:!0}),document[s](`touchcancel`,e.onTouchEnd,{passive:!0}),document[s](`pointerout`,e.onTouchEnd,{passive:!0}),document[s](`pointerleave`,e.onTouchEnd,{passive:!0}),document[s](`contextmenu`,e.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&r[s](`click`,e.onClick,!0),n.cssMode&&i[s](`scroll`,e.onScroll);let l=t=>{e[c](t,ye,!0)};n.updateOnWindowResize?l(a.ios||a.android?`resize orientationchange observerUpdate`:`resize observerUpdate`):l(`observerUpdate`),r[s](`load`,e.onLoad,{capture:!0})};function Te(){let e=this,{params:t}=e;e.onTouchStart=we.bind(e),e.onTouchMove=Se.bind(e),e.onTouchEnd=xe.bind(e),e.onDocumentTouchStart=_e.bind(e),t.cssMode&&(e.onScroll=be.bind(e)),e.onClick=ge.bind(e),e.onLoad=ve.bind(e),K(e,`on`)}function Ee(){K(this,`off`)}var De={attachEvents:Te,detachEvents:Ee};function Oe(e){let t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;let n=t.params.touchEventsTarget===`container`?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor=`move`,n.style.cursor=e?`grabbing`:`grab`,t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function ke(){let e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget===`container`?`el`:`wrapperEl`].style.cursor=``,e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Ae={setGrabCursor:Oe,unsetGrabCursor:ke};function je(e,t){let n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual?.enabled)return;let a=()=>{w(i,`.${r.slideClass}, swiper-slide`).forEach((e,t)=>{e.setAttribute(`data-swiper-slide-index`,String(t))})},o=()=>{let e=w(i,`.${r.slideBlankClass}`);e.forEach(e=>{e.remove()}),e.length>0&&(n.recalcSlides(),n.updateSlides())},s=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||s)&&o();let c=r.slidesPerGroup*(s?r.grid.rows:1),l=n.slides.length%c!==0,u=s&&n.slides.length%r.grid.rows!==0,d=e=>{for(let t=0;t<e;t+=1){let e=n.isElement?O(`swiper-slide`,[r.slideBlankClass]):O(`div`,[r.slideClass,r.slideBlankClass]);n.slidesEl.append(e)}};l?(r.loopAddBlankSlides?(d(c-n.slides.length%c),n.recalcSlides(),n.updateSlides()):D(`Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`),a()):(u&&(r.loopAddBlankSlides?(d(r.grid.rows-n.slides.length%r.grid.rows),n.recalcSlides(),n.updateSlides()):D(`Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`)),a());let f=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:f?void 0:`next`,initial:t})}function Me(){let e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual?.enabled)return;e.recalcSlides();let r=[];e.slides.forEach(e=>{let t=e,n=t.swiperSlideIndex===void 0?Number(e.getAttribute(`data-swiper-slide-index`)):t.swiperSlideIndex;r[n]=e}),e.slides.forEach(e=>{e.removeAttribute(`data-swiper-slide-index`)}),r.forEach(e=>{n.append(e)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}function Ne(e={}){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:a,initial:o,byController:s,byMousewheel:c}=e,l=a,u=this;if(!u.params.loop)return;u.emit(`beforeLoopFix`);let{slides:d,allowSlidePrev:f,allowSlideNext:p,slidesEl:m,params:h}=u,{centeredSlides:g,slidesOffsetBefore:_,slidesOffsetAfter:v,initialSlide:y}=h,b=g||!!_||!!v;if(u.allowSlidePrev=!0,u.allowSlideNext=!0,u.virtual&&h.virtual?.enabled){if(n){let e=u.virtual.slides.length,t=u.virtual.slidesBefore??0;!b&&u.snapIndex===0?u.slideTo(e,0,!1,!0):b&&u.snapIndex<h.slidesPerView?u.slideTo(e+u.snapIndex,0,!1,!0):u.snapIndex===u.snapGrid.length-1&&u.slideTo(t,0,!1,!0)}u.allowSlidePrev=f,u.allowSlideNext=p,u.emit(`loopFix`);return}let x=h.slidesPerView;x===`auto`?x=u.slidesPerViewDynamic():(x=Math.ceil(parseFloat(String(h.slidesPerView))),b&&x%2==0&&(x+=1));let S=h.slidesPerGroupAuto?x:h.slidesPerGroup,C=b?Math.max(S,Math.ceil(x/2)):S;C%S!==0&&(C+=S-C%S),C+=h.loopAdditionalSlides,u.loopedSlides=C;let w=u.grid&&h.grid&&h.grid.rows>1;d.length<x+C||u.params.effect===`cards`&&d.length<x+C*2?D(`Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters`):w&&h.grid.fill===`row`&&D("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let T=[],E=[],O=w?Math.ceil(d.length/h.grid.rows):d.length,k=o&&O-y<x&&!b,A=k?y:u.activeIndex;l===void 0?l=u.getSlideIndex(d.find(e=>e.classList.contains(h.slideActiveClass))):A=l;let j=r===`next`||!r,M=r===`prev`||!r,N=0,P=0,F=(w?d[l].column??0:l)+(b&&i===void 0?-x/2+.5:0);if(F<C){N=Math.max(C-F,S);for(let e=0;e<C-F;e+=1){let t=e-Math.floor(e/O)*O;if(w){let e=O-t-1;for(let t=d.length-1;t>=0;--t)d[t].column===e&&T.push(t)}else T.push(O-t-1)}}else if(F+x>O-C){P=Math.max(F-(O-C*2),S),k&&(P=Math.max(P,x-O+y+1));for(let e=0;e<P;e+=1){let t=e-Math.floor(e/O)*O;w?d.forEach((e,n)=>{e.column===t&&E.push(n)}):E.push(t)}}if(u.__preventObserver__=!0,requestAnimationFrame(()=>{u.__preventObserver__=!1}),u.params.effect===`cards`&&d.length<x+C*2&&(E.includes(l)&&E.splice(E.indexOf(l),1),T.includes(l)&&T.splice(T.indexOf(l),1)),M&&T.forEach(e=>{let t=d[e];t.swiperLoopMoveDOM=!0,m.prepend(t),t.swiperLoopMoveDOM=!1}),j&&E.forEach(e=>{let t=d[e];t.swiperLoopMoveDOM=!0,m.append(t),t.swiperLoopMoveDOM=!1}),u.recalcSlides(),h.slidesPerView===`auto`?u.updateSlides():w&&(T.length>0&&M||E.length>0&&j)&&u.slides.forEach((e,t)=>{u.grid.updateSlide(t,e,u.slides)}),h.watchSlidesProgress&&u.updateSlidesOffset(),n){if(T.length>0&&M){if(t===void 0){let e=u.slidesGrid[A],t=u.slidesGrid[A+N]-e;c?u.setTranslate(u.translate-t):(u.slideTo(A+Math.ceil(N),0,!1,!0),i&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-t,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-t))}else if(i){let e=w?T.length/h.grid.rows:T.length;u.slideTo(u.activeIndex+e,0,!1,!0),u.touchEventsData.currentTranslate=u.translate}}else if(E.length>0&&j)if(t===void 0){let e=u.slidesGrid[A],t=u.slidesGrid[A-P]-e;c?u.setTranslate(u.translate-t):(u.slideTo(A-P,0,!1,!0),i&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-t,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-t))}else{let e=w?E.length/h.grid.rows:E.length;u.slideTo(u.activeIndex-e,0,!1,!0)}}u.allowSlidePrev=f,u.allowSlideNext=p;let I=u.controller?.control;if(I&&!s){let e={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:l,byController:!0};Array.isArray(I)?I.forEach(t=>{!t.destroyed&&t.params.loop&&t.loopFix({...e,slideTo:t.params.slidesPerView===h.slidesPerView&&n})}):I instanceof u.constructor&&I.params.loop&&I.loopFix({...e,slideTo:I.params.slidesPerView===h.slidesPerView&&n})}u.emit(`loopFix`)}var Pe={loopCreate:je,loopFix:Ne,loopDestroy:Me};function Fe(e,t){return function(n={}){let r=Object.keys(n)[0],i=n[r];if(typeof i!=`object`||!i){S(t,n);return}if(e[r]===!0&&(e[r]={enabled:!0}),r===`navigation`&&e[r]&&e[r].enabled&&!e[r].prevEl&&!e[r].nextEl&&(e[r].auto=!0),[`pagination`,`scrollbar`].indexOf(r)>=0&&e[r]&&e[r].enabled&&!e[r].el&&(e[r].auto=!0),!(r in e&&`enabled`in i)){S(t,n);return}typeof e[r]==`object`&&!(`enabled`in e[r])&&(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),S(t,n)}}var Ie=({swiper:e,extendParams:t,on:n})=>{let r=[],i=(t,n={})=>{let i=window.MutationObserver||window.WebkitMutationObserver;if(!i)return;let a=new i(t=>{if(e.__preventObserver__)return;if(t.length===1){e.emit(`observerUpdate`,t[0]);return}let n=function(){e.emit(`observerUpdate`,t[0])};window.requestAnimationFrame?window.requestAnimationFrame(n):window.setTimeout(n,0)});a.observe(t,{attributes:n.attributes===void 0||n.attributes,childList:e.isElement||n.childList===void 0||n.childList,characterData:n.characterData===void 0||n.characterData}),r.push(a)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n(`init`,()=>{if(e.params.observer){if(e.params.observeParents){let t=N(e.hostEl);for(let e=0;e<t.length;e+=1)i(t[e])}i(e.hostEl,{childList:e.params.observeSlideChildren}),i(e.wrapperEl,{attributes:!1})}}),n(`destroy`,()=>{r.forEach(e=>{e.disconnect()}),r.splice(0,r.length)})},Le=({swiper:e,on:t,emit:n})=>{let r=null,i=null,a=()=>{!e||e.destroyed||!e.initialized||(n(`beforeResize`),n(`resize`))},o=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(t=>{i=window.requestAnimationFrame(()=>{let{width:n,height:r}=e,i=n,o=r;t.forEach(({contentBoxSize:t,contentRect:n,target:r})=>{if(r&&r!==e.el)return;let a=Array.isArray(t)?t[0]:t;i=n?n.width:a.inlineSize,o=n?n.height:a.blockSize}),(i!==n||o!==r)&&a()})}),r.observe(e.el))},s=()=>{i&&window.cancelAnimationFrame(i),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},c=()=>{!e||e.destroyed||!e.initialized||n(`orientationchange`)};t(`init`,()=>{if(e.params.resizeObserver&&window.ResizeObserver!==void 0){o();return}window.addEventListener(`resize`,a),window.addEventListener(`orientationchange`,c)}),t(`destroy`,()=>{s(),window.removeEventListener(`resize`,a),window.removeEventListener(`orientationchange`,c)})};function Re(e,t=!0,n){let r=this,{enabled:i,params:a,animating:o}=r;if(!i||r.destroyed)return r;e===void 0&&(e=r.params.speed);let s=a.slidesPerGroup;a.slidesPerView===`auto`&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic(`current`,!0),1));let c=r.activeIndex<a.slidesPerGroupSkip?1:s,l=r.virtual&&a.virtual?.enabled;if(a.loop){if(o&&!l&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:`next`}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+c,e,t,n)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+c,e,t,n)}function ze(e,t=!0,n){let r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:c,animating:l}=r;if(!c||r.destroyed)return r;e===void 0&&(e=r.params.speed);let u=r.virtual&&i.virtual?.enabled;if(i.loop){if(l&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:`prev`}),r._clientLeft=r.wrapperEl.clientLeft}let d=s?r.translate:-r.translate;function f(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}let p=f(d),m=a.map(e=>f(e)),h=i.freeMode&&i.freeMode.enabled,g=a[m.indexOf(p)-1];if(g===void 0&&(i.cssMode||h)){let e;a.forEach((t,n)=>{p>=t&&(e=n)}),e!==void 0&&(g=h?a[e]:a[e>0?e-1:e])}let _=0;if(g!==void 0&&(_=o.indexOf(g),_<0&&(_=r.activeIndex-1),i.slidesPerView===`auto`&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(_=_-r.slidesPerViewDynamic(`previous`,!0)+1,_=Math.max(_,0))),i.rewind&&r.isBeginning){let i=r.params.virtual?.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(i,e,t,n)}return i.loop&&r.activeIndex===0&&i.cssMode?(requestAnimationFrame(()=>{r.slideTo(_,e,t,n)}),!0):r.slideTo(_,e,t,n)}function Be(e,t=!0,n){let r=this;if(!r.destroyed)return e===void 0&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function Ve(e=0,t,n=!0,r,i){typeof e==`string`&&(e=parseInt(e,10));let a=this,o=e;o<0&&(o=0);let{params:s,snapGrid:c,slidesGrid:l,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:p,enabled:m}=a;if(!m&&!r&&!i||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;t===void 0&&(t=a.params.speed);let h=Math.min(a.params.slidesPerGroupSkip,o),g=h+Math.floor((o-h)/a.params.slidesPerGroup);g>=c.length&&(g=c.length-1);let _=-c[g];if(s.normalizeSlideIndex)for(let e=0;e<l.length;e+=1){let t=-Math.floor(_*100),n=Math.floor(l[e]*100),r=Math.floor(l[e+1]*100);l[e+1]===void 0?t>=n&&(o=e):t>=n&&t<r-(r-n)/2?o=e:t>=n&&t<r&&(o=e+1)}if(a.initialized&&o!==d&&(!a.allowSlideNext&&(f?_>a.translate&&_>a.minTranslate():_<a.translate&&_<a.minTranslate())||!a.allowSlidePrev&&_>a.translate&&_>a.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&n&&a.emit(`beforeSlideChangeStart`),a.updateProgress(_);let v;v=o>d?`next`:o<d?`prev`:`reset`;let y=a.virtual&&a.params.virtual?.enabled;if(!(y&&i)&&(f&&-_===a.translate||!f&&_===a.translate))return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!==`slide`&&a.setTranslate(_),v!==`reset`&&(a.transitionStart(n,v),a.transitionEnd(n,v)),!1;if(s.cssMode){let e=a.isHorizontal(),n=f?_:-_;return t===0?(y&&(a.wrapperEl.style.scrollSnapType=`none`,a._immediateVirtual=!0),y&&!a._cssModeVirtualInitialSet&&(a.params.initialSlide??0)>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[e?`scrollLeft`:`scrollTop`]=n})):p[e?`scrollLeft`:`scrollTop`]=n,y&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType=``,a._immediateVirtual=!1})):p.scrollTo({[e?`left`:`top`]:n,behavior:`smooth`}),!0}let b=z().isSafari;return y&&!i&&b&&a.isElement&&a.virtual.update(!1,!1,o),a.setTransition(t),a.setTranslate(_),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit(`beforeTransitionStart`,t,r),a.transitionStart(n,v),t===0?a.transitionEnd(n,v):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,v))},a.wrapperEl.addEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd)),!0}function He(){let e=this;if(e.destroyed)return;let{params:t,slidesEl:n,clickedSlide:r,clickedIndex:i}=e;if(r===void 0||i===void 0)return;let a=t.slidesPerView===`auto`?e.slidesPerViewDynamic():t.slidesPerView,o=e.getSlideIndexWhenGrid(i),s,c=e.isElement?`swiper-slide`:`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;s=parseInt(r.getAttribute(`data-swiper-slide-index`),10),t.centeredSlides?e.slideToLoop(s):o>(l?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),o=e.getSlideIndex(w(n,`${c}[data-swiper-slide-index="${s}"]`)[0]),g(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}function Ue(e,t=!0,n,r=.5){let i=this;if(i.destroyed)return;e===void 0&&(e=i.params.speed);let a=i.activeIndex,o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),c=i.rtlTranslate?i.translate:-i.translate;if(c>=i.snapGrid[s]){let e=i.snapGrid[s],t=i.snapGrid[s+1];c-e>(t-e)*r&&(a+=i.params.slidesPerGroup)}else{let e=i.snapGrid[s-1],t=i.snapGrid[s];c-e<=(t-e)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function We(e=0,t,n=!0,r){typeof e==`string`&&(e=parseInt(e,10));let i=this;if(i.destroyed)return;t===void 0&&(t=i.params.speed);let a=i.grid&&i.params.grid&&i.params.grid.rows>1,o=e;if(i.params.loop)if(i.virtual&&i.params.virtual?.enabled)o+=i.virtual.slidesBefore??0;else{let e;if(a){let t=o*i.params.grid.rows;e=i.slides.find(e=>Number(e.getAttribute(`data-swiper-slide-index`))===t)?.column??0}else e=i.getSlideIndexByData(o);let t=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:n,slidesOffsetBefore:s,slidesOffsetAfter:c}=i.params,l=n||!!s||!!c,u;i.params.slidesPerView===`auto`?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(String(i.params.slidesPerView))),l&&u%2==0&&(u+=1));let d=t-e<u;if(l&&(d||=e<Math.ceil(u/2)),r&&l&&i.params.slidesPerView!==`auto`&&!a&&(d=!1),d){let n=l?e<i.activeIndex?`prev`:`next`:e-i.activeIndex-1<i.params.slidesPerView?`next`:`prev`;i.loopFix({direction:n,slideTo:!0,activeSlideIndex:n===`next`?e+1:e-t+1,slideRealIndex:n===`next`?i.realIndex:void 0})}if(a){let e=o*i.params.grid.rows;o=i.slides.find(t=>Number(t.getAttribute(`data-swiper-slide-index`))===e)?.column??0}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}var Ge={slideTo:Ve,slideToLoop:We,slideNext:Re,slidePrev:ze,slideReset:Be,slideToClosest:Ue,slideToClickedSlide:He};function Ke(e,t){let n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?`0ms`:``),n.emit(`setTransition`,e,t)}function q({swiper:e,runCallbacks:t,direction:n,step:r}){let{activeIndex:i,previousIndex:a}=e,o=n;o||=i>a?`next`:i<a?`prev`:`reset`,e.emit(`transition${r}`),t&&o===`reset`?e.emit(`slideResetTransition${r}`):t&&i!==a&&(e.emit(`slideChangeTransition${r}`),o===`next`?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function qe(e=!0,t){let n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),q({swiper:n,runCallbacks:e,direction:t,step:`End`}))}function Je(e=!0,t){let n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),q({swiper:n,runCallbacks:e,direction:t,step:`Start`}))}var Ye={setTransition:Ke,transitionStart:Je,transitionEnd:qe};function Xe(e=this.isHorizontal()?`x`:`y`){let t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=y(a,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function Ze(){return-this.snapGrid[this.snapGrid.length-1]}function Qe(){return-this.snapGrid[0]}function $e(e,t){let n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n,s=0,c=0;n.isHorizontal()?s=r?-e:e:c=e,i.roundLengths&&(s=Math.floor(s),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:c,i.cssMode?a[n.isHorizontal()?`scrollLeft`:`scrollTop`]=n.isHorizontal()?-s:-c:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${c}px, 0px)`);let l,u=n.maxTranslate()-n.minTranslate();l=u===0?0:(e-n.minTranslate())/u,l!==o&&n.updateProgress(e),n.emit(`setTranslate`,n.translate,t)}function et(e=0,t=this.params.speed,n=!0,r=!0,i){let a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;let c=a.minTranslate(),l=a.maxTranslate(),u;if(u=r&&e>c?c:r&&e<l?l:e,a.updateProgress(u),o.cssMode){let e=a.isHorizontal();return t===0?s[e?`scrollLeft`:`scrollTop`]=-u:s.scrollTo({[e?`left`:`top`]:-u,behavior:`smooth`}),!0}return t===0?(a.setTransition(0),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionEnd`))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionStart`)),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit(`transitionEnd`))},a.wrapperEl.addEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd))),!0}var tt={getTranslate:Xe,setTranslate:$e,minTranslate:Qe,maxTranslate:Ze,translateTo:et};function nt(e){let{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate,i;for(let e=0;e<t.length;e+=1)t[e+1]===void 0?r>=t[e]&&(i=e):r>=t[e]&&r<t[e+1]-(t[e+1]-t[e])/2?i=e:r>=t[e]&&r<t[e+1]&&(i=e+1);return n.normalizeSlideIndex&&(i<0||i===void 0)&&(i=0),i}function rt(e){let t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:s}=t,c=e,l,u=e=>{let n=t.virtual.slides,r=e-(t.virtual.slidesBefore??0);return r<0&&(r=n.length+r),r>=n.length&&(r-=n.length),r};if(c===void 0&&(c=nt(t)),r.indexOf(n)>=0)l=r.indexOf(n);else{let e=Math.min(i.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/i.slidesPerGroup)}if(l>=r.length&&(l=r.length-1),c===a&&!t.params.loop){l!==s&&(t.snapIndex=l,t.emit(`snapIndexChange`));return}if(c===a&&t.params.loop&&t.virtual&&t.params.virtual?.enabled){t.realIndex=u(c);return}let d=t.grid&&i.grid&&i.grid.rows>1,f;if(t.virtual&&i.virtual?.enabled)f=i.loop?u(c):c;else if(d){let e=t.slides.find(e=>e.column===c),n=parseInt(e.getAttribute(`data-swiper-slide-index`),10);Number.isNaN(n)&&(n=Math.max(t.slides.indexOf(e),0)),f=Math.floor(n/i.grid.rows)}else if(t.slides[c]){let e=t.slides[c].getAttribute(`data-swiper-slide-index`);f=e?parseInt(e,10):c}else f=c;Object.assign(t,{previousSnapIndex:s,snapIndex:l,previousRealIndex:o,realIndex:f,previousIndex:a,activeIndex:c}),t.initialized&&H(t),t.emit(`activeIndexChange`),t.emit(`snapIndexChange`),(t.initialized||t.params.runCallbacksOnInit)&&(o!==f&&t.emit(`realIndexChange`),t.emit(`slideChange`))}function it(e){let t=this,n=[],r=t.virtual&&t.params.virtual?.enabled,i=0,a;typeof e==`number`?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);let o=e=>r?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if(t.params.slidesPerView!==`auto`&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(e=>{n.push(e)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){let e=t.activeIndex+a;if(e>t.slides.length&&!r)break;let i=o(e);i&&n.push(i)}else{let e=o(t.activeIndex);e&&n.push(e)}for(a=0;a<n.length;a+=1)if(n[a]!==void 0){let e=n[a].offsetHeight;i=e>i?e:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function at(e,t){let n=this,r=n.params,i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(e=>{!i&&e.matches&&e.matches(`.${r.slideClass}, swiper-slide`)&&(i=e)});let a=!1,o;if(i){for(let e=0;e<n.slides.length;e+=1)if(n.slides[e]===i){a=!0,o=e;break}}if(i&&a)n.clickedSlide=i,n.clickedIndex=n.virtual&&n.params.virtual?.enabled?parseInt(i.getAttribute(`data-swiper-slide-index`),10):o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}function ot(e){let t=this;if(e===void 0){let n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}let n=t.params,r=t.maxTranslate()-t.minTranslate(),{progress:i,isBeginning:a,isEnd:o}=t,s=t.progressLoop,c=a,l=o;if(r===0)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;let n=Math.abs(e-t.minTranslate())<1,s=Math.abs(e-t.maxTranslate())<1;a=n||i<=0,o=s||i>=1,n&&(i=0),s&&(i=1)}if(n.loop){let n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[n],a=t.slidesGrid[r],o=t.slidesGrid[t.slidesGrid.length-1],c=Math.abs(e);s=c>=i?(c-i)/o:(c+o-a)/o,s>1&&--s}Object.assign(t,{progress:i,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!c&&t.emit(`reachBeginning toEdge`),o&&!l&&t.emit(`reachEnd toEdge`),(c&&!a||l&&!o)&&t.emit(`fromEdge`),t.emit(`progress`,i)}function st(){let e=this,t,n,r=e.el;t=e.params.width!==void 0&&e.params.width!==null?e.params.width:r.clientWidth,n=e.params.height!==void 0&&e.params.height!==null?e.params.height:r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(j(r,`padding-left`)||`0`,10)-parseInt(j(r,`padding-right`)||`0`,10),n=n-parseInt(j(r,`padding-top`)||`0`,10)-parseInt(j(r,`padding-bottom`)||`0`,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function ct(){let e=this;function t(t,n){return parseFloat(t.getPropertyValue(e.getDirectionLabel(n))||`0`)}let n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:a,wrongRTL:o}=e,s=!!(e.virtual&&n.virtual?.enabled),c=s?e.virtual.slides.length:e.slides.length,l=w(i,`.${e.params.slideClass}, swiper-slide`),u=s?e.virtual.slides.length:l.length,d=[],f=[],p=[],m=t=>typeof t==`function`?t.call(e):t,h=m(n.slidesOffsetBefore),g=m(n.slidesOffsetAfter),_=e.snapGrid.length,v=e.slidesGrid.length,y=e.size-h-g,b=n.spaceBetween,x=-h,S=0,T=0;if(y===void 0)return;typeof b==`string`&&b.indexOf(`%`)>=0?b=parseFloat(b.replace(`%`,``))/100*y:typeof b==`string`&&(b=parseFloat(b)),e.virtualSize=-b-h-g,l.forEach(e=>{a?e.style.marginLeft=``:e.style.marginRight=``,e.style.marginBottom=``,e.style.marginTop=``}),n.centeredSlides&&n.cssMode&&(C(r,`--swiper-centered-offset-before`,``),C(r,`--swiper-centered-offset-after`,``)),n.cssMode&&(C(r,`--swiper-slides-offset-before`,`${h}px`),C(r,`--swiper-slides-offset-after`,`${g}px`));let E=n.grid&&n.grid.rows>1&&e.grid;E?e.grid.initSlides(l):e.grid&&e.grid.unsetSlides();let D=0,O=n.slidesPerView===`auto`&&n.breakpoints&&Object.keys(n.breakpoints).filter(e=>n.breakpoints[e]?.slidesPerView!==void 0).length>0;for(let r=0;r<u;r+=1){D=0;let i=l[r];if(!(i&&(E&&e.grid.updateSlide(r,i,l),j(i,`display`)===`none`))){if(s&&n.slidesPerView===`auto`)n.virtual?.slidesPerViewAutoSlideSize&&(D=n.virtual.slidesPerViewAutoSlideSize),D&&i&&(n.roundLengths&&(D=Math.floor(D)),i.style[e.getDirectionLabel(`width`)]=`${D}px`);else if(n.slidesPerView===`auto`){O&&(i.style[e.getDirectionLabel(`width`)]=``);let r=getComputedStyle(i),a=i.style.transform,o=i.style.webkitTransform;if(a&&(i.style.transform=`none`),o&&(i.style.webkitTransform=`none`),n.roundLengths)D=e.isHorizontal()?P(i,`width`):P(i,`height`);else{let e=t(r,`width`),n=t(r,`padding-left`),a=t(r,`padding-right`),o=t(r,`margin-left`),s=t(r,`margin-right`),c=r.getPropertyValue(`box-sizing`);if(c&&c===`border-box`)D=e+o+s;else{let{clientWidth:t,offsetWidth:r}=i;D=e+n+a+o+s+(r-t)}}a&&(i.style.transform=a),o&&(i.style.webkitTransform=o),n.roundLengths&&(D=Math.floor(D))}else D=(y-(n.slidesPerView-1)*b)/n.slidesPerView,n.roundLengths&&(D=Math.floor(D)),i&&(i.style[e.getDirectionLabel(`width`)]=`${D}px`);i&&(i.swiperSlideSize=D),p.push(D),n.centeredSlides?(x=x+D/2+S/2+b,S===0&&r!==0&&(x=x-y/2-b),r===0&&(x=x-y/2-b),Math.abs(x)<1/1e3&&(x=0),n.roundLengths&&(x=Math.floor(x)),T%n.slidesPerGroup===0&&d.push(x),f.push(x)):(n.roundLengths&&(x=Math.floor(x)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&d.push(x),f.push(x),x=x+D+b),e.virtualSize+=D+b,S=D,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,y)+g,a&&o&&(n.effect===`slide`||n.effect===`coverflow`)&&(r.style.width=`${e.virtualSize+b}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel(`width`)]=`${e.virtualSize+b}px`),E&&e.grid.updateWrapperSize(D,d),!n.centeredSlides){let t=n.slidesPerView!==`auto`&&n.slidesPerView%1!=0,r=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView===`auto`||t),i=d.length;if(r){let e;if(n.slidesPerView===`auto`){e=1;let t=0;for(let n=p.length-1;n>=0&&(t+=p[n]+(n<p.length-1?b:0),t<=y);--n)e=p.length-n}else e=Math.floor(n.slidesPerView);i=Math.max(u-e,0)}let a=[];for(let t=0;t<d.length;t+=1){let o=d[t];n.roundLengths&&(o=Math.floor(o)),r?t<=i&&a.push(o):d[t]<=e.virtualSize-y&&a.push(o)}d=a,Math.floor(e.virtualSize-y)-Math.floor(d[d.length-1])>1&&(r||d.push(e.virtualSize-y))}if(s&&n.loop){let t=p[0]+b,r=(e.virtual.slidesBefore??0)+(e.virtual.slidesAfter??0);if(n.slidesPerGroup>1){let e=Math.ceil(r/n.slidesPerGroup),i=t*n.slidesPerGroup;for(let t=0;t<e;t+=1)d.push(d[d.length-1]+i)}for(let i=0;i<r;i+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(d.length===0&&(d=[0]),b!==0){let t=e.isHorizontal()&&a?`marginLeft`:e.getDirectionLabel(`marginRight`);l.filter((e,t)=>!n.cssMode||n.loop?!0:t!==l.length-1).forEach(e=>{e.style[t]=`${b}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;p.forEach(t=>{e+=t+(b||0)}),e-=b;let t=e>y?e-y:0;d=d.map(e=>e<=0?-h:e>t?t+g:e)}if(n.centerInsufficientSlides){let e=0;if(p.forEach(t=>{e+=t+(b||0)}),e-=b,e<y){let t=(y-e)/2;d.forEach((e,n)=>{d[n]=e-t}),f.forEach((e,n)=>{f[n]=e+t})}}if(Object.assign(e,{slides:l,snapGrid:d,slidesGrid:f,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){C(r,`--swiper-centered-offset-before`,`${-d[0]}px`),C(r,`--swiper-centered-offset-after`,`${e.size/2-p[p.length-1]/2}px`);let t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(e=>e+t),e.slidesGrid=e.slidesGrid.map(e=>e+n)}if(u!==c&&e.emit(`slidesLengthChange`),d.length!==_&&(e.params.watchOverflow&&e.checkOverflow(),e.emit(`snapGridLengthChange`)),f.length!==v&&e.emit(`slidesGridLengthChange`),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit(`slidesUpdated`),!s&&!n.cssMode&&(n.effect===`slide`||n.effect===`fade`)){let t=`${n.containerModifierClass}backface-hidden`,r=e.el.classList.contains(t);u<=n.maxBackfaceHiddenSlides?r||e.el.classList.add(t):r&&e.el.classList.remove(t)}}var J=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function lt(){let e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=!!(e.virtual&&n.virtual?.enabled),o=e.grid&&n.grid&&n.grid.rows>1,s=e=>w(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0],c,l,u;if(a)if(n.loop){let t=e.virtual.slides,n=i-(e.virtual.slidesBefore??0);n<0&&(n=t.length+n),n>=t.length&&(n-=t.length),c=s(`[data-swiper-slide-index="${n}"]`)}else c=s(`[data-swiper-slide-index="${i}"]`);else o?(c=t.find(e=>e.column===i),u=t.find(e=>e.column===i+1),l=t.find(e=>e.column===i-1)):c=t[i];c&&(o||(u=A(c,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),l=k(c,`.${n.slideClass}, swiper-slide`)[0],n.loop)),t.forEach(e=>{J(e,e===c,n.slideActiveClass),J(e,e===u,n.slideNextClass),J(e,e===l,n.slidePrevClass)}),e.emitSlidesClasses()}function ut(){let e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}var Y=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function dt(e=this&&this.translate||0){let t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;r[0].swiperSlideOffset===void 0&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s==`string`&&s.indexOf(`%`)>=0?s=parseFloat(s.replace(`%`,``))/100*t.size:typeof s==`string`&&(s=parseFloat(s));for(let e=0;e<r.length;e+=1){let c=r[e],l=c.swiperSlideOffset??0;n.cssMode&&n.centeredSlides&&(l-=r[0].swiperSlideOffset??0);let u=c.swiperSlideSize??0,d=(o+(n.centeredSlides?t.minTranslate():0)-l)/(u+s),f=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-l)/(u+s),p=-(o-l),m=p+t.slidesSizesGrid[e],h=p>=0&&p<=t.size-t.slidesSizesGrid[e],g=p>=0&&p<t.size-1||m>1&&m<=t.size||p<=0&&m>=t.size;g&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(e)),Y(c,g,n.slideVisibleClass),Y(c,h,n.slideFullyVisibleClass),c.progress=i?-d:d,c.originalProgress=i?-f:f}}var ft={eventsEmitter:he,update:{updateSize:st,updateSlides:ct,updateAutoHeight:it,updateSlidesOffset:ut,updateSlidesProgress:dt,updateProgress:ot,updateSlidesClasses:lt,updateActiveIndex:rt,updateClickedSlide:at},translate:tt,transition:Ye,slide:Ge,loop:Pe,grabCursor:Ae,events:De,breakpoints:ce,checkOverflow:ue,classes:me},X={},Z=class e{static extendedDefaults;static defaults;constructor(...t){let n,r;if(t.length===1&&t[0]!==null&&typeof t[0]==`object`&&Object.prototype.toString.call(t[0]).slice(8,-1)===`Object`?r=t[0]:[n,r]=t,r||={},r=S({},r),n&&!r.el&&(r.el=n),r.el&&typeof r.el==`string`&&typeof document<`u`&&document.querySelectorAll(r.el).length>1){let t=[];return document.querySelectorAll(r.el).forEach(n=>{let i=S({},r,{el:n});t.push(new e(i))}),t}let i=this;i.__swiper__=!0,i.support=ne(),i.device=L({userAgent:r.userAgent??void 0}),i.browser=z(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__||[]],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(e=>{let t=e;typeof t==`function`&&i.modules.indexOf(t)<0&&i.modules.push(t)});let a={};if(i.modules.forEach(e=>{e({params:r,swiper:i,extendParams:Fe(r,a),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})}),i.params=S({},S({},W,a),X,r),i.originalParams=S({},i.params),i.passedParams=S({},r),i.params&&i.params.on){let e=i.params.on;Object.keys(e).forEach(t=>{let n=e[t];n&&i.on(t,n)})}return i.params&&i.params.onAny&&i.onAny(i.params.onAny),Object.assign(i,{enabled:i.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return i.params.direction===`horizontal`},isVertical(){return i.params.direction===`vertical`},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit(`_swiper`),i.params.init&&i.init(),i}getDirectionLabel(e){return this.isHorizontal()?e:{width:`height`,"margin-top":`margin-left`,"margin-bottom ":`margin-right`,"margin-left":`margin-top`,"margin-right":`margin-bottom`,"padding-left":`padding-top`,"padding-right":`padding-bottom`,marginRight:`marginBottom`}[e]}isHorizontal(){return this.params.direction===`horizontal`}isVertical(){return this.params.direction===`vertical`}cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23}getSlideIndex(e){let{slidesEl:t,params:n}=this,r=M(w(t,`.${n.slideClass}, swiper-slide`)[0]);return M(e)-(r??0)}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>Number(t.getAttribute(`data-swiper-slide-index`))===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill===`column`?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill===`row`&&(e%=Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){let{slidesEl:e,params:t}=this;this.slides=w(e,`.${t.slideClass}, swiper-slide`)}enable(){this.enabled||(this.enabled=!0,this.params.grabCursor&&this.setGrabCursor(),this.emit(`enable`))}disable(){this.enabled&&(this.enabled=!1,this.params.grabCursor&&this.unsetGrabCursor(),this.emit(`disable`))}setProgress(e,t){e=Math.min(Math.max(e,0),1);let n=this.minTranslate(),r=(this.maxTranslate()-n)*e+n;this.translateTo(r,t===void 0?0:t),this.updateActiveIndex(),this.updateSlidesClasses()}emitContainerClasses(){if(!this.params._emitClasses||!this.el)return;let e=this.el.className.split(` `).filter(e=>e.indexOf(`swiper`)===0||e.indexOf(this.params.containerModifierClass)===0);this.emit(`_containerClasses`,e.join(` `))}getSlideClasses(e){return this.destroyed?``:e.className.split(` `).filter(e=>e.indexOf(`swiper-slide`)===0||e.indexOf(this.params.slideClass)===0).join(` `)}emitSlidesClasses(){if(!this.params._emitClasses||!this.el)return;let e=[];this.slides.forEach(t=>{let n=this.getSlideClasses(t);e.push({slideEl:t,classNames:n}),this.emit(`_slideClass`,t,n)}),this.emit(`_slideClasses`,e)}slidesPerViewDynamic(e=`current`,t=!1){let{params:n,slides:r,slidesGrid:i,slidesSizesGrid:a,size:o,activeIndex:s}=this,c=1;if(typeof n.slidesPerView==`number`)return n.slidesPerView;if(!o)return c;if(n.centeredSlides){let e=r[s]?Math.ceil(r[s].swiperSlideSize??0):0,t=!1;for(let n=s+1;n<r.length;n+=1)r[n]&&!t&&(e+=Math.ceil(r[n].swiperSlideSize??0),c+=1,e>o&&(t=!0));for(let n=s-1;n>=0;--n)r[n]&&!t&&(e+=r[n].swiperSlideSize??0,c+=1,e>o&&(t=!0))}else if(e===`current`)for(let e=s+1;e<r.length;e+=1)(t?i[e]+a[e]-i[s]<o:i[e]-i[s]<o)&&(c+=1);else for(let e=s-1;e>=0;--e)i[s]-i[e]<o&&(c+=1);return c}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll(`[loading="lazy"]`)].forEach(t=>{t.complete&&B(e,t)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){let t=e.rtlTranslate?e.translate*-1:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(n.freeMode?.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView===`auto`||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){let t=e.virtual&&n.virtual?.enabled?e.virtual.slides.length:e.slides.length;i=e.slideTo(t-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit(`update`)}changeDirection(e,t=!0){let n=this,r=n.params.direction;return e||=r===`horizontal`?`vertical`:`horizontal`,e===r||e!==`horizontal`&&e!==`vertical`?n:(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(t=>{e===`vertical`?t.style.width=``:t.style.height=``}),n.emit(`changeDirection`),t&&n.update(),n)}changeLanguageDirection(e){let t=this;t.rtl&&e===`rtl`||!t.rtl&&e===`ltr`||(t.rtl=e===`rtl`,t.rtlTranslate=t.params.direction===`horizontal`&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir=`rtl`):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir=`ltr`),t.update())}mount(e){let t=this;if(t.mounted)return!0;if(typeof document>`u`)return!1;let n=e??t.params.el,r=null;if(typeof n==`string`?r=document.querySelector(n):n instanceof HTMLElement&&(r=n),!r)return!1;r.swiper=t;let i=r.parentNode;i&&i.host&&i.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);let a=()=>`.${(t.params.wrapperClass||``).trim().split(` `).join(`.`)}`,o=r&&r.shadowRoot?r.shadowRoot.querySelector(a()):w(r,a())[0];!o&&t.params.createElements&&(o=O(`div`,t.params.wrapperClass),r.append(o),w(r,`.${t.params.slideClass}`).forEach(e=>{o.append(e)}));let s=t.isElement?r.parentNode.host:null;return Object.assign(t,{el:r,wrapperEl:o,slidesEl:t.isElement&&!s.slideSlots?s:o,hostEl:t.isElement?s:r,mounted:!0,rtl:r.dir.toLowerCase()===`rtl`||j(r,`direction`)===`rtl`,rtlTranslate:t.params.direction===`horizontal`&&(r.dir.toLowerCase()===`rtl`||j(r,`direction`)===`rtl`),wrongRTL:j(o,`display`)===`-webkit-box`}),!0}init(e){let t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit(`beforeInit`),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual?.enabled?t.slideTo((t.params.initialSlide??0)+(t.virtual.slidesBefore??0),0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();let n=[...t.el.querySelectorAll(`[loading="lazy"]`)];return t.isElement&&n.push(...t.hostEl.querySelectorAll(`[loading="lazy"]`)),n.forEach(e=>{e.complete?B(t,e):e.addEventListener(`load`,e=>{B(t,e.target)})}),H(t),t.initialized=!0,H(t),t.emit(`init`),t.emit(`afterInit`),t}destroy(e=!0,t=!0){let n=this,{params:r,el:i,wrapperEl:a,slides:o}=n;return n.params===void 0||n.destroyed?null:(n.emit(`beforeDestroy`),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),i&&typeof i!=`string`&&i.removeAttribute(`style`),a&&a.removeAttribute(`style`),o&&o.length&&o.forEach(e=>{e.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute(`style`),e.removeAttribute(`data-swiper-slide-index`)})),n.emit(`destroy`),Object.keys(n.eventsListeners).forEach(e=>{n.off(e)}),e!==!1&&(n.el&&typeof n.el!=`string`&&(n.el.swiper=null),h(n)),n.destroyed=!0,null)}static extendDefaults(e){S(X,e)}static installModule(t){e.prototype.__modules__||(e.prototype.__modules__=[]);let n=e.prototype.__modules__;typeof t==`function`&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(t=>e.installModule(t)),e):(e.installModule(t),e)}};Object.defineProperty(Z,"extendedDefaults",{get(){return X}}),Object.defineProperty(Z,"defaults",{get(){return W}});var pt=ft,mt=Z.prototype;Object.keys(pt).forEach(e=>{let t=pt[e];Object.keys(t).forEach(e=>{mt[e]=t[e]})}),Z.use([Le,Ie]);function ht(e,t,n,r){let i=n??{},a=t??{};return e.params.createElements&&Object.keys(r).forEach(t=>{if(!i[t]&&i.auto===!0){let n=w(e.el,`.${r[t]}`)[0];n||(n=O(`div`,r[t]),n.className=r[t],e.el.append(n)),i[t]=n,a[t]=n}}),i}var gt=`<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>`,Q=({swiper:e,extendParams:t,on:n,emit:r})=>{t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:`swiper-button-disabled`,hiddenClass:`swiper-button-hidden`,lockClass:`swiper-button-lock`,navigationDisabledClass:`swiper-navigation-disabled`}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:gt};function i(){return e.params.navigation}function a(t){let n;return t&&typeof t==`string`&&e.isElement&&(n=e.el.querySelector(t)||e.hostEl.querySelector(t),n)?n:(t&&(typeof t==`string`&&(n=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&typeof t==`string`&&n&&n.length>1&&e.el.querySelectorAll(t).length===1?n=e.el.querySelector(t):n&&n.length===1&&(n=n[0])),t&&!n?t:n)}function o(t,n){let r=i();F(t).forEach(t=>{t&&(t.classList[n?`add`:`remove`](...r.disabledClass.split(` `)),t.tagName===`BUTTON`&&(t.disabled=n),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?`add`:`remove`](r.lockClass))})}function s(){let{nextEl:t,prevEl:n}=e.navigation;if(e.params.loop){o(n,!1),o(t,!1);return}o(n,e.isBeginning&&!e.params.rewind),o(t,e.isEnd&&!e.params.rewind)}function c(t){t.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r(`navigationPrev`))}function l(t){t.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r(`navigationNext`))}function u(){e.params.navigation=ht(e,e.originalParams.navigation,e.params.navigation,{nextEl:`swiper-button-next`,prevEl:`swiper-button-prev`});let t=i();if(!(t.nextEl||t.prevEl))return;let n=a(t.nextEl),r=a(t.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:r});let o=F(n),s=F(r),u=(n,r)=>{if(n){if(t.addIcons&&n.matches(`.swiper-button-next,.swiper-button-prev`)&&!n.querySelector(`svg`)){let e=document.createElement(`div`);I(e,gt);let t=e.querySelector(`svg`);t&&n.appendChild(t),e.remove()}n.addEventListener(`click`,r===`next`?l:c)}!e.enabled&&n&&n.classList.add(...t.lockClass.split(` `))};o.forEach(e=>u(e,`next`)),s.forEach(e=>u(e,`prev`))}function d(){let t=i(),{nextEl:n,prevEl:r}=e.navigation,a=F(n),o=F(r),s=(e,n)=>{e.removeEventListener(`click`,n===`next`?l:c),e.classList.remove(...t.disabledClass.split(` `))};a.forEach(e=>s(e,`next`)),o.forEach(e=>s(e,`prev`))}n(`init`,()=>{i().enabled===!1?p():(u(),s())}),n(`toEdge fromEdge lock unlock`,()=>{s()}),n(`destroy`,()=>{d()}),n(`enable disable`,()=>{let t=i(),{nextEl:n,prevEl:r}=e.navigation,a=F(n),o=F(r);if(e.enabled){s();return}[...a,...o].filter(e=>!!e).forEach(e=>e.classList.add(t.lockClass))}),n(`click`,(t,n)=>{let a=i(),{nextEl:o,prevEl:s}=e.navigation,c=F(o),l=F(s),u=n.target,d=l.includes(u)||c.includes(u);if(e.isElement&&!d){let e=n.composedPath?n.composedPath():[];e.length&&(d=e.find(e=>c.includes(e)||l.includes(e)))}if(a.hideOnClick&&!d){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===u||e.pagination.el.contains(u)))return;let t;c.length?t=c[0].classList.contains(a.hiddenClass):l.length&&(t=l[0].classList.contains(a.hiddenClass)),r(t===!0?`navigationShow`:`navigationHide`),[...c,...l].filter(e=>!!e).forEach(e=>e.classList.toggle(a.hiddenClass))}});let f=()=>{let t=i();e.el.classList.remove(...t.navigationDisabledClass.split(` `)),u(),s()},p=()=>{let t=i();e.el.classList.add(...t.navigationDisabledClass.split(` `)),d()};Object.assign(e.navigation,{enable:f,disable:p,update:s,init:u,destroy:d})};function $(e=``){return`.${e.trim().replace(/([.:!+/()[\]#>~*^$|=,'"@{}\\])/g,`\\$1`).replace(/ /g,`.`)}`}var _t=e=>!!e.virtual&&!!e.params.virtual?.enabled,vt=e=>!!e.params.freeMode?.enabled,yt=e=>{if(_t(e))return e.virtual.slides.length;let t=e.params.grid?.rows;return e.grid&&t&&t>1?e.slides.length/Math.ceil(t):e.slides.length},bt=({swiper:e,extendParams:t,on:n,emit:r})=>{let i=`swiper-pagination`;t({pagination:{el:null,bulletElement:`span`,clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:`bullets`,dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let a,o=0;function s(){return e.params.pagination}function c(){return!s().el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function l(e,t){let{bulletActiveClass:n}=s();if(!e)return;let r=e[`${t===`prev`?`previous`:`next`}ElementSibling`];r&&(r.classList.add(`${n}-${t}`),r=r[`${t===`prev`?`previous`:`next`}ElementSibling`],r&&r.classList.add(`${n}-${t}-${t}`))}function u(e,t,n){if(e%=n,t%=n,t===e+1)return`next`;if(t===e-1)return`previous`}function d(t){let n=t.target.closest($(s().bulletClass));if(!n)return;t.preventDefault();let r=(M(n)??0)*(e.params.slidesPerGroup??1);if(e.params.loop){if(e.realIndex===r)return;let t=u(e.realIndex,r,e.slides.length);t===`next`?e.slideNext():t===`previous`?e.slidePrev():e.slideToLoop(r)}else e.slideTo(r)}function f(){let t=e.rtl,n=s();if(c())return;let i=F(e.pagination.el),u,d,f=yt(e),p=e.params.loop?Math.ceil(f/(e.params.slidesPerGroup??1)):e.snapGrid.length;if(e.params.loop?(d=e.previousRealIndex||0,u=(e.params.slidesPerGroup??1)>1?Math.floor(e.realIndex/(e.params.slidesPerGroup??1)):e.realIndex):e.snapIndex===void 0?(d=e.previousIndex||0,u=e.activeIndex||0):(u=e.snapIndex,d=e.previousSnapIndex),n.type===`bullets`&&e.pagination.bullets&&e.pagination.bullets.length>0){let r=e.pagination.bullets,s=0,c=0,f=0;if(n.dynamicBullets){a=P(r[0],e.isHorizontal()?`width`:`height`);let t=e.isHorizontal()?`width`:`height`;i.forEach(e=>{e.style[t]=`${(a??0)*(n.dynamicMainBullets+4)}px`}),n.dynamicMainBullets>1&&d!==void 0&&(o+=u-(d||0),o>n.dynamicMainBullets-1?o=n.dynamicMainBullets-1:o<0&&(o=0)),s=Math.max(u-o,0),c=s+(Math.min(r.length,n.dynamicMainBullets)-1),f=(c+s)/2}if(r.forEach(e=>{let t=[``,`-next`,`-next-next`,`-prev`,`-prev-prev`,`-main`].map(e=>`${n.bulletActiveClass}${e}`).flatMap(e=>typeof e==`string`&&e.includes(` `)?e.split(` `):[e]);e.classList.remove(...t)}),i.length>1)r.forEach(t=>{let r=M(t);r===u?t.classList.add(...n.bulletActiveClass.split(` `)):e.isElement&&t.setAttribute(`part`,`bullet`),n.dynamicBullets&&r!==void 0&&(r>=s&&r<=c&&t.classList.add(...`${n.bulletActiveClass}-main`.split(` `)),r===s&&l(t,`prev`),r===c&&l(t,`next`))});else{let t=r[u];if(t&&t.classList.add(...n.bulletActiveClass.split(` `)),e.isElement&&r.forEach((e,t)=>{e.setAttribute(`part`,t===u?`bullet-active`:`bullet`)}),n.dynamicBullets){let e=r[s],t=r[c];for(let e=s;e<=c;e+=1)r[e]&&r[e].classList.add(...`${n.bulletActiveClass}-main`.split(` `));l(e,`prev`),l(t,`next`)}}if(n.dynamicBullets){let i=Math.min(r.length,n.dynamicMainBullets+4),o=((a??0)*i-(a??0))/2-f*(a??0),s=t?`right`:`left`,c=e.isHorizontal()?s:`top`;r.forEach(e=>{e.style[c]=`${o}px`})}}i.forEach((t,i)=>{if(n.type===`fraction`&&(t.querySelectorAll($(n.currentClass)).forEach(e=>{e.textContent=String(n.formatFractionCurrent(u+1))}),t.querySelectorAll($(n.totalClass)).forEach(e=>{e.textContent=String(n.formatFractionTotal(p))})),n.type===`progressbar`){let r;r=n.progressbarOpposite?e.isHorizontal()?`vertical`:`horizontal`:e.isHorizontal()?`horizontal`:`vertical`;let i=(u+1)/p,a=1,o=1;r===`horizontal`?a=i:o=i,t.querySelectorAll($(n.progressbarFillClass)).forEach(t=>{t.style.transform=`translate3d(0,0,0) scaleX(${a}) scaleY(${o})`,t.style.transitionDuration=`${e.params.speed}ms`})}n.type===`custom`&&n.renderCustom?(I(t,n.renderCustom(e,u+1,p)),i===0&&r(`paginationRender`,t)):(i===0&&r(`paginationRender`,t),r(`paginationUpdate`,t)),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?`add`:`remove`](n.lockClass)})}function p(){let t=s();if(c())return;let n=yt(e),i=F(e.pagination.el),a=``;if(t.type===`bullets`){let r=e.params.loop?Math.ceil(n/(e.params.slidesPerGroup??1)):e.snapGrid.length;e.params.freeMode&&vt(e)&&r>n&&(r=n);for(let n=0;n<r;n+=1)t.renderBullet?a+=t.renderBullet.call(e,n,t.bulletClass):a+=`<${t.bulletElement} ${e.isElement?`part="bullet"`:``} class="${t.bulletClass}"></${t.bulletElement}>`}t.type===`fraction`&&(a=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type===`progressbar`&&(a=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(n=>{t.type!==`custom`&&I(n,a||``),t.type===`bullets`&&e.pagination.bullets.push(...Array.from(n.querySelectorAll($(t.bulletClass))))}),t.type!==`custom`&&r(`paginationRender`,i[0])}function m(){e.params.pagination=ht(e,e.originalParams.pagination,e.params.pagination,{el:`swiper-pagination`});let t=s();if(!t.el)return;let n;if(typeof t.el==`string`&&e.isElement&&(n=e.el.querySelector(t.el)),!n&&typeof t.el==`string`&&(n=[...document.querySelectorAll(t.el)]),n||=t.el,!(!n||Array.isArray(n)&&n.length===0)){if(e.params.uniqueNavElements&&typeof t.el==`string`&&Array.isArray(n)&&n.length>1&&(n=[...e.el.querySelectorAll(t.el)],n.length>1)){let t=n.find(t=>N(t,`.swiper`)[0]===e.el);t&&(n=t)}Array.isArray(n)&&n.length===1&&(n=n[0]),Object.assign(e.pagination,{el:n}),F(n).forEach(n=>{t.type===`bullets`&&t.clickable&&n.classList.add(...(t.clickableClass||``).split(` `)),n.classList.add(t.modifierClass+t.type),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type===`bullets`&&t.dynamicBullets&&(n.classList.add(`${t.modifierClass}${t.type}-dynamic`),o=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type===`progressbar`&&t.progressbarOpposite&&n.classList.add(t.progressbarOppositeClass),t.clickable&&n.addEventListener(`click`,d),e.enabled||n.classList.add(t.lockClass)})}}function h(){let t=s();if(c())return;let n=e.pagination.el;n&&F(n).forEach(n=>{n.classList.remove(t.hiddenClass),n.classList.remove(t.modifierClass+t.type),n.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(n.classList.remove(...(t.clickableClass||``).split(` `)),n.removeEventListener(`click`,d))}),e.pagination.bullets&&e.pagination.bullets.forEach(e=>e.classList.remove(...t.bulletActiveClass.split(` `)))}n(`changeDirection`,()=>{if(!e.pagination||!e.pagination.el)return;let t=s();F(e.pagination.el).forEach(n=>{n.classList.remove(t.horizontalClass,t.verticalClass),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),n(`init`,()=>{s().enabled===!1?_():(m(),p(),f())}),n(`activeIndexChange`,()=>{e.snapIndex===void 0&&f()}),n(`snapIndexChange`,()=>{f()}),n(`snapGridLengthChange`,()=>{p(),f()}),n(`destroy`,()=>{h()}),n(`enable disable`,()=>{let{el:t}=e.pagination;if(t){let n=s();F(t).forEach(t=>t.classList[e.enabled?`remove`:`add`](n.lockClass))}}),n(`lock unlock`,()=>{f()}),n(`click`,(t,n)=>{let i=n.target,a=F(e.pagination.el),o=s();if(o.el&&o.hideOnClick&&a&&a.length>0&&!i.classList.contains(o.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;a[0].classList.contains(o.hiddenClass)===!0?r(`paginationShow`):r(`paginationHide`),a.forEach(e=>e.classList.toggle(o.hiddenClass))}});let g=()=>{let t=s();e.el.classList.remove(t.paginationDisabledClass);let{el:n}=e.pagination;n&&F(n).forEach(e=>e.classList.remove(t.paginationDisabledClass)),m(),p(),f()},_=()=>{let t=s();e.el.classList.add(t.paginationDisabledClass);let{el:n}=e.pagination;n&&F(n).forEach(e=>e.classList.add(t.paginationDisabledClass)),h()};Object.assign(e.pagination,{enable:g,disable:_,render:p,update:f,init:m,destroy:h})},xt=({swiper:e,extendParams:t,on:n,emit:r,params:i})=>{e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function a(){return e.params.autoplay}let o=typeof i.autoplay==`object`&&i.autoplay&&typeof i.autoplay.delay==`number`?i.autoplay.delay:3e3,s,c,l=o,u=o,d=0,f=new Date().getTime(),p=!1,m=!1,h=!1,g,_=!1,v=!1;function y(t){if(!e||e.destroyed||!e.wrapperEl||t.target!==e.wrapperEl)return;e.wrapperEl.removeEventListener(`transitionend`,y);let n=t.detail;v||n&&n.bySwiperTouchMove||D()}let b=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?p=!0:p&&=(u=d,!1);let t=e.autoplay.paused?d:f+u-new Date().getTime();e.autoplay.timeLeft=t,r(`autoplayTimeLeft`,t,t/l),c=requestAnimationFrame(()=>{b()})},x=()=>{let t,n=!!e.params.virtual?.enabled;if(t=e.virtual&&n?e.slides.find(e=>e.classList.contains(`swiper-slide-active`)):e.slides[e.activeIndex],!t)return;let r=t.getAttribute(`data-swiper-autoplay`);if(r!=null)return parseInt(r,10)},S=()=>{let e=a().delay,t=x();return typeof t==`number`&&!Number.isNaN(t)&&t>0&&(e=t),e},C=t=>{if(e.destroyed||!e.autoplay.running)return 0;c!==void 0&&cancelAnimationFrame(c),b();let n=t;n===void 0&&(n=S(),l=n,u=n),d=n;let i=e.params.speed,o=()=>{if(!e||e.destroyed)return;let t=a();t.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(i,!0,!0),r(`autoplay`)):t.stopOnLastSlide||(e.slideTo(e.slides.length-1,i,!0,!0),r(`autoplay`)):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(i,!0,!0),r(`autoplay`)):t.stopOnLastSlide||(e.slideTo(0,i,!0,!0),r(`autoplay`)),e.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{C()}))};return n>0?(s!==void 0&&clearTimeout(s),s=setTimeout(()=>{o()},n)):requestAnimationFrame(()=>{o()}),n},w=()=>(f=new Date().getTime(),e.autoplay.running=!0,C(),r(`autoplayStart`),!0),T=()=>(e.autoplay.running=!1,s!==void 0&&clearTimeout(s),c!==void 0&&cancelAnimationFrame(c),r(`autoplayStop`),!0),E=(t,n)=>{if(e.destroyed||!e.autoplay.running)return;s!==void 0&&clearTimeout(s),t||(_=!0);let i=()=>{r(`autoplayPause`),a().waitForTransition?e.wrapperEl.addEventListener(`transitionend`,y):D()};if(e.autoplay.paused=!0,n){i();return}d=(d||a().delay)-(new Date().getTime()-f),!(e.isEnd&&d<0&&!e.params.loop)&&(d<0&&(d=0),i())},D=()=>{e.isEnd&&d<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(f=new Date().getTime(),_?(_=!1,C(d)):C(),e.autoplay.paused=!1,r(`autoplayResume`))},O=()=>{e.destroyed||!e.autoplay.running||(document.visibilityState===`hidden`&&(_=!0,E(!0)),document.visibilityState===`visible`&&D())},k=t=>{t.pointerType===`mouse`&&(_=!0,v=!0,!(e.animating||e.autoplay.paused)&&E(!0))},A=t=>{t.pointerType===`mouse`&&(v=!1,e.autoplay.paused&&D())},j=()=>{a().pauseOnMouseEnter&&(e.el.addEventListener(`pointerenter`,k),e.el.addEventListener(`pointerleave`,A))},M=()=>{e.el&&typeof e.el!=`string`&&(e.el.removeEventListener(`pointerenter`,k),e.el.removeEventListener(`pointerleave`,A))},N=()=>{document.addEventListener(`visibilitychange`,O)},P=()=>{document.removeEventListener(`visibilitychange`,O)};n(`init`,()=>{a().enabled&&(j(),N(),w())}),n(`destroy`,()=>{M(),P(),e.autoplay.running&&T()}),n(`_freeModeStaticRelease`,()=>{(h||_)&&D()}),n(`_freeModeNoMomentumRelease`,()=>{a().disableOnInteraction?T():E(!0,!0)}),n(`beforeTransitionStart`,(t,n,r)=>{e.destroyed||!e.autoplay.running||(r||!a().disableOnInteraction?E(!0,!0):T())}),n(`sliderFirstMove`,()=>{if(!(e.destroyed||!e.autoplay.running)){if(a().disableOnInteraction){T();return}m=!0,h=!1,_=!1,g=setTimeout(()=>{_=!0,h=!0,E(!0)},200)}}),n(`touchEnd`,()=>{if(!(e.destroyed||!e.autoplay.running||!m)){if(g!==void 0&&clearTimeout(g),s!==void 0&&clearTimeout(s),a().disableOnInteraction){h=!1,m=!1;return}h&&e.params.cssMode&&D(),h=!1,m=!1}}),n(`slideChange`,()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(d=S(),l=S())}),Object.assign(e.autoplay,{start:w,stop:T,pause:E,resume:D})};function St(){new Z(`.heroSwiper`,{modules:[Q,bt,xt],loop:!0,autoplay:{delay:3e3},pagination:{el:`.swiper-pagination`,clickable:!0},navigation:{nextEl:`.custom-next`,prevEl:`.custom-prev`}})}async function Ct(){let t=await fetch(`${e}/api/services`);if(!t.ok)throw Error(`Services API Error`);return await t.json()}function wt(e){return`

<section class="
w-full
px-4
xl:px-8
mt-6
">


<div
class="
max-w-[1250px]
mx-auto

flex
items-center

justify-between

overflow-x-auto
md:overflow-visible

scrollbar-hide

gap-6
md:gap-0

"
>


${e.services.map(e=>`


<div

class="
flex
flex-col
items-center

gap-3
md:gap-5

cursor-pointer

shrink-0

"

>


${e.type===`more`?`

<div

class="
w-[44px]
h-[44px]

md:w-[50px]
md:h-[50px]

rounded-full

bg-gray-100

flex
items-center
justify-center

text-gray-500

text-xl
md:text-2xl

font-bold

"

>
...
</div>

`:`

<img

src="/digikala-web3${e.image}"

class="
w-[44px]
h-[44px]

md:w-[50px]
md:h-[50px]

rounded-full

object-cover

"

/>

`}



<span

class="
text-[11px]
md:text-[13px]

text-[#424750]

whitespace-nowrap

"

>

${e.title}

</span>



</div>


`).join(``)}


</div>


</section>


`}async function Tt(){return wt(await Ct())}async function Et(){let t=await fetch(`${e}/api/amazing`);if(!t.ok)throw Error(`Amazing API Error`);return await t.json()}function Dt(e){return`
<section 
class="
w-full
mt-6
md:mt-8
px-3
md:px-4
">


<div 
class="
max-w-[1400px]
mx-auto
bg-[#ef394e]
rounded-xl
md:rounded-2xl
p-2

h-[330px]
md:h-[316px]

flex
gap-2
md:gap-4

relative
overflow-hidden
"
>


<!-- RIGHT AMAZING BOX -->

<div 
class="
w-[140px]
md:w-[220px]

shrink-0

flex
flex-col
items-center
justify-center

text-white
"
>


<div class="
text-4xl
md:text-5xl
font-bold
relative
">
%

</div>


<h2 class="
text-base
md:text-xl
font-bold
mt-3
">
شگفت‌انگیزها
</h2>


<div class="
flex
gap-1
mt-4
md:mt-5
direction-ltr
">


<div class="
bg-white
text-black
rounded-md
px-2
py-1
text-xs
md:text-sm
font-bold
">
${e.timer.second}
</div>


<span>:</span>


<div class="
bg-white
text-black
rounded-md
px-2
py-1
text-xs
md:text-sm
font-bold
">
${e.timer.minute}
</div>


<span>:</span>


<div class="
bg-white
text-black
rounded-md
px-2
py-1
text-xs
md:text-sm
font-bold
">
${e.timer.hour}
</div>


</div>



<button
class="
mt-4
md:mt-5

bg-white
text-gray-700

rounded-lg

px-4
md:px-5

py-2

text-xs
md:text-sm
"
>
مشاهده همه
</button>


</div>




<div 
class="
swiper amazingSwiper

flex-1

overflow-hidden

relative
"
>


<div class="swiper-wrapper">


${e.products.map(e=>`
<div class="swiper-slide">


<div class="
bg-white

rounded-none

h-[280px]
md:h-[300px]

p-3
md:p-4

flex
flex-col
justify-between
">


<img

src="/digikala-web3${e.image}"

class="
w-full

h-[120px]
md:h-[160px]

object-contain
"

/>


<h3

class="
text-xs
md:text-sm

text-gray-700

line-clamp-2

"
>

${e.title}

</h3>




<div
class="
flex
items-center
justify-end
gap-2
"
>


<div
class="
flex
flex-col
items-start
gap-1
"
>



<div
class="
flex
items-center
gap-2
"
>


<span
class="
bg-[#ef394e]

text-white

rounded-full

px-2

text-xs
"
>
${e.discountPercent}%
</span>



<div
class="
text-gray-400
text-xs
line-through
"
>

${Number(e.oldPrice).toLocaleString(`fa-IR`)}

</div>



</div>




<div
class="
flex
items-center
gap-1
"
>


<span
class="
font-bold

text-base
md:text-lg
"
>

${Number(e.price).toLocaleString(`fa-IR`)}

</span>


<span
class="
text-xs
text-gray-700
"
>
تومان
</span>


</div>


</div>


</div>


</div>


</div>
`).join(``)}



<div class="
swiper-slide
">


<div

class="
bg-white

rounded-xl

h-[280px]
md:h-[330px]

flex

flex-col

items-center

justify-center

cursor-pointer
"
>


<div

class="
w-12
h-12

rounded-full

border

border-gray-300

flex

items-center

justify-center

text-2xl

text-gray-600
"
>

›

</div>


<p
class="
mt-4

text-sm

text-gray-700
"
>
مشاهده همه
</p>


</div>


</div>



</div>

</div>





<button class="
amazing-prev

hidden
md:flex

absolute

left-[260px]

top-1/2

-translate-y-1/2

z-30

bg-white

w-10

h-10

rounded-full

shadow

items-center

justify-center

text-xl
">
‹
</button>



<button class="
amazing-next

hidden
md:flex

absolute

left-[210px]

top-1/2

-translate-y-1/2

z-30

bg-white

w-10

h-10

rounded-full

shadow

items-center

justify-center

text-xl
">
›
</button>



</div>

</section>
`}async function Ot(){return Dt(await Et())}function kt(){new Z(`.amazingSwiper`,{modules:[Q],rtl:!0,slidesPerView:1.2,spaceBetween:8,navigation:{nextEl:`.amazing-prev`,prevEl:`.amazing-next`},breakpoints:{480:{slidesPerView:1.5,spaceBetween:8},768:{slidesPerView:3,spaceBetween:10},1024:{slidesPerView:4,spaceBetween:10},1280:{slidesPerView:5,spaceBetween:12}}})}var At=`http://localhost:3000`;async function jt(){return await(await fetch(`${At}/api/banners`)).json()}function Mt(e){return`


<section
class="
max-w-[1425px]
mx-auto
mt-8
px-2
md:px-4
"
>


<div
class="
grid
grid-cols-2
md:grid-cols-4
gap-3
md:gap-4
"
>


${e.banners.map(e=>`

<a
href="#"
class="
block
overflow-hidden
rounded-2xl
"
>


<img

src="/digikala-web3${e.image}"

class="
w-full
h-[160px]
md:h-[220px]
object-contain
md:object-cover
rounded-2xl
"

>


</a>


`).join(``)}


</div>


</section>


`}async function Nt(){return Mt(await jt())}var Pt=`http://localhost:3000`;async function Ft(){return await(await fetch(`${Pt}/api/flash-sale`)).json()}function It(e){let t=e.products;return`

<section class="
mt-6
md:mt-8
mx-auto
max-w-[1400px]
bg-[#f7f0eb]
rounded-2xl
md:rounded-3xl
p-3
md:p-5
relative
overflow-hidden
">


<!-- Header -->

<div class="
flex
justify-between
items-center
mb-5
">


<div class="
flex
items-center
gap-2
text-gray-800
font-bold
text-base
md:text-xl
">

<i class="
${e.icon}
text-orange-500
"></i>

${e.title}

</div>



<a
class="
text-[#424750]
text-xs
md:text-sm
flex
items-center
gap-2
cursor-pointer
"
>

مشاهده همه

<span>
>
</span>

</a>


</div>



<p class="
text-gray-800
text-xs
md:text-sm
mb-5
bg-gray-300
rounded-lg
px-3
md:px-4
py-3
">

${e.description}

</p>



<!-- Categories -->


<div class="
flex
gap-3
mb-6
overflow-x-auto
scrollbar-hide
">


${e.categories.map(e=>`

<button
class="
border
border-gray-300
rounded-full
px-4
md:px-5
py-2
text-xs
md:text-sm
bg-white
whitespace-nowrap
"
>

${e}

</button>

`).join(``)}


</div>





<!-- Slider -->


<div class="relative">


<div class="swiper flashSwiper">


<div class="swiper-wrapper">


${t.map(e=>`


<div class="swiper-slide">


<div class="
bg-white
rounded-xl
p-3
md:p-4
h-[350px]
md:h-[390px]
flex
flex-col
justify-between
">


<img

src="/digikala-web3${e.image}"

class="
w-full
h-[160px]
md:h-[220px]
object-contain
"

/>



<div

class="
text-xs
md:text-sm
text-gray-700
line-clamp-2
"

>

${e.title}

</div>





<div class="
flex
items-end
justify-between
w-full
"
style="direction:ltr;"
>



<div

class="
flex
flex-col
items-start
"

style="direction:rtl;"

>



<div class="
flex
items-center
gap-2
"
style="direction:rtl;"
>


<span

class="
bg-[#ef394e]
text-white
rounded-full
px-2
text-xs
"

>

${e.discount}

</span>



<div

class="
text-gray-400
text-xs
line-through
"

>

${e.oldPrice}

</div>


</div>





<div

class="
font-bold
text-base
md:text-lg
flex
items-center
gap-1
"

>


${e.price}



<span

class="
text-xs
font-normal
"

>

تومان

</span>


</div>



</div>


</div>



</div>


</div>


`).join(``)}



</div>


</div>




<button
class="
flash-prev
absolute
right-2
top-1/2
-translate-y-1/2
z-20
flex
w-9
h-9
bg-white
rounded-full
shadow
items-center
justify-center
text-xl
text-gray-700
"
>
‹
</button>

<button
class="
flash-next
absolute
left-2
top-1/2
-translate-y-1/2
z-20
flex
w-9
h-9
bg-white
rounded-full
shadow
items-center
justify-center
text-xl
text-gray-700
"
>
›
</button>
</div>
</section>

`}async function Lt(){return It(await Ft())}function Rt(){new Z(`.flashSwiper`,{modules:[Q],slidesPerView:2,spaceBetween:8,navigation:{nextEl:`.flash-next`,prevEl:`.flash-prev`},watchOverflow:!1,breakpoints:{480:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:5},1280:{slidesPerView:6}}})}var zt=`http://localhost:3000`;async function Bt(){return await(await fetch(`${zt}/api/bannersGrid`)).json()}function Vt(e){return`

<div
class="
w-full
max-w-[1410px]
grid
grid-cols-2
md:grid-cols-3
xl:grid-cols-4
gap-3
mt-6
mx-auto
px-3
md:px-4
"
>

${e.map(e=>`

<a
href="#"
class="
overflow-hidden
rounded-2xl
block
"
>

<img
src="/digikala-web3${e.image}"
class="
w-full
h-[160px]
md:h-[200px]
xl:h-[220px]
object-contain
md:object-cover
rounded-2xl
"
/>

</a>


`).join(``)}

</div>

`}async function Ht(){return Vt(await Bt())}var Ut=`http://localhost:3000`;async function Wt(){let e=await fetch(`${Ut}/api/categories`);if(!e.ok)throw Error(`Categories API Error`);return await e.json()}function Gt(e){return`
    <section class="
      w-full
      mt-8
      px-3
      md:px-4
    ">

      <div class="
        max-w-[1400px]
        mx-auto
      ">

        <h2 class="
          text-lg
          md:text-xl
          font-bold
          text-gray-800
          mb-5
          md:mb-6
        ">
          ${e.title}
        </h2>


        <div class="
          grid
          grid-cols-3
          sm:grid-cols-5
          md:grid-cols-8
          lg:grid-cols-9
          gap-y-7
          md:gap-y-8
          gap-x-3
          md:gap-x-2
        ">


          ${e.categories.map(e=>`
                <div class="
                  flex
                  flex-col
                  items-center
                  justify-start
                  cursor-pointer
                  min-w-0
                ">


                  <img
                    src="/digikala-web3${e.image}"
                    alt="${e.title}"
                    class="
                      w-20
                      h-20
                      sm:w-24
                      sm:h-24
                      md:w-28
                      md:h-28
                      object-cover
                      rounded-full
                    "
                  >


                  <span class="
                    mt-3
                    text-xs
                    md:text-sm
                    text-gray-700
                    text-center
                    leading-5
                    md:leading-6
                    break-words
                  ">
                    ${e.title}
                  </span>


                </div>
              `).join(``)}


        </div>


      </div>


    </section>
  `}async function Kt(){return Gt(await Wt())}async function qt(){let t=await fetch(`${e}/api/category-banners`);if(!t.ok)throw Error(`Category Banners API Error`);return await t.json()}function Jt(e){return`
    <section class="w-full mt-8 px-4">
      <div class="
        max-w-[1400px]
        mx-auto
        grid
        grid-cols-2
        gap-3
      ">

        ${e.banners.map(e=>`
              <a
                href="${e.link}"
                class="
                  block
                  overflow-hidden
                  rounded-2xl
                "
              >
                <img
                  src="/digikala-web3${e.image}"
                  alt=""
                  class="
                    w-full
                    h-auto
                    block
                    object-cover
                  "
                >
              </a>
            `).join(``)}

      </div>
    </section>
  `}async function Yt(){return Jt(await qt())}async function Xt(){let t=await fetch(`${e}/api/brands`);if(!t.ok)throw Error(`Brands API Error`);return await t.json()}function Zt(e){return`
    <section
      dir="rtl"
      class="
        max-w-[1400px]
        mx-auto
        bg-white
        rounded-2xl
        border
        border-gray-200
        px-3
        md:px-4
        py-4
        md:py-5
        relative
        mt-6
      "
    >

      <!-- عنوان بخش -->
      <div class="
        flex
        items-center
        justify-start
        gap-2
        mb-4
        md:mb-5
        px-2
      ">

        <i class="
          fa-solid
          fa-star
          text-gray-700
          text-base
          md:text-lg
        "></i>

        <h2 class="
          text-lg
          md:text-xl
          font-bold
          text-gray-800
        ">
          محبوب‌ترین برندها
        </h2>

      </div>


      <!-- اسلایدر برندها -->
      <div class="
        relative
        px-3
        md:px-8
      ">

        <div class="
          swiper
          brandsSwiper
          overflow-hidden
        ">

          <div class="swiper-wrapper">


            ${e.brands.map(e=>`
                  <div
                    class="
                      swiper-slide
                      h-[100px]
                      md:h-[115px]
                    "
                  >

                    <div
                      class="
                        w-full
                        h-full
                        bg-white
                        border
                        border-gray-100
                        rounded-xl
                        flex
                        flex-col
                        items-center
                        justify-center
                        px-2
                        md:px-3
                        py-2
                        md:py-3
                        transition
                        duration-200
                        hover:shadow-sm
                        hover:border-gray-200
                      "
                    >


                      <div class="
                        w-full
                        h-[60px]
                        md:h-[70px]
                        flex
                        items-center
                        justify-center
                      ">


                        <img
                          src="/digikala-web3${e.image}"
                          alt="${e.name}"
                          class="
                            max-w-[90px]
                            md:max-w-[115px]
                            max-h-[55px]
                            md:max-h-[70px]
                            object-contain
                          "
                        >


                      </div>


                      <div class="
                        text-xs
                        md:text-sm
                        text-gray-700
                        text-center
                        whitespace-nowrap
                        overflow-hidden
                        text-ellipsis
                        max-w-full
                      ">
                        ${e.name}
                      </div>


                    </div>


                  </div>
                `).join(``)}


          </div>


        </div>


        <button class="
          brands-prev
          absolute
          left-2
          md:left-[260px]
          top-1/2
          -translate-y-1/2
          z-30
          bg-white
          w-8
          h-8
          md:w-10
          md:h-10
          rounded-full
          shadow
          flex
          items-center
          justify-center
          text-lg
          md:text-xl
        ">
          ‹
        </button>


        <button class="
          brands-next
          absolute
          left-10
          md:left-[210px]
          top-1/2
          -translate-y-1/2
          z-30
          bg-white
          w-8
          h-8
          md:w-10
          md:h-10
          rounded-full
          shadow
          flex
          items-center
          justify-center
          text-lg
          md:text-xl
        ">
          ›
        </button>


      </div>


    </section>
  `}async function Qt(){return Zt(await Xt())}function $t(){new Z(`.brandsSwiper`,{modules:[Q],rtl:!0,slidesPerView:8,spaceBetween:12,navigation:{nextEl:`.brands-prev`,prevEl:`.brands-next`},breakpoints:{1280:{slidesPerView:8,spaceBetween:12},1024:{slidesPerView:7,spaceBetween:10},768:{slidesPerView:6,spaceBetween:10},480:{slidesPerView:4,spaceBetween:8},0:{slidesPerView:3,spaceBetween:8}}})}async function en(){let t=await fetch(`${e}/api/promotional-banners`);if(!t.ok)throw Error(`Promotional Banners API Error`);return await t.json()}function tn(e){return`
    <section class="w-full  mt-8 px-4">
      <div class="
        max-w-[1400px]
        mx-auto
      ">

        <div class="
          grid
          grid-cols-2
          gap-3
        ">

          ${e.map(e=>`
                <a
                  href="${e.link}"
                  class="
                    block
                    overflow-hidden
                    rounded-xl
                  "
                >
                  <img
                    src="/digikala-web3${e.image}"
                    alt=""
                    class="
                      w-full
                      h-auto
                      block
                      object-cover
                    "
                  >
                </a>
              `).join(``)}

        </div>

      </div>
    </section>
  `}async function nn(){return tn(await en())}async function rn(){let t=await fetch(`${e}/api/products-based-on-preference`);if(!t.ok)throw Error(`Products Based On Preference API Error`);return(await t.json()).products}function an(e){return`
    <section 
    class="
    w-full
    max-w-[1400px]
    mx-auto
    my-6
    px-3
    md:px-0
    ">

      <div class="
        bg-white
        border
        border-gray-200
        rounded-2xl
        overflow-hidden
        relative
        p-3
        md:p-5
      ">

        <!-- عنوان بخش -->
        <div class="
        flex
        items-center
        justify-between
        mb-4
        md:mb-5
        ">

          <div class="text-right">

            <h2 class="
            text-base
            md:text-xl
            font-bold
            text-gray-800
            ">
              پاک کننده آرایش صورت
            </h2>


            <p class="
            text-xs
            md:text-sm
            text-gray-500
            mt-1
            ">
              بر اساس سلیقه شما
            </p>

          </div>


          <button
            class="
              bg-gray-100
              hover:bg-gray-200
              text-xs
              md:text-sm
              text-black
              font-medium
              rounded-lg
              px-3
              md:px-4
              py-2
              transition
              whitespace-nowrap
            "
          >
            مشاهده همه
            <span class="mr-1">›</span>
          </button>


        </div>



        <!-- محصولات -->

        <div class="
        swiper
        preferenceSwiper
        overflow-hidden
        ">


          <div class="swiper-wrapper">


            ${e.products.map(e=>`
                  
                  <div class="swiper-slide">


                    <div
                      class="
                        border
                        border-gray-200
                        rounded-xl
                        overflow-hidden
                        bg-white
                        h-[300px]
                        md:h-[330px]
                        flex
                        flex-col
                      "
                    >


                      <div
                        class="
                          h-[170px]
                          md:h-[210px]
                          bg-gray-100
                          flex
                          items-center
                          justify-center
                          overflow-hidden
                        "
                      >

                        <img
                          src="/digikala-web3${e.image}"
                          alt="${e.name}"
                          class="
                            w-full
                            h-full
                            object-contain
                          "
                        />


                      </div>



                      <div class="
                      p-3
                      flex
                      flex-col
                      flex-1
                      ">



                        <p
                          class="
                            text-xs
                            md:text-sm
                            text-gray-700
                            leading-6
                            line-clamp-2
                            min-h-[42px]
                            md:min-h-[48px]
                          "
                        >
                          ${e.name}
                        </p>



                        ${e.discount?`

                              <div class="
                              flex
                              items-center
                              justify-end
                              gap-2
                              mt-auto
                              ">


                                <span
                                  class="
                                    bg-red-500
                                    text-white
                                    text-xs
                                    rounded-full
                                    px-2
                                    py-1
                                  "
                                >
                                  ${e.discount}
                                </span>


                                <span
                                  class="
                                    text-xs
                                    text-gray-400
                                    line-through
                                  "
                                >
                                  ${e.oldPrice}
                                </span>


                              </div>

                            `:``}



                        <div
                        class="
                        text-left
                        ${e.discount?`mt-1`:`mt-auto`}
                        ">


                          <span
                            class="
                              text-sm
                              md:text-base
                              font-bold
                              text-gray-800
                            "
                          >
                            ${e.price}
                          </span>



                          <span class="
                          text-xs
                          text-gray-500
                          mr-1
                          ">
                            تومان
                          </span>


                        </div>



                      </div>


                    </div>


                  </div>

                `).join(``)}




            <!-- اسلاید آخر -->

            <div class="swiper-slide">


              <div
                class="
                  h-full
                  min-h-[300px]
                  md:min-h-[330px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  bg-white
                "
              >


                <div
                  class="
                    w-10
                    h-10
                    md:w-12
                    md:h-12
                    rounded-full
                    border-2
                    border-gray-700
                    flex
                    items-center
                    justify-center
                    text-xl
                    md:text-2xl
                    text-gray-700
                    mb-3
                  "
                >
                  ←
                </div>



                <span
                  class="
                    text-xs
                    md:text-sm
                    font-medium
                    text-gray-700
                  "
                >
                  مشاهده همه
                </span>



              </div>


            </div>


          </div>


        </div>



        <!-- دکمه قبلی -->

        <button class="
        preference-prev

        absolute

        left-[260px]

        top-1/2

        -translate-y-1/2

        z-30

        bg-white

        w-10

        h-10

        rounded-full

        shadow

        flex

        items-center

        justify-center

        text-xl

        hidden
        md:flex

        ">
        ‹
        </button>



        <button class="
        preference-next

        absolute

        left-[210px]

        top-1/2

        -translate-y-1/2

        z-30

        bg-white

        w-10

        h-10

        rounded-full

        shadow

        flex

        items-center

        justify-center

        text-xl

        hidden
        md:flex

        ">
        ›
        </button>



      </div>

    </section>
  `}async function on(){return an({products:await rn()})}function sn(){new Z(`.preferenceSwiper`,{modules:[Q],rtl:!0,slidesPerView:6.5,spaceBetween:8,navigation:{nextEl:`.preference-prev`,prevEl:`.preference-next`},breakpoints:{1280:{slidesPerView:6.5,spaceBetween:8},1024:{slidesPerView:5.5,spaceBetween:8},768:{slidesPerView:4,spaceBetween:8},480:{slidesPerView:2.2,spaceBetween:8},0:{slidesPerView:1.5,spaceBetween:8}}})}function cn(e){return`
    <section 
    class="
    max-w-[1400px]
    mx-auto
    my-6
    px-3
    md:px-0
    "
    >
      <div
        class="
          bg-white
          border
          border-gray-200
          rounded-2xl
          overflow-hidden
          relative
          p-3
          md:p-5
        "
      >

        <!-- عنوان بخش -->
        <div class="
        flex 
        items-center 
        justify-between 
        mb-4
        md:mb-5
        ">


          <div class="text-right">

            <h2 class="
            text-base
            md:text-xl
            font-bold 
            text-gray-800
            ">
             کره بادام زمینی و پسته خانگی
            </h2>


            <p class="
            text-xs
            md:text-sm
            text-gray-500 
            mt-1
            ">
              بر اساس سلیقه شما
            </p>


          </div>



          <button
            class="
              bg-gray-100
              hover:bg-gray-200
              text-xs
              md:text-sm
              text-gray-700
              font-medium
              rounded-lg
              px-3
              md:px-4
              py-2
              transition
            "
          >
            مشاهده همه
            <span class="mr-1">›</span>
          </button>


        </div>



        <!-- محصولات -->
        <div class="
        swiper 
        recommendedSwiper 
        overflow-hidden
        ">


          <div class="swiper-wrapper">


            ${e.products?e.products.map(e=>`

                        <div class="swiper-slide">


                          <div
                            class="
                              border
                              border-gray-200
                              rounded-xl
                              overflow-hidden
                              bg-white
                              h-[290px]
                              md:h-[330px]
                              flex
                              flex-col
                            "
                          >


                            <!-- تصویر -->

                            <div
                              class="
                                h-[170px]
                                md:h-[210px]
                                bg-gray-100
                                flex
                                items-center
                                justify-center
                                overflow-hidden
                                flex-shrink-0
                              "
                            >

                              <img
                                src="/digikala-web3${e.image}"
                                alt="${e.name}"
                                class="
                                  w-full
                                  h-full
                                  object-contain
                                "
                              />


                            </div>



                            <!-- اطلاعات محصول -->

                            <div class="
                            p-2
                            md:p-3
                            flex
                            flex-col
                            flex-1
                            ">


                              <p
                                class="
                                  text-xs
                                  md:text-sm
                                  text-gray-700
                                  leading-5
                                  md:leading-6
                                  line-clamp-2
                                  min-h-[42px]
                                  md:min-h-[48px]
                                "
                              >

                                ${e.name}

                              </p>



                              <!-- تخفیف -->

                              ${e.discount?`
                                    <div
                                      class="
                                        flex
                                        items-center
                                        justify-end
                                        gap-2
                                        mt-auto
                                      "
                                    >

                                      <span
                                        class="
                                          bg-red-500
                                          text-white
                                          text-xs
                                          rounded-full
                                          px-2
                                          py-1
                                        "
                                      >
                                        ${e.discount}
                                      </span>


                                      <span
                                        class="
                                          text-xs
                                          text-gray-400
                                          line-through
                                        "
                                      >
                                        ${e.oldPrice}
                                      </span>


                                    </div>
                                  `:`
                                    <div class="mt-auto h-[28px]"></div>
                                  `}



                              <!-- قیمت -->

                              <div class="text-left mt-1">


                                <span
                                  class="
                                    text-sm
                                    md:text-base
                                    font-bold
                                    text-gray-800
                                  "
                                >
                                  ${e.price}
                                </span>


                                <span
                                  class="
                                    text-[10px]
                                    md:text-xs
                                    text-gray-500
                                    mr-1
                                  "
                                >
                                  تومان
                                </span>


                              </div>


                            </div>


                          </div>


                        </div>

                      `).join(``):``}




            <!-- اسلاید آخر: مشاهده همه -->

            <div class="swiper-slide">


              <div
                class="
                  h-[290px]
                  md:h-[330px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  bg-white
                "
              >


                <div
                  class="
                    w-10
                    h-10
                    md:w-12
                    md:h-12
                    rounded-full
                    border-2
                    border-gray-700
                    flex
                    items-center
                    justify-center
                    text-xl
                    md:text-2xl
                    text-gray-700
                    mb-3
                  "
                >
                  ←
                </div>


                <span
                  class="
                    text-xs
                    md:text-sm
                    font-medium
                    text-gray-700
                  "
                >
                  مشاهده همه
                </span>


              </div>


            </div>


          </div>


        </div>




        <!-- دکمه ها -->

        <button class="
        recommended-prev

        hidden
        md:flex

        absolute
        left-[260px]
        top-1/2
        -translate-y-1/2

        z-30

        bg-white
        w-10
        h-10

        rounded-full
        shadow

        items-center
        justify-center

        text-xl
        ">
        ‹
        </button>



        <button class="
        recommended-next

        hidden
        md:flex

        absolute
        left-[210px]
        top-1/2
        -translate-y-1/2

        z-30

        bg-white
        w-10
        h-10

        rounded-full
        shadow

        items-center
        justify-center

        text-xl
        ">
        ›
        </button>



      </div>

    </section>
  `}async function ln(){let t=await fetch(`${e}/api/recommended-products`);if(!t.ok)throw Error(`Recommended Products API Error`);return(await t.json()).products}async function un(){return cn({products:await ln()})}function dn(){new Z(`.recommendedSwiper`,{modules:[Q],rtl:!0,slidesPerView:6.5,spaceBetween:8,navigation:{nextEl:`.recommended-prev`,prevEl:`.recommended-next`},breakpoints:{1280:{slidesPerView:6.5,spaceBetween:8},1024:{slidesPerView:5.5,spaceBetween:8},768:{slidesPerView:4,spaceBetween:8},480:{slidesPerView:2.2,spaceBetween:8},0:{slidesPerView:1.5,spaceBetween:8}}})}function fn(e){return`
    <section 
    class="
    max-w-[1400px]
    mx-auto
    my-6
    px-3
    md:px-0
    "
    >

      <div
        class="
          bg-white
          border
          border-gray-200
          rounded-2xl
          overflow-hidden
          relative
          p-3
          md:p-5
        "
      >

        <!-- عنوان بخش -->
        <div class="
        flex 
        items-center 
        justify-between 
        mb-4
        md:mb-5
        ">

          <div class="text-right">

            <h2 class="
            text-base
            md:text-xl
            font-bold 
            text-gray-800
            ">
              تقویت‌کننده مژه
            </h2>


            <p class="
            text-xs
            md:text-sm
            text-gray-500 
            mt-1
            ">
              بر اساس سلیقه شما
            </p>

          </div>


          <button
            class="
              bg-gray-100
              hover:bg-gray-200
              text-xs
              md:text-sm
              text-gray-700
              font-medium
              rounded-lg
              px-3
              md:px-4
              py-2
              transition
            "
          >
            مشاهده همه
            <span class="mr-1">›</span>
          </button>

        </div>



        <!-- محصولات -->

        <div class="
        swiper 
        eyelashEnhancersSwiper 
        overflow-hidden
        ">


          <div class="swiper-wrapper">


            ${e.products?e.products.map(e=>`

                        <div class="swiper-slide">


                          <div
                            class="
                              border
                              border-gray-200
                              rounded-xl
                              overflow-hidden
                              bg-white
                              h-[290px]
                              md:h-[330px]
                              flex
                              flex-col
                            "
                          >


                            <!-- تصویر -->

                            <div
                              class="
                                h-[170px]
                                md:h-[210px]
                                bg-gray-100
                                flex
                                items-center
                                justify-center
                                overflow-hidden
                                flex-shrink-0
                              "
                            >

                              <img
                                src="/digikala-web3${e.image}"
                                alt="${e.name}"
                                class="
                                  w-full
                                  h-full
                                  object-contain
                                "
                              />

                            </div>



                            <!-- اطلاعات محصول -->

                            <div class="
                            p-2
                            md:p-3
                            flex
                            flex-col
                            flex-1
                            ">


                              <p
                                class="
                                  text-xs
                                  md:text-sm
                                  text-gray-700
                                  leading-5
                                  md:leading-6
                                  line-clamp-2
                                  min-h-[42px]
                                  md:min-h-[48px]
                                "
                              >
                                ${e.name}
                              </p>




                              <!-- فضای ثابت قیمت قبلی و تخفیف -->

                              <div
                                class="
                                  mt-auto
                                  min-h-[28px]
                                  flex
                                  items-center
                                  justify-end
                                  gap-2
                                "
                              >

                                ${e.discount?`

                                      <span
                                        class="
                                          bg-red-500
                                          text-white
                                          text-xs
                                          rounded-full
                                          px-2
                                          py-1
                                        "
                                      >
                                        ${e.discount}
                                      </span>


                                      <span
                                        class="
                                          text-xs
                                          text-gray-400
                                          line-through
                                        "
                                      >
                                        ${e.oldPrice}
                                      </span>

                                    `:``}


                              </div>




                              <!-- قیمت اصلی -->

                              <div class="text-left mt-1">


                                <span
                                  class="
                                    text-sm
                                    md:text-base
                                    font-bold
                                    text-gray-800
                                  "
                                >
                                  ${e.price}
                                </span>


                                <span
                                  class="
                                    text-[10px]
                                    md:text-xs
                                    text-gray-500
                                    mr-1
                                  "
                                >
                                  تومان
                                </span>


                              </div>


                            </div>


                          </div>


                        </div>

                      `).join(``):``}



            <!-- اسلاید آخر: مشاهده همه -->

            <div class="swiper-slide">


              <div
                class="
                  h-[290px]
                  md:h-[330px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  bg-white
                "
              >


                <div
                  class="
                    w-10
                    h-10
                    md:w-12
                    md:h-12
                    rounded-full
                    border-2
                    border-gray-700
                    flex
                    items-center
                    justify-center
                    text-xl
                    md:text-2xl
                    text-gray-700
                    mb-3
                  "
                >
                  ←
                </div>


                <span
                  class="
                    text-xs
                    md:text-sm
                    font-medium
                    text-gray-700
                  "
                >
                  مشاهده همه
                </span>


              </div>


            </div>


          </div>


        </div>



        <!-- دکمه ها -->

        <button class="
        eyelashEnhancers-prev

        hidden
        md:flex

        absolute
        left-[260px]
        top-1/2
        -translate-y-1/2

        z-30

        bg-white
        w-10
        h-10

        rounded-full
        shadow

        items-center
        justify-center

        text-xl
        ">
        ‹
        </button>



        <button class="
        eyelashEnhancers-next

        hidden
        md:flex

        absolute
        left-[210px]
        top-1/2
        -translate-y-1/2

        z-30

        bg-white
        w-10
        h-10

        rounded-full
        shadow

        items-center
        justify-center

        text-xl
        ">
        ›
        </button>


      </div>

    </section>
  `}async function pn(){let t=await fetch(`${e}/api/eyelash-enhancers`);if(!t.ok)throw Error(`Eyelash Enhancers API Error`);return(await t.json()).products}async function mn(){return fn({products:await pn()})}function hn(){new Z(`.eyelashEnhancersSwiper`,{modules:[Q],rtl:!0,slidesPerView:6.5,spaceBetween:8,navigation:{nextEl:`.eyelashEnhancers-prev`,prevEl:`.eyelashEnhancers-next`},breakpoints:{1280:{slidesPerView:6.5,spaceBetween:8},1024:{slidesPerView:5.5,spaceBetween:8},768:{slidesPerView:4,spaceBetween:8},480:{slidesPerView:2.2,spaceBetween:8},0:{slidesPerView:1.5,spaceBetween:8}}})}async function gn(){let t=await fetch(`${e}/api/protein`);if(!t.ok)throw Error(`Protein Products API Error`);return(await t.json()).products}async function _n(){return`
    <section 
    class="
    max-w-[1400px]
    mx-auto
    my-2
    px-3
    md:px-0
    "
    >
      
      <div
        class="
          bg-white
          border
          border-gray-200
          rounded-2xl
          overflow-hidden
          relative
          p-3
          md:p-5
        "
      >

        <!-- عنوان بخش -->
        <div class="
        flex 
        items-center 
        justify-between 
        mb-4
        md:mb-5
        ">

          <div class="text-right">

            <h2 class="
            text-base
            md:text-xl
            font-bold 
            text-gray-800
            ">
              پروتئین
            </h2>

            <p class="
            text-xs
            md:text-sm
            text-gray-500 
            mt-1
            ">
              بر اساس سلیقه شما
            </p>

          </div>


          <button
            class="
              bg-gray-100
              hover:bg-gray-200
              text-xs
              md:text-sm
              text-gray-700
              font-medium
              rounded-lg
              px-3
              md:px-4
              py-2
              transition
            "
          >
            مشاهده همه
            <span class="mr-1">›</span>
          </button>

        </div>


        <!-- محصولات -->

        <div class="
        swiper 
        proteinSwiper 
        overflow-hidden
        ">

          <div class="swiper-wrapper">


            ${(await gn()).map(e=>`

                    <div class="swiper-slide">


                      <div
                        class="
                          border
                          border-gray-200
                          rounded-xl
                          overflow-hidden
                          bg-white
                          h-[290px]
                          md:h-[330px]
                          flex
                          flex-col
                        "
                      >


                        <!-- تصویر -->

                        <div
                          class="
                            h-[170px]
                            md:h-[210px]
                            bg-gray-100
                            flex
                            items-center
                            justify-center
                            overflow-hidden
                            flex-shrink-0
                          "
                        >

                          <img
                            src="/digikala-web3${e.image}"
                            alt="${e.name}"
                            class="
                              w-full
                              h-full
                              object-contain
                            "
                          />

                        </div>



                        <!-- اطلاعات محصول -->

                        <div class="
                        p-2
                        md:p-3
                        flex
                        flex-col
                        flex-1
                        ">


                          <p
                            class="
                              text-xs
                              md:text-sm
                              text-gray-700
                              leading-5
                              md:leading-6
                              line-clamp-2
                              min-h-[42px]
                              md:min-h-[48px]
                            "
                          >
                            ${e.name}
                          </p>



                          <!-- تخفیف -->

                          <div
                            class="
                              mt-auto
                              min-h-[28px]
                              flex
                              items-center
                              justify-end
                              gap-2
                            "
                          >

                            ${e.discount?`

                                  <span
                                    class="
                                      bg-red-500
                                      text-white
                                      text-xs
                                      rounded-full
                                      px-2
                                      py-1
                                    "
                                  >
                                    ${e.discount}
                                  </span>


                                  <span
                                    class="
                                      text-xs
                                      text-gray-400
                                      line-through
                                    "
                                  >
                                    ${e.oldPrice}
                                  </span>

                                `:``}


                          </div>



                          <!-- قیمت -->


                          <div class="text-left mt-1">

                            <span
                              class="
                                text-sm
                                md:text-base
                                font-bold
                                text-gray-800
                              "
                            >
                              ${e.price}
                            </span>


                            <span
                              class="
                                text-[10px]
                                md:text-xs
                                text-gray-500
                                mr-1
                              "
                            >
                              تومان
                            </span>


                          </div>


                        </div>


                      </div>


                    </div>

                  `).join(``)}



            <!-- اسلاید مشاهده همه -->

            <div class="swiper-slide">


              <div
                class="
                  h-[290px]
                  md:h-[330px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  bg-white
                "
              >


                <div
                  class="
                    w-10
                    h-10
                    md:w-12
                    md:h-12
                    rounded-full
                    border-2
                    border-gray-700
                    flex
                    items-center
                    justify-center
                    text-xl
                    md:text-2xl
                    text-gray-700
                    mb-3
                  "
                >
                  ←
                </div>


                <span
                  class="
                    text-xs
                    md:text-sm
                    font-medium
                    text-gray-700
                  "
                >
                  مشاهده همه
                </span>


              </div>


            </div>


          </div>


        </div>



        <!-- دکمه ها -->

        <button class="
        protein-prev

        hidden
        md:flex

        absolute
        left-[260px]
        top-1/2
        -translate-y-1/2

        z-30

        bg-white
        w-10
        h-10

        rounded-full
        shadow

        items-center
        justify-center

        text-xl
        ">
        ‹
        </button>


        <button class="
        protein-next

        hidden
        md:flex

        absolute
        left-[210px]
        top-1/2
        -translate-y-1/2

        z-30

        bg-white
        w-10
        h-10

        rounded-full
        shadow

        items-center
        justify-center

        text-xl
        ">
        ›
        </button>


      </div>

    </section>
  `}async function vn(){return _n({products:await gn()})}function yn(){document.querySelector(`.proteinSwiper`)&&new Z(`.proteinSwiper`,{modules:[Q],rtl:!0,slidesPerView:6,spaceBetween:10,navigation:{nextEl:`.protein-prev`,prevEl:`.protein-next`},breakpoints:{0:{slidesPerView:1.5,spaceBetween:8},480:{slidesPerView:2.2,spaceBetween:8},640:{slidesPerView:3,spaceBetween:10},768:{slidesPerView:4,spaceBetween:10},1024:{slidesPerView:5,spaceBetween:10},1280:{slidesPerView:6,spaceBetween:10}}})}async function bn(){let t=await fetch(`${e}/api/best-selling-products`);if(!t.ok)throw Error(`Best Selling Products API Error`);return await t.json()}function xn(e){let t=e.products||[],n=[];for(let e=0;e<t.length;e+=3)n.push(t.slice(e,e+3));return`
    <section 
      class="
        max-w-[1400px]
        mx-auto
        my-6
        px-3
        md:px-0
      "
    >

      <div
        class="
          bg-white
          border
          border-gray-200
          rounded-2xl
          overflow-hidden
          relative
          p-3
          md:p-5
        "
      >

        <!-- عنوان بخش -->
        <div 
          class="
            flex
            items-center
            justify-between
            mb-5
          "
        >

          <h2 
            class="
              text-lg
              md:text-xl
              font-bold
              text-gray-800
            "
          >
            پرفروش‌ترین کالاها
          </h2>


          <button
            class="
              bg-gray-100
              hover:bg-gray-200
              text-xs
              md:text-sm
              text-gray-700
              font-medium
              rounded-lg
              px-3
              md:px-4
              py-2
              transition
            "
          >
            مشاهده همه
            <span class="mr-1">›</span>
          </button>

        </div>


        <!-- محصولات -->
        <div 
          class="
            swiper
            bestSellingProductsSwiper
            overflow-hidden
          "
        >

          <div class="swiper-wrapper">


            ${n.length?n.map(e=>`

                        <div class="swiper-slide">


                          <div class="flex flex-col">


                            ${e.map(e=>`

                                  <div
                                    class="
                                      flex
                                      items-center
                                      gap-2
                                      md:gap-3
                                      bg-white
                                      min-h-[90px]
                                      md:min-h-[100px]
                                      px-1
                                      md:px-2
                                      border-b
                                      border-gray-100
                                    "
                                  >


                                    <!-- رتبه -->

                                    <span
                                      class="
                                        text-xl
                                        md:text-2xl
                                        font-bold
                                        text-red-500
                                        min-w-[24px]
                                        md:min-w-[28px]
                                        text-center
                                      "
                                    >
                                      ${e.rank}
                                    </span>



                                    <!-- تصویر -->

                                    <div
                                      class="
                                        w-[65px]
                                        h-[65px]

                                        md:w-[80px]
                                        md:h-[80px]

                                        flex-shrink-0
                                        flex
                                        items-center
                                        justify-center
                                        overflow-hidden
                                      "
                                    >

                                      <img
                                        src="/digikala-web3${e.image}"
                                        alt="${e.name}"
                                        class="
                                          w-full
                                          h-full
                                          object-contain
                                        "
                                      />

                                    </div>



                                    <!-- نام محصول -->

                                    <p
                                      class="
                                        text-xs
                                        md:text-sm
                                        text-gray-700
                                        leading-5
                                        md:leading-6
                                        line-clamp-3
                                        text-right
                                        flex-1
                                      "
                                    >
                                      ${e.name}
                                    </p>


                                  </div>


                                `).join(``)}


                          </div>


                        </div>

                      `).join(``):``}


          </div>


        </div>



        <!-- دکمه قبلی -->

        <button
          class="
            bestSellingProducts-prev

            absolute
            left-[260px]
            top-1/2
            -translate-y-1/2

            z-30

            bg-white
            w-10
            h-10

            rounded-full
            shadow

            flex
            items-center
            justify-center

            text-xl

            hidden
            md:flex
          "
        >
          ›
        </button>



        <!-- دکمه بعدی -->

        <button
          class="
            bestSellingProducts-next

            absolute
            left-[210px]
            top-1/2
            -translate-y-1/2

            z-30

            bg-white
            w-10
            h-10

            rounded-full
            shadow

            flex
            items-center
            justify-center

            text-xl

            hidden
            md:flex
          "
        >
          ‹
        </button>


      </div>

    </section>
  `}async function Sn(){return xn({products:await bn()})}function Cn(){document.querySelector(`.bestSellingProductsSwiper`)&&new Z(`.bestSellingProductsSwiper`,{modules:[Q],rtl:!0,slidesPerView:5,spaceBetween:0,navigation:{nextEl:`.bestSellingProducts-prev`,prevEl:`.bestSellingProducts-next`},breakpoints:{1280:{slidesPerView:5,spaceBetween:0},1024:{slidesPerView:4,spaceBetween:0},768:{slidesPerView:3,spaceBetween:8},480:{slidesPerView:2,spaceBetween:8},320:{slidesPerView:1.3,spaceBetween:8}}})}async function wn(){let t=await fetch(`${e}/api/hottest-products`);if(!t.ok)throw Error(`Hottest Products API Error`);return await t.json()}function Tn(e){let t=e.products||[],n=[];for(let e=0;e<t.length;e+=3)n.push(t.slice(e,e+3));return`
    <section class="
      max-w-[1400px]
      mx-auto
      my-6
      px-2
      md:px-0
    ">

      <div
        class="
          bg-white
          border
          border-gray-200
          rounded-2xl
          overflow-hidden
          relative
          p-3
          md:p-5
        "
      >

        <!-- عنوان بخش -->
        <div class="
          flex
          items-center
          justify-between
          mb-5
          gap-2
        ">

          <h2
            class="
              text-base
              md:text-xl
              font-bold
              text-gray-800
              flex
              items-center
              gap-2
              whitespace-nowrap
            "
          >
            <i class="fa-solid fa-fire text-red-500"></i>

            ${e.title||`داغ‌ترین چند ساعت گذشته`}
          </h2>


          <button
            class="
              bg-gray-100
              hover:bg-gray-200
              text-xs
              md:text-sm
              text-gray-700
              font-medium
              rounded-lg
              px-3
              md:px-4
              py-2
              transition
              whitespace-nowrap
            "
          >
            مشاهده همه
            <span class="mr-1">›</span>
          </button>

        </div>


        <!-- اسلایدر -->
        <div class="
          swiper
          hottestProductsSwiper
          overflow-hidden
        ">

          <div class="swiper-wrapper">


            ${n.length?n.map(e=>`
                        <div class="swiper-slide">


                          <div class="flex flex-col">


                            ${e.map(e=>`
                                  <div
                                    class="
                                      flex
                                      items-center
                                      gap-2
                                      md:gap-3
                                      min-h-[90px]
                                      md:min-h-[105px]
                                      px-1
                                      md:px-2
                                      border-b
                                      border-gray-100
                                      last:border-b-0
                                    "
                                  >


                                    <!-- رتبه -->
                                    <span
                                      class="
                                        text-xl
                                        md:text-2xl
                                        font-bold
                                        text-red-500
                                        min-w-[24px]
                                        md:min-w-[28px]
                                        text-center
                                      "
                                    >
                                      ${e.rank}
                                    </span>


                                    <!-- تصویر -->
                                    <div
                                      class="
                                        w-[65px]
                                        h-[65px]
                                        md:w-[80px]
                                        md:h-[80px]
                                        flex-shrink-0
                                        flex
                                        items-center
                                        justify-center
                                        overflow-hidden
                                      "><img
                                        src="/digikala-web3${e.image}"
                                        alt="${e.name}"
                                        class="
                                          w-full
                                          h-full
                                          object-contain
                                        "
                                      />

                                    </div>


                                    <!-- نام محصول -->
                                    <p
                                      class="
                                        text-xs
                                        md:text-sm
                                        text-gray-700
                                        leading-5
                                        md:leading-6
                                        line-clamp-3
                                        text-right
                                        flex-1
                                      "
                                    >
                                      ${e.name}
                                    </p>


                                  </div>
                                `).join(``)}


                          </div>


                        </div>
                      `).join(``):``}


          </div>


        </div>


        <!-- دکمه قبلی -->
        <button
          class="
            hottestProducts-prev
            absolute
            left-[210px]
            md:left-[210px]
            top-1/2
            -translate-y-1/2
            z-30
            bg-white
            w-8
            h-8
            md:w-10
            md:h-10
            rounded-full
            shadow
            flex
            items-center
            justify-center
            text-lg
            md:text-xl
          "
        >
          ‹
        </button>


        <!-- دکمه بعدی -->
        <button
          class="
            hottestProducts-next
            absolute
            left-[160px]
            md:left-[160px]
            top-1/2
            -translate-y-1/2
            z-30
            bg-white
            w-8
            h-8
            md:w-10
            md:h-10
            rounded-full
            shadow
            flex
            items-center
            justify-center
            text-lg
            md:text-xl
          "
        >
          ›
        </button>


      </div>

    </section>
  `}async function En(){return Tn(await wn())}function Dn(){document.querySelector(`.hottestProductsSwiper`)&&new Z(`.hottestProductsSwiper`,{modules:[Q],rtl:!0,slidesPerView:1.5,spaceBetween:8,navigation:{nextEl:`.hottestProducts-prev`,prevEl:`.hottestProducts-next`},breakpoints:{320:{slidesPerView:1.5,spaceBetween:8},480:{slidesPerView:2,spaceBetween:8},768:{slidesPerView:3,spaceBetween:10},1024:{slidesPerView:4,spaceBetween:10},1280:{slidesPerView:5,spaceBetween:10}}})}async function On(){let t=await fetch(`${e}/api/footer`);if(!t.ok)throw Error(`Footer API Error`);return await t.json()}function kn(e){return`

<section
class="
grid
grid-cols-5
items-center
border-b
border-gray-200
py-8
"
>

${e.benefits.map(e=>`

<div
class="
flex
flex-col
items-center
justify-center
gap-3
"
>

<img

src="/digikala-web3${e.image}"

class="
w-14
h-14
object-contain
"

/>


<p

class="
text-sm
text-gray-700
text-center
"

>

${e.title}

</p>


</div>

`).join(``)}


</section>


`}function An(e){return`

<section
class="
contents
"
>


${e.columns.map(e=>`

<div
class="
text-right
"
>


<h3
class="
font-bold
text-gray-800
mb-4
text-sm
md:text-base
"
>
${e.title}
</h3>


<ul
class="
space-y-3
"
>


${e.items.map(e=>`

<li>

<a
href="#"
class="
text-xs
md:text-sm
text-gray-500
leading-6
"
>
${e}
</a>

</li>

`).join(``)}


</ul>


</div>


`).join(``)}



</section>


`}function jn(e){return`

<div class="
mt-2
">


<h3
class="
font-bold
text-gray-800
mb-5
text-base
"
>

با ثبت ایمیل، از جدیدترین تخفیف‌ها باخبر شوید

</h3>



<div
class="
flex
gap-2
justify-start
"
>


<input

placeholder="${e.newsletterPlaceholder}"

class="
bg-gray-100
rounded-lg
px-4
py-3
w-[330px]
text-sm
"

/>


<button

class="
bg-gray-200
rounded-lg
px-5
text-gray-400
"

>

ثبت

</button>


</div>


</div>


`}function Mn(e){return`

<div
class="
text-right
"
>


<h3
class="
font-bold
text-gray-800
mb-6
text-base
"
>
همراه ما باشید!
</h3>



<div
class="
flex
items-center
gap-6
text-gray-400
text-2xl
mb-8
"
>


<a href="#">
<i class="fa-brands fa-instagram"></i>
</a>


<a href="#">
<i class="fa-brands fa-twitter"></i>
</a>


<a href="#">
<i class="fa-brands fa-linkedin"></i>
</a>


<a href="#">
<i class="fa-brands fa-youtube"></i>
</a>


<a href="#">
<i class="fa-solid fa-circle-play"></i>
</a>


</div>



${jn(e)}


</div>

`}function Nn(e){return`

<div class="
mt-10
bg-[#28345d]
rounded-xl
p-4
md:p-5
flex
flex-col
md:flex-row
items-center
justify-between
gap-5
">


<div class="
flex
items-center
gap-3
w-full
md:w-auto
justify-center
md:justify-start
">

  <img
    src="/digikala-web3/images/footerlogo2.png"
    alt="دیجی‌کالا"
    class="
    w-10
    h-10
    object-contain
    "
  />

  <h3 class="
  text-white
  font-bold
  text-sm
  md:text-base
  ">
  
  دانلود اپلیکیشن دیجی‌کالا
  
  </h3>

</div>



<div class="
flex
flex-wrap
justify-center
md:justify-end
gap-2
md:gap-3
w-full
md:w-auto
">


${e.apps.map(e=>`

<img

src="/digikala-web3${e.image}"

class="
h-8
md:h-10
object-contain
"

/>


`).join(``)}


</div>


</div>


`}async function Pn(){let e=await fetch(`http://localhost:3000/api/footer-trust`);if(!e.ok)throw Error(`Footer Trust API Error`);return await e.json()}function Fn(e){return`

    <section
      dir="rtl"
      class="
        w-full
        flex
        flex-col
        md:flex-row
        items-center
        md:items-start
        justify-between
        gap-6
        md:gap-10
        mt-10
        pb-8
        border-b
        border-gray-200
      "
    >

      <!-- متن معرفی -->

      <div
        class="
          flex-1
          text-right
          order-1
          w-full
        "
      >

        <h2
          class="
            text-sm
            md:text-base
            font-bold
            text-gray-700
            mb-3
          "
        >
          ${e.trustTitle}
        </h2>


        <p
          class="
            text-xs
            text-gray-400
            leading-7
          "
        >
          ${e.trustDescription}
        </p>


        <button
          class="
            mt-3
            text-xs
            text-blue-600
            flex
            items-center
            gap-1
          "
        >
          مشاهده بیشتر
          <span>←</span>
        </button>

      </div>


      <!-- نمادهای اعتماد -->

      <div
        class="
          flex
          flex-wrap
          justify-center
          md:flex-row
          gap-2
          shrink-0
          order-2
          w-full
          md:w-auto
        "
      >

        ${e.trustLogos.map(e=>`

            <div
              class="
                w-[75px]
                h-[75px]
                md:w-[90px]
                md:h-[90px]
                border
                border-gray-200
                rounded-lg
                flex
                items-center
                justify-center
                bg-white
              "
            >

              <img
                src="/digikala-web3${e.image}"
                alt="${e.title}"
                class="
                  max-w-[60px]
                  max-h-[60px]
                  md:max-w-[75px]
                  md:max-h-[75px]
                  object-contain
                "
              />

            </div>

          `).join(``)}

      </div>

    </section>

  `}async function In(){return Fn(await Pn())}async function Ln(){let t=await fetch(`${e}/api/footer/info`);if(!t.ok)throw Error(`Footer Info API Error`);return await t.json()}function Rn(e){return`

<section

class="
mt-2
pt-8
text-center
"

>


<p

class="
text-[12px]
text-gray-500
leading-8
"

>
${e.text}
</p>



</section>


`}function zn(e){return`

<div class="w-full bg-gray-100">

<section

class="
max-w-[1400px]
mx-auto
"

>


<div

class="
grid
grid-cols-3
sm:grid-cols-5
md:grid-cols-7
lg:grid-cols-9
w-full
mt-2
"

>


${e.map(e=>`

<div

class="
h-[90px]
sm:h-[100px]
md:h-25
bg-gray-100
flex
items-center
justify-center
border-r
border-b 
border-gray-200
"

>

<img

src="/digikala-web3${e.image}"

class="
max-w-[90px]
sm:max-w-[110px]
md:max-w-[130px]
max-h-[50px]
sm:max-h-[60px]
md:max-h-[70px]
object-contain
"

>


</div>


`).join(``)}


</div>


</section>

</div>

`}async function Bn(){let t=await fetch(`${e}/api/footer/brands`);if(!t.ok)throw Error(`Footer Brands API Error`);return await t.json()}async function Vn(e){let t=await Ln(),n=await Bn();return`

    <footer
      dir="rtl"
      class="
        bg-white
        border-t
        border-gray-200
        mt-10
      "
    >

      <div
        class="
          max-w-[1400px]
          mx-auto
          px-6
          py-10
        "
      >

    

        <div
          class="
            w-full
            flex
            flex-col
            items-start
            mb-12
          "
        >

          <img
            src="/digikala-web3${e.logo}"
            class="
              w-[170px]
              object-contain
            "
          />

          <div
            class="
              flex
              items-center
              gap-4
              text-sm
              text-gray-500
              mt-4
            "
          >

            <span>${e.phone}</span>

            <span>|</span>

            <span>${e.support}</span>

          </div>

        </div>


        <!-- BENEFITS -->

        ${kn(e)}


        <!-- FOOTER COLUMNS + SOCIAL -->

        <div
  class="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-8
    lg:gap-10
    mt-12
    items-start
  "
>

          ${An(e)}

          ${Mn(e)}

        </div>


        <!-- APP -->

        ${Nn(e)}


      <!-- TRUST -->

${await In()}
${Rn(t)}


</div>


<!-- BRANDS FULL WIDTH -->

${zn(n)}
    </footer>

  `}async function Hn(){return Vn(await On())}async function Un(){document.querySelector(`#app`).innerHTML=`

    ${await c()}
    ${await d()}
    ${await Tt()}
    ${await Ot()}
    ${await Nt()}
    ${await Lt()}
    ${await Ht()}
    ${await Kt()}
    ${await Yt()}
    ${await Qt()}
    ${await nn()}
    ${await on()}
    ${await un()}
    ${await mn()}
    ${await vn()}
    ${await Sn()}
    ${await En()}
    ${await Hn()}

  `,St(),p(),kt(),Rt(),$t(),sn(),dn(),hn(),yn(),Cn(),Dn()}Un();