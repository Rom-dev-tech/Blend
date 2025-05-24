import"./assets/styles-CY3Nm-Z7.js";import{a as s}from"./assets/vendor-N5iQpiFS.js";function i(){return s.get("https://dummyjson.com/products/category-list")}function c(r){const t=`https://dummyjson.com/products?limit=12&skip=${(r-1)*12}`;return s.get(t)}const e={categoryList:document.querySelector(".categories"),productsList:document.querySelector(".products"),moreBtn:document.querySelector(".more-btn")};function d(r){return["All",...r].map(a=>`<li class="categories__item">
     <button class="categories__btn" type="button">${a}</button>
   </li>`).join("")}function n(r){return r.map(t=>`<li class="products__item" data-id="${t.id}">
    <img class="products__image" src="${t.thumbnail}" alt="${t.description}"/>
    <p class="products__title">${t.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${t.brand}</span></p>
    <p class="products__category">Category: ${t.category} </p>
    <p class="products__price">Price: ${t.price} $</p>
 </li>`).join("")}let o=1;async function u(){try{const r=await i();e.categoryList.innerHTML=d(r.data);const t=await c(o);e.productsList.innerHTML=n(t.data.products)}catch(r){console.log(r.message)}}async function p(r){o+=1;try{const t=await c(o);e.productsList.insertAdjacentHTML("beforeend",n(t.data.products))}catch{}}document.addEventListener("DOMContentLoaded",u);e.moreBtn.addEventListener("click",p);
//# sourceMappingURL=index.js.map
