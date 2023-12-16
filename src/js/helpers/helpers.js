import { common } from "../common/common";
import { getData } from "../services/storage";

export function normalizeCategory(category) {
    category = category.replace('_&_', ' / ');
    category = category.replace('_', ' ');
    return category;
}

export function shortSize(str) {
    return str.length >= 6 ? str.slice(0, 5).trim() + '...' : str
}

export function checkProducts() {
    const cartArr = getData(common.CART_KEY)

    cartArr.forEach(id => {
        const products = document.querySelectorAll(`[data-id="${id}"]`)
        if(products) {
            products.forEach(product => {
                if(product) {
                    const productBtn = product.querySelector(".products__item-button");
                    productBtn.querySelector(".products__item-cart").style.display = "none"
                    productBtn.querySelector(".products__item-check").style.display = "block"
                }
            });
        }

        
    });
}