// Copyright (c) 2022 gparap
// To-Do List

function addTodo() {
  //get the todo
  let todo = document.getElementById('input-todo').value;

  //check if todo is empty
  if (!validateInput(todo)){
    return;
  }

  //get the todo-list
  let todoList = document.getElementById('todo-list');

  //add todo to todo-List
  let listElement = document.createElement('li');
  listElement.id = 'li-' + todo;
  listElement.appendChild(document.createTextNode(todo));
  todoList.appendChild(listElement);

  //clear todo text
  document.getElementById('input-todo').value = '';
}

function validateInput(todo) {
  if (todo === '') {
    alert('Todo cannot be empty.');
    return false;
  }
  return true;
}
