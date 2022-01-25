// import MovieCard from '../components/MovieCard';
import FavCard from '../components/FavCard';
import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { getFavs } from '../utilities/storage';

function PageFavourites({ favourites, setFavourites }) {

    function dateFormat(string) {
        const date = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], date);
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

                {favourites.length > 0 ? favourites.map(movie => <FavCard favourites={favourites} setFavourites={setFavourites} key={movie.id} movie={movie} />) : <div className="fav-page-info"><h3>No movies have been added to favourites.</h3><p>To add a movie to your favourites, click on the Movie Title or hover over a movie poster to go to that specific movie's description page.</p></div>}

            </section>
        </main >
    );
}


export default PageFavourites;

