import FavButton from "./FavButton";
import noDisplay from "../images/no-backdrop.jpg";
import noPoster from '../images/no-movie-poster.jpg';

function SingleMovie({ movie, favourites, setFavourites }) {

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


    return (
        <div className="movie-card-single">
            <div className="movie-backdrop">
                {/* <img className="backdrop-img" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} /> */}
                {movie.backdrop_path === null ? <img className="no-backdrop" src={noDisplay} alt="No Backdrop Poster" /> : <img className="backdrop-img" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />}
                <img className="poster-mobile" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />

            </div>

            <div className="movie-single">
                {movie.poster_path === null ?
                    <img className="poster-desktop" src={noPoster} alt="No poster available." /> :
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
                    <p>Genre: {movie.genres.map(genres => genres.name).join(",")}</p>
                    <div className="fav"><FavButton favourites={favourites} setFavourites={setFavourites} movie={movie} /></div>

                    <button>play trailer</button>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie
