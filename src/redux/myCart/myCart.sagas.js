import {takeLatest, put, all, call} from 'redux-saga/effects';
import cartItemTypes from './myCart.types';
import {handleAddMyCart, handleFetchCartItems, handleDeleteCartItem} from './myCart.helpers'
import {setCartItems, fetchCartItemStart} from './myCart.actions'


export function* addMyCart({payload : {
    documentID,
    thumb,
    name,
    Price
}}) {
    const timestamp = new Date();
    try{
        yield handleAddMyCart({
            documentID,
            thumb,
            name,
            Price,
            createdDate: timestamp
        });
        yield put(
            fetchCartItemStart()
        );

    } catch(err) {
        //console.log(err);
    }
}

export function* addMyCartStart() {
    yield takeLatest(cartItemTypes.ADD_NEW_ITEM_START, addMyCart);
}

export function* fetchCartItems() {
    try{
        const cartItems = yield handleFetchCartItems();
        yield put(
            setCartItems(cartItems)
        );
        
    } catch(err) {
        console.log("Saga Error - ",err);
    }
}

export function* onFetchCartItemStart() {
    yield takeLatest(cartItemTypes.FETCH_CART_START, fetchCartItems);
}

export function* deleteCartItem({payload}){
    try{
        yield handleDeleteCartItem(payload);
        yield put(
            fetchCartItemStart()
        );
    }catch(err){
        //console.log(err);
    }
}

export function* onDeleteCartItemStart() {
    yield takeLatest(cartItemTypes.DELETE_CART_START, deleteCartItem);
}


export default function* mycartSagas() {
    yield all([
        call(addMyCartStart),
        call(onFetchCartItemStart),
        call(onDeleteCartItemStart)
    ])
}