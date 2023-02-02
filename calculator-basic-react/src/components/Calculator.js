/* Copyright (c) 2022 gparap */

import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = React.useState('');

  function handleInput(value) {
    setResult(result.toString() + value.toString());
  }

  function clearResult() {
    setResult('');
  }

  function equals() {
    setResult(Number(eval(result).toString()).toFixed(2));
  }

  return(
    <div>
          {/* result */}
          <textarea id="result-text" rows="1" cols="1" defaultValue={result}></textarea>

          {/* buttons 9,8,7,/ */}
          <div>
            <button id="button-9" onClick={() => handleInput(9)} className="button-input" type="button">9</button>
            <button id="button-8" onClick={() => handleInput(8)} className="button-input" type="button">8</button>
            <button id="button-7" onClick={() => handleInput(7)} className="button-input" type="button">7</button>
            <button id="button-divide" onClick={() => handleInput('/')} className="button-input" type="button">/</button>
          </div>

          {/* buttons 6,5,4,* */}
          <div>
            <button id="button-6" onClick={() => handleInput(6)} className="button-input" type="button">6</button>
            <button id="button-5" onClick={() => handleInput(5)} className="button-input" type="button">5</button>
            <button id="button-4" onClick={() => handleInput(4)} className="button-input" type="button">4</button>
            <button id="button-multiply" onClick={() => handleInput('*')} className="button-input" type="button">*</button>
          </div>

          {/* buttons 3,2,1,- */}
          <div>
            <button id="button-3" onClick={() => handleInput(3)} className="button-input" type="button">3</button>
            <button id="button-2" onClick={() => handleInput(2)} className="button-input" type="button">2</button>
            <button id="button-1" onClick={() => handleInput(1)} className="button-input" type="button">1</button>
            <button id="button-minus" onClick={() => handleInput('-')} className="button-input" type="button">-</button>
          </div>

          {/* buttons C,0,=,+ */}
          <div>
            <button id="button-clear" onClick={() => clearResult()} className="button-input" type="button">CE</button>
            <button id="button-0" onClick={() => handleInput(0)} className="button-input" type="button">0</button>
            <button id="button-equals" onClick={() => equals()} className="button-input" type="button">=</button>
            <button id="button-add" onClick={() => handleInput('+')} className="button-input" type="button">+</button>
          </div>
    </div>
  );
}

export default Calculator;
