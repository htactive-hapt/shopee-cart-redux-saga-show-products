import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHECKOUT_REQUEST,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILURE,
    ADD_ONE_QUANTITY,
    SUB_ONE_QUANTITY,
    CLEAR_CART,
} from './actionTypes'

// fetch fetchProducts
export const fetchProducts = () => ({
    type: FETCH_PRODUCTS,
})

// fetch success fetchProductsSuccess
export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    products,
})

// fetch pro failure fetchProductsFailure
export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    error,
})

// add cart addToCart
export const addToCart = productId => ({
    type: ADD_TO_CART,
    productId
})

// Remove cart
export const removeFromCart = productId => {
    return {
        type: REMOVE_FROM_CART,
        productId
    }
}

// checkout
export const checkout = () => {
    return {
        type: CHECKOUT_REQUEST
    }
}

// checkoutSuccess
export const checkoutSuccess = (cart) => {
    return {
        type: CHECKOUT_SUCCESS,
        cart
    }
}

// checkoutFailure
export const checkoutFailure = (error) => {
    return {
        type: CHECKOUT_FAILURE,
        error
    }
}

// addOneQuantity
export const addOneQuantity = id => {
    return {
        type: ADD_ONE_QUANTITY,
        id,
    }
}

// subOneQuantity
export const subOneQuantity = id => {
    return {
        type: SUB_ONE_QUANTITY,
        id,
    }
}

// clearCart
export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}