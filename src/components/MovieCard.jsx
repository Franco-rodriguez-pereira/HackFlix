import Movies from "./Movies";

function MovieCard({ movie }) {
  return (
    <div className="col">
      <img
        className="poster_path"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt=""
      />
    </div>
  );
}

export default MovieCard;
