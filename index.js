import { addResetEventListener, addSubmitEventListener } from './events.js';
import { renderTasks } from './renderTasks.js';
import { getTasksFromLocalStorage } from './localStorage.js';
import { createElementButton, createElementInput } from './elements.js';


const root = document.getElementById('root');
const header = document.createElement('form');
header.id = 'task-form';
const taskContainer = document.createElement('div');
taskContainer.id = 'task-container';
taskContainer.className = 'task-container';
header.appendChild(createElementButton('Delete All', 'reset', 'button-delete'));
const addInput = header.appendChild(createElementInput('text', 'Enter todo', 'input-add'));
header.appendChild(createElementButton('Add', 'submit', 'button-add'));

const tasks = getTasksFromLocalStorage();

addResetEventListener(header, tasks);
addSubmitEventListener(header, addInput, tasks);

root.appendChild(header);
root.appendChild(taskContainer);

renderTasks(tasks);

