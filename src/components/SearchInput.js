function SearchInput({value, setSearchValue}) {
    return (
        <div>
            <input
				className='search-bar'
				value={value}
				onChange={(event) => setSearchValue(event.target.value)}
				placeholder='Search...'
			></input>
        </div>
    )
}

export default SearchInput
