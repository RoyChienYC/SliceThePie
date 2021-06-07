import React from 'react';
import './Header.css'

function Header() {
  return(
    <div className="header-container">
      <h1 className="slice-the-pie"> Slice the Pie </h1>
      <p className="text"> Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game.
      <br/><br/> You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provost made. </p>
      <br/>
    </div>
  );
}

export default Header;