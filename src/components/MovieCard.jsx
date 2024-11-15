import Movies from "./Movies";

function MovieCard({ movie }) {
  return (
    <div className="col-3">
      <img
        className="poster_path"
        src={`https:image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt=""
      />
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieCard;
