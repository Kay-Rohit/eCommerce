import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import productReducer from './product/product.reducer';
import myCartReducer from './myCart/myCart.reducer';

export default combineReducers({
    user: userReducer,
    productsData: productReducer,
    myCartData: myCartReducer
});