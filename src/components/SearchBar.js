import { useState, forwardRef } from 'react'

const SearchBar = forwardRef(function SearchBar(props, ref) {
  const [input, setInput] = useState('');
  
  const setSearchBar = props.searchBar[1];
 
  function clearHandler() {
    setSearchBar('')
    props.displayListHandler(undefined, '')
    setInput('')
  }
  function clickInInputFieldHandler() {
    return 
  }
  function changeHandler(event) {
    filterResults(event.target.value)
    setInput(event.target.value)
  }
  function filterResults(search) {
    setSearchBar(search)
    props.displayListHandler(undefined, search)
  }

  return (
    <>
      <input 
        value={input}
        onClick={clickInInputFieldHandler}
        onChange={changeHandler}
        placeholder='Search here'
        style={{
          backgroundColor: '#dedede',
        }}
        />
      <button 
        onClick={clearHandler}
        style={{
          marginLeft: '5px'
        }}
      >
        Clear
      </button>
    </>
  )
})

export default SearchBar 