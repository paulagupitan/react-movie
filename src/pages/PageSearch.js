import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import { apiKey } from '../globals/globalVariables';
import SearchInput from '../components/SearchInput';

function PageSearch() {

    const [movieSearchData, setMovieSearchData] = useState(null);

    useEffect( () => {
        const getMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=spiderman&page=1&include_adult=false`);
            let movieSearchDataFromAPI = await res.json();
            movieSearchDataFromAPI = movieSearchDataFromAPI.results.splice(0, 15);
            setMovieSearchData(movieSearchDataFromAPI);
        }

        getMovie();
    },[])

    return (
        <main>  
                {movieSearchData !== null && <section> 
                    
                    <h2>Results for: </h2>
                    
                    <SearchInput /> <Movies movies={movieSearchData} /></section>}

        </main>
    )
}

export default PageSearch
