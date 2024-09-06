

let notes = ['banana','rasen mähen']

let trachNotes = []


function render() {

    getFromLocalStorage()

    renderNotes()

   
}

function renderNotes() {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
       
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }

}

function renderTrachNotes() {

    let contentRef = document.getElementById('trach_content')
    contentRef.innerHTML = "";

    for (let indexTrachNote = 0; indexTrachNote < trachNotes.length; indexTrachNote++) {
       
        contentRef.innerHTML += getTrachNoteTemplate(indexTrachNote);
    }
}

function  getNoteTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;
}

function  getTrachNoteTemplate(indexTrachNote) {
    return `<p>+ ${trachNotes[indexTrachNote]}<button onclick="deleteTrachNote(${indexTrachNote})">X</button></p>`;
}



function addNote() {
    let myinputRef = document.getElementById('note_input');
    let myinput = myinputRef.value;

    notes.push(myinput);

    saveLocalStrage()
    renderNotes()
    myinputRef.value = "";
    
}

function saveLocalStrage() {
    localStorage.setItem("notes",JSON.stringify(notes))
}

function  getFromLocalStorage() {
    let myArr = JSON.parse(localStorage.getItem("notes"));
   
    if(myArr != null){
     notes = myArr
    }
}    

function deleteNote(indexNote) {

    let trachNote = notes.splice(indexNote, 1);
    trachNotes.push(trachNote)

    renderNotes()
    renderTrachNotes()
}

function deleteTrachNote(indexTrachNote) {

    trachNotes.splice(indexTrachNote, 1);
    

    renderNotes()
    renderTrachNotes()
}

