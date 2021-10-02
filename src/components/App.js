import React, { useState } from 'react'
import SearchBar from './SearchBar'
import youtube from './apis/youtube'
import VideoList from './VideoList'

const App = () => {
  const [videos, setVideos] = useState([])

  /**
   * Here the youtube is:
   *  -> https://www.googleapis.com/youtube/v3
   * 
   * Full URL will be
   *  -> https://www.googleapis.com/youtube/v3/search?q=term
   */

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
      <VideoList videos={videos} />
    </div>
  )
}

export default App
