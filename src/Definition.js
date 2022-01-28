import React from "react";
import Synonyms from "./Synonyms";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h3>{props.definition.partOfSpeech}</h3>
      {props.definition.definitions.map((interpretation, index) => {
        return (
          <div key={index}>
            <p>{interpretation.definition}</p>
            <p>{interpretation.example}</p>

            <Synonyms result={interpretation.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
