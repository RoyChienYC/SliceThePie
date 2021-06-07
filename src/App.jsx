import React, { useRef, useEffect, useState } from 'react';
import './App.css';

import Header from "./components/Header/Header.jsx";
import ProgressBar from "./components/ProgressBar/ProgressBar.jsx"
import PieChartClass from "./components/PieChartClass.jsx";

import RevenuePage from './components/Revenue/RevenuePage.jsx';
import ExpenditurePage from './components/Expenditure/ExpenditurePage.jsx';
import RevenueResults from './components/Results/RevenueResults.jsx';
import ExpenseResults from './components/Results/ExpenseResults.jsx';

import NextButton from "./components/Buttons/NextButton.jsx";
import CompareButton from "./components/Buttons/CompareButton.jsx";
import PreviousButton from "./components/Buttons/PreviousButton.jsx";
import RestartButton from "./components/Buttons/RestartButton.jsx";

let step_data = 0
// let reset = false
/* App */
let color1 = "#71A8FF";
let color2 = "white";
let color3 = "white";

function App() {

  //revenue page is initially open
  const[RevenueIsOpen, setRevenueIsOpen] = useState(true);
  const[ExpenseIsOpen, setExpenseIsOpen] = useState(false);
  const[RevenueResultsIsOpen, setRevenueResultsIsOpen] = useState(false);
  const[ExpenseResultsIsOpen, setExpenseResultsIsOpen] = useState(false);
  const[Reset, setReset] = useState(false);
  const[ChangeState, setChangeState] = useState(false);

  const[ResetEXP, setResetEXP] = useState(false);

  
  
  // for progressbar 
  

  function closeRevenue(){
     setExpenseIsOpen(true);
     setRevenueIsOpen(false);
     setRevenueResultsIsOpen(false);
     setExpenseResultsIsOpen(false);
     color1 = "#71A8FF";
     color2 = "#71A8FF";
     color3 = "white";
     
  }

  function openRevenue() {
    setRevenueIsOpen(true);
    setExpenseIsOpen(false);
    setRevenueResultsIsOpen(false);
    setExpenseResultsIsOpen(false)
     color1 = "#71A8FF";
     color2 = "white";
     color3 = "white";
    
  }

  function showRevenueResults() {
    setRevenueResultsIsOpen(true);
    setExpenseResultsIsOpen(false);
    setExpenseIsOpen(false);
    setRevenueIsOpen(false);
    color1 = "#71A8FF";
    color2 = "#71A8FF";
    color3 = "#71A8FF";
  }

  function showExpenseResults() {
    setExpenseResultsIsOpen(true);
    setRevenueResultsIsOpen(false);
    setExpenseIsOpen(false);
    setRevenueIsOpen(false);
    
  }

  function changeState() {
    step_data += 1
    console.log(step_data)
    setReset(false)
    setChangeState(true);
  }
  function decState() {
    
    step_data -= 1
    setChangeState(true);
    // console.log(step_data)
  }
  function resetState() {
    step_data = 0
    // console.log(step_data)
    setReset(true)
    setResetEXP(true)
    setChangeState(true);

  }
  function callbackFunc(){
    setReset(false);
  }
  function callbackState(){
    setChangeState(false);
  }
  function callbackFuncEXP(){
    setResetEXP(false);
  }


  
  return (
    <div className="app">

      <Header />
      <div class="page_name">
      <label style={{ color: color1 }}> REVENUE</label>
      <label style={{ color: color2 }}> EXPENSES</label>
      <label style={{ color: color3 }}> COMPARE</label>
      </div>
  
      <ProgressBar stateInfo={step_data}
      bool_state={ChangeState}
      callbackState={callbackState}
      />
                  
        
      {RevenueIsOpen ? 
      <div>
    
        <RevenuePage stateInfo={step_data} 
        resetInfo={Reset} 
        parentCallback={callbackFunc}
        />
        
        <NextButton onClick = {() => {closeRevenue();changeState();}}  /></div> : null} 
        

      {ExpenseIsOpen ? 
      <div>
        <ExpenditurePage 
        resetInfoEXP={ResetEXP}
        parentCallbackEXP={callbackFuncEXP}
        />
        <CompareButton onClick = {() => {showRevenueResults(); changeState()}}/>
        <PreviousButton onClick = {() => {openRevenue(); decState()}} />
      </div> : null} 

      {RevenueResultsIsOpen ? 
      <div>
        <RevenueResults />
        <NextButton onClick = {showExpenseResults} />
      </div> : null} 

      {ExpenseResultsIsOpen ? 
      <div>
        <ExpenseResults />
        <RestartButton onClick = {() => {openRevenue(); resetState(); }} />
      </div> : null} 



    </div>
  );
}

export default App;