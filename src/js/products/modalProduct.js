import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { fetchProduct } from '../requests/products';
import { createMarkupModalProduct } from '../services/markup';
import { refs } from '../services/refs';

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
                    refs.body.classList.add("lock")
                    instance.element().querySelector('.modal__close').onclick =
                        instance.close;
                },

                onClose: instance => {
                    refs.body.classList.remove("lock")
                }
            }
        );

        instance.show();
    } catch (error) {
        console.log(error);
    }
}


