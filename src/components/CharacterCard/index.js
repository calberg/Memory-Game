
import React from "react";
import "./style.css";


function CharacterCard(props) {
  console.log(props);
  return (
    <div >
      
      <div className="card" onClick={() => props.clickCount(props.id)}>

        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
