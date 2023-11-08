import React from 'react';
import './Category.css'
const Category = () => {
    return (
        <div className='service-container'>
            <div className='job'>
                <h1>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="service">
                <div className="service-content">
                    <img src={'/service.png'} alt="" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className="service-content">
                    <img src={'/service.png'} alt="" />
                    <h3>Creative Design</h3>
                    <p>100+ Jobs Available</p>
                </div>
                <div className="service-content">
                    <img src={'/service.png'} alt="" />
                    <h3>Account & Finance</h3>
                    <p>150  Jobs Available</p>
                </div>
                <div className="service-content">
                    <img src={'/service.png'} alt="" />
                    <h3>Engineering JOb</h3>
                    <p>224  Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default Category;