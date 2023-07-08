import React from 'react';
import { PLAYER_CATEGORY } from '../../constant';
import { isEmpty } from '../../crud';
import { PlayerItem } from './PlayerItem';

const UnsoldPlayerList = ({ unSoldPlayers }) => {
  const sortedUnSoldPlayers = [...unSoldPlayers].sort((a, b) =>
    a.firstName > b.firstName ? 1 : -1
  );

  const renderPlayerItemsByCategory = (category) => {
    return sortedUnSoldPlayers.map((player, i) => {
      if (player.category === category) {
        return <PlayerItem key={i} player={player} row={true} />;
      }
      return null;
    });
  };

  return (
    <div className="">
      <h1>Upcoming Players</h1>
      <div className="player-list unsold-list">
        {!isEmpty(unSoldPlayers) && renderPlayerItemsByCategory(PLAYER_CATEGORY.MARQUEE)}
        {!isEmpty(unSoldPlayers) && renderPlayerItemsByCategory(PLAYER_CATEGORY.CHAMPION)}
        {!isEmpty(unSoldPlayers) && renderPlayerItemsByCategory(PLAYER_CATEGORY.ELITE)}
        {!isEmpty(unSoldPlayers) && renderPlayerItemsByCategory(PLAYER_CATEGORY.CHALLENGER)}
      </div>
    </div>
  );
};

export default UnsoldPlayerList;
