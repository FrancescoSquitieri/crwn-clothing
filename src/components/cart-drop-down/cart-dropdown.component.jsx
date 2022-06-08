import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

export const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button style={{ fontSize: '0.7rem' }}>GO TO CHECKOUT</Button>
        </div>
    );
};