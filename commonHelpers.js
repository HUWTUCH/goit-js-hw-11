import{S as c,i as m}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l={formEL:document.querySelector(".js-search-form"),listEL:document.querySelector(".gallery")};function u(o){const r={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250,widthRatio:.9,scaleImageToRatio:!0},s=o.hits.map(e=>`<li class="gallery-item"><a href="${e.webformatURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"></a>
          <div class="bloc-content">
          <p><b>Likes: </b>${e.likes}</p>
          <p><b>Views: </b>${e.views}</p>
          <p><b>Comments: </b>${e.comments}</p>
          <p><b>Downloads: </b>${e.downloads}</p>
          </div>
          </li>`).join("");l.listEL.insertAdjacentHTML("afterbegin",s),new c(".gallery a",r).refresh(),l.formEL.reset()}function p(o){u(o)}const n={formEL:document.querySelector(".js-search-form"),loaderEl:document.querySelector(".loader")};n.loaderEl.style.display="none";n.formEL.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements.query.value.trim();n.loaderEl.style.display="block",f(r).then(s=>{s.hits.length?p(s):m.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"})}).finally(()=>{n.loaderEl.style.display="none"}),o.target.reset()});function f(o){const s={key:"42320428-e8ed9ab9e474091db19815d3a",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0},e=`https://pixabay.com/api/?${new URLSearchParams(s).toString()}`;return fetch(e,{method:"GET",mode:"cors"}).then(t=>t.json())}
//# sourceMappingURL=commonHelpers.js.map
