import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import footer_logo from '../Assets/logo1.gif'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import twitter_icon from '../Assets/twitter_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <Link to='/'>
                    <img src={footer_logo} alt="DRFT Logo" />
                </Link>
                <p>DRFT</p>
            </div>
            <ul className='footer-links'>
                <li><Link to='/company'>Company</Link></li>
                <li><Link to='/offices'>Offices</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/forum'>Forum</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="Instagram" />
                </div>
                <div className="footer-social-container">
                    <img src={twitter_icon} alt="Twitter" />
                </div>
                <div className="footer-social-container">
                    <img src={whatsapp_icon} alt="WhatsApp" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
