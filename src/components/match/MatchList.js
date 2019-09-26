import React from 'react';
import './MatchList.scss';
import Match from './Match';

const MatchList = ({ matches, matchData }) => {
  return (
    <div className="match-list">
      {
        matches.map((match, i) =>
          (<Match
            key={i}
            champion={match.champion}
            gameId={match.gameId}
            lane={match.lane}
            platformId={match.platformId}
            queue={match.queue}
            role={match.role}
            season={match.season}
            timestamp={match.timestamp}>
          </Match>))
      }
    </div>
  )
}

export default MatchList;
