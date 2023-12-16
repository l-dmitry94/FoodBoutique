import { normalizeCategory, shortSize } from '../helpers/helpers';

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
                            <svg class="products__item-icon">
                                <use
                                    class="products__item-cart"
                                    href="#icon-cart"
                                ></use>
                                <use
                                    class="products__item-check"
                                    href="#icon-check"
                                ></use>
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
                            <svg class="products__item-icon">
                                <use
                                    class="products__item-cart"
                                    href="#icon-cart"
                                ></use>
                                <use
                                    class="products__item-check"
                                    href="#icon-check"
                                ></use>
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
                                    <svg class="products__item-icon">
                                        <use
                                            class="products__item-cart"
                                            href="#icon-cart"
                                        ></use>
                                        <use
                                            class="products__item-check"
                                            href="#icon-check"
                                        ></use>
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
                            <svg class="products__item-icon">
                                <use
                                    class="products__item-cart"
                                    href="#icon-cart"
                                ></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
    `;
}
