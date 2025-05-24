// Функції, які передаються колбеками в addEventListners
import { getAllCategories, getAllProducts } from './products-api';
import { refs } from './refs';
import {
  createCategoriesMarkup,
  createProductsMarkup,
} from './render-function';

let currentPage = 1;

export async function renderPage() {
  try {
    const responseCategories = await getAllCategories();
    refs.categoryList.innerHTML = createCategoriesMarkup(
      responseCategories.data
    );

    const responseProducts = await getAllProducts(currentPage);

    refs.productsList.innerHTML = createProductsMarkup(
      responseProducts.data.products
    );
  } catch (error) {
    console.log(error.message);
  }
}

export async function onMoreClick(evt) {
  currentPage += 1;

  try {
    const response = await getAllProducts(currentPage);

    refs.productsList.insertAdjacentHTML(
      'beforeend',
      createProductsMarkup(response.data.products)
    );
  } catch (error) {}
}
