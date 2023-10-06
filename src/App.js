import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Watchlist } from "./Components/Watchlist";
import { Watched } from "./Components/Watched";
import { Add } from "./Components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/globalState.js";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Watchlist />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/watched" element={<Watched />}></Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
