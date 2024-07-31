import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width:200px;
  margin-bottom:90px;
  background-color: #041a45;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  border:1px solid #19398a;
  color:#fff;
`;

const Header = styled.div`
  background-color: #19398a;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 18px;
`;

const Body = styled.div`
  padding: 20px;
`;

const Skill = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SkillName = styled.div`
  width: 120px;
  font-size: 16px;
`;

const SkillLevel = styled.div`
  width: 160px;
  height: 10px;
  background-color: #eee;
  border-radius: 10px;
  overflow: hidden;
  margin-left: 20px;
`;

const SkillPercent = styled.div`
  background-color: #333;
  height: 100%;
`;

const SkillPercentNumber = styled.div`
  margin-left: 20px;
  font-size: 16px;
`;



const SkillsCard = ({team,getTeamPurse}) => {

    const getMaxBid = (team) => {

        let playersRemaining = 5 - team.players.length-1;
        
        
        let maxBidAllowed = getTeamPurse(team) - (playersRemaining)*9000;
        return maxBidAllowed;
    
    }
    return (
      <Card>
        <Header>{team.name}</Header>
        <Body>
          <Skill>
            <SkillName>Players to Buy</SkillName>
            
            <SkillPercentNumber>{5 - team.players.length}</SkillPercentNumber>
          </Skill>
          <Skill>
            <SkillName>Amount Left</SkillName>
            
            <SkillPercentNumber>{getTeamPurse(team)}</SkillPercentNumber>
          </Skill>
          <Skill>
            <SkillName>Max Bid Allowed</SkillName>
            
            <SkillPercentNumber>{getMaxBid(team)}</SkillPercentNumber>
          </Skill>
        </Body>
      </Card>
    );
  };
  
  export default SkillsCard;
  