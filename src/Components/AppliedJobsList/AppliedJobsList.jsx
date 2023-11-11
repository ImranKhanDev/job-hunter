import React from 'react';
import './AppliedJobsList.css'
import { Link } from 'react-router-dom';

const AppliedJobsList = ({ job }) => {
    // console.log(job);
    return (
    <div className="joblist-container">
            <div className='list-container'>
                <img src={job.logo} alt="LOGO" className='brand-logo' />
                <div className="details flex-col">
                    <div>
                        <p>{job.job_title}</p>
                        <p>{job.company_name}</p>
                    </div>
                    <div className='btn-grp'>
                        <button className='remote'>{job.remote_or_onsite}</button>
                        <button className='remote'>{job.job_type}</button>
                    </div>
                    <div className='location-salary'>
                        <p>{job.location}</p>
                        <p>{job.salary}</p>
                    </div>
                </div>
                
            </div>
            <div className="btn view">
                <button>View details</button>
            </div>

           
    </div>
    );
};

export default AppliedJobsList;