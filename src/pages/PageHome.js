import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import { apiKey } from '../globals/globalVariables';


function PageHome() {

    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {

        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
        let moviesDataFromAPI = await res.json();

        moviesDataFromAPI = moviesDataFromAPI.results.splice(0,12);
        console.log(moviesDataFromAPI);
        setMoviesData(moviesDataFromAPI);
        }

        fetchMovies();
    }

    );


    return (
        <main>
            <section>
                <h2>Home</h2>
                <p>This app was created with love ❤️ by Snowball. 😎...</p>
            </section>
            <section>

                {moviesData !== null && <Movies movies={moviesData} />}

            </section>
        </main>
    );
}

export default PageHome;