const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const tasks = document.querySelector(".list-container");
const listCount = document.querySelector(".listCount");

let count = 0;

//input event listener to check the input value
taskInput.addEventListener("input", () => {
  let inputVal = taskInput.value.trim();

  if (inputVal === "") {
    addBtn.setAttribute("disabled", true);
  } else {
    addBtn.removeAttribute("disabled");
  }
});

addBtn.addEventListener("click", () => {
  const inputVal = taskInput.value.trim();

  if (inputVal === "") {
    addBtn.setAttribute("disabled", true);
    return;
  }

  addBtn.removeAttribute("disabled");

  let taskList = document.createElement("li");
  taskList.innerHTML = `<div>${inputVal}</div>
  <div class="taskBtns">
  <button class="btns border-0 ms-2 completeBtn">Complete</button>
  <button class="btns border-0 ms-2 delBtn">Delete</button>
  </div>`;

  tasks.appendChild(taskList);

  count++;
  updateListCount();

  function updateListCount() {
    listCount.innerText = `Total tasks : ${count}`;
    if (count > 0) {
      tasks.style.padding = "1rem";
    } else {
      tasks.style.padding = "0";
    }
  }

  taskInput.value = "";

  const completeBtn = taskList.querySelector(".completeBtn");
  const delBtn = taskList.querySelector(".delBtn");

  completeBtn.addEventListener("click", (element) => {
    const btn = element.target;
    btn.innerText = btn.innerText === "Complete" ? "Completed" : "Complete";
    taskList.classList.toggle("changeColor");
  });

  delBtn.addEventListener("click", () => {
    tasks.removeChild(taskList);
    count--;
    updateListCount();
  });
});
