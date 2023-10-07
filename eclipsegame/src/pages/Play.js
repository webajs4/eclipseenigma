import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './play.css';
import 'animate.css';
import Lunar from './img/lunar.png';
import Solar from './img/solar.png';


function Play() {
  return (
    <div className='animate__animated animate__bounceInDown'>
      
      <h1 className='thala'>HEADING</h1>
      <center><p className='vaal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></center>
      <div className='ecl'>
        <div className="eclit">
        <img src={Lunar} alt='lunar'></img>
        <p>Lunar Eclipse</p>
        </div>
        {/* {next} */}
        <div className="eclit">
        <a href='https://www.google.com'><img src={Solar} alt='solar'></img></a>
        <p>Solar Eclipse</p>
        </div>
      </div>
      </div>
  )
}

export default Play