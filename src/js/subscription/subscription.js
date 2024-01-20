import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

import { refs } from '../services/refs';
import { fetchSubscription } from '../requests/subscription';
import {
    createMarkupModalSubscriptionError,
    createMarkupModalSubscriptionOk,
} from '../services/markup';

export async function handleSubscription(event) {
    event.preventDefault();

    const { subscription } = event.currentTarget.elements;

    email = subscription.value.trim();

    if (!email.length) {
        Notify.warning("Please enter your email address");
        return;
    }

    try {
        const data = await fetchSubscription(email);

        const instance = basicLightbox.create(
            createMarkupModalSubscriptionOk(data.message),
            {
                onShow: instance => {
                    refs.body.classList.add('lock');
                    instance.element().querySelector('.modal__close').onclick =
                        instance.close;
                },

                onClose: instance => {
                    refs.body.classList.remove('lock');
                },
            }
        );

        instance.show();

        refs.subscriptionForm.reset();
    } catch ({ response }) {
        if (response.status === 409) {
            const instance = basicLightbox.create(
                createMarkupModalSubscriptionError(),
                {
                    onShow: instance => {
                        refs.body.classList.add('lock');
                        instance
                            .element()
                            .querySelector('.modal__close').onclick =
                            instance.close;
                    },

                    onClose: instance => {
                        refs.body.classList.remove('lock');
                    },
                }
            );

            instance.show();
            return;
        }

        if (response.status === 400) {
            Notify.warning(response.data.message);
            return;
        }
    }
}
