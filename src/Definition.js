import React from "react";
import "./Definition.css";
import Synonyms from "./Synonyms";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h3>
        <em>{props.definition.partOfSpeech}</em>
      </h3>
      {props.definition.definitions.map((interpretation, index) => {
        return (
          <section key={index}>
            <p>{interpretation.definition}</p>
            <p className="text-muted">
              <em>{interpretation.example}</em>
            </p>
            <Synonyms result={interpretation.synonyms} />
          </section>
        );
      })}
    </div>
  );
}
