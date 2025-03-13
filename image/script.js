// Dapatkan elemen-elemen yang dibutuhkan
const modal = document.getElementById("modal");
const btn = document.getElementById("btn-detail");
const closeBtn = document.getElementsByClassName("close-btn")[0];

// Ketika tombol Detail diklik, tampilkan modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Ketika tombol silang diklik, tutup modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Ketika pengguna mengklik di luar modal, tutup modal
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
