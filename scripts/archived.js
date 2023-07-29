
import { notesData } from './data.js';
import { renderNotesTable } from './notes.js';
import { updateSummaryTable } from './summary.js';

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
