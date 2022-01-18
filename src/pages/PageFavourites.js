// import MovieCard from '../components/MovieCard';
import { useState } from 'react';

function PageFavourites() {

    const [favMovie, setFavMovie] = useState(null);

    return (
        <main>
            <section>
                <h2>Your Favourite Movies</h2>
                <p>This app was created with love ❤️ by Snowball. 😎...</p>
                
            </section>
        </main>
    );
}


export default PageFavourites;

