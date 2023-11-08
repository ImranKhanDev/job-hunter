import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../utilities/localstorage';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs,setAppliedJobs] = useState([])
    const [displayJobs,setDisplayJobs] = useState([])

    useEffect(()=> {
        const storedJobs= getStoredJobApplication()
        if(jobs.length > 0) {
            const jobsApplied = []
            for(const id of storedJobs) {
                const job = jobs.find(job=>job.id === id) 
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
    },[jobs])


    return (
        <div className='applied-jobs'>
            <h2> Jobs I applied {appliedJobs.length}</h2>


            <ul>
             {   displayJobs.map(job=> <li key={job.id}>
                <span>{job.job_title}</span>
                </li>)}
            </ul>
        </div>
    );
};

export default AppliedJobs;