import { notesData } from './data.js';
import { renderNotesTable } from './notes.js';
import { initAddButton } from './addNotes.js';
import { updateSummaryTable } from './summary.js';
import { openModal, closeModal } from './modalNewNote.js';
import { closeEditModal } from './modalEditNote.js';


renderNotesTable(notesData);
initAddButton();
updateSummaryTable();
openModal();
closeModal();
closeEditModal();
