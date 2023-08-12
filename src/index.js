document.addEventListener("DOMContentLoaded", () => {
  addEventListeners();
});

let taskArr = [];
function addEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit);
  document.getElementById("sort-tasks").addEventListener("change", sortTasks);
}

function handleFormSubmit(e) {
  e.preventDefault();
  console.log(e);
  const task = e.target[0].value;
  const priorityLevel = parseInt(e.target.priority.value);

  const taskObj = { task, priorityLevel };
  taskObjArr.push(taskObj);

  console.log(taskObjArr);

  sortTasks();
  displayTask(task, priorityLevel);
}

function displayTask(task, priorityLevel) {
  const taskUl = document.getElementById("tasks");
  const taskLi = document.createElementById("li");
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteTask);

  taskLi.textContent = task + " ";
  taskLi.style.color = getPriorityColor(priorityLevel);
  taskLi.appendChild(deleteBtn);
  taskUl.appendChild(taskLi);
}

function deleteTask(e) {
  console.log(e);
  e.target.parentNode.remove();
}

function getPriorityColor(priorityLevel) {
  if (priorityLevel === 1) {
    return "red";
  } else if (priorityLevel === 2) {
    return "blue";
  } else {
    return "green";
  }
}

function sortTasks() {
  console.log("in sortTasks");
  const sortTaskSelect = document.getElementById("sort-tasks");
  if (sortTaskSelect.value === "h-l") {
    taskObjArr.sort((a, b) => a.priorityLevel - b.priorityLevel);
  } else {
    taskObjArr.sort((a, b) => b.priorityLevel - a.priorityLevel);
  }
  console.group(taskObjArr);
}
