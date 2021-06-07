import React from 'react';
import "./Results.css";
import {expenditureData} from "../Expenditure/ExpenditurePage.jsx"
import PieChartFunctional from "../PieChartFunctional.jsx";
import PieChartClass from "../PieChartClass.jsx";

let originalExpenditureData = [ 

    { name: "Medical Center", value: 43, color: '#F0BF00' }, 
    { name: "Teaching and Teaching Support", value: 23, color: '#F6E50E' }, 
    { name: "Research", value: 11, color: '#FFF688' }, 
    { name: "Student Services and Financial Aid", value: 8, color: '#5F63EC' },
    { name: "Operations and Maintenance (Buildings, etc)", value: 2, color: '#71A8FF' }, 
    { name: "Administration", value: 3, color: '#00BFFF' }, 
    { name: "Non-Educational Services", value: 2, color: '#0F7AB4' }, 
    { name: "Public Service", value: 2, color: '#D4E4FF' }, 
    { name: "Depreciation, Interest, etc.", value: 6, color: '#FFFFFF' }
];

function ExpenseResults() {
  return(
    <div className="expense-results-container">
      <h2 className="results"> RESULTS </h2>

      <div className="guess">
        <p> Your Expenses Guess </p>
        <PieChartFunctional name={"pie2"} data={expenditureData} />
      </div>

      <div className="actual">
        <p> Actual Expenses </p>
        <PieChartFunctional name={"originalPie2"} data={originalExpenditureData} />
      </div>

    </div>
  );
}

export default ExpenseResults;