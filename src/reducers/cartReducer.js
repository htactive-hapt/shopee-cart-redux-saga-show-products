import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_ONE_QUANTITY,
    SUB_ONE_QUANTITY,
    CLEAR_CART
} from '../actions/actionTypes'

const initialState = {
    carts: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id ? { ...product, selected: true } : product,
                ),
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id
                        ? { ...product, selected: false, quantity: 1 }
                        : product,
                ),
            }
        case ADD_ONE_QUANTITY:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product,
                ),
            }
        case SUB_ONE_QUANTITY:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id
                        ? {
                            ...product,
                            quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                        }
                        : product,
                ),
            }
        case CLEAR_CART:
            return {
                ...state,
                products: state.products.map(product =>
                    product.selected
                        ? { ...product, selected: false, quantity: 1 }
                        : product,
                ),
            }
        default:
            return state
    }
}