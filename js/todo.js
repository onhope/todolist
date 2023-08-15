const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");

todoInput.addEventListener("keypress", (e)=> {
  if (e.keyCode === 13) {
    generateTodo(todoInput.value);
    todoInput.value = "";
  }
})

const generateTodo = (todo) => {
  const li = document.createElement("li");
  const likeSpan = generateLike();
  const ItemSpan= generateItem(todo);
  const ManageSpan = generateManage();

  li.appendChild(likeSpan);
  li.appendChild(ItemSpan);
  li.appendChild(ManageSpan);

  todoList.appendChild(li);
}

const generateLike = () => {
  const span = document.createElement("span");
  span.classList.add("todo-like");
  const icon = document.createElement("i");
  icon.classList.add("material-icons")
  icon.classList.add("like")
  icon.innerText = "favorite_border";
  span.appendChild(icon);
  icon.addEventListener("click", () => {
    icon.innerText === "favorite_border" ? 
      icon.innerText = "favorite" : icon.innerText = "favorite_border";
  })
  return span;
}

const generateItem = (todo) => {
  const span = document.createElement("span");
  span.classList.add("todo-item");
  span.innerText = todo;
  return span;
}

const generateManage = () => {
  const span = document.createElement("span");
  span.classList.add("todo-manage");
  const icon1 = document.createElement("i");
  const icon2 = document.createElement("i");
  icon1.classList.add("material-icons")
  icon1.classList.add("check")
  icon1.innerText = "check";
  icon2.classList.add("material-icons")
  icon2.classList.add("clear")
  icon2.innerText = "clear";

  span.appendChild(icon1);
  span.appendChild(icon2);

  return span;
}