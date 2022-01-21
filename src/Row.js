import React, { useEffect, useState } from 'react'
import axios from './axios';

function Row({ title }) {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{

    },[]);

  return (
  <div>
      {/* TITLE */}
      <h2>{title}</h2> 
      {/* CONTAINER FOR TILES */}

  </div>
  )
}

export default Row;
