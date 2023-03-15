import { v4 as uuidv4 } from 'uuid';
import { publicationsList } from "../assets/PublicationsList"
import PubCard from "../components/PubCard"
import classes from './main.module.css'
import { useState } from 'react'
import Section from '../components/Section';
import useCards from '../custom-hooks/useCards';
import Dropdown from '../components/Dropdown';
import ShowButton from '../components/ShowButton';
import ShowButtonsBar from '../components/ShowButtonsBar';
import ExpandCollapseBar from '../components/ExpandCollapseBar';

let count = publicationsList.length
for (const pub of publicationsList) {
  pub.key = count;
  count--;
}
const years = new Set()
for (const item of publicationsList) {
  years.add(item.details.year)
}
const yearsArray = Array.from(years)

for (let i = 0; i < publicationsList.length; i++) {
  publicationsList[i].number = publicationsList.length-i
}


let yearsToDisplay = []


function Publications() {
  const divOuter = {
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'column',
  }
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState(false);
  const [yearsDropdown, setYearsDropdown] = useState(false);
  const [displayList, setDisplayList] = useState(publicationsList);
  // const [yearsToDisplay, setYearsToDisplay] = useState([]);

  function searchHandler() {
    setSearch(prev => !prev)
  }
  function filterHandler() {
    setFilter(prev => !prev)
  }
  function showYearsDropdownHandler() {
    setYearsDropdown(prev => !prev)
  }
  const [cardsState, cardsStateHandler, pinHandler, expandAll, collapseAll] = useCards(publicationsList)

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

  function yearSelectorHandler(item) {
    if (item !== 'skipAdding' && yearsToDisplay.length < 5) yearsToDisplay.push(item);
    const tmp = []
    for (const entry of publicationsList) {
      if (yearsToDisplay.includes(entry.details.year)) {
        tmp.push(entry)
      }
    }
    setDisplayList(tmp)
  }
  function resetYearHandler() {
    yearsToDisplay = []
    setDisplayList(publicationsList)
  }

  
  return (
    <>
      <div className={classes.searchBar} >
        <div className={classes.pubBar}>
          <ShowButtonsBar>
            <ShowButton onClick={searchHandler} clicked={search} title="search" />
            <ShowButton onClick={filterHandler} clicked={filter} title="filter" />
          </ShowButtonsBar>
          <div style={{ display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'flex-start',
            // width: '100%' 
          }}
          > 
            {search && 
              <div>
              </div>}
            {filter && 
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                  <Dropdown
                    title='years'
                    list={yearsArray}
                    onClick={showYearsDropdownHandler}
                    dropdownOpen={yearsDropdown}
                    yearClick={yearSelectorHandler}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  {yearsToDisplay.map(year => 
                    <ShowButton onClick={()=>{}} 
                      key={uuidv4()}
                      title={year} 
                      fontSize='14px'
                      color='#96873c'
                      backgroundColor='black'
                      position={{
                        top: '2px',
                        left: '1px',
                        }}
                    />
                  )}
                  {yearsToDisplay.length > 0 && 
                  <div 
                    // className={classes.buttonStyle}
                    onClick={resetYearHandler}
                    style={{fontSize: '14px',
                      color:'#96873c',
                      display: 'flex',
                      position: 'relative',
                      backgroundColor: '#212121',
                      width: '20px',
                      height: '20px',
                      justifyContent: 'center',
                      textAlign: 'center',
                      top: '8px',
                      left: '1px',
                    }}
                  > x </div>}
                </div>
              </div>
            }
          </div>
        </div>
        <ExpandCollapseBar onClick={{ expandAll,  collapseAll }}/>
      </div>
      
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
              }}
          >
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

