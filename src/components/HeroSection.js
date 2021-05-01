import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection(){
    return(
        <div className='hero-container'>
          <video src='/videos/video-2.mp4'
           autoPlay loop muted/>  
        <h1 className='one'>Welcome to ATM</h1>
           <h2>HITACHI Inspire the Nest</h2>
          <p>At-Telangapada,Po-Gadakharad
        ,Dist-Puri,
        Pin code:752019</p>
      

        </div>

        
    )
}
export default HeroSection;