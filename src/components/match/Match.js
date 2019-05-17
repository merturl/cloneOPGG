import React from 'react';
import './Match.scss';
import bronze from 'static/images/emblems/Emblem_Bronze.png'
const Match = ({ champion, gameId, lane, platformId, queue, role, season, timestamp }) => {
  return (
    <div className='match'>
        {champion}
        <div className='tier'>
          <img src={bronze} alt="Logo" />;
        </div>
    </div>
  )
}

export default Match;
