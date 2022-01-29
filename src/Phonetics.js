import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.result.map((diction, index) => {
        return (
          <div key={index}>
            <a href={diction.audio}>
              <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>{" "}
            </a>
            <br />
            <p>{diction.text}</p>
          </div>
        );
      })}
    </div>
  );
}
