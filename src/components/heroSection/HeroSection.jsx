import React from 'react'
import '../../App.css'
import './heroSection.css'
import { Button } from '../buttons/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Your Next Adventure</h1>
      <p>The Time Is Now!</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          START NOW
        </Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH TRAILER <FontAwesomeIcon icon={['fas', 'play-circle']} />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection