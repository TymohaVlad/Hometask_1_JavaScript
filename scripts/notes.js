function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
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
    datesCell.textContent = note.dates.join(', ');
    row.appendChild(datesCell);

    tableBody.appendChild(row);
  });
}
