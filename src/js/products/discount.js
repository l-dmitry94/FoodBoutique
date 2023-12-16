import { checkProducts } from '../helpers/helpers';
import { fetchDiscount } from '../requests/products';
import { createMarkupDiscount } from '../services/markup';
import { refs } from '../services/refs';

export async function renderDiscount() {
    try {
        const data = await fetchDiscount();
        refs.discountList.innerHTML = createMarkupDiscount(data);
        checkProducts()
    } catch (error) {
        console.log(error);
    }
}
