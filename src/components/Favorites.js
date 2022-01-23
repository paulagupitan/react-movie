import FavButton from "./FavButton";
import { Link } from 'react-router-dom';
import { getFavs, isFav, removeFromFavs } from '../utilities/isFav';
import React, { useState } from 'react';

function Favorites({ movie }) {

    function dateFormat(string) {
        const date = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], date);
    }

    function minToHrMin(time) {
        let hour = Math.floor(time / 60);
        let min = time % 60;
        let timeInHrMin = `${hour}h ${min}m`;

        return timeInHrMin;
    }

    let faveMovies = localStorage.getItem('faved');
    faveMovies = JSON.parse(faveMovies);




    return (
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />

            </div>

            <div>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />

                <div>
                    <div>
                        <p>{dateFormat(movie.release_date)}</p>
                        <p>{minToHrMin(movie.runtime)}</p>
                        <p className="vote">{movie.vote_average}</p>
                    </div>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p>Genre: {movie.genres[0].name}</p>
                    <FavButton movie={movie} />
                </div>
            </div>
        </div>
    )
}

export default Favorites
