import React from "react";
import "./page.css";

const ModelMovie = ({ movie, onClose }) => {
  return (
    <div className="model">
      <div className="movie-model">
        <button className="btn" onClick={onClose}>
          close
        </button>
        <h2>{movie.Title}</h2>
        <p>
          <strong>Plot:</strong> {movie.Plot}
        </p>
        <p>
          <strong>Director:</strong> {movie.Director}
        </p>
        <p>
          <strong>Actors:</strong> {movie.Actors}
        </p>
        <p>
          <strong>BoxOffice:</strong> {movie.BoxOffice}
        </p>
        <p>
          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>imdbRating:</strong> {movie.imdbRating}
          </p>
          <strong>Year:</strong> {movie.Year}
        </p>
      </div>
    </div>
  );
};

export default ModelMovie;
