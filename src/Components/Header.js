//This is going to be the Nav bar  Component
import React from "react";
import { Link } from "react-router-dom";
//Which allows us to move between pages and allows to create nav links

//Functional Component using arrow Functions
export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Watch List</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/"> Watch List</Link>
            </li>
            <li>
              <Link to="/watched"> Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                {" "}
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
