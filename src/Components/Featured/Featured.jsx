import React, { useEffect, useState } from 'react';
import './Featured.css'
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
import Jump from 'react-reveal/Jump';

const Featured = () => {
    // 
    const [jobs, setJobs] = useState([])
    const [load, setLoad] = useState(2)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [jobs])
    const loadMore = () => {
        setLoad(preValue => preValue + 2)
    }
    return (
        <div className='featured-container'>
            <Jump>
                <div className="featured">
                    <h1>Featured Jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future  </p>
                </div>
            </Jump>

        
                <div className="all-jobs">
                    {
                        jobs.slice(0, load).map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
            
            <button className='load' onClick={loadMore}>Load more</button>
        </div>
    );
};

export default Featured;