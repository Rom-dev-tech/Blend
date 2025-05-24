//Функцію для створення, рендеру або видалення розмітки

export function createCategoriesMarkup(arr) {
  const normalizeArr = ['All', ...arr];

  return normalizeArr
    .map(
      category => `<li class="categories__item">
     <button class="categories__btn" type="button">${category}</button>
   </li>`
    )
    .join('');
}

export function createProductsMarkup(arr) {
  return arr
    .map(
      item => `<li class="products__item" data-id="${item.id}">
    <img class="products__image" src="${item.thumbnail}" alt="${item.description}"/>
    <p class="products__title">${item.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${item.brand}</span></p>
    <p class="products__category">Category: ${item.category} </p>
    <p class="products__price">Price: ${item.price} $</p>
 </li>`
    )
    .join('');
}
