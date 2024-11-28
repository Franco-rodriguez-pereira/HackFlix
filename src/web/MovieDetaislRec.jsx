import Header from "../components/Header";

function MovieDetailsRec() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="allContainerPelicula">
        <div className="container">
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

export default MovieDetailsRec;
