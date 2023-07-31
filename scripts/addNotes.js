import { notesData } from './data.js';
import { renderNotesTable } from './notes.js';
import { updateSummaryTable } from './summary.js';
import { closeModal } from './modalNewNote.js';

const addFormContainer = document.getElementById('addFormContainer');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', showAddForm);

function showAddForm() {
  addButton.style.display = 'none';
  addFormContainer.innerHTML = `
    <form id="addForm">
      <label for="name">Name:</label>
      <input type="text" id="name" required><br>
      <label for="category">Category:</label>
      <select id="category" required>
        ${createCategoryOptions()}
      </select><br>
      <label for="content">Content:</label>
      <textarea id="content" required></textarea><br>
      <div class="form__buttons">
        <button type="submit" id="addTaskBtn">Add Task</button>
        <button type="button" id="cancelButton">Cancel</button>
      </div>
    </form>
  `;

  const addForm = document.getElementById('addForm');
  addForm.addEventListener('submit', handleAddNoteSubmit);

  const cancelButton = document.getElementById('cancelButton');
  cancelButton.addEventListener('click', cancelAddForm);
}

function handleAddNoteSubmit(event) {
  event.preventDefault();

  const name = event.target.elements.name.value;
  const content = event.target.elements.content.value;
  const category = event.target.elements.category.value;
  const dates = findDatesInContent(content); 

  const id = `note_${Date.now()}`;

  const newNote = {
    id,
    name,
    createTime: new Date().toISOString(),
    content,
    category,
    dates,
  };

  notesData.push(newNote);

  renderNotesTable(notesData);
  updateSummaryTable(notesData);
  cancelAddForm();
}

function cancelAddForm() {
  addFormContainer.innerHTML = '';
  addButton.style.display = 'block';
  closeModal();
}

export function initAddButton() {
  addButton.textContent = 'Add Note';
}

function createCategoryOptions() {
  return notesData
    .map((note) => `<option value="${note.category}">${note.category}</option>`)
    .join('');
}

export function findDatesInContent(text) {
  const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g;
  const matches = text.match(dateRegex);

  if (matches) {
    const uniqueDates = new Set();

    matches.forEach((date) => {
      const [day,  month,  year] = date.split('/');
      const formattedDate = `${month}/${day}/${year}`;
      uniqueDates.add(formattedDate);
    });

    return Array.from(uniqueDates);
  } else {
    return [];
  }
}




