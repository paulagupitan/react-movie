
export function getFavs() {
    let favs = localStorage.getItem('faved');

    if (favs === null) {
        favs = [];
    } else {
        favs = JSON.parse(favs);
    }

    return favs;
}

export function isFav(movie, favourites) {

    const movieInFavourites = favourites.find(favourite => favourite.id === movie.id);
    // either will be equal to the movie, or undefined 

    return movieInFavourites === undefined ? false : true;

}

