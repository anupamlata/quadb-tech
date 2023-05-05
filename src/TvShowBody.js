import React from 'react';
import { useNavigate } from 'react-router-dom';
import { alternativeImageUrl } from './utils/utility';

function TvShowBody(props) {
  const navigate = useNavigate()
  return (
    <div class="card">
      <div className="row">
        <div className="col-md-4">
          <img width={200} height={200} src={`${props.tvShow.show?.image?.original || alternativeImageUrl}`} alt={props.tvShow.show.name || ''} />
        </div>
        <div className="col-md-4">
          <h5>{props.tvShow.show.name}</h5>
        </div>
        <div className="col-md-4">
          <div class="card-body">
            <a onClick={e => navigate(`/summary/${props.tvShow.show.id}`)} class="btn btn-primary">View Summary</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TvShowBody