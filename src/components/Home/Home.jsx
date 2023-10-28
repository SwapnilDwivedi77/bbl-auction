import React from 'react'
import './home.css'
import logo from '../../assets/images/logo.png'
// import shuttle from '../../assets/images/shuttlecock.png'
import bn1 from '../../assets/images/banner-4.png'

import Lottie from 'react-lottie';

import animationData from '../../assets/banner.json';

const Heading = () => {
  return (
    <div className="heading">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">BBL 16</h1>
    </div>
  );
};

const Banner = () => {
  return(
    <div className="banner-container">
      <img src={bn1} alt="Logo"/>
    </div>
  )
}


function Home() {
  return (
    <div className="home-container">
    <Heading/>
    <Banner/>
    <div className="header">
      <div className="heading-box">
      <h1> <span> Welcome</span> to BBL Auction</h1>
      </div>
      <div className='subtext'>
      From seasoned veterans to rising stars, the BBL 16 Auction has something for everyone. Choose your players wisely watch them lead your team to victory.
    
      </div>

      <div style={{margin: '0 0 0 7%'}}>
      <h2 className="heading-2">Ready to <span>RUMBLE !</span></h2>
      <ul className="list">
        <li>
          {/* <img src={shuttle} alt="bullet" className="bullet" /> */}
          <span className="item-bold">30</span> Players to go under hammer
        </li>
        <li>
          {/* <img src={shuttle} alt="bullet" className="bullet" /> */}
          <span className="item-bold">6</span> Teams
        </li>
        <li>
          {/* <img src={shuttle}alt="bullet" className="bullet" /> */}
          <span className="item-bold">6</span> Total players in each team
        </li>
      </ul>
      </div>

      
      
      </div>
    </div>
  )
}

export default Home