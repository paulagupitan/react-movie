import { Link } from 'react-router-dom';
import banner from '../images/banner.jpeg';


function Banner({ movie }) {

    // function dateFormat(string) {
    //     const date = { year: 'numeric', month: 'long', day: 'numeric' };
    //     return new Date(string).toLocaleDateString([], date);
    // }

    return (
        <div className="movie-card">
            <div className="movie-backdrop">
                <img className="backdrop-img" src={banner} alt={"Kate"} />

                {/* <div className="movie-info">

                    <h3 className="movie-date">{dateFormat(movie.release_date)}</h3>
                    <h3 className="movie-rating">{movie.vote_average}</h3>
                    <h2>{movie.title}</h2>
                    <p className="movie-overview">{movie.overview}</p>
                    <div className="more-info-btn-container">
                        <Link to={`/movie/${movie.id}`}><button className="more-info-btn">More Info</button></Link>

                    </div>
                </div> */}
            </div>


        </div>
    )

}

export default Banner