import crypto from 'crypto';
import { jest } from '@jest/globals';

jest.unstable_mockModule('../app/dbHandler.js', () => ({
  insertNote: jest.fn(),
  getData: jest.fn(),
  saveData: jest.fn(),
}));

const { insertNote, getData, saveData } = await import('../app/dbHandler.js');
const { newNote, getAllNotes, findByContent } = await import('../app/notesHandler.js');

beforeEach(() => {
  insertNote.mockClear();
  getData.mockClear();
  saveData.mockClear();
});

jest.spyOn(crypto, 'randomUUID').mockReturnValue('mocked-uuid');

test('newNote inserts data and returns it', async () => {
  const note = 'Test note';
  const tags = ['tag1', 'tag2'];
  const data = {
    id: 'mocked-uuid',
    Date: Date.now(),
    content: note,
    tags
  }
  insertNote.mockResolvedValue(data);

  const result = await newNote(note, tags);
  expect(result).toEqual(data);
});