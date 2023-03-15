import React, {  } from 'react';


function GreenRed(props) {

  // console.log('GreenRed');
  return (
    <div 
      onClick={props.onClick}
      style={{
        display:'flex',
        width: '5rem',
        height: '5rem',
        backgroundColor: 'green',
      }}
    >  

    {props.show &&
    <div 
      style={{
        display:'flex',
        width: '1rem',
        height: '1rem',
        backgroundColor: 'red',
      }}
    />}

    </div>
  )
}

export default React.memo(GreenRed) 