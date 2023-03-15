import Section from '../components/Section'
import Indent from '../components/Indent'
import {  useState, useRef } from 'react'
import { cvList } from '../assets/cvList'
import { v4 as uuidv4 } from 'uuid';
// import useCards from '../custom-hooks/useCards';

function CV() {
  const divOuter = {
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'column',
  }

 const initialCardState = {}
    for (let i = 0; i < cvList.length; i++) {
      initialCardState[i] = false
    } 
  const [cardsState, setCardsState] = useState(initialCardState)
  
  const cardsRef = useRef(initialCardState)

  const cardsStateHandler = useRef((cardId) => {
    console.log('jajajajaja');
    setCardsState(prev => {
      const tmp = {}
    if (prev[cardId] === false) {
      tmp[cardId] = true
    } else {
      tmp[cardId] = false
    }
    for (const card in prev) {
      if (card !== cardId.toString()) {
        tmp[card] = false
      }
    }
    cardsRef.current = tmp
    return tmp
    })
  })


  return (
    <>
      <div style={divOuter}>
      {cvList.map((item,index) =>
        <div key={uuidv4()}>
          <Section 
            ref={{ cardsRef, cardsStateHandler }}
            // cardsState={cardsRef.current[index]}
            // onClick={cardsStateHandler}
            // onClick={cardsHandlers.current}
            // onClick={cardsHandlers.current[index]}
            id={index}
            title={`${index+1}. `+ item.name}
            key={uuidv4()}
            showTitleInSection={true}
            sectionTitleColorNoShow='white'
            border='0.5px solid rgba(140, 140, 140, 0.71)'
            width='90vw'
            maxWidth='30rem'
            minWidth='20rem'
            tag='p'
          >
            {item.list.map((entry) => 
              <Indent 
                indent={item.indent}
                key={uuidv4()}
              >
                {entry}
              </Indent>)}
          </Section>
          <div key={uuidv4()} style={{height: '0.3rem'}}/>
        </div>
        )}
      </div>
    </> 
  )
}

export default CV 