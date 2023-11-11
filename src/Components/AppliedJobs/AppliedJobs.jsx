import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../utilities/localstorage';
import AppliedJobsList from '../AppliedJobsList/AppliedJobsList';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    // console.log(jobs);
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])
    // console.log(appliedJobs);
    useEffect(() => {
        const storedJobs = getStoredJobApplication()
        if (jobs.length > 0) {
            const jobsApplied = []
            for (const id of storedJobs) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
    }, [jobs])


    return (
        <div className='applied-jobs'>

            <div className="title">
                <h1>Applied Jobs</h1>
                <Link to='/'>
                    <p>Go to back</p>
                </Link>
            </div>

         <div className="job-list">
                <ul>
                    {displayJobs.map(job => 
                     <AppliedJobsList job={job} key={job.id}></AppliedJobsList>)
                 }
                </ul>
         </div>
        </div>
    );
};

export default AppliedJobs;