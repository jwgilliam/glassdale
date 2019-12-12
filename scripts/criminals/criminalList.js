import criminalComponent from "./criminals.js"
import { useCriminals } from "./criminalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer")

const criminalList = () => {
  const criminalCollection = useCriminals();
  eventHub.addEventListener("crimeSelected", event => {
    const crime = event.detail.crime

    const matchingCriminals = criminalCollection.filter(
      (currentCriminal) => {
        if (currentCriminal.conviction===crime){
          return currentCriminal
        }
      }
    )
    console.table(matchingCriminals)
    if(matchingCriminals.length > 0) {
      render (matchingCriminals)
    } else {
      render(criminalCollection)
    }
  })

  let render = criminalCollection => {
    contentElement.innerHTML = `${
      criminalCollection.map(currentCriminal => {
        return criminalComponent(currentCriminal)
      })
        .join("")}`
  }

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {

      const [prefix, indexId] = clickEvent.target.id.split("--")

      const message = new CustomEvent("associateButtonClicked", {
        detail: {
          criminalId: indexId
        }
      })
      eventHub.dispatchEvent(message)
    }
  })

    render(criminalCollection)
  }








export default criminalList