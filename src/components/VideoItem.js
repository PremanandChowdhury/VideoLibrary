import React from 'react'

const VideoItem = ({ video }) => {
  return (
    <div>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <p>{video.snippet.title}</p>
    </div>
  )
}

export default VideoItem
