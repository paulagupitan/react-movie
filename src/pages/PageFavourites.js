// import MovieCard from '../components/MovieCard';
import FavCard from '../components/FavCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiKey } from '../globals/globalVariables';
import Favorites from '../components/Favorites';
import FavButton from "../components/FavButton";
import { getFavs } from '../utilities/storage';

function PageFavourites({favourites, setFavourites}) {

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


    // const [favs, setFavs] = useState(localStorage.getItem('faved') | false);


    // useEffect(() => {

    //     console.log(getFavs());
    //     console.log(favs);
    //     console.log('useEffect');

    //     setFavs(getFavs());

    // }, []);



    return (
        <main>
            <section className="fav-page">

                {favourites ? favourites.map(movie => <FavCard favourites={favourites} setFavourites={setFavourites} key={movie.id} movie={movie} />) : <p>You do not have any favorite</p>}

            </section>
        </main >
    );
}


export default PageFavourites;

