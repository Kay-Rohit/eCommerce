import {all, call} from 'redux-saga/effects';

import productSagas from './product/product.sagas';

export default function* rootSaga() {
    yield all([
        call(productSagas)
    ])
}