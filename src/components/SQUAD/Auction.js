import React, { useState } from "react";
import "./index.css";
import {
  isEmpty,
  readFromLocalStorage,
  readJSONFile,
  writeToLocalStorage,
} from "../../crud";
import ConfettiExplosion from "react-confetti-explosion";

import {
  faCircleUser,
  faGauge,
  faSackDollar,
  faGavel,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "./Dropdown";
import { BASE_PRICE, CATEGORY_COLOR } from "../../constant";

function Auction({
  teamsList,
  setTeamsList,
  unSoldPlayers,
  setUnSoldPlayers,
  soldPlayers,
  setSoldPlayers,
  filterPlayers,
  playersList,
}) {
  let unSoldList = unSoldPlayers.sort((a, b) => a.order - b.order);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [auctionPlayer, setAuctionPlayer] = useState(unSoldList[0]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [visibleConffeti, setVisibleConffeti] = useState(false);

  const handleNextPlayer = () => {
    let skippedPlayer = unSoldList.splice(0, 1)[0];
    skippedPlayer.order = unSoldList[unSoldList.length - 1].order + 1;
    unSoldList.push(skippedPlayer);
    console.log({unSoldList})
    setUnSoldPlayers(unSoldList);
    setCurrentPlayerIndex(0);
    setAuctionPlayer(unSoldList[0]);
  };

  const handleDropdownChange = (value) => {
    console.log(value);
    setSelectedTeam(value);
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    const offset = 0;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleSoldAction = () => {
    let updateTeamList = [...teamsList];

    console.log({teamsList,updateTeamList})
    let soldTeamIndex = updateTeamList.findIndex(
      (team) => team.key === selectedTeam
    );
    let soldPlayer = unSoldList.splice(0, 1)[0];
    let playerSold = auctionPlayer;
    console.log({soldPlayer,playerSold})
    let soldPrice = parseInt(document.getElementById("bid").value);

    playerSold["soldPrice"] = soldPrice;
    updateTeamList[soldTeamIndex].players.push(playerSold);
    console.log(teamsList, updateTeamList);
    setTeamsList(updateTeamList);
    // write updated team to local storage
    writeToLocalStorage("teamsData", updateTeamList);

    // handle sold players
    filterPlayers(playersList, updateTeamList);

    // scrollToElement("squad-list");

    document.getElementById("bid").value = "";
    handleNextPlayer()
  };

  const {
    firstName,
    lastName,
    category,
    playoRecentRating,
    playoRating,
    playoActivity,
    bblStats,
  } = auctionPlayer;

  return (
    <div className="auction-container">
      <h1>AUCTION</h1>

      {!isEmpty(auctionPlayer) && (
        <div className="player-data">
          <div className="player-profile-wrap">
            <div className="player-profile">
              <div
                className="pic-background"
                style={{ "background-color": CATEGORY_COLOR[category] }}
              ></div>
              <div className="profile-pic-holder">
                <img src={auctionPlayer.profilePicture} />
              </div>
            </div>
          </div>

          <div className="player-stats-section">
            <div style={{ display: "flex", "flex-direction": "row" }}>
              <div className="player-info" style={{}}>
                <div className="player-info-item">
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    size={"2x"}
                    color={"#18193F"}
                  />
                  <span>
                    {(
                      auctionPlayer.firstName +
                      " " +
                      auctionPlayer.lastName
                    ).toUpperCase()}
                  </span>
                </div>
                <div className="player-info-item">
                  <FontAwesomeIcon
                    icon={faGauge}
                    size={"2x"}
                    color={"#18193F"}
                  />
                  <span style={{ color: CATEGORY_COLOR[category] }}>
                    {auctionPlayer.category}
                  </span>
                </div>
                <div className="player-info-item">
                  <FontAwesomeIcon
                    icon={faSackDollar}
                    size={"2x"}
                    color={"#18193F"}
                  />
                  <span>{BASE_PRICE[category]}</span>
                </div>
              </div>
              {/* <div className="playo-image">
                <img src={playoRecentRating} />
                <img src={playoActivity} />
                <img src={playoRating} />
               
              </div> */}
            </div>
            <div
              className="info-row-2"
              style={{ display: "flex", "flex-direction": "row" }}
            >
              <div className="action-section">
                <div className="bid-input">
                  <input type="text" placeholder="Bid" id="bid" />
                </div>
                <div style={{ margin: "20px 0 0 0 " }}>
                  <Dropdown
                    handleDropdownChange={handleDropdownChange}
                    teamsList={teamsList}
                  />
                </div>

                <div style={{ display: "flex", "flex-direction": "row" }}>
                  <button className="btn" onClick={() => handleSoldAction()}>
                    <FontAwesomeIcon icon={faGavel} size={"3x"} />
                  </button>

                  <button className="btn" onClick={() => handleNextPlayer()}>
                    <FontAwesomeIcon icon={faForward} size={"3x"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Auction;
