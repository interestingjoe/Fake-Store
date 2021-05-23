import {useState, useEffect} from 'react'
import ProductItem from './components/ProductItem/ProductItem'
import Search from './components/Search/Search'
import './App.css';

function App() {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setProductList([
                'car',
                'bike',
                'ball',
                'motorcyle'
            ])
        }, 2000);
    }, [])

    const hasProductList = productList.length > 0 ? true : false

    return (
        <>
        <h1>
            Welcome to my fake store
        </h1>
        <Search />
        {
            hasProductList ?
            <ul className="product-list">
                <ProductItem listOfProducts={productList}/>
            </ul>
            : <p className='loding-copy'>Loading...</p>
        }
        </>
    );
}

export default App;
