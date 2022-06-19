import {
    ProductCardButton,
    ProductCardContainer,
    ProductCardFooter,
    ProductCardImg,
    ProductCardName,
    ProductCardPrice
} from './product-card.styles';
import { BUTTON_TYPES_CLASSES } from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

export const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    return (
        <ProductCardContainer>
            <ProductCardImg src={imageUrl} alt={`${name}`} />
            <ProductCardFooter>
                <ProductCardName>{name}</ProductCardName>
                <ProductCardPrice>{price}</ProductCardPrice>
            </ProductCardFooter>
            <ProductCardButton
                buttonType={BUTTON_TYPES_CLASSES.inverted}
                onClick={addProductToCart}
            >
                ADD TO CART
            </ProductCardButton>
        </ProductCardContainer>
    );
};