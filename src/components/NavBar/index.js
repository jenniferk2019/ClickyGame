import React from "react";
import "./style.css";
import img from "./img/schoolbus.jpg"

const styles = {
  backgroundImage: `url(${img})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'auto',
  paddingLeft: '22px'
}

function NavBar() {
  return (
    <div className="container">
      <nav class="navbar navbar-light">
        <a class="navbar-brand" id="navbar" href="/">RECESS CLICKY GAME</a>
      </nav>
      <div className="jumbotron" style={styles}>
        <h1>Play Clicky Game!</h1>
        <p>
          Click on an image to earn points, but don't click on the same image more than once! 
        </p>
      </div>
    </div>
  );
}

export default NavBar;
