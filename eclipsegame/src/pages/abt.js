import React from 'react';
import 'animate.css';
import './abt.css';
import wflog from './img/wflog.png';

function abt() {
  return (
    <div className='animate__animated animate__lightSpeedInLeft'><h1 className='abtt'>About Us</h1>
    <h1 className='wf'>We Formulate</h1>
    <p className='fpara'>
    Welcome to the Eclipse Engima, your gateway to a world of gaming<br></br> experiences inspired by the celestial wonders of eclipses. We are a <br></br>passionate team of game developers and astronomy enthusiasts dedicated<br></br> to bringing the magic of eclipses to your mobile device.
    </p>
    <p className="spara">
    Our goal is to provide you with a unique and immersive gaming experience that<br></br> revolves around the beauty and mystery of eclipses. We want to make learning<br></br> about eclipses fun and accessible to players of all ages while delivering<br></br> entertaining gameplay.
    </p>
    <img src={wflog} alt="wf" />
    </div>
  )
}

export default abt