import React from "react";
import Definition from "./Definition";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1>{props.results.word}</h1>
        {props.results.meanings.map(function (definition, index) {
          return (
            <div key={index}>
              <Definition definition={definition} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
