import React from 'react';
import './JobsDetail.css'
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
import { saveJobApplication } from '../../utilities/localstorage';




const JobsDetail = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(jobb => jobb.id === idInt);
    // console.log(job);

    const handleApplyJob=()=> {
        saveJobApplication(idInt)
        toast('You have applied successfully')
    }
    <Toaster
        position="top-center"
        reverseOrder={false}
    />


    return (
        <div className='job-container'>
            <div className='title'>
                <h1>Jobs Details</h1>
                <br />
                <h1>{job.job_title}</h1>
            </div>

            <div className="description">
                <div className="job_desc">
                    <p><span>Job Description</span> : {job.job_description}</p>
                    <p><span>Job Responsibility :</span>
                        {job.job_responsibility}
                    </p>

                    <p><span>Educational Requirements </span></p>

                    <p> {job.educational_requirements}</p>

                    <p><span>Experiments</span>

                    </p>
                    <p>   {job.experiences}</p>
                    <Link to='/'>Back to Home</Link>
                </div>
                <div className="job-details">
                    <div className="job_details_content">
                        <h1 className='info'>Job Details</h1>
                        <hr className='hr' />
                        <p> <span>💰Salary</span> : ${job.salary} (Per Month)</p>

                        <p>💼<span>Job Title</span> : {job.job_title}</p>
                     

                        <h3 className='info'>Contact Information</h3>
                          <hr className='hr' />
                        <p> <span>📞Phone</span> : 0184679 00 00</p>

                        <p>📩<span>Email</span> : {job.job_title}</p>
                        <p>🏛<span>Address</span> : {job.job_title}</p>
                        <div><Toaster /></div>
                       
                        <button onClick={handleApplyJob} className='apply'>Apply now</button>
                        <ToastContainer />
                    </div>
                </div>
          
            </div>

        </div>
    );
};

export default JobsDetail;