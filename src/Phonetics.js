import React from "react";
import "./Phonetics.css";
import Audio from "./Audio";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.result.map((diction, index) => {
        return (
          <span key={index} className="Phonetics">
            <Audio audio={diction.audio} />
            <p>{diction.text}</p>
          </span>
        );
      })}
    </div>
  );
}
