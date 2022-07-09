import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    cart => cart.cartItems
);

export const selectCartIsOpen = createSelector(
    [selectCartReducer],
    cart => cart.cartIsOpen
);

export const selectCartPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
);