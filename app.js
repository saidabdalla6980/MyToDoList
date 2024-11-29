// This JavaScript file handles the logic for adding tasks, marking tasks as completed, and deleting tasks.

// Get elements from the DOM
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // If the task input is not empty
    if (taskText !== "") {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskItem.appendChild(taskContent);

        // Add the "Complete" button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = "Complete";
        completeBtn.classList.add('task-btn');
        completeBtn.addEventListener('click', markTaskComplete);
        taskItem.appendChild(completeBtn);

        // Add the "Delete" button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('task-btn', 'delete');
        deleteBtn.addEventListener('click', deleteTask);
        taskItem.appendChild(deleteBtn);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear input field
        taskInput.value = "";
    }
}

// Function to mark a task as completed
function markTaskComplete(event) {
    const taskItem = event.target.parentElement;
    taskItem.classList.toggle('completed');
    event.target.textContent = taskItem.classList.contains('completed') ? 'Undo' : 'Complete';
}

// Function to delete a task
function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Allow pressing Enter to add a task
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});