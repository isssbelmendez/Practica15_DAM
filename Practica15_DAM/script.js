//OBTENER ELEMTNOS DEL DOM
const btnNew = document.getElementById("btn");
const appNote = document.getElementById("app");

//CARGAR LAS NOTAS EXISTENTES AL CARGAR LA PAGNA
getNotes().forEach((note)=>{
const noteNew = createNote(node.id, note.content);
appNote.insertBefore(noteNew, btnNew);
});

//CREAR UN ELEMENTO DE NOTA CON EVENTOS Y FUNCIONALIDADES ASOCIADAS
function createNote(id, content) {
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Crear una nota";
    element.value = content;

    //Evento de doble clic para eliminar la nota
    element.addEventListener("dbclick", () => {
        const warning = confirm("Quieres eliminar la nota?");
        if (warning) {
            deleteNote(id, element);
        }
    });

    //EVENTO DE ENTRADA PARA ACTUALIZAR EL CONTENIDO DE LA NOTA
    element.addEventListener("input", () => {
        updateNote(id, element.value);
    });
    return element;
}

//ELIMINAR UNA NOTA POR SU ID Y EL ELEMTNOS DE DOM ASOCIADO
function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id  === id);
    saveNote(notes);
    element.remove(); //Eliminar del DOM directamente
}

//ACTUALIZAR EL CONTENIDO DE UNA NOTA POR SU ID
function update(id, content) {
    const notes = getNotes();
    const target = notes.find((note) => note.id === id);
    target.content = content;
    saveNote(notes);
}

//AGREGAR UNA NUEVA NOTA AL HACER CLICKEN EL BOTON
function addNote() {
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    };
    const noteNew = createNote(noteObj.id, nodeObj.content);
    appNote.insertBefore(noteNew, btnNew);
    notes.push(noteObj);
    saveNote(notes);
}
      

//GUARDAR LAS NOTAS EN EL ALMACENAMIENTO LOCAL
function saveNote(notes) {
    localStorage.setItem("note-app", JSON.stringify(notes));
}

//OBTENER TODAS LAS NOTAS ALMACENADAS
function getNotes() {
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}

//EVENTO DE CLICK EN EL BOTON PARA AGREGAR UNA NUEVA NOTA
btnNew.addEventListener("click", addNote);
