import {useState, useEffect} from 'react'
import ProductItem from './components/ProductItem/ProductItem'
import Search from './components/Search/Search'
import './App.css';

function App() {
    const [productList, setProductList] = useState([])
    const [searchedProduct, setSearchedProduct] = useState('')

    // Delays the list during initial page load to give time to pull from API
    useEffect(() => {
        setTimeout(() => {
            setProductList(getProductsFromAPI())
        }, 2000);
    }, [])

    // Pulls from an API. For now I'm using a static array.
    const getProductsFromAPI = () => {
        return [
            'car',
            'bike',
            'ball',
            'motorcyle'
        ]
    }
    const hasProductList = productList.length > 0 ? true : false
    const searchedProductList = (searchProduct) => {
        setSearchedProduct(searchProduct)
    }

    return (
        <>
        <h1>
            Welcome to my fake store
        </h1>
        <Search searchedProductList={searchedProductList} />
        {
            hasProductList ?
            <ul className="product-list">
                <ProductItem listOfProducts={productList} searchedProduct={searchedProduct} />
            </ul>
            : <p className='loding-copy'>Loading...</p>
        }
        </>
    );
}

export default App;
