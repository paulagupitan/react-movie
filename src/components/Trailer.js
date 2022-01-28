import { useState, useEffect } from 'react';

function Trailer({movie}) {

    const [trailer, setTrailer] = useState('');
    
    useEffect(() => {
        function checkTrailer() {
            for (let i = 0; i < movie.videos.results.length; i++) {
                const movieVideosResults = movie.videos.results[i];
                if ((movieVideosResults.type === "Trailer") && (movieVideosResults.site === "YouTube")){
                    return movieVideosResults.key;
                }
            }
        }
        if (movie) {
            setTrailer(checkTrailer())
        }
    }, [movie])

    console.log(trailer);

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

                <div className="video-container">
                    <button className="close-button" onMouseDown={(e)=>{e.preventDefault();}} onClick={handleCloseTrailer}>x</button>
                    <div className="video-iframe-container">
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                    </div>
                </div> :

                <button className="trailer-button" onMouseDown={(e) => { e.preventDefault(); }} onClick={handleClickTrailer}>Trailer</button>

            }

        </div>
    )
}

export default Trailer
