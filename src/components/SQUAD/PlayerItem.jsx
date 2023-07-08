import React from 'react'
import { BASE_PRICE, CATEGORY_COLOR } from '../../constant';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faStar } from "@fortawesome/free-solid-svg-icons";

export const PlayerItem = ({ player, captain = false, row = false }) => {
    return (
      <>
        <div
          className="player-container"
          style={{ width: `${row ? "7%" : "15%"}` }}
        >
          <div className="player-image">
            <img src={player.profilePicture} />
          </div>
          <div
            className="player-tile"
            style={{ background: CATEGORY_COLOR[player.category] }}
          >
            <div className="name">{player.firstName}</div>
            <div className="price">
              ₹{" "}
              {captain
                ? 1.5 * BASE_PRICE[player.category]
                : player.soldPrice || BASE_PRICE[player.category]}
              {captain && (
                <div className="captain">
                  <FontAwesomeIcon icon={faStar} color={"#18193F"} />
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };