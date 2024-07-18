import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Welcome to DRFT, your premier destination for top-quality automotive parts and accessories. At DRFT, we are passionate about all things automotive, offering a comprehensive selection of performance parts, OEM replacements, and specialty items to meet the needs of car enthusiasts and professionals alike. Whether you're looking to enhance your vehicle's performance, restore it to its original condition, or customize it for a unique look, we have the right parts for you.</p>
                <p>But DRFT is more than just a parts supplier. We are a thriving community of automotive enthusiasts who share a common love for cars and driving. Our community members come together to share their experiences, exchange tips and advice, and celebrate their passion for automobiles. Join us to connect with fellow enthusiasts, participate in events, and stay updated on the latest trends and innovations in the automotive world.</p>
                <p>At DRFT, we are committed to providing exceptional products and fostering a vibrant community that supports and inspires car lovers everywhere. Drive with passion, drive with DRFT.</p>
            </div>
        </div>
    )
}

export default DescriptionBox
