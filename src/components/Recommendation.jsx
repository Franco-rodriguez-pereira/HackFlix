import recommendedMovies from "./movies";

function Recommendation() {
  return (
    <div>
      {recommendedMovies.map((movie) => (
        <div
          key={movie.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <img
            src={movie.poster_path}
            alt={`${movie.name} Poster`}
            style={{
              width: "150px",
              height: "200px",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />
          <h3>{movie.name}</h3>
          <p>{movie.plot}</p>
        </div>
      ))}
    </div>
  );
}

export default Recommendation;
