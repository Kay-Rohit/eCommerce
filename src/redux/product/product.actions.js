import productTypes from './product.types';

export const fetchProductStart = () => ({
    type: productTypes.FETCH_PRODUCTS_START
});

export const setProduct = products => ({
    type: productTypes.SET_PRODUCTS,
    payload: products
});