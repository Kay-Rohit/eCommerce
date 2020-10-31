import cartTypes from './cart.types';

export const addProduct = (nextCartItem) => ({
    type: cartTypes.ADD_TO_CART,
    payload: nextCartItem
});

export const removecartItem = (CartItem) => ({
    type: cartTypes.REMOVE_CART_ITEM,
    payload: CartItem
});

export const reduceCartItem = (CartItem) => ({
    type: cartTypes.REDUCE_CART_ITEM,
    payload: CartItem
});