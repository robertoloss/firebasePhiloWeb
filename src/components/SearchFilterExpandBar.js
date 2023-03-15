import ExpandCollapseBar from './ExpandCollapseBar';
import classes from '../pages/main.module.css'
import { useState, forwardRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import SearchFilterBar from './SearchFilterBar';
import Filter from './Filter';
import FilterBar from './FilterBar';
import SearchBar from './SearchBar';

const buttonWidths = ['2.5rem', '7rem']

const SearchFilterCollapse = forwardRef(function SearchFilterCollapse(props, ref) {

  // const filterBarInit = []
  // for (let i=0; i< props.filters.length; i++) {
  //   filterBarInit.push([])
  // }
  // const [filtersBar, setFiltersBar] = useState(filterBarInit);

  const [filtersBar, setFiltersBar] = props.filtersBar
  const publicationsList = props.mainList
  const [expandAll, collapseAll] = props.expandCollapse
  const [yearToDisplay, setYearToDisplay] = useState([])
  const [journalToDisplay, setJournalToDisplay] = useState([])
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState(false);
  //  const [displayList, setDisplayList] = props.displayList

  const years = new Set()
  for (const item of publicationsList) {
    years.add(item.details.year)
  }
  const yearsArray = Array.from(years)
  
  const journals = new Set()
  for (const item of publicationsList) {
    journals.add(item.details.journal)
  }
  const journalsArray = Array.from(journals)
  
  for (const journal of journalsArray) {
    if (journal === undefined) {
      journalsArray.splice(journalsArray.indexOf(journal),1)
    }
  }
  
  function searchHandler() {
    setSearch(prev => !prev)
  }
  function filterHandler() {
    setFilter(prev => !prev)
  }
  

  return (
    <div className={classes.searchBar}>
      <SearchFilterBar
        search={[search, searchHandler]}
        filter={[filter, filterHandler]}
      >
        <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-start' }}>
          
          {search && 
            <div style={{ display:'flex', flexDirection:'row', alignItems:'flex-start', position: 'relative', marginTop:'5px', marginBottom:'3px', left: '0px',}}>
              <SearchBar 
                ref={ref}
                displayList={props.displayList}
                publicationsList={publicationsList}
                displayListHandler={props.displayListHandler}
                searchBar={props.searchBar}
              />
            </div>}

          {filter && 
            <div style={{ display:'flex', flexDirection:'row', alignItems:'flex-start' }}>
              <div style={{ display:'flex', flexDirection:'row', justifyContent:'flex-start' }}>
                <Filter 
                  top='89px' // DropdownItem
                  left='-42px' // Dropdown -> const gridRow
                  numberOfCols={4}
                  title='year'
                  filterToDisplay={[yearToDisplay, setYearToDisplay]}
                  filtersBar={[filtersBar, setFiltersBar]}
                  filterArray={yearsArray}
                  cellWidth='2.5rem'
                  cellHeight= '2.4rem'
                  buttonWidth='3.6rem'
                  filter='year'
                  index={0}
                  publicationsList={publicationsList}
                  filters={props.filters}
                  displayList={props.displayList}
                  displayListHandler={props.displayListHandler}
                  // filterSelectorHandler={filterSelectorHandler}
                  />
                <Filter 
                  top='184px' // DropdownItem
                  left='-122px' // Dropdown -> const gridRow
                  title='journal'
                  filterToDisplay={[journalToDisplay, setJournalToDisplay]}
                  filtersBar={[filtersBar, setFiltersBar]}
                  filterArray={journalsArray}
                  numberOfCols={2}
                  cellWidth='13rem'
                  cellHeight= '2.2rem'
                  buttonWidth='4.7rem'
                  filter='journal'
                  index={1}
                  filters={props.filters}
                  displayList={props.displayList}
                  publicationsList={publicationsList}
                  displayListHandler={props.displayListHandler}
                  // filterSelectorHandler={filterSelectorHandler}
                  />
              </div>
            </div>
          }
          {filter && 
            <div style={{ 
                display:'flex', 
                flexDirection:'column', 
                alignItems:'flex-start', 
                marginBottom: '1.5rem',
                // height: 'fit-content',
                // width: 'fit-content',
                // width: '9vw',
                // maxWidth: '10rem',
                // minWidth: '20rem',
                // maxWidth: '15rem',
                // backgroundColor: 'white' 
                }}>
              {filtersBar.map((bar,index) => 
                <FilterBar 
                  ref={ref}
                  array={bar} 
                  index={index} 
                  width={buttonWidths[index]}
                  key={uuidv4()}
                  filters={props.filters}
                  publicationsList={publicationsList}
                  displayList={props.displayList}
                  filtersBar={[filtersBar, setFiltersBar]}
                  displayListHandler={props.displayListHandler}
                  setFilterToDisplay={[
                    [yearToDisplay, setYearToDisplay], 
                    [journalToDisplay, setJournalToDisplay]
                  ]}
              />)}
              </div>}
        </div>
      </SearchFilterBar>
      <ExpandCollapseBar onClick={{ expandAll,  collapseAll }}/>
    </div>
  )
})

export default SearchFilterCollapse 