import http from 'node:http';
import fs from 'fs';
import { getAllNotes } from './app/notesHandler.js';


const interpolate = (html, data) => {
  return html.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, placeholder) => {
    return data[placeholder] || '';
  });
};

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


const server = http.createServer(async(req, res) => {
  const HTML_Path = new URL('./templates/template.html', import.meta.url).pathname;
  const template = fs.readFileSync(HTML_Path, 'utf-8');
  const data = await getAllNotes();
  const html = interpolate(template, {notes: formatNotes(data)});

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
});

server.listen(4000, 'localhost', () => {
  console.log('server is running in port 4000');
});
