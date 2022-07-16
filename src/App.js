import React, { useState } from "react";
import "./App.css";
import HeaderComponent from "./HeaderComponent";
import MovieList from "./MovieList";
import SearchBox from "./SearchBox";
const App = () => {
  

  return (
    <div className="wall-page">
      <center>
        <HeaderComponent />
        <SearchBox />
      </center>
    </div>
  );
};

export default App;
