import { useContext } from 'react';
import { CartDropdownButton, CartDropdownContainer, CartDropdownItems, CartDropdownEmptyMessage } from './cart-dropdown.styles';
import Button from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router';

export const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => navigate('/checkout');
    return (
        <CartDropdownContainer>
            <CartDropdownItems>
                {
                    cartItems.length ? (
                        cartItems.map(item => <CartItem key={item.id} cartItemProps={item} />)
                    ) : (
                        <CartDropdownEmptyMessage>
                            <span>Your cart is empty</span>
                        </CartDropdownEmptyMessage>
                    )
                }
            </CartDropdownItems>
            <CartDropdownButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    );
};