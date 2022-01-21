
export function getFavs() {
    let favs = localStorage.getItem('faved');

    if (favs === null) {
        favs = [];
    } else {
        favs = JSON.parse(favs);
    }

    return favs;
}

export function isFav(movie) {

    const favsFromStorage = getFavs();

    if (favsFromStorage.length === 0) {
        return false;
    }

    function isInFavs(obj) {
        return obj.id === movie.id;
    }

    return favsFromStorage.find(isInFavs) !== undefined ? true : false;

}

export function addToFavs(movie) {

    let favsFromStorage = localStorage.getItem('faved');
    let favsForStorage;

    if (favsFromStorage === null) {
        favsForStorage = [movie];
        favsForStorage = JSON.stringify(favsForStorage);
        localStorage.setItem('faved', favsForStorage);
        return;
    }

    favsFromStorage = JSON.parse(favsFromStorage)

    if (!Array.isArray(favsFromStorage)) {
        favsForStorage = [movie];
        favsForStorage = JSON.stringify(favsForStorage);
        localStorage.setItem('faved', favsForStorage);
        return;
    }

    favsForStorage = [...favsFromStorage, movie];
    favsForStorage = JSON.stringify(favsForStorage);
    localStorage.setItem('faved', favsForStorage);
}

// destringfy, find item in array, and then splice to remove item from array

export function removeFromFavs(movie) {

    let favsFromStorage = localStorage.getItem('faved');
    favsFromStorage = JSON.parse(favsFromStorage);

    const isTheMovie = (obj) => obj.id === movie.id;
    let indexOfItemToRemove = favsFromStorage.findIndex(isTheMovie);
    favsFromStorage.splice(indexOfItemToRemove, 1);
    favsFromStorage = JSON.stringify(favsFromStorage);
    localStorage.setItem('faved', favsFromStorage);

}

