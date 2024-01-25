"use client";
import React from "react";
import SearchManfactre from "./SearchManfactre";
import { useState } from "react";
const SearchBar = () => {
  const handelSearch = () => {};
  const [manufactre, setManufactre] = useState("");
  return (
    <form className="searchbar" onSubmit={handelSearch}>
      <div className="searchbar__item">
        <SearchManfactre
          manufactre={manufactre}
          setManufactre={setManufactre}
        />
      </div>
    </form>
  );
};

export default SearchBar;
