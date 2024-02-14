import { renderAddedProducts } from './js/cart/cart';
import { deleteAllProducts } from './js/cart/deleteAllProducts';
import { deleteFromCart } from './js/cart/deleteFromCart';
import { refs } from './js/services/refs';

renderAddedProducts();

refs.cartProductList.addEventListener('click', deleteFromCart);
refs.deleteAllProducts.addEventListener('click', deleteAllProducts)
