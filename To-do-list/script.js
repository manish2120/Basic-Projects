const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const tasks = document.querySelector(".list-container");

//input event listeners to check the input value
taskInput.addEventListener("input", () => {
  const inputVal = taskInput.value.trim();

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

  const completeBtn = taskList.querySelector(".completeBtn");
  const delBtn = taskList.querySelector(".delBtn");

  completeBtn.addEventListener("click", (element) => {
    const btn = element.target;
    btn.innerText = btn.innerText === "Complete" ? "Completed" : "Complete";
    btn.parentElement.parentElement.classList.toggle("changeColor");
  });

  delBtn.addEventListener("click", (element) => {
    const btn = element.target;
    btn.parentElement.parentElement.style.display = "none";
  });
});
