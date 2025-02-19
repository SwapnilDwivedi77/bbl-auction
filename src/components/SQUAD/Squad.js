import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import section from "../../assets/images/section.png";
import Auction from "./Auction";
import {
  isEmpty,
  readFromLocalStorage,
  readJSONFile,
  writeToLocalStorage,
} from "../../crud";
import {
  BASE_PRICE,
  CAPTAIN_COST_FACTOR,
  CATEGORY_COLOR,
  PLAYER_CATEGORY,
  TOTAL_PURSE,
} from "../../constant";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faStar } from "@fortawesome/free-solid-svg-icons";
import { PlayerItem } from "./PlayerItem";
import UnsoldPlayerList from "./UnsoldPlayer";
import { styled } from "styled-components";
import TeamCard from "./TeamData";



const getTeamPurse = (team) => {
  
  let remainingAmount = TOTAL_PURSE + parseInt(team.balanceAmount);
  remainingAmount -= CAPTAIN_COST_FACTOR[team.captain.category] * BASE_PRICE[team.captain.category];
  !isEmpty(team.players) &&
    team.players.forEach(
      (player) => (remainingAmount -= parseInt(player.soldPrice))
    );
  return remainingAmount;
};

const TeamDataWrapper = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-around;
margin: 15px 20px 60px -40px;`

const SquadItem = ({ team }) => {
  return (
    <>
      <div className="squad-item-container">
        <div className="squad-item-header">
          <div className="squad-name">{team.name} </div>
          <span className="squad-name" style={{ "font-weight": "normal",fontSize:'20px',color:'#fff' }}>{`(${
            team?.players.length + 1
          }/6)`}</span>
          <div className="squad-purse">₹ {getTeamPurse(team)}</div>
        </div>
        <div className="player-list">
          <PlayerItem player={team.captain} captain={true} />
          {team.players.map((player, i) => (
            <PlayerItem key={i} player={player} />
          ))}
        </div>
      </div>
    </>
  );
};


const Wrapper = styled.div`
display:flex;
flex-direction:row;
`
const LeftSection = styled.div`
flex:.3
`
const RightSection = styled.div`
flex:.7
`

function Squad() {
  const [playersList, setPlayersList] = useState([]);
  const [teamsList, setTeamsList] = useState([]);
  const [soldPlayers, setSoldPlayers] = useState([]);
  const [unSoldPlayers, setUnSoldPlayers] = useState([]);

  //console.log("teamList", teamsList);

  async function fetchPlayers() {
    try {
      const data = await readJSONFile("./data/playersData.json");
      return data;
    } catch (error) {
      //console.error(error);
      // handle error
    }
  }
  async function fetchTeamData() {
    try {
      const data = await readJSONFile("./data/teamList.json");
      console.log(data)
      return data;
    } catch (error) {
      //console.error(error);
      // handle error
    }
  }

  function updateUnsoldPlayers(list) {
    //console.log({ list });
    list = list.sort((a, b) => a.order - b.order);
    setUnSoldPlayers(list);
    writeToLocalStorage("unsoldPlayers", list);
  }
  function updateSoldPlayers(list) {
    setSoldPlayers(list);
    writeToLocalStorage("soldPlayers", list);
  }

  function filterPlayers(players, teamsData) {
    //console.log("FILTER FUNCTION CALLED", players, teamsData);
    let playersList = players;
    let sold = [];
    let unsold = [];
    !isEmpty(teamsData) &&
      teamsData.forEach((team) => {
        sold = [...sold, ...team.players];
      });
    unsold = playersList.filter((player) =>
      sold.every((p) => p.firstName !== player.firstName)
    );
    //console.log({ sold, unsold });
    updateUnsoldPlayers(unsold);
    updateSoldPlayers(sold);
  }
  useEffect(() => {
    let players = [];
    let teamsData = readFromLocalStorage("teamsData");
    if (!teamsData) {
      fetchTeamData().then((res) => {
        teamsData = res;
        writeToLocalStorage("teamsData", res);
      });
    }
    fetchPlayers().then((res) => {
      players = res;
      setPlayersList(res);
      filterPlayers(players, teamsData);
    });
    setTeamsList(teamsData);
  }, []);

  return (
    <div className="squad-container">
      {/* <div className="squad-h1">SQUADS</div> */}
      <div className="squad-list" id="squad-list">
        {!isEmpty(teamsList) &&
          teamsList.map((team, i) => <SquadItem key={i} team={team} />)}
      </div>
      <img
        src={section}
        style={{
          width: "98%",
        }}
      />

     
      <Wrapper>
        <LeftSection>
      {!isEmpty(unSoldPlayers) && (
        <Auction
          teamsList={teamsList}
          setTeamsList={setTeamsList}
          unSoldPlayers={unSoldPlayers}
          setUnSoldPlayers={setUnSoldPlayers}
          soldPlayers={soldPlayers}
          filterPlayers={filterPlayers}
          playersList={playersList}
        />
      )}
      </LeftSection>
      <RightSection>

      

      {!isEmpty(unSoldPlayers) && <UnsoldPlayerList unSoldPlayers={unSoldPlayers}/>}
      </RightSection>
      </Wrapper>
      <TeamDataWrapper>
      {!isEmpty(teamsList) &&
          teamsList.map((team, i) => <TeamCard key={i} team={team} getTeamPurse={getTeamPurse} />)}
     
      </TeamDataWrapper>
      
    </div>
  );
}

export default Squad;
