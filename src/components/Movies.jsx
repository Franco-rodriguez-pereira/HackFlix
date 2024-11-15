import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("El componente se acaba de montar (primer render).");

    async function getMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=004d65b10e415d795c9d86a817745e22&include_adult=false&page=1&sort_by=popularity.desc&vote_count.gte=40"
      );
      const moviesData = await response.json();
      setMovies(moviesData.results);
    }

    getMovies();
  }, []);
  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}

export default Movies;
