import React from 'react';
import "./Buttons.css";

function CompareButton(props) {
  return ( 
    <div className="btn">
      <button id="compare-btn" onClick={props.onClick}> Compare </button>
    </div>
  );
}

export default CompareButton;