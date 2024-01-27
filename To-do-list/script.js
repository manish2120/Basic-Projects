const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const tasks = document.querySelector(".list-container");

addBtn.addEventListener("click", () => {
  let taskList = document.createElement("li");
  const inputVal = taskInput.value;
  taskList.innerHTML = `<span>${inputVal}</span>
  <button class="btns border ms-2 completeBtn">Complete</button>
  <button class="btns border ms-2 delBtn">Delete</button>`;

  let lists = tasks.appendChild(taskList);

  lists.style.backgroundColor = "#424769";

  const completeBtn = taskList.querySelector(".completeBtn");
  const delBtn = taskList.querySelector(".delBtn");

  completeBtn.addEventListener("click", (element) => {
    const btn = element.target;
    btn.innerText = btn.innerText === "Complete" ? "Completed" : "Complete";
    btn.classList.toggle("changeColor");
  });

  delBtn.addEventListener("click", (element) => {
    console.log(element);
    const btn = element.target;
    btn.parentElement.style.display = "none";
  });
});
