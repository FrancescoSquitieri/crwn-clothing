import { createContext, useState } from "react";

export const CartContext = createContext({
    cartIsOpen: false,
    setIsCartOpen: () => { },
});

export const CartProvider = ({ children }) => {
    const [cartIsOpen, setIsCartOpen] = useState(false);
    const value = { cartIsOpen, setIsCartOpen };
    return (
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
    );
};