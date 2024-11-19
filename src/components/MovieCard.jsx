import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="col">
      <img
        className="poster_path"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h5>{movie.title}</h5>
    </div>
  );
}

export default MovieCard;
