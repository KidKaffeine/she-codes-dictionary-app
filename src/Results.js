import React from "react";
import "./Results.css";
import Definition from "./Definition";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
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
