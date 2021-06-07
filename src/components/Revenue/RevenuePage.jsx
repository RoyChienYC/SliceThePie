import React, { useRef, useEffect, useState } from 'react';

import './RevenuePage.css';
import RevenueEntryItems from './RevenueEntryItems.jsx';
import PieChartFunctional from "../PieChartFunctional.jsx";
import PieChartClass from "../PieChartClass.jsx";


let index_val = 0;
let percentVal = null;
let revenueData = [ 

  { name: "Medical Center", value: 0, color: '#F0BF00' }, 
  { name: "Student Fees", value: 0, color: '#F6E50E' },
  { name: "State of California", value: 0, color: '#FFF688' }, 
  { name: "Tuition", value: 0, color: '#5F63EC' }, 
  { name: "Research Grants and Contracts", value: 0, color: '#71A8FF' }, 
  { name: "Pell Grants", value: 0, color: '#00BFFF' }, 
  { name: "Non-educational Services", value: 0, color: '#0F7AB4' }, 
  { name: "Gifts, Endowments, Interest, Etc.", value: 0, color: '#D4E4FF' } 
];

function RevenuePage(props) {
  

  let reset = props.resetInfo
  if (reset == true){
    for(let i = 0; i<8 ;i++){
      revenueData[i].value = 0;
    }
    props.parentCallback()
  }
  

  // initialization
  // function sendData() {
  //   props.parentCallback
  // }

  // let infoState = props.stateInfo 
  // let reset = props.resetInfo
  // if(infoState == 0 && reset == true){
  //   sendData()
  //   reset = false
  //   console.log(revenueData[0].value)
  //   revenueData[0].value = 0
    

  // }
  const [indexValue, setIndexValue] = useState(null);
 
    // { name: "Medical Center", value: 45, color: '#F0BF00' }, 
    // { name: "Student Fees", value: 4, color: '#F6E50E' },{ name: "State of California", value: 8, color: '#FFF688' }, 
    // { name: "Tuition", value: 11, color: '#5F63EC' }, 
    // { name: "Research Grants and Contracts", value: 13, color: '#71A8FF' }, 
    // { name: "Pell Grants", value: 1, color: '#00BFFF' }, 
    // { name: "Non-educational Services", value: 11, color: '#0F7AB4' }, 
    // { name: "Gifts, Endowments, Interest, Etc.", value: 7, color: '#D4E4FF' } 

  const [pieData1, setPieData1] = useState(revenueData);
  const[outputValue, setOutputValue] = useState('')
  


  //check if revenue pie chart values total up to over 100
  let sum = 0;
  let diff = 0;
  let check = false;
  for (let i = 0; i < revenueData.length; i++) {
    if (sum != 100) {
      sum = sum + revenueData[i].value;
    }
    if (sum > 100) {
      diff = sum - 100;
      revenueData[i].value = revenueData[i].value - diff;
      sum = 100;
      check = true;
    }
    else if (sum == 100 && check) {
      revenueData[i].value = 0;
    }
  }

  function revenueChange(newValue){
    let index_value = parseInt(newValue)
    if (index_value != '' && Number.isNaN(index_value) === false){
    console.log(index_value);
    revenueData[index_val].value = index_value;
    let totalAmount = calculateTotal();
    setPieData1([...revenueData]);
    setOutputValue(totalAmount);
    }
  }

  function handleIndexChange(newValue){
    // setIndexValue(newValue, () => console.log("whatever"));
    index_val = newValue
  }

  function calculateTotal(){
    let total = 0;
    for (let i=0; i < revenueData.length; i++){
      total += revenueData[i].value;
    }
    return (total > 100 ? 100 : total);
  }
  
  function percentAdd(newValue){
    newValue += "%";
    percentVal = newValue;
  }

  return(
    <div className="revenue-page-container">
      <p id="revenue-title"> UC Davis Revenues </p>
      <PieChartFunctional name={"pie1"} data={pieData1} />
        
      <RevenueEntryItems indexValue={handleIndexChange} onKeyUp={revenueChange}outputValue={outputValue > 0 ? outputValue + "%" : ''} percentAdd={percentAdd} percentValue= {percentVal}/>
        

    </div> 

      
  );
}

export default RevenuePage;
export {revenueData};
