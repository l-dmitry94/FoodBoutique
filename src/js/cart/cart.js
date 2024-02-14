import { fetchAddedProducts } from '../requests/products';
import { createMarkupAddedProducts, createMarkupEmptyCart } from '../services/markup';
import { refs } from '../services/refs';

export async function renderAddedProducts() {
    try {
        const data = await fetchAddedProducts();
        if(!data.length) {
            refs.cartWrapper.innerHTML = createMarkupEmptyCart();
        }
        refs.cartProductList.innerHTML = createMarkupAddedProducts(data);
    } catch (error) {
        console.log(error.message);
    }
}
