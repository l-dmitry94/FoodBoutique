import { common } from '../common/common';
import { getData, saveData } from '../services/storage';

export function normalizeCategory(category) {
    category = category.replace('_&_', ' / ');
    category = category.replace('_', ' ');
    return category;
}

export function shortSize(str) {
    return str.length >= 6 ? str.slice(0, 5).trim() + '...' : str;
}

export function addIconProducts() {
    const cartArr = getData(common.CART_KEY);

    cartArr.forEach(id => {
        const products = document.querySelectorAll(`[data-id="${id}"]`);

        products.forEach(product => {
            const productBtn = product.querySelector('.products__item-button');
            productBtn.innerHTML = '<svg class="products__item-check"><use href="#icon-check"></use></svg>';
        });
    });
}

export function removeIconProducts() {
    const cartArr = getData(common.CART_KEY);

    cartArr.forEach(id => {
        const products = document.querySelectorAll(`[data-id="${id}"]`);

        products.forEach(product => {
            const productBtn = product.querySelector('.products__item-button');
            productBtn.innerHTML = '<svg class="products__item-cart"><use href="#icon-cart" ></use></svg>';
        });
    });
}

export function checkModal(id, modalBtn) {
    const cartArr = getData(common.CART_KEY);
    const inStorage = cartArr.some(item => id === item);

    if (inStorage) {
        removeIconProducts()

        const indexId = cartArr.findIndex(index => index === id);
        cartArr.splice(indexId, 1);

        saveData(cartArr, common.CART_KEY);
        modalBtn.innerHTML = `Add to <svg class="products__item-cart"><use href="#icon-cart" ></use></svg>`;

        if (!cartArr.length) {
            localStorage.removeItem(common.CART_KEY);
        }
    } else {
        cartArr.push(id);
        saveData(cartArr, common.CART_KEY);

        addIconProducts();
        
        modalBtn.innerHTML = `Remove from <svg class="products__item-cart"><use href="#icon-cart" ></use></svg>`;
    }
}
