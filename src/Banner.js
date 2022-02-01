import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './App.css';

function Banner() {

    const [movie, setmovie] = useState([]);

    useEffect(()=>{
        async function fetchBannerMovie(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)]);
            return request;
        }
        fetchBannerMovie();
    },[]);

    console.log(movie);
    
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }
    

  return (
  <header className='banner'
    style={{
        backgroundSize : "cover",
        backgroundImage : `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition : "center center"
    }}
  >
      <div className="banner-content">
        <h1 className='banner-title'>
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
            <button className="banner-btn">Start</button>
            <button className="banner-btn">WatchList</button>
        </div>
        <h1 className="banner-desc">
            {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="fadeBottom"></div>
  </header>
  )
}

export default Banner;
