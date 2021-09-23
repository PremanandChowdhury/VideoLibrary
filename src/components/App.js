import React, { useState } from 'react'
import SearchBar from './SearchBar'
import youtube from './apis/youtube'

const App = () => {
  const [videos, setVideos] = useState([])

  const onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    })
    setVideos(response.data.items)
  }

  return (
    <div className='ui container'>
      <SearchBar onSearchSubmit={onSearchSubmit} />
    </div>
  )
}

export default App
