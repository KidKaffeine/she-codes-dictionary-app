import React from "react";
import "./Phonetics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.result.map((diction, index) => {
        return (
          <span key={index} className="Phonetics">
            <a href={diction.audio}>
              <FontAwesomeIcon icon={faPlayCircle} size="2x"></FontAwesomeIcon>{" "}
            </a>
            <p>{diction.text}</p>
          </span>
        );
      })}
    </div>
  );
}
