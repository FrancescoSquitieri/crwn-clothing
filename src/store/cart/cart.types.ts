import {CategoryItem} from "../categories/category.types";

export enum CART_ACTION_TYPES {
    SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
    SET_CART_IS_OPEN = 'cart/SET_CART_IS_OPEN',
}
/*
export type Cart = {
    cartIsOpen: boolean;
    cartItems: CategoryItem[];
}
 */

export type CartItem = CategoryItem & {
    quantity: number;
}