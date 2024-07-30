import React, { useState } from 'react';
import './NewsLetter.css';
import Swal from 'sweetalert2';

const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {

        const accessKey = "d335991d-0c14-4755-a90e-6ae2546f2d77";
        const apiUrl = "https://api.web3forms.com/submit";

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ access_key: accessKey, email })
        }).then(res => res.json());

        if (response.success) {
            Swal.fire({
                title: "Success!",
                text: "Subscription successful!",
                icon: "success"
            });
            setEmail(''); 
        } else {
            Swal.fire({
                title: "Error!",
                text: "Subscription failed!",
                icon: "error"
            });
        }
    };

    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers!</h1>
            <p>Subscribe to our newsletter and stay updated!</p>

            <div className='newsletter-input-container'>
                <input
                    type="email"
                    placeholder='Your Email'
                    value={email}
                    onChange={handleChange}
                    required
                />
                <button onClick={handleSubmit} type='submit'>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;
