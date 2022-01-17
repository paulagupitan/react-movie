import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import { apiKey } from '../globals/globalVariables';
import NavSort from '../components/NavSort';


function PageHome({ sort }) {

    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {

        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${apiKey}&language=en-US&page=1`);
            let moviesDataFromAPI = await res.json();

            moviesDataFromAPI = moviesDataFromAPI.results.splice(0, 12);
            console.log(moviesDataFromAPI);
            setMoviesData(moviesDataFromAPI);
        }

        fetchMovies();
    }, [sort]);




    return (
        <main>
            <section>
                <h2>Home</h2>
                <p>This app was created with love ❤️ by Snowball. 😎...</p>
            </section>
            <section>
                <NavSort />
                {moviesData !== null && <Movies movies={moviesData} />}

            </section>
        </main>
    );
}

export default PageHome;