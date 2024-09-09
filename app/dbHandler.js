import fs from 'fs/promises'
import DB_PATH from '../db/db.js'


export const getData = async() => {
  const data = await fs.readFile(DB_PATH, 'utf-8');
  return JSON.parse(data);
}

export const saveData = async(data) => {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}

export const insertNote = async (note) => {
  const db = await getData();
  
  db.notes.push(note);

  await saveData(db);
}