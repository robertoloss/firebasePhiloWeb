import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import classes from '../pages/main.module.css'
import DropdownItem from './DropdownItem'

function Dropdown(props) {
  const outerStyle = {
    justifyContent: 'flex-start',
    paddingLeft: '0.7rem', 
  }
  const gridRow = { 
    display:'flex', 
    position: 'relative',
    flexDirection:'row', 
    justifyContent:'flex-start'
  }
  const boxStyle = { 
    display: 'flex',
    position: 'relative',
    width: 'auto',
    maxWidth: '20rem',
    height: 'auto',
    zIndex: '100',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'flex-start',
    backgroundColor: '#262626',
    boxShadow: `rgba(138, 138, 138, 0.62) 10px 10px 10px 0px`,
    left: `${props.left}`, 
    top: `${props.top}`,
  }
  const numCols = props.numberOfColumns
  const div = Math.floor(props.list.length/ numCols)
  const remainder =  props.list.length%numCols
  const numRows =  remainder === 0 ? div : div + 1 
  const remainderArray =[]
  const [dropdownCanBeOpened, setDropdownCanBeOpened] = useState(false);
  
  
  for (let i=0; i<remainder; i++) {
    remainderArray.push(0)
  }
  const grid = []
  for (let i = 0; i < numRows; i++) {
    grid.push([])
    let j = 0
    while (j < numCols && (numCols*i)+j < props.list.length) {
      grid[i].push(props.list[(numCols*i)+j])
      j++;
    }
  }
  function clickHandler(item) {
    props.filterClick(item, props.filter)
    setDropdownCanBeOpened(false)
  }
  function onMouseLeaveHandler() {
    setDropdownCanBeOpened(false)
  }
  function onClickHandler(event) {
    setDropdownCanBeOpened(true)
  }

  
  return (
    <div onClick={onClickHandler} onMouseLeave={onMouseLeaveHandler} className={classes.buttonStyle} 
      style={{...outerStyle,
        width: `${props.buttonWidth}`,
        color: '#437d98',
        cursor: 'pointer',
        textAlign: 'center',
      }}
    >
      {props.title}
      {dropdownCanBeOpened &&
        <div
          style={boxStyle}
        >

          {grid.map((row, rowIndex) => 
            <div key={uuidv4()} 
            style={gridRow}> 
              {row.map((item, itemIndex) => 
                <DropdownItem 
                key={uuidv4()}  
                className={classes.buttonStyleFilter}
                item={item} 
                onClick={clickHandler}
                cellWidth={props.cellWidth}
                cellHeight={props.cellHeight}
                filter={props.filter}
                top={props.top}
                />
                )}
            {rowIndex === numRows-1 && remainderArray.map(z=>
              <DropdownItem 
              key={uuidv4()} 
              item=''
              className={classes.buttonNoHover}
              cellWidth={props.cellWidth}
              cellHeight={props.cellHeight}
              filter={props.filter}
              top={props.top}
              />)}
            </div>
          )}

        </div>
   
      }
    </div>
  )
}


export default Dropdown 