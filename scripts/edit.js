import { notesData } from './data.js';
import { closeEditModal } from './modalEditNote.js';
import { renderNotesTable } from './notes.js';

const editFormContainer = document.getElementById('editFormContainer');

export function handleEditNoteClick(noteId) {
  const noteToEdit = notesData.find((note) => note.id === noteId);
 
  editFormContainer.innerHTML = `
  <form id="editForm">
    <label for="editCategory">Category:</label>
    <input type="text" id="editCategory" value="${noteToEdit.category}"><br>
    <label for="editContent">Content:</label>
    <input type="text" id="editContent" value="${noteToEdit.content}"><br>
    <label for="editDates">Dates:</label>
    <input type="date" id="editDate" value="${noteToEdit.dates}"><br>
    <div class="edit__btn-container">
    <button class="save-button" data-id="${noteId}">Save Changes</button>
    <button type="button" class="close-button">Close</button>
    </div>
    </form>
  `;

  const saveButton = editFormContainer.querySelector('.save-button');
  saveButton.addEventListener('click', () => {
    handleSaveChangesClick(noteId),
    closeEditModal(); 
  });


  const closeEditButton = editFormContainer.querySelector('.close-button');
  closeEditButton.addEventListener('click', () => {
    closeEditModal(); 
  })
 
}

export function handleSaveChangesClick(noteId) {
  const editedContent = document.querySelector('#editContent').value;
  const editedCategory = document.querySelector('#editCategory').value;
  const editDates = document.querySelector('#editDate').value;  

  const noteToEdit = notesData.find((note) => note.id === noteId);


  if (editedContent.trim() !== '') {
    noteToEdit.content = editedContent.trim();
    noteToEdit.category = editedCategory;
    noteToEdit.dates = [...noteToEdit.dates, editDates]
    editFormContainer.innerHTML = '';

    renderNotesTable(notesData);
  }
  
}
