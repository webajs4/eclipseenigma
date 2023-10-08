import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import RockPadam from './img/bro.svg';
import './homepg.css';

function HomePg() {
  return (
    <div className='ellam'>
      <div className='gpy'>
        <img src={RockPadam} alt="hellorocket" />
        <div className='ezhuth'>
          <h2>Eclipse Engima</h2>
          <p>Explore the Cosmos : Conquer Solar and <br></br> Lunar Mysteries!</p>
          {/* Use Link component to navigate to the "Play" page */}
          <Link to="/play"><button className='player'>Play Now</button></Link>
          <Link to="/abt"><button className='player'>About Us</button></Link>
        </div>
      </div>
    </div>
  );
}

export default HomePg;
