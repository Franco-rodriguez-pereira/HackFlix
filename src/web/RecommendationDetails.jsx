import { useParams, useNavigate } from "react-router-dom";
import recommendedMovies from "../components/RecommendedMovies";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

function RecommendationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

 
  const movie = recommendedMovies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Película no encontrada.</div>;
  }

  return (
    <>
        <div className="headerToRecommendations">
        <Header />
      </div>
      <div className="Recommendation-halloween">
      <div className="container"
      style={{padding: "50px"}}> 
      <h1 style={{
        padding: "20px"}}><strong>Movie description</strong></h1>
        <div className="row">
        <div className="imagenDetails col-6">
          <img
          className="poster-pelicula"
            src={movie.poster_path}
            alt={movie.title}
            style={{borderRadius: "35px", 
                width: "100%" }}
          />
        </div>
        <div className="textoDetails col-6">
             
              <p className="movieDescription">
              <h2>{movie.name}</h2>
                <b>Description:</b> {movie.plot}
              </p>
              <NavLink
              to="/recommendation"
              className={({ isActive }) => (isActive ? "linkActivo" : "")}
            >
              <button style={{borderRadius:"10px", backgroundColor:"black", color:"white"}}>Back</button>
            </NavLink>
            </div>
      </div>
      </div></div>
      
      
    </>
  );
}

export default RecommendationDetails;
