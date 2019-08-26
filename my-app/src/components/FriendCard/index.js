import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="container">
        <img src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
