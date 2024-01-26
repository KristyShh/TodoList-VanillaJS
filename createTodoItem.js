import { createElementButton, createElementInput } from './elements.js';
import { toggleTodoItem, removeTodoItem } from './taskActions.js';

export const createTodoItem = (task, isComplited, id, date, tasks) => {
    const todoItem = document.createElement('ul');
    todoItem.className = 'todo-list';
    const itemDiv = document.createElement('div');
    itemDiv.className = 'todo';
    const newItem = document.createElement('li');
    newItem.className = 'todo-item';
    itemDiv.appendChild(newItem);
    todoItem.appendChild(itemDiv);
    // checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = isComplited;
    checkbox.addEventListener('change', () => toggleTodoItem(id, tasks)); 
    newItem.appendChild(checkbox);
    // span task
    const todoText = document.createElement('span');
    todoText.className = 'todo-text';
    todoText.id = id;
    todoText.textContent = task;
    if (checkbox.checked || isComplited) {
        todoText.style.textDecoration = 'line-through';
        todoText.style.color = 'red';
        todoItem.style.accentColor = 'red';
    }
    newItem.appendChild(todoText);
    // buttonX
    const itemButtonDate = document.createElement('div');
    itemButtonDate.className = 'button-date';
    const buttonX = itemButtonDate.appendChild(createElementButton('X', 'button', 'button-x'));
    buttonX.addEventListener('click', () => removeTodoItem(id, tasks)); 
    itemDiv.appendChild(itemButtonDate);
    // date
    const todoDate = document.createElement('time');
    todoDate.className = 'todo-date';
    todoDate.textContent = date;
    itemButtonDate.appendChild(todoDate);
    return todoItem;
}
