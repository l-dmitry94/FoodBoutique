import SlimSelect from 'slim-select'
import "slim-select/dist/slimselect.css"

import { fetchCategories } from "../requests/products"
import { createMarkupCategories } from "../services/markup";
import { refs } from "../services/refs";

export async function renderAllCategories() {
    try {
        const data = await fetchCategories();
        refs.categoriesList.insertAdjacentHTML("afterbegin", createMarkupCategories(data))

        new SlimSelect({
            select: refs.categoriesList,
            settings: {
                showSearch: false,
                placeholderText: 'Categories'
            }
          })

    } catch (error) {
        console.log(error)
    }
}



