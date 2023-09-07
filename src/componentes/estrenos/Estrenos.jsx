import { useFetch } from "../../servicios/useFetch";
import { useGenres } from "../../servicios/useGeneros";

const Estrenos = () => {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  const { data } = useFetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1"
  );

  const generos = useGenres();

  const resultado = data.results;
  console.log(resultado);

  return (
    <div>
      <h1>peliculas</h1>
      <div>
        {data.results ? (
          data.results.map((movie) => (
            <div key={movie.id}>
              <img
                src={`${imageUrl + movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={400}
              />
              <h1>{movie.title}</h1>
              <p>Género: {generos[movie.genre_ids[0]]}</p>
              <p>Calificación: {movie.vote_average}</p>
            </div>
          ))
        ) : (
          <p>No se encuentran las películas</p>
        )}
      </div>
    </div>
  );
};

export default Estrenos;
