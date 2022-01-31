import React from "react";
import "./Sound.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default function Sound(props) {
  let audio = new Audio(props.sound);
  function handlePlay() {
    audio.play();
  }
  return (
    <div className="Sound">
      <FontAwesomeIcon
        icon={faPlayCircle}
        size="2x"
        onClick={handlePlay}
        className="AudioIcon"
      ></FontAwesomeIcon>
    </div>
  );
}
