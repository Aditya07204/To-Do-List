// Add a task to the list
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');

    // Create a new task item
    const taskItem = document.createElement('li');
    taskItem.textContent = taskValue;

    // Add "Mark Complete" functionality
    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    // Add "Delete Task" button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}