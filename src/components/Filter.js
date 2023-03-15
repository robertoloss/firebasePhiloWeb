import { forwardRef } from 'react'
import Dropdown from '../components/Dropdown';

const maxLength = {
  year: 5,
  journal: 3
}

const Filter = forwardRef(function Filter(props, ref) {
// function Filter(props) {
  const [filtersBar, setFiltersBar] = props.filtersBar;
  const [filterToDisplay, setFilterToDisplay] = props.filterToDisplay

  function filterSelectorHandler(item, filter) {
    if (item !== 'skipAdding' && filterToDisplay.length < maxLength[filter]) {
      const tmpFilterToDisplay = [...filterToDisplay]
      if (!filterToDisplay.includes(item)) {
        tmpFilterToDisplay.push(item)
      } 
      setFilterToDisplay(tmpFilterToDisplay)
      const tmp = [...filtersBar]
      tmp[props.index] = tmpFilterToDisplay
      setFiltersBar(tmp)
      props.displayListHandler(tmp)
  }}

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div>
        <Dropdown
          title={props.title}
          list={props.filterArray}
          filterClick={filterSelectorHandler}
          numberOfColumns={props.numberOfCols}
          buttonWidth={props.buttonWidth}
          cellWidth={props.cellWidth}
          cellHeight={props.cellHeight}
          top={props.top}
          left={props.left}
          filter={props.filter}
          filterToDisplay={props.filterToDisplay}
          displayList={props.displayList}
          filterSelectorHandler={props.filterSelectorHandler}
          />
      </div>
    </div>
  )
// }
})

export default Filter 