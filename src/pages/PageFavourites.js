import MovieCard from '../components/MovieCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiKey } from '../globals/globalVariables';
import Favorites from '../components/Favorites';
import FavButton from "../components/FavButton";
import { getFavs } from '../utilities/storage';

function PageFavourites({ movie }) {

    function dateFormat(string) {
        const date = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], date);
    }

    function minToHrMin(time) {
        let hour = Math.floor(time / 60);
        let min = time % 60;
        let timeInHrMin = `${hour}h ${min}m`;

        return timeInHrMin;
    }


    const [favs, setFavs] = useState(false);


    useEffect(() => {

        console.log(getFavs());
        console.log(favs);

        setFavs(getFavs());

    }, []);



    return (
        <main>
            <section className="fav-page">

                hello....

                {/* //if favs is greater than 0 then show the fav movies, if not then show msg */}

                {favs !== false && favs.length > 0 ? favs.map(movie => <MovieCard key={movie.id} movie={movie} />) : <p>You do not have any favorite</p>}

            </section>
        </main>
    );
}


export default PageFavourites;

