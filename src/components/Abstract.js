import { useState } from 'react'
// import classes from '../pages/main.module.css'

function Abstract(props) {

  const [showAbstract, setShowAbstract] = useState(false)

  function showAbstractHandler(event) {
    event.stopPropagation()
    setShowAbstract(show => !show)
  }

  //styles
  const buttonStyle = {
    backgroundColor: `${(showAbstract && props.content) ? '#d5cc9a': '#636363'}`,
    width: 'auto',
    border: '0px',
    color: `${(showAbstract && props.content) ? '#636363': '#fff'}`,
    cursor: 'pointer',
  }
  
  const bottomSpaceStyle = { 
    display: 'flex', 
    height: '1em', 
    maxHeight: '1em' 
  }

  return (
    <> 
      <button onClick={showAbstractHandler} style={buttonStyle}>
        Abstract
      </button>
      {(showAbstract && props.content) && 
      <>
        <div className={props.abstractClass}>
          {props.content}
        </div>
        <div style={bottomSpaceStyle}/>
      </>}
    </>
  )
}

export default Abstract