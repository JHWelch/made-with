(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const d=["❤️","🍜","🍕","🍔","🦇","🎃","👻","🍬","🐱","🐶","👽","🚀","👾"];let a="❤️";function u(o=!0,n=1,l=1){const r=document.querySelector("#spinner"),e=r.querySelector("#emojis"),t=e.cloneNode(!1);o&&(a=f());const i=[a];if(!o){const c=[];for(let s=0;s<(n>0?n:1);s++)c.push(...d);i.push(...p(c)),a=i[i.length-1],t.addEventListener("transitionend",function(){this.querySelectorAll(".emoji").forEach((s,m)=>{m>0&&this.removeChild(s)})},{once:!0})}for(let c=i.length-1;c>=0;c--){const s=document.createElement("div");s.classList.add("emoji"),s.style.width=r.clientWidth+"px",s.style.height=r.clientHeight+"px",s.textContent=i[c],t.appendChild(s)}t.style.transitionDuration=`${l>0?l:1}s`,t.style.transform=`translateY(-${r.clientHeight*(i.length-1)}px)`,r.replaceChild(t,e),t.addEventListener("click",h)}function f(){return d[Math.floor(Math.random()*d.length)]}async function h(){u(!1,1,2),await new Promise(n=>setTimeout(n,1));const o=document.getElementById("emojis");o.style.transform="translateY(0)"}function p([...o]){let n=o.length;for(;n;){const l=Math.floor(Math.random()*n--);[o[n],o[l]]=[o[l],o[n]]}return o}document.querySelector("#made-with").innerHTML=`
  <div class="mw-wrapper">
    <span>Made with </span>

    <div id="spinner" class="mw-spinner">
      <button id="emojis" class="mw-button"></button>
    </div>

    <span>
      in Chicago by

      <a class="mw-link" href="https://www.jordanwelch.com">Jordan Welch</a>
    </span>
  </div>
`;u();
