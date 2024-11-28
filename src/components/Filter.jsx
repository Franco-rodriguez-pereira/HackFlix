import React from "react";
import MovieCard from "./MovieCard"; 

function Filter({ peliculas, filterRating, searchQuery }) {
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

  return (
    <>
      {peliculasFiltradas.length === 0 ? (
        <div className="col-12">
          <p>No hay películas que cumplan con los filtros seleccionados.</p>
        </div>
      ) : (
        peliculasFiltradas.map((pelicula) => (
          <div key={pelicula.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
            <MovieCard movie={pelicula} />
          </div>
        ))
      )}
    </>
  );
}

export default Filter;

