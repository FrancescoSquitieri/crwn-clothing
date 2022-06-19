import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { CartIconContainer, CartItemCount, CartShoppingIcon } from './cart-icon.styles';

export const CartIcon = () => {
    const { cartIsOpen, setIsCartOpen } = useContext(CartContext);
    const { cartItems } = useContext(CartContext);

    const toggleCartIsOpen = () => setIsCartOpen(!cartIsOpen);
    return (
        <CartIconContainer onClick={toggleCartIsOpen}>
            <CartShoppingIcon className='shopping-icon' />
            <CartItemCount>{cartItems.length}</CartItemCount>
        </CartIconContainer>
    );
};