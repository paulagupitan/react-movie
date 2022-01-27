import FavButton from "./FavButton";
import { dateFormat } from '../utilities/format';
import { minToHrMin } from '../utilities/format';
import Trailer from './Trailer';
import noPoster from '../images/no-movie-poster.jpg';

function SingleMovie({ movie, favourites, setFavourites }) {

    return (
        <div className="movie-card-single">
            <div className="movie-backdrop">
                <img className="backdrop-img" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                <img className="poster-mobile" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />

            </div>

            <div className="movie-single">
                {movie.poster_path === null ?
                    <img src={noPoster} alt="No poster available." /> :
                    <img className="poster-desktop" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                }

                <div className="movie-info-single">
                    <div className="release-runtime-vote">
                        <p>{dateFormat(movie.release_date)}</p>
                        <p>{minToHrMin(movie.runtime)}</p>
                        <p className="vote">{movie.vote_average}</p>
                    </div>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p>Genre: {movie.genres.map(genres => genres.name).join(", ")}</p>
                    <div className="fav">
                        {movie.videos.results.length > 0 && <Trailer movie={movie} />}
                        <FavButton favourites={favourites} setFavourites={setFavourites} movie={movie} />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SingleMovie
