import React from 'react';
import "./summary.css";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { alternativeImageUrl } from './utils/utility';

function Summary() {
  const navigate = useNavigate()
  const { id } = useParams();
  const shows = JSON.parse(localStorage.getItem("shows"));
  const show = shows.filter(show => show.show.id == id);

  return (
    <>
      <h1>Summary of {show?.[0]?.['show']?.['name']}</h1>
      <div style={{ display: "flex", flexDirection: "row", textAlign: "center", justifyContent: "center" }}>
        <img width={300} height={400} src={show?.[0]?.['show']?.['image']?.['original'] || alternativeImageUrl} alt={show?.[0]?.['show']?.['name'] || ''} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: show?.[0]?.['show']?.['summary'] }}></div>
      <a onClick={e => navigate(`/book-ticket/${show?.[0]?.['show']?.id}`)} class="btn btn-primary">Book Ticket</a>
    </>
  )
}

export default Summary