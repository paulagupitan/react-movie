import { useState, useHistory } from 'react';

function SearchInput({ query }) {


    return (

        <div className="search">
            <form className="search-form" action="/search" method="get">
                <label className="sr-only">Search</label>
                <input className='search-bar'
                    type="text"
                    name="search"
                    value={query}
                    placeholder='Search...' />

            </form>
        </div>
    )
}

export default SearchInput
