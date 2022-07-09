import { CartDropdownButton, CartDropdownContainer, CartDropdownItems, CartDropdownEmptyMessage } from './cart-dropdown.styles';
import { CartItem } from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

export const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
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