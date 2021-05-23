import React from 'react'
import './ProductItem.css';

const ProductItem = ({listOfProducts, searchedProduct}) => {
    const filteredProduct = listOfProducts.filter((product) => {
        return product.includes(searchedProduct)
    })
    const searchThis = searchedProduct.length > 0 ? filteredProduct : listOfProducts

    return (
        <>
            {
                searchThis.map((product) => {
                    return <li key={product}>{product}</li>
                })
            }
        </>
    )
}

export default ProductItem