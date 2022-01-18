import { Link } from 'react-router-dom';

function MovieCard({ movie }) {

    function dateFormat(string) {
        let date = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], date);
    }

    function timeFormat(string) {
        let time = { hour: 'numeric', minute: 'numeric' };
        return new Date(string).toLocaleDateString([], time);
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <h3>{dateFormat(movie.release_date)}</h3>
                <h3>{movie.vote_average}</h3>
                <p>{movie.overview}</p>
                <div className="more-info-btn">
                    <Link to={`/movie/${movie.id}`}>More Info</Link>
                </div>
            </div>


        </div>
    )
}

export default MovieCard;
