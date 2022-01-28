import React from "react";

export default function Phonetics(props) {
  console.log(props.result);
  return (
    <div className="Phonetics">
      {props.result.map((diction, index) => {
        return (
          <div key={index}>
            <a href={diction.audio}>Play</a>
            <br />
            <p>{diction.text}</p>
          </div>
        );
      })}
    </div>
  );
}
