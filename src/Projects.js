import React from 'react';
import './Projects.css'; // Make sure to create a corresponding CSS file for styling
import vid from './video/Demo.mp4'
import { color, width } from '@mui/system';
import click from './images/click.png'
import { useMediaQuery } from 'react-responsive';
const Projects = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    return (
        <>
        {isMobile ? (
                <div className="projects-container-mobile">
                         
                <div className='video-container'><video src={vid} autoPlay controls muted style={{ objectFit: 'contain', width: '100%', height: '100%', display: "block" }}>
                    Your browser does not support the video tag.
                </video></div>
                <div className='project-description'>
                    <div className='project-heading'><h2 className="main-heading">Scholar at Center For Student Research</h2></div>
                    <p>Got selected as a scholar at the Center for Student Research, California State University East Bay, in one of the most competitive positions. Awarded a scholarship for outstanding achievements. Demonstrated expertise in computer vision and object detection, along with full-stack development principles and system architecture. Implemented YOLO object detection on a Robomaster Tello Edu drone. Designed and developed the back-end system using Python and openCV to process live streams from the drone. Engineered a robust system architecture, emphasizing efficiency, scalability, and maintainability for optimal performance. This project not only showcases hands-on experience with emerging technologies but also a profound understanding of computer vision, object detection, full-stack development principles, and system architecture design</p>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <p>
                            <span style={{ color: '#FFC928', fontWeight: 'bold' }}>Python</span>,{' '}
                            <span style={{ color: '#8028FF', fontWeight: 'bold' }}>OpenCV</span>,{' '}
                            <span style={{ color: '#FF9028', fontWeight: 'bold' }}>Object Detection</span>,{' '}
                            <span style={{ color: '#28FF89', fontWeight: 'bold' }}>System Architecture</span>,{' '}
                            <span style={{ color: '#FF2828', fontWeight: 'bold' }}>Full Stack Development Principles</span>
                        </p>
                    </div>
                </div>
                
            </div>
            ) : (
        <div className="projects-container">
            <div className='project-description'>
                <div className='project-heading'><h2 className="main-heading">Scholar at Center For Student Research</h2></div>
                <p>Got selected as a scholar at the Center for Student Research, California State University East Bay, in one of the most competitive positions. Awarded a scholarship for outstanding achievements. Demonstrated expertise in computer vision and object detection, along with full-stack development principles and system architecture. Implemented YOLO object detection on a Robomaster Tello Edu drone. Designed and developed the back-end system using Python and openCV to process live streams from the drone. Engineered a robust system architecture, emphasizing efficiency, scalability, and maintainability for optimal performance. This project not only showcases hands-on experience with emerging technologies but also a profound understanding of computer vision, object detection, full-stack development principles, and system architecture design</p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p>
                        <span style={{ color: '#FFC928', fontWeight: 'bold' }}>Python</span>,{' '}
                        <span style={{ color: '#8028FF', fontWeight: 'bold' }}>OpenCV</span>,{' '}
                        <span style={{ color: '#FF9028', fontWeight: 'bold' }}>Object Detection</span>,{' '}
                        <span style={{ color: '#28FF89', fontWeight: 'bold' }}>System Architecture</span>,{' '}
                        <span style={{ color: '#FF2828', fontWeight: 'bold' }}>Full Stack Development Principles</span>
                    </p>
                </div>
            </div>
            
                
            <div className='video-container'><video src={vid} autoPlay controls muted style={{ objectFit: 'contain', width: '100%', height: '100%', display: "block" }}>
                Your browser does not support the video tag.
            </video></div>
        </div>)}

        </>
            );
};

export default Projects;
