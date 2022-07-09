import { CART_ACTION_TYPES } from "./cart.types";

const {
    SET_CART_ITEMS,
    SET_CART_IS_OPEN,
} = CART_ACTION_TYPES;

export const CART_INITIAL_STATE = {
    cartIsOpen: false,
    cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload,
            };
        case SET_CART_IS_OPEN:
            return {
                ...state,
                cartIsOpen: payload,
            }
        default:
            return state;
    }
}