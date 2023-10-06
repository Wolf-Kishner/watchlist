// We are creating Components for seaparte web pages ADD, Watched and Watch list tyamule React Router use kela
//React Router mule sarkha server la call nahi janar for requesting that page only data fetching request jael
// UI display will be instant

import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { MovieCard } from "./movieCard"

export const Watchlist = () => {
  //Accessing the watchlist array from here
  const { watchlist } = useContext(GlobalContext);
  
  return (
   <div className="movie-page">
    <div className="container">
      <div className="header">
        <h1 className="heading">My Watchlist</h1>
      </div>

      {watchlist.length>0 ? (
      <div className="movie-grid">
        {watchlist.map((movie) => (
          <MovieCard movie={movie} type="watchlist" />
        ))}
      </div>
      ) : (
        <h2 className="no-movies">No movies in the list, Add some movies!</h2>
      )}
    </div>
   </div>
  );
};
