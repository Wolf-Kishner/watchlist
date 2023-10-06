import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { MovieCard } from "./movieCard";

export const Watched = () => {

  const {watched} =useContext(GlobalContext);

  return (
    <div className="movie-page">
    <div className="container">
      <div className="header">
        <h1 className="heading">Watched Movies</h1>
      </div>

      {watched.length>0 ? (
      <div className="movie-grid">
        {watched.map((movie) => (
          <MovieCard movie={movie} type="watched" />
          
        ))}
      </div>
      ) : (
        <h2 className="no-movies">No movies in the list at the moment! :( </h2>
      )}
    </div>
   </div>
  );
};
