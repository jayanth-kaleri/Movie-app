import React from "react";

const MovieList = (props) => {
  return (
    <div className="row">
      {props.data.length >= 1
        ? props.data.map((movie) => (
            <div className="col-md-3" key={movie.imdbID}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={movie.Poster}
                  className="card-img-top"
                  alt={movie.Title}
                />
                <div className="card-body">
                  <h4 className="card-title">{movie.Title}</h4>
                  <a className="btn btn-primary">Watch Movie</a>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default MovieList;
