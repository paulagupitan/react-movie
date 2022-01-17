import MovieCard from './MovieCard';

function Movies({movies}) {
    return (
        <div className="movies-container">
            {movies.map((movie, i) => <MovieCard key={i} movie={movie} />)}
           {/* <MovieCard />  */}
        </div>
    )
}

export default Movies;
