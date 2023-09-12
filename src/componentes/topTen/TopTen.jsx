import { useFetch } from "../../servicios/useFetch";
import { useGenres } from "../../servicios/useGeneros";

const TopTen = () => {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  const { data } = useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1"
  );

  const generos = useGenres();

  return (
    <div>
      <div className="flex gap-5 ml-2 pt-4 w-100 h-100">
        <div className="flex flex-wrap ">
          {data.results &&
            data.results.map((movie) => (
              <div key={movie.id} className="px-2 w-1/4 pb-4">
                <img
                  src={`${imageUrl + movie.poster_path}`}
                  alt={movie.title}
                  width={300}
                  height={400}
                />
                <h1>{movie.title}</h1>
                <p>Género: {generos[movie.genre_ids[0]]}</p>
                <p>Calificación: {movie.vote_average}⭐</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopTen;
