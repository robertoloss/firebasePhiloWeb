// import { useCallback, useState, useRef, useEffect } from 'react'
// import { useState } from 'react'
// import { clear } from '@testing-library/user-event/dist/clear'
import useCards from '../custom-hooks/useCards';
import Section from '../components/Section'
import React from 'react'
import Indent from '../components/Indent'
import { cvList } from '../assets/cvList'
import { v4 as uuidv4 } from 'uuid';
import ExpandCollapseBar from '../components/ExpandCollapseBar';

const keysArray = []
for (let i= 0; i< cvList.length; i++) {
  keysArray.push(uuidv4())
}

function CV() {
  //styles
  const divOuter = {
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'column',
  }
 
  //logic
  const initState = {}
  for (const item of cvList) {
    initState[item.name] = false
  }

  const [cardsState, cardsStateHandler, pinHandler, expandAll,  collapseAll] = useCards(cvList)

  //output
  return (
    <>
      <div style={divOuter}>
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'flex-end',
            width: '90vw',
            maxWidth: '30rem',
            minWidth: '20rem',
          }} 
        >
          <ExpandCollapseBar onClick={{ expandAll,  collapseAll }}/>
        </div>
        {cvList.map((item,index) =>
        <Section 
          onClick={{ cardsStateHandler, pinHandler}}
          card={cardsState[index]}
          item={item}
          id={index}
          title={`${index+1}. ` + item.name}
          key={keysArray[index]}
          showTitleInSection={true}
          sectionTitleColorNoShow='white'
          border='0.5px solid rgba(140, 140, 140, 0.71)'
          width='90vw'
          maxWidth='30rem'
          minWidth='20rem'
          tag='p'
          pinTop='-36px'
          pinLeft='5px'
        >
            {item.list.map((entry) => 
            <Indent 
              indent={item.indent}
              key={uuidv4()}
              tag='span'
            >
              {entry}
            </Indent>)}

        </Section>
        )}
      </div>
    </> 
  )
}

export default CV 








  // const generalStateHandler = useCallback(() =>{
  //   const tmp = {...generalState}
  //   if (justChangedRef.current.bool === true) {
  //     for (const key in tmp) {
  //       if (tmp[key] === true) tmp[key] = false
  //       tmp[justChangedRef.current.item] = true
  //   }} else { 
  //     tmp[justChangedRef.current.item] = false 
  //   } 
  //   setGeneralState(tmp)
  // },[generalState, justChangedRef])