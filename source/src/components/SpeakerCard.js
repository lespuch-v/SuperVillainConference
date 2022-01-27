import React, { useState } from "react";

export default function SpeakerCards(props) {
  console.log(props);
  // Conditional Rendering for the BASE
  const styles = {
    width: props.on ? "600px" : null,
    height: props.on ? "500px" : null,
    //   position: props.on ? "absolute" : null,
    flexDirection: props.on ? "row" : null,
  };
  // Conditional Rendering for the IMAGE-CONTAINER
  const styles2 = {
    width: props.on ? 400 : null,
    height: props.on ? 400 : null,
    backgroundPosition: "center",
  };

  return (
    <div
      onClick={() => props.toggle(props.id)}
      style={styles}
      className="card-speaker"
    >
      <img style={styles2} className="image-inside" src={props.img} alt="" />
      <div>
        {props.on ? <h3 className="villain-name-small">{props.name}</h3> : <h2 className="villain-name-big">{props.name}</h2>}
        {props.on && <h4>Location: {props.location}</h4>}
        {props.on && <h4>Occupation: {props.occupation}</h4>}
        {props.on && <a className="villain-link" href={props.wiki}>wiki</a>}
        {props.on && <p className="villain-description">{props.description} </p>}
      </div>
    </div>
  );
}
