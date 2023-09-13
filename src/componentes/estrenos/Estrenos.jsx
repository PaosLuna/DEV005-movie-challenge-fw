import { useState } from "react";
import { useFetch } from "../../servicios/useFetch";
import { useGenres } from "../../servicios/useGeneros";
import SelectGenero from "../selects/SelectGenero";
import { orderAZ } from "../../servicios/orderAZ";
import MovieModal from "../modal/Modal";

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
    } else if (selectedOrder === "DESCENDENTE") {
      setOrderAbc(orderAZ(dataMovies, (title) => title.title, "desc"));
    } else {
      setOrderAbc(null);
    }

    setSelect(selectedOrder);
  };

  const orderMovies = orderAbc || dataMovies;

  //lógica modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setModalOpen(false);
  };

  return (
    <div className="p-8">
      <div className="flex gap-5  pb-4 w-100 h-14">
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
      </div>

      <div className="flex flex-wrap  content-center pl-16">
        {data.results && !estrenosGenero ? (
          orderMovies.map((movie) => (
            <div
              key={movie.id}
              className="px-2 w-1/4 pb-4"
              onClick={() => openModal(movie)}
              style={{ cursor: "pointer" }}
            >
              <div className="mb-4">
                <img
                  src={`${imageUrl + movie.poster_path}`}
                  alt={movie.title}
                  width={300}
                  height={400}
                />
              </div>
              <p className="text-2xl font-bold ">{movie.title}</p>
              <p className="text-xl">Género: {generos[movie.genre_ids[0]]}</p>
              <p className="text-xl">Calificación: {movie.vote_average}⭐</p>
            </div>
          ))
        ) : (
          <div>
            <p>No se encuentran las películas</p>
            {/* <SelectGenero /> */}
          </div>
        )}
      </div>
      {modalOpen && selectedMovie && (
        <MovieModal movie={selectedMovie} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Estrenos;
