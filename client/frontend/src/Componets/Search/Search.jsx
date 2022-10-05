import React from 'react'
import { TextInput, Icon } from 'react-materialize'
import './search.css'
const Search = () => {
  return (
    <div className='search__data'>
      <TextInput
        icon={<Icon>search</Icon>}
        id="userserach"
        label="Search"
      />
    </div>
  )
}

export default Search