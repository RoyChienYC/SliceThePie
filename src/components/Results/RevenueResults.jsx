import React from 'react';
import "./Results.css";
import PieChartFunctional from "../PieChartFunctional.jsx";
import PieChartClass from "../PieChartClass.jsx";
import {revenueData} from "../Revenue/RevenuePage.jsx"

let originalRevenueData = [ 

  { name: "Medical Center", value: 45, color: '#F0BF00' }, 
  { name: "Student Fees", value: 4, color: '#F6E50E' },{ name: "State of California", value: 8, color: '#FFF688' }, 
  { name: "Tuition", value: 11, color: '#5F63EC' }, 
  { name: "Research Grants and Contracts", value: 13, color: '#71A8FF' }, 
  { name: "Pell Grants", value: 1, color: '#00BFFF' }, 
  { name: "Non-educational Services", value: 11, color: '#0F7AB4' }, 
  { name: "Gifts, Endowments, Interest, Etc.", value: 7, color: '#D4E4FF' } 
];

function RevenueResults() {
  return(
    <div className="revenue-results-container">
      <h2 className="results"> RESULTS </h2>
      <h2 className="results"> {console.log(revenueData)} </h2>

      <div className="guess">
        <p> Your Revenue Guess </p>
        <PieChartFunctional name={"pie1"} data={revenueData} />
      </div>
      <div className="actual">
        <p> Actual Revenue </p>
        <PieChartFunctional name={"originalPie1"} data={originalRevenueData} />
      </div>

    </div>
  );
}

export default RevenueResults;