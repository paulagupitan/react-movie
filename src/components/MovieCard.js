import { Link } from 'react-router-dom';

function MovieCard({ movie }) {

    function dateFormat(string) {
        const date = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], date);
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />

                <div className="movie-info">

                    <h3 className="movie-date">{dateFormat(movie.release_date)}</h3>
                    <h3 className="movie-rating">{movie.vote_average}</h3>
                    <h2>{movie.title}</h2>
                    <p className="movie-overview">{movie.overview}</p>
                    <div className="more-info-btn-container">
                        <Link to={`/movie/${movie.id}`}><button className="more-info-btn">More Info</button></Link>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default MovieCard;
