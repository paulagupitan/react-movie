import { useState } from 'react';

function TrailerButton({ movie }) {

    const [trailerOpen, setTrailerOpen] = useState(false);

    function handleClickTrailer(e) {
        e.preventDefault();
        setTrailerOpen(true);
    }

    function handleCloseTrailer(e) {
        e.preventDefault();
        setTrailerOpen(false);
    }

    return (
        <div>

            {trailerOpen ?

                <div>

                    <div className="video-container">
                        <button className="close-button" onMouseDown={(e) => { e.preventDefault(); }} onClick={handleCloseTrailer}>x</button>
                        <div className="video-iframe-container">
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div> :


                <button className="trailer-button" onMouseDown={(e) => { e.preventDefault(); }} onClick={handleClickTrailer}>Trailer</button>}

        </div>
    )
}

export default TrailerButton
