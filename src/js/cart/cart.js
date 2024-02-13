import { fetchAddedProducts } from "../requests/products";

export async function renderAddedProducts() {
    const data = await fetchAddedProducts();
    console.log(data)

}