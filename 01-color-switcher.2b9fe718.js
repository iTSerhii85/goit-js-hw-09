!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,n.disabled=!1,a=setInterval(d,1e3)})),n.addEventListener("click",(function(){t.disabled=!1,n.disabled=!0,clearInterval(a)}));var a=null;function d(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}}();
//# sourceMappingURL=01-color-switcher.2b9fe718.js.map