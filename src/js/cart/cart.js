import { fetchAddedProducts } from '../requests/products';
import { createMarkupAddedProducts } from '../services/markup';
import { refs } from '../services/refs';

export async function renderAddedProducts() {
    try {
        const data = await fetchAddedProducts();
        refs.cartProductList.innerHTML = createMarkupAddedProducts(data);
    } catch (error) {
        console.log(error.message);
    }
}
