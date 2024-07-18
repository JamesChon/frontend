import React from 'react'
import './RecommendedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RecommendedProducts = () => {
    return (
        <div>
            <h1>Recommended Products</h1>
            <hr />
            <div className="recommendedproducts-item">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
                })}
            </div>
        </div>
    )
}

export default RecommendedProducts
