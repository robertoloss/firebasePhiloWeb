function ResetButton(props) {

  return (
    <div 
    onClick={props.onClick}
    style={{fontSize: '10px',
      color:'#96873c',
      display: 'flex',
      position: 'relative',
      backgroundColor: '#212121',
      width: '12px',
      height: '12px',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      top: '10px',
      left: '8px',
    }}
  > x </div>
  )
}

export default ResetButton 