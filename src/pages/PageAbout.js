import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';
import tmdb from '../images/tmdb.svg.png';

function PageAbout() {

    useEffect(() => {
		document.title = `${appTitle} - About`;
	}, []);

    return (
        <main>
            <section className="about-page">
                <h2>Let's talk about XTRAMOV!E </h2>
                <p>With the XTRAMOV!E movie database, you can find information on all the newest and upcoming movies, the most popular feature films, and top rated movies.</p>
                <p>Click on the heart icon to add a movie to your very own Favourites collection, where you can keep track of all the movies you like.</p>
                <p>Browse to check out the ratings and genres, and watch the trailers!</p>
                <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                <img className="about-logo" src={tmdb} alt="The Movie Database logo" />
            </section>
        </main>

    );

}


export default PageAbout;
