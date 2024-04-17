document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const newTaskDescription = document.getElementById('new-task-description');
    const taskUser = document.getElementById('task-user');
    const taskDuration = document.getElementById('task-duration');
    const taskDueDate = document.getElementById('task-due-date');
    
    const task = document.createElement('li');
    task.textContent = `${newTaskDescription.value} - Assigned to: ${taskUser.value}, Duration: ${taskDuration.value}, Due: ${taskDueDate.value}`;

    // Create Edit Button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
      const inputs = prompt("Edit your task (description, user, duration, date)", task.textContent);
      if (inputs) {
        task.textContent = inputs; // Simple replacement of text
        task.appendChild(deleteButton);
        task.appendChild(editButton);
      }
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      task.remove();
    };
    
    task.appendChild(deleteButton);
    task.appendChild(editButton);
    taskList.appendChild(task);

    // Clear input fields
    newTaskDescription.value = '';
    taskUser.value = '';
    taskDuration.value = '';
    taskDueDate.value = '';
  });
});
