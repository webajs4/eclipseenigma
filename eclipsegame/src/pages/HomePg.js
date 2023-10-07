import React from 'react';
import './homepg.css';
import RockPadam from './img/bro.svg';



function HomePg() {

  return (
    <div className='ellam'>
      <div className='gpy'>
        <img src={RockPadam} alt="hellorocket" />
        <div className='ezhuth'>
          <h2>Eclipse Engima</h2>
          <p>Lorem Ipsum is simply dummy text of the<br></br> printing and typesetting industry</p>
          <a href="https://www.google.com"><button className='player'>Play Now</button></a>
          <button className='player'>About Us</button>
        </div>
      </div>
    </div>
  )
}

export default HomePg;