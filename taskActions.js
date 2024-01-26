import { saveTaskstolocalStorage } from './localStorage.js';
import { renderTasks } from './renderTasks.js';

/*export const removeTodoItem = (id, tasks) => { // Добавлен аргумент tasks
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        saveTaskstolocalStorage(tasks);
        renderTasks(tasks);
    }
}*/
//деструктиризация массива
export const removeTodoItem = (id, tasks) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        const [removedTask] = tasks.splice(taskIndex, 1);
        saveTaskstolocalStorage(tasks);
        renderTasks(tasks);
    }
}

export const toggleTodoItem = (id, tasks) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].isComplited = !tasks[taskIndex].isComplited;
        saveTaskstolocalStorage(tasks);
        renderTasks(tasks);
    }
}

