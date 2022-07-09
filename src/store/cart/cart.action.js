import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((product) => product.id === productToAdd.id);
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            {
                ...cartItem,
                quantity: cartItem.quantity + 1,
            } : cartItem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];

}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((product) => product.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?
        {
            ...cartItem,
            quantity: cartItem.quantity - 1,
        } : cartItem
    );
}

const removeItem = (cartItems, itemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
}

const { SET_CART_IS_OPEN, SET_CART_ITEMS } = CART_ACTION_TYPES;

export const setCartIsOpen = (boolean) => createAction(
    SET_CART_IS_OPEN,
    boolean
);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(
        SET_CART_ITEMS,
        newCartItems
    );
};
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(
        SET_CART_ITEMS,
        newCartItems
    );
};
export const removeItemFromCheckout = (cartItems, itemToRemove) => {
    const newCartItems = removeItem(cartItems, itemToRemove);
    return createAction(
        SET_CART_ITEMS,
        newCartItems
    );
};