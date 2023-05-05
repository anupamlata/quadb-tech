import React from 'react';
import { useNavigate } from 'react-router-dom';
import { alternativeImageUrl } from '../utils/utility';

function TvShowBody(props) {
  const navigate = useNavigate()
  return (
    <div className="card mt-4">
      <div className="row row-centered align-items-center mt-4 mb-4">
        <div className="col-md-3 col-centered mx-auto">
          <img width={200} height={200} src={`${props.tvShow.show?.image?.original || alternativeImageUrl}`} alt={props.tvShow.show.name || ''} />
        </div>
        <div className="col-md-3 col-centered mx-auto">
          <h5>{props.tvShow.show.name}</h5>
        </div>
        <div className="col-md-3 col-centered mx-auto">
          <h5>{props.tvShow.show.rating.average || 'N/A'}</h5>
        </div>
        <div className="col-md-3  col-centered mx-auto ">
          <div class="card-body">
            <a onClick={e => navigate(`/summary/${props.tvShow.show.id}`)} class="btn btn-primary">View Summary</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TvShowBody