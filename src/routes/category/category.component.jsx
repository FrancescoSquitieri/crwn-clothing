import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/product-card/product-card.component';
import { CategoryContainer, CategoryTitle } from './category.styles';

export const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])
    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {
                    products && products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>
        </>
    );
};