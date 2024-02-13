import { renderAddedProducts } from './js/cart/cart';
import { deleteFromCart } from './js/cart/deleteFromCart';
import { refs } from './js/services/refs';

renderAddedProducts();

refs.cartProductList.addEventListener('click', deleteFromCart);
