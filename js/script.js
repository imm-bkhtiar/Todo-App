// menangkap element tombol dan input
const tambahList = document.querySelector(".tombol");
const input = document.getElementById("input");

//memberikan event click pada tombol tambahkan
tambahList.addEventListener("click", function () {
    if (input.value === "") {
        alert("anda belum memasukan kegiatan");
    } else {
        //menangkap element list element
        let listContainer = document.querySelector(".container-list");
        let listHTML = listContainer.innerHTML;
        //memasukan element list ke html
        listHTML += `    
    <ul class="container">
       <p class="list">${input.value}</p>
      <div class="aksi">
        <p class="selesai">✓</p>
        <p class="hapus">×</p>
      </div>
    </ul>`;
    
        listContainer.innerHTML = listHTML;
        input.value = "";
        input.focus();
    }

    //menangkap class selesai,
    const wes = document.querySelectorAll(".selesai");

    //memberikan pengulangan untuk tiap element selesai
    for (i = 0; i < wes.length; i++) {
        let inputwes = wes[i];
        inputwes.addEventListener("click", function () {
            inputwes.parentElement.previousElementSibling.classList.toggle(
                "done"
            );
            inputwes.parentElement.parentElement.classList.toggle("donebg");
        });
    }

    //hapus list
    const tombolHapus = document.querySelectorAll(".hapus");
    for (x = 0; x < tombolHapus.length; x++) {
        let hapus = tombolHapus[x];
        hapus.addEventListener("click", function () {
            hapus.parentElement.parentElement.remove();
        });
    }
});
