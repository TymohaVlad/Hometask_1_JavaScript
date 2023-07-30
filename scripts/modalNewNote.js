const addNewModal = document.getElementById("addNewModal");
const btnOpenNew = document.getElementById("addButton");

 function openModal() {
  addNewModal.style.display = "block";
}

 function closeModal() {
  addNewModal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == addNewModal) {
    closeModal();
  }
};
btnOpenNew.onclick = openModal;

export { openModal, closeModal };
