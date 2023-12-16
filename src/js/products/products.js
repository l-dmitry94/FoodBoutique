import { common } from "../common/common";
import { checkProducts } from "../helpers/helpers";
import { fetchProducts } from "../requests/products"
import { createMarkupProducts, createMarkupProductsNotFound } from "../services/markup";
import { refs } from "../services/refs";
import { getData } from "../services/storage";

export async function renderProducts() {
    try {
        refs.productsError.style.display = "none";
        refs.productsError.innerHTML = "";

        const data = await fetchProducts(getData(common.FILTERS_KEY));

        if (!data.results.length) {
            refs.productsList.innerHTML = '';
            refs.productsError.style.display = "block";
            refs.productsError.innerHTML = createMarkupProductsNotFound();
            return;
        }

        refs.productsList.innerHTML = createMarkupProducts(data.results)
        checkProducts()
    } catch (error) {
        console.log(error)
    }
}

