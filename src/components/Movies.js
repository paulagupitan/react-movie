import MovieCard from './MovieCard';

function Movies({movies}) {
    return (
        <div className="movies-container">
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
           {/* <MovieCard />  */}
        </div>
    )
}

export default Movies;
