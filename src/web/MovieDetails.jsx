import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function MovieDetails() {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDetallesPelicula = async () => {
      try {
        const respuesta = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=004d65b10e415d795c9d86a817745e22`
        );
        const datos = await respuesta.json();
        setPelicula(datos);
      } catch (err) {
        setError(err.message);
      }
    };

    obtenerDetallesPelicula();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!pelicula) {
    return <div>No se encontraron detalles de la película.</div>;
  }

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="allContainerPelicula">
        <div className="container"
        style={{padding: "30px"}}>
          <div className="row">
            <div className="imagenDetails col-6">
              <img
                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                alt={pelicula.title}
                className="poster-pelicula"
              />
            </div>
            <div className="textoDetails col-6">
              <h2 className="tituloPelicula">{pelicula.title}</h2>
              <p>
                <b>Fecha de lanzamiento:</b> {pelicula.release_date}
              </p>
              <p>
                <b>Descripción:</b> {pelicula.overview}
              </p>
              <p>
                <b>Promedio de votos:</b> {pelicula.vote_average}
              </p>
              <p>
                <b>Duración:</b> {pelicula.runtime} minutos
              </p>
              <p>
                <b>Género: </b>
                {pelicula.genres.map((genero, index) => (
                  <span key={index} className="generoPelicula">
                    {genero.name} {""}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
