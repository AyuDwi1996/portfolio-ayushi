// Header for the website
import React from 'react';
import './Header.css';
import profilePicture from './images/dp.jpg'
import title from './images/ayushi_title.png'
import title_mobile from './images/title_mobile.png'
import logo from './images/logo_ayushi.png'
import { useMediaQuery } from 'react-responsive';
const Header = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    return (
        <header className="header-container">

            {isMobile ? (
                <div class="mobile-display">
                    <div className="profile-picture-container">
                        <img src={logo} alt="Flower" className="flower-image-mobile" />
                        <img src={profilePicture} alt="Profile" className="profile-picture" />
                    </div>
                    <div >
                        <img src={title_mobile} alt="Ayushi Dwivedi" className="title" />
                        <p className="title">A Dynamic Professional with Love for both Code & Canvas</p>
                    </div>
                </div>
            ) : (
                <>
                    <div className="profile-picture-container">
                        <img src={logo} alt="Flower" className="flower-image" />
                        <img src={profilePicture} alt="Profile" className="profile-picture" />
                    </div>
                    <div className="name-title-container">
                        <img src={title} alt="Ayushi Dwivedi" className="title" />
                    </div>
                </>
            )
            }

        </header >
    );
};

export default Header;
