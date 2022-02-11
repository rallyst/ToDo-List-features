(()=>{"use strict";var e="todos";function t(){var t=sessionStorage.getItem(e);return t?JSON.parse(t):[]}var o=function(o){var n=o.value,s=o.isCompleted,d=document.createElement("li");d.classList.add("todo-item"),s&&d.classList.toggle("todo-item_completed");var i=document.createElement("span");i.innerText=n,i.classList.add("todo-text"),d.appendChild(i);var r=document.createElement("button");r.innerHTML="<i class='fas fa-check'></i>",r.classList.add("todo-check-button"),r.addEventListener("click",function(o){return function(n){n.preventDefault(),o.classList.toggle("todo-item_completed"),function(o){var n=t(),s=Array.from(o.childNodes).find((function(e){return e.classList.contains("todo-text")}));if(s){var d=n.map((function(e){return e.value===s.innerText?e.isCompleted=!0:e.isCompleted=!1,e}));sessionStorage.setItem(e,JSON.stringify(d))}}(o)}}(d)),d.appendChild(r);var a=document.createElement("button");return a.innerHTML="<i class='fas fa-trash'></i>",a.classList.add("todo-remove-button"),a.addEventListener("click",function(o){return function(n){n.preventDefault(),o.classList.add("todo-item_fall"),o.addEventListener("transitionend",(function(){!function(o){var n=t(),s=Array.from(o.childNodes).find((function(e){return e.classList.contains("todo-text")}));if(s){var d=n.filter((function(e){return e.value!==s.innerText}));sessionStorage.setItem(e,JSON.stringify(d))}}(o),o.remove();var n=t(),s=document.querySelector(".todo-select");n.length?s.disabled=!1:s.disabled=!0}))}}(d)),d.appendChild(a),d};function n(e){return{todoInput:e.querySelector(".todo-input"),todoHelper:e.querySelector(".todo-helper"),todoButton:e.querySelector(".todo-button")}}function s(e){var t=n(e),o=t.todoInput,s=t.todoButton,d=t.todoHelper;o.value.length>=3?(s.classList.remove("todo-button_disabled"),d.classList.remove("todo-helper_visible")):(s.classList.add("todo-button_disabled"),d.classList.add("todo-helper_visible"))}var d=document.querySelector(".todo-input-wrapper"),i=n(d),r=i.todoInput,a=i.todoButton,l=i.todoHelper,c=document.querySelector(".todo-list"),u=document.querySelector(".todo-select"),v=document.querySelector(".todo-select-wrapper");document.addEventListener("DOMContentLoaded",(function(){var e;(e=t()).length?(u.disabled=!1,v.classList.add("hover")):(u.disabled=!0,v.classList.remove("hover")),e.forEach((function(e){var t=o(e);c.appendChild(t)})),s(d),l.classList.remove("todo-helper_visible")})),r.addEventListener("input",(function(){return s(d)})),r.addEventListener("keydown",(function(e){if(13===e.keyCode&&e.target.value.length<3)return e.preventDefault(),!1})),r.addEventListener("focus",(function(){return s(d)})),r.addEventListener("blur",(function(){return l.classList.remove("todo-helper_visible")})),a.addEventListener("click",(function(s){s.preventDefault();var i,a,l={value:r.value,isCompleted:!1};i=l,(a=t()).push(i),sessionStorage.setItem(e,JSON.stringify(a));var p=o(l);c.appendChild(p),u.disabled=!1,v.classList.add("hover"),function(e){var t=n(e),o=t.todoInput,s=t.todoHelper,d=t.todoButton;o.value="",d.classList.add("todo-button_disabled"),s.classList.add("todo-helper_visible")}(d)})),u.addEventListener("change",(function(e){var t,o;t=c.childNodes,o=e.target.value,t.length&&t.forEach((function(e){switch(o){case"completed":e.classList.contains("todo-item_completed")?e.style.display="flex":e.style.display="none";break;case"uncompleted":e.classList.contains("todo-item_completed")?e.style.display="none":e.style.display="flex";break;default:return void(e.style.display="flex")}}))}))})();