import{S as m,i as c}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function u(l){const r="https://pixabay.com",t="/api/",o=new URLSearchParams({key:"44697177-8eaf5f09977875814ff920480",q:l,image_type:"photo",pretty:!0,orientation:"horizontal",safesearch:!0}),e=`${r}${t}?${o}`;return fetch(e).then(s=>s.json().catch(n=>iziToast.error({title:"Error",message:"Error"})))}function p(l){const r=l.map(t=>`<li class="gallery-item">
	<a class="gallery-link" href="${t.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${t.webformatURL}" 
			alt="${t.tags}"
            
			/>
      <ul class="list-img">
      <li class="item-img"><p class="title-img">Likes</p><p class="text-img">${t.likes}</p></li> 
      <li class="item-img"><p class="title-img">Views</p><p class="text-img">${t.views}</p></li> 
      <li class="item-img"><p class="title-img">Comments</p><p class="text-img">${t.comments}</p></li> 
      <li class="item-img"><p class="title-img">Downloads</p><p class="text-img">${t.downloads}</p></li>     
      </ul>
	</a>
</li>`).join("");i.listElems.innerHTML=r,new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}const i={formElem:document.querySelector("#search"),inputElem:document.querySelector(".form-input"),spanElem:document.querySelector(".loader"),listElems:document.querySelector(".gallery")};i.formElem.addEventListener("submit",l=>{l.preventDefault();const r=i.inputElem.value.trim();if(r)d(),u(r).then(t=>{if(t.hits.length===0){a(),i.listElems.innerHTML=" ",c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",displayMode:"once",maxWidth:500,imageWidth:600}),i.inputElem.value="";return}p(t.hits),a(),i.inputElem.value=""});else{a(),i.listElems.innerHTML=" ",c.warning({title:"Warning",message:" Enter a word for the query, please.",position:"center",displayMode:"once",maxWidth:500,imageWidth:600});return}});function d(){i.spanElem.classList.remove("hidden")}function a(){i.spanElem.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
