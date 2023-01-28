import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'

function SearchFood() {
    const [searchText, setSearchText] = useState('');
    return (
        <div className="searchFood" style={{ outline: '3px solid #1f6e77', borderRadius: '6px' }} >
            <MdSearch className="search-icons" size="1.3rem" color="white"/>
            <input style={{ width: '100%', color:'white'}}
                onChange={(event) => setSearchText(event.target.value)}
                type="text"
                placeholder="type to search...">

            </input>
        </div>
    )
}
export default SearchFood