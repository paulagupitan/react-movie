import tmdb from '../images/tmdb.svg.png';

function PageAbout() {
    return (
        <section className="about-page">
            {/* Need to add tmdb logo */}
            <h2>Let's talk about XTRAMOV!E </h2>
            <p>The XTRAMOV!E movie database is a website where users can find popular, top rated, now playing and upcoming movie listings.</p>
            <p>Browse for your favourite genres or movies, check out their ratings and see how they match up!</p>
            <p>Found something you like? Add them to your favourites and remove any item anytime.</p>
            <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <img className="about-logo" src={tmdb} alt="Tmdb logo" />
        </section>

    );

}


export default PageAbout;