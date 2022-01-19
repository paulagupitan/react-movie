import MovieCard from '../components/MovieCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiKey } from '../globals/globalVariables';
import Favorites from '../components/Favorites';

function PageFavourites() {

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


    let favMovies = localStorage.getItem('faved');
    favMovies = JSON.parse(favMovies);

    // const favs = useSelector((state) => state.favs.items);

    return (
        <main>
            <section className="fav-page">
                {/* {favMovies.map((fave, i) => {
                    return <Kitten key={i}
                        kittenObj={singleKitten}
                        isFav={true} />
                })} */}
                {/* <h2>No movies have been added to favourites.</h2>
                <p>To add a movie to your favourites, click on the Movie Title or hover over a movie poster to go to that specific movie's description page.</p> */}

            </section>
        </main>
    );
}


export default PageFavourites;

