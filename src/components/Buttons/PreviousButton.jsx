import React from 'react';
import "./Buttons.css";

function PreviousButton(props) {
  return ( 
    <div className="btn">
      <button id="previous-btn" onClick={props.onClick}> Previous </button>
    </div>
  );
}

export default PreviousButton;