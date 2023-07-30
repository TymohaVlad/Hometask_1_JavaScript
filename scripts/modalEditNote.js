let modal, btn;

function openEditModal() {
  modal.style.display = 'block';
}

function closeEditModal() {
  modal.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
  modal = document.getElementById("editModal");
  btn = document.getElementById("editBtn");

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  btn.onclick = openEditModal;
});

export { openEditModal, closeEditModal };
