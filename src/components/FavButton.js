import { useState, useEffect } from 'react';
import { isFav, addToFavs, removeFromFavs } from '../utilities/storage';

function FavButton({ movie, favourites, setFavourites }) {

    const [fav, setFav] = useState(isFav(movie, favourites));


    let handleAddToFavs = () => {
        setFav(true);
        setFavourites([...favourites, movie]);
    }

    let handleRemoveFromFavs = () => {
        setFav(false);
        const updatedFavourites = favourites.filter(favourite => movie.id !== favourite.id)
        setFavourites(updatedFavourites)
    }

    return (
        <div className="circle">
            {fav === false ?
                // <button className="fav-button" onClick={handleAddToFavs}>Add to Favourites</button> :
                // <button className="fav-button" onClick={handleRemoveFromFavs}>Remove from Favourites</button>
                <div className="heart" onClick={handleAddToFavs}></div> :
                <div className="unheart" onClick={handleRemoveFromFavs}></div>
            }


        </div>
    )
}

export default FavButton
