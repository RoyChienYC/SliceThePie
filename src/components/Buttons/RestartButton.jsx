import React from 'react';
import "./Buttons.css";

function RestartButton(props) {
  return ( 
    <div className="btn">
      <button id="restart-btn" onClick={props.onClick}> Restart </button>
    </div>
  );
}

export default RestartButton;