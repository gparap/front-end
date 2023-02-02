/* Created by gparap (c) 2022 */

import './App.css';
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import React, { useState } from 'react';

function App() {
	//state of the to-do list
	const [ todoList, setTodoList ] = React.useState('');

  //add a new to-do to the list
	const addToDo = ( todo ) => {
		const newTodo = [ ...todoList, { todo } ];
		setTodoList( newTodo );
	};

	return (
			<div className="App">
				<div className="App-header">
				My To-Do List
				<AddToDo addToDo={addToDo} />
				<ToDoList todoList={todoList} />
				</div>
			</div>
	);
};

export default App;
