import { useState, useEffect } from 'react';
import { isFav, addToFavs, removeFromFavs } from '../utilities/storage';

function FavButton({ movie }) {

    const [fav, setFav] = useState(isFav(movie));

    let handleAddToFavs = () => {
        setFav(true);
        addToFavs(movie);
    }

    let handleRemoveFromFavs = () => {
        setFav(false);
        removeFromFavs(movie);
    }

    return (
        <div>

            {fav === false ?
                <button onClick={handleAddToFavs}>Add to Favourites</button> :
                <button onClick={handleRemoveFromFavs}>Remove from Favourites</button>
            }



        </div>
    )
}

export default FavButton
