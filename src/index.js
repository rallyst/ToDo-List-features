import "../styles/index.css";
import "../index.html";

import { getTodoItem } from "./addTodoItem";
import { 
  saveTodoToSStorage, 
  getTodosFromSStorage,
} from "./sessionStorage";

import { filterTodoItems } from "./filterTodoItems";
import {
  clearTodoInput,
  getTodoInputItems,
  validateTodoInput,
  disableEnter,
} from "./todoInput";

const todoInputWrapper = document.querySelector(".todo-input-wrapper");
const { todoInput, todoButton, todoHelper } = getTodoInputItems(todoInputWrapper);
const todoList = document.querySelector(".todo-list");
const todoSelect = document.querySelector(".todo-select");
const select = document.querySelector(".todo-select-wrapper");

document.addEventListener("DOMContentLoaded", onDOMLoaded);
todoInput.addEventListener("input", () => validateTodoInput(todoInputWrapper));

// listeners for Enter key and input focus
todoInput.addEventListener("keydown",  disableEnter);
todoInput.addEventListener("focus", () => validateTodoInput(todoInputWrapper));
todoInput.addEventListener("blur", () => todoHelper.classList.remove("todo-helper_visible"));

todoButton.addEventListener("click", addTodo);
todoSelect.addEventListener("change", filterTodos);


function onDOMLoaded() {
  renderTodosFromSStorage();
  validateTodoInput(todoInputWrapper);
  todoHelper.classList.remove("todo-helper_visible");
}

function renderTodosFromSStorage() {
  let todos = getTodosFromSStorage();
 
  if (!todos.length) {
    todoSelect.disabled = true;
    select.classList.remove("hover");
  } else {
    todoSelect.disabled = false;
    select.classList.add("hover");
  }
  
  todos.forEach((todoValue) => {
    const todoItem = getTodoItem(todoValue);
    todoList.appendChild(todoItem);  
  });
}

function addTodo(event) {
  event.preventDefault();
  const toDoItem = {
    value: todoInput.value,
    isCompleted: false,
  };

  saveTodoToSStorage(toDoItem);

  const todoItem = getTodoItem(toDoItem);
  todoList.appendChild(todoItem);
  todoSelect.disabled = false;
  select.classList.add("hover");

  clearTodoInput(todoInputWrapper);
}

function filterTodos(e) {
  const todoItems = todoList.childNodes;
  
  filterTodoItems(todoItems, e.target.value);
}

// TODO fix bugs:
// 1. select should be disabled when no option is displayed
// 2. forbid form submit with enter key, when input value is less than 3 characters
// 3. when todoInput is not in focus, helper text should not be displayed
// 4. save to session storage todo state: completed, not completed - and update it
