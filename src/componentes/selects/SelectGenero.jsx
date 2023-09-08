import { useState } from "react";
import { useGenres } from "../../servicios/useGeneros";
import useFiltroGeneros from "../../servicios/useFiltroGeneros";

const SelectGenero = () => {
  const generos = useGenres();
  const [selectGenero, setSelectGenero] = useState("");
  const [generoFiltro, setGeneroFiltro] = useState(null);

  const handleGeneroChange = (e) => {
    const selectedGenero = e.target.value;

    if (selectedGenero == "Aventura") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "asc"));
      console.log("Aventura");
      //console.log("genero");
    } else if (selectedGenero === "Fantasía") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Fantasia");
      //console.log("genero");
    } else if (selectedGenero === "Animación") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Animación");
      //console.log("genero");
    } else if (selectedGenero === "Drama") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Drama");
      //console.log("genero");
    } else if (selectedGenero === "Terror") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Terror");
      //console.log("genero");
    } else if (selectedGenero === "Acción") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Acción");
      //console.log("genero");
    } else if (selectedGenero === "Comedia") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Comedia");
      //console.log("genero");
    } else if (selectedGenero === "Historia") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Historia");
      //console.log("genero");
    } else if (selectedGenero === "Western") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Western");
      //console.log("genero");
    } else if (selectedGenero === "Suspense") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Suspense");
      //console.log("genero");
    } else if (selectedGenero === "Crimen") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Crimen");
      //console.log("genero");
    } else if (selectedGenero === "Documental") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Documental");
      //console.log("genero");
    } else if (selectedGenero === "Ciencia ficción") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Ciencia ficción");
      //console.log("genero");
    } else if (selectedGenero === "Misterio") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Misterio");
      //console.log("genero");
    } else if (selectedGenero === "Música") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Música");
      //console.log("genero");
    } else if (selectedGenero === "Romance") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Romance");
      //console.log("genero");
    } else if (selectedGenero === "Familia") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Familia");
      //console.log("genero");
    } else if (selectedGenero === "Bélica") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Bélica");
      //console.log("genero");
    } else if (selectedGenero === "Película de TV") {
      //setGeneroFiltro(orderAZ(dataMovies, (title) => title.title, "desc"));
      console.log("Película de TV");
      //console.log("genero");
    } else {
      //setGeneroFiltro(null);
      console.log("genero");
    }
    setSelectGenero(selectedGenero);
    //console.log(selectGenero);
  };

  return (
    <div>
      <select
        name="filtroGeneros"
        onChange={handleGeneroChange}
        value={selectGenero}
      >
        <option disabled selected>
          GENERO
        </option>
        {Object.keys(generos).map((genero) => (
          <option key={genero.id} value={genero.id}>
            {generos[genero]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectGenero;

/* const { data: Accion } = useFiltroGeneros("28");
  const { data: Aventura } = useFiltroGeneros("12");
  const { data: Animacion } = useFiltroGeneros("16");
  const { data: Comedia } = useFiltroGeneros("35");
  const { data: Crimen } = useFiltroGeneros("80");
  const { data: Documental } = useFiltroGeneros("99");
  const { data: Drama } = useFiltroGeneros("18");
  const { data: Familiar } = useFiltroGeneros("10751");
  const { data: Fantasia } = useFiltroGeneros("14");
  const { data: Historia } = useFiltroGeneros("36");
  const { data: Horror } = useFiltroGeneros("27");
  const { data: Musica } = useFiltroGeneros("10402");
  const { data: Misterio } = useFiltroGeneros("9648");
  const { data: Romance } = useFiltroGeneros("10749");
  const { data: CienciaFiccion } = useFiltroGeneros("878");
  const { data: Suspenso } = useFiltroGeneros("53");
  const { data: Tv } = useFiltroGeneros("10770");
  const { data: Western } = useFiltroGeneros("37");
  const { data: Bélico } = useFiltroGeneros("10752"); */
