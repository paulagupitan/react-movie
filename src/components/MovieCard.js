import { Link } from 'react-router-dom';

function MovieCard({movie}) {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.img} alt={movie.name} />
            </div>
            <div className="movie-info">
                <p>{movie.name}</p>
                <p>{movie.release}</p>
                <p>{movie.rating}</p>
                <p>{movie.desc}</p>
                <Link to='/'>More Info</Link>
            </div>

            
        </div>
    )
}

export default MovieCard;
