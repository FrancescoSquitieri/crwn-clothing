import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

export const CartContext = createContext({
    cartIsOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    removeItemFromCheckout: () => { },
    totalPrice: 0,
});

export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_IS_OPEN: 'SET_CART_IS_OPEN',
}

const {
    SET_CART_IS_OPEN,
    SET_CART_ITEMS
} = CART_ACTION_TYPES;

const INITIAL_STATE = {
    cartIsOpen: false,
    cartItems: [],
    totalPrice: 0,
};

const cartReducer = (state, action) => {
    const { type, payload } = action;
    const {
        SET_CART_ITEMS,
        SET_CART_IS_OPEN,
    } = CART_ACTION_TYPES;

    switch (type) {
        case SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        case SET_CART_IS_OPEN:
            return {
                ...state,
                cartIsOpen: payload,
            }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
}

export const CartProvider = ({ children }) => {
    const [{ cartItems, cartIsOpen, totalPrice }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newTotalPrice = newCartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
        dispatch(
            createAction(SET_CART_ITEMS, {
                cartItems: newCartItems,
                totalPrice: newTotalPrice
            })
        )
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };
    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    };
    const removeItemFromCheckout = (itemToRemove) => {
        const newCartItems = removeItem(cartItems, itemToRemove);
        updateCartItemsReducer(newCartItems);
    };
    const setIsCartOpen = (bool) => {
        dispatch(createAction(
            SET_CART_IS_OPEN,
            bool
        ))

    }

    const value = { cartIsOpen, setIsCartOpen, addItemToCart, cartItems, removeItemFromCart, removeItemFromCheckout, totalPrice };
    return (
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
    );
};