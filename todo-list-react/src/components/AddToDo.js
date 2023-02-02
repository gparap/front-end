/* Created by gparap (c) 2022 */

import React, { useState} from 'react';

function AddToDo({ addToDo }) {
  //state of the input text value
  const [inputValue, setInputValue] = React.useState('');

  //update the state of the input text value
  function handleInput() {
    let text = document.getElementById('inputText');
    setInputValue(text.value);
  }

  //add a new to-do using the props delegate
  function addNewTodo() {
    addToDo(inputValue);
  }

  return(
    <div>
      <input type="text" id="inputText" onChange={(e)=>setInputValue(e.target.value)} />
      <button type="button" onClick={()=>addToDo(inputValue)}>Add</button>
    </div>
  );
}

export default AddToDo;
