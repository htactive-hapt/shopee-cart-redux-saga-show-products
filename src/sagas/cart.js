import { take, put, call, select } from 'redux-saga/effects';
import { getCart } from '../reducers';
import * as actions from '../actions/cart';
import * as productApi from '../api';

export function* checkout() {
    try {
        const cart = yield select(getCart);
        yield call(productApi.buyProducts, cart);
        yield put(actions.checkoutSuccess(cart));
    } catch (error) {
        yield put(actions.checkoutFailure(error));
    }
}

export function* watchCheckout() {
    while (true) {
        yield take(actions.CHECKOUT_REQUEST);
        yield call(checkout);
    }
}
