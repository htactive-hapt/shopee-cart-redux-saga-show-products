import { put, fork, takeLatest, call } from 'redux-saga/effects';
import {
    FETCH_PRODUCTS,
} from '../actions/actionTypes';
import { fetchProductsSuccess, fetchProductsFailure } from '../actions/index';
import * as productApi from '../api';

export function* fetchProducts(action) {
    try {
        const products = yield call(productApi.fetchAll);
        yield put(fetchProductsSuccess(products));
    } catch (error) {
        yield put(fetchProductsFailure(error));
    }
}

export function* watchFetchProducts() {
    yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}

export default function* () {
    yield fork(watchFetchProducts);
}
