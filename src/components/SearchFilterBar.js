import ShowButton from '../components/ShowButton';
import ShowButtonsBar from '../components/ShowButtonsBar';
import classes from '../pages/main.module.css'

function SearchFilterBar(props) {

  const [search, searchHandler] = props.search;
  const [filter, filterHandler] = props.filter;

  return (
    <div className={classes.pubBar}>
          <ShowButtonsBar>
            <ShowButton onClick={searchHandler} clicked={search} title="search" />
            <ShowButton onClick={filterHandler} clicked={filter} title="filter" />
          </ShowButtonsBar>
          <div style={{ display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'flex-start',
            }}
          > 
            {props.children}
          </div>
    </div>
  )
}

export default SearchFilterBar 