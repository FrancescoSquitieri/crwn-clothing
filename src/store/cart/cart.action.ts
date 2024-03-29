import {CART_ACTION_TYPES, CartItem} from "./cart.types";
import {ActionWithPayload, createAction, withMatcher} from "../../utils/reducer/reducer.utils";
import {CategoryItem} from "../categories/category.types";

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {

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

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
    const existingCartItem = cartItems.find((product) => product.id === cartItemToRemove.id);

    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?
        {
            ...cartItem,
            quantity: cartItem.quantity - 1,
        } : cartItem
    );
}

const removeItem = (cartItems: CartItem[], itemToRemove: CartItem): CartItem[] => {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
}

export type SetCartIsOpen = ActionWithPayload<CART_ACTION_TYPES.SET_CART_IS_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

const { SET_CART_IS_OPEN, SET_CART_ITEMS } = CART_ACTION_TYPES;

export const setCartIsOpen = withMatcher((boolean: boolean): SetCartIsOpen => createAction(
    SET_CART_IS_OPEN,
    boolean
));

export const setCartItems = withMatcher(
    (cartItems: CartItem[]): SetCartItems =>
        createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem): SetCartItems => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
};
export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem): SetCartItems => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
};
export const removeItemFromCheckout = (cartItems: CartItem[], itemToRemove: CartItem): SetCartItems => {
    const newCartItems = removeItem(cartItems, itemToRemove);
    return setCartItems(newCartItems);
};