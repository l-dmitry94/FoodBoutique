import { common } from '../common/common';
import { createMarkupEmptyCart } from '../services/markup';
import { refs } from '../services/refs';

export function deleteAllProducts() {
    localStorage.removeItem(common.CART_KEY);
    refs.cartWrapper.innerHTML = createMarkupEmptyCart();
}
