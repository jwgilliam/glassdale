import { useNotes } from "./noteProvider.js"

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".notesListContainer")

const noteList = () => {
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNote") {
      const allNotes = useNote()
      render(allNotes)
    }
  })
}

const render = allOfTheNotes => {
  contentElement.innerHTML = `${allOfTheNotes
    .map(notes => {
      return `
      <div>
      <div class="note__field">
      ${notes.text}
      </div>
      <div class="note__field">
      ${notes.suspect}
      </div>
      <div class="date__field>
      ${notes.date}
      </div>
      
      </div>
      `
    })
      .join("")}`
}
const NoteFormComponent = () => {

  // Handle internal element click
  eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.id === "saveNote") {

          // Make a new object representation of a note
          const newNote = {
              // Key/value pairs here
          }

          // Change API state and application state
          saveNote(newNote)
      }
  })}

  export default noteList
