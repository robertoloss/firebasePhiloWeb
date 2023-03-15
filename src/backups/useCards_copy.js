import { useState } from 'react'

function useCards(listArray) {
  
  const initialCardState = {}
    for (let i = 0; i < listArray.length; i++) {
      initialCardState[i] = false
    } 
  const [generalState, setGeneralState] = useState(initialCardState)

  function generalHandler(element) {
    const tmp = {...generalState}
    if (generalState[element] === false) {
      for (const item in tmp) {
        if (item === true) {
          tmp[item] = false
        }
      }
      tmp[element] = true
    } else {
      tmp[element] = false
    }
    setGeneralState(tmp)
  }

  return [generalState, generalHandler]
}

export default useCards 