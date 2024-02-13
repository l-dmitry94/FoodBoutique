import { common } from '../common/common';
import { apiProducts } from '../services/api';
import { getData } from '../services/storage';

export async function fetchCategories() {
    const response = await apiProducts({
        method: 'GET',
        url: '/categories',
    });

    return response.data;
}

export async function fetchProducts({ keyword, category, page, limit }) {
    let params = new URLSearchParams({
        keyword,
        category,
        page,
        limit,
    });

    if (keyword === null) {
        params = new URLSearchParams({
            category,
            page,
            limit,
        });
    }

    if (category === null) {
        params = new URLSearchParams({
            keyword,
            page,
            limit,
        });
    }

    if (category === null && keyword === null) {
        params = new URLSearchParams({
            page,
            limit,
        });
    }

    const response = await apiProducts({
        method: 'GET',
        url: `?${params}`,
    });

    return response.data;
}

export async function fetchPopular() {
    const response = await apiProducts({
        method: 'GET',
        url: '/popular',
    });

    return response.data;
}

export async function fetchDiscount() {
    const response = await apiProducts({
        method: 'GET',
        url: '/discount',
    });

    return response.data;
}

export async function fetchProduct(id) {
    const response = await apiProducts({
        method: 'GET',
        url: `/${id}`,
    });

    return response.data;
}

export async function fetchAddedProducts() {
    const cartArr = getData(common.CART_KEY);

    const responses = cartArr.map(async id => {
        const response = await apiProducts({
            method: 'GET',
            url: `/${id}`,
        });

        return response.data;
    });

    const promise = await Promise.allSettled(responses)

    return promise
}
