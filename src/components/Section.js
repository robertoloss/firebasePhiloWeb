import  { forwardRef } from 'react'
import React  from 'react'
import classes from '../pages/main.module.css'
import Pin from './Pin'
import Indent from './Indent'

const Section = forwardRef((propsObject, ref) => { 
  let props
  if (propsObject.propsObject) {
    props = {...propsObject.propsObject}
    props.children = propsObject.children
  } else {
    props = propsObject
  }
  
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
    position: 'relative',
    top: `${props.top}`,
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
 

  //logic
  function pinHandler(event) {
    props.onClick.pinHandler(props.id)
  }
  function showSectionHandler() {
    props.onClick.cardsStateHandler(props.id)
  }
  const Tag = props.tag
  const indentTheTitle = (props.indent!=='' && props.indent!==undefined);
  
  
  

  //output
  return (
    <div onClick={showSectionHandler} className={classes.mySection} style={sectionStyle}>
      {props.card.open ? (props.showTitleInSection ? <Tag> {props.title} </Tag> : <Tag/>) 
        : (indentTheTitle ? 
          <Indent 
            indent={props.indent}
            tag={props.tag}
            minWidth={props.minWidth}
            maxWidth={props.maxWidth}
          > 
              {props.title} 
          </Indent> 
        : <Tag>{props.title} </Tag>
        )
      }
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