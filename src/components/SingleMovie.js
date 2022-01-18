import FavButton from "./FavButton";

function SingleMovie({movie}) {
    return (
        <div className="movie-card-single">
            <div className="movie-backdrop">
                <img className="backdrop-img" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                <img className="poster-mobile" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />

            </div>
       
            <div className="movie-single">
                <img className="poster-desktop" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />

                <div className="movie-info">
                    <div className="release-runtime-vote">
                        <p>{movie.release_date}</p>
                        <p>{movie.runtime}</p>
                        <p className="vote">{movie.vote_average}</p>
                    </div>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p>Genre: {movie.genres[0].name}</p>
                    <FavButton />
                </div>      
            </div>
        </div>
    )
}

export default SingleMovie
