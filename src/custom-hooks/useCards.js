import { useState } from 'react'

function useCards(listArray) {
  
  const initialCardState = {}
    for (let i = 0; i < listArray.length; i++) {
      initialCardState[i] = {
        open: false,
        pinned: false,
      }
    } 
  const [cardsState, setCardsState] = useState(initialCardState)

  function cardsStateHandler(cardId) {
    const tmp = {...cardsState}
    if (cardsState[cardId].open === false) {
      let counter = 0
      for (const card in cardsState) {
        if (cardsState[card].open === true && cardsState[card].pinned===false) {
          counter++;
          if (counter > 1) break
        }
      }
      tmp[cardId].open = true
      if (counter < 2) {
        for (const card in tmp) {
          if (card !== cardId.toString() && tmp[card].open && !tmp[card].pinned) {   
            tmp[card].open = false
            break
          }
        }
      }
    } else {
      if (!tmp[cardId].pinned) tmp[cardId].open = false
    }
    setCardsState(tmp)
  }

  function pinHandler(cardId) {
    const tmp = {...cardsState}
    tmp[cardId].pinned = !tmp[cardId].pinned
    setCardsState(tmp)
  }

  function expandAll() {
    const tmp = {...cardsState}
    for (const item in tmp) {
      tmp[item].open = true
      setCardsState(tmp)
    }
  }

  function collapseAll() {
    const tmp = {...cardsState}
    for (const item in tmp) {
      if (!(tmp[item].open && tmp[item].pinned)) tmp[item].open = false
      setCardsState(tmp)
    }
  }

  return [cardsState, cardsStateHandler, pinHandler, expandAll, collapseAll]
}

export default useCards 