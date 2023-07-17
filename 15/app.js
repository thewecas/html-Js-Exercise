let pendingTask = new Array();
let completedTask = new Array();
let id = 0;

//get data from localStorage
const getLocalData = () => {
  pendingTask = JSON.parse(localStorage.getItem("pendingTask") || "[]");
  // console.log(typeof pending);
  // console.log(pending);
  completedTask = JSON.parse(localStorage.getItem("completedTask") || "[]");
  // pending.forEach((ele) => {
  //   pendingTask.push(ele);
  // });
  // competed.forEach((ele) => {
  //   completedTask.push(ele);
  // });
};

//store data to localStorage
const storeDataLocally = () => {
  localStorage.setItem("pendingTask", JSON.stringify(pendingTask));
  localStorage.setItem("completedTask", JSON.stringify(completedTask));
};

// create task element
const createTaskElement = (task) => {
  const checkbox = document.createElement("input");
  checkbox.classList.add("check");
  checkbox.type = "checkbox";
  checkbox.id = `${task.id}-checkbox`;
  checkbox.setAttribute("oninput", "setTaskCompleted(" + id + ")");
  checkbox.checked = task.isCompleted;

  const title = document.createElement("p");
  title.classList.add("title");
  title.id = `${task.id}-title`;
  title.innerText = task.title;

  const description = document.createElement("p");
  description.classList.add("desc");
  description.id = `${task.id}-desc`;
  description.innerText = task.description;

  const taskEle = document.createElement("div");
  taskEle.classList.add("task");
  taskEle.appendChild(checkbox);
  taskEle.appendChild(title);
  taskEle.appendChild(description);

  return taskEle;
};

//render all pendingTask
const pendingTaskContainer = document.querySelector(".pending");
const renderPendingTask = () => {
  pendingTask.forEach((task) => {
    pendingTaskContainer.prepend(createTaskElement(task));
  });
};

//render all CompletedTask
const completedTaskContainer = document.querySelector(".completed");
const renderCompletedTask = () => {
  completedTask.forEach((task) => {
    pendingTaskContainer.prepend(createTaskElement(task));
  });
};

const setTaskCompleted = (id = {});

//get form input
const form = document.querySelector(".input-Form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#input-title").value;
  const description = document.querySelector("#input-description").value;

  form.blur();
  form.reset();

  const newTask = {
    id: id++,
    title: title,
    description: description,
    isCompleted: false,
    createdAt: new Date(),
  };

  // add to array
  pendingTask.push(newTask);

  //store locally
  storeDataLocally();

  //render newTask
  pendingTaskContainer.prepend(createTaskElement(newTask));
});

(function init() {
  getLocalData();
  renderPendingTask();
  renderCompletedTask();
})();

const getTask = (id) => {};
