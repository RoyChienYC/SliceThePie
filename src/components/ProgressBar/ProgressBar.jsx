import React, { useRef, useEffect, useState } from 'react';

import './ProgressBar.css'

let colorC1 = "#71A8FF"
let colorC2 = "#7F8187"
let colorC3 = "#7F8187" 
let colorB1 = "#7F8187"
let colorB2 = "#7F8187"


export default function ProgressBar(props) {
  
  //set state for everything in here 
  // manually set it according to info outside
  // or step number basically 
  // like how the page is done 
  


  let step_count = props.stateInfo;

  function state1(){
    colorC1 = "#71A8FF"
    colorC2 = "#7F8187"
    colorC3 = "#7F8187" 
    colorB1 = "#7F8187"
    colorB2 = "#7F8187"
  

  }

  function state2(){
    colorC1 = "#71A8FF"
    colorC2 = "#71A8FF"
    colorC3 = "#7F8187" 
    colorB1 = "#71A8FF"
    colorB2 = "#7F8187"
  }

  function state3(){
    colorC1 = "#71A8FF"
    colorC2 = "#71A8FF"
    colorC3 = "#71A8FF" 
    colorB1 = "#71A8FF"
    colorB2 = "#71A8FF"

  }

  let curr_state = props.bool_state;
  if(step_count == 0 && curr_state == true){
    state1();
    props.callbackState();
  } else if(step_count == 1 && curr_state == true){
    state2()
    props.callbackState();
  } else if(step_count == 2 && curr_state == true){
    state3();
    props.callbackState();
  }

  // } else if(step_count == 1 && props.bool_state == true) {
  //   console.log("this is state 2")
  //   state2();
  //   props.callbackState();
  // }
  

  

  return (
    // <div class="container">
    //     <div class="first_comp">
          
    //       <span class="dot"></span>
    //       <span class="line"></span>
    //       <span class="dot"></span>
    //       <span class="line"></span>
    //       <span class="dot"></span>
          
    //     </div>

          
    // </div>
    
    <div class="container">
        
       <div class="wrapper">
        <svg height="40" width="30">
            <circle cx="15" cy="15" r="15" stroke="" stroke-width="3" fill={colorC1}/>
        </svg>
      </div>
      <div class="wrapperB">
      <svg height="30" width="100">
          <g transform="translate(0,-5)" fill="none" stroke={colorB1} stroke-width="7">
          <path stroke-linecap="butt" d="M5 20 l215 0" />
          </g>
        </svg>
      </div>
      <div class="wrapper">
      
      <svg id="cicrle2" height="40" width="30">
        <circle cx="15" cy="15" r="15" stroke="" stroke-width="3" fill= {colorC2} />
      </svg>
      </div>
      <div class="wrapperB">
      <svg height="30" width="100">
          <g transform="translate(0,-5)" fill="none" stroke={colorB2} stroke-width="7">
          <path stroke-linecap="butt" d="M5 20 l215 0" />
          </g>
        </svg>
      </div>
      <div class="wrapper">
      
      <svg class="cicrle3" height="40" width="30">
        <circle cx="15" cy="15" r="15" stroke="" stroke-width="3" fill={colorC3} />
      </svg>
      </div>
       
    </div>
  );
}
