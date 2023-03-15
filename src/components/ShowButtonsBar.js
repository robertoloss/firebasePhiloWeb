
function ShowButtonsBar(props) {
 
  return (
    <>
      <div style={{
        display: 'flex',
        position: 'relative', 
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        padding: '0rem 0rem 0rem 0rem ',
        // width: 'auto',
        // backgroundColor: 'green',
      }}>
        {props.children}
      </div>
     
    </>
  )
}

export default ShowButtonsBar 