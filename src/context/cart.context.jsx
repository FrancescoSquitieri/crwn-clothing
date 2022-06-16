import { createContext, useEffect, useState } from "react";

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

export const CartProvider = ({ children }) => {
    const [cartIsOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
        setTotalPrice(newTotalPrice);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    };
    const removeItemFromCheckout = (itemToRemove) => {
        setCartItems(removeItem(cartItems, itemToRemove));
    };

    const value = { cartIsOpen, setIsCartOpen, addItemToCart, cartItems, removeItemFromCart, removeItemFromCheckout, totalPrice };
    return (
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
    );
};