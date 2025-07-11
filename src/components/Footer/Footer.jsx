import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="GoAnnapurna Logo" className="footer-logo" />
                    <p>We’d love to hear from you! Whether you have a question, feedback, or need support, the GoAnnapurna team is here to help.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="Facebook" />
                        <img src={assets.twitter_icon} alt="Twitter" />
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 931-343-7008</li>
                        <li>contact@GoAnnapurna.com</li>
                    </ul>
                </div>
            </div>

            <hr />
            <p className="footer-copyright">
                Copyright 2025 © GoAnnapurna.com – All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
