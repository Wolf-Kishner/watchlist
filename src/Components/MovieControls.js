//We are trying to add new Functionalities Ki Already Watchlist madhe ahe So ek icon la press karun Watched madhe janr nahi tar Remove honar

import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

//movie ,type are 2 props
//Depending upon Ki Watch list ahe ki Watched list we need to have differnet controls thats why the type prop

export const MovieControls = ({ movie, type }) => {
  //grab that action we created
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatchedlist,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        //React Fragments
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onclick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatchedlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
