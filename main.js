const btnTambah = document.querySelector(".container > .head > form button ");
let todoInput = document.querySelector(".container > .head > form input");
let i = 0;
let lastKey = localStorage.getItem("lastKey");

btnTambah.addEventListener("click", (e) => {
  const listContainer = document.querySelector(".container > .todo");
  if (lastKey) {
    i = parseInt(lastKey);
  }

  localStorage.setItem(`${i++}`, todoInput.value);
  localStorage.setItem("lastKey", `${i}`);

  e.preventDefault();
  todoInput.value = "";
});
