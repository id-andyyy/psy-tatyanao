!function(){"use strict";new Swiper(".edu-slider",{navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},pagination:{el:".swiper-pagination",clickable:!0},simulateTouch:!1,slidesPerView:1,watchOverflow:!0,loop:!0,speed:500,effect:"fade",fadeEffect:{crossFade:!0}});(function(){const e=document.body,t=document.querySelector(".menu__body"),c=document.querySelector(".menu__icon");t&&c&&(c.addEventListener("click",(()=>{t.classList.toggle("burger-active"),c.classList.toggle("burger-active"),e.classList.toggle("lock")})),t.querySelectorAll(".list__link").forEach((o=>{o.addEventListener("click",(()=>{t.classList.remove("burger-active"),c.classList.remove("burger-active"),e.classList.remove("lock")}))})))})(),function(){const e=document.querySelector("body"),t=document.querySelectorAll(".modal-button"),c=document.querySelectorAll(".modal__close");let o=!0;const l=800;function s(t){t&&o&&(t.classList.remove("modal-active"),setTimeout((()=>{e.classList.remove("lock")}),l),a())}function a(){o=!1,setTimeout((()=>{o=!0}),l)}t&&t.forEach((t=>{t.addEventListener("click",(c=>{const l=t.getAttribute("data-modal");var i;(i=document.querySelector(`#${l}`))&&o&&(e.classList.add("lock"),a(),i.classList.add("modal-active"),i.addEventListener("click",(e=>{e.target.closest(".modal__content")||s(e.target.closest(".modal"))})))}))})),c&&c.forEach((e=>{e.addEventListener("click",(t=>{s(e.closest(".modal"))}))})),document.addEventListener("keydown",(e=>{"Escape"==e.code&&s(document.querySelector(".modal.modal-active"))}))}()}();