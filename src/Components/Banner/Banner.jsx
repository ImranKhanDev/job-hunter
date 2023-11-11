import React from 'react';
import './Banner.css'
import Fade  from 'react-reveal/LightSpeed';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom'
import ScrollAnimation from 'react-animate-on-scroll';
const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="banner">
                <div className="banner-content">
                    <Fade right>
                        <h1>One Step Closer To Your <span className='text'>Dream Job</span></h1>
                        
                           <p>
                                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                           </p>
                    </Fade>
                       
                    <Bounce left>
                        <button>Get started</button>
                        </Bounce>
                        
                        
                </div>
            </div>
            <div className="banner-img">
                <Zoom top>
                    <img src={'banner.png'} alt="" />
               </Zoom>
            </div>
        </div>
    );
};

export default Banner;