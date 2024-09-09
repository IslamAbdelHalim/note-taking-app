import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { newNote, getAllNotes, findByContent, findByDate, removeNoteById, removeAllNotes } from './notesHandler.js'



/**
 * yargs => to create a cli interact 
 * .command(command, description, cb(yargs) => {
 *  return yargs.positional(' name command', {
 *    type,
 *    description,
 *  })
 * }, cb() => console.log(argv.command))
 */
yargs(hideBin(process.argv))
  .command('new <note>', 'create a new note', yargs => {
    return yargs.positional('note', {
      describe: 'The content of the note you want to create',
      type: 'string'
    })
  }, async (argv) => {
    const tags = argv.tags ? argv.tags.split(' ') : [];
    const note = argv.note;
    newNote(note, tags);
  })
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note'
  })
  .command('all', 'get all notes', () => {}, async (argv) => {
    console.log(await getAllNotes());
  })
  .command('find <filter>', 'get matching notes', yargs => {
    return yargs.positional('filter', {
      describe: 'The search term to filter notes by, will be applied to note.content',
      type: 'string'
    })
  }, async (argv) => {
    const note = await findByContent(argv.filter);
    console.log(note);
  })
  .command('findByDate <Date>', 'get note By Date', yargs => {
    return yargs.positional('filter', {
      describe: 'The search term to filter notes by, will be applied to note.content',
      type: 'string'
    })
  }, async (argv) => {
    const notes = await findByDate(argv.Date);
    console.log(notes);
  })
  .command('remove <id>', 'remove a note by id', yargs => {
    return yargs.positional('id', {
      type: 'string',
      description: 'The id of the note you want to remove'
    })
  }, async (argv) => {
    await removeNoteById(argv.id);
  })
  .command('web [port]', 'launch website to see notes', yargs => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000,
        type: 'number'
      })
  }, async (argv) => {
    
  })
  .command('clean', 'remove all notes', () => {}, async (argv) => {
    removeAllNotes();
  })
  .demandCommand(1)
  .parse()

