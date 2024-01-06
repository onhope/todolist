const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");

todoInput.addEventListener("keypress", (e)=> {
  // console.log(e);
  // 엔터를 누를 경우 keycode는 13
  if (e.keyCode === 13) {
    generateTodo(todoInput.value);
    todoInput.value = "";
  }
})

const generateTodo = (todo) => {
  // css 작업 li태그
  const li = document.createElement("li");
  const likeSpan = generateLike();
  const ItemSpan= generateItem(todo);
  const ManageSpan = generateManage();

  li.appendChild(likeSpan);
  li.appendChild(ItemSpan);
  li.appendChild(ManageSpan);

  todoList.appendChild(li);
}

// 좋아요 표시 함수
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

// 입력한 todo 생성 함수 
const generateItem = (todo) => {
  const span = document.createElement("span");
  span.classList.add("todo-item");
  span.innerText = todo;
  return span;
}

// todo 체크, 삭제 함수
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

  // 체크 클릭 이벤트
  icon1.addEventListener("click", (e) => {
    const li = e.target.parentNode.parentNode;
    console.log(e);
    li.classList.add("done");
  })

  // 삭제 클릭 이벤트 
  icon2.addEventListener("click", (e) => {
    const li = e.target.parentNode.parentNode;
    todoList.removeChild(li);
  })
  
  span.appendChild(icon1);
  span.appendChild(icon2);

  return span;
}