import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDetails from '../components/ProductDetails/ProductDetails';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RecommendedProducts from '../components/RecommendedProducts/RecommendedProducts';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId))
    return (
        <div>
            <ProductDetails product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RecommendedProducts />
        </div>
    )
}

export default Product
