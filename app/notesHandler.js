import crypto from 'crypto';
import { getData, saveData, insertNote } from "./dbHandler.js";


export const newNote = async (note, tags) => {
  const newNote = {
    id: crypto.randomUUID(),
    Date: Date.now(),
    content: note,
    tags
  }

  await insertNote(newNote);
  return newNote;
};

export const getAllNotes = async () => {
  const { notes } = await getData();
  return notes;
}

export const findByContent = async (content) => {
  const allNotes = await getAllNotes();
  const note = await allNotes.find((note) => note.content.toLowerCase().includes(content.toLowerCase()));
  return note;
}

export const findByDate = async (date) => {
  const allNotes = await getAllNotes();
  const note = await allNotes.filter((note) => new Date(note.Date).toString().split(" ")[2] == date);
  return note;
}

export const removeNoteById = async(id) => {
  const allNotes = await getAllNotes();
  const notes = allNotes.filter((note) => note.id !== id)
  await saveData({notes})
}

export const removeAllNotes = _ => saveData({notes: []})