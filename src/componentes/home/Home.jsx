import { useContext, useEffect, useState } from "react";
import { orderAZ } from "../../servicios/orderAZ";
import { useFetch } from "../../servicios/useFetch";
import { useGenres } from "../../servicios/useGeneros";
import SelectGenero from "../selects/SelectGenero";
import { MostarPeliculasContext } from "../context/Context";

const Home = () => {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  const [orderAbc, setOrderAbc] = useState(null);
  /*   const [select, setSelect] = useState(null); */
  const [filtroGeneros, setFiltroGeneros] = useState(false);

  const context = useContext(MostarPeliculasContext);

  const { data } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc"
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
    } else if (selectedOrder === "DESCENDENTE") {
      setOrderAbc(orderAZ(dataMovies, (title) => title.title, "desc"));
    } else {
      setOrderAbc(null);
    }
    context.setSelect(selectedOrder);
  };

  const orderMovies = orderAbc || dataMovies;
  //console.log(filtroGeneros);

  const handleFiltroGeneros = () => {
    setFiltroGeneros(true);
  };

  //lógica buscador
  const [buscadorMovies, setBuscadorMovies] = useState([]);
  const [searchByTitle, setSearchByTitle] = useState(null);

  const filteredMoviesByTitle = (movies, searchByTitle) => {
    return movies?.filter((movie) =>
      movie.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle) {
      setBuscadorMovies(filteredMoviesByTitle(dataMovies, searchByTitle));
    } else {
      setBuscadorMovies([]);
    }
  }, [searchByTitle]);

  return (
    <div>
      <div className="mt-0 flex justify-center">
        <input
          type="text"
          placeholder="Ingresa el nombre de la película"
          className="rounded-lg border border-black ml-2 w-11/12 h-8 p-4 mb-6 focus:outline-none text-center "
          onChange={(event) => setSearchByTitle(event.target.value)}
        />
      </div>
      <div className="flex gap-5 ml-2 pb-4 w-100 h-14">
        <select
          onChange={handleOrderChange}
          className="bg-purple-500 text-white text-xl text-center rounded-md w-40 h-10 cursor-pointer"
        >
          <option disabled selected>
            A-Z
          </option>
          <option value={"ASCENDENTE"}>ASCENDENTE</option>
          <option value={"DESCENDENTE"}>DESCENDENTE</option>
        </select>
        <SelectGenero handleFiltroGeneros={handleFiltroGeneros} />
      </div>

      <div className="flex flex-wrap ">
        {buscadorMovies.length > 0 ? (
          buscadorMovies.map((movie) => (
            <div key={movie.id} className="px-2 w-1/4 pb-4">
              <div className="mb-4">
                <img
                  src={`${imageUrl + movie.poster_path}`}
                  alt={movie.title}
                  width={300}
                  height={400}
                />
              </div>
              <h1>{movie.title}</h1>
              <p>Género: {generos[movie.genre_ids[0]]}</p>
              <p>Calificación: {movie.vote_average}⭐</p>
            </div>
          ))
        ) : filtroGeneros ? (
          <div></div>
        ) : (
          orderMovies.map((movie) => (
            <div key={movie.id} className="px-2 w-1/4 pb-4">
              <div className="mb-4">
                <img
                  src={`${imageUrl + movie.poster_path}`}
                  alt={movie.title}
                  width={300}
                  height={400}
                />
              </div>
              <h1>{movie.title}</h1>
              <p>Género: {generos[movie.genre_ids[0]]}</p>
              <p>Calificación: {movie.vote_average}⭐</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
