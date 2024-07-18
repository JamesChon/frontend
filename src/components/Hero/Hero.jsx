import React from 'react'
import './Hero.css'
import performance_part from '../Assets/performance_part.png';
import arrow_icon from '../Assets/arrow.png';
import turbo from '../Assets/turbo.gif';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>New Arrivals</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>Performance</p>
                        <img src={turbo} alt="" />
                    </div>
                    <p>OEM</p>
                    <p>Specials</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={performance_part} alt="" />
            </div>
        </div>
    )
}

export default Hero
