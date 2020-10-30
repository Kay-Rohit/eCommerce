import {takeLatest, put, all, call} from 'redux-saga/effects';
import {setProduct} from './product.actions';
import productTypes from './product.types';
import {handlefetchProducts} from './product.helpers';

export function* fetchProduct() {
    try{
        const products = yield handlefetchProducts();
        yield put(
            setProduct(products)
        );
    } catch(err) {
        //console.log(err);
    }
}

export function* onFetchProductStart() {
    yield takeLatest(productTypes.FETCH_PRODUCTS_START, fetchProduct);
}

export default function* productSagas() {
    yield all([
        call(onFetchProductStart)
    ])
}