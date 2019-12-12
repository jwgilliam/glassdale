import { useCriminals } from "./criminals/criminalDataProvider.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".alibiContainer")

const dialogComponent = () => {

  eventHub.addEventListener("associateButtonClicked", event => {
    const criminals = useCriminals()
    console.log(event.detail.criminalId)



    const foundCriminal = criminals.find(
      (singleCriminal) => {
        return singleCriminal.id === parseInt(event.detail.criminalId, 10)
      }
    )
      const alibisHTML = foundCriminal.known_associates.map(
        (singleAssociate) => {
          return `
            <div>
            ${singleAssociate.name}: ${singleAssociate.alibi}
            </div>
          `
        }
      ).join("")
      document.querySelector(".alibi__text").innerHTML = alibisHTML

      document.querySelector(".alibis").showModal()
  })

  const render = () => {
    contentTarget.innerHTML = `
    <dialog class="alibis">
    <div class="alibi__text"></div>
    <button id="closeDialog">Close</button>
    `
  }
  render()
}

export const closeDialogButtonEvents = () => {

  const allCloseButtons = document.querySelectorAll("#closeDialog")
  for (const btn of allCloseButtons) {
    btn.addEventListener("click", theEvent => {
      const dialogElement = theEvent.target.parentNode
      dialogElement.close()

    })
  }
}



export default dialogComponent