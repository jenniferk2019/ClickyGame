import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
  <div className="card img-container hover">
    <img src={props.image} id={props.id}
      onClick={() => props.shuffleScoreCard(props.id) } className="shuffleScore" alt={props.name}/>
  </div>
  );
}
export default FriendCard;
