import React from 'react';
import "./Buttons.css";

function NextButton(props) {
  return ( 
    <div className="btn">
      <button id="next-btn" onClick={props.onClick}> Next </button>
    </div>
  );
}

export default NextButton;