//Inside the Add page is where we are going to search for the movie
//We are going to use React use State hook to keep track of the input text field We need to attribute a state to an INPUT so that we can change the text as we type in our input

import React, { useState } from "react";
import {ResultCard} from "./ResultCard";
export const Add = () => {
  /*Query String is the value of our input
  Whenever the state of the query string is changed we are gonna tell the functional component to call a function
  Whenever we search in the box we want to send a search req to the TMDB server 
  */
  const [query, setQuery] = useState("");
  // we will need another state to save the results
  const [results,setResults]=useState([]);


  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    //${} allows us to use variables within strings

    //We use backticks which  are Template Literals which allow us to use our own variables in a string
    // Input je search bar madhe type zala query ne te ghetla  and this fetch is gonna return a promise
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTczZGI1YzJlYWJlZDY1NDhiYTA5MzlmYTMwMGJmYiIsInN1YiI6IjY1MWFlZjQwOTNiZDY5MDExYjhlZTA3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JUGMVf6mBUURdFqX8WKCPomhtbiVfB_gfaizYyjPe2w'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/search/movie?query=${e.target.value}&include_adult=false&language=en-US&page=1`, options)
      .then((res) => res.json())
      .then((data) => {
        if(!data.errors) {
          setResults(data.results);
          console.log(data.results);
        }
        else {
          setResults([]);
        }
      });
         
  };
  
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>
           
          {results.length >0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                 <ResultCard movie={movie} />
                </li>
          ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
