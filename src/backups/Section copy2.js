// import { Link } from 'react-router-dom'
// import Indent from './Indent';
// import { v4 as uuidv4 } from 'uuid';
// import SectionTitle from './SectionTitle'
import  { forwardRef } from 'react'
import React  from 'react'
import classes from '../pages/main.module.css'
import Pin from './Pin'


const Section = forwardRef((props, ref) => { 
  //styles
  const sectionContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    color: (props.sectionTextColor || '#d9d9d9'),
    backgroundColor: `${props.bgColorShow || '#292929'}`,
  }
  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: (props.position || null),
    justifyContent: 'flex-start',
    border: (props.border || null),
    width: (props.width || null),
    maxWidth: (props.maxWidth || null),
    minWidth: (props.minWidth || null),
    left: (props.left || null),
    marginRight: (props.right || null),
    color: `${props.card.open ? (props.sectionTitleColorShow || '') : (props.sectionTitleColorNoShow || 'rgb(210, 210, 161)')}`,
    backgroundColor: `${props.card?.open ? '#292929' : ''}`,
  }
  // const innerDivStyle = {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginRight: '0rem',    
  // }

  //logic
  function pinHandler(event) {
    props.onClick.pinHandler(props.id)
  }
  function showSectionHandler() {
    props.onClick.cardsStateHandler(props.id)
  }
  // const tagStyle = {
    
  // }
  const Tag = props.tag
  //output
  return (
    <div
      onClick={showSectionHandler}  
      className={classes.mySection}
      style={sectionStyle}
    >
      {/* <div style={innerDivStyle}> */}
        <Tag> {props.showSection ? (props.showTitleInSection ? props.title : '') : props.title} </Tag>
      {/* </div> */}
      {props.card.open && 
        <div className='sectionContent' style={sectionContentStyle}>
        <Pin 
          pinHandler={pinHandler}
          pinTop={props.pinTop}
          pinLeft={props.pinLeft}
          card={props.card}
        />
        {props.children}
        </div>
      }
    </div>
  )
})

export default Section 