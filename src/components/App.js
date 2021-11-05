import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import youtube from './apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    onSearchSubmit('tom and jerry')
  }, [])

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
    setSelectedVideo(response.data.items[0])
  }

  // const onSelectedVideo = (video) => {
  //   setSelectedVideo(video)
  //   return video
  // }

  return (
    <div className='ui container'>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList onSelectedVideo={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
