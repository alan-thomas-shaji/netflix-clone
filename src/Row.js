import './App.css';
import React, { useEffect, useState } from 'react'
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const imageBase = `https://image.tmdb.org/t/p/w185/`;

function Row({ title, fetchURL, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(()=>{
      async function fetddata(){
        const request = await axios.get(fetchURL);
        setMovies(request.data.results);
        return request;
      }
      fetddata();
    },[fetchURL]);

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1
      }
    };

    const handleClick = (movie) => {
      if(trailerUrl){
        setTrailerUrl("");
      }
      else{
        movieTrailer(movie?.name || "")
        .then(url =>{
          const urlParams = new URLSearchParams( new URL(url).search );
          setTrailerUrl(urlParams.get("v"))
        }).catch(err => console.log(err));
      }
    }


  return (
  <div className='row'>
                                                    {/* TITLE */}
      <h2>{title}</h2> 
                                                    {/* CONTAINER FOR TILES */}
      <div className="movies-container">

        {
        movies.map(movie =>(
          <img
            key = {movie.id} 
            onClick = {()=>{handleClick(movie)}}
            className={`poster  ${isLargeRow && "large"}`}
           src={`${imageBase}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
  </div>
  )
}

export default Row;
