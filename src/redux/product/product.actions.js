import productTypes from './product.types';

export const fetchProductStart = () => ({
    type: productTypes.FETCH_PRODUCTS_START
});

export const setProduct = products => ({
    type: productTypes.SET_PRODUCTS,
    payload: products
});

export const fetchProdStart = productID => ({
    type: productTypes.FETCH_PRODUCT_START,
    payload: productID
});

export const setProd = product => ({
    type: productTypes.SET_PRODUCT,
    payload: product
});