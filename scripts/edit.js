import { notesData } from './data.js';
import { closeEditModal } from './modalEditNote.js';
import { renderNotesTable } from './notes.js';
import { findDatesInContent } from './addNotes.js'; 

const editFormContainer = document.getElementById('editFormContainer');

export function handleEditNoteClick(noteId) {
  const noteToEdit = notesData.find((note) => note.id === noteId);
  const datesInContent = findDatesInContent(noteToEdit.content); 

  editFormContainer.innerHTML = `
    <form id="editForm">
      <label for="editCategory">Category:</label>
      <select id="editCategory">
        ${createCategoryOptions(noteToEdit.category)}
      </select><br>
      <label for="editContent">Content:</label>
      <textarea id="editContent">${noteToEdit.content}</textarea><br>
      <div class="edit__btn-container">
        <button class="save-button" data-id="${noteId}">Save Changes</button>
        <button type="button" class="close-button">Close</button>
      </div>
    </form>
  `;

  const saveButton = editFormContainer.querySelector('.save-button');
  saveButton.addEventListener('click', () => {
    handleSaveChangesClick(noteId);
    closeEditModal();
  });

  const closeEditButton = editFormContainer.querySelector('.close-button');
  closeEditButton.addEventListener('click', () => {
    closeEditModal();
  });

}

export function handleSaveChangesClick(noteId) {
  const editedContent = document.querySelector('#editContent').value;
  const editedCategory = document.querySelector('#editCategory').value;
  
  const noteToEdit = notesData.find((note) => note.id === noteId);

  if (editedContent.trim() !== '') {
    noteToEdit.content = editedContent.trim();
    noteToEdit.category = editedCategory;
    noteToEdit.dates = findDatesInContent(editedContent); 
    editFormContainer.innerHTML = '';

    renderNotesTable(notesData);
  }
}

function createCategoryOptions(selectedCategory) {
  return notesData
    .map(
      (note) => `<option value="${note.category}" ${
        note.category === selectedCategory ? 'selected' : ''
      }>${note.category}</option>`
    )
    .join('');
}
