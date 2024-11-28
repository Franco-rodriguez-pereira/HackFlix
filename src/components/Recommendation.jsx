import recommendedMovies from "./RecommendedMovies";
import Header from "./Header";

function Recommendation() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="Recommendation">
        <div className="container">
          <div className="row gy-3 justify-content-center">
            <>
              {recommendedMovies.map((movie) => (
                <div className="col-3 poster_path" key={movie.id} style={{}}>
                  <img
                    src={movie.poster_path}
                    alt={`${movie.name} Poster`}
                    style={{
                      width: "200px",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  />
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
