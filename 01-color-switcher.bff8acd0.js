const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");console.log(e),console.log(t),e.addEventListener("click",(function(t){e.disabled=!0,l=setInterval((()=>{console.log(t)}),1e3)})),t.addEventListener("click",(function(t){e.disabled=!1,clearInterval(l)}));let l=null;
//# sourceMappingURL=01-color-switcher.bff8acd0.js.map
