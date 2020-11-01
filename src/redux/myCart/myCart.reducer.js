import cartItemTypes from './myCart.types';

const INITIAL_STATE = {
    cartItems: []
};

const myCartReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type) {
        case cartItemTypes.SET_CART:
            return {
                ...state,
                cartItems: action.payload
            };
        default:
            return state;
    }
};

export default myCartReducer;