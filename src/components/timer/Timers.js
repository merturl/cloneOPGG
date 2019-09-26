import React from 'react';
import Timer from 'components/timer/Timer';
import './Timers.scss';
const Timers = React.memo(({ timers, onStartTimer, onRestartTimer, onAddSecond }) => (
  <div className='Timers'>
    {timers &&
      timers.map((timer) => {
        return (
          <Timer
            key={timer.id}
            id={timer.id}
            name={timer.name}
            isPlaying={timer.isPlaying}
            elapsedTime={timer.elapsedTime}
            timeDuration={timer.timeDuration}
            onStartTimer={onStartTimer}
            onRestartTimer={onRestartTimer}
            onAddSecond={onAddSecond}
          />
        );
      })}
  </div>
))

export default Timers;