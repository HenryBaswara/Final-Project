
function addTodo() {
  const nameInput = document.getElementById('nameInput').value.trim();


  nameInput !== '' ? saveTodo(nameInput) : alert('Please enter a valid todo.');


  document.getElementById('nameInput').value = '';
}


function saveTodo(todo) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];


  const newTodo = {
      id: Date.now(), 
      text: todo,
      completed: false
  };

  todos.push(newTodo);

  
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTodos();
}


function displayTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const container = document.querySelector('.container');
  let todosList = document.querySelector('.todos-list');
  
 
  if (todosList) {
      todosList.remove();
  }

 
  todosList = document.createElement('ul');
  todosList.className = 'todos-list';
  container.appendChild(todosList);

  
  todos.forEach(todo => {
      const listItem = document.createElement('li');
      listItem.textContent = todo.text;
      todosList.appendChild(listItem);
  });
}


function filterCompletedTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  
 
  const completedTodos = todos.filter(todo => todo.completed === true);

 
  completedTodos.forEach(todo => console.log(todo));
}


document.getElementById('addNameButton').addEventListener('click', addTodo);

document.addEventListener('DOMContentLoaded', displayTodos);
