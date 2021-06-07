import React, { useRef, useEffect, useState } from 'react';

import "./ExpenditurePage.css";
import ExpenditureEntryItems from './ExpenditureEntryItems.jsx';
import PieChartFunctional from "../PieChartFunctional.jsx";
import PieChartClass from "../PieChartClass.jsx";

let expenditureData = [ 
    { name: "Medical Center", value: 0, color: '#F0BF00' }, 
    { name: "Teaching and Teaching Support", value: 0, color: '#F6E50E' }, 
    { name: "Research", value: 0, color: '#FFF688' }, 
    { name: "Student Services and Financial Aid", value: 0, color: '#5F63EC' },
    { name: "Operations and Maintenance (Buildings, etc)", value: 0, color: '#71A8FF' }, 
    { name: "Administration", value: 0, color: '#00BFFF' }, 
    { name: "Non-Educational Services", value: 0, color: '#0F7AB4' }, 
    { name: "Public Service", value: 0, color: '#D4E4FF' }, 
    { name: "Depreciation, Interest, etc.", value: 0, color: '#FFFFFF' }
  ];

let index_val = 0


function ExpenditurePage(props) {

  // initialization

  let resetEXP = props.resetInfoEXP
  if (resetEXP == true){
    for(let i = 0; i<9 ;i++){
      expenditureData[i].value = 0;
    }
    props.parentCallbackEXP();
  }
  
  const [pieData2, setPieData2] = useState(expenditureData);
  const[outputValue, setOutputValue] = useState('')

  //check if expenditure pie chart values total up to over 100
  let sum = 0;
  let diff = 0;
  let check = false;
  for (let i = 0; i < expenditureData.length; i++) {
    if (sum != 100) {
      sum = sum + expenditureData[i].value;
    }
    if (sum > 100) {
      diff = sum - 100;
      expenditureData[i].value = expenditureData[i].value - diff;
      sum = 100;
      check = true;
    }
    else if (sum == 100 && check) {
      expenditureData[i].value = 0;
    }
  }
   function expenditureChange(newValue){
     console.log(newValue);
    let index_value = parseInt(newValue)
    if (index_value != '' && Number.isNaN(index_value) === false){
    console.log(index_value);
    expenditureData[index_val].value = index_value;
    let totalAmount = calculateTotal();
    setPieData2([...expenditureData]);
    setOutputValue(totalAmount);
    }
  }

  function percentAdd(newValue){
    newValue += "%";
  }


  function handleIndexChange(newValue){
    // setIndexValue(newValue, () => console.log("whatever"));
    index_val = newValue
  }

  function calculateTotal(){
    let total = 0;
    for (let i=0; i < expenditureData.length; i++){
      total += expenditureData[i].value;
    }
    return (total > 100 ? 100 : total);
  }


  return(
    <div className="expenditure-page-container">
      <p id="expenditure-title"> UC Davis Expenditures </p>
      <PieChartFunctional name={"pie2"} data={pieData2} />

      <ExpenditureEntryItems indexValue={handleIndexChange} onKeyUp={expenditureChange} outputValue={outputValue > 0 ? outputValue + "%" : ''} percentAdd = {percentAdd}/>
    </div> 

      
  );
}

export default ExpenditurePage;
export {expenditureData};