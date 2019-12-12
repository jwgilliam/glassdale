let notes = []

export const useNotes = () => {
  return notes
}

export const saveNote = note => {
  fetch('http://localhost:3000/notes', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
  })
  .then(getNotes)
}

export const getNotes = () => {
  return fetch("http://localhost:3000/notes", {
    method: "GET"
  })
  .then(response => response.json())
  .then(
    parsedNotes => {
      notes = parsedNotes.slice()
    }
  )
}

