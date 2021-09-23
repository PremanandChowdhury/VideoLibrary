import React, { useState } from 'react'

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('')

  const handleSearch = (e) => {
    setTerm(e.target.value)
  }

  const onSubmitForm = (e) => {
    e.preventDefault()

    onSearchSubmit(term)
  }

  return (
    <div className='ui segment search-bar'>
      <form className='ui form' onSubmit={onSubmitForm}>
        <div className='field ui right aligned category search'>
          <label htmlFor='#search-bar'>Video Search</label>
          <div className='ui icon input'>
            <input
              type='text'
              id='search-bar'
              value={term}
              onChange={handleSearch}
              placeholder='Video Search...'
            />
            <i className='search icon'></i>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
