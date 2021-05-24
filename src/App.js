import {useState, useEffect} from 'react'
import ProductItem from './components/ProductItem/ProductItem'
import Search from './components/Search/Search'
import './App.css';

function App() {
    const [productList, setProductList] = useState([])
    const [searchedProduct, setSearchedProduct] = useState('')
    const [apiData, setApiData] = useState(null)
    const [loading, setLoading] = useState(true)

    // Pulls from an API. For now I'm using a static array.
    // const staticArr = [
    //     'car',
    //     'bike',
    //     'ball',
    //     'motorcyle'
    // ]
    const useFetch = (url) => {
        const [data, setData] = useState(null)

        useEffect(async() => {
            const response = await fetch(url)
            const resJSON = await response.json()
            setData(resJSON.map((e) => e.title))
            setLoading(false)
        }, [])

        return data
    }
    const searchedProductList = (searchProduct) => {
        setSearchedProduct(searchProduct)
    }
    const asdf = useFetch('https://fakestoreapi.com/products/')

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
                <ProductItem listOfProducts={asdf} searchedProduct={searchedProduct} />
            </ul>
        }
        </>
    );
}

export default App;
