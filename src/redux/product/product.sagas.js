import {takeLatest, put, all, call} from 'redux-saga/effects';
import {setProduct, setProd} from './product.actions';
import productTypes from './product.types';
import {handlefetchProducts, handlefetchProduct} from './product.helpers';

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

export function* fetchProd({payload}) {
    try{
        const product = yield handlefetchProduct(payload);
        yield put(
            setProd(product)
        );

    } catch(err) {
        //console.log(err);
    }
}

export function* onFetchProdStart() {
    yield takeLatest(productTypes.FETCH_PRODUCT_START, fetchProd);
}

export default function* productSagas() {
    yield all([
        call(onFetchProductStart),
        call(onFetchProdStart)
    ])
}