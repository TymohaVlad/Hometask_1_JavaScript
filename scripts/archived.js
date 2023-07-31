
import { notesData } from './data.js';
import { renderNotesTable } from './notes.js';
import { updateSummaryTable } from './summary.js';


export function handleArchivedAllNotes() {
  const archivedAllBtn = document.getElementById('archivedAll');

  archivedAllBtn.addEventListener('click', () => {
  
    notesData.forEach((note) => {
      note.archived = true;
    });

    renderNotesTable(notesData);
  });
}

export function handleArchiveNoteClick(noteId) {
  const noteToArchive = notesData.find((note) => note.id === noteId);
  noteToArchive.archived = true; 
  renderNotesTable(notesData); 
  updateSummaryTable(notesData)
}

export function handleUnarchiveNoteClick(noteId) {
  const noteToUnarchive = notesData.find((note) => note.id === noteId);
  noteToUnarchive.archived = false; 
  renderNotesTable(notesData); 
  updateSummaryTable(notesData)
}
