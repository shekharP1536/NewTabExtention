function showMessage(message) {
  var messageElement = document.getElementById('message');
  messageElement.innerHTML = message;
  messageElement.style.display = "block";
  setTimeout(function() {
    messageElement.innerHTML = '';
    messageElement.style.display = "none";
  }, 5000);
}
const messagebox = document.getElementById('message');
const taskList = document.getElementById('task-list');
const inputTask = document.getElementById('input-task');
const addTaskBtn = document.getElementById('add-task-btn');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

messagebox.addEventListener("click", function(){
  messagebox.style.display = "none";
})
function displayTasks() {
  taskList.innerHTML = '';
  tasks.sort((a, b) => {
    if (a.important && !b.important) {
      return -1;
    }
    if (!a.important && b.important) {
      return 1;
    }
    return 0;
  });
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerText = task.title;
    li.setAttribute('data-index', index);

    if (task.important) {
      li.classList.add('important');
    }

    if (task.done) {
      li.classList.add('done');
    }


    const deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', deleteTask);
    deleteBtn.title = "delete";

    const importantBtn = document.createElement('span');
    importantBtn.innerHTML = '<i class="fa fa-star"></i>';
    importantBtn.classList.add('important');
    if (task.important) {
      importantBtn.classList.add('activee');
      li.classList.add('imp');
      importantBtn.title = "remove from important"
    }
    importantBtn.addEventListener('click', toggleImportant);
    importantBtn.title = "mark as important";

    const doneBtn = document.createElement('span');
    doneBtn.innerHTML = '<i class="fa fa-check"></i>';
    doneBtn.classList.add('done');
    if (task.done) {
      doneBtn.classList.add('activee');
      doneBtn.title = "not completed"
      li.classList.add('completed');
    }
    doneBtn.addEventListener('click', toggleDone);
    doneBtn.title = "completed"



    const editBtn = document.createElement('span');
    editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
    editBtn.classList.add('edit');
    editBtn.addEventListener('click', editTask);

    li.appendChild(deleteBtn);
    li.appendChild(importantBtn);
    li.appendChild(doneBtn);
    li.appendChild(editBtn);

    taskList.appendChild(li);
  });
}

function addTask() {
  const title = inputTask.value.trim();

  if (title) {
    const task = {
      title,
      important: false,
      done: false
    };

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    inputTask.value = '';
    showMessage('Task created');
    displayTasks();
  }
}

function deleteTask() {
  const index = parseInt(this.parentNode.getAttribute('data-index'));
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
  showMessage('Task deleted');
}

function toggleImportant() {
  const index = parseInt(this.parentNode.getAttribute('data-index'));
  tasks[index].important = !tasks[index].important;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
  showMessage('mar/unmark Done');
}

function toggleDone() {
  const index = parseInt(this.parentNode.getAttribute('data-index'));
  tasks[index].done = !tasks[index].done;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
  showMessage('Task completed');
}

function editTask() {
  const index = parseInt(this.parentNode.getAttribute('data-index'));
  const task = tasks[index];

  const li = document.createElement('li');
  li.innerHTML = `<input type="text" value="${task.title}"><button class="editsub_btn">Save</button><button class="editsub_btn">Cancel</button>`;
  li.setAttribute('data-index', index);

  const saveBtn = li.querySelector('button:first-of-type');
  saveBtn.addEventListener('click', saveEditedTask);

  const cancelBtn = li.querySelector('button:last-of-type');
  cancelBtn.addEventListener('click', displayTasks);

  this.parentNode.replaceWith(li);
}

function saveEditedTask() {
  const index = parseInt(this.parentNode.getAttribute('data-index'));
  const li = this.parentNode;
  const input = li.querySelector('input');
  const newTitle = input.value.trim();
  showMessage('Task edited');
  if (newTitle) {
    tasks[index].title = newTitle;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  }
}



addTaskBtn.addEventListener('click', addTask);
displayTasks();
