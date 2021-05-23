import {useState, useEffect} from 'react'
import ProductItem from './components/ProductItem/ProductItem'
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
        {
            hasProductList ?
            <ul className="product-list">
                <ProductItem listOfProducts={productList}/>
            </ul>
            : 'Loading...'
        }
        </>
    );
}

export default App;
