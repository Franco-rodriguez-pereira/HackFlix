import { Link } from "react-router-dom";
import recommendedMovies from "./RecommendedMovies";
import Header from "./Header";

function Recommendation() {
  return(
  <>
 <div className="headerToRecommendations">
  <Header />
</div>
 <div className="Recommendation-halloween">
<div className="container"
style={{padding: "50px"}}>
  <h1 className="recommendationTittle"><strong>Halloween recommendations</strong></h1>
 <div className="row gy-4 gx-4 recommendation">
   {recommendedMovies.map((movie) => (
   <div
     className="col-lg-3 col-md-4 col-sm-6 col-12 poster_path"
    key={movie.id}
     style={{
     margin: "10px",
     padding: "10px",
     borderRadius: "8px",
    }}
   >
    <Link to={`/recommendation/${movie.id}`}>
     <img
     src={movie.poster_path}
     alt={`${movie.name} Poster`}
     style={{
     zIndex: "1",
     height: "350px",
     width: "250px",
    objectFit: "cover",
      }}
      />
    </Link>
     </div>
   ))}
   </div>
    </div>
    </div>
  </>
 );
}

export default Recommendation;
