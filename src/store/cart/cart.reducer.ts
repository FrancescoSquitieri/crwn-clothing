import { CartItem} from "./cart.types";
import {AnyAction} from "redux";
import {setCartIsOpen, setCartItems} from "./cart.action";

export type CartState = {
    readonly cartIsOpen: boolean;
    readonly cartItems: CartItem[];
}

export const CART_INITIAL_STATE: CartState = {
    cartIsOpen: false,
    cartItems: [],
};

export const cartReducer = (
    state = CART_INITIAL_STATE,
    action: AnyAction
): CartState => {

    if(setCartItems.match(action)) {
        return {
            ...state,
            cartItems: action.payload,
        };
    }
    if(setCartIsOpen.match(action)) {
        return {
            ...state,
            cartIsOpen: action.payload,
        }
    }
    return state;
    /*
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload,
            };
        case CART_ACTION_TYPES.SET_CART_IS_OPEN:
            return {
                ...state,
                cartIsOpen: payload,
            }
        default:
            return state;
    }
     */
}