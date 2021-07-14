const  yargs = require('yargs');
const notes = require('./notes')

yargs.version('1.1.0');

yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder:{
        title:{
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        },
        description:{
            describe : 'Note Description',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.description);
    }
})

yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder:{
        title:{
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command : 'list',
    describe : 'List notes',
    handler (){
        notes.listNotes()
    }
})

yargs.command({ 
    command : 'read',
    describe : 'Read note',
    builder:{
        title:{
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.readNote(argv.title)
    }
})

yargs.parse();