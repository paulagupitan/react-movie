import { Link } from 'react-router-dom';


function Banner({ banner }) {

    function dateFormat(string) {
        const date = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], date);
    }

    return (
        <div className="movie-card">
            <div className="movie-backdrop">
                <img className="backdrop-img" src={`https://image.tmdb.org/t/p/w500/${banner.backdrop_path}`} alt={banner.title} />

                <div className="movie-info">

                    <h3 className="movie-date">{dateFormat(banner.release_date)}</h3>
                    <h3 className="movie-rating">{banner.vote_average}</h3>
                    <h2>{banner.title}</h2>
                    <p className="movie-overview">{banner.overview}</p>
                    <div className="more-info-btn-container">
                        <Link to={`/movie/${banner.id}`}><button className="more-info-btn">More Info</button></Link>

                    </div>
                </div>
            </div>


        </div>
    )

}

export default Banner