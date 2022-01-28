import React from "react";
import Definition from "./Definition";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1>{props.results.word}</h1>
        <Phonetics result={props.results.phonetics} />
        {props.results.meanings.map((definition, index) => {
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
