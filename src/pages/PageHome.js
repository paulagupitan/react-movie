import { useState, useEffect } from 'react';
import { appTitle, apiKey } from '../globals/globalVariables';
import Banner from '../components/Banner';
import NavSort from '../components/NavSort';
import SearchInput from '../components/SearchInput';
import Movies from '../components/Movies';


function PageHome({ sort }) {

    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {

        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${apiKey}&language=en-US&page=1`);
            let moviesDataFromAPI = await res.json();

            moviesDataFromAPI = moviesDataFromAPI.results.splice(0, 16);
            console.log(moviesDataFromAPI);
            setMoviesData(moviesDataFromAPI);
        }

        fetchMovies();
    }, [sort]);

    useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);

    return (
        <main>
            {moviesData !== null && 
            <section className="page-home">
                <Banner movies={moviesData} />
                <section className = "search-nav">
                    <SearchInput />
                    <NavSort /> 
                </section>
                <Movies movies={moviesData} />
            </section>}
        </main>
    );
}

export default PageHome;