import { common } from '../common/common';
import { addIconProducts, checkProducts } from '../helpers/helpers';
import { fetchProducts } from '../requests/products';
import {
    createMarkupProducts,
    createMarkupProductsNotFound,
} from '../services/markup';
import { refs } from '../services/refs';
import { getData, saveData } from '../services/storage';

export async function searchByCategory() {
    refs.productsError.style.display = "none";
    refs.productsError.innerHTML = '';

    const selectedValue = refs.categoriesList.value;

    const filter = getData(common.FILTERS_KEY);

    if (selectedValue === 'Show all') {
        refs.searchForm.reset();
        filter.keyword = null;
        filter.category = null;
        saveData(filter, common.FILTERS_KEY);
        const data = await fetchProducts(filter);
        if (!data.results.length) {
            const productsWrapper = document.querySelector(
                '.all-products__wrapper'
            );
            productsWrapper.innerHTML = createMarkupProductsNotFound();
            return;
        }
        refs.productsList.innerHTML = createMarkupProducts(data.results);
        return;
    }

    filter.category = selectedValue;

    saveData(filter, common.FILTERS_KEY);

    try {
        const data = await fetchProducts(filter);
        if (!data.results.length) {
            refs.productsList.innerHTML = '';
            refs.productsError.style.display = "block";
            refs.productsError.innerHTML = createMarkupProductsNotFound();
            return;
        }
        refs.productsList.innerHTML = createMarkupProducts(data.results);
        addIconProducts()
    } catch (error) {
        console.log(error);
    }
}
