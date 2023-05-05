import React from 'react'
import { useParams } from 'react-router-dom';

function BookTicket() {
  const { id } = useParams();
  const shows = JSON.parse(localStorage.getItem("shows"));
  const show = shows.filter(show => show.show.id == id);

  return (
    <>
      <div className="container">
        <h1 className='row-centered align-items-center mt-5 mb-4 rainbow-text'><i>Book Tickets</i></h1>
        <div className="row row-centered align-items-center mb-3">
          <div className="col-md-6">
            <h3 style={{ color: "#7B8F04" }}>
              Name
            </h3>
          </div>
          <div className="col-md-6">
            <h3 style={{ color: "#083F91" }}>
              {show?.[0]?.['show']?.['name']}
            </h3>
          </div>
        </div>
        <div className="row row-centered align-items-center mb-3">
          <div className="col-md-6">
            <h3 style={{ color: "#7B8F04" }}>
              Genres
            </h3>
          </div>
          <div className="col-md-6">
            <h3 style={{ color: "#083F91" }}>
              {show?.[0]?.['show']?.['genres'].join(', ')}
            </h3>
          </div>
        </div>
        <div className="row row-centered align-items-center mb-3">
          <div className="col-md-6">
            <h3 style={{ color: "#7B8F04" }}>
              Rating
            </h3>
          </div>
          <div className="col-md-6">
            <h3 style={{ color: "#083F91" }}>
              {show?.[0]?.['show']?.['rating']['average']}
            </h3>
          </div>
        </div>
        <div className="row row-centered align-items-center mb-3">
          <div className="col-md-6">
            <h3 style={{ color: "#7B8F04" }}>
              Language
            </h3>
          </div>
          <div className="col-md-6">
            <h3 style={{ color: "#083F91" }}>
              {show?.[0]?.['show']?.['language']}
            </h3>
          </div>
        </div>

        <div className='row-centered align-items-center mb-4'>
          <button className='btn btn-success'>Book Now</button>
        </div>
      </div>
    </>
  )
}

export default BookTicket
