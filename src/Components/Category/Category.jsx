import React from 'react';
import './Category.css'
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';
const Category = () => {
    return (
        <div className='service-container'>
            <div className='job'>
                <Roll left>
                    <h1>Job Category List</h1>
                </Roll>
                <Roll right>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </Roll>
            </div>
            <div className="service">
                <Zoom left>
                    <div className="service-content">

                        <img src={'/service.png'} alt="" />
                        <h3>Account & Finance</h3>
                        <p>300 Jobs Available</p>

                    </div>
                </Zoom>
                <Flip right>
                    <div className="service-content">
                        <img src={'/service.png'} alt="" />
                        <h3>Creative Design</h3>
                        <p>100+ Jobs Available</p>
                    </div>
                </Flip>
                <Rotate bottom>
                    <div className="service-content">
                        <img src={'/service.png'} alt="" />
                        <h3>Account & Finance</h3>
                        <p>150  Jobs Available</p>
                    </div>
                </Rotate>
                <Slide top>
                    <div className="service-content">
                        <img src={'/service.png'} alt="" />
                        <h3>Engineering JOb</h3>
                        <p>224  Jobs Available</p>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Category;