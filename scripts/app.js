import { notesData } from './data.js';
import { renderNotesTable } from './notes.js';
import { initAddButton } from './addNotes.js'

initAddButton()
renderNotesTable(notesData);

