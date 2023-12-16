import { checkProducts } from "../helpers/helpers";
import { fetchPopular } from "../requests/products"
import { createMarkupPopular } from "../services/markup";
import { refs } from "../services/refs";

export async function renderPopular() {
    try {
        const data = await fetchPopular();
        refs.popularList.innerHTML = createMarkupPopular(data)
        checkProducts()
    } catch (error) {
        console.log(error)
    }
}