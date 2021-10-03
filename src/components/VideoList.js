import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onSelectedVideo }) => {
  const renderedList = videos.map((video) => (
    <VideoItem onSelectedVideo={onSelectedVideo} video={video} />
  ))

  return <div className='ui relaxed divided list'>{renderedList}</div>
}

export default VideoList
