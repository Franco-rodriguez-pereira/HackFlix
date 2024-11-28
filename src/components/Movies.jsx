import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Filter from "./Filter";

function Movies({ filterRating = 0, setFilterRating = () => {} }) {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const respuesta = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=004d65b10e415d795c9d86a817745e22&page=${pagina}&include_adult=false`
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
      <div style={{marginTop:"30px"}} className="filtro">
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
        <Filter
          peliculas={peliculas}
          filterRating={filterRating}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
}

export default Movies;
