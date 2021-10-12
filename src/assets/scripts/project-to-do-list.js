const formAddTask = document.querySelector("#form-add-task");
const input = formAddTask.elements["input"];
const submit = formAddTask.elements["submit"];
const tasksList = document.querySelector("#tasks-list");
const tasksCounter = document.querySelector("#tasks-counter");

const taskButtonComplete = {
    text: "Completar",
    action: "task-complete"
}
const taskButtonUncomplete = {
    text: "Descompletar",
    action: "task-uncomplete"
}
const taskButtonRename = {
    text: "Renombrar",
    action: "task-rename"
}
const taskButtonDuplicate = {
    text: "Duplicar",
    action: "task-duplicate"
}
const taskButtonDelete = {
    text: "Eliminar",
    action: "task-delete"
}

const taskButtons = [taskButtonComplete, taskButtonRename, taskButtonDuplicate, taskButtonDelete];

formAddTask.addEventListener("submit", function(e) {
    e.preventDefault();

    if (isValidInput(input)) {
        const taskName = input.value.trim();
        const taskItem = createTaskItem(taskName);
        tasksList.append(taskItem);
        updateTaskCount
        input.value = "";
    }
});

tasksList.addEventListener("click", function(e) {
    const taskButtonClicked = e.target.closest("[data-element='task-button']");

    if (taskButtonClicked)  {
        const taskItem = taskButtonClicked.closest("[data-element='task-item']");
        const taskContent = taskItem.querySelector("[data-element='task-content']");

        switch (taskButtonClicked.dataset.action) {
            case "task-complete": {
                completeTask(taskItem, taskContent);
                changeTaskButton(taskButtonClicked, taskButtonUncomplete);
                updateTaskCount();
                break;
            }
            case "task-uncomplete": {
                uncompleteTask(taskItem, taskContent);
                changeTaskButton(taskButtonClicked, taskButtonComplete);
                updateTaskCount();
                break;
            }
            case "task-rename": {
                renameTask(taskContent);
                break;
            }
            case "task-duplicate": {
                const duplicatedTask = duplicateTask(taskItem);
                taskItem.after(duplicatedTask);
                updateTaskCount();
                break;
            }
            case "task-delete": {
                deleteTask(taskItem, taskContent);
                updateTaskCount();
                break;
            }
        }
    }
});

function isValidInput(input) {
    return input.value.trim() ? true : false;
}

function createTaskButton({text, action}) {
    const button = document.createElement("button");
    button.textContent = text;
    button.dataset.element = "task-button";
    button.dataset.action = action;
    return button;
}

function createTaskItem(taskName) {
    // taskItem > taskContent + taskActions
    const taskItem = document.createElement("li");
    taskItem.dataset.element = "task-item";
    taskItem.dataset.completed = "false";
    taskItem.classList.add("task-item", "layout-stack-xs");

    // taskContent > task name
    const taskContent = document.createElement("div");
    taskContent.textContent = taskName;
    taskContent.dataset.element = "task-content";
    taskItem.append(taskContent);

    // taskActions > buttons to Complete, Rename, Duplicate, Delete...
    const taskActions = document.createElement("div");
    taskActions.dataset.element = "task-actions";
    taskActions.classList.add("task-actions", "layout-cluster-xs");
    taskButtons.forEach(taskButton => taskActions.append(createTaskButton(taskButton)));

    taskItem.append(taskActions);

    return taskItem;
}

function deleteTask(taskItem, currentTaskContent) {
    const currentTaskName = currentTaskContent.textContent;
    const confirmation = confirm(`¿Confirmas que quieres eliminar "${currentTaskName}"?`);
    if (confirmation) taskItem.remove();
}

function duplicateTask(taskItem) {
    return taskItem.cloneNode(true);
}

function changeTaskButton(taskButtonClicked, {text, action}) {
    taskButtonClicked.textContent = text;
    taskButtonClicked.dataset.action = action;
}

function completeTask(taskItem, taskContent) {
    taskItem.dataset.completed = "true";
    taskContent.classList.add("completed");
}

function uncompleteTask(taskItem, taskContent) {
    taskItem.dataset.completed = "false";
    taskContent.classList.remove("completed");
}

function renameTask(currentTaskContent) {
    const currentTaskName = currentTaskContent.textContent;
    let newTaskName = prompt(`Renombrar "${currentTaskName}" a:`);
    if (newTaskName !== null) {
        newTaskName = newTaskName.trim();
        if (newTaskName) {
            currentTaskContent.textContent = newTaskName;
        }
    }
}

function updateTaskCount() {
    tasksCounter.textContent = tasksList.querySelectorAll("[data-completed='false']").length;
}