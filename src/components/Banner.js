import { Link } from 'react-router-dom';


function Banner({ movies }) {

    function dateFormat(string) {
        const date = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], date);
    }

    return (
        <div className="movie-banner">
            <div className="drop">
                <img src={`https://image.tmdb.org/t/p/original/${movies[0].backdrop_path}`} alt={movies[0].title} />

                <div className="movie-info-banner">

                    <h3 className="movie-date">{dateFormat(movies[0].release_date)}</h3>
                    <h3 className="movie-rating">{movies[0].vote_average}</h3>
                    <h2>{movies[0].title}</h2>
                    <p className="movie-overview">{movies[0].overview}</p>
                    <div className="more-info-btn-container">
                        <Link to={`/movie/${movies[0].id}`}><button className="more-info-btn">More Info</button></Link>
                    </div>
                </div>
            </div>


        </div >
    )

}

export default Banner