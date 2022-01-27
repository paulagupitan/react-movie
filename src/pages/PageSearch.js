import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import { apiKey } from '../globals/globalVariables';
import SearchInput from '../components/SearchInput';

function PageSearch() {

    const { search } = window.location;
    const query = new URLSearchParams(search).get('search');

    const [movieSearchData, setMovieSearchData] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
            let movieSearchDataFromAPI = await res.json();

            movieSearchDataFromAPI = movieSearchDataFromAPI.results.splice(0, 24);
            setMovieSearchData(movieSearchDataFromAPI);
        }

        getMovie();
    }, [query])


    return (
        <main>
            {movieSearchData !== null &&

                <section className="page-search">
                    <div className="page-search-header">
                        <SearchInput />
                        <h2 className="search-results">Search results for: "{query}" </h2>
                    </div>

                    {movieSearchData.length > 0 ?
                        <Movies movies={movieSearchData} /> : <p className="no-result">No results found.</p>}
                </section>
            }

        </main>
    )
}

export default PageSearch
