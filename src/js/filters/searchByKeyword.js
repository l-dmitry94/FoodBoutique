import { common } from '../common/common';
import { addIconProducts, checkProducts } from '../helpers/helpers';
import { fetchProducts } from '../requests/products';
import { createMarkupProducts, createMarkupProductsNotFound } from '../services/markup';
import { refs } from '../services/refs';
import { getData, saveData } from '../services/storage';

export async function searchByKeyword(event) {
    event.preventDefault();

    refs.productsError.style.display = "none";
    refs.productsError.innerHTML = "";

    const { search: searchValue } = event.currentTarget.elements;

    const search = searchValue.value.trim().toLowerCase();

    const filter = getData(common.FILTERS_KEY);

    filter.keyword = search;

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
