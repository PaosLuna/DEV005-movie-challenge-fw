const MovieModal = ({ movie, closeModal }) => {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 	
    bg-black bg-opacity-60"
    >
      <div className="modal bg-white text-black w-6/12 p-8">
        <div className="modal-content relative">
          <span
            className="close absolute top-2 right-2 text-2xl cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </span>
          <div className="flex">
            <img
              src={`${imageUrl + movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={400}
            />
            <div className="w-3/6 flex flex-col content-end ml-20 gap-5">
              <p className="text-2xl font-bold ">{movie.title}</p>
              <p className="text-xl">Calificación: {movie.vote_average} ⭐</p>
              <p className="text-xl">{movie.release_date}</p>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
