import {useState, useEffect} from 'react'
import ProductItem from './components/ProductItem/ProductItem'
import Search from './components/Search/Search'
import './App.css';

function App() {
    const [productList, setProductList] = useState([])
    const [searchedProduct, setSearchedProduct] = useState('')
    const [loading, setLoading] = useState(true)

    // Get from API.
    const getData = async(url) => {
        const response = await fetch(url)
        const resJSON = await response.json()
        setProductList(resJSON.map((e) => e.title))
        setLoading(false)
    }

    // Listens to search bar and populates results.
    const searchedProductList = (searchProduct) => {
        setSearchedProduct(searchProduct)
    }

    useEffect(() => {
        getData('https://fakestoreapi.com/products/')
    }, [])

    return (
        <>
        <h1>
            Welcome to my fake store
        </h1>
        <Search searchedProductList={searchedProductList} />
        {
            loading ?
            <p className='loding-copy'>Loading...</p>
            :
            <ul className="product-list">
                <ProductItem listOfProducts={productList} searchedProduct={searchedProduct} />
            </ul>
        }
        </>
    );
}

export default App;
