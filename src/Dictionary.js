import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleEvent(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function getWord(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleEvent}>
        <input type="search" placeholder="Type a word" onChange={getWord} />
      </form>
    </div>
  );
}
