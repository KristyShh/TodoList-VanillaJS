import { saveTaskstolocalStorage } from './localStorage.js';
import {  renderTasks } from './renderTasks.js';

export const addResetEventListener = (header, tasks) => { 
    header.addEventListener('reset', (event) => {
        event.preventDefault();
        if (tasks.length > 0 && confirm('Are you sure you want to delete all tasks?')) {
            tasks.length = 0;
            saveTaskstolocalStorage(tasks);
            renderTasks(tasks);
        } else {
            alert('No tasks to delete');
        }
    });
}
export const addSubmitEventListener = (header, addInput, tasks) => { 
    header.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskInput = addInput.value;
        const task = {
            id: self.crypto.randomUUID(),
            task: taskInput,
            isComplited: false,
            date: new Date().toLocaleDateString(),
        }
        tasks.push(task);
        saveTaskstolocalStorage(tasks);
        addInput.value = ``;
        renderTasks(tasks);
    });
}
