import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photo);
  if (props.photo) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photo.map(function (pic, index) {
            return (
              <div className="col-4" key={index}>
                <a href={pic.src.original} target="_blank">
                  <img src={pic.src.tiny} className="img-fluid rounded" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
