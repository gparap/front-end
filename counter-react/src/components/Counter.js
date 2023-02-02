/* Created by gparap (c) 2022 */

import React from 'react';
import '../index.css';

function Counter() {
  const [counter, setCounter] = React.useState(0);

  function addValue(value) {
    setCounter(counter + value);
  }

  return(
    <div>
      {counter}
      <br />
      <button className="button" onClick={()=>addValue(1)}>+1</button>
      <button className="button" onClick={()=>addValue(10)}>+10</button>
      <button className="button" onClick={()=>addValue(100)}>+100</button>
      <br />
      <button className="button" onClick={()=>addValue(-1)}>-1</button>
      <button className="button" onClick={()=>addValue(-10)}>-10</button>
      <button className="button" onClick={()=>addValue(-100)}>-100</button>
      <br />
      <button className="button" onClick={()=>addValue(-counter)}>clear</button>
    </div>
  );
}

export default Counter;
