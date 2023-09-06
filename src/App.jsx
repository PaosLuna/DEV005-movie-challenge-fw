import { useFetch } from "./servicios/useFetch";

function App() {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  const { data } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc"
  );

  /* const { data } = useFetch("https://probando-errores.com"); */

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
            </div>
          ))
        ) : (
          <p>No se encuentran las películas</p>
        )}
      </div>
    </div>
  );
}

export default App;