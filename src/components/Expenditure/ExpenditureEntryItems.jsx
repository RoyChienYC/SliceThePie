import React, { useState } from 'react';
import './ExpenditureEntryItems.css';
import ReactTooltip from 'react-tooltip';

function ExpenditureEntryItems(props) {
    return(
      <div className="expenditure-entry-container">

        <div className="expenditure-function-container" id="expenditure-function">
          <p id="expenditure-function-title"> Function </p>

          <li className="expenditure-circle" id="circle1">
          <span id="expenditure-entry"> Medical Center </span>
          <span className="tooltip" data-tip='The cost of providing <br />
           care at the Medical <br /> 
           Center is roughly what <br />
          we get paid to provide it.' data-for='info-box'>&#9432;</span>
          <ReactTooltip id='info-box' backgroundColor="#71A8FF" textColor="black" place="bottom" event="click" html={true} globalEventOff="click" />
          </li>

          
          <li className="expenditure-circle" id="circle2">
          <span id="expenditure-entry"> Teaching and <br/> Teaching Support </span>
          <span className="tooltip" data-tip="Professors, advisors, deans, <br /> the library, the computer <br />
           labs, etc, including <br />
           Medical School faculty <br />
           salaries." data-for='info-box2'>&#9432;</span>
          <ReactTooltip id='info-box2' backgroundColor="#71A8FF" textColor="black" place="bottom" event="click" html={true} globalEventOff="click" />      
          </li>

          <li className="expenditure-circle" id="circle3">
          <span id="expenditure-entry"> Research </span>
          <span className="tooltip" data-tip="The costs of doing <br /> 
          the research, mostly <br /> 
          researcher salaries." data-for='info-box3'>&#9432;</span>
          <ReactTooltip id='info-box3' backgroundColor="#71A8FF" textColor="black" place="bottom" event="click" html={true} globalEventOff="click" />      
          </li>

          <li className="expenditure-circle" id="circle4">
          <span id="expenditure-entry"> Student Services <br/> and Financial Aid </span>
          <span className="tooltip" data-tip="Student Health, things <br /> covered by fees, <br /> 
          Admissions, and also <br /> 
          financial aid from <br /> 
          the general funds, <br /> 
          which is about $100M <br /> 
          or 1.5%." data-for='info-box4'>&#9432;</span>
          <ReactTooltip id='info-box4' backgroundColor="#71A8FF" textColor="black" place="bottom" event="click" html={true} globalEventOff="click" />      
          </li>

          <li className="expenditure-circle" id="circle5">
          <span id="expenditure-entry"> Operations <br/> and Maintenance </span>
          <span className="tooltip" data-tip="Upkeep of the grounds <br /> 
          and building, and <br />
          utilities, which are <br />
          less than 1%." data-for='info-box5'>&#9432;</span>
          <ReactTooltip id='info-box5' backgroundColor="#71A8FF" textColor="black" place="bottom" event="click" html={true} globalEventOff="click" />      
          </li>

          <li className="expenditure-circle" id="circle6">
          <span id="expenditure-entry"> Administration </span>
          <span className="tooltip" data-tip="Provost and Chancellor's <br /> 
          offices, raising money, <br /> 
          accounting, personnel, <br /> 
          legal, making budgets." data-for='info-box6'>&#9432;</span>
          <ReactTooltip id='info-box6' backgroundColor="#71A8FF" textColor="black" place="bottom" event="click" html={true} globalEventOff="click" />      
          </li>

          <li className="expenditure-circle" id="circle7">
          <span id="expenditure-entry"> Services </span>
          <span className="tooltip" data-tip="The costs of providing <br /> 
          dorms, dining, parking, etc." data-for='info-box7'>&#9432;</span>
          <ReactTooltip id='info-box7' backgroundColor="#71A8FF" textColor="black" place="bottom" event="click" html={true} globalEventOff="click" />      
          </li>

          <li className="expenditure-circle" id="circle8">
          <span id="expenditure-entry"> Public Service </span>
          <span className="tooltip" data-tip="Mostly the cooperative <br /> 
          extension, which provides <br /> 
          agricultural services to <br /> 
          farmers, ranchers, winemakers, <br /> 
          etc.  Part of our mission <br /> 
          as a land grant university." data-for='info-box8'>&#9432;</span>
          <ReactTooltip id='info-box8' backgroundColor="#71A8FF" textColor="black" place="bottom" event="click" html={true} globalEventOff="click" />      
          </li>

          <li className="expenditure-circle" id="circle9">
          <span id="expenditure-entry"> Depreciation, <br/>  Interest, etc. </span>
          <span className="tooltip" data-tip="Depreciation is the <br /> 
          loss of value of <br /> column
          buildings and <br />
          equipment as they <br />
          wear out. Mostly <br /> 
          unavoidable financial <br /> 
          losses." data-for='info-box9'>&#9432;</span>
          <ReactTooltip id='info-box9' backgroundColor="#71A8FF" textColor="black" place="bottom" event="click" html={true} globalEventOff="click" />      
          </li>
          <div id="expenditure-total">Total %</div>
        </div>
        

        <div className="expenditure-percentage-container" id="expenditure-percentage">
          <p id="expenditure-percent-title"> Percentage (%) </p>

          <input type="text" class="text-line" placeholder="0%" onKeyUp = {(e) =>{
            if (e.key === 'Enter'){
            props.indexValue(0);
            props.onKeyUp(e.target.value);
            e.target.value = e.target.value.replace(/\D/g,'') + '%';
            }
          }}/>
          <input type="text" class="text-line" placeholder="0%" onKeyUp = {(e) =>{
            if (e.key === 'Enter'){
            props.indexValue(1);
            props.onKeyUp(e.target.value);
            e.target.value = e.target.value.replace(/\D/g,'') + '%';
            }
          }}/>
          <input type="text" class="text-line" placeholder="0%" onKeyUp = {(e) =>{
            if (e.key === 'Enter'){
            props.indexValue(2);
            props.onKeyUp(e.target.value);
            e.target.value = e.target.value.replace(/\D/g,'') + '%';
            }
          }}/>
          <input type="text" class="text-line" placeholder="0%" onKeyUp = {(e) =>{
            if (e.key === 'Enter'){
            props.indexValue(3);
            props.onKeyUp(e.target.value);
            e.target.value = e.target.value.replace(/\D/g,'') + '%';
            }
          }}/>
          <input type="text" class="text-line" placeholder="0%" onKeyUp = {(e) =>{
            if (e.key === 'Enter'){
            props.indexValue(4);
            props.onKeyUp(e.target.value);
            e.target.value = e.target.value.replace(/\D/g,'') + '%';
            }
          }}/>
          <input type="text" class="text-line" placeholder="0%" onKeyUp = {(e) =>{
            if (e.key === 'Enter'){
            props.indexValue(5);
            props.onKeyUp(e.target.value);
            e.target.value = e.target.value.replace(/\D/g,'') + '%';
            }
          }}/>
          <input type="text" class="text-line" placeholder="0%" onKeyUp = {(e) =>{
            if (e.key === 'Enter'){
            props.indexValue(6);
            props.onKeyUp(e.target.value);
            e.target.value = e.target.value.replace(/\D/g,'') + '%';
            }
          }}/>
          <input type="text" class="text-line" placeholder="0%" onKeyUp = {(e) =>{
            if (e.key === 'Enter'){
            props.indexValue(7);
            props.onKeyUp(e.target.value);
            e.target.value = e.target.value.replace(/\D/g,'') + '%';
            }
          }}/>
          <input type="text" class="text-line" placeholder="0%" onKeyUp = {(e) =>{
            if (e.key === 'Enter'){
            props.indexValue(8);
            props.onKeyUp(e.target.value);
            e.target.value = e.target.value.replace(/\D/g,'') + '%';
            }
          }}/>
          <input type="text" class="text-line" placeholder="0%" readOnly="readonly" value={props.outputValue}/>
        </div>

      </div> 
    );
}

export default ExpenditureEntryItems;