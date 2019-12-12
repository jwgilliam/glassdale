let convictions = []

export const useConvictions = () => { 
  return convictions 
}

export const getConvictions = () => {

  return fetch("http://criminals.glassdale.us/crimes", {
    method: "GET"
  })

  .then(response => response.json())
  .then(
    parsedConvictions => {
      console.table(parsedConvictions)

      convictions = parsedConvictions.slice()
    }


  )
}