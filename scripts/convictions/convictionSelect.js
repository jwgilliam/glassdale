
import { useConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    const convictions = useConvictions()

    eventHub.addEventListener("change", changeEvent => {
      if (changeEvent.target.classList.contains("dropdown")) {
        const selectedCrime = changeEvent.target.value

        const message = new CustomEvent("crimeSelected", {
          detail: {
            crime: selectedCrime
          }
        })

        eventHub.dispatchEvent(message)
      }
    })

    

    const render = convictions => {
       
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                  ${
                    convictions.map(conviction =>
                     `<option value="${conviction}">${conviction}</option>` )

                  }
            </select>
        `
    }

    render(convictions)
}

export default ConvictionSelect