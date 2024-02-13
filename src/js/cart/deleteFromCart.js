import { common } from "../common/common";
import { getData, saveData } from "../services/storage";
import { renderAddedProducts } from "./cart";

export async function deleteFromCart(event) {
    const cartArr = getData(common.CART_KEY);

    const deleteBtn = event.target.closest(".products__delete")

    if(!deleteBtn) return;

    const {id} = deleteBtn.closest(".products__item").dataset;

    const deletedProduct = cartArr.findIndex(productId => productId === id)

    cartArr.splice(deletedProduct, 1)

    saveData(cartArr, common.CART_KEY)
    
    renderAddedProducts();

    if(!cartArr.length) {
        // refs.cardWrapper.innerHTML = createMarkupEmptyCart();
        localStorage.removeItem(common.CART_KEY)
    }
} 