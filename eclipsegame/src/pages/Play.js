import React from 'react';
 // Import Link from react-router-dom
import './play.css';
import 'animate.css';
import Lunar from './img/lunar.png';
import Solar from './img/solar.png';


function Play() {
  return (
    <div className='animate__animated animate__bounceInDown'>
      
      <h1 className='thala'>ECLIPSES UNVEILED</h1>
      <center><p className='vaal'>Welcome to an exciting celestial journey<br></br> where you'll explore the fascinating<br></br> phenomena of Solar and Lunar eclipses. </p></center>
      <div className='ecl'>
        <div className="eclit">
        <a href='https://webajs4.github.io/solareclipse/lunarint.html'><img src={Lunar} alt='lunar'></img></a>
        <p className='soll'>Lunar Eclipse</p>
        </div>
        {/* {next} */}
        <div className="eclit">
        <a href='https://webajs4.github.io/solareclipse/solarint.html'><img src={Solar} alt='solar'></img></a>
        <p className='soll'>Solar Eclipse</p>
        </div>
      </div>
      </div>
  )
}

export default Play