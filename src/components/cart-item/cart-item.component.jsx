import { CartItemContainer, CartItemDetails, CartItemImg, CartItemName, CartItemPrice } from "./cart-item.styles";
export const CartItem = ({ cartItemProps }) => {
    const { name, quantity, imageUrl, price } = cartItemProps;

    return (
        <CartItemContainer>
            <CartItemImg src={imageUrl} alt={`${name}`} />
            <CartItemDetails>
                <CartItemName>{name}</CartItemName>
                <CartItemPrice>{quantity} x ${price}</CartItemPrice>
            </CartItemDetails>
        </CartItemContainer>
    );
};