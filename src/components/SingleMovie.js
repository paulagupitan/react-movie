import { useEffect } from 'react';
import FavButton from "./FavButton";
import noDisplay from "../images/no-backdrop.jpg";
import noPoster from '../images/no-movie-poster.jpg';
import { dateFormat } from '../utilities/format';
import { minToHrMin } from '../utilities/format';
import { appTitle } from "../globals/globalVariables";
import Trailer from './Trailer';

function SingleMovie({ movie, favourites, setFavourites }) {

    useEffect(() => {
		document.title = `${appTitle} - ${movie.title}`;
	}, [movie.title]);

    return (
        <div className="movie-card-single">
            <div className="movie-backdrop">
                {movie.backdrop_path === null ? <img className="no-backdrop" src={noDisplay} alt="No Backdrop Poster" /> : <img className="backdrop-img" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />}
                {/* Mobile Movie Poster */}
                {movie.poster_path === null ?
                    <img className="no-poster" src={noPoster} alt="No poster available." /> :
                    <img className="poster-mobile" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />}
            </div>

            {/* Desktop Movie Poster */}
            <div className="movie-single">
                {movie.poster_path === null ?
                    <img className="poster-desktop" src={noPoster} alt="No poster available." /> :
                    <img className="poster-desktop" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                }

                <div className="movie-info-single">
                    <div className="release-runtime-vote">
                        <p>{movie.release_date === "" ? <p>Date Unavailable</p> : dateFormat(movie.release_date) }</p>
                        <p>{minToHrMin(movie.runtime)}</p>
                        <p className="vote">{movie.vote_average}</p>
                    </div>
                    <h2>{movie.title}</h2>
                    <p className="desc">{movie.overview}</p>
                    <p>Genre: {movie.genres.map(genres => genres.name).join(", ")}</p>
                    <div className="fav">
                        {movie.videos.results.length > 0 ? <Trailer movie={movie} /> : <div></div>}
                        {/* Above code keeps the FavButton on the right side even when there is no trailer */}
                        <FavButton favourites={favourites} setFavourites={setFavourites} movie={movie} />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SingleMovie
