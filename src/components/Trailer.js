import { useState } from 'react';

function Trailer({movie}) {

// NEED TO WORK ON THIS
    // to pick which video to show, we only want Youtube + Trailer
    // Loop through the array of objects in movie.videos.results
    // If the type is trailer and site is youtube, add it to the trailer array
    // Call the first result from the new array

    // const movieVideosResults = movie.videos.results;
    // const [trailer, setTrailer] = useState([]);

    // function checkTrailer() {
    //     for (let i = 0; i < movieVideosResults.length; i++) {
    //         if ((movieVideosResults[i].type = "Trailer") && (movieVideosResults[i].site = "Youtube")){
    //             console.log(movieVideosResults[i]);
    //              setTrailer([...trailer, movieVideoResults[i]])
    //         }
    //     }
    // }

    // checkTrailer();
    // console.log(trailer);

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
                {/* <div className="video-overlay"></div> */}

                <div className="video-container">
                    <button className="close-button" onMouseDown={(e)=>{e.preventDefault();}} onClick={handleCloseTrailer}>x</button>
                    <div className="video-iframe-container">
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                    </div>
                </div>
            </div> :
            
            
            <button className="trailer-button" onMouseDown={(e)=>{e.preventDefault();}} onClick={handleClickTrailer}>Trailer</button> }

        </div>
    )
}

export default Trailer
