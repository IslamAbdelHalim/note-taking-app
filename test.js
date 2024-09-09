import fs from 'fs';
import { getAllNotes } from './app/notesHandler.js';

const interpolate = (html, data) => {
  return html.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, placeholder) => {
    return data[placeholder] || '';
  });
}

const formatNotes = (notes) => {
  return notes.map((note) => {
    return `<div class="note">
      <p>${note.content}</p>
      <div class="tags">
        ${note.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>`
  }).join('\n');
}

const server = async () => {
  const HTML_Path = new URL('./templates/template.html', import.meta.url).pathname;
  const template = fs.readFileSync(HTML_Path, 'utf-8');
  const data = await getAllNotes();
  console.log(data)
  const html = interpolate(template, {notes: formatNotes(data)});
  console.log(html);
}

server();

