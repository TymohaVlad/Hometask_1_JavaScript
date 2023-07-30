import { notesData } from './data.js';
import { renderNotesTable } from './notes.js';
import { initAddButton } from './addNotes.js';
import { updateSummaryTable } from './summary.js';
import { openModal, closeModal } from './modalNewNote.js';
// import { openModalEdit,closeModalEdit } from './modalEditNote.js';

initAddButton();
renderNotesTable(notesData);
updateSummaryTable();
openModal();
closeModal();
// openModalEdit();
// closeModalEdit();
