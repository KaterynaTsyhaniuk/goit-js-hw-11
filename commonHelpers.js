import{i as d,S as f}from"./assets/vendor-3fe00192.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const p="44335332-ac36bc3e12fb03490a95e8e95",u="https://pixabay.com/api/";function m(r){const o=new URLSearchParams({key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${u}?${o}`;return fetch(t).then(i=>{if(!i.ok)throw new Error("Failed to fetch images");return i.json()}).catch(i=>{throw console.error("Error fetching images:",i),i})}const c=document.getElementById("gallery");function g(r){if(c.innerHTML="",r.length===0){d.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}const o=r.map(t=>`
      <div class="gallery-box">
      <div class="gallery-image">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" width="400" height="280">
      </a>
      </div>
       <div class="image-info">
          <div class="info-box>
          <p class="info-label">Likes:</p>
          <p class="info-value">${t.likes}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Views:</p>
          <p class="info-value">${t.views}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Comments:</p>
          <p class="info-value">${t.comments}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Downloads:</p>
          <p class="info-value">${t.downloads}</p>
          </div>
        </div>
      </div>
    `).join("");c.innerHTML=o}const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",l=document.getElementById("search-form"),h=document.getElementById("search-input"),a=document.getElementById("loader");l.addEventListener("submit",function(r){r.preventDefault();const o=h.value.trim();if(o===""){d.error({title:"Error",message:"Please enter a search term.",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white",iconUrl:A,theme:"dark"});return}a.style.display="block",m(o).then(t=>{a.style.display="none",g(t.hits),y()}).catch(t=>{a.style.display="none"}),l.reset()});function y(){new f(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
