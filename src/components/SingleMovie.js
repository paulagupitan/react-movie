import FavButton from "./FavButton";

function SingleMovie({movie}) {
    return (
        <div className="movie-card">
            <div className="movie-backdrop">
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
            </div>
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="movie-info">
                <p>{movie.release_date}</p>
                <p>{movie.runtime}</p>
                <p>{movie.vote_average}</p>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>Genre: {movie.genres[0].name}</p>
                <FavButton />
            </div>

            
        </div>
    )
}

export default SingleMovie
