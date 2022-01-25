// import { useState } from 'react';

function SearchInput() {

    // const [searchValue, setSearchValue] = useState('');

    return (

        <div>

        <input className='search-bar' 
        // type="text" value={this.state.value} 
        // onChange={this.handleChange} 
        placeholder='Search...' />


        </div>




    // <form onSubmit={this.handleSubmit}>
    //     <label>
    //       Search
    //       <input className='search-bar' type="text" value={this.state.value} onChange={this.handleChange} placeholder='Search...' />
    //     </label>
    //     <input type="submit" value="Submit" />
    // </form>
    )
}

export default SearchInput
