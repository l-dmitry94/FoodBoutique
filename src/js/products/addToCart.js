import { common } from '../common/common';
import { addIconProducts } from '../helpers/helpers';
import { getData, saveData } from '../services/storage';

export function addToCart(event) {
    const cartArr = getData(common.CART_KEY);

    const cartBtn = event.target.closest('.products__item-button');

    if (!cartBtn) return;

    const { id } = cartBtn.closest('.products__item').dataset;

    const inStorage = cartArr.some(item => id === item);

    if (inStorage) {
        return;
    }

    cartArr.push(id);

    saveData(cartArr, common.CART_KEY);

    addIconProducts();
}
