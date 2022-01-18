function FavButton({ movie, remove, handleFavClick }) {
    
    function handleAddFav(){
        handleFavClick(true, movie);
    }

    function handleRemoveFav(){
        handleFavClick(false, movie);
    }
    
    return (
        <div>

            {remove === false ?
            <button onClick={handleAddFav}>Add to Favourites</button> :
            <button onClick={handleRemoveFav}>Remove from Favourites</button>            
            }

        </div>
    )
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton
