// Функції для роботи з бекендом
import axios from 'axios';

export function getAllCategories() {
  return axios.get('https://dummyjson.com/products/category-list');
}

export function getAllProducts(currentPage) {
  const url = `https://dummyjson.com/products?limit=12&skip=${
    (currentPage - 1) * 12
  }`;
  return axios.get(url);
}
