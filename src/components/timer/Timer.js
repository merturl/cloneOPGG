import React, { useState } from 'react';
import './Timer.scss';
const Timer = React.memo(({ id, name, isPlaying, elapsedTime, timeDuration, onStartTimer, onRestartTimer, onAddSecond }) => {
  const [preIsPlaying, setPreIsPlaying] = useState(isPlaying);
  const [timeInterval, setTimeInterval] = useState(null);
  if (!preIsPlaying && isPlaying) {
    const newTimeInterval = setInterval(() => {
      onAddSecond(id);
    }, 1000);
    setPreIsPlaying(isPlaying);
    setTimeInterval(newTimeInterval);
  } else if (preIsPlaying && !isPlaying) {
    clearInterval(timeInterval);
    setPreIsPlaying(isPlaying);
    setTimeInterval(null);
  }

  return (
    <div className='Timer'>
      <div className='name'>{name}</div>
      <div className='time'>{timeDuration - elapsedTime}</div>
      {!isPlaying ? (<button onClick={(e) => onStartTimer(e, id)}>Play</button>) : null}
      {isPlaying ? (<button onClick={(e) => onRestartTimer(e, id)}>Stop</button>) : null}
    </div>
  )
})

export default Timer;
