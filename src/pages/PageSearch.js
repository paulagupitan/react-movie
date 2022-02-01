import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Movies from '../components/Movies';
import { appTitle, apiKey } from '../globals/globalVariables';
import SearchInput from '../components/SearchInput';

function PageSearch() {

    const { query } = useParams();
    const [movieSearchData, setMovieSearchData] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
            let movieSearchDataFromAPI = await res.json();

            movieSearchDataFromAPI = movieSearchDataFromAPI.results.splice(0, 24);
            setMovieSearchData(movieSearchDataFromAPI);
        }

        getMovie();
        console.log(movieSearchData);
    }, [query])

    useEffect(() => {
		document.title = `${appTitle} - Search`;
	}, []);


    return (
        <main>
            {movieSearchData !== null &&

                <section className="page-search">
                    <div className="page-search-header">
                        <SearchInput />
                        <h2 className="search-results">Search results for: "{query}" </h2>
                    </div>

                    {movieSearchData.length > 0 ?
                    <Movies movies={movieSearchData} /> : 
                    <p className="no-result">No results found.</p>}
                </section>
            }

        </main>
    )
}

export default PageSearch
