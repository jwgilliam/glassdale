import { saveNote } from "./noteProvider.js"

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".noteFormContainer")

const NoteFormComponent = () => {
 
  eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
    const newNote = {
      text: document.querySelector("#note-text").value, 
      suspect: document.querySelector("#suspect-text").value,
      date: Date.now()
    }
    saveNote(newNote)
  }

  })
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
      const message = new CustomEvent("showNoteButtonClicked")
      eventHub.dispatchEvent(message)
    }
  })

    const render = () => {
        contentTarget.innerHTML = `
            <input type="text" id="note-text">
            <input type="text" id="suspect-text">
            <button id="saveNote">Save Note</button>
            <button id="showNotes">Show Note</button>
        `
    }

    render()
}

export default NoteFormComponent