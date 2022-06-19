import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
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
    const { removeItemFromCheckout, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const handleRemoveItemFromCheckout = () => removeItemFromCheckout(product)
    const handleDecrementCartItem = () => removeItemFromCart(product);
    const handleIncrementCartItem = () => addItemToCart(product);

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