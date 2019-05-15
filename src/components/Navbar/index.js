
import React from "react";
import "./style.css";

function NavBar (props){
  return(
     <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Memory Game</a>
        </li>
       
        <li>Score: {props.score}</li>
        <li>Highscore: {props.highscore}</li>
      </ul>
     </nav>
  )
}


export default NavBar;


