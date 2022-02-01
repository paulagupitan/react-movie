import { useNavigate } from 'react-router-dom';

function SearchInput({ query }) {

    let navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        let q = e.target.elements.search.value;

        navigate(`/search/${q}`, { replace: true });

    }

    return (
        <div className="search">
            <form className="search-form" action="/search" method="get" onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="search">Search</label>
                <input className='search-bar'
                    type="text"
                    name="search"
                    id="search"
                    value={query}
                    placeholder='Search...' />
            </form>
        </div>
    )
}

export default SearchInput
