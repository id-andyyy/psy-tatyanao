!function(){"use strict";new Swiper(".edu-slider",{navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},simulateTouch:!1,slidesPerView:1,watchOverflow:!0,loop:!0,speed:300,effect:"fade",fadeEffect:{crossFade:!0}});(function(){const e=document.body,t=document.querySelector(".menu__body"),o=document.querySelector(".menu__icon");t&&o&&(o.addEventListener("click",(()=>{t.classList.toggle("burger-active"),o.classList.toggle("burger-active"),e.classList.toggle("lock")})),t.querySelectorAll(".menu-list__link").forEach((c=>{c.addEventListener("click",(()=>{t.classList.remove("burger-active"),o.classList.remove("burger-active"),e.classList.remove("lock")}))})))})(),function(){const e=document.querySelector("body"),t=document.querySelectorAll(".modal-button"),o=document.querySelectorAll(".modal__close");let c=!0;const n=300;function s(t){t&&c&&(t.classList.remove("modal-active"),setTimeout((()=>{e.classList.remove("lock")}),n),r())}function r(){c=!1,setTimeout((()=>{c=!0}),n)}t&&t.forEach((t=>{t.addEventListener("click",(o=>{const n=t.getAttribute("data-modal");var i;(i=document.querySelector(`#${n}`))&&c&&(e.classList.add("lock"),r(),i.classList.add("modal-active"),i.addEventListener("click",(e=>{e.target.closest(".modal__content")||s(e.target.closest(".modal"))})))}))})),o&&o.forEach((e=>{e.addEventListener("click",(t=>{s(e.closest(".modal"))}))})),document.addEventListener("keydown",(e=>{"Escape"==e.code&&s(document.querySelector(".modal.modal-active"))}))}(),function(){const e=document.querySelectorAll(".accordion__item");function t(e){e.querySelector(".accordion__body").style.height=null,e.classList.remove("accordion-active")}function o(e){return e.classList.contains("accordion-active")}e&&e.forEach((c=>{c.querySelector(".accordion__button").addEventListener("click",(()=>{e.forEach((e=>{o(e)&&e!=c&&t(e)})),o(c)?t(c):function(e){const t=e.querySelector(".accordion__body");t.style.height=t.scrollHeight+"px",e.classList.add("accordion-active")}(c)}))}))}(),function(){const e=document.querySelector("#form"),t=document.querySelector("#formResult"),o=document.querySelector("#formSubmit");e.addEventListener("submit",(function(c){c.preventDefault();const n=new FormData(e),s=Object.fromEntries(n),r=JSON.stringify(s);o.classList.add("none"),t.innerHTML="Отправка...",fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:r}).then((async e=>{200==e.status?t.innerHTML="Заявка успешно отправлена!":(console.log(e),t.innerHTML="Что-то не работает... Попробуйте воспользоваться контактами для связи.")})).catch((e=>{console.log(e),t.innerHTML="Что-то не работает... Попробуйте воспользоваться контактами для связи."}))}))}(),document.querySelector("#year").textContent=(new Date).getFullYear(),function(){const e=document.querySelectorAll(".animation");if(e){const t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add("_is-animated")}))}));e.forEach((e=>t.observe(e)))}}()}();