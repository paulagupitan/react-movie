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

                {favourites ? favourites.map(movie => <FavCard favourites={favourites} setFavourites={setFavourites} key={movie.id} movie={movie} />) : <p> No fav movies </p>}

            </section>
        </main >
    );
}


export default PageFavourites;

