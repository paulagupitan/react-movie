import { Link } from 'react-router-dom';
import { dateFormat } from '../utilities/format';
import noDisplay from "../images/no-backdrop.jpg";

function Banner({ movies }) {

    return (
        <section className="movie-banner">
            {movies.backdrop_path === null ? 
                <img className="no-backdrop" src={noDisplay} alt="No Backdrop Poster" /> : 
                <img className="backdrop-img" src={`https://image.tmdb.org/t/p/original/${movies[0].backdrop_path}`} alt={movies[0].title} />}

                <div className="movie-info-banner">
                    <div className="date-rating-banner">
                        <h3 className="movie-date-banner">{dateFormat(movies[0].release_date)}</h3>
                        <h3 className="movie-rating-banner">{movies[0].vote_average}</h3>
                    </div>
                    <h2>{movies[0].title}</h2>
                    <p className="movie-overview-banner">{movies[0].overview}</p>
                    <div className="more-info-btn-container-banner">
                        <Link to={`/movie/${movies[0].id}`} className="more-info-btn">More Info</Link>
                    </div>
                </div>
        </section>
    )

}

export default Banner