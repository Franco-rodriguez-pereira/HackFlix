import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Rating from "@mui/material/Rating";

function Movies({ filterRating, setFilterRating }) {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const respuesta = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=004d65b10e415d795c9d86a817745e22&page=${pagina}`
        );
        const datos = await respuesta.json();
        setPeliculas((prev) => {
          const nuevasPeliculas = datos.results.filter(
            (pelicula) => !prev.some((p) => p.id === pelicula.id)
          );
          return [...prev, ...nuevasPeliculas];
        });
      } catch (error) {
        console.error("Error al obtener películas:", error);
      }
    };

    obtenerPeliculas();
  }, [pagina]);

  const calcularEstrellas = (vote_average) => {
    return Math.round((vote_average / 2) * 2) / 2;
  };

  const peliculasFiltradas = peliculas.filter((pelicula) => {
    const estrellas = calcularEstrellas(pelicula.vote_average);
    const cumpleRating = filterRating === 0 || estrellas >= filterRating;
    const cumpleBusqueda =
      searchQuery === "" ||
      pelicula.title.toLowerCase().includes(searchQuery.toLowerCase());
    return cumpleRating && cumpleBusqueda && !pelicula.adult;
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setPagina((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const manejarBusqueda = () => {
    console.log(`Buscando películas con el título: ${searchQuery}`);
  };

  return (
    <div className="container" style={{ minHeight: "100vh" }}>
      <div className="filtro">
        <h3 className="h3-filtro">Filtrar por estrellas</h3>
        <Rating
          name="filtro-calificacion"
          value={filterRating}
          precision={0.5}
          onChange={(evento, nuevoValor) => setFilterRating(nuevoValor || 0)}
        />
      </div>

      <div className="buscador">
        <h3 className="h3-buscador">Buscar película</h3>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ingresar título"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={manejarBusqueda}
          >
            Buscar
          </button>
        </div>
      </div>

      <div className="row gy-5 gx-1">
        {peliculasFiltradas.length === 0 && (
          <div className="col-12">
            <p>No hay películas que cumplan con los filtros seleccionados.</p>
          </div>
        )}
        {peliculasFiltradas.map((pelicula) => (
          <div key={pelicula.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
            <MovieCard movie={pelicula} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Movies;
