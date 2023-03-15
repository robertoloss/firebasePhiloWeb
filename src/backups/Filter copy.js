import { useState } from 'react'
import Dropdown from '../components/Dropdown';

const maxLength = {
  year: 5,
  journal: 3
}

function Filter(props) {
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [filtersBar, setFiltersBar] = props.filtersBar;
  const [filterToDisplay, setFilterToDisplay] = props.filterToDisplay
  const [displayList, setDisplayList]  = props.displayList
  
  function showFilterDropdownHandler() {
    setFilterDropdown(prev => !prev)
  } 
  function filterSelectorHandler(item, filter) {
    if (item !== 'skipAdding' && filterToDisplay.length < maxLength[filter]) {
      
      // const tmpArrayToDisplay = []

      // if (displayList.length < props.publicationsList.length) {
      //   for (const entry of displayList) {
      //     const tmpObject = {}
      //     Object.assign(tmpObject, entry)
      //     tmpArrayToDisplay.push(entry)
      //   }
      // }

      //START DELETING HERE+++++++++++++++++++
      //+++++++++++++++++++++++++++++++++++++++
      const tmpFilterToDisplay = [...filterToDisplay]
      if (!filterToDisplay.includes(item)) {
        tmpFilterToDisplay.push(item)
      } 
      setFilterToDisplay(tmpFilterToDisplay)

      const tmp = [...filtersBar]
      tmp[props.index] = tmpFilterToDisplay
    
      setFiltersBar(tmp)
      
      props.displayListHandler(tmp)

   
      // for (const entry of props.publicationsList) {
      //   const check = []
      //   for (let i = 0; i < props.filters.length; i++) { 
      //     if (entry.details.hasOwnProperty(props.filters[i])) {
      //       for (const value of filtersBar[i]) {
      //         if (entry.details[props.filters[i]] === value) {
      //           check.push(true);
      //           break;
      //   }}}}
      //   if (check.length === props.filters.length) {
      //     tmpArrayToDisplay.push(entry)
      //   }
      // }
      //END DELETING HERE
      //+++++++++++++++++++++++++++++++++++++++



      // for (const entry of props.publicationsList) {
      //   if (entry?.details[filter] !== undefined && entry?.details[filter] === item) {
      //     tmpArrayToDisplay.push(entry)
      // }}
      // setDisplayList(tmpArrayToDisplay)
      // const tmpFilterToDisplay = filterToDisplay
      // if (!filterToDisplay.includes(item)) {
      //   tmpFilterToDisplay.push(item)
      // } 
      // setFilterToDisplay(tmpFilterToDisplay)
      // const tmp = [...filtersBar]
      // tmp[props.index] = tmpFilterToDisplay
      // setFiltersBar(tmp)
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
          onClick={showFilterDropdownHandler}
          dropdownOpen={filterDropdown}
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
}

export default Filter 