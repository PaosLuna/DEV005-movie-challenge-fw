import { useState } from "react";
import { useGenres } from "../../servicios/useGeneros";
import useFiltroGeneros from "../../servicios/useFiltroGeneros";

const SelectGenero = ({ handleFiltroGeneros }) => {
  const generos = useGenres();
  const [selectGenero, setSelectGenero] = useState("");
  const [movieFiltro, setMovieFiltro] = useState("");

  const { data: Accion } = useFiltroGeneros("28");
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
  const { data: Belico } = useFiltroGeneros("10752");

  const handleGeneroChange = (e) => {
    const selectedGenero = e.target.value;

    if (selectedGenero == "Aventura") {
      console.log(Aventura);
      setMovieFiltro(Aventura);
    } else if (selectedGenero === "Fantasía") {
      setMovieFiltro(Fantasia);
    } else if (selectedGenero === "Animación") {
      setMovieFiltro(Animacion);
    } else if (selectedGenero === "Drama") {
      setMovieFiltro(Drama);
    } else if (selectedGenero === "Terror") {
      setMovieFiltro(Horror);
    } else if (selectedGenero === "Acción") {
      setMovieFiltro(Accion);
    } else if (selectedGenero === "Comedia") {
      setMovieFiltro(Comedia);
    } else if (selectedGenero === "Historia") {
      setMovieFiltro(Historia);
    } else if (selectedGenero === "Western") {
      setMovieFiltro(Western);
    } else if (selectedGenero === "Suspense") {
      setMovieFiltro(Suspenso);
    } else if (selectedGenero === "Crimen") {
      setMovieFiltro(Crimen);
    } else if (selectedGenero === "Documental") {
      setMovieFiltro(Documental);
    } else if (selectedGenero === "Ciencia ficción") {
      setMovieFiltro(CienciaFiccion);
    } else if (selectedGenero === "Misterio") {
      setMovieFiltro(Misterio);
    } else if (selectedGenero === "Música") {
      setMovieFiltro(Musica);
    } else if (selectedGenero === "Romance") {
      setMovieFiltro(Romance);
    } else if (selectedGenero === "Familia") {
      setMovieFiltro(Familiar);
    } else if (selectedGenero === "Bélica") {
      setMovieFiltro(Belico);
    } else if (selectedGenero === "Película de TV") {
      setMovieFiltro(Tv);
    } else {
      console.log("genero");
    }
    handleFiltroGeneros();
    setSelectGenero(selectedGenero);
  };

  console.log(movieFiltro.results, 79);

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
      {movieFiltro !== "" ? (
        movieFiltro.results.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
          </div>
        ))
      ) : (
        <p>no has selecioonado el genero</p>
      )}
    </div>
  );
};

export default SelectGenero;
