import React from "react";
import "./page.css";

const MovieCard = ({ movie, onMoreInfo }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <button onClick={() => onMoreInfo(movie.imdbID)}>More Info</button>
    </div>
  );
};

export default MovieCard;
