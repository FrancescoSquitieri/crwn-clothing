import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart, removeItemFromCheckout } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
    CheckoutItemArrow,
    CheckoutItemContainer,
    CheckoutItemFields,
    CheckoutItemImg,
    CheckoutItemImgContainer,
    CheckoutItemQuantity,
    CheckoutItemRemoveButton,
    CheckoutItemValue,
} from './checkout-item.styles';

export const CheckoutItem = ({ product }) => {

    const { name, imageUrl, price, quantity } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleRemoveItemFromCheckout = () => dispatch(removeItemFromCheckout(cartItems, product));
    const handleDecrementCartItem = () => dispatch(removeItemFromCart(cartItems, product));
    const handleIncrementCartItem = () => dispatch(addItemToCart(cartItems, product));

    return (
        <CheckoutItemContainer>
            <CheckoutItemImgContainer>
                <CheckoutItemImg src={imageUrl} alt={`${name}`} />
            </CheckoutItemImgContainer>
            <CheckoutItemFields>{name}</CheckoutItemFields>
            <CheckoutItemQuantity>
                <CheckoutItemArrow onClick={handleDecrementCartItem}>&#10094;</CheckoutItemArrow>
                <CheckoutItemValue>{quantity}</CheckoutItemValue>
                <CheckoutItemArrow onClick={handleIncrementCartItem}>&#10095;</CheckoutItemArrow>
            </CheckoutItemQuantity>
            <CheckoutItemFields>{price}</CheckoutItemFields>
            <CheckoutItemRemoveButton onClick={handleRemoveItemFromCheckout}>
                &#10005;
            </CheckoutItemRemoveButton>
        </CheckoutItemContainer>
    );
};