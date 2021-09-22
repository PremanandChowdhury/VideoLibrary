import { useState } from 'react'

const SearchBar = () => {
  const [term, setTerm] = useState('')

  const handleSearch = (e) => {
    setTerm(e.target.value)
  }

  const onSubmitForm = (e) => {
    e.preventDefault()

    // TODO: Call callback from parent component
  }

  return (
    <>
      <div className='ui segment search-bar'>
        <form className='ui form' onSubmit={onSubmitForm}>
          <div class='field ui right aligned category search'>
            <label htmlFor='#search-bar'>Video Search</label>
            <div class='ui icon input'>
              <input
                type='text'
                id='search-bar'
                value={term}
                onChange={handleSearch}
                placeholder='Video Search...'
              />
              <i class='search icon'></i>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default SearchBar
