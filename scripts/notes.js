import { notesData } from './data.js';
import { handleEditNoteClick, handleSaveChangesClick } from './edit.js';

function formatDate(dateString) {
  const dateObj = new Date(dateString);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1; 
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
}

export function renderNotesTable(notes) {
  const tableBody = document.querySelector('#notesTable tbody');

  tableBody.innerHTML = '';

  notes.forEach((note) => {
    const row = document.createElement('tr');

    const cresteName = document.createElement('td');
    cresteName.textContent = note.name;
    row.appendChild(cresteName);

    const createTimeCell = document.createElement('td');
    const createTime = new Date(note.createTime);
    createTimeCell.textContent = createTime.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    row.appendChild(createTimeCell);

    const categoryCell = document.createElement('td');
    categoryCell.textContent = note.category;
    row.appendChild(categoryCell);

    const contentCell = document.createElement('td');
    contentCell.textContent = note.content;
    row.appendChild(contentCell);

    const datesCell = document.createElement('td');
    datesCell.textContent = note.dates
      .map((date) => formatDate(date))
      .join(' , ');
    row.appendChild(datesCell);

    const actionCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.setAttribute('data-id', note.id);
    editButton.addEventListener('click', () => handleEditNoteClick(note.id));
    actionCell.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () =>
      handleDeleteNoteClick(note.id)
    );
    actionCell.appendChild(deleteButton);

    row.appendChild(actionCell);
    tableBody.appendChild(row);
  });
}

function handleDeleteNoteClick(noteId) {
  const noteIndexToDelete = notesData.findIndex((note) => note.id === noteId);

  if (noteIndexToDelete !== -1) {
    notesData.splice(noteIndexToDelete, 1);
    renderNotesTable(notesData);
  }
}
