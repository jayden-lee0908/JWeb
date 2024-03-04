import React from 'react';
import'../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4'
        autoPlay loop muted playsinline/>
      <h1>Jayden's Web</h1>
      <p>Scroll to find more!</p>
      <div className="hero-btns">
        <Button 
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
            GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--Primary'
          buttonSize='btn--large'>
          Favorate song <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
