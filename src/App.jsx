import { useState } from "react";
import "./App.css";
import axios from "axios";
import MovieCard from "./components/MovieCard/page";
import ModelMovie from "./components/ModelMovie/page";

function App() {
  const [search, setSerach] = useState("");
  const [movies, setMovies] = useState([]);
  const [select, setSelect] = useState(null);

  const searchMovies = async () => {
    try {
      const responce = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=41a6e19a`
      );
      setMovies(responce.data.Search);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const featchMovie = async (id) => {
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=219b25b1`
      );
      setSelect(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="app">
      <h1>Find your movie :</h1>
      <div className="inputsearch">
        <input
          type="text"
          placeholder="Enter your text"
          value={search}
          onChange={(e) => setSerach(e.target.value)}
        />{" "}
        <button onClick={searchMovies}>Search</button>
      </div>
      <div className="movielist">
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.imdbID}
            onMoreInfo={featchMovie}
          />
        ))}
      </div>
      <div className="movie-info">
        {select && (
          <ModelMovie movie={select} onClose={() => setSelect(null)} />
        )}
      </div>
    </div>
  );
}

export default App;
