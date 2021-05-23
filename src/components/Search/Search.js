import React from 'react'
import {useState} from 'react'

const Search = ({searchedProductList}) => {
    const [searchedValue, setSearchedValue] = useState('')

    const changeProductList = (e) => {
        setSearchedValue(e.target.value)
        searchedProductList(e.target.value)
    }
    const clickClear = () => {
        setSearchedValue('')
        // setSearchedValue(e.target.value)
        // searchedProductList(e.target.value)
    }
    const hasValue = searchedValue.length > 0 ? true : false

    return (
        <div className='search'>
            <label>
                Search
            </label>
            <input className='search-input' type='text' value={searchedValue} onChange={changeProductList} />
            {
                hasValue && <button className='clear-search' onClick={clickClear}>Clear</button>
            }
        </div>
    )
}

export default Search