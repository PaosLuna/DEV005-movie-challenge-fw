import { useGenres } from "../servicios/useGeneros";
import { useFetch } from "../servicios/useFetch";
import { useEffect } from "react";

const CompararGeneros = () => {
  const generos = useGenres();
  const generosMap = generos.data.genres;

  for (const key in generosMap) {
    const genero = generosMap[key];
    console.log(`ID: ${genero.id}, NAME: ${genero.name}`);
  }

  console.log(generosMap, 16);
};

export default CompararGeneros;

/* const generosId = generosMap.map((genero) => ({
    id: genero.id,
    name: genero.name,
  })); */

/* for (const objeto of generosMap) {
    console.log(`ID: ${objeto.id} ${objeto.name}`);
  } */

/*   Object.values(generos).forEach((genero) => {
    //generosMap.set(genero.id, genero.name);
    //console.log(genero, 12);
  }); */

//console.log(generosMap, 14);

/* const { data } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc"
  );

  const generos = useGenres();

  let genreIdsArray = [];

  if (data.results) {
    genreIdsArray = data.results.map((pelicula) => pelicula.genre_ids);
  }

  if (data.results) {
    const resultado = genreIdsArray.filter(
      (genero) => genero[0] == generos.map((clase) => clase.id)
    );
    console.log(resultado);
  } else {
    return (
      <>
        <p>Error de carga</p>;
      </>
    );
  } */
