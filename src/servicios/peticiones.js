import axios from "axios";

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US";
const key = "cf7f045ce6bfc64fe992e088113c7edd";

//Petición top movies
export const fetchMovies = async (searchKey) => {
  const type = searchKey ? "search" : "discover";
  const {
    data: { results },
  } = await axios.get(`${url}/${type}/movie`, {
    params: {
      api_key: key,
      query: searchKey,
    },
  });
  return results;
};
