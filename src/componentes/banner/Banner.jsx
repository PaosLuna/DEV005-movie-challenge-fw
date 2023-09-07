import { useFetch } from "../../servicios/useFetch";

const Banner = () => {
  const imageUrl = "https://image.tmdb.org/t/p/original";
  const { data } = useFetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=sp-SP&page=1"
  );

  const movies = data.results;
  let principales = [];

  if (movies) {
    principales = data.results.slice(0, 3);
  }

  // console.log(principales);

  return (
    <div>
      <h1>AQUI VA EL BANNER </h1>
      {data.results ? (
        principales.map((movie) => (
          <div key={movie.id}>
            <img
              src={`${imageUrl + movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={400}
            />
          </div>
        ))
      ) : (
        <p>No se encuentran las películas</p>
      )}
    </div>
  );
};

export default Banner;
