import React from "react";
import "./style.css";

function NavBar() {
  return (
    <div className="container">
      <nav class="navbar navbar-light">
        <a class="navbar-brand" id="navbar" href="/">RECESS CLICKY GAME</a>
      </nav>
      <div className="jumbotron">
        <h1>Play Clicky Game!</h1>
        <p>
          Click on an image to earn points, but don't click on the same image more than once! 
        </p>
      </div>
    </div>
  );
}

export default NavBar;
