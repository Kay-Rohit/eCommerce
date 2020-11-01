import cartItemTypes from './myCart.types';

export const addCartItemStart = myCartData => ({
    type: cartItemTypes.ADD_NEW_ITEM_START,
    payload: myCartData
});

export const fetchCartItemStart = () => ({
    type: cartItemTypes.FETCH_CART_START,
});

export const setCartItems = cartItems => ({
    type: cartItemTypes.SET_CART,
    payload: cartItems
});

export const deleteCartItemsStart = itemID => ({
   type: cartItemTypes.DELETE_CART_START,
   payload: itemID 
});