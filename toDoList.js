const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let tasks = [];

function addTask() {
    const task = taskInput.value.trim();
    if (task !== "") {
        tasks.push(task); // Add task to the array
        taskInput.value = ""; // Clear input field
        renderTasks(); // Re-render tasks
    }
}

function renderTasks() {
    taskList.innerHTML = ""; // Clear the task list
    tasks.forEach((task, index) => {
        const li = document.createElement('li'); // Create a new <li> element
        li.innerHTML = `${task} 
                        <button onclick="editTask(${index})">Edit</button>
                        <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li); // Append the <li> to the task list
    });
}

function editTask(index) {
    const newTask = prompt("Edit your task:", tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask.trim(); // Update the task with new value
        renderTasks(); // Re-render tasks
    }
}

function deleteTask(index) {
    tasks.splice(index, 1); // Remove the task from the array
    renderTasks(); // Re-render tasks
}
