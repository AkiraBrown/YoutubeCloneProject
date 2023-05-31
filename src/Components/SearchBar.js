import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function SearchBar() {
  //   {
  //   setSearchResults,
  //   setHasSearched,
  //   hasSearched,
  // }
  //Deprecated parameters
  //-------------------------//

  const [input, setUserInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    //console.log(input);
    //-----------------Not Yet and bad syntax-----------------//
    // fetchApi(input).then((response) => {
    //   setSearchResults(response.items);
    //   if (!hasSearched) {
    //     setHasSearched(true);
    //   }
    // });
    //-------------------------------------------------------//
    navigate(`/search/${input.replace(/\s/g, "+")}`);

    resetForm();
  }

  function handleTextChange(e) {
    const localText = e.target.value;
    const formatText = localText; //.replace(/\s/g, "+");
    //console.log(formatText);
    setUserInput(formatText);
  }
  function resetForm() {
    setUserInput("");
  }
  /* This was used on input in form => |(event) => { setUserInput(event.target.value)} */
  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex" role="search">
        <input
          id="input"
          type="search"
          placeholder="Search"
          value={input}
          className="form-control me-2 "
          aria-label="Search"
          onChange={handleTextChange}
        />
        <button className="btn btn-secondary" type="submit">
          Search
        </button>
      </form>
    </>
  );
}
