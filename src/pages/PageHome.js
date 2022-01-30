import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import { appTitle, apiKey } from '../globals/globalVariables';
import NavSort from '../components/NavSort';
import Banner from '../components/Banner';
import SearchInput from '../components/SearchInput';


function PageHome({ sort }) {

    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {

        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${apiKey}&language=en-US&page=1`);
            let moviesDataFromAPI = await res.json();

            moviesDataFromAPI = moviesDataFromAPI.results.splice(0, 15);
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
            <section>
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