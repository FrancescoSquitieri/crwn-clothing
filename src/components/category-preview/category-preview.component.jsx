import { CategoryPreviewContainer, CategoryPreviewItems, CategoryPreviewTitle } from './category-preview.styles';
import { ProductCard } from '../product-card/product-card.component';
import { Link } from 'react-router-dom';

export const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Link to={`${title.toLowerCase()}`}>
                    <CategoryPreviewTitle>{title.toUpperCase()}</CategoryPreviewTitle>
                </Link>
            </h2>
            <CategoryPreviewItems>
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map(product => <ProductCard key={product.id} product={product} />)
                }
            </CategoryPreviewItems>
        </CategoryPreviewContainer>
    );
};