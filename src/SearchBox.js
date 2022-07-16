import React, { useState } from "react";
import MovieList from "./MovieList";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
      .then((response) => response.json())
      .then((value) => {
        setData(value.Search);
      });
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Search" />
      </form>
    
      <MovieList data={data} />
    </>
  );
};

export default SearchBox;
