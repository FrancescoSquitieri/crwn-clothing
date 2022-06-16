import { useContext } from 'react';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../context/cart.context';
import './checkout.styles.scss';

export const Checkout = () => {

    const { cartItems, totalPrice } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => {
                    const { id } = item;
                    return (
                        <CheckoutItem key={id} product={item} />
                    )
                })
            }
            <span className='total'>Total: {totalPrice}</span>
        </div>
    );
};