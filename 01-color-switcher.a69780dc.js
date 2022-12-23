!function(){var e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");console.log(e),console.log(n),e.addEventListener("click",(function(n){e.disabled=!0,t=setInterval((function(){console.log(n)}),1e3)})),n.addEventListener("click",(function(n){e.disabled=!1,clearInterval(t)}));var t=null}();
//# sourceMappingURL=01-color-switcher.a69780dc.js.map
