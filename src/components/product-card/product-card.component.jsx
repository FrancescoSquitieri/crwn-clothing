import {
    ProductCardButton,
    ProductCardContainer,
    ProductCardFooter,
    ProductCardImg,
    ProductCardName,
    ProductCardPrice
} from './product-card.styles';
import { BUTTON_TYPES_CLASSES } from '../button/button.component';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

export const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const { name, imageUrl, price } = product;
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
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