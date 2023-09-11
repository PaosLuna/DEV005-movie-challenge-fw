import { useState } from "react";
import { useFetch } from "../../servicios/useFetch";
import { useGenres } from "../../servicios/useGeneros";
import SelectGenero from "../selects/SelectGenero";
import { orderAZ } from "../../servicios/orderAZ";

const Estrenos = () => {
  const imageUrl = "https://image.tmdb.org/t/p/original";
  const [estrenosGenero, setEstrenosGenero] = useState(false);
  const [orderAbc, setOrderAbc] = useState(null);
  const [select, setSelect] = useState(null);

  const { data } = useFetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1"
  );

  const generos = useGenres();

  let dataMovies = [];

  if (data.results) {
    dataMovies = data.results.slice();
  }

  const handleOrderChange = (e) => {
    const selectedOrder = e.target.value;

    if (selectedOrder === "ASCENDENTE") {
      setOrderAbc(orderAZ(dataMovies, (title) => title.title, "asc"));
      console.log("az");
    } else if (selectedOrder === "DESCENDENTE") {
      setOrderAbc(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("za");
    } else {
      setOrderAbc(null);
    }
    setSelect(selectedOrder);
  };

  return (
    <div>
      <h1>peliculas</h1>
      <select onChange={handleOrderChange}>
        <option disabled selected>
          A-Z
        </option>
        <option value={"ASCENDENTE"}>ASCENDENTE</option>
        <option value={"DESCENDENTE"}>DESCENDENTE</option>
      </select>
      <SelectGenero estrenosGenero={true} />
      <div>
        {data.results && estrenosGenero ? (
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
          <div>
            <p>No se encuentran las películas</p>
            {/* <SelectGenero /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Estrenos;
