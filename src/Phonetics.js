import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.result.map((diction, index) => {
        return (
          <span key={index} className="Phonetics">
            <p>{diction.text}</p>
          </span>
        );
      })}
    </div>
  );
}
