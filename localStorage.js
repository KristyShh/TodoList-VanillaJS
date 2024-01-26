const saveTaskstolocalStorage = (tasks) => {
    localStorage.setItem('todos', JSON.stringify(tasks));
}

const getTasksFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('todos') || '[]');
}
export { saveTaskstolocalStorage, getTasksFromLocalStorage };
