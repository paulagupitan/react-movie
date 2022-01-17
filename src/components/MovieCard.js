import { Link } from 'react-router-dom';

function MovieCard({movie}) {
    return (
        <div className="movie-card">
            <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="movie-info">
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}</p>
                <p>{movie.overview}</p>
                <Link to='/'>More Info</Link>
            </div>

            
        </div>
    )
}

export default MovieCard;
