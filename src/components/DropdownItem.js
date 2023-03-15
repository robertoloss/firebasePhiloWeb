
export default function DropdownItem(props) {
  
  function clickHandler(event) {
    event.stopPropagation()
    props.onClick(props.item)
  }
  
  return (
    <div 
      className={props.className}
      onClick={clickHandler} 
      style={{
        zIndex: 1000,
        fontSize: `${props.filter==='year' ? '12px' : '14px'}`,
        color: '#96873c',
        width: `${props.cellWidth || '2.5rem'}`,
        maxWidth: `${props.filter==='year' ? '7rem' : '10rem'}`,
        maxHeight: `${props.filter==='year' ? '7rem' : '3rem'}`,
        height: `${props.filter==='year' ? '2.3rem' : '3rem'}`,
        backgroundColor: '#262626',
      }} 
    >
      {props.item.toString().toLowerCase()}
    </div>
  )
}