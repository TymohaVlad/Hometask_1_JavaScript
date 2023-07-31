import { notesData } from './data.js';
import {
  handleArchivedAllNotes,
  handleUnarchiveNoteClick,
} from './archived.js';

export function updateSummaryTable() {
  const tableBody = document.querySelector('#summaryTable tbody');
  const categoryCounts = {};

  for (const note of notesData) {
    const category = note.category;
    const isArchived = note.archived;
    const counterKey = isArchived ? 'archived' : 'active';

    if (!categoryCounts[category]) {
      categoryCounts[category] = { active: 0, archived: 0 };
    }

    categoryCounts[category][counterKey]++;
  }

  tableBody.innerHTML = '';

  for (const category in categoryCounts) {
    const { active, archived } = categoryCounts[category];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${category}</td>
      <td>${active}</td>
      <td>${archived}</td>
      <td></td>
    `;

    if (archived > 0) {
      const unarchiveButton = document.createElement('button');
      unarchiveButton.classList.add('fa', 'fa-upload', 'setings');
      unarchiveButton.addEventListener('click', () => {
        const noteId = notesData.find(
          (note) => note.category === category && note.archived
        ).id;
        handleUnarchiveNoteClick(noteId);
      });

      const lastCell = row.querySelector('td:last-child');
      lastCell.appendChild(unarchiveButton);
    }

    const archiveAllButton = document.getElementById('archivedAll');
    archiveAllButton.addEventListener('click', handleArchivedAll);

    function handleArchivedAll() {
      notesData.forEach((note) => {
        if (!note.archived) {
          handleArchivedAllNotes(note.id);
        }
      });

      updateSummaryTable();
    }

    tableBody.appendChild(row);
  }
}
