/* Created by gparap (c) 2022 */

import React from 'react';

function ToDoList({ todoList }) {

  return (
    <div>
      { //list is empty
        (todoList === '') ? <div><br />You don't have any tasks, yet.</div> :

        //list is full
        <div>
          <ul>
              {
                //map each to-do to a list item
                todoList.map(
                  (item, index) => (<li key={index}> {todoList[index].todo} </li>)
                )
              }
          </ul>
        </div>
      }
    </div>
  );
}

export default ToDoList;
