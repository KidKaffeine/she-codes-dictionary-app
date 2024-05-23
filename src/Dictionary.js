import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [photo, setPhoto] = useState(undefined);

  function handleWordResponse(response) {
    setResults(response.data[0]);
  }

  function handlePhotoResponse(response) {
    setPhoto(response.data.photos);
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleWordResponse);
    let pexelsApiKey = `563492ad6f917000010000010962508f8d314e1eaac6f4951868600f`;
    let pexelsApiURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiURL, { headers: headers }).then(handlePhotoResponse);
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
        <h1> the dictionary</h1>
        <form onSubmit={handleEvent}>
          <input type="search" onChange={getWord} />{" "}
          <button>
            {" "}
            <FontAwesomeIcon
              icon={faSearch}
              className="SearchIcon"
            ></FontAwesomeIcon>
          </button>
        </form>
        <small className="text-muted">
          suggested words: sea, sun, coffee...{" "}
        </small>
        <Results results={results} />
        <Photos photo={photo} />
        <footer>
          Open source code on{" "}
          <a
            href="https://github.com/KidKaffeine/she-codes-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub.
          </a>
        </footer>
      </div>
    );
  } else {
    load();
  }
}
