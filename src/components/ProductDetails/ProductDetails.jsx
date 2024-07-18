import React from 'react'
import './ProductDetails.css'
import arrow_icon from '../Assets/arrow_icon.png'

const ProductDetails = (props) => {
    const { product } = props;
    return (
        <div className="productdetails">
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={product.name} alt="" />
        </div>
    )
}


export default ProductDetails

