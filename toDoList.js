const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let tasks = [];

function addTask() {
    const task = taskInput.value.trim();
    if (task !== "") {
        tasks.push(task); 
        taskInput.value = ""; 
        renderTasks(); 
    }
}

function renderTasks() {
    taskList.innerHTML = ""; 
    tasks.forEach((task, index) => {
        const li = document.createElement('li'); 
        li.innerHTML = `${task} 
                        <button onclick="editTask(${index})">Edit</button>
                        <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li); 
    });
}

function editTask(index) {
    const newTask = prompt("Edit your task:", tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask.trim(); 
        renderTasks(); 
    }
}

function deleteTask(index) {
    tasks.splice(index, 1); 
    renderTasks(); 
}
