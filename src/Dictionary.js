import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultWord);
  const [results, setResults] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleEvent(event) {
    event.preventDefault();
    search();
  }

  function getWord(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleEvent}>
          <input
            type="search"
            onChange={getWord}
            defaultValue={props.defaultWord}
          />{" "}
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </form>

        <Results results={results} />
      </div>
    );
  } else {
    load();
  }
}
