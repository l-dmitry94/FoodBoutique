import { renderAllCategories } from './js/categories/categories';
import { storageFilters } from './js/filters/filters';
import { searchByCategory } from './js/filters/searchByCategory';
import { searchByKeyword } from './js/filters/searchByKeyword';
import { addToCart } from './js/products/addToCart';
import { renderDiscount } from './js/products/discount';
import { modalProduct } from './js/products/modalProduct';
import { renderPopular } from './js/products/popular';
import { renderProducts } from './js/products/products';
import { refs } from './js/services/refs';

//render
storageFilters();
renderAllCategories();
renderProducts();
renderPopular();
renderDiscount();

//filters
refs.searchForm.addEventListener('submit', searchByKeyword);
refs.categoriesList.addEventListener('change', searchByCategory);

//modal
refs.productsWrapper.addEventListener('click', modalProduct);

//add to basket
refs.productsWrapper.addEventListener('click', addToCart);


