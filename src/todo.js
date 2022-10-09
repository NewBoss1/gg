const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
}

function paintToDo(toDoSubmit) {
  const li = document.createElement("li");
  li.id = toDoSubmit.id;
  const span = document.createElement("span");
  li.appendChild(span);
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", delToDo);

  li.appendChild(button);
  span.innerText = toDoSubmit.text;
  toDoList.appendChild(li);
}

function inputvalue(event) {
  event.preventDefault();
  const toDoSubmit = toDoInput.value;
  toDoInput.value = "";
  const newToDoObject = {
    text: toDoSubmit,
    id: Date.now()
  };
  paintToDo(newToDoObject);
  toDos.push(newToDoObject);
  saveToDo();
}

toDoForm.addEventListener("submit", inputvalue);

const savedtoDos = localStorage.getItem(TODOS_KEY);

if (savedtoDos !== null) {
  const parsedToDo = JSON.parse(savedtoDos);
  toDos = parsedToDo;
  parsedToDo.forEach(paintToDo);
}
