import React from 'react';

function TvShowHeader(props) {
  return (
    <div className='row row-centered align-items-center mt-5 mb-3'>
      <div className="col-md-3 mx-auto"><h3>Image</h3></div>
      <div className="col-md-3 mx-auto"><h3>Name</h3></div>
      <div className="col-md-3 mx-auto"><h3>Rating</h3></div>
      <div className="col-md-3 mx-auto"><h3>Action</h3></div>
    </div>
  )
}

export default TvShowHeader