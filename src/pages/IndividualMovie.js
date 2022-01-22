import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
// import SingleMovie from '../components/SingleMovie';
import {apiKey} from '../globals/globalVariables';
import SingleMovie from '../components/SingleMovie';

function IndividualMovie( {favourites, setFavourites} ) {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect( () => {
        const getMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
            const moviesDataFromAPI = await res.json();
            setMovie(moviesDataFromAPI);
        }

        getMovie();
    },)

    return (
        <section>
           {movie !== null && <SingleMovie favourites={favourites} setFavourites={setFavourites} movie={movie} />}

        </section>
    );
}


export default IndividualMovie;