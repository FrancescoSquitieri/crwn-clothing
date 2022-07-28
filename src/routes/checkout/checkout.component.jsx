import { useSelector } from 'react-redux';
import { selectCartItems, selectCartPrice } from '../../store/cart/cart.selector';
import { useNavigate } from 'react-router';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';
import Button from '../../components/button/button.component';
import {
    CheckoutBlock,
    CheckoutContainer,
    CheckoutHeader,
    CheckoutTotal,
    CheckoutEmpty,
    CheckoutEmptyText
} from './checkout.styles';
import { PaymentForm } from '../../components/payment-form/payment-form.component';

export const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectCartPrice);
    const navigate = useNavigate();
    const goToShopNavigateHandler = () => navigate('/shop');

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <CheckoutBlock>
                    <span>Product</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Description</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Quantity</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Price</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Remove</span>
                </CheckoutBlock>
            </CheckoutHeader>
            {
                cartItems.length !== 0 ? (
                    cartItems.map(item => {
                        const { id } = item;
                        return (
                            <CheckoutItem key={id} product={item} />
                        )
                    })
                ) : (
                    <CheckoutEmpty>
                        <CheckoutEmptyText>No product added to the cart, visit the shop to add what you like best!</CheckoutEmptyText>
                        <Button onClick={goToShopNavigateHandler}>
                            SHOP
                        </Button>
                    </CheckoutEmpty>
                )
            }
            <CheckoutTotal>Total: ${totalPrice}</CheckoutTotal>
            <PaymentForm />
        </CheckoutContainer>
    );
};