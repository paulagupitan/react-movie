import { useState, useHistory } from 'react';

function SearchInput({query}) {

    // const [searchValue, setSearchValue] = useState('');

    return (

        <form className="search-form" action="/search" method="get">

            <label className="sr-only">Search</label>
            <input className='search-bar' 
            type="text" 
            name="search"
            value={query}
            placeholder='Search...' />

        </form>
    )
}

export default SearchInput
