import React from 'react';
import './Match.scss';

import bronze from 'static/images/emblems/Emblem_Bronze.png'
const Match = ({ champion, gameId, lane, platformId, queue, role, season, timestamp }) => {
  return (
    <div className='match'>
      <div className='tier'>
        <img src={bronze} alt="ChampionLogo" />;
      </div>
      <div>{champion}</div>
      <div>{gameId}</div>
      <div>{lane}</div>
      <div>{platformId}</div>
      <div>{queue}</div>
      <div>{role}</div>
      <div>{season}</div>
      <div>{timestamp}</div>
    </div>
  )
}

export default Match;
