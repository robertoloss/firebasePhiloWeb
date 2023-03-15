// import { useCallback, useRef } from 'react'
import Section from '../components/Section'
import Indent from '../components/Indent'
import { cvList } from '../assets/cvList'
import { v4 as uuidv4 } from 'uuid';
import useCards from '../custom-hooks/useCards';
import { useCallback, useState } from 'react'
import YellowOrange from './YellowOrange';
import GreenRed from './GreenRed';
import Control from './Control';
import useSpecificHandler from '../custom-hooks/useSpecificHandler';

function CV() {
  const divOuter = {
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'column',
  }
  const initState = {
    red: false,
    orange: false,
    white: false,
  }
  const [generalStateColors, setGeneralStateColors] = useState(initState)
  const Handler = (element) => {
    // console.log('\nHandler');
    // console.log(`element ${element }`)
    setGeneralStateColors(prev=>{
      const tmp = {...prev};
      if (prev[element] === false)
      for (const item in tmp) {
        // console.log(`item: ${item}, prev[item]: ${prev[item]}`)
        if (prev[item] === true) tmp[item] = false
        tmp[element] = true
      } else {
        tmp[element] = false
      }
      return tmp
    })
  }
  const orangeHandler = useCallback(() => {
    // console.log('\norangeHandler');
    Handler('orange')
  },[])
  // console.log(generalStateColors)
  const redHandler = useCallback(() => {
    // console.log('\nredHandler');
    Handler('red')
  },[])
  const whiteHandler = useCallback(() => {
    // console.log('\nwhiteHandler');
    Handler('white')
  },[])














  const [generalState, generalHandler] = useCards(cvList)

  const specificHandlers = []
  for (const item of cvList) {
    const handler = useSpecificHandler(item, generalHandler)
    specificHandlers.push(handler)
    }




  return (
    <>
      <YellowOrange
        onClick={orangeHandler}
        show={generalStateColors.orange}
        />
      <GreenRed
        onClick={redHandler}
        show={generalStateColors.red}
      />
      <Control 
        onClick={whiteHandler}
        show={generalStateColors.white}
      />
      <div style={divOuter}>
        {cvList.map((item,index) =>
          <div key={uuidv4()}>
            <Section 
              cardsState={cardsState[index]}
              onClick={cardsStateHandler}
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