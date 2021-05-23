import React from 'react'
import './ProductItem.css';

const ProductItem = ({listOfProducts}) => {
    return (
        <>
            {listOfProducts.map((product) => {
                return <li key={product}>{product}</li>
            })}
        </>
    )
}

export default ProductItem