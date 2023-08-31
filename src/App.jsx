import { useEffect, useState } from "react";
import "./App.css";
import { fetchMovies } from "./servicios/peticiones";

function App() {
  const [movies, setMovies] = useState([]);

  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchMoviesData = async () => {
      const results = await fetchMovies();
      setMovies(results);
    };

    fetchMoviesData();
  }, []);

  return (
    <div>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`${imageUrl + movie.poster_path}`}
              alt={movie.title}
              width="40%"
              height={400}
            />
            <h1>{movie.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
