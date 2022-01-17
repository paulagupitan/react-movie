import MovieCard from './MovieCard';
import moviesData from './moviesData';

function Movies() {
    return (
        <div className="movies-container">
            {moviesData.map((movie, i) => <MovieCard key={i} movie={movie} />)}
           {/* <MovieCard />  */}
        </div>
    )
}

export default Movies;
