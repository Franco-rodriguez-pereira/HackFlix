import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=004d65b10e415d795c9d86a817745e22&page=${page}`
      );
      const data = await response.json();
      setMovies((prev) => [...prev, ...data.results]);
    };
    fetchMovies();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <div className="row gy-5 gx-1">
        {movies.map((movie) => (
          <div key={movie.id} className="col-3">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
