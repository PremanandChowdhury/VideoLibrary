import React, { useState } from 'react'
import SearchBar from './SearchBar'
import youtube from './apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

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

  const onSelectedVideo = (video) => {
    setSelectedVideo(video)
    return video
  }

  return (
    <div className='ui container'>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <VideoDetail video={selectedVideo} />
      <VideoList onSelectedVideo={onSelectedVideo} videos={videos} />
    </div>
  )
}

export default App
