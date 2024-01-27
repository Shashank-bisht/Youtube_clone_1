import React from 'react'
import moment from 'moment'
const VideoLength = ({time}) => {
    const videoLengthInSeconds = moment().startOf("day").seconds(time).format("HH:mm:ss");
  return (
    <div className='absolute bottom-2 right-2 bg-black text-white text-xs px-1 rounded-md'>{videoLengthInSeconds}</div>
  )
}

export default VideoLength