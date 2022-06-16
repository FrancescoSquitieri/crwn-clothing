import './cart-item.styles.scss';
export const CartItem = ({ cartItemProps }) => {
    const { name, quantity, imageUrl, price } = cartItemProps;

    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    );
};