import Section from '../components/Section'
import Indent from '../components/Indent'

import { cvList } from '../assets/cvList'
import { v4 as uuidv4 } from 'uuid';
import useCards from '../custom-hooks/useCards';

function CV() {
  const divOuter = {
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'column',
  }

  const [cardsState, cardsStateHandler] = useCards(cvList)
 


  return (
    <>
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