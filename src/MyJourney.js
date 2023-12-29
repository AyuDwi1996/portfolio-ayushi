import React from 'react';
import './MyJourney.css'; // Make sure to create a corresponding CSS file for styling
import vid from './video/Demo.mp4'
import { color, width } from '@mui/system';
import click from './images/click.png'
import { useMediaQuery } from 'react-responsive';
import car from './images/car.png';
import plane from './images/plane.png';
import map from './images/map.png'
import HikingIcon from '@mui/icons-material/Hiking';
const MyJourney = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    return (
        <>
            {isMobile ? (
                
                <div className="journey-container">

                    <div className='journey-heading'>
                        <img src={plane} alt="plane" style={{ width: '15%'}} />
                        <h1>Unveiling My Journey</h1>
                    </div>
                    <div className='journey-body'>
                        <div className='left-body'>
                            <div className='destination-heading'>
                                <h4 style={{margin:'2%'}}>Projects</h4>
                            </div>
                        </div>
                        <img src={map} alt="map" style={{ width: '30%', height: '100%', marginTop: '5%',marginLeft:'5%',marginRight: '5%',marginBottom:'0%' }} />
                        <div className='right-body'>
                            <div className='destination-heading'>
                                <h4 style={{margin:'2%'}}>Experience</h4>
                            </div>
                            <div className='destination-heading'>
                                <h4 style={{margin:'2%'}}>Hobbies</h4>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="journey-container">

                    <div className='journey-heading'>
                        <img src={plane} alt="plane" style={{ width: '10%', marginRight: '1%' }} />
                        <h1>Unveiling My Journey</h1>
                        <img src={car} alt="car" style={{ width: '10%', marginLeft: '1%' }} />
                    </div>
                    <div className='journey-body'>
                        <div className='left-body'>
                            <div className='destination-heading'>
                                <h4 style={{margin:'2%'}}>Personal Projects & Research</h4>
                                <p style={{margin:'2%', fontSize:'12px'}}>Click to discover my academic journey beyond the classroom</p>
                            </div>
                        </div>
                        <img src={map} alt="map" style={{ width: '30%', height: '100%', marginTop: '5%',marginLeft:'5%',marginRight: '5%',marginBottom:'0%' }} />
                        <div className='right-body'>
                            <div className='destination-heading'>
                                <h4 style={{margin:'2%'}}>Professional Pursuits</h4>
                                <p style={{margin:'2%', fontSize:'12px'}}>Click to explore the landscape of my professional journey</p>
                            </div>
                            <div className='destination-heading'>
                                <h4 style={{margin:'2%'}}>Hobbies and Passions</h4>
                                <p style={{margin:'2%', fontSize:'12px'}}>Click to see my creative side</p>
                            </div>
                        </div>
                    </div>
                </div>)}

        </>
    );
};

export default MyJourney;
