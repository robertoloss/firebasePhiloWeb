import React from 'react';

function Control(props) {
  // console.log('control');
  return (
    <div
    onClick={props.onClick}
    id="OUTER"
      style={{
        display:'flex',
        width: '5rem',
        height: '5rem',
        backgroundColor: 'black',
      }}
    >
      {props.show && 
        <div
          id='THIS'
          style={{
            display:'flex',
            width: '1rem',
            height: '1rem',
            backgroundColor: 'white',
          }}
        />
      }
    </div>
  )
}

export default React.memo(Control) 