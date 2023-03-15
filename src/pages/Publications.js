import { v4 as uuidv4 } from 'uuid';
import { publicationsList } from "../assets/PublicationsList"
import PubCard from "../components/PubCard"
import classes from './main.module.css'
import { useState, useRef } from 'react'
import Section from '../components/Section';
import useCards from '../custom-hooks/useCards';
import SearchFilterExpandBar from '../components/SearchFilterExpandBar';

const FILTERS = ['year', 'journal']
for (let i = 0; i < publicationsList.length; i++) {
    publicationsList[i].number = publicationsList.length-i
  }

function Publications() {
  const divOuter = {
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'column',
  }
  const filterBarInit = []
  for (let i=0; i< FILTERS.length; i++) {
    filterBarInit.push([])
  }
  const [cardsState, cardsStateHandler, pinHandler, expandAll, collapseAll] = useCards(publicationsList)

  const [searchBar, setSearchBar] = useState('');
  const [filtersBar, setFiltersBar] = useState(filterBarInit);
  const [displayList, setDisplayList] = useState(publicationsList);

  const searchLists = useRef([publicationsList, publicationsList])


  function displayListHandler(arrayOfFilters = filtersBar, search = searchBar) {
    const nonEmptyFilters = []
    for (let i = 0; i < arrayOfFilters.length; i++) {
      if (arrayOfFilters[i].length > 0) {
        nonEmptyFilters.push({
          index: i, 
          filterBar: arrayOfFilters[i]
    })}}

    // tmp array to update the list to display
    const tmpFilteredArray = []
    
    // first we apply the filters always taking the whole publication list as a starting point
    for (const entry of publicationsList) {
      const check = []
      for (let i = 0; i < nonEmptyFilters.length; i++) { 
        if (entry.details.hasOwnProperty(FILTERS[nonEmptyFilters[i].index])) {
          for (const value of nonEmptyFilters[i].filterBar) {
            if (entry.details[FILTERS[nonEmptyFilters[i].index]] === value) {
              check.push(true);
              break;
      }}}}
      if (check.length === nonEmptyFilters.length) {
        tmpFilteredArray.push(entry)
      }
    }

    // second we restrict the list further given the string in the search bar (if any)
    const searchStrings = search.split(" ")
    const tmpDisplayList = []
    for (const item of tmpFilteredArray) {
      const wordsInTitle = item.details.title.toLowerCase().split(" ")
      if (searchStrings
            .every(string => wordsInTitle
              .some(word => word.includes(string.toLowerCase())))) {
        tmpDisplayList.push(item)
      }
    }
    
    // update display
    setDisplayList(tmpDisplayList)
  }

  const sectionProps = {
    onClick: { cardsStateHandler, pinHandler},
    showTitleInSection: false,
    sectionTitleColorNoShow: 'rgb(212, 212, 212)',
    border: '0.5px solid rgba(140, 140, 140, 0.71)',
    width: '90vw',
    maxWidth: '30rem',
    minWidth: '20rem',
    tag: 'p',
    pinTop: '-20px',
    pinLeft: '5px',
    cardDefault: false,
    indent: classes.indentPub,
  }


  return (
    <>
      <SearchFilterExpandBar 
        expandCollapse = {[expandAll, collapseAll]}
        displayList={[displayList, setDisplayList]}
        mainList={publicationsList}
        displayListHandler={displayListHandler}
        filters={FILTERS}
        ref={searchLists}
        filtersBar={[filtersBar, setFiltersBar]}
        searchBar={[searchBar, setSearchBar]}
      />
      <div style={{ display:'flex', height: '2px' }}></div>
      <div style={divOuter}>
        {displayList.map((item, index) => 
          <Section
            key = {uuidv4()}
            propsObject = {{ ...sectionProps,
              card: cardsState[index],
              item: item,
              borderColorBottom: `${index === publicationsList.length-1 ? 'rgba(140, 140, 140, 0.71)' : '#343333 '}`,
              id: index,
              title: `${item.number<10 ? '\u00A0\u00A0' : '' }${(item.number)}. \u00A0 ${item.details.title}`,
          }}>
            <PubCard 
              className={classes.pubDetailsMobilePub}
              abstractClass={classes.abstractPub} 
              key={uuidv4()} 
              pub={item} 
            />
          </Section>
        )}
      </div>
    </>
  )
}

export default Publications 

