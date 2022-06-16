import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

export const CartIcon = () => {
    const { cartIsOpen, setIsCartOpen } = useContext(CartContext);
    const { cartItems } = useContext(CartContext);

    const toggleCartIsOpen = () => setIsCartOpen(!cartIsOpen);
    return (
        <div className='cart-icon-container' onClick={toggleCartIsOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartItems.length}</span>
        </div>
    );
};