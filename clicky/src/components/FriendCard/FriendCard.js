import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image}/>
      <div onClick={() => props.imageClick(props.id)}></div>
    </div>
  </div>
);

export default FriendCard;

// onClick={() => props.imageClick(props.id)}
