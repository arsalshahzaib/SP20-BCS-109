const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

let todos = [];

addButton.addEventListener('click', () => {
  // Get the value of the input field
  const todo = todoInput.value;

  // Add the new todo to the array
  todos.push(todo);

  // Clear the input field
  todoInput.value = '';

  // Update the HTML of the todo list
  updateTodoList();
});

function updateTodoList() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const todoElem = document.createElement('li');
    todoElem.textContent = todo;

    // Add a delete button to each todo item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      // Remove the todo from the array and update the HTML
      todos.splice(index, 1);
      updateTodoList();
    });
    todoElem.appendChild(deleteButton);

    todoList.appendChild(todoElem);
  });
}
