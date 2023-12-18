import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { fetchProduct } from '../requests/products';
import { createMarkupModalProduct } from '../services/markup';
import { refs } from '../services/refs';
import { checkModal, checkProducts } from '../helpers/helpers';
import { getData, saveData } from '../services/storage';
import { common } from '../common/common';

export async function modalProduct(event) {
    event.preventDefault();

    const productLink = event.target.closest('.products__link');
    const cartBtn = event.target.closest('.products__item-button');

    if (cartBtn || !productLink) return;

    const { id } = productLink.closest('.products__item').dataset;

    try {
        const product = await fetchProduct(id);

        const instance = basicLightbox.create(
            createMarkupModalProduct(product),
            {
                onShow: instance => {
                    refs.body.classList.add('lock');
                    const cartArr = getData(common.CART_KEY);
                    const modal = instance.element().querySelector('.modal');
                    const modalBtn = modal.querySelector(
                        '.products__item-button'
                    );
                    const inStorage = cartArr.some(item => id === item);
                    if (inStorage) {
                        modalBtn.innerHTML = `Remove from <svg class="products__item-icon"><use class="products__item-cart" href="#icon-cart" ></use></svg>`;
                    }

                    modalBtn.addEventListener('click', () =>
                        checkModal(id, modalBtn)
                    );

                    instance.element().querySelector('.modal__close').onclick =
                        instance.close;
                },

                onClose: instance => {
                    refs.body.classList.remove('lock');
                    const modal = instance.element().querySelector('.modal');
                    const modalBtn = modal.querySelector(
                        '.products__item-button'
                    );
                    modalBtn.removeEventListener('click', () =>
                        checkModal(id, modalBtn)
                    );
                },
            }
        );

        instance.show();
    } catch (error) {
        console.log(error);
    }
}
