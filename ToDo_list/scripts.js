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
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const todoElem = document.createElement('li');
        todoElem.textContent = todo;
        todoList.appendChild(todoElem);
    });
});
