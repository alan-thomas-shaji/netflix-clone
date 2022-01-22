import React, { useEffect, useState } from 'react'
import axios from './axios';
import './App.css';

const imageBase = `https://image.tmdb.org/t/p/original/`;

function Row({ title, fetchURL }) {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
      async function fetddata(){
        const request = await axios.get(fetchURL);
        setMovies(request.data.results);
        return request;
      }
      fetddata();
    },[fetchURL]);

    console.log(movies);

  return (
  <div className='row'>
                                                    {/* TITLE */}
      <h2>{title}</h2> 
                                                    {/* CONTAINER FOR TILES */}
      <div className="movies-container">

        {
        movies.map(movie =>(
          <img className='poster'
           src={`${imageBase}${movie.poster_path}`} alt={movie.name} />
        ))}
      </div>

  </div>
  )
}

export default Row;
