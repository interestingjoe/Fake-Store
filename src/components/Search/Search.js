import React from 'react'
import {useState} from 'react'

const Search = () => {
    const [searchedValue, setSearchedValue] = useState('')

    const changeProductList = (e) => {
        setSearchedValue(e.target.value)
    }

    return (
        <div className='search'>
            <label>
                Search
            </label>
            <input type='text' value={searchedValue} onChange={changeProductList} />
        </div>
    )
}

export default Search