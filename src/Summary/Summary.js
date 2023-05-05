import React from 'react';
import "./summary.css";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { alternativeImageUrl } from '../utils/utility';

function Summary() {
  const navigate = useNavigate()
  const { id } = useParams();
  const shows = JSON.parse(localStorage.getItem("shows"));
  const show = shows.filter(show => show.show.id == id);

  return (
    <>
      <div className="container">
        <h1 className='row-centered align-items-center mt-5'><i>Summary of {show?.[0]?.['show']?.['name']}</i></h1>
        <div className="row row-centered align-items-center">
          <div className="col-md-4 col-centered mt-5">
            <img width={400} height={600} src={show?.[0]?.['show']?.['image']?.['original'] || alternativeImageUrl} alt={show?.[0]?.['show']?.['name'] || ''} />
          </div>
          <div className="col-md-8 col-centered" style={{ fontSize: "25px", alignItems: "start", wordBreak: "break-word" }}>
            <div dangerouslySetInnerHTML={{ __html: show?.[0]?.['show']?.['summary'] }}></div>
            <a onClick={e => navigate(`/book-ticket/${show?.[0]?.['show']?.id}`)} class="btn btn-primary">Book Ticket</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Summary