import { useGenres } from "../../servicios/useGeneros";

const SelectGenero = () => {
  const generos = useGenres();
  console.log(generos.name);
  return (
    <div>
      <select name="filtroGeneros">
        <option disabled selected>
          GENERO
        </option>
        {Object.keys(generos).map((generoId) => (
          <option key={generoId} value={generoId}>
            {generos[generoId]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectGenero;
