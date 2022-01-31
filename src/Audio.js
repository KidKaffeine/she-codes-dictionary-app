import React from "react";
import "./Audio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default function (props) {
  let audio = new Audio(props.audio);
  function handlePlay() {
    audio.play();
  }
  return (
    <div className="Audio">
      <FontAwesomeIcon
        icon={faPlayCircle}
        size="2x"
        onClick={handlePlay}
        className="AudioIcon"
      ></FontAwesomeIcon>
    </div>
  );
}
