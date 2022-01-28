import React from "react";

export default function Definition(props) {
  console.log(props.definition);
  return (
    <div className="Definition">
      <h3>{props.definition.partOfSpeech}</h3>

      {props.definition.definitions.map(function (interpretation, index) {
        return (
          <div key={index}>
            <p>{interpretation.definition}</p>
            <p>{interpretation.example}</p>
          </div>
        );
      })}
    </div>
  );
}