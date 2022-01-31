import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';
import FavCard from '../components/FavCard';

function PageFavourites({ favourites, setFavourites }) {

    useEffect(() => {
		document.title = `${appTitle} - Favourites`;
	}, []);

    return (
        <main>
            <section className="fav-page">

                {favourites.length > 0 ?
                    favourites.map(movie => <FavCard favourites={favourites} setFavourites={setFavourites} key={movie.id} movie={movie} />) :
                    <div className="fav-page-message">
                        <h3>No movies have been added to favourites.</h3>
                        <p>To get started, go to a movie's individual page to click on the heart icon for the movies you like and add it to your collection!</p>
                    </div>}

            </section>
        </main >
    );
}


export default PageFavourites;

