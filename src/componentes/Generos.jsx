import { useGenres } from "../servicios/useGeneros";
import { useFetch } from "../servicios/useFetch";
import { useEffect } from "react";

/* const CompararGeneros = () => {
  const { data } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc"
  );

  const generos = useGenres();
  const generosMap = generos.data.genres;

  for (const key in generosMap) {
    const genero = generosMap[key];
    const genderName = `ID: ${genero.id}, NAME: ${genero.name}`;
    return genderName;
  }

  if (data.results) {
    let genreIdsArray = data.results.map((pelicula) => pelicula.genre_ids);
    console.log(genreIdsArray);
  }

  //console.log(generosMap, 16);
}; */

const CompararGeneros = () => {
  const { data } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc"
  );

  const generos = useGenres();
  const generosMap = generos.data.genres;
  const movieGenero = [];

  const generosIdNombre = {};
  for (const key in generosMap) {
    const genero = generosMap[key];
    generosIdNombre[genero.id] = genero.name;
  }

  if (data.results) {
    const genreIdsArray = data.results.map((pelicula) => pelicula.genre_ids);

    // Compara los genre_ids de las películas con los ids de género y muestra los nombres de género correspondientes
    genreIdsArray.forEach((genreIds) => {
      const nombresGeneros = genreIds.map(
        (genreId) => generosIdNombre[genreId]
      );
      movieGenero.push(nombresGeneros);
      //console.log("Nombres de género de la película:", nombresGeneros);
    });
  }
  return movieGenero;
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
