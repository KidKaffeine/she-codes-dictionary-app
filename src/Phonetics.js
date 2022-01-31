import React from "react";
import "./Phonetics.css";
import Sound from "./Sound";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.result.map((diction, index) => {
        return (
          <span key={index}>
            <p>{diction.text}</p>
            <Sound sound={diction.audio} />
          </span>
        );
      })}
    </div>
  );
}
