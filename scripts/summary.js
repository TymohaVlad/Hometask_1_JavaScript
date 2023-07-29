import { notesData } from './data.js';

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
    `;
    tableBody.appendChild(row);
  }
}


