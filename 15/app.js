let taskList = new Array();
let id = 0;
let isCompletedTaskListOpen = false;

//get data from localStorage
const getLocalData = () => {
  taskList = JSON.parse(localStorage.getItem("taskList") || "[]");
  id = Math.max(
    ...taskList.map((ele) => ele.id),
    Math.floor(Math.random() * 100)
  );
};

//store data to localStorage
const storeDataLocally = () => {
  localStorage.setItem("taskList", JSON.stringify(taskList));
};

// create task element
const createTaskElement = (task) => {
  const checkbox = document.createElement("input");
  checkbox.classList.add("check");
  checkbox.type = "checkbox";
  checkbox.id = `checkbox-${task.id}`;
  checkbox.setAttribute("oninput", `setTaskCompleted(${task.id})`);
  checkbox.checked = task.isCompleted;

  const title = document.createElement("p");
  title.classList.add("title");
  title.id = `title-${task.id}`;
  title.innerText = task.title;

  const description = document.createElement("p");
  description.classList.add("desc");
  description.id = `desc-${task.id}`;
  description.innerText = task.description;

  const textContent = document.createElement("div");
  textContent.classList.add("text-content");
  textContent.setAttribute("onclick", `makeContentEditable(${task.id})`);
  textContent.appendChild(title);
  textContent.appendChild(description);

  const closeBtn = document.createElement("i");
  closeBtn.classList.add("fa-solid", "fa-xmark");
  closeBtn.setAttribute("onclick", `removeTask(${task.id})`);

  const saveBtn = document.createElement("i");
  saveBtn.classList.add("fa-solid", "fa-floppy-disk");
  saveBtn.setAttribute("id", `save-${task.id}`);
  saveBtn.setAttribute("onclick", `updateTask(${task.id})`);

  const actionBtns = document.createElement("div");
  actionBtns.classList.add("action-btns");
  actionBtns.appendChild(closeBtn);
  actionBtns.appendChild(saveBtn);

  const taskEle = document.createElement("div");
  taskEle.classList.add("task");
  taskEle.setAttribute("id", `task-${task.id}`);
  if (task.isCompleted) taskEle.classList.add("completed-task");
  taskEle.appendChild(checkbox);
  taskEle.appendChild(textContent);
  taskEle.appendChild(actionBtns);

  return taskEle;
};

//render all Task
const pendingTaskContainer = document.querySelector(".pending");
const completedTaskContainer = document.querySelector(".completed");

const renderAllTask = () => {
  //store locally
  storeDataLocally();
  let pendingTaskCount = 0;

  //clear all the children
  pendingTaskContainer.replaceChildren();
  completedTaskContainer.replaceChildren();

  taskList.forEach((task) => {
    if (task.isCompleted)
      completedTaskContainer.prepend(createTaskElement(task));
    else {
      pendingTaskCount += 1;
      pendingTaskContainer.prepend(createTaskElement(task));
    }
  });

  if (pendingTaskCount == 0) {
    const placeholderEle = document.createElement("div");
    placeholderEle.classList.add("empty-pending-task");
    placeholderEle.innerText = "No Pending Task";
    pendingTaskContainer.appendChild(placeholderEle);
  }
};

//set task completed
const setTaskCompleted = (id) => {
  const index = taskList.indexOf(taskList.filter((ele) => ele.id == id)[0]);
  taskList[index].isCompleted = !taskList[index].isCompleted;

  renderAllTask();
};

//remove task
const removeTask = (id) => {
  const index = taskList.indexOf(taskList.filter((ele) => ele.id == id)[0]);
  taskList.splice(index, 1);

  renderAllTask();
};

// update task
const updateTask = (id) => {
  const index = taskList.indexOf(taskList.filter((ele) => ele.id == id)[0]);
  taskList[index].title = document.querySelector(`#title-${id}`).innerText;
  taskList[index].description = document.querySelector(`#desc-${id}`).innerText;

  storeDataLocally();

  document
    .querySelector(`#title-${id}`)
    .setAttribute("contenteditable", "false");
  document
    .querySelector(`#desc-${id}`)
    .setAttribute("contenteditable", "false");
  document.querySelector(`#save-${id}`).style.display = "none";
};

//make content editable
const makeContentEditable = (id) => {
  document
    .querySelector(`#title-${id}`)
    .setAttribute("contenteditable", "true");
  document.querySelector(`#desc-${id}`).setAttribute("contenteditable", "true");
  document.querySelector(`#save-${id}`).style.display = "block";

  document
    .querySelector(`#task-${id}`)
    .addEventListener("mouseout", console.log("its not working"));
};

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
  taskList.push(newTask);

  //store locally
  storeDataLocally();

  //render newTask
  renderAllTask();
});

(function init() {
  getLocalData();
  renderAllTask();
})();

//toggle completed task section
const toggleCompletedTask = () => {
  const completedTaskContainer = document.querySelector(
    ".completed-task-container"
  );
  completedTaskContainer.classList.toggle("visible");

  isCompletedTaskListOpen = !isCompletedTaskListOpen;
};
