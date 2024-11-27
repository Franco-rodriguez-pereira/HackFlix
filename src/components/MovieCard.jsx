import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="col">
      <Link to={`/pelicula/${movie.id}`}>
        <img
          className="poster_path"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <h5>{movie.title}</h5>
      </Link>
    </div>
  );
}

export default MovieCard;
