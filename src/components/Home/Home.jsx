import React from 'react'
import './home.css'
import logo from '../../assets/images/logo.png'

const teamLogo = [
  {
    name:'Bong Shuttlers',
    //logo: hyd
  },{
    name:'Delhi Dynamos',
    //logo: dli
  },{
  name:'Hyderabad Smashers',
  //logo: hyd
},
{
  name:'Mewar Royals',
  //logo: mwr
},{
  name:'Lucknawi Giants',
  //logo: gudg
},]

const Heading = () => {
  return (
    <div className="heading">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">BADDIES MAY'24 LEAGUE | <span style={{fontSize:"34px"}}>25<sup>th</sup> Edition </span></h1>
    </div>
  );
};

const TeamLogo = () => {
return (  <>
    {teamLogo.map(team => 
      <div className='team-item'>
      <div >
        <div class='team-logo'>
        {/* <img src={team.logo} /> */}
        </div>
      
      <div style={{textAlign:'center'}}>{team.name}</div>
      </div>
    </div>
    )}
    
  </> )
}


function Home() {
  return (
    <div className="home-container">
    <Heading/>
    </div>
  )
}

export default Home