import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Rating from "@mui/material/Rating";

export default function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [filtroEstrellas, setFiltroEstrellas] = useState(0);

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

  const peliculasFiltradas =
    filtroEstrellas > 0
      ? peliculas.filter(
          (pelicula) =>
            calcularEstrellas(pelicula.vote_average) >= filtroEstrellas &&
            !pelicula.adult
        )
      : peliculas.filter((pelicula) => !pelicula.adult);

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

  return (
    <div className="container" style={{ minHeight: "100vh" }}>
      {" "}
      <div className="filtro">
        <h3 className="h3-filtro">Filtrar por estrellas</h3>
        <div>
          <Rating
            name="filtro-calificacion"
            value={filtroEstrellas}
            precision={0.5}
            onChange={(evento, nuevoValor) =>
              setFiltroEstrellas(nuevoValor || 0)
            }
          />
        </div>
      </div>
      <div className="row gy-5 gx-1">
        {peliculasFiltradas.length === 0 && (
          <div className="col-12">
            <p>No hay películas que cumplan con el filtro seleccionado.</p>
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
