import classes from '../pages/main.module.css'

const buttonSize = '30px'
const color = 'rgba(140, 140, 140, 0.71)';

function ExpandCollapseBar(props) {

  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'flex-end',
      }}
    >
    
      <div
      className={classes.buttonStyle}
        onClick={props.onClick.collapseAll}
        style={{
          display: 'flex',
          position: 'relative',
          width: `${buttonSize}`,
          height: `${buttonSize}`,
          fontSize: '16px',
          color: `${color}`,
          borderColor: `${color}`,
        }}
      >&uarr;
      </div>
      <div
        className={classes.buttonStyle}
        onClick={props.onClick.expandAll}
        style={{
          display: 'flex',
          position: 'relative',
          width: `${buttonSize}`,
          height: `${buttonSize}`,
          fontSize: '16px',
          color: `${color}`,
          borderColor: `${color}`,
        }}
        >&darr;
      </div>
    </div>
  )
}

export default ExpandCollapseBar 