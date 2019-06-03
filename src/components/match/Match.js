import React from 'react';
import './Match.scss';
import { championNameById } from "../../lib/champion";

const Match = ({ champion, gameId, lane, platformId, queue, role, season, timestamp }) => {
  const championName = championNameById(champion);
  console.log(champion);
  console.log(championName);
  const src = require(`static/images/champion/${championName}.png`);
  return (
    <div className='match'>
      <div className='tier'>
        <img src={src} alt="ChampionLogo" />
      </div>
      <div className="champion">{champion}</div>
      <div className="gameId">{gameId}</div>
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
