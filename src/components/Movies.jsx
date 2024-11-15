import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
function Movies({ filterRating }) {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getMovies() {
      let url = "https://api.themoviedb.org/3/discover/movie?api_key=004d65b10e415d795c9d86a817745e22&include_adult=false&page=1&sort_by=popularity.desc&vote_count.gte=40";

      if (filterRating > 0) {
        url += `&vote_average.gte=${filterRating}`;
      }

      const response = await fetch(url);
      const moviesData = await response.json();

      if (moviesData.results.length === 0) {
        setErrorMessage(
          "Lo sentimos, no se encontraron películas con el rating solicitado."
        );
      } else {
        setErrorMessage("");
      }

      setMovies(moviesData.results);
    }

    getMovies();
  }, [filterRating]);

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      <div className="row gy-4 gx-4"> 
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default Movies;
