import { Link } from 'react-router-dom';
import FavButton from "./FavButton";

function FavCard({ movie }) {

    function dateFormat(string) {
        const date = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], date);
    }

    return (

        <div className="fav-card-container">
            <div className="fav-movie-poster">
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />

                <div className="fav-movie-info">
                    <h3 className="fav-movie-date">{dateFormat(movie.release_date)}</h3>
                    <h3 className="fav-movie-rating">{movie.vote_average}</h3>
                    <h2>{movie.title}</h2>
                    <p className="fav-movie-overview">{movie.overview}</p>
                    <FavButton movie={movie} />
                </div>
            </div>
        </div>
    )
}

export default FavCard;
