import { useState } from "react";
import { useFetch } from "../../servicios/useFetch";
import { useGenres } from "../../servicios/useGeneros";
import MovieModal from "../modal/Modal";

const TopTen = () => {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  const { data } = useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1"
  );

  const generos = useGenres();

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
      <div className="flex gap-5 ml-2 pt-4 w-100 h-100">
        <div className="flex flex-wrap  content-center pl-16">
          {data.results &&
            data.results.map((movie) => (
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
            ))}
        </div>
      </div>
      {modalOpen && selectedMovie && (
        <MovieModal movie={selectedMovie} closeModal={closeModal} />
      )}
    </div>
  );
};

export default TopTen;
