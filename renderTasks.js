import { createTodoItem } from './createTodoItem.js';
export const renderTasks = (tasks) => {
    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = '';

    if (tasks.length > 0) {
        tasks.forEach(task => {
            const todoItem = createTodoItem(task.task, task.isComplited, task.id, task.date, tasks); 
            taskContainer.appendChild(todoItem);
        });
    } else {
        const noTasks = document.createElement('p');
        noTasks.className = 'no-tasks';
        noTasks.textContent = 'No tasks';
        taskContainer.appendChild(noTasks); 
    }
}


