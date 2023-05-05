import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TvShowBody from '../TvShow/TvShowBody';
import TvShowHeader from '../TvShow/TvShowHeader';

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
      <div className="container">
        <h2 className='row-centered align-items-center mt-4 rainbow-text'>
          <i>
            Browse your Favourite TV Shows
          </i>
        </h2>
        <TvShowHeader />
        {
          tvShows.map((tvShow, index) =>
            <TvShowBody
              key={index}
              tvShow={tvShow}
            />
          )
        }
      </div>
    </>
  )
}

export default Home