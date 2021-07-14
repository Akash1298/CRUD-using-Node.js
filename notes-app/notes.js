const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title)
    if(duplicateNote){
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New Note Added"));
    }else{
        console.log(chalk.red.inverse("Note title taken!"));
    }
}

const removeNote = (title => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);
    saveNotes(notesToKeep)
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse("Removed Successfully"))
    }else{
        console.log(chalk.red.inverse("No note found!")) 
    }       
})

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.inverse("Your notes") )
    if(notes.length > 0){
        notes.forEach(item => console.log(item.title))
    }else{
        console.log("No notes found!")
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log("No such note found!")
    }
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    }catch(e){
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}