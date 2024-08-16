const btnTambah = document.querySelector(".container > .head > form button ");
let todoInput = document.querySelector(".container > .head > form input");
const listContainer = document.querySelector(".container > .todo");
let i = localStorage.length > 0 ? localStorage.length : 0;

btnTambah.addEventListener("click", (e) => {
  const listItem = `
 <div class="list" key="${i}">
  <p>${todoInput.value}</p>
  <div class="action">
   <a href="#">Selesai</a>
   <a href="#">Hapus</a>
  </div>
 </div>`;
  listContainer.innerHTML += listItem;
  localStorage.setItem(`${i++}`, todoInput.value);
  e.preventDefault();
  todoInput.value = "";
});

document.addEventListener("DOMContentLoaded", () => {
  const storage = Object.entries(localStorage);
  storage.sort((a, b) => {
    return parseInt(a[0]) - parseInt(b[0]);
  });

  storage.forEach(([i, value]) => {
    const listItem = `
     <div class="list" key="${i}">
       <p>${value}</p>
       <div class="action">
         <a href="#">Selesai</a>
         <a href="#">Hapus</a>
       </div>
     </div>`;

    listContainer.innerHTML += listItem;
  });
});
