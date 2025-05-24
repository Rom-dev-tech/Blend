//Логіка сторінки Home
import { renderPage, onMoreClick } from './js/handlers';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', renderPage);
refs.moreBtn.addEventListener('click', onMoreClick);
