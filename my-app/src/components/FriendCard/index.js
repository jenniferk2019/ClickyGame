import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="container">
        <img src={props.image} />
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
