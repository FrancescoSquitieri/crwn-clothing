import { useDispatch, useSelector } from 'react-redux';
import { selectCartIsOpen, selectCartItems } from '../../store/cart/cart.selector';
import { setCartIsOpen } from '../../store/cart/cart.action';
import { CartIconContainer, CartItemCount, CartShoppingIcon } from './cart-icon.styles';

export const CartIcon = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const cartIsOpen = useSelector(selectCartIsOpen);

    const toggleCartIsOpen = () => dispatch(setCartIsOpen(!cartIsOpen));
    return (
        <CartIconContainer onClick={toggleCartIsOpen}>
            <CartShoppingIcon className='shopping-icon' />
            <CartItemCount>{cartItems.length}</CartItemCount>
        </CartIconContainer>
    );
};