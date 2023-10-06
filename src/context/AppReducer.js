//We build a place where we store all the state data
//Reducer is a a function that returns a state data and describes how  state is transferred into the next state

//Actions are objects that tell the reducer how to change the state   we dispatch a type which then passes it to this reducer here
//Reducer tells us how to store that data
export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        //By default return the existing state
        ...state,
        //Once we make changes inside the place we are storing we need to include them
        //Picks movie and adds to existing watchlist
        watchlist: [action.payload, ...state.watchlist],
      };

    //Payload chya id chya nusare filtering out those whose id isnt clicked te Display kara
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };

    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist]
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};
