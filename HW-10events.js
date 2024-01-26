



/*const root = document.getElementById('root');
const header = document.createElement('form');
const taskContainer = document.createElement('div');
taskContainer.className = 'task-container';
header.appendChild(createElementButton('Delete All', 'reset', 'button-delete'));
const addInput = header.appendChild(createElementInput('text', 'Enter todo', 'input-add'));
header.appendChild(createElementButton('Add', 'submit', 'button-add'));

const tasks = getTasksFromLocalStorage();
//functions
function createElementButton(text, type, className) {
    const button = document.createElement('button');
    button.textContent = text;
    button.type = type;
    button.className = className;
    return button;   
}

function createElementInput(type, text,  className) {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = text;
    input.className = className;
    return input;
    
}
const renderTasks = () => {//отрисовывает задачи 
    taskContainer.innerHTML = '';
    if (tasks.length > 0) {
        tasks.forEach(task => {
            const todoItem = createTodoItem(task.task, task.isComplited, task.id, task.date);
            taskContainer.appendChild(todoItem);
        });
    } else {
        const noTasks = document.createElement('p');
        noTasks.className = 'no-tasks';
        noTasks.textContent = 'No tasks';
        taskContainer.appendChild(noTasks); 
    }
};
function removeTodoItem(id) {//удаляет задачу
    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks.splice(taskIndex, 1);
    saveTaskstolocalStorage();
    renderTasks();
}

function toggleTodoItem(id) {//переключает состояние
    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks[taskIndex].isComplited = !tasks[taskIndex].isComplited;
    saveTaskstolocalStorage();
    renderTasks();
}
function saveTaskstolocalStorage() {//сохраняет данные
    localStorage.setItem('todos', JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {//получает данные
    const storedData = localStorage.getItem('todos');
    return storedData ? JSON.parse(storedData) : [];
    
}
function addCheckboxEventListener(checkbox, id) {
    checkbox.addEventListener('change', () => toggleTodoItem(id));
}
function addDeleteEventListener(button, id) {
    button.addEventListener('click', () => removeTodoItem(id));
}

// функция конструктор создает задачу
function createTodoItem(task, isComplited, id, date) {
    const todoItem = document.createElement('ul');
    todoItem.className = 'todo-list';
    const itemDiv = document.createElement('div');
    itemDiv.className = 'todo';
    const newItem = document.createElement('li');
    newItem.className = 'todo-item';
    itemDiv.appendChild(newItem);
    todoItem.appendChild(itemDiv);
     //chekbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.checked = isComplited;
        addCheckboxEventListener(checkbox, id);
        newItem.appendChild(checkbox);
    //span task
        const todoText = document.createElement('span');
         todoText.className = 'todo-text';
        todoText.id = id;
        todoText.textContent = task;
    if (isComplited) {
        todoText.style.textDecoration = 'line-through';
        todoText.style.color = 'red';
        todoItem.style.accentColor = 'red';
    }
        newItem.appendChild(todoText);

    //buttonX
        const itemButtonDate = document.createElement('div');
        itemButtonDate.className = 'button-date';
        const buttonX = itemButtonDate.appendChild(createElementButton('X', 'button', 'button-x'));
        addDeleteEventListener(buttonX, id);
        itemDiv.appendChild(itemButtonDate);
    //date
        const todoDate = document.createElement('time');
        todoDate.className = 'todo-date';
        todoDate.textContent = date;
        itemButtonDate.appendChild(todoDate);
        return todoItem;    
    }

header.addEventListener('reset', (event) => {
    if (tasks.length > 0 && confirm('Are you sure you want to delete all tasks?')) {
        tasks.length = 0;
        saveTaskstolocalStorage();
        renderTasks();
    } else {
        alert('No tasks to delete');
    }

})
header.addEventListener('submit', (event) => {
    //event.preventDefault();
    const taskInput = addInput.value;
    const task = {
        id: self.crypto.randomUUID(),
        task: taskInput,
        isComplited: false,
        date: new Date().toLocaleDateString(),
    }
    tasks.push(task);
    saveTaskstolocalStorage();
    addInput.value = ``;
    taskContainer.appendChild(todoItem);
    renderTasks();
});
    
root.appendChild(header);
root.appendChild(taskContainer);
renderTasks();*/
