// import { Link } from 'react-router-dom'
import { useState } from 'react'
import classes from '../pages/main.module.css'
import SectionTitle from './SectionTitle'
import { v4 as uuidv4 } from 'uuid';

function Section(props) {

  // const [showSection, setShowSection] = useState(false)
  
  function showSectionHandler() {
    props.onClick(props.id)
  }
  // function showSectionHandler() {
  //   setShowSection(show => !show)
  // }
   
  const divSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    color: (props.sectionTextColor || '#d9d9d9'),
    backgroundColor: `${props.bgColorShow || '#292929'}`,
  }
  

  return (
    <div
      onClick={showSectionHandler}
      className={classes.mySection}
      key={uuidv4()}
      style={{
        display: 'flex',
        position: (props.position || null),
        justifyContent: 'center',
        border: (props.border || null),
        width: (props.width || null),
        maxWidth: (props.maxWidth || null),
        minWidth: (props.minWidth || null),
        left: (props.left || null),
        marginRight: (props.right || null),
        color: `${props.cardsState[props.id][1] ? (props.sectionTitleColorShow || '') : (props.sectionTitleColorNoShow || 'rgb(210, 210, 161)')}`,
        backgroundColor: `${props.cardsState[props.id][1] ? '#292929' : ''}`,
        // backgroundColor: `${!showSection ? (hover ? '#545454': (props.bgColorNoShow || '#343333'))
        // : (props.bgColorShow|| '#292929')}`,
      }}
    >
      <SectionTitle 
        tag={props.tag}
        showSection={props.cardsState[props.id][1]}
        showTitleInSection={props.showTitleInSection}
        title={props.title}
      />
      {/* props.cardsState.length !==0 && props.cardsState[props.id][1]) */}
      {props.cardsState[props.id][1]  && <div className='sectionContent' style={divSectionStyle}>
        {props.children}
      </div>}
    </div>
  )
}

export default Section 