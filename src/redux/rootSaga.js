import {all, call} from 'redux-saga/effects';

import productSagas from './product/product.sagas';

import myCartSagas from './myCart/myCart.sagas';

export default function* rootSaga() {
    yield all([
        call(productSagas),
        call(myCartSagas)
    ])
}