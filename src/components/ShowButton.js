import classes from '../pages/main.module.css'

function ShowButton(props) {
 
  return (
    <div 
      className={classes.buttonStyle} 
      onClick={props.onClick}
      style={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        fontSize: `${props.fontSize || ''}`,
        color: `${props.color || ''}`,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '0.7rem',
        backgroundColor: `${props.backgroundColor!=='' ? props.backgroundCol : (props.clicked  ? '#3d3d3d' : '')}`,
        // width: 'fit-content',
        width: `${props.width || 'auto'}`,
        height: 'fit-content',
        top: `${props.top || ''}`,
        left: `${props.left || ''}`,
        cursor: 'pointer',
        textAlign:'center', 
      }}
    >
      <div 
      style={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        left: '-5px', // `${props.left || ''}`,
        backgroundColor: 'transparent',
        textAlign:'center', 
      }}
    >
      {props.title}
      </div>
    </div>
  )
}

export default ShowButton 