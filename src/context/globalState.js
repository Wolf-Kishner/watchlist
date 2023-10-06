import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//When we are using the Context API we need to work on some intial value
// initial state object with watchlist and watched arrays first it was simply array with 0 elements

// Now apan jasa Local storage incorporate kela now Apan jevhha refresh karu we dont want to loose data so the states are initliased  /////those values in the local storage

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);
//In order to provide this Inital state to other components we need a provider which allows us to access that Global context from other Variables

//Provider Compomnents
export const GlobalProvider = (props) => {
  //We are able to access the state variable inside of here.

  //When we click on add button we need to tell the provider to do something that is what achived through
  // actions
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //UseEffect is triggered whenever the state is changed inside our provider so whenever we add a movie to the list this function is triggered
  // We are using Local Storage ani and it has to be a string

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  //actions we are dispatching those are adding movie to Watchlist,removing movie from watchlist

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  //move to watchlist from Watched
  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  //remove from Watched 

  const removeFromWatchedlist=(id) => {
    dispatch({type:"REMOVE_FROM_WATCHED",payload:id});
  };
  //We are gonna use this global proivider to wrap all the elements on our app so that we can access the global context from  every component
  // Values are avaible from the provider
  //Fially we need to wrap all our components to the provider so we move to app.js

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatchedlist
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
