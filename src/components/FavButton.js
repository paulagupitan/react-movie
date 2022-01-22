import { useState, useEffect } from 'react';
import { isFav, addToFavs, removeFromFavs } from '../utilities/storage';

function FavButton({ movie }) {

    const [fav, setFav] = useState(isFav(movie));
    const [favList, setFavList] = useState();
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
                <button className="fav-button" onClick={handleAddToFavs}>Add to Favourites</button> :
                <button className="fav-button" onClick={handleRemoveFromFavs}>Remove from Favourites</button>
            }



        </div>
    )
}

export default FavButton
