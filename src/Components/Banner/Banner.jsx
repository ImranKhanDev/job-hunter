import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="banner">
                <div className="banner-content">
                    <h1>One Step Closer To Your <span className='text'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button>Get started</button>
                </div>
            </div>
            <div className="banner-img">
                <img src={'banner.png'} alt="" />
            </div>
        </div>
    );
};

export default Banner;