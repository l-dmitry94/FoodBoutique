import { normalizeCategory, shortSize } from '../helpers/helpers';
import emptyImage from "../../images/cart/empty.png"
import emptyImageRetina from "../../images/cart/empty@2x.png"

export function createMarkupCategories(arr) {
    return arr
        .map(
            category =>
                `<option value="${category}">${normalizeCategory(
                    category
                )}</option>`
        )
        .join('');
}

export function createMarkupProducts(arr) {
    return arr
        .map(
            ({ _id, category, img, name, popularity, price, size }) => `
            <li class="products__item" data-id="${_id}">
                <a class="products__link" href="#">
                    <div class="products__item-space">
                        <img
                            class="products__item-image"
                            src="${img}"
                            alt="${name}"
                        />
                    </div>
                    <div class="products__item-info">
                        <h3 class="products__item-title">${name}</h3>
                        <ul class="products__item-desc">
                            <li class="products__item-element">
                                <span class="products__item-key">Category:</span>
                                <p class="products__item-value">${normalizeCategory(
                                    category
                                )}</p>
                            </li>
                            <li class="products__item-element">
                                <span class="products__item-key">Size:</span>
                                <p class="products__item-value" title="${size}">${shortSize(
                size
            )}</p>
                            </li>
                            <li class="products__item-element">
                                <span class="products__item-key">Popularity:</span>
                                <p class="products__item-value">${popularity}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="products__item-main">
                        <span class="products__item-price">$${price}</span>
                        <button class="products__item-button">
                            <svg class="products__item-cart">
                                <use href="#icon-cart"></use>
                            </svg>
                        </button>
                    </div>
                </a>
            </li>
    `
        )
        .join('');
}

export function createMarkupProductsNotFound() {
    return `
            <h3 class="error__title">
                Nothing was found for the selected
                <span class="error__title-color">filters...</span>
            </h3>
            <p class="error__desc">
                Try adjusting your search parameters or browse our range by other
                criteria to find the perfect product for you.
            </p>
    `;
}

export function createMarkupPopular(arr) {
    return arr
        .map(
            ({ _id, category, img, name, popularity, size }) => `
                <li class="products__item" data-id="${_id}">
                    <a class="products__link" href="#">
                        <div class="products__item-space">
                            <img
                                class="products__item-image"
                                src="${img}"
                                alt="${name}"
                            />
                        </div>
                        <div class="products__item-info">
                            <h3 class="products__item-title">${name}</h3>
                            <ul class="products__item-desc">
                                <li class="products__item-element">
                                    <span class="products__item-key">Category:</span>
                                    <p class="products__item-value">${normalizeCategory(
                                        category
                                    )}</p>
                                </li>
                                <li class="products__item-element">
                                    <span class="products__item-key">Size:</span>
                                    <p class="products__item-value">${size}</p>
                                </li>
                                <li class="products__item-element">
                                    <span class="products__item-key">Popularity:</span>
                                    <p class="products__item-value">${popularity}</p>
                                </li>
                            </ul>
                        </div>
                        <button class="products__item-button">
                            <svg class="products__item-cart">
                                <use href="#icon-cart"></use>
                            </svg>
                        </button>
                    </a>
                </li>
    `
        )
        .join('');
}

export function createMarkupDiscount(arr) {
    return arr
        .map(
            ({ _id, img, name, price }) => `
                <li class="products__item" data-id="${_id}">
                    <a class="products__link" href="#">
                        <div class="products__item-space">
                            <img
                                class="products__item-image"
                                src="${img}"
                                alt="${name}"
                            />
                        </div>
                        <div class="products__item-main">
                            <h3 class="products__item-title">${name}</h3>
                            <div class="products__item-wrapper">
                                <span class="products__item-price">$${price}</span>
                                <button class="products__item-button">
                                    <svg class="products__item-cart">
                                        <use href="#icon-cart"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <svg class="products__item-discount">
                            <use href="#icon-discount"></use>
                        </svg>
                    </a>
                </li>
    `
        )
        .join('');
}

export function createMarkupModalProduct({
    _id,
    category,
    img,
    name,
    popularity,
    price,
    size,
    desc,
}) {
    return `
            <div class="container">
                <div class="modal" data-id="${_id}">
                    <button class="modal__close">
                        <svg class="modal__close-icon">
                            <use href="#icon-close"></use>
                        </svg>
                    </button>
                    <div class="products__item-space">
                        <img
                            class="products__item-image"
                            src="${img}"
                            alt="${name}"
                        />
                    </div>
                    <div class="products__item-info">
                        <h3 class="products__item-title">${name}</h3>
                        <ul class="products__item-desc">
                            <li class="products__item-element">
                                <span class="products__item-key">Category:</span>
                                <p class="products__item-value">${normalizeCategory(
                                    category
                                )}</p>
                            </li>
                            <li class="products__item-element">
                                <span class="products__item-key">Size:</span>
                                <p class="products__item-value">${size}</p>
                            </li>
                            <li class="products__item-element">
                                <span class="products__item-key">Popularity:</span>
                                <p class="products__item-value">${popularity}</p>
                            </li>
                        </ul>
                        <p class="products__item-text">
                            ${desc}
                        </p>
                    </div>
                    <div class="products__item-main">
                        <span class="products__item-price">$${price}</span>
                        <button class="products__item-button">
                            Add to
                            <svg class="products__item-cart">
                                <use href="#icon-cart"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
    `;
}

export function createMarkupModalSubscriptionOk(message) {
    return `
            <div class="container">
                <div class="modal subscription">
                    <button class="modal__close">
                        <svg class="modal__close-icon">
                            <use href="#icon-close"></use>
                        </svg>
                    </button>
                    <div class="subscription__info">
                        <h2 class="subscription__title">
                            Thanks for subscribing for
                            <span class="subscription__title-color">new</span> products
                        </h2>
                        <p class="subscription__text">
                            ${message}
                        </p>
                    </div>
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcset="
                                ${new URL(
                                    '../../images/footer/modal-tab.png',
                                    import.meta.url
                                )}    1x,
                                ${new URL(
                                    '../../images/footer/modal-tab@2x.png',
                                    import.meta.url
                                )} 2x
                            "
                        />
                        <source
                            media="(min-width: 320px)"
                            srcset="
                            ${new URL(
                                '../../images/footer/modal-mobile.png',
                                import.meta.url
                            )}    1x,
                            ${new URL(
                                '../../images/footer/modal-mobile@2x.png',
                                import.meta.url
                            )} 2x
                            "
                        />
                        <img
                            class="subscription__img"
                            src="${new URL(
                                '../../images/footer/modal-mobile.png',
                                import.meta.url
                            )}"
                            alt="Thanks for subscribing for new products"
                        />
                    </picture>
                </div>
            </div>
    `;
}

export function createMarkupModalSubscriptionError() {
    return `
            <div class="container">
                <div class="modal subscription subscription-error">
                    <button class="modal__close">
                        <svg class="modal__close-icon">
                            <use href="#icon-close"></use>
                        </svg>
                    </button>
                    <div class="subscription__info">
                        <h2 class="subscription__title">
                            This <span class="subscription__title-color">email address</span> has already been entered     
                        </h2>
                        <p class="subscription__text">
                            You have already subscribed to our new products. Watch for offers at the mailing address.
                        </p>
                    </div>
                </div>
            </div>
    `;
}

export function createMarkupAddedProducts(arr) {
    return arr
        .map(
            ({ value: { _id, img, name, category, price, size } }) => `
            <li class="products__item" data-id="${_id}">
                <button class="products__delete">
                    <svg class="products__delete-icon">
                        <use href="#icon-close"></use>
                    </svg>
                </button>
                <div class="products__item-space">
                    <img
                        class="products__item-image"
                        src="${img}"
                        alt="${name}"
                    />
                </div>
                <div class="products__item-info">
                    <h3 class="products__item-title">${name}</h3>
                    <ul class="products__item-desc">
                        <li class="products__item-element">
                            <span class="products__item-key"
                                >Category:</span
                            >
                            <p class="products__item-value">
                                ${normalizeCategory(category)}
                            </p>
                        </li>
                        <li class="products__item-element">
                            <span class="products__item-key"
                                >Size:</span
                            >
                            <p class="products__item-value">${size}</p>
                        </li>
                    </ul>
                    <div class="products__item-main">
                        <span class="products__item-price">$${price}</span>
                        <div class="products__item-quantity">
                            <button class="products__item-sign">
                                <svg class="products__item-icon">
                                    <use href="#icon-minus"></use>
                                </svg>
                            </button>
                            <span class="products__item-counter">1</span>
                            <button class="products__item-sign">
                                <svg class="products__item-icon">
                                    <use href="#icon-plus"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
    `
        )
        .join('');
}

export function createMarkupEmptyCart() {
    return `
    <div class="empty">
        <img class="empty__image" src="${emptyImage}" alt="Empty" 
            srcset="${emptyImage} 1x, ${emptyImageRetina} 2x">
        <div class="empty__wrapper">
            <p class="empty__title">
                Your basket is <span class="empty__title-color">empty...</span>
            </p>
            <p class="empty__descr">
                Go to the main page to select your favorite products and add them to
                the cart.
            </p>
        </div>
    </div>
    `;
}
