import React from 'react'
import { useParams } from 'react-router-dom';

function BookTicket() {
  const { id } = useParams();
  const shows = JSON.parse(localStorage.getItem("shows"));
  const show = shows.filter(show => show.show.id == id);

  return (
    <>
      <h1>Book Tickets  </h1>
      <div className="row">
        <div className="col-md-6">Name</div>
        <div className="col-md-6">{show?.[0]?.['show']?.['name']}</div>
      </div>
      <div className="row">
        <div className="col-md-6">Genres</div>
        <div className="col-md-6">{show?.[0]?.['show']?.['genres']}</div>
      </div>
      <div className="row">
        <div className="col-md-6">Rating</div>
        <div className="col-md-6">{show?.[0]?.['show']?.['rating']['average']}</div>
      </div>

      <div className="row">
        <div className="col-md-6">Language</div>
        <div className="col-md-6">{show?.[0]?.['show']?.['language']}</div>
      </div>

      <button>Book Now</button>
    </>
  )
}

export default BookTicket
