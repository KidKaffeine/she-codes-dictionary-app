import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default function Audio(props) {
  console.log(props.audio);
  return (
    <div className="Audio">
      <a href={props.audio} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faPlayCircle} size="2x"></FontAwesomeIcon>{" "}
      </a>
    </div>
  );
}
