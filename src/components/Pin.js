// import { useState } from 'react'


function Pin(props) {

  function pinHandler(event) {
    // event.stopPropagation();
    // event.nativeEvent.stopImmediatePropagation()
    props.pinHandler()
  }

  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        top: `${props.pinTop}`,
        left: `${props.pinLeft}`,
        }}
    >
      <div
        onClick={pinHandler}
        style={{
          position: 'relative',
          flexDirection: 'column',
          display: 'flex',
          width: '20px',
          minWidth: '20px',
          height: '20px',
          backgroundColor: `${props.card.pinned ? '#343333': ''}`,
          border: '0.5px solid gray',
      }}>
      </div>
    </div>
  )
}

export default Pin 