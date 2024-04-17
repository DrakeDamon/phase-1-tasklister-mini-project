document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  // Attach a submit event listener to the form
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form's default submit action

    // Get values from the form inputs
    const newTaskDescription = document.getElementById('new-task-description').value;
    const taskUser = document.getElementById('task-user').value;
    const taskDuration = document.getElementById('task-duration').value;
    const taskDueDate = document.getElementById('task-due-date').value;

    // Create a new task element and append it to the task list
    createTask(newTaskDescription, taskUser, taskDuration, taskDueDate, taskList);

    // Clear the form fields after the task is added
    clearFormFields();
  });
});

function createTask(description, user, duration, date, taskList) {
  // Create a new list item for the task
  const task = document.createElement('li');
  task.textContent = `${description} - Assigned to: ${user}, Duration: ${duration}, Due: ${date}`;

  // Add delete and edit buttons to the task
  const deleteButton = createDeleteButton();
  const editButton = createEditButton(task);

  // Append buttons to the task
  task.appendChild(deleteButton);
  task.appendChild(editButton);

  // Append the task to the task list in the DOM
  taskList.appendChild(task);
}

function createDeleteButton() {
  const button = document.createElement('button');
  button.textContent = 'Delete';
  button.onclick = function() {
    this.parentNode.remove(); // Remove the task from the DOM
  };
  return button;
}

function createEditButton(task) {
  const button = document.createElement('button');
  button.textContent = 'Edit';
  button.onclick = function() {
    const newDetails = prompt("Edit your task (description, user, duration, date)", task.textContent);
    if (newDetails) {
      task.textContent = newDetails; // Update task details
      task.appendChild(createDeleteButton()); // Re-add delete button
      task.appendChild(createEditButton(task)); // Re-add edit button
    }
  };
  return button;
}

function clearFormFields() {
  document.getElementById('new-task-description').value = '';
  document.getElementById('task-user').value = '';
  document.getElementById('task-duration').value = '';
  document.getElementById('task-due-date').value = '';
}
