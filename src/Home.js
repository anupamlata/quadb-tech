import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TvShowBody from './TvShowBody';
import TvShowHeader from './TvShowHeader';

function Home() {
  const [tvShows, setTvShows] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://api.tvmaze.com/search/shows?q=all');
      setTvShows(request.data)
      localStorage.setItem("shows", JSON.stringify(request.data))
    }
    fetchData();
  }, [])
  return (
    <>
      <h2>Browse your Favourite TV Shows</h2>
      <TvShowHeader />
      {
        tvShows.map((tvShow, index) =>
          <TvShowBody
            key={index}
            tvShow={tvShow}
          />
        )
      }
    </>
  )
}

export default Home