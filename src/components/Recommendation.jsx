import recommendedMovies from "./RecommendedMovies";
import Header from "./Header";

function Recommendation() {

  return (
  <> 
  <div className="header"><Header/></div>
    <div className="Recommendation">
     <div className="container">
      <div className="row gy-4 gx-4">
        <>
      {recommendedMovies.map((movie) => (
        <div className="col-3 poster_path"
          key={movie.id}
          style={{
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
        {/*   <p>{movie.plot}</p> */}
        </div>
      ))}
      </>
      </div>
     </div>
    </div>
    </>
  );
}

export default Recommendation;
