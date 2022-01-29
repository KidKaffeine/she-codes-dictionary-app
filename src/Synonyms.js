import React from "react";

export default function Synonyms(props) {
  if (props.result) {
    return (
      <div className="Synonyms">
        {props.result.map(function (synonym, index) {
          return (
            <ul key={index}>
              <li>{synonym}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
