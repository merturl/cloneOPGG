import React from 'react';
import './Match.scss';
import { championNameById } from "../../lib/champion";
import { timeStampToDuration } from "../../lib/date";

const Match = ({ champion, gameId, lane, platformId, queue, role, season, timestamp }) => {
  const championName = championNameById(champion);
  const src = require(`static/images/champion/${championName}.png`);
  const duration = timeStampToDuration(timestamp);
  return (
     <div className='match'>
     <div className="game-stats">
     <div className="game-lane">{lane}</div>
      <div className="game-tpyes">{role}</div>
      <div className="game-timestamp">{duration}</div>
      <div className="game-bar"></div>
      <div className="game-result"></div>
     </div>
     <div className="game-setting-info">
       <img className="champion-image" src={src} alt="ChampionLogo" />
       <div className="summoner-spell"></div>
       <div className="summoner-runes"></div>
       <div className="champion-name"></div>
     </div>
     <div className="kda">{gameId}</div>
     <div className="stats">{lane}</div>
     <div className="items">{platformId}</div>
     <div className="followplayers-names">{queue}</div>
     <div className="stats-button">{role}</div>
     <div>{season}</div>
   </div>
  )
}

export default Match;
