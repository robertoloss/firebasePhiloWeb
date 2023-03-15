import ShowButton from "./ShowButton"
import { v4 as uuidv4 } from 'uuid';
import ResetButton from "./ResetButton";
import { forwardRef } from "react";

const FilterBar = forwardRef(function FilterBar(props, ref) {
  const [filterToDisplay, setFilterToDisplay] = props.setFilterToDisplay[props.index]
  const [filtersBar, setFiltersBar] = props.filtersBar
  
  function resetItemHandler() {
    const tmp = [...filtersBar]
    tmp[props.index] = []
    setFilterToDisplay([])
    setFiltersBar(tmp)
    props.displayListHandler(tmp)
  }
  function cancelSingleFilterHandler(item) {
    const tmpFiltersBar = [...filtersBar]
    const tmpThisBar =  [...tmpFiltersBar[props.index]]
    tmpThisBar.splice(tmpThisBar.indexOf(item,1))
    tmpFiltersBar[props.index] = tmpThisBar
    setFilterToDisplay(tmpThisBar)
    setFiltersBar(tmpFiltersBar)
    props.displayListHandler(tmpFiltersBar)
  }



  return (
    <div style={{ display: 'flex', flexDirection: 'row', maxWidth: '15rem' }}>
      
      {props.array.map(item => 
        <ShowButton 
          onClick={cancelSingleFilterHandler} 
          key={uuidv4()}
          title={item.toString().toLowerCase()}
          fontSize={props.index===0? '12px' : '14px'}
          color='#96873c'
          backgroundColor='black'
          top='0px'
          left='2px'
          width={props.width}
          maxWidth='2rem'
        />)}
      
      {filterToDisplay.length > 0 && 
        <ResetButton onClick={resetItemHandler}/>}
        
    </div>
  )
})

export default FilterBar