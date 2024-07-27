import React from 'react'
import './AboutUs.css'
import about_banner from '../Assets/about_banner.gif'

const AboutUs = () => {
    return (
        <div className='about'>
            <div className="aboutTop" style={
                { backgroundImage: `url(${about_banner})` }
            }></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <hr />
                <p>DRFT is dedicated to providing the highest quality parts, service, and performance enhancements for your car. Based just outside of Las Vegas, DRFT serves automotive enthusiasts worldwide through our online parts sales and in-house performance builds and tuning.</p>
                <p>The journey of DRFT began in 2024 with a passion for cars and a vision to create a community for automotive enthusiasts. Leveraging the power of the internet, we quickly established ourselves as a leading provider of automotive parts. Starting with used parts, we expanded to include installations, repair and maintenance services, and a wide range of new performance parts.</p>
                <p>At DRFT, we pride ourselves on offering the largest selection of automotive parts and services. We are committed to answering the call of every new challenge and opportunity, continually expanding our inventory and capabilities. Our team is passionate about building some of the most powerful engines and performance vehicles on the road, with exciting developments always on the horizon.</p>
                <p>We provide expert advice, affordable parts and services, and intelligent performance upgrades and installations. DRFT was founded by enthusiasts who wanted to pursue their passion, and we remain true to our roots. We take great pride in our work and are grateful to our customers for allowing us to continue doing what we love.</p>
            </div>

        </div>
    )
}

export default AboutUs
