import { createSelector } from "reselect";
import {CartState} from "./cart.reducer";
import {RootState} from "../store";

const selectCartReducer = (state: RootState): CartState => state.cart;

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