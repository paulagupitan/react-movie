import FavCard from '../components/FavCard';

function PageFavourites({ favourites, setFavourites }) {

    return (
        <main>
            <section className="fav-page">

                {favourites.length > 0 ?
                    favourites.map(movie => <FavCard favourites={favourites} setFavourites={setFavourites} key={movie.id} movie={movie} />) :
                    <div className="fav-page-message">
                        <h3>No movies have been added to favourites.</h3>
                        <p>To add a movie to your favourites, click on the Movie Title or hover over a movie poster to go to that specific movie's description page.</p>
                    </div>}

            </section>
        </main >
    );
}


export default PageFavourites;

