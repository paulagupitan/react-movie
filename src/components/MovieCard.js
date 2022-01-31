import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import { dateFormat } from '../utilities/format';

function MovieCard({ movie }) {

    return (

        <div className="movie-card-container">
            <div className="movie-poster">
                {movie.poster_path === null ?
                    <img src={noPoster} alt="No poster available." /> :
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                }
                <div className="movie-info">
                    <div className="date-rating-card">
                        <h3 className="movie-date">
                            {movie.release_date === "" ? <p>Date Unavailable</p> : dateFormat(movie.release_date) }
                        </h3>
                        <h3 className="movie-rating">{movie.vote_average}</h3>
                    </div>
                    <h2>{movie.title}</h2>
                    <p className="movie-overview">{movie.overview}</p>
                    <Link to={`/movie/${movie.id}`} className="more-info">More Info</Link>
                </div>
            </div>
        </div>
    )
}


export default MovieCard;
