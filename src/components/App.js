import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from './hooks/useVideos'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('tom and jerry')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  // setSelectedVideo(response.data.items[0])

  /**
   * Here the youtube is:
   *  -> https://www.googleapis.com/youtube/v3
   *
   * Full URL will be
   *  -> https://www.googleapis.com/youtube/v3/search?q=term
   */

  // const onSelectedVideo = (video) => {
  //   setSelectedVideo(video)
  //   return video
  // }

  return (
    <div className='ui container'>
      <SearchBar onSearchSubmit={search} />
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
