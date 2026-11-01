let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <div class="actions">
                <button class="edit" onclick="editTask(${index})">Edit</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    let text = taskInput.value.trim();
    if (text === '') { alert("Please enter a task"); return; }
    tasks.push(text);
    taskInput.value = '';
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function editTask(index) {
    let newTask = prompt("Edit your task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== '') {
        tasks[index] = newTask.trim();
        saveTasks();
        renderTasks();
    }
}

// Enter key to add
taskInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') addTask(); });

// Initial render
renderTasks();