import React, {  } from 'react';

function YellowOrange(props) {
  
  // console.log('YellowOrange');
  
  return (
    <div 
      onClick={props.onClick}
      style={{
        display:'flex',
        width: '5rem',
        height: '5rem',
        backgroundColor: 'yellow',
      }}
    >
      {props.show &&
      <div 
        style={{
          display:'flex',
          width: '1rem',
          height: '1rem',
          backgroundColor: 'orange',
        }}
      />}
    </div>
  )
}

export default React.memo(YellowOrange) 