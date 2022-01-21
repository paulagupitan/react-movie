// import MovieCard from '../components/MovieCard';
import FavCard from '../components/FavCard';
import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { getFavs } from '../utilities/storage';

function PageFavourites({ movie }) {

    function dateFormat(string) {
        const date = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], date);
    }


    const [favs, setFavs] = useState(false);


    useEffect(() => {

        setFavs(getFavs());

    }, []);



    return (
        <main>
            <section className="fav-page">

                {favs !== false && favs.length > 0 ? favs.map(movie => <FavCard key={movie.id} movie={movie} />) : <p>You do not have any favorite</p>}

            </section>
        </main >
    );
}


export default PageFavourites;

