import FavButton from "./FavButton";
import noPoster from '../images/no-movie-poster.jpg';
import { dateFormat } from '../utilities/format';

function FavCard({ movie, favourites, setFavourites }) {

    return (

        <div className="fav-card-container">
            <div className="fav-movie-poster">
                {movie.poster_path === null ?
                    <img className="fav-poster" src={noPoster} alt="No poster available." /> :
                    <img className="fav-poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                }
                <div className="fav-movie-info">
                    <h3 className="fav-movie-date">
                        {movie.release_date === "" ? <p>Date Unavailable</p> : dateFormat(movie.release_date) }
                        </h3>
                    <h3 className="fav-movie-rating">{movie.vote_average}</h3>
                    <h2>{movie.title}</h2>
                    <p className="fav-movie-overview">{movie.overview}</p>
                    <FavButton favourites={favourites} setFavourites={setFavourites} movie={movie} />
                </div>
            </div>
        </div>
    )
}

export default FavCard;
