import { notesData } from "./data";

export function handleArchiveNoteClick(){
  const noteToArchive = notesData.find((note) => note.id === noteId);
  console.log(noteToArchive)
}