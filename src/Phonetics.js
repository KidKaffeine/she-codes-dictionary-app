import React from "react";
import "./Phonetics.css";
import Audio from "./Audio";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.result.map((diction, index) => {
        return (
          <span key={index}>
            <p>{diction.text}</p>
            <Audio audio={diction.audio} />
          </span>
        );
      })}
    </div>
  );
}
