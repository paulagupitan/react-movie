import { useState} from 'react';
import { isFav } from '../utilities/storage';
import whiteHeart from '../images/heart-white.png';
import blueHeart from '../images/blue-heart.png';

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
        <div className="fav-button">
            {fav === false ?

                <img src={whiteHeart} alt="add to favorites" onClick={handleAddToFavs} /> :
                <img src={blueHeart} alt="remove to favorites" onClick={handleRemoveFromFavs} />
                  
            }
        </div>
    )
}

export default FavButton
