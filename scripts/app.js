import { notesData } from './data.js';
import { renderNotesTable } from './notes.js';
import { initAddButton } from './addNotes.js'
import { updateSummaryTable } from './summary.js';
   
initAddButton()
renderNotesTable(notesData);
updateSummaryTable()



