const btnTambah = document.querySelector(".container > .head > form button ");
const todoInput = document.querySelector(".container > .head > form input");
const listContainer = document.querySelector(".container > .todo");

const getTodo = () => {
  let todos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  return todos;
};

btnTambah.addEventListener("click", (e) => {
  const todos = getTodo();
  const createTodo = {
    id: Date.now(),
    text: todoInput.value,
    selesai: false,
  };

  const listItem = `
  <div class="list" key="${createTodo.id}">
    <p>${createTodo.text}</p>
    <div class="action">
      <a href="#">Hapus</a>
      <a href="#">Selesai</a>
    </div>
  </div>`;

  listContainer.innerHTML += listItem;

  todos.push(createTodo);
  localStorage.setItem(`todos`, JSON.stringify(todos));
  e.preventDefault();
  todoInput.value = "";
  loadbtn();
});

document.addEventListener("DOMContentLoaded", () => {
  const todos = getTodo();
  todos.sort((a, b) => {
    return a.id - b.id;
  });

  todos.forEach((todo) => {
    const listItem = `
     <div class="list ${todo.selesai}" key="${todo.id}">
       <p>${todo.text}</p>
       <div class="action">
         <a href="#">Hapus</a>
         <a href="#">Selesai</a>
       </div>
     </div>`;

    listContainer.innerHTML += listItem;
  });
  loadbtn();
});

const loadbtn = () => {
  const todos = getTodo();
  let lists = listContainer.querySelectorAll(".list");

  lists.forEach((list) => {
    const key = list.getAttribute("key");
    const btnDelete = list.querySelector(".action a:nth-child(1)");
    const btnSelesai = list.querySelector(".action a:nth-child(2)");
    list.classList.remove("false");

    // Funtion di bawah untuk delete list
    btnDelete.addEventListener("click", () => {
      const todos = getTodo();
      const itemTidakRemove = todos.filter((todo) => `${todo.id}` !== key);
      localStorage.setItem("todos", JSON.stringify(itemTidakRemove));
      list.remove();
    });

    //function di bawah untuk centang list
    btnSelesai.addEventListener("click", () => {
      const todos = getTodo();
      itemTidakTerseleksi = todos.filter((todo) => todo.id !== parseInt(key));
      const itemSelesai = todos
        .filter((todo) => `${todo.id}` === key)
        .map((todo) => {
          if (todo.id === parseInt(key)) {
            todo.selesai = true;
          } else {
            todo.selesai = false;
          }
          return todo;
        });

      console.log(itemSelesai);

      list.classList.toggle("true");
      itemTidakTerseleksi.push(itemSelesai[0]);
      localStorage.setItem("todos", JSON.stringify(itemTidakTerseleksi));
    });
  });
};
