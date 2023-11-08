/* eslint-disable react/prop-types */
import React from 'react';
import './Job.css'
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className='job-container'>
            <div className="job-d">
                <div className="job-details">
                    <img src={logo} alt="" />
                    <p>{job_title}</p>
                    <p>{company_name}</p>
                    <div className="flex">

                        <div className='child'>
                            <button className='remote'>{remote_or_onsite}</button>
                            <button className='remote'>{job_type}</button>
                        </div>

                    </div>
                    <div className="flex flex-2">
                        <p>Location :{location}</p>
                        <p>${salary}</p>
                    </div>
                    <Link
                        to={`/job/${id}`}
                    >
                        <button className='view'> View details</button>
                    </Link>
                </div>
            </div>
        
            
           
        </div>
    );
};

export default Job;