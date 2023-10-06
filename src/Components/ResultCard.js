import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/globalState";

//Movie object is passed as a Prop so we can access it by destructuring
//We need a global state when we click the add to watch list button it adds to context API  and we are able to access the watch list from any copmonent across the APP
//Only way to do this was passing stuffs as Props but we want easy access of Data from any component which we can do with the Context API
export const ResultCard = ({ movie }) => {
  //1.Now we have access to the Action of Adding movie to watchlist
  //2.Secondly from our watchlist we want to access the stored watchlist array
  const { addMovieToWatchlist, watchlist, watched, addMovieToWatched } =
    useContext(GlobalContext);

  //Stored array madhe search kearayla ki already movie ahe ka present
  // we are searching the watchlist and search for movies with same id
  let storedMovie = watchlist.find((o) => o.id === movie.id);
  //APan jarka ek movie already add kelie and same movie search keli jarka then this shoukd show ki movie is already added to watchlist

  let storedMovieWatched = watched.find((o) => o.id === movie.id);
  // we dont want to double add the same movie
  //If storedMovie is already presennt then true or false

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

    const watchedDisabled=storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title}Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
