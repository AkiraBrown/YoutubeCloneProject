import { useState } from "react";
import React from "react";
import { fetchApi } from "./api/fetch.js";

export default function SearchBar({
  setSearchResults,
  setHasSearched,
  hasSearched,
}) {
  const [input, setUserInput] = useState("");

  function handleUserInput(event) {
    event.preventDefault();
    fetchApi(input).then((response) => {
      setSearchResults(response.items);
      if (!hasSearched) {
        setHasSearched(true);
      }
    });
  }
  return (
    <main>
      <form onSubmit={handleUserInput}>
        <input
          id="input"
          type="text"
          placeholder="search"
          value={input}
          onChange={(event) => {
            setUserInput(event.target.value);
          }}
        />
        <button className="submit" type="submit">
          Search
        </button>
      </form>
    </main>
  );
}
